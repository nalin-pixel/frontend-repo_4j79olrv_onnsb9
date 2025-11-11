import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ContactForm from './ContactForm'

function FadeSection({ children }){
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(()=>{ if(inView) controls.start({opacity:1, y:0}) }, [inView, controls])
  return (
    <motion.section ref={ref} initial={{opacity:0, y:24}} animate={controls} transition={{duration:0.6}} className="relative py-24">
      {children}
    </motion.section>
  )
}

export function About() {
  return (
    <FadeSection id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">We build technology that scales businesses</h2>
            <p className="mt-4 text-white/70">Our mission is simple: deliver premium software with clarity, speed, and craftsmanship. From AI automation to enterprise-grade SaaS, we architect systems that perform at scale.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Projects Delivered', value: '120+' },
              { label: 'Active Clients', value: '24' },
              { label: 'Tech Stack Expertise', value: '30+' },
              { label: 'Uptime', value: '99.99%' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeSection>
  )
}

export function Services() {
  const items = [
    { title: 'SaaS Product Development', desc: 'Design, build, and launch cloud-native products built for scale.' },
    { title: 'Next.js / React / Mobile', desc: 'Pixel-perfect web and mobile experiences.' },
    { title: 'DevOps CI/CD + Cloud', desc: 'Automated pipelines, IaC, observability, multi-cloud resilience.' },
    { title: 'AI Automation & APIs', desc: 'LLMs, agents, embeddings, RAG, workflow orchestration.' },
  ]
  return (
    <FadeSection id="work">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, rotateX:1.5, rotateY:-1.5 }}
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
    </FadeSection>
  )
}

export function Reviews() {
  const items = [
    { name: 'Ava — CTO, Fintech', text: 'Newral shipped our MVP in 6 weeks with a rock-solid infra. Elite team.' },
    { name: 'Daniel — Founder, AI', text: 'We scaled to 100k users without a hiccup. Their DevOps mindset shows.' },
    { name: 'Leah — PM, Enterprise', text: 'Clean UX, reliable APIs, measurable outcomes. Exactly what we needed.' },
  ]
  return (
    <FadeSection id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:rotate-1 transition-transform">
              <p className="text-white/80">“{r.text}”</p>
              <div className="mt-4 text-sm text-white/60">{r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeSection>
  )
}

export function Careers() {
  const jobs = [
    { role: 'Senior Full-Stack Engineer', type: 'Remote', cta: '#' },
    { role: 'DevOps Engineer', type: 'Remote', cta: '#' },
    { role: 'Product Designer', type: 'Remote', cta: '#' },
  ]
  return (
    <FadeSection id="careers">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Build the future with us</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-[#D4F321] px-5 py-2 text-[#001024] font-semibold">Apply Now</a>
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
    </FadeSection>
  )
}

export function Contact() {
  return (
    <FadeSection id="contact">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#066CFF]/20 to-[#D4F321]/20 blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white">Let’s build something iconic</h2>
            <div className="flex items-center gap-3 mt-2 text-white/70">
              <div className="h-2.5 w-2.5 rounded-full bg-[#D4F321] animate-pulse" />
              <span>Noida, India</span>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </FadeSection>
  )
}
