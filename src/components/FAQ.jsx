export default function FAQ() {
  const faqs = [
    {
      q: 'What platforms are you targeting?',
      a: 'Stellar Drift is coming to Steam for Windows and macOS. We are exploring additional platforms based on interest.'
    },
    {
      q: 'Is this single-player or multiplayer?',
      a: 'The core experience focuses on solo exploration with connected world elements. We will share more as development progresses.'
    },
    {
      q: 'When can I play?',
      a: 'Wishlist now to join playtests and get updates on release timing.'
    },
    {
      q: 'Will it run on my Mac?',
      a: 'We are optimizing for Apple Silicon and plan to support modern macOS versions with scalable graphics settings.'
    }
  ]

  return (
    <section id="faq" className="relative bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQ</h2>
        <p className="mt-3 text-white/70 text-center">Answers to the most common questions while we build.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <summary className="cursor-pointer list-none text-white/90 font-semibold flex items-center justify-between">
                <span>{item.q}</span>
                <span className="ml-4 text-white/40 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
