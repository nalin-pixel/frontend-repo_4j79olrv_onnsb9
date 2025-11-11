import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useCallback } from 'react'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(sy, [-50, 50], [6, -6])
  const rotateY = useTransform(sx, [-50, 50], [-6, 6])
  const translate1 = useTransform(sx, [-50, 50], [-10, 10])
  const translate2 = useTransform(sy, [-50, 50], [-8, 8])

  const onMouseMove = useCallback((e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth) * 100 - 50
    const y = (e.clientY / innerHeight) * 100 - 50
    mx.set(x)
    my.set(y)
  }, [mx, my])

  return (
    <section className="relative min-h-[90vh] overflow-hidden" onMouseMove={onMouseMove}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#001024]/50 via-[#001024]/60 to-[#001024] pointer-events-none" />

      {/* Parallax floating shapes */}
      <motion.div style={{ x: translate1, y: translate2, rotateX, rotateY }} className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full opacity-60" >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#066CFF_0%,transparent_60%)] blur-2xl" />
      </motion.div>
      <motion.div style={{ x: translate2, y: translate1, rotateX, rotateY }} className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-50" >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_70%_70%,#D4F321_0%,transparent_60%)] blur-2xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl will-change-transform"
          style={{ rotateX, rotateY }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            We Build Scalable Tech That Grows Your Business.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            AI • SaaS • Full-Stack • DevOps
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#D4F321] px-6 py-3 text-[#001024] font-semibold shadow-[0_10px_30px_rgba(212,243,33,0.35)] hover:shadow-[0_16px_40px_rgba(212,243,33,0.45)] transition-shadow">
              Start a project
            </a>
            <a href="#work" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur hover:bg-white/15">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
