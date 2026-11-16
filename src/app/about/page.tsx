import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Creative Thinking",
    description: "We approach every project with curiosity, fresh ideas and thoughtful design.",
  },
  {
    number: "02",
    title: "Quality First",
    description: "We focus on clean code, responsive layouts and details that matter.",
  },
  {
    number: "03",
    title: "Client Focus",
    description: "We believe good digital work starts with understanding business goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <SiteHeader />
      <section className="relative border-b border-white/10 px-6 py-24 lg:py-32">
        <div className="absolute right-0 top-0 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            About Nexora Digital
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            We turn ideas into{" "}
            <span className="text-cyan-400">digital experiences.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Nexora Digital is an independent creative agency concept focused
            on modern web design, thoughtful development and meaningful
            digital experiences for growing businesses.
          </p>

          <Link
            href="/#work"
            className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-white"
          >
            Explore Our Work ↗
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Who We Are
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            Design with purpose. Build with passion.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-gray-400">
          <p>
            We believe every business deserves a thoughtful and professional
            digital presence. Great websites should look beautiful, feel
            intuitive and work smoothly across devices.
          </p>
          <p>
            Our approach combines creative thinking with practical web
            technology to create experiences that are useful, accessible
            and easy to navigate.
          </p>
          <p>
            Nexora is a portfolio agency concept showcasing our approach
            to modern digital design and web development.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c111d]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            What Drives Us
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Our values.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <p className="text-sm font-bold text-cyan-400">
                  {value.number}
                </p>
                <h3 className="mt-12 text-2xl font-bold">{value.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Let's Work Together
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black sm:text-6xl">
          Have an idea? Let's make it{" "}
          <span className="text-cyan-400">happen.</span>
        </h2>
        <Link
          href="/#contact"
          className="mt-10 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white"
        >
          Get In Touch ↗
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

