import React from 'react'

function Benefits() {
  const items = [
    {
      title: 'Clarity',
      desc: 'A clear picture of your digital stressors and energy leaks.'
    },
    {
      title: 'Supportive AI',
      desc: 'Practical ways to use AI to plan, focus, and simplify your day.'
    },
    {
      title: 'Boundaries',
      desc: 'A personal AI Wellness Protocol and tech rules that feel realistic.'
    },
    {
      title: 'Momentum',
      desc: 'A 90-day reset plan you can actually follow.'
    },
  ]

  return (
    <section className="relative bg-[#FAF8F5]" id="benefits">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">AI That Honors Your Body, Mind, and Boundaries</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">The Lucid Reset is a guided experience that pairs regenerative wellness practices with practical AI workflows—so your tools support your nervous system and your goals.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#C9A96E]" />
              </div>
              <h3 className="font-serif text-xl text-[#2E2E2E]">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
