import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexora Digital | Web Design & Development",
    template: "%s | Nexora Digital",
  },
  description:
    "Nexora Digital creates modern, responsive and professional websites using WordPress, Elementor and Next.js.",
  keywords: [
    "Nexora Digital",
    "Web Design",
    "WordPress Development",
    "Elementor",
    "Next.js Development",
    "Website Design",
  ],
  openGraph: {
    title: "Nexora Digital | Web Design & Development",
    description:
      "Modern, responsive and professional website design and development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Digital | Web Design & Development",
    description:
      "Modern, responsive and professional website design and development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

