import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Brand & Business",
    category: "Business Website",
    description: "A modern business website concept with a clean layout, clear messaging and professional visual identity.",
    gradient: "from-blue-950 to-slate-800",
    accent: "bg-blue-500",
    tag: "Corporate",
  },
  {
    number: "02",
    title: "Taste & Table",
    category: "Restaurant Website",
    description: "A restaurant website concept featuring menu highlights, food imagery and an inviting dining experience.",
    gradient: "from-orange-950 to-stone-800",
    accent: "bg-orange-500",
    tag: "Hospitality",
  },
  {
    number: "03",
    title: "Modern Living",
    category: "Real Estate Website",
    description: "A property website concept with structured listing cards, clear property information and enquiry-focused layouts.",
    gradient: "from-emerald-950 to-slate-800",
    accent: "bg-emerald-500",
    tag: "Real Estate",
  },
  {
    number: "04",
    title: "Urban Market",
    category: "E-commerce Website",
    description: "An online store concept with product presentation, category browsing and a clean shopping interface.",
    gradient: "from-purple-950 to-slate-800",
    accent: "bg-purple-500",
    tag: "Online Store",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <SiteHeader />
      <section className="relative border-b border-white/10 px-6 py-24 lg:py-32">
        <div className="absolute right-0 top-0 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Our Creative Work
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Selected work.{" "}
            <span className="text-cyan-400">Creative thinking.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Explore a collection of website design and development concepts
            showcasing different industries, layouts and digital experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Project Collection
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Explore our concepts.
            </h2>
          </div>
          <p className="text-sm text-gray-500">04 Featured Concepts</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-4 transition duration-300 group-hover:-translate-y-1`}>
                <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <div className="ml-3 h-3 flex-1 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
                    <div className="flex flex-col justify-center">
                      <div className={`h-2 w-12 rounded-full ${project.accent}`} />
                      <div className="mt-4 h-4 w-full rounded bg-slate-800" />
                      <div className="mt-2 h-4 w-4/5 rounded bg-slate-800" />
                      <div className="mt-3 h-2 w-full rounded bg-slate-300" />
                      <div className="mt-2 h-2 w-3/4 rounded bg-slate-300" />
                      <div className={`mt-5 h-7 w-24 rounded-full ${project.accent}`} />
                    </div>
                    <div className={`flex min-h-32 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient}`}>
                      <span className="text-6xl font-black text-white">{project.number}</span>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-slate-200" />
                    <div className="h-12 rounded-lg bg-slate-200" />
                    <div className="h-12 rounded-lg bg-slate-200" />
                  </div>
                </div>
                <span className="absolute right-7 top-7 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                  {project.tag}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-cyan-400">
                  {project.category}
                </p>
                <span className="text-sm text-gray-500">{project.number}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-gray-400">
                {project.description}
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Design concept · Preview mockup
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c111d] px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Have a Project?
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black sm:text-6xl">
          Your idea could be our{" "}
          <span className="text-cyan-400">next creation.</span>
        </h2>
        <Link
          href="/#contact"
          className="mt-10 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white"
        >
          Start a Project ↗
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

