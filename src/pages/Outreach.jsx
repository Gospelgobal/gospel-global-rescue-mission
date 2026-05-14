import { Utensils, Home, Stethoscope, GraduationCap, Droplets, Globe, ShieldCheck, BookOpen, Zap, Heart } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import DonationBanner from '../components/ui/DonationBanner'

const programs = [
  { icon: Globe, color: '#fec84b', title: 'Evangelism Crusades', stat: '12,000+ Events', desc: 'From village gatherings of 50 to stadium crusades drawing 500,000+, we preach the Gospel with signs and wonders following. No crowd is too small, no location too remote.', impact: ['4.2M+ salvations', '47,000+ healings documented', 'Active in 85 nations'] },
  { icon: Utensils, color: '#34d399', title: 'Food Relief Programs', stat: '500K Meals/Month', desc: 'Emergency food distributions and long-term nutrition programs targeting the most food-insecure regions. We partner with local churches to ensure sustainable, dignified food access.', impact: ['2.3M people fed annually', '340 food distribution centers', 'Active in 28 nations'] },
  { icon: Home, color: '#60a5fa', title: 'Orphan Care & Rescue', stat: '24,000 Children', desc: 'Safe homes, trauma counseling, education support, and family reunification for children orphaned by war, disaster, or disease. Every child deserves a future.', impact: ['24,000 children in care', '180 safe homes operated', '94% family reunification rate'] },
  { icon: Stethoscope, color: '#f87171', title: 'Medical Missions', stat: '300+ Surgical Camps', desc: 'Mobile clinics, surgical campaigns, maternal health programs, and epidemic response teams. We bring world-class medical care to those who have never seen a doctor.', impact: ['1.8M patients treated', '300+ surgical camps', 'Active in 32 nations'] },
  { icon: GraduationCap, color: '#c084fc', title: 'Education Support', stat: '180,000 Students', desc: 'School construction, scholarship funding, teacher training, and learning materials for communities where education is the greatest gift we can give the next generation.', impact: ['180,000 students supported', '340 schools built', '28,000 scholarships granted'] },
  { icon: Droplets, color: '#38bdf8', title: 'Clean Water Initiative', stat: '1,200 Wells Drilled', desc: 'Borehole drilling, water purification systems, hygiene education, and sanitation infrastructure in sub-Saharan Africa and South Asia where clean water is a life-or-death issue.', impact: ['3.2M people with clean water', '1,200 wells drilled', 'Active in 19 nations'] },
  { icon: ShieldCheck, color: '#fb923c', title: 'Emergency Aid Response', stat: '48-Hour Deployment', desc: 'Rapid-response disaster relief teams deployed within 48 hours of crisis events — earthquakes, floods, famines, conflict — providing food, shelter, and trauma support.', impact: ['94 disaster responses', '850K people aided', 'Active in 30+ conflict zones'] },
  { icon: BookOpen, color: '#a78bfa', title: 'Discipleship Schools', stat: '420 Schools', desc: 'Intensive discipleship training for new believers and church leaders, equipping an indigenous army of local ministers to carry the Gospel sustainably within their own communities.', impact: ['84,000 graduates', '420 schools worldwide', '14,000 church planters trained'] },
]

export default function Outreach() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80" alt="Outreach" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Programs</div>
          <h1 className="section-title text-white max-w-2xl">Outreach Programs <span className="text-gradient-gold italic">That Transform</span></h1>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="What We Do" title="Eight Ways We Change the World" subtitle="Each program is built on the conviction that the Gospel addresses the whole person — body, soul, and spirit." light centered />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map(({ icon: Icon, color, title, stat, desc, impact }, i) => (
              <div key={title} className="reveal bg-navy-900 rounded-3xl p-8 border border-white/5 hover:border-white/15 transition-all duration-300 card-hover" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <span className="font-sans text-xs font-600 text-white/30 bg-white/5 px-3 py-1 rounded-full">{stat}</span>
                </div>
                <h3 className="font-display text-2xl font-700 text-white mb-3">{title}</h3>
                <p className="font-sans text-white/50 leading-relaxed mb-6">{desc}</p>
                <div className="space-y-2">
                  {impact.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <span className="font-sans text-white/40 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationBanner
        title="Power These Programs With Your Gift"
        subtitle="$25 feeds a child for a month. $100 provides clean water to a family for a year. $500 sends a volunteer to the field. Every amount matters."
      />
    </>
  )
}
