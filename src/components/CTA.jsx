export default function CTA() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-500 p-1 ring-1 ring-white/20">
          <div className="rounded-[22px] bg-black/60 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Be first to ride the Stellar Drift</h3>
                <p className="mt-2 text-white/80 max-w-xl">Join the newsletter for closed beta invites, dev logs, and soundtrack drops.</p>
              </div>
              <form className="w-full sm:w-auto flex gap-3">
                <input
                  type="email"
                  placeholder="you@galaxy.com"
                  className="w-full sm:w-72 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/40"
                />
                <button type="button" className="rounded-xl bg-white text-black font-semibold px-5 py-3 hover:bg-white/90">Notify me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
