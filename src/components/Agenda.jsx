import React from 'react'

function Agenda() {
  const steps = [
    {
      title: 'Ground & Reflect',
      desc: 'Guided check-in and digital stress & energy audit.'
    },
    {
      title: 'AI in Action',
      desc: 'Live demos and hands-on practice with AI using real tasks.'
    },
    {
      title: 'Design Your Protocol',
      desc: 'Create your personal AI Wellness Protocol and 90-day plan.'
    },
    {
      title: 'Integrate & Close',
      desc: 'Visualization, intention-setting, and next steps.'
    },
  ]

  return (
    <section className="relative bg-[#FAF8F5]" id="experience">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Inside The Lucid Reset</h2>
        <p className="mt-4 text-gray-700">The total experience is 3 hours in a small, intimate group.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="text-[#C9A96E] text-sm font-medium tracking-wider">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-xl text-[#2E2E2E] mt-1">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agenda
