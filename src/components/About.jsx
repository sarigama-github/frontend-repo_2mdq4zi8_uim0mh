import React from 'react'

function About() {
  return (
    <section className="relative bg-[#FAF8F5]" id="about">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Meet Your Guide: Eunice Cijntje</h2>

        <div className="mt-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Warm, elegant portrait"
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.2),transparent_60%)]" />
            </div>
          </div>
          <div className="md:col-span-7">
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
