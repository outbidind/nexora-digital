import SiteHeader from "@/components/SiteHeader";

const services = [
  { number: "01", title: "Web Design", description: "Beautiful, intuitive interfaces designed to turn visitors into customers." },
  { number: "02", title: "Web Development", description: "Fast, responsive and scalable digital experiences built for modern businesses." },
  { number: "03", title: "Digital Strategy", description: "Thoughtful digital solutions that help brands grow and stand out." },
];

const projects = [
  { number: "01", title: "Brand & Business", category: "Business Website", gradient: "from-blue-950 to-slate-800" },
  { number: "02", title: "Taste & Table", category: "Restaurant Website", gradient: "from-orange-950 to-stone-800" },
  { number: "03", title: "Modern Living", category: "Real Estate", gradient: "from-emerald-950 to-slate-800" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <SiteHeader />

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div className="absolute right-0 top-10 -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative z-10">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Independent Digital Agency</p>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            We build <span className="block text-cyan-400">digital</span> experiences.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
            We help ambitious businesses build their digital presence through thoughtful design, modern technology and creative ideas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-white">Explore Our Work ↗</a>
            <a href="#services" className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400">Our Services</a>
          </div>
          <div className="mt-16 flex gap-10 border-t border-white/10 pt-8">
            <div><p className="text-3xl font-bold">Creative</p><p className="mt-2 text-sm text-gray-500">Design thinking</p></div>
            <div><p className="text-3xl font-bold">Modern</p><p className="mt-2 text-sm text-gray-500">Web technology</p></div>
          </div>
        </div>

        <div className="relative z-10 flex min-h-[390px] items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 sm:h-96 sm:w-96" />
          <div className="absolute h-60 w-60 rounded-full border border-cyan-400/20 sm:h-80 sm:w-80" />
          <div className="relative flex h-64 w-64 rotate-[-8deg] items-center justify-center rounded-[3rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent shadow-2xl shadow-cyan-500/10 sm:h-80 sm:w-80">
            <div className="text-center">
              <span className="text-8xl font-black text-cyan-300">N</span>
              <p className="mt-3 text-xs font-bold tracking-[0.35em] text-gray-300">THINK DIGITAL</p>
            </div>
            <span className="absolute -right-5 top-10 rounded-xl border border-white/10 bg-[#151d2c] px-4 py-3 text-sm text-cyan-300">✦ Creative</span>
            <span className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#151d2c] px-4 py-3 text-sm text-white">↗ Innovation</span>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#0c111d]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">What We Do</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold sm:text-5xl">Our expertise.</h2>
            <p className="max-w-sm text-gray-400">Digital solutions designed around your business goals.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="rounded-2xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <p className="text-sm font-bold text-cyan-400">{service.number}</p>
                <h3 className="mt-12 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">{service.description}</p>
                <p className="mt-8 text-xl text-cyan-400">↗</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Selected Concepts</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ideas into experiences.</h2>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-4 transition duration-300 group-hover:scale-[1.02]`}>
                <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <div className="ml-3 h-3 flex-1 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
                    <div className="flex flex-col justify-center">
                      <div className="h-2 w-10 rounded-full bg-cyan-500" />
                      <div className="mt-3 h-3 w-full rounded bg-slate-800" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-slate-800" />
                      <div className="mt-2 h-2 w-full rounded bg-slate-300" />
                      <div className="mt-1 h-2 w-3/4 rounded bg-slate-300" />
                      <div className="mt-4 h-6 w-20 rounded-full bg-cyan-500" />
                    </div>
                    <div className="flex min-h-28 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-700">
                      <span className="text-4xl font-black text-white">{project.number}</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-md bg-slate-200" />
                    <div className="h-10 rounded-md bg-slate-200" />
                    <div className="h-10 rounded-md bg-slate-200" />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-cyan-400">{project.category}</p>
              <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">Portfolio concepts for demonstration purposes.</p>
      </section>

      <section id="about" className="bg-[#0c111d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">About Nexora</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Good ideas deserve great digital experiences.</h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg leading-9 text-gray-400">
              Nexora Digital is a creative agency concept focused on building modern, accessible and responsive digital experiences. We combine thoughtful design with practical technology to help businesses communicate better online.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Have a project in mind?</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          Let&apos;s create something <span className="text-cyan-400">meaningful.</span>
        </h2>
        <p className="mt-6 text-gray-400">Have an idea? Let&apos;s start a conversation.</p>
        <a href="mailto:hello@nexoradigital.example" className="mt-10 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white">
          Get In Touch ↗
        </a>
        <p className="mt-4 text-xs text-gray-500">Demo contact address — replace before launch.</p>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row lg:px-10">
          <p><span className="font-black text-white">nexora.</span> © 2026</p>
          <p>Designed with creativity. Built for the web.</p>
        </div>
      </footer>
    </main>
  );
}


