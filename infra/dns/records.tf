# ─────────────────── GitHub Pages (the website) ───────────────────

# Apex → GitHub Pages anycast IPs.
resource "aws_route53_record" "apex_a" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = var.apex_domain
  type    = "A"
  ttl     = 300
  records = var.github_pages_a_records
}

# www → the org's github.io (GitHub serves the apex from here).
resource "aws_route53_record" "www_cname" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = "www.${var.apex_domain}"
  type    = "CNAME"
  ttl     = 300
  records = [var.pages_cname_target]
}

# ─────────────────── Migadu mail (see docs/email-setup.md) ───────────────────

resource "aws_route53_record" "mx" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = var.apex_domain
  type    = "MX"
  ttl     = 3600
  records = [
    "10 aspmx1.migadu.com",
    "20 aspmx2.migadu.com",
  ]
}

# Apex TXT: SPF, Migadu domain-ownership verification, TikTok for
# Developers domain verification (social publisher app, 2026-11-06; covers
# jaredhoward.com and subdomains such as social.jaredhoward.com), and Google
# Search Console domain verification (2026-11-06; Google's OAuth branding
# review needs the consent screen's authorised domain verified there).
resource "aws_route53_record" "apex_txt" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = var.apex_domain
  type    = "TXT"
  ttl     = 3600
  records = [
    "v=spf1 include:spf.migadu.com -all",
    "hosted-email-verify=xckbrxib",
    "tiktok-developers-site-verification=3AXHoP8pkSYeas1jTdxjSFP8uuIOgKHM",
    "google-site-verification=GjLhO1Sp6xjpQ5G09U5pyy087Jk7f2CK67PccVCA8iY",
  ]
}

resource "aws_route53_record" "dmarc" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = "_dmarc.${var.apex_domain}"
  type    = "TXT"
  ttl     = 3600
  records = ["v=DMARC1; p=none; rua=mailto:postmaster@${var.apex_domain}"]
}

# Migadu DKIM — three published selectors, all CNAME into migadu.com.
resource "aws_route53_record" "dkim" {
  for_each = toset(["key1", "key2", "key3"])

  zone_id = aws_route53_zone.apex.zone_id
  name    = "${each.key}._domainkey.${var.apex_domain}"
  type    = "CNAME"
  ttl     = 3600
  records = ["${each.key}.${var.apex_domain}._domainkey.migadu.com"]
}

# ─────────────────── Child-zone delegation ───────────────────

# disag.jaredhoward.com is a separate Route 53 zone in project-disag's
# own account. This NS record is the delegation pointer.
resource "aws_route53_record" "disag_ns" {
  zone_id = aws_route53_zone.apex.zone_id
  name    = "disag.${var.apex_domain}"
  type    = "NS"
  ttl     = 300
  records = var.disag_delegation_ns
}
