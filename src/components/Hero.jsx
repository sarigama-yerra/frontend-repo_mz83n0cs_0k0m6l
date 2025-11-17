import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Coming soon to Steam and macOS
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            A trippy galaxy rollercoaster across a living, open universe
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Drift through neon nebulas, carve across cosmic highways, and uncover mysteries of a fractured world. Built for immersion, exploration, and pure vibe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white px-6 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
            >
              Wishlist on Steam
            </a>
            <a
              href="#features"
              className="inline-flex justify-center items-center rounded-xl bg-white/10 text-white px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
