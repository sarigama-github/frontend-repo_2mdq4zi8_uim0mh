import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Who from './components/Who'
import Agenda from './components/Agenda'
import Formats from './components/Formats'
import About from './components/About'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#2E2E2E]">
      <Hero />
      <Problem />
      <Benefits />
      <Who />
      <Agenda />
      <Formats />
      <About />
      <FAQ />
      <FinalCTA />

      <footer id="contact" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#C9A96E]" />
            </div>
            <span className="text-sm text-gray-700">Lucidity Society</span>
          </div>
          <div className="text-sm text-gray-700 space-x-4 text-center">
            <a href="mailto:hello@eunicecijntje.com" className="hover:text-gray-900">hello@eunicecijntje.com</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900">@LuciditySociety</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
