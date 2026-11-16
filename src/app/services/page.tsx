import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Design",
    description: "Modern, attractive and user-friendly website designs that communicate your brand and create a strong first impression.",
    features: ["Responsive layouts", "Modern UI design", "User-friendly navigation"],
  },
  {
    number: "02",
    title: "WordPress Development",
    description: "Flexible WordPress websites for businesses, creators and growing brands using practical, maintainable solutions.",
    features: ["Business websites", "Elementor websites", "Website customization"],
  },
  {
    number: "03",
    title: "Next.js Development",
    description: "Fast, modern web experiences built with Next.js and contemporary frontend technologies.",
    features: ["Modern React interfaces", "Responsive development", "Performance-focused builds"],
  },
  {
    number: "04",
    title: "E-commerce Websites",
    description: "Professional online store experiences that help customers discover products and navigate the buying journey.",
    features: ["Product layouts", "Shopping cart interfaces", "Storefront design"],
  },
  {
    number: "05",
    title: "Website Redesign",
    description: "Refresh an outdated website with a cleaner visual direction, improved structure and responsive layouts.",
    features: ["Visual improvements", "Mobile optimization", "Layout modernization"],
  },
  {
    number: "06",
    title: "Landing Page Design",
    description: "Focused landing pages designed to present an offer clearly and guide visitors towards a meaningful action.",
    features: ["Conversion-focused structure", "Clear calls to action", "Responsive sections"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <SiteHeader />
      <section className="relative border-b border-white/10 px-6 py-24 lg:py-32">
        <div className="absolute right-0 top-0 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            What We Offer
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Digital services for{" "}
            <span className="text-cyan-400">modern businesses.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            From thoughtful design to modern development, explore digital
            solutions created to help businesses build a stronger online presence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-400">
                  {service.number}
                </span>
                <span className="text-2xl text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <h2 className="mt-10 text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 min-h-24 leading-7 text-gray-400">
                {service.description}
              </p>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c111d] px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Start a Conversation
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black sm:text-6xl">
          Have a project in mind?{" "}
          <span className="text-cyan-400">Let&apos;s talk.</span>
        </h2>
        <Link
          href="/#contact"
          className="mt-10 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white"
        >
          Contact Us ↗
        </Link>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row lg:px-10">
          <Link href="/" className="font-black text-white">
            nexora<span className="text-cyan-400">.</span>
          </Link>
          <p>© 2026 Nexora Digital. Portfolio concept.</p>
        </div>
      </footer>
    </main>
  );
}

