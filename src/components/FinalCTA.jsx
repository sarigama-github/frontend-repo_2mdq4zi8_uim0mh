import React from 'react'

function FinalCTA() {
  return (
    <section className="relative bg-[#FAF8F5]" id="signup">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Ready for Your Lucid Reset?</h2>
        <p className="mt-4 text-gray-700">Step into a new season of working with AI in a way that feels calm, clear, and sustainable.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E2E2E] text-white hover:bg-black transition-colors shadow-sm">Reserve Your Spot</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#C9A96E]/60 text-[#2E2E2E] hover:bg-[#C9A96E]/10 transition-colors">Request a Private Session</a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
