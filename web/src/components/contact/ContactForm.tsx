"use client";

import { useState, type FormEvent } from "react";
import { SERVICES, SITE } from "@/lib/constants";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate submission — replace with actual API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  if (formState === "success") {
    return (
      <div
        className="p-8 rounded-2xl text-center flex flex-col items-center gap-4"
        style={{ background: "var(--primary-50)", border: "1px solid var(--primary-100)" }}
      >
        <span className="text-5xl">✅</span>
        <h3 className="text-xl font-semibold" style={{ color: "var(--primary-dark)" }}>
          Message Sent Successfully!
        </h3>
        <p style={{ color: "var(--neutral-600)" }}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="btn btn-outline mt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
            Full Name <span style={{ color: "var(--error)" }}>*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
            style={{
              background: "var(--neutral-50)",
              border: "1.5px solid var(--neutral-200)",
              color: "var(--neutral-900)",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--primary-50)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--neutral-200)"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
            Email Address <span style={{ color: "var(--error)" }}>*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
            style={{
              background: "var(--neutral-50)",
              border: "1.5px solid var(--neutral-200)",
              color: "var(--neutral-900)",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--primary-50)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--neutral-200)"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="07XXX XXXXXX"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
            style={{
              background: "var(--neutral-50)",
              border: "1.5px solid var(--neutral-200)",
              color: "var(--neutral-900)",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--primary-50)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--neutral-200)"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        {/* Service Interest */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
            Service of Interest
          </label>
          <select
            id="contact-service"
            name="service"
            className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
            style={{
              background: "var(--neutral-50)",
              border: "1.5px solid var(--neutral-200)",
              color: "var(--neutral-900)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2378716C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--primary-50)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--neutral-200)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / General Enquiry</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
          Your Message <span style={{ color: "var(--error)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your care needs..."
          className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-y"
          style={{
            background: "var(--neutral-50)",
            border: "1.5px solid var(--neutral-200)",
            color: "var(--neutral-900)",
            minHeight: "120px",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--primary-50)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "var(--neutral-200)"; e.currentTarget.style.boxShadow = "none"; }}
        />
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn btn-primary btn-lg self-start"
        style={{ opacity: formState === "submitting" ? 0.7 : 1 }}
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </>
        )}
      </button>
    </form>
  );
}
