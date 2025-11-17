import React from 'react'

function About() {
  return (
    <section className="relative bg-[#FAF8F5]" id="about">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Meet Your Guide: Eunice Cijntje</h2>

        <div className="mt-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#C9A96E]/30 to-white border border-[#C9A96E]/40 mx-auto md:mx-0"/>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-700">
              Eunice is a technology trainer, AI educator, and founder of Lucidity Society and Lucidity Communications. She blends digital transformation with wellness and feminine leadership—helping teams and leaders implement AI in ways that protect energy and enhance focus.
            </p>
            <p className="mt-4 text-gray-700">
              Having personally navigated burnout, she rebuilt her work around balance and clarity. Her approach is warm, grounded, and empowerment-focused—rooted in the belief that sustainable success starts with how you feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
