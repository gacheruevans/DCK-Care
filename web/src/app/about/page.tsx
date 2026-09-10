import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimator from "@/components/ui/ScrollAnimator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DCK Care Ltd, a professional home care provider in Nottingham delivering compassionate, person-centred care services with a dedicated team of trained professionals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Delivering comprehensive care solutions with unparalleled expertise."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        image="/about_us_hero.jpg"
      />

      {/* About Content */}
      <section className="section-padding">
        <div className="container-dck">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimator animation="slide-in-left">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src="/senior_home_aregiving.jpeg"
                  alt="DCK Care — Senior home caregiving and compassionate support"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Accent border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
                />
              </div>
            </ScrollAnimator>

            <ScrollAnimator animation="slide-in-right">
              <div className="flex flex-col gap-5">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                  About DCK Care
                </span>
                <h2>
                  Delivering{" "}
                  <span style={{ color: "var(--secondary-light)" }}>Comprehensive Care Solutions</span>{" "}
                  with Unparalleled Expertise
                </h2>
                <p style={{ color: "var(--neutral-600)" }}>
                  At DCK Care, we offer you the opportunity to embrace the life you deserve, whether
                  you&apos;re searching for the ideal support setting or comprehensive care for a loved one.
                  With us, it&apos;s about creating a supportive environment where you can explore life&apos;s
                  best moments, live on your terms, and pursue what brings you joy and purpose.
                </p>
                <p style={{ color: "var(--neutral-600)" }}>
                  At DCK Care Ltd, we pride ourselves on having a dedicated team of professionals with
                  extensive experience in providing exceptional care services. Our team is carefully
                  selected, thoroughly trained, and equipped with the skills and expertise needed to meet
                  a wide range of client needs with the highest standards of care.
                </p>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding" style={{ background: "var(--neutral-50)" }}>
        <div className="container-dck">
          <ScrollAnimator animation="fade-in-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                What Drives Us
              </span>
              <h2 className="mt-2" style={{ color: "var(--secondary-light)" }}>Our Mission, Vision & Values</h2>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To provide professional, compassionate home care services that empower individuals to live independently with dignity, comfort, and peace of mind.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                text: "To be the most trusted home care provider in Nottingham, known for exceptional quality, innovation in care delivery, and the positive impact we make in our community.",
              },
              {
                icon: "💎",
                title: "Our Values",
                text: "Compassion, dignity, respect, professionalism, and empowerment. These core values guide every interaction and decision we make in caring for our clients.",
              },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} animation="fade-in-up" delay={i * 100}>
                <div
                  className="p-8 rounded-2xl h-full flex flex-col gap-4 text-center items-center"
                  style={{ background: "#fff", border: "1px solid var(--neutral-200)" }}
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                    {item.text}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-dck">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimator animation="slide-in-left">
              <div className="flex flex-col gap-5">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                  Our Approach
                </span>
                <h2 style={{ color: "var(--secondary-light)" }}>Person-Centred Care That Makes a Difference</h2>
                <p style={{ color: "var(--neutral-600)" }}>
                  We believe that every individual deserves care that is tailored to their unique needs,
                  preferences, and aspirations. Our person-centred approach ensures that each client is at the
                  heart of their care plan.
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  {[
                    { title: "Positive Behaviour Support (PBS)", desc: "A proactive approach to understanding and addressing challenging behaviours with dignity and respect." },
                    { title: "Active Support", desc: "Encouraging individuals to participate in daily activities to the best of their abilities, promoting independence." },
                    { title: "Comprehensive Assessment", desc: "Thorough initial assessments to understand every aspect of a client's needs before care begins." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5" style={{ background: "var(--primary)", color: "#fff" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{item.title}</p>
                        <p className="text-sm mt-0.5" style={{ color: "var(--neutral-600)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            <ScrollAnimator animation="slide-in-right">
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4 w-full"
                style={{ aspectRatio: "1/1" }}
              >
                {/* Left Column: 3 stacked images */}
                <div className="grid grid-rows-3 gap-3 sm:gap-4 h-full">
                  <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-neutral-100">
                    <img
                      src="/personal_care_one.jpeg"
                      alt="Personalised Care Support"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-neutral-100">
                    <img
                      src="/personal_care_two.jpeg"
                      alt="Compassionate Care in Action"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-neutral-100">
                    <img
                      src="/personal_care_three.jpg"
                      alt="Dedicated Caregiver Assistance"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Right Column: 1 large feature image (spans 2 rows) + 1 bottom image */}
                <div className="grid grid-rows-3 gap-3 sm:gap-4 h-full">
                  <div className="row-span-2 relative rounded-2xl overflow-hidden group shadow-sm bg-neutral-100">
                    <img
                      src="/personal_care_four.jpeg"
                      alt="Person-Centred Care Excellence"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="row-span-1 relative rounded-2xl overflow-hidden group shadow-sm bg-neutral-100">
                    <img
                      src="/personal_care_five.jpg"
                      alt="Supporting Independence and Dignity"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimator>
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
                  Ready to Join Our Team?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  We&apos;re always looking for compassionate, dedicated individuals to join our growing team.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-1">
                  <Link href="/careers" className="btn btn-secondary btn-lg">View Openings</Link>
                  <Link href="/contact" className="btn btn-white btn-lg">Contact Us</Link>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}
