import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DCK Care Ltd — Delivering the Care You Deserve",
    template: "%s | DCK Care Ltd",
  },
  description:
    "DCK Care Ltd provides professional home care services in Nottingham, UK. We offer supported living, dementia care, homecare, companionship, post-surgical care, live-in care, and more.",
  keywords: [
    "home care",
    "care services",
    "Nottingham",
    "domiciliary care",
    "supported living",
    "dementia care",
    "live-in care",
    "DCK Care",
  ],
  openGraph: {
    title: "DCK Care Ltd — Delivering the Care You Deserve",
    description:
      "Professional home care services in Nottingham. Supported living, dementia care, homecare, companionship, and more.",
    url: "https://dckcareltd.co.uk",
    siteName: "DCK Care Ltd",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
