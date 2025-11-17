import { Wrench, Cpu, Workflow, Gauge, ShieldCheck, Cloud } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Custom Mechatronics',
    desc: 'From concept to commissioning: actuators, sensors, and motion systems engineered to spec.'
  },
  {
    icon: Cpu,
    title: 'Embedded Control',
    desc: 'Firmware, real-time control loops, and edge ML for robust autonomous operation.'
  },
  {
    icon: Workflow,
    title: 'Industrial Automation',
    desc: 'PLC/SCADA integration, robotics, and production-line optimization under IEC standards.'
  },
  {
    icon: Gauge,
    title: 'Testing & Validation',
    desc: 'HIL rigs, durability testing, and calibration frameworks with full traceability.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    desc: 'CE/UL guidance, risk assessment, and documentation for regulated environments.'
  },
  {
    icon: Cloud,
    title: 'IoT Telemetry',
    desc: 'Secure cloud connectivity, dashboards, and predictive maintenance alerts.'
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we build</h2>
          <p className="mt-3 text-slate-600">End-to-end electromechanical solutions designed for reliability, scalability, and beautiful operator experiences.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
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

export default Services
