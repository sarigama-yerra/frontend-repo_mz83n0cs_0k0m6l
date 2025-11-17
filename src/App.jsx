import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import World from './components/World'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <World />
      <FAQ />
      <CTA />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Stellar Drift. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
