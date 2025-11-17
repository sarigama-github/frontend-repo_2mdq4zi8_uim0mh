import React from 'react'

function Agenda() {
  const steps = [
    {
      title: 'Ground & Reflect',
      desc: 'Guided check-in and digital stress & energy audit.',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'AI in Action',
      desc: 'Live demos and hands-on practice with AI using real tasks.',
      img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Design Your Protocol',
      desc: 'Create your personal AI Wellness Protocol and 90-day plan.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Integrate & Close',
      desc: 'Visualization, intention-setting, and next steps.',
      img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section className="relative bg-[#FAF8F5]" id="experience">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Inside The Lucid Reset</h2>
        <p className="mt-4 text-gray-700">The total experience is 3 hours in a small, intimate group.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="h-36 w-full overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="text-[#C9A96E] text-sm font-medium tracking-wider">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-xl text-[#2E2E2E] mt-1">{s.title}</h3>
                <p className="mt-2 text-gray-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agenda
