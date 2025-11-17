import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.18),transparent_60%)]" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#C9A96E]" />
            </div>
            <span className="tracking-wide text-sm uppercase text-gray-700">Lucidity Society</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#formats" className="hover:text-gray-900 transition-colors">Formats</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>
        </header>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-[#2E2E2E]">
              The Lucid Reset: AI & Wellness for High Performers
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              A 3-hour immersive workshop to help you use AI to protect your energy, not deplete it. Step into a calmer, more intelligent rhythm of work—where focus, clarity, and wellbeing lead.
            </p>
            <p className="mt-3 text-base text-gray-600 max-w-2xl">
              Balance ambition with ease. Harness modern tools without burnout. Build boundaries that support sustainable success.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#signup" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E2E2E] text-white hover:bg-black transition-colors shadow-sm">
                Reserve Your Spot
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#C9A96E]/60 text-[#2E2E2E] hover:bg-[#C9A96E]/10 transition-colors">
                Request a Private Session
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-600">Limited to 12–15 participants per circle.</p>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(201,169,110,0.18),transparent_40%)]" />
              <div className="relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Quiet Luxury • Modern Tech • Wellbeing</div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />Calm, focused workflows powered by AI</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />Personal boundaries that protect your energy</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />A plan for sustainable momentum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
