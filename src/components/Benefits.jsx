import React from 'react'

function Benefits() {
  const items = [
    {
      title: 'Clarity',
      desc: 'A clear picture of your digital stressors and energy leaks.',
      img: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Supportive AI',
      desc: 'Practical ways to use AI to plan, focus, and simplify your day.',
      img: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Boundaries',
      desc: 'A personal AI Wellness Protocol and tech rules that feel realistic.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Momentum',
      desc: 'A 90-day reset plan you can actually follow.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section className="relative bg-[#FAF8F5]" id="benefits">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">AI That Honors Your Body, Mind, and Boundaries</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">The Lucid Reset is a guided experience that pairs regenerative wellness practices with practical AI workflows—so your tools support your nervous system and your goals.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="h-36 w-full overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#C9A96E]" />
                </div>
                <h3 className="font-serif text-xl text-[#2E2E2E]">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
