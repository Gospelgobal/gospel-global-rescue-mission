import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Globe, Users, BookOpen } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import DonationBanner from '../components/ui/DonationBanner'

const leadership = [
  {
    name: 'Dr. Jonathan Osei',
    role: 'Founder & International Director',
    bio: 'Called to global ministry at age 19, Dr. Osei has preached in 74 nations over 35 years. He holds a Doctorate in Missiology and is the author of seven books on evangelism.',
  },
  {
    name: 'Rev. Grace Adeyemi',
    role: 'Director of Humanitarian Affairs',
    bio: 'A former UN aid worker, Grace leads our food, water, and emergency response programs across 40+ nations with two decades of crisis relief experience.',
  },
  {
    name: 'Pastor Samuel Tran',
    role: 'Director of Discipleship',
    bio: 'Samuel oversees our network of discipleship schools and church planting initiatives throughout Southeast Asia, having planted 230+ churches in 18 years.',
  },
  {
    name: 'Dr. Miriam Kowalski',
    role: 'Director of Medical Missions',
    bio: 'A board-certified surgeon, Dr. Miriam has led over 300 surgical mission camps in remote and conflict zones, training local healthcare providers alongside ministry.',
  },
]

const values = [
  { icon: Heart, title: 'Compassion First', desc: 'We see every person as made in God\'s image. Our care is unconditional — no strings attached.' },
  { icon: Globe, title: 'Global Reach', desc: 'We go where others won\'t — into the darkest, most unreached corners of the earth.' },
  { icon: BookOpen, title: 'Gospel-Centered', desc: 'Every program flows from a conviction that transformed lives begin with the transforming power of Jesus.' },
  { icon: Users, title: 'Community Built', desc: 'We don\'t build programs; we build people, relationships, and sustainable communities.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80" alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4">
            <span className="block w-8 h-px bg-gold-400" />
            Who We Are
          </div>
          <h1 className="section-title text-white max-w-2xl">
            A Movement Fueled by Faith, <span className="text-gradient-gold italic">Driven by Love</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeader label="Our Story" title={<>From One Man's Vision<br />to a Global Movement</>} light />
              <p className="font-sans text-white/60 leading-relaxed mb-5">
                In 1989, a young preacher named Jonathan Osei stood before 200 people in a dusty field in Ghana and declared, "God has called me to preach the Gospel to every nation." No one believed it would become what it is today.
              </p>
              <p className="font-sans text-white/50 leading-relaxed mb-5">
                That first crusade saw 47 salvations and one miraculous healing. The story spread. Invitations came. Resources followed faith. Today, Gospel Global Rescue Mission operates in 85+ nations with a team of 850 full-time staff and 38,000 trained volunteers.
              </p>
              <p className="font-sans text-white/50 leading-relaxed mb-8">
                We have never accepted government funding. Every meal served, every well drilled, every crusade held is powered by the generosity of everyday believers who believe the Great Commission is not optional.
              </p>
              <Link to="/mission" className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-8 py-3.5 rounded-full transition-all duration-300 group">
                Our Mission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="reveal-right relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Our story" className="w-full h-[500px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 max-w-xs hidden md:block border border-gold-400/20">
                <div className="font-display text-4xl font-700 text-gradient-gold mb-1">35+</div>
                <div className="font-sans text-white/60 text-sm">Years of uninterrupted global ministry — through wars, pandemics, and persecution.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="Core Values" title="What We Believe Drives How We Serve" light centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy-950 rounded-2xl p-7 border border-white/5 hover:border-gold-400/30 transition-all duration-300 card-hover text-center">
                <div className="w-14 h-14 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-700 text-white mb-3">{title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="Leadership" title="Servant Leaders, Global Impact" light centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {leadership.map(({ name, role, bio }) => (
              <div key={name} className="bg-navy-900 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-400/20 transition-all duration-300 card-hover">
                <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gold-400/10 border-2 border-gold-400/30 flex items-center justify-center">
                    <span className="font-display text-3xl text-gold-400 font-700">{name.split(' ').map(n => n[0]).slice(0,2).join('')}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-700 text-white mb-1">{name}</h3>
                  <p className="text-gold-400 font-sans text-xs uppercase tracking-wider mb-3">{role}</p>
                  <p className="font-sans text-white/50 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationBanner />
    </>
  )
}
