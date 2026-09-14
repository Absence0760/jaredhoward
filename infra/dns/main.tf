# DNS for jaredhoward.com — the apex public hosted zone for this
# account (the `jaredhoward` account). This zone is the root of the whole
# personal estate's DNS: it serves the GitHub Pages site, carries the
# Migadu mail records, and delegates disag.jaredhoward.com to
# project-disag's account.
#
# The zone + every record below pre-existed this Terraform and were
# manually managed. They were ADOPTED by import (one-shot import
# blocks, since retired) on 2026-07-10, not recreated — the live zone
# is now fully Terraform-managed. Getting a record definition wrong
# here breaks the live site, email, OR the disag delegation, so treat
# every apply as load-bearing (see docs/domain-setup.md).

provider "aws" {
  region = var.aws_region
  # Auth from the environment: AWS_PROFILE=jaredhoward, SSO-logged-in.
}

# ─────────────────── Hosted zone ───────────────────

resource "aws_route53_zone" "apex" {
  name = var.apex_domain

  # Matches the live zone (created by Route 53 Registrar at domain
  # purchase). The provider otherwise defaults this to "Managed by
  # Terraform", which would show as a change on the adoption plan.
  comment = "HostedZone created by Route53 Registrar"

  tags = merge(
    {
      Project   = "personal-website"
      Stack     = "dns"
      ManagedBy = "terraform"
    },
    var.tags,
  )

  # Destroying the hosted zone wipes the NS-delegation chain at the
  # registrar and orphans the disag child delegation. Recovery means
  # re-pointing NS at the registrar within the SOA TTL. prevent_destroy
  # forces a deliberate `terraform state rm` first.
  lifecycle {
    prevent_destroy = true
  }
}
