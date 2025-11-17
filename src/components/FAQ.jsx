import React from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'Do I need to be tech-savvy?',
      a: 'No. We meet you where you are. You’ll learn simple, safe ways to use AI that fit your pace and needs.'
    },
    {
      q: 'Which AI tools will we use?',
      a: 'We’ll explore mainstream tools and show how to choose quality over quantity—fewer tools, better outcomes.'
    },
    {
      q: 'Is this only for women?',
      a: 'While our tone is feminine and gentle, this workshop is inclusive. All are welcome.'
    },
    {
      q: 'Will I leave with something concrete?',
      a: 'Yes. You’ll create your personal AI Wellness Protocol and a 90-day plan you can follow.'
    },
    {
      q: 'Can this be hosted for my company or school?',
      a: 'Absolutely. We offer private sessions tailored to organizational goals and culture.'
    },
  ]

  return (
    <section className="relative" id="faq">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-gray-200">
          {faqs.map((f, i) => (
            <div key={i} className="py-5">
              <h3 className="font-medium text-[#2E2E2E]">{f.q}</h3>
              <p className="mt-1 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
