import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the DCK Care Ltd team. We're looking for compassionate, dedicated individuals to help deliver exceptional home care services in Nottingham.",
};

const BENEFITS = [
  {
    icon: "💷",
    title: "Competitive Pay",
    description: "We offer competitive rates that reflect the value and dedication of our team members.",
  },
  {
    icon: "📚",
    title: "Training & Development",
    description: "Continuous professional development opportunities, including NVQ qualifications and specialist training.",
  },
  {
    icon: "🕐",
    title: "Flexible Hours",
    description: "We work around your schedule — choose hours that fit your lifestyle and commitments.",
  },
  {
    icon: "🤗",
    title: "Supportive Team",
    description: "Join a friendly, supportive team where your contributions are valued and recognised.",
  },
  {
    icon: "🚀",
    title: "Career Progression",
    description: "Clear pathways for career advancement from carer to senior carer, team leader, and beyond.",
  },
  {
    icon: "🏥",
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every day — there's no more rewarding career.",
  },
];

const OPEN_POSITIONS = [
  {
    title: "Home Care Assistant",
    type: "Full-time / Part-time",
    location: "Nottingham & surrounding areas",
    description:
      "We are looking for compassionate and reliable Home Care Assistants to join our growing team. You will provide personal care, companionship, and practical support to clients in their own homes.",
    requirements: [
      "Genuine passion for caring for others",
      "Good communication skills",
      "Reliable and trustworthy",
      "Right to work in the UK",
      "DBS check (we can arrange this)",
    ],
  },
  {
    title: "Senior Care Worker",
    type: "Full-time",
    location: "Nottingham",
    description:
      "An experienced Senior Care Worker to supervise and mentor care staff, conduct assessments, and ensure the highest standards of care delivery across our client base.",
    requirements: [
      "NVQ Level 3 in Health & Social Care (or equivalent)",
      "Minimum 2 years care experience",
      "Leadership and mentoring skills",
      "Full UK driving licence",
      "Strong organisational abilities",
    ],
  },
  {
    title: "Live-in Carer",
    type: "Full-time (rotational)",
    location: "Nottingham & surrounding areas",
    description:
      "Dedicated Live-in Carers to provide 24-hour support to clients in their own homes. This role involves residing with the client and delivering comprehensive, person-centred care.",
    requirements: [
      "Previous care experience preferred",
      "Comfortable living in a client's home",
      "Patient and adaptable nature",
      "Excellent personal care skills",
      "Enhanced DBS check required",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Build a rewarding career in care. We're always looking for compassionate, dedicated individuals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--primary)" }}
              >
                Why Work With Us
              </span>
              <h2 className="mt-2">Benefits of Joining DCK Care</h2>
              <p className="mt-4" style={{ color: "var(--neutral-600)" }}>
                We believe that great care starts with a great team. That&apos;s why we invest in our
                people and create an environment where everyone can thrive.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <ScrollAnimator key={benefit.title} animation="fade-in-up" delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full flex flex-col gap-3 transition-all hover:translate-y-[-2px]"
                  style={{
                    background: "var(--neutral-50)",
                    border: "1px solid var(--neutral-200)",
                  }}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm" style={{ color: "var(--neutral-600)", lineHeight: "1.65" }}>
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding" style={{ background: "var(--neutral-50)" }}>
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--primary)" }}
              >
                Open Positions
              </span>
              <h2 className="mt-2">Current Opportunities</h2>
              <p className="mt-4" style={{ color: "var(--neutral-600)" }}>
                Explore our available roles below. Don&apos;t see the right fit? We&apos;re always happy
                to hear from talented individuals — send us your CV.
              </p>
            </div>
          </ScrollAnimator>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {OPEN_POSITIONS.map((position, i) => (
              <ScrollAnimator key={position.title} animation="fade-in-up" delay={i * 100}>
                <div
                  className="p-6 sm:p-8 rounded-2xl"
                  style={{ background: "#fff", border: "1px solid var(--neutral-200)" }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: "var(--primary-50)", color: "var(--primary)" }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {position.type}
                          </span>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: "var(--neutral-100)", color: "var(--neutral-600)" }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <a
                        href={`mailto:${SITE.email}?subject=Application: ${position.title}`}
                        className="btn btn-primary btn-sm shrink-0"
                      >
                        Apply Now
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm" style={{ color: "var(--neutral-600)", lineHeight: "1.65" }}>
                      {position.description}
                    </p>

                    {/* Requirements */}
                    <div>
                      <p className="text-sm font-semibold mb-2" style={{ color: "var(--neutral-800)" }}>
                        Requirements:
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {position.requirements.map((req) => (
                          <div key={req} className="flex items-start gap-2">
                            <span
                              className="flex items-center justify-center w-4 h-4 rounded-full shrink-0 mt-0.5"
                              style={{ background: "var(--primary)", color: "#fff" }}
                            >
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="text-sm" style={{ color: "var(--neutral-600)" }}>
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
              }}
            >
              <div
                className="absolute rounded-full opacity-10"
                style={{ width: "300px", height: "300px", top: "-100px", right: "-50px", background: "var(--secondary)" }}
              />
              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5">
                <h2
                  className="text-white"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                >
                  Don&apos;t See the Right Role?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  We&apos;re always interested in hearing from talented, caring individuals.
                  Send us your CV and we&apos;ll be in touch when a suitable position arises.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-1">
                  <a
                    href={`mailto:${SITE.email}?subject=Speculative Application`}
                    className="btn btn-secondary btn-lg"
                  >
                    Send Your CV
                  </a>
                  <Link href="/contact" className="btn btn-white btn-lg">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}
