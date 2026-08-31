const stats = [
  ["10+", "Years Experience"],
  ["150+", "Projects Completed"],
  ["98%", "Client Satisfaction"],
];

const services = [
  "Architecture & Drawing",
  "Construction",
  "Interior Design",
  "Exterior Design",
  "Renovation",
  "Maintenance",
  "Pre-Construction",
];

const reasons = [
  ["01", "Experienced Team", "Skilled professionals focused on quality from concept to completion."],
  ["02", "Quality Workmanship", "Careful execution, dependable materials, and attention to detail."],
  ["03", "Timely Delivery", "Clear planning and disciplined project management keep work moving."],
  ["04", "Competitive Pricing", "Practical solutions designed around your budget and goals."],
];

const process = [
  ["01", "Consultation"],
  ["02", "Planning & Design"],
  ["03", "Cost Estimation"],
  ["04", "Construction"],
  ["05", "Final Delivery"],
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-sm font-bold uppercase tracking-[0.18em]">
            Garden of Messiah
            <span className="mt-1 block text-[9px] font-normal tracking-[0.28em] text-[var(--gold-dark)]">
              Building & Construction LTD
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {['Home', 'About Us', 'Services', 'Projects', 'Why Choose Us', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-[var(--gold-dark)]">
                {item}
              </a>
            ))}
          </nav>
          <a href="#quote" className="hidden rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[var(--gold-dark)] sm:block">
            Get a Free Quote
          </a>
          <button aria-label="Open menu" className="rounded border border-black/15 p-2 lg:hidden">
            <span className="block h-px w-5 bg-black" />
            <span className="mt-1.5 block h-px w-5 bg-black" />
            <span className="mt-1.5 block h-px w-5 bg-black" />
          </button>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.48),rgba(0,0,0,.25))]" />
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="relative max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Building with purpose</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-8xl">
              Building Dreams, One Brick at a Time
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              From thoughtful design to quality construction, we create spaces built to last and made for the people who use them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white">Request a Quote</a>
              <a href="tel:+233000000000" className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold transition hover:bg-white hover:text-black">Call Us</a>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/20 pt-7">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="min-h-[420px] bg-neutral-200" aria-label="Construction image placeholder" />
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-dark)]">About us</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">We build with integrity, precision and purpose.</h2>
          <p className="mt-6 leading-8 text-[var(--muted)]">Garden of Messiah Building & Construction LTD delivers dependable construction solutions with a focus on craftsmanship, transparency and client satisfaction.</p>
          <a href="/about" className="mt-8 inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--gold-dark)]">Learn More</a>
        </div>
      </section>

      <section id="services" className="bg-[var(--surface)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-dark)]">What we do</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Complete solutions from foundation to finish.</h2></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => <article key={service} className="group border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[var(--gold)]"><span className="text-xs font-bold text-[var(--gold-dark)]">0{i + 1}</span><h3 className="mt-16 text-xl font-bold">{service}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Professional solutions tailored to your project requirements.</p></article>)}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-dark)]">Why clients trust us</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Built around quality. Delivered with confidence.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">{reasons.map(([number, title, text]) => <article key={number} className="border-t border-black/15 pt-6"><span className="text-xs font-bold text-[var(--gold-dark)]">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="projects" className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold)]">Featured projects</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">Work that speaks for itself.</h2></div><a href="/projects" className="text-sm font-bold text-[var(--gold)]">View All Projects →</a></div><div className="mt-12 grid gap-4 md:grid-cols-2">{['Residential Development', 'Modern Commercial Space', 'Interior Transformation', 'Renovation Project'].map((project, i) => <article key={project} className="group"><div className="aspect-[4/3] bg-neutral-800"/><div className="border-b border-white/15 py-5"><span className="text-xs text-white/45">0{i + 1}</span><h3 className="mt-2 text-xl font-bold">{project}</h3></div></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-dark)]">How we work</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">A clear process. No surprises.</h2></div><div className="mt-14 grid gap-0 border-y border-black/10 md:grid-cols-5">{process.map(([number, title]) => <div key={number} className="border-b border-black/10 p-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"><span className="text-xs font-bold text-[var(--gold-dark)]">{number}</span><h3 className="mt-12 font-bold">{title}</h3></div>)}</div></section>

      <section className="bg-[var(--surface)] py-24 lg:py-32"><div className="mx-auto max-w-5xl px-6 text-center lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold-dark)]">Testimonials</p><blockquote className="mt-8 text-3xl font-bold leading-tight sm:text-5xl">“Professional from planning to completion. The quality and communication made the whole project easy.”</blockquote><p className="mt-7 text-sm text-[var(--muted)]">— Satisfied Client</p></div></section>

      <section id="quote" className="bg-[var(--gold)] px-6 py-20 text-black lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.28em]">Start your project</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Ready to Start Your Project?</h2></div><a href="/quote" className="w-fit rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black">Get a Free Quote</a></div></section>

      <footer id="contact" className="bg-[#111] px-6 py-16 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4"><div className="md:col-span-2"><p className="text-lg font-black uppercase tracking-widest">Garden of Messiah</p><p className="mt-5 max-w-md text-sm leading-7 text-white/55">Building & Construction LTD — creating durable, functional and beautiful spaces.</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Quick Links</p><div className="mt-5 grid gap-3 text-sm text-white/65"><a href="/about">About Us</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact Us</a></div></div><div><p className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Contact</p><div className="mt-5 grid gap-3 text-sm text-white/65"><span>Accra, Ghana</span><a href="tel:+233000000000">+233 00 000 0000</a><a href="mailto:info@gardenofmessiah.com">info@gardenofmessiah.com</a></div></div></div><div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© {new Date().getFullYear()} Garden of Messiah Building & Construction LTD. All rights reserved.</div></footer>
    </main>
  );
}
