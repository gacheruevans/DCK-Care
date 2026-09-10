import Link from "next/link";
import {
  SITE,
  TESTIMONIALS,
  FAQ_ITEMS,
  TRUST_STATS,
} from "@/lib/constants";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import HeroSlider from "@/components/home/HeroSlider";

/* ========================================
   Hero Section
   ======================================== */
function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "85vh" }}
    >
      {/* Image Slider Background */}
      <HeroSlider />

      <div className="container-dck relative z-10 py-20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Badge */}
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              color: "var(--neutral-50)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
            }}
          >
            Delivering the <br />
            <span style={{ color: "var(--secondary-light)" }}>Care You Deserve</span>
          </h1>

          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            At DCK Care, we offer you the opportunity to embrace the life you deserve -            Whether you need home support, companionship, or specialist care. we&apos;re here for you,
            24 hours a day, 7 days a week.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/services" className="btn btn-secondary btn-lg">
              Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="btn btn-white btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ========================================
   Trust Bar
   ======================================== */
function TrustBar() {
  return (
    <section className="section-padding" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="container-dck">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, i) => (
            <ScrollAnimator key={stat.label} animation="fade-in-up" delay={i * 100}>
              <div className="text-center flex flex-col items-center gap-1.5 py-4">
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "var(--secondary-light)", fontFamily: "var(--font-sans)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.label}
                </span>
                <span className="text-xs" style={{ color: "var(--neutral-500)" }}>
                  {stat.description}
                </span>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ========================================
   About Preview
   ======================================== */
function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-dck">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimator animation="slide-in-left">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src="/here_to_serve.jpg"
                alt="DCK Care — Here to serve with compassion and expertise"
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
              <h2 style={{ color: "var(--secondary-light)" }}>Here to Serve With Compassion and Expertise</h2>
              <p style={{ color: "var(--neutral-600)" }}>
                At DCK Care Ltd, we are committed to delivering professional home care services that go
                beyond meeting basic needs. Our mission is to create a supportive environment where clients
                feel valued, empowered, and cared for.
              </p>
              <p style={{ color: "var(--neutral-600)" }}>
                By prioritising comfort, independence, and wellbeing, we enable individuals and their families
                to focus on enjoying life&apos;s meaningful moments with dignity and peace of mind.
              </p>

              {/* Feature list */}
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                {[
                  "Personalised care plans",
                  "Trained professionals",
                  "24/7 availability",
                  "Compassionate approach",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                      style={{ background: "var(--primary)", color: "#fff" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn btn-outline mt-2 self-start">
                Learn More About Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

/* ========================================
   Why Choose Us
   ======================================== */
function WhyChooseUs() {
  const features = [
    {
      icon: "❤️",
      title: "Compassionate Care",
      description:
        "Every member of our team brings genuine warmth and empathy to their work, treating each client with the kindness and respect they deserve.",
    },
    {
      icon: "🎓",
      title: "Professional Team",
      description:
        "Our caregivers are carefully selected, thoroughly trained, and equipped with the skills and expertise needed to deliver exceptional care.",
    },
    {
      icon: "📋",
      title: "Personalised Plans",
      description:
        "We create bespoke care plans tailored to each individual's unique needs, preferences, and goals — because no two people are the same.",
    },
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container-dck relative z-10">
        <ScrollAnimator animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--secondary-light)" }}>
              Why Choose Us
            </span>
            <h2 className="mt-2 text-white" style={{ color: "var(--neutral-50)" }}>What Makes DCK Care Different</h2>
            <p className="mt-4 text-md" style={{ color: "var(--neutral-white)" }}>
              We don&apos;t just provide care, we empower individuals to live with purpose, dignity, and joy.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollAnimator key={feature.title} animation="fade-in-up" delay={i * 120}>
              <div
                className="p-8 rounded-2xl text-center flex flex-col items-center gap-4 h-full transition-all hover:translate-y-[-4px]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold" style={{ color: "var(--secondary-light)" }}>{feature.title}</h3>
                <p className="leading-relaxed text-lg" style={{ color: "var(--secondary-light)" }}>
                  {feature.description}
                </p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   Testimonials
   ======================================== */
function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-dck">
        <ScrollAnimator animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-lg font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
              Testimonials
            </span>
            <h2 className="mt-2" style={{ color: "var(--secondary-light)" }}>What People Are Saying About Us</h2>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollAnimator key={testimonial.name} animation="fade-in-up" delay={i * 100}>
              <div
                className="p-6 rounded-2xl flex flex-col gap-4 h-full"
                style={{
                  background: "var(--neutral-50)",
                  border: "1px solid var(--neutral-200)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="var(--secondary)" stroke="var(--secondary)" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-md flex-1 italic leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3" style={{ borderTop: "1px solid var(--neutral-200)", paddingTop: "1rem" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   FAQ Section
   ======================================== */
function FAQSection() {
  return (
    <section className="section-padding" style={{ background: "var(--neutral-50)" }}>
      <div className="container-dck">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollAnimator animation="slide-in-left">
            <div className="flex flex-col gap-4 lg:sticky lg:top-32">
              <span className="text-sm font-semibold tracking-wider" style={{ color: "var(--primary)" }}>
                FAQs
              </span>
              <h2 style={{ color: "var(--secondary-light)" }}>Frequently Asked Questions</h2>
              <p style={{ color: "var(--neutral-600)" }}>
                Have a question? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for,
                feel free to contact us directly.
              </p>
              <Link href="/contact" className="btn btn-primary self-start mt-2">
                Contact Us
              </Link>
            </div>
          </ScrollAnimator>

          <ScrollAnimator animation="slide-in-right">
            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details
      className="group rounded-xl overflow-hidden"
      style={{ background: "#fff", border: "1px solid var(--neutral-200)" }}
    >
      <summary
        className="flex items-center justify-between gap-4 cursor-pointer p-5 text-sm font-semibold list-none transition-colors hover:bg-[var(--secondary-light)] hover:text-[var(--neutral-white)]"
      >
        {question}
        <span className="shrink-0 transition-transform group-open:rotate-45">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-hover)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" /><path d="M5 12h14" />
          </svg>
        </span>
      </summary>
      <div className="px-5 pb-5">
        <p className="text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          {answer}
        </p>
      </div>
    </details>
  );
}

/* ========================================
   CTA Banner
   ======================================== */
function CTABanner() {
  return (
    <section className="section-padding" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container-dck">
        <ScrollAnimator animation="fade-in-up">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12 text-center"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute rounded-full opacity-10"
              style={{ width: "300px", height: "300px", top: "-100px", right: "-50px", background: "var(--secondary)" }}
            />
            <div
              className="absolute rounded-full opacity-5"
              style={{ width: "200px", height: "200px", bottom: "-50px", left: "-30px", background: "#fff" }}
            />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5">
              <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--neutral-white)" }}>
                Need Care? Let&apos;s Talk.
              </h2>
              <p className="text-base" style={{ color: "rgba(255,255,255,0.8)" }}>
                Whether you need support for yourself or a loved one, our team is ready to help.
                Get in touch today for a free, no-obligation consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-1">
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Contact Us
                </Link>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn btn-white btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ========================================
   Partners Section
   ======================================== */
const PARTNERS = [
  { src: "/partner_one.png", alt: "Partner 1" },
  { src: "/partner_two.png", alt: "Partner 2" },
  { src: "/partner_three.png", alt: "Partner 3" },
  { src: "/partner_four.png", alt: "Partner 4" },
  { src: "/partner_five.png", alt: "Partner 5" },
  { src: "/partner_six.png", alt: "Partner 6" },
];

function PartnersSection() {
  return (
    <section className="section-padding" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="container-dck">
        <ScrollAnimator animation="fade-in-up">
          <div className="text-center mb-10">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--primary)" }}
            >
              Trusted By
            </span>
            <h2 className="mt-2" style={{ color: "var(--secondary-light)" }}>Our Partners</h2>
          </div>
        </ScrollAnimator>

        <ScrollAnimator animation="fade-in-up" delay={100}>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 items-center justify-items-center"
          >
            {PARTNERS.map((partner) => (
              <div
                key={partner.src}
                className="partner-logo flex items-center justify-center p-4 rounded-xl transition-all"
                style={{
                  width: "80%",
                  maxWidth: "180px",
                  aspectRatio: "3/2",
                }}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="partner-logo-img"
                />
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--neutral-200)", marginTop: "2rem" }}>
            <img
              src="/trusted_care.jpg"
              alt="Trusted Care"
              className="Trusted-care-img"
            />
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ========================================
   Homepage
   ======================================== */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <PartnersSection />
      <CTABanner />
    </>
  );
}
