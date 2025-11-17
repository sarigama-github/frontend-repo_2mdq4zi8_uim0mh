import React from 'react'

function Problem() {
  return (
    <section className="relative" id="problem">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-serif text-[#2E2E2E]">You Weren’t Meant to Run Like a Machine</h2>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            Notifications, emails, and constant "just one more thing" requests keep you in a
            reactive loop. The pace of AI and high-pressure work can make even the most capable
            leaders feel stretched thin.
          </p>
          <p>
            When your nervous system is always on, focus fractures. Tech becomes noise. You may
            find yourself tired, scattered, and struggling to access your best thinking.
          </p>
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />Always "on" and mentally switching tabs</li>
          <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />Tech fatigue and decision overload</li>
          <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />Too many tools, not enough clarity</li>
          <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#C9A96E]" />A to-do list that never ends</li>
        </ul>
      </div>
    </section>
  )
}

export default Problem
