import { Cog, CircuitBoard, Cable } from 'lucide-react'

const projects = [
  {
    icon: Cog,
    title: 'Adaptive Conveyor System',
    desc: 'Modular belt system with smart load balancing and real-time diagnostics.',
  },
  {
    icon: CircuitBoard,
    title: 'High-Precision Pick & Place',
    desc: 'Vision-guided mechatronics achieving ±10µm repeatability for micro-assembly.',
  },
  {
    icon: Cable,
    title: 'Edge-connected Test Bench',
    desc: 'HIL test rig streaming telemetry to cloud dashboards for predictive insights.',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected projects</h2>
          <p className="mt-3 text-slate-600">A glimpse into recent builds combining mechanics, electronics, and software into cohesive products.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
