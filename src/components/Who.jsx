import React from 'react'

function Who() {
  return (
    <section className="relative" id="who">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">This Experience Is For You If…</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            title: 'CEOs & Senior Leaders',
            text: 'Lead with clarity while protecting your most valuable resource—your energy.'
          }, {
            title: 'Teachers & Educators',
            text: 'Bring humane, effective AI into your practice without sacrificing wellbeing.'
          }, {
            title: 'High-Achieving Women & Creatives',
            text: 'Design a softer, smarter workflow that honors your body and brilliance.'
          }].map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h3 className="font-serif text-xl text-[#2E2E2E]">{b.title}</h3>
              <p className="mt-2 text-gray-700">{b.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-700">If you’re ambitious, curious about AI, and ready for a softer way to work, you’re in the right place.</p>
      </div>
    </section>
  )
}

export default Who
