import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CTA />
      <footer id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-slate-900 font-semibold">ElectroMech</p>
              <p className="text-sm text-slate-600">High-reliability electromechanical systems. Built with care.</p>
            </div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} ElectroMech Labs. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
