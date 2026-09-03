import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore DCK Care Ltd's range of professional home care services including supported living, dementia care, homecare, companionship, post-surgical care, live-in care, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive care solutions tailored to your unique needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 style={{ color: "var(--secondary-light)" }}>Discover Our Range of Care Services</h2>
              <p className="mt-4" style={{ color: "var(--neutral-600)" }}>
                At DCK Care Ltd, we offer a comprehensive suite of home care services designed to
                support individuals at every stage of their care journey.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollAnimator key={service.slug} animation="fade-in-up" delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card group block h-full"
                >
                  <div className="p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center justify-center w-14 h-14 rounded-xl text-2xl transition-transform group-hover:scale-110"
                        style={{ background: "var(--primary-50)" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-[color:var(--primary)] transition-colors" style={{ color: "var(--secondary-light)" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm flex-1" style={{ color: "var(--neutral-600)", lineHeight: "1.65" }}>
                      {service.shortDescription}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all group-hover:gap-2.5"
                      style={{ color: "var(--primary)" }}
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ background: "var(--neutral-50)" }}>
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                How It Works
              </span>
              <h2 className="mt-2">Getting Started Is Simple</h2>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Get in Touch", desc: "Contact us by phone or email. We'll discuss your needs and answer any questions you may have.", icon: "📞" },
              { step: "02", title: "Free Assessment", desc: "We conduct a thorough assessment to understand your unique requirements and create a personalised care plan.", icon: "📋" },
              { step: "03", title: "Care Begins", desc: "Your matched caregiver starts delivering professional, compassionate care tailored exactly to your needs.", icon: "💚" },
            ].map((item, i) => (
              <ScrollAnimator key={item.step} animation="fade-in-up" delay={i * 120}>
                <div className="text-center flex flex-col items-center gap-4">
                  <div className="relative">
                    <span className="text-5xl">{item.icon}</span>
                    <span
                      className="absolute -top-2 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "var(--secondary)", color: "#fff" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--neutral-600)" }}>{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div
              className="rounded-3xl px-8 py-14 sm:px-12 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
            >
              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5">
                <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--neutral-white)" }}>
                  Need Help Choosing the Right Service?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Our friendly team is here to guide you through your options and find the perfect care solution.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-1">
                  <Link href="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn btn-white btn-lg">
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}
