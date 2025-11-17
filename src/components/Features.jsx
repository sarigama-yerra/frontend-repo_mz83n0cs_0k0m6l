import { Rocket, Globe2, Waves, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Speed & Flow',
    desc: 'Surf gravity wells and chain boosts along luminous paths with fluid traversal designed for momentum.'
  },
  {
    icon: Globe2,
    title: 'Open Worlds',
    desc: 'Seamlessly explore colossal biomes from neon megacities to crystalline caverns and star-lit dunes.'
  },
  {
    icon: Waves,
    title: 'Living Systems',
    desc: 'Dynamic weather, shifting constellations, and ecosystems that react to your presence.'
  },
  {
    icon: Sparkles,
    title: 'Style First',
    desc: 'Holographic gradients, cosmic vibes, and a soundtrack that evolves with your journey.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-fuchsia-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Forge your own line through the cosmos</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Every route is a story. Every landmark hides a discovery. The universe rewards curiosity and style.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
