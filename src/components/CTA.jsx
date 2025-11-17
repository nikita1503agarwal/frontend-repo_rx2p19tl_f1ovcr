function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Bring your system to life</h2>
            <p className="mt-3 text-white/70">Tell us about your application, timelines, and constraints. We’ll propose architecture, milestones, and a transparent delivery plan.</p>
          </div>

          <form className="mt-8 grid md:grid-cols-3 gap-4">
            <input placeholder="Full name" className="col-span-3 md:col-span-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Work email" className="col-span-3 md:col-span-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Company" className="col-span-3 md:col-span-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="What are you building?" rows="4" className="col-span-3 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="col-span-3 flex items-center gap-3">
              <button type="button" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-shadow">Request proposal</button>
              <p className="text-xs text-white/60">By clicking, you agree to our terms and privacy policy.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
