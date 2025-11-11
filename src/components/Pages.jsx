import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export function PageShell({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#001024] pt-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>}
        </motion.div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export function AboutPage(){
  const stats = [
    { label: 'Projects Delivered', value: 120 },
    { label: 'Active Clients', value: 24 },
    { label: 'Tech Stack Expertise', value: 30 },
  ]
  return (
    <PageShell title="About NEWRAL" subtitle="Innovative, bold, premium. We build scalable systems that power modern businesses.">
      <div className="grid gap-8 lg:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.1}} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="text-5xl font-extrabold text-white">
              {s.value}+
            </div>
            <div className="mt-2 text-white/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  )
}

export function ServicesPage(){
  const items = [
    { title: 'SaaS Product Development', desc: 'Cloud-native apps engineered for scale and speed.' },
    { title: 'Next.js / React / Mobile', desc: 'Web and mobile experiences with precision and performance.' },
    { title: 'DevOps CI/CD + Cloud', desc: 'Pipelines, IaC, monitoring, reliability at scale.' },
    { title: 'AI Automation & APIs', desc: 'Agents, LLMs, embeddings, and robust integrations.' },
  ]
  return (
    <PageShell title="Services" subtitle="End-to-end product development across AI, SaaS, DevOps, and mobile.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx)=> (
          <motion.div key={idx} whileHover={{ y:-8, rotateX:1.5, rotateY:-1.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#066CFF]/10 to-[#D4F321]/10" />
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#066CFF] to-[#001024] shadow-xl" />
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  )
}

export function ReviewsPage(){
  const items = [
    { name: 'Ava — CTO, Fintech', text: 'Newral shipped our MVP in 6 weeks with a rock-solid infra.' },
    { name: 'Daniel — Founder, AI', text: 'We scaled to 100k users without a hiccup. Their DevOps mindset shows.' },
    { name: 'Leah — PM, Enterprise', text: 'Clean UX, reliable APIs, measurable outcomes.' },
  ]
  return (
    <PageShell title="Reviews" subtitle="Trusted by founders and engineering leaders.">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((r,i)=> (
          <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.1}} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:rotate-1 transition-transform">
            <p className="text-white/80">“{r.text}”</p>
            <div className="mt-4 text-sm text-white/60">{r.name}</div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  )
}

export function CareersPage(){
  const jobs = [
    { role: 'Senior Full-Stack Engineer', type: 'Remote', cta: '#' },
    { role: 'DevOps Engineer', type: 'Remote', cta: '#' },
    { role: 'Product Designer', type: 'Remote', cta: '#' },
  ]
  return (
    <PageShell title="Careers" subtitle="Build the future with us.">
      <div className="space-y-4">
        {jobs.map((j,i)=> (
          <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur">
            <div>
              <div className="text-white font-semibold">{j.role}</div>
              <div className="text-sm text-white/60">{j.type}</div>
            </div>
            <a href={j.cta} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white font-semibold">Apply now</a>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export function ContactPage(){
  return (
    <PageShell title="Contact" subtitle="Tell us about your project. We typically respond within 24 hours.">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#066CFF]/20 to-[#D4F321]/20 blur-2xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 text-white/80">
            <div className="h-2.5 w-2.5 rounded-full bg-[#D4F321] animate-pulse" />
            <span>Noida, India</span>
          </div>
          <ContactForm />
        </div>
      </div>
    </PageShell>
  )
}
