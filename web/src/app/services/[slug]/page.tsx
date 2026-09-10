import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { SERVICES, SITE } from "@/lib/constants";

// Generate static params for all service pages
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description.slice(0, 160),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        image="/services_shared_bg.jpg"
      />

      {/* Service Detail */}
      <section className="section-padding">
        <div className="container-dck">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollAnimator animation="fade-in-up">
                <div className="flex flex-col gap-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <span
                      className="flex items-center justify-center w-16 h-16 rounded-2xl text-3xl"
                      style={{ background: "var(--primary-50)" }}
                    >
                      {service.icon}
                    </span>
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                        Our Service
                      </span>
                      <h2 className="text-2xl" style={{ fontFamily: "var(--font-sans)", color: "var(--secondary-light)" }}>{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-lg" style={{ color: "var(--neutral-600)" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-sans)", color: "var(--primary)" }}>What&apos;s Included</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--neutral-50)" }}>
                          <span
                            className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                            style={{ background: "var(--primary)", color: "#fff" }}
                          >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollAnimator animation="fade-in-up" delay={200}>
                <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                  {/* Contact Card */}
                  <div
                    className="p-6 rounded-2xl flex flex-col gap-4"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    <h3 className="text-lg font-semibold text-white" style={{ color: "var(--neutral-white)" }}>Interested in this service?</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Get in touch with our team to discuss how we can help you or your loved one.
                    </p>
                    <Link href="/contact" className="btn btn-secondary w-full justify-center">
                      Contact Us
                    </Link>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="btn w-full justify-center"
                      style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      {SITE.phone}
                    </a>
                  </div>

                  {/* All Services Quick Links */}
                  <div
                    className="p-6 rounded-2xl"
                    style={{ background: "var(--neutral-50)", border: "1px solid var(--neutral-200)" }}
                  >
                    <h4 className="text-base font-semibold mb-3">All Services</h4>
                    <div className="flex flex-col gap-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors"
                          style={{
                            color: s.slug === service.slug ? "var(--primary)" : "var(--neutral-600)",
                            background: s.slug === service.slug ? "var(--primary-50)" : "transparent",
                            fontWeight: s.slug === service.slug ? 600 : 400,
                          }}
                        >
                          <span>{s.icon}</span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding" style={{ background: "var(--neutral-50)", paddingTop: "3rem" }}>
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <h2 className="text-center mb-10" style={{ fontFamily: "var(--font-sans)", color: "var(--primary)" }}>You May Also Be Interested In</h2>
          </ScrollAnimator>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <ScrollAnimator key={s.slug} animation="fade-in-up" delay={i * 100}>
                <Link href={`/services/${s.slug}`} className="card group block h-full">
                  <div className="p-6 flex flex-col gap-3 h-full">
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="text-lg font-semibold group-hover:text-[color:var(--primary)] transition-colors" style={{ fontFamily: "var(--font-sans)", color: "var(--secondary-light)" }}>
                      {s.title}
                    </h3>
                    <p className="text-md flex-1" style={{ color: "var(--neutral-600)" }}>
                      {s.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: "var(--primary)" }}>
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
    </>
  );
}
