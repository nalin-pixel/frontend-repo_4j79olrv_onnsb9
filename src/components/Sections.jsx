import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="relative py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">We build technology that scales businesses</h2>
            <p className="mt-4 text-white/70">Our mission is simple: deliver premium software with clarity, speed, and craftsmanship. From AI automation to enterprise-grade SaaS, we architect systems that perform at scale.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-2 gap-4">
            {[
              { label: 'Deploys / month', value: '500+' },
              { label: 'Services uptime', value: '99.99%' },
              { label: 'Avg. delivery time', value: '4-8 weeks' },
              { label: 'Client NPS', value: '78' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { title: 'SaaS Product Development', desc: 'Design, build, and launch cloud-native products built for scale.' },
    { title: 'Web + Mobile Apps', desc: 'Next.js, React, Kotlin, Flutter — pixel-perfect experiences across platforms.' },
    { title: 'DevOps + CI/CD + Cloud', desc: 'Automated pipelines, IaC, observability, multi-cloud resilience.' },
    { title: 'AI Automation + Integrations', desc: 'LLMs, agents, embeddings, RAG, workflow orchestration.' },
  ]
  return (
    <section className="relative py-24" id="work">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#066CFF]/10 to-[#D4F321]/10" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#066CFF] to-[#001024] shadow-xl" />
                <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  const items = [
    { name: 'Ava — CTO, Fintech', text: 'Newral shipped our MVP in 6 weeks with a rock-solid infra. Elite team.' },
    { name: 'Daniel — Founder, AI', text: 'We scaled to 100k users without a hiccup. Their DevOps mindset shows.' },
    { name: 'Leah — PM, Enterprise', text: 'Clean UX, reliable APIs, measurable outcomes. Exactly what we needed.' },
  ]
  return (
    <section className="relative py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <p className="text-white/80">“{r.text}”</p>
              <div className="mt-4 text-sm text-white/60">{r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Careers() {
  const jobs = [
    { role: 'Senior Full-Stack Engineer', type: 'Remote', cta: '#' },
    { role: 'DevOps Engineer', type: 'Remote', cta: '#' },
    { role: 'Product Designer', type: 'Remote', cta: '#' },
  ]
  return (
    <section className="relative py-24" id="careers">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Build the future with us</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-[#D4F321] px-5 py-2 text-[#001024] font-semibold">Apply now</a>
        </div>
        <div className="mt-8 space-y-4">
          {jobs.map((j, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur">
              <div>
                <div className="text-white font-semibold">{j.role}</div>
                <div className="text-sm text-white/60">{j.type}</div>
              </div>
              <a href={j.cta} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white font-semibold">Apply now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="relative py-24" id="contact">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#066CFF]/20 to-[#D4F321]/20 blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white">Let’s build something iconic</h2>
            <form className="mt-8 grid gap-4">
              <input className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Your name" />
              <input className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Email" />
              <textarea rows="4" className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Project details" />
              <button className="mt-2 rounded-full bg-[#D4F321] px-6 py-3 text-[#001024] font-semibold">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
