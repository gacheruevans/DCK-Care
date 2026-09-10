import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import ContactForm from "@/components/contact/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DCK Care Ltd for professional home care services in Nottingham. Call us on 0115 989 9122 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch and let's discuss how we can help."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        image="/contact_us.jpg"
        imageClassName="object-[center_90%]"
      />

      <section className="section-padding">
        <div className="container-dck">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimator animation="fade-in-up">
                <div className="flex flex-col gap-4 mb-8">
                  <h2 style={{ color: "var(--secondary-light)" }} >Send Us a Message</h2>
                  <p style={{ color: "var(--neutral-600)" }}>
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </ScrollAnimator>
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <ScrollAnimator animation="fade-in-up" delay={200}>
                <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                  {/* Phone */}
                  <div
                    className="p-6 rounded-2xl flex items-start gap-4"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-white mb-1" style={{ color: "var(--neutral-white)" }}>Call Us</h3>
                      <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-lg font-bold text-white hover:underline" style={{ color: "var(--neutral-white)" }}>
                        {SITE.phone}
                      </a>
                      <p className="text-xs mt-1" style={{ color: "#ffffffb3" }}>
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    className="p-6 rounded-2xl flex items-start gap-4"
                    style={{ background: "var(--neutral-50)", border: "1px solid var(--neutral-200)" }}
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ background: "var(--primary-50)" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--secondary-light)" }} >Email Us</h3>
                      <a href={`mailto:${SITE.email}`} className="text-sm font-medium hover:underline" style={{ color: "var(--primary)" }}>
                        {SITE.email}
                      </a>
                      <p className="text-xs mt-1" style={{ color: "var(--neutral-500)" }}>
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    className="p-6 rounded-2xl flex items-start gap-4"
                    style={{ background: "var(--neutral-50)", border: "1px solid var(--neutral-200)" }}
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ background: "var(--primary-50)" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--secondary-light)" }} >Location</h3>
                      <p className="text-sm" style={{ color: "var(--neutral-600)" }}>
                        {SITE.address}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--neutral-500)" }}>
                        Serving the greater Nottingham area
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ paddingBottom: "0" }}>
        <div
          className="w-full"
          style={{ height: "400px", background: "var(--neutral-100)" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=35+Wollaton+Rd,+Beeston,+Nottingham+NG9+2NG,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DCK Care Ltd — 35 Wollaton Rd, Beeston, Nottingham NG9 2NG, UK"
          />
        </div>
      </section>
    </>
  );
}
