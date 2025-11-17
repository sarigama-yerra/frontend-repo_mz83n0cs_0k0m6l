import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 shadow-lg ring-1 ring-white/20" />
          <div className="leading-tight">
            <p className="text-white text-lg font-bold tracking-wide">Stellar Drift</p>
            <p className="text-white/60 text-xs">An open world odyssey</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#world" className="text-white/80 hover:text-white transition-colors">The World</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur px-4 py-2 text-sm font-semibold transition-colors"
          >
            Wishlist on Steam
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-black/50 ring-1 ring-white/10 backdrop-blur p-4 space-y-2">
          <a href="#features" className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Features</a>
          <a href="#world" className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">The World</a>
          <a href="#faq" className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">FAQ</a>
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 rounded-lg bg-white/10 text-white text-center font-semibold"
          >
            Wishlist on Steam
          </a>
        </div>
      )}
    </header>
  )
}
