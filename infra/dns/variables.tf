variable "aws_region" {
  description = "Primary region. Route 53 is global; this only sets the provider endpoint."
  type        = string
  default     = "us-east-1"
}

variable "apex_domain" {
  description = "The apex domain this account owns and serves."
  type        = string
  default     = "jaredhoward.com"
}

variable "github_pages_a_records" {
  description = "GitHub Pages apex A-record IPs. GitHub's published anycast set; change only if GitHub changes theirs (docs.github.com → 'Managing a custom domain')."
  type        = list(string)
  default = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
  ]
}

variable "pages_cname_target" {
  description = "GitHub Pages host the apex/www CNAME points at (the <org>.github.io for Absence0760)."
  type        = string
  default     = "absence0760.github.io"
}

variable "tags" {
  description = "Extra tags merged onto the hosted zone."
  type        = map(string)
  default     = {}
}
