import React from 'react'

function Who() {
  const cards = [
    {
      title: 'CEOs & Senior Leaders',
      text: 'Lead with clarity while protecting your most valuable resource—your energy.',
      img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Teachers & Educators',
      text: 'Bring humane, effective AI into your practice without sacrificing wellbeing.',
      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'High-Achieving Women & Creatives',
      text: 'Design a softer, smarter workflow that honors your body and brilliance.',
      img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section className="relative" id="who">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">This Experience Is For You If…</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((b) => (
            <div key={b.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="h-36 w-full overflow-hidden">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#2E2E2E]">{b.title}</h3>
                <p className="mt-2 text-gray-700">{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-700">If you’re ambitious, curious about AI, and ready for a softer way to work, you’re in the right place.</p>
      </div>
    </section>
  )
}

export default Who
