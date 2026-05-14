import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Compass } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import DonationBanner from '../components/ui/DonationBanner'

const pillars = [
  { num: '01', title: 'Evangelism', desc: 'Mass crusades, village outreaches, and one-on-one gospel encounters that bring people face to face with the living Christ.' },
  { num: '02', title: 'Humanitarian Aid', desc: 'Food, water, medicine, shelter — meeting physical needs as an expression of Christ\'s love without conditions or agenda.' },
  { num: '03', title: 'Discipleship', desc: 'Follow-up care, leadership training, and church integration ensuring new believers grow into mature, reproducing disciples.' },
  { num: '04', title: 'Church Planting', desc: 'Establishing indigenous local churches led by trained local leaders who become self-sustaining pillars of their communities.' },
]

export default function Mission() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=1600&q=80" alt="Mission" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Our Mission</div>
          <h1 className="section-title text-white max-w-2xl">Called to the <span className="text-gradient-gold italic">Uttermost Parts</span></h1>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To proclaim the Gospel of Jesus Christ to every unreached people group, while demonstrating God\'s love through holistic humanitarian care.' },
              { icon: Eye, title: 'Our Vision', desc: 'A world where every person has heard the name of Jesus and had the opportunity to respond — no village left behind, no nation unreached.' },
              { icon: Compass, title: 'Our Values', desc: 'Faith. Compassion. Integrity. Excellence. Partnership. We hold to these not as policies but as sacred commitments before God and the people we serve.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal bg-navy-900 rounded-2xl p-8 border border-white/5 hover:border-gold-400/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-700 text-white mb-4">{title}</h3>
                <p className="font-sans text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <SectionHeader label="How We Work" title="Four Pillars of the Mission" light centered />
          <div className="space-y-px reveal">
            {pillars.map(({ num, title, desc }) => (
              <div key={num} className="group flex gap-8 items-start p-8 bg-navy-900 hover:bg-navy-800 border-b border-white/5 transition-all duration-300 cursor-pointer">
                <span className="font-display text-5xl font-800 text-gradient-gold opacity-40 group-hover:opacity-100 transition-opacity shrink-0">{num}</span>
                <div>
                  <h3 className="font-display text-2xl font-700 text-white mb-2 group-hover:text-gold-400 transition-colors">{title}</h3>
                  <p className="font-sans text-white/50 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="reveal">
            <div className="section-label text-gold-400 justify-center mb-6"><span className="block w-8 h-px bg-gold-400" />The Great Commission</div>
            <blockquote className="font-display text-3xl md:text-5xl font-700 text-white italic leading-tight mb-6">
              "Go into all the world and preach the gospel to all creation."
            </blockquote>
            <cite className="font-sans text-gold-400 text-sm tracking-widest uppercase not-italic">— Mark 16:15 —</cite>
            <p className="font-sans text-white/50 text-lg mt-10 max-w-2xl mx-auto leading-relaxed">
              This is not a suggestion or an aspiration. It is a divine command — and Gospel Global Rescue Mission exists to obey it with everything we have.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/donate" className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-8 py-3.5 rounded-full transition-all duration-300 group">
                Fund the Mission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/volunteer" className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-600 text-sm px-8 py-3.5 rounded-full hover:bg-white/5 transition-all duration-300">
                Go on Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DonationBanner />
    </>
  )
}
