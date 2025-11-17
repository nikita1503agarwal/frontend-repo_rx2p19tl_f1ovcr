import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 shadow-sm mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Electromechanical Systems · Industry 4.0
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Precision Engineering
                  <br />
                  for a Connected Future
                </h1>
                <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
                  We design, prototype, and deploy mission-critical electromechanical systems with modern control, IoT telemetry, and predictive maintenance built-in.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#services" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-shadow">
                    Explore Services
                  </a>
                  <a href="#projects" className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    View Projects
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[520px] md:h-[600px] lg:h-[680px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
    </section>
  )
}

export default Hero
