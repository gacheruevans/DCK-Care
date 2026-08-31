"use client";

import Link from "next/link";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--neutral-300)", color: "var(--neutral-300)" }}>
      {/* Main Footer */}
      <div className="container-dck" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block" aria-label="DCK Care Ltd — Home">
              <Image
                src="/dck-logosmall.png"
                alt="DCK Care Ltd logo"
                width={160}
                height={83}
                style={{ height: "64px", width: "auto", maxHeight: "64px" }}
                priority
              />
            </Link>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--neutral-400)" }}>
              {SITE.tagline}. Providing professional home care with dignity and compassion.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { label: "Facebook", url: "https://www.facebook.com/dckcareltd/", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { label: "Twitter", url: "https://x.com/dckcare", icon: <><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></> },
                { label: "LinkedIn", url: "https://www.linkedin.com/company/dck-care-ltd", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
              ].map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
                  style={{ background: "transparent", color: "#fff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--neutral-400)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: "var(--primary)" }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.filter(l => !("children" in l)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:pl-1"
                    style={{ color: "var(--neutral-400)", transition: "all var(--transition-fast)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--secondary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--neutral-400)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: "var(--primary)" }}>Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm transition-colors"
                    style={{ color: "var(--neutral-400)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--secondary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--neutral-400)"; }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--secondary)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--secondary-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--secondary)"; }}
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: "var(--primary)" }}>Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 group">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5" style={{ background: "transparent" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <div>
                    <span className="block text-sm font-medium" style={{ color: "var(--secondary-dark)" }}>Call Us - {SITE.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 group">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5" style={{ background: "transparent" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </span>
                  <div>
                    <span className="block text-sm font-medium" style={{ color: "var(--secondary-dark)" }}>{SITE.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5" style={{ background: "transparent" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <div>
                    <span className="block text-sm font-medium" style={{ color: "var(--secondary-dark)" }}>{SITE.address}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid var(--neutral-800)" }}>
        <div className="container-dck flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs transition-colors" style={{ color: "var(--neutral-500)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--neutral-300)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--neutral-500)"; }}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs transition-colors" style={{ color: "var(--neutral-500)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--neutral-300)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--neutral-500)"; }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
}
