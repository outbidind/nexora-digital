import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <SiteHeader />

      <section className="relative border-b border-white/10 px-6 py-24 lg:py-32">
        <div className="absolute right-0 top-0 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Let&apos;s build something{" "}
            <span className="text-cyan-400">great together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Have a website idea or a project in mind? Tell us what you are
            planning. We would love to hear about it.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Start a Conversation
          </p>
          <h2 className="mt-5 text-4xl font-bold">
            Tell us about your project.
          </h2>
          <p className="mt-6 leading-8 text-gray-400">
            Share your requirements, goals and ideas. This demo contact form
            currently checks the submitted information in your browser.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827] p-6">
            <p className="text-sm font-semibold text-white">Nexora Digital</p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Independent digital agency concept
            </p>
            <p className="mt-4 text-xs text-cyan-400">
              Portfolio demonstration
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0c111d] p-6 sm:p-9">
          <h2 className="mb-8 text-2xl font-bold">Send us a message</h2>
          <ContactForm />
        </div>
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
