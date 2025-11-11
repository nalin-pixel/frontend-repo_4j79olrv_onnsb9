import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#001024]/50 via-[#001024]/60 to-[#001024] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            We Build Scalable Software. Fast.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            AI + SaaS + DevOps + Full-Stack Development
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#D4F321] px-6 py-3 text-[#001024] font-semibold shadow-[0_10px_30px_rgba(212,243,33,0.35)] hover:shadow-[0_16px_40px_rgba(212,243,33,0.45)] transition-shadow">
              Start Project
            </a>
            <a href="#work" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur">
              Explore Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
