export default function World() {
  const zones = [
    {
      name: 'Neon Megacities',
      desc: 'Vertical skylines, drifting highways, and skyline rails weaving between holographic billboards.',
      accent: 'from-fuchsia-500/20 to-purple-500/20',
    },
    {
      name: 'Crystal Wastes',
      desc: 'Endless dunes of stardust and towering shards that sing when the wind rushes through.',
      accent: 'from-cyan-400/20 to-blue-500/20',
    },
    {
      name: 'Aurora Reefs',
      desc: 'Bioluminescent oceans under twin moons, with currents you can literally ride.',
      accent: 'from-emerald-400/20 to-teal-400/20',
    },
  ]

  return (
    <section id="world" className="relative bg-black py-24">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-400/15 via-fuchsia-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">The World</h2>
          <p className="mt-3 text-white/70">A stylized galaxy built for flow. Every region is crafted to reward momentum, curiosity, and style.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((z) => (
            <div key={z.name} className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10">
              <div className={`rounded-[22px] h-full bg-gradient-to-br ${z.accent} p-6`}> 
                <div className="rounded-2xl h-full bg-black/60 p-6">
                  <h3 className="text-xl font-semibold text-white">{z.name}</h3>
                  <p className="mt-2 text-white/70 text-sm">{z.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 text-white">
          <p className="text-white/80">This universe is seamless. No loading screens, no borders—just a continuous drift through layered biomes, hidden shortcuts, and emergent events.</p>
        </div>
      </div>
    </section>
  )
}
