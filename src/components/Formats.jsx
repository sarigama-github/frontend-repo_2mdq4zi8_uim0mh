import React from 'react'

function Formats() {
  return (
    <section className="relative" id="formats">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Choose Your Lucid Reset Experience</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="h-36 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" alt="Soft neutral workspace" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#2E2E2E]">Lucidity Society Circle (Public)</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>3-hour live workshop (online or in person)</li>
                <li>Max. 12–15 participants</li>
                <li>Workbook + 7-day follow-up prompts</li>
                <li className="mt-2"><span className="font-medium">Investment:</span> USD $297 per person – <span className="text-[#C9A96E]">Early bird: USD $247</span></li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="h-36 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?q=80&w=1200&auto=format&fit=crop" alt="Soft meeting room with warm light" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#2E2E2E]">Private Organizational Session</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>3-hour customized workshop for up to ~20 participants</li>
                <li>Tailored content + AI & Wellness Charter draft</li>
                <li className="mt-2"><span className="font-medium">Investment:</span> From USD $3,500 per session</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#C9A96E]/60 text-[#2E2E2E] hover:bg-[#C9A96E]/10 transition-colors">
            Request a Corporate Proposal
          </a>
        </div>
      </div>
    </section>
  )
}

export default Formats
