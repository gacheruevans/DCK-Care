"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block" style={{ background: "var(--secondary-hover)", color: "#fff" }}>
        <div className="container-dck flex items-center justify-between" style={{ padding: "0.5rem var(--container-padding)", fontSize: "0.875rem" }}>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              {SITE.address}
            </span>
          </div>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call Us - {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            {SITE.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className="sticky top-0 z-50 transition-all"
        style={{
          background: isScrolled ? "#fffffff2" : "#ffffffff",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "var(--shadow-md)" : "none",
          borderBottom: isScrolled ? "none" : "1px solid var(--neutral-200)",
        }}
      >
        <nav className="container-dck flex items-center justify-between" style={{ height: "6rem" }} aria-label="Primary Navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="DCK Care Ltd — Home">
            <Image
              src="/dck-logosmall.png"
              alt="DCK Care Ltd logo"
              width={160}
              height={83}
              style={{ height: "64px", width: "auto", maxHeight: "64px" }}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const hasChildren = "children" in link && link.children;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? "var(--neutral-white)" : "var(--neutral-700)",
                      backgroundColor: isActive ? "var(--secondary-light)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--secondary-light)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--neutral-700)";
                    }}
                  >
                    {link.label}
                    {hasChildren && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform" style={{ transform: openDropdown === link.href ? "rotate(180deg)" : "rotate(0)" }}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && openDropdown === link.href && (
                    <div
                      className="absolute top-full left-0 min-w-[260px] py-2 rounded-xl"
                      style={{
                        background: "var(--neutral-white)",
                        boxShadow: "var(--shadow-xl)",
                        border: "1px solid var(--neutral-200)",
                        animation: "fadeIn 0.15s ease-out",
                      }}
                    >
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm transition-colors"
                            style={{
                              color: isChildActive ? "var(--primary)" : "var(--neutral-700)",
                              backgroundColor: isChildActive ? "var(--primary-50)" : "transparent",
                            }}
                            onMouseEnter={(e) => {
                              if (!isChildActive) {
                                e.currentTarget.style.backgroundColor = "var(--neutral-50)";
                                e.currentTarget.style.color = "var(--secondary-light)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isChildActive) {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "var(--neutral-700)";
                              }
                            }}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex btn btn-primary btn-sm"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <span
              className="block w-6 h-0.5 rounded-full transition-all"
              style={{
                background: "var(--neutral-900)",
                transform: isMobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 rounded-full transition-all"
              style={{
                background: "var(--neutral-900)",
                opacity: isMobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 rounded-full transition-all"
              style={{
                background: "var(--neutral-900)",
                transform: isMobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className="fixed top-0 right-0 h-full w-[300px] z-50 lg:hidden transition-transform overflow-y-auto"
        style={{
          background: "#fff",
          boxShadow: "var(--shadow-xl)",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          transitionDuration: "300ms",
        }}
      >
        <div className="flex items-center justify-between p-4" style={{ borderBottom: "1px solid var(--neutral-200)" }}>
          <span className="font-semibold" style={{ color: "var(--neutral-900)" }}>Menu</span>
          <button onClick={() => setIsMobileOpen(false)} aria-label="Close menu" className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        <div className="p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const hasChildren = "children" in link && link.children;

            return (
              <div key={link.href}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    className="flex-1 py-3 px-3 rounded-lg text-base font-medium transition-colors"
                    style={{
                      color: isActive ? "var(--primary)" : "var(--neutral-800)",
                      backgroundColor: isActive ? "var(--primary-50)" : "transparent",
                    }}
                    onClick={() => !hasChildren && setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                      className="p-3"
                      aria-label={`Expand ${link.label} submenu`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform" style={{ transform: openDropdown === link.href ? "rotate(180deg)" : "rotate(0)" }}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                {hasChildren && openDropdown === link.href && (
                  <div className="ml-3 pl-3 flex flex-col gap-0.5" style={{ borderLeft: "2px solid var(--primary-100)" }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2.5 px-3 rounded-lg text-sm transition-colors"
                        style={{ color: pathname === child.href ? "var(--primary)" : "var(--neutral-600)" }}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="p-4" style={{ borderTop: "1px solid var(--neutral-200)" }}>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn btn-primary w-full justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call {SITE.phone}
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
