# Bootstrap stack — creates the Terraform state bucket that the `dns`
# stack uses as its remote backend.
#
# Run ONCE per AWS account, with LOCAL state. After `terraform apply`,
# the `dns` stack's `backend.tf` already points at the bucket created
# here.
#
# State locking uses S3-native conditional writes (`use_lockfile =
# true` in dns/backend.tf) — supported since Terraform 1.10. No
# DynamoDB table is required.
#
# This stack is the ONLY one that uses local state; do NOT migrate its
# own state into the bucket it creates (chicken-and-egg). Its local
# state file is gitignored — losing it is fine: the bucket already
# exists, so a re-apply would no-op or `terraform import` re-adopts it.

provider "aws" {
  region = var.aws_region
  # Auth comes from the environment: AWS_PROFILE=jaredhoward,
  # SSO-logged-in.
}

# ─────────────────── State bucket ───────────────────

resource "aws_s3_bucket" "state" {
  bucket        = var.state_bucket_name
  force_destroy = false

  tags = {
    Project   = "personal-website"
    Stack     = "bootstrap"
    ManagedBy = "terraform"
  }

  # State-bucket destruction is catastrophic — the dns stack depends
  # on it for remote state. Forces a manual `terraform state rm`
  # before any destroy can succeed.
  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_public_access_block" "state" {
  bucket                  = aws_s3_bucket.state.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "state" {
  bucket = aws_s3_bucket.state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "state" {
  bucket = aws_s3_bucket.state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Versioning is mandatory for state safety, but every apply writes a
# new version. Expire non-current versions after 90 days (plenty to
# recover from a bad apply) and abort interrupted multipart uploads
# after 7 days.
resource "aws_s3_bucket_lifecycle_configuration" "state" {
  bucket = aws_s3_bucket.state.id
  rule {
    id     = "expire-noncurrent-versions"
    status = "Enabled"
    filter {}
    noncurrent_version_expiration {
      noncurrent_days = 90
    }
    abort_incomplete_multipart_upload {
      days_after_initiation = 7
    }
  }
}
