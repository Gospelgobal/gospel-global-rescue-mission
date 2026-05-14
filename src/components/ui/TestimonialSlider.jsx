import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I was a child soldier in South Sudan, lost and broken. The Gospel Global team came to our camp and changed my life forever. Today I am a pastor bringing that same hope to others.",
    name: "Emmanuel Akot",
    role: "Pastor, Juba, South Sudan",
    country: "🇸🇸"
  },
  {
    quote: "After the earthquake destroyed everything we had, Gospel Global was the first team to arrive with food, medicine, and most importantly — the love of Jesus. They saved our family.",
    name: "Maria Santos",
    role: "Survivor & Volunteer, Port-au-Prince",
    country: "🇭🇹"
  },
  {
    quote: "Through their education program, my three daughters now attend school. The mission didn't just feed our bodies — it gave us back our dignity and our hope for the future.",
    name: "Fatima Al-Hassan",
    role: "Mother of Three, Northern Nigeria",
    country: "🇳🇬"
  },
  {
    quote: "I volunteered for just two weeks and came back transformed. Witnessing thousands respond to the Gospel in one evening — there are no words. I gave my life to mission work that night.",
    name: "Sarah Chen",
    role: "Volunteer, Atlanta, Georgia",
    country: "🇺🇸"
  },
  {
    quote: "Our village had never heard the name of Jesus. The crusade came, the sick were healed, and today we have a thriving church of 300 believers. God is real and He cares for us.",
    name: "Joseph Mwangi",
    role: "Village Elder, Western Kenya",
    country: "🇰🇪"
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setAutoPlay(false) }
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setAutoPlay(false) }

  const t = testimonials[current]

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl bg-navy-900 border border-white/5 p-10 md:p-16">
        <Quote className="w-16 h-16 text-gold-400/20 mb-6" />
        <blockquote className="font-body text-xl md:text-2xl text-white/85 italic leading-relaxed mb-10 min-h-[100px]">
          "{t.quote}"
        </blockquote>
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold-400/10 rounded-full border border-gold-400/30 flex items-center justify-center text-2xl">
              {t.country}
            </div>
            <div>
              <div className="font-sans font-700 text-white text-sm">{t.name}</div>
              <div className="font-sans text-white/40 text-xs mt-0.5">{t.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/5 hover:bg-gold-400 hover:text-navy-950 text-white/60 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 bg-white/5 hover:bg-gold-400 hover:text-navy-950 text-white/60 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
