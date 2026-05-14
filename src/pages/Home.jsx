import { Link } from 'react-router-dom'
import { Globe, Users, Heart, Zap, BookOpen, Utensils, Home as HomeIcon, Droplets, ShieldCheck, Stethoscope, GraduationCap, ArrowRight, Play } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import StatCard from '../components/ui/StatCard'
import DonationBanner from '../components/ui/DonationBanner'
import TestimonialSlider from '../components/ui/TestimonialSlider'
import ProgramCard from '../components/ui/ProgramCard'

const stats = [
  { value: 85, suffix: '+', label: 'Nations Reached', icon: Globe },
  { value: 4200000, suffix: '+', label: 'Lives Impacted', icon: Heart },
  { value: 12000, suffix: '+', label: 'Outreach Events', icon: Zap },
  { value: 38000, suffix: '+', label: 'Global Volunteers', icon: Users },
]

const programs = [
  {
    icon: Globe,
    title: 'Evangelism Crusades',
    description: 'Mass gospel outreach events drawing hundreds of thousands, with healings, salvations, and miraculous encounters with God\'s power.',
    color: 'gold',
    tag: 'Core Mission',
  },
  {
    icon: Utensils,
    title: 'Food Relief Programs',
    description: 'Emergency food distribution and sustainable nutrition programs serving over 500,000 meals monthly across famine-stricken regions.',
    color: 'emerald',
  },
  {
    icon: Home,
    title: 'Orphan Care & Support',
    description: 'Safe homes, education, counseling, and family reunification for orphaned children from war zones and natural disasters.',
    color: 'blue',
  },
  {
    icon: Stethoscope,
    title: 'Medical Missions',
    description: 'Mobile clinics, surgical camps, and health education in remote areas where healthcare is a luxury, not a right.',
    color: 'rose',
  },
  {
    icon: GraduationCap,
    title: 'Education Support',
    description: 'Scholarships, school construction, teacher training, and learning materials for communities where education opens doors to destiny.',
    color: 'purple',
  },
  {
    icon: Droplets,
    title: 'Clean Water Initiative',
    description: 'Drilling boreholes and building water systems in sub-Saharan Africa, giving villages their first access to clean, safe water.',
    color: 'amber',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', label: 'Kenya Crusade 2024' },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80', label: 'Nigeria Food Relief' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', label: 'Haiti Rebuilding' },
  { src: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=600&q=80', label: 'India Discipleship' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', label: 'DR Congo Medical' },
  { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80', label: 'Brazil Outreach' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1800&q=80"
            alt="Global mission"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950/90" />
          {/* Gold accent overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full border border-gold-400/20"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 6 + 6}s`,
                '--delay': `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="section-label text-gold-400 mb-6">
              <span className="block w-8 h-px bg-gold-400" />
              Bringing Hope to the Nations
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-800 text-white leading-[1.05] mb-8">
              Rescue.{' '}
              <span className="text-gradient-gold italic">Restore.</span>
              <br />
              Transform.
            </h1>

            <p className="font-sans text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Gospel Global Rescue Mission is a Spirit-led movement reaching the unreached, healing the broken, and releasing the captives across 85+ nations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-sans font-700 text-sm px-10 py-4.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/30 group"
              >
                <Heart className="w-4 h-4 fill-current" />
                Donate Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/mission"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/25 hover:border-white/60 text-white hover:bg-white/5 font-sans font-600 text-sm px-10 py-4.5 rounded-full transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-white" />
                Join the Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── MISSION STATEMENT ──────────────────────────────────── */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-gold-400" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-gold-400" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="reveal">
            <div className="section-label text-gold-400 justify-center mb-6">
              <span className="block w-8 h-px bg-gold-400" />
              Our Purpose
            </div>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-700 text-white leading-tight italic mb-8">
              "He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free."
            </blockquote>
            <cite className="font-sans text-gold-400 text-sm tracking-widest uppercase not-italic">— Luke 4:18 —</cite>
            <p className="font-sans text-white/60 text-lg mt-10 max-w-3xl mx-auto leading-relaxed">
              Gospel Global Rescue Mission operates at the intersection of the supernatural and the humanitarian. We believe that the Gospel of Jesus Christ is the only complete solution to the world's deepest crises — and we act on that belief every day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATISTICS ─────────────────────────────────────────── */}
      <section className="bg-navy-900 py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            label="Global Impact"
            title="Numbers That Tell a Story"
            subtitle="Behind every statistic is a face, a family, a transformation. Here's the scope of what God has done through your partnership."
            light
            centered
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 reveal">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} light />
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTREACH PROGRAMS ──────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <SectionHeader
              label="What We Do"
              title={<>Programs That<br />Change Everything</>}
              light
            />
            <Link to="/outreach" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-sm font-600 uppercase tracking-wider whitespace-nowrap transition-colors group mb-8">
              View All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <ProgramCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED MISSION FEATURE ───────────────────────────── */}
      <section className="bg-navy-900 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-label text-gold-400">
                <span className="block w-8 h-px bg-gold-400" />
                Featured Mission
              </div>
              <h2 className="section-title text-white mt-3 mb-6">
                Operation Kenya: <span className="text-gradient-gold italic">One Million Souls</span>
              </h2>
              <p className="font-sans text-white/60 text-lg leading-relaxed mb-6">
                In 2024, we launched our most ambitious crusade ever — a 30-day gospel saturation of Kenya's Rift Valley, Nairobi, and Coast regions. Over 1.2 million people gathered over 12 nights of open-air evangelism.
              </p>
              <p className="font-sans text-white/50 leading-relaxed mb-8">
                More than 380,000 documented first-time decisions for Christ. 47 deaf ears opened. Hundreds of documented healings. 14 new churches planted from the fruit of just one mission.
              </p>
              <div className="flex gap-6 mb-8">
                {[
                  { value: '1.2M+', label: 'Attendees' },
                  { value: '380K', label: 'Salvations' },
                  { value: '14', label: 'Churches Planted' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-3xl font-700 text-gradient-gold">{value}</div>
                    <div className="font-sans text-white/40 text-xs uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/global-missions"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30 group"
              >
                See All Missions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="reveal-right relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Kenya mission"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-navy-950 fill-navy-950 ml-0.5" />
                      </div>
                      <div>
                        <div className="font-sans font-600 text-white text-sm">Watch the Full Testimony</div>
                        <div className="font-sans text-white/50 text-xs">Operation Kenya 2024 Documentary</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-navy-900 shadow-xl hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80"
                  alt="Mission detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader
              label="Testimonies"
              title="Lives Transformed by Grace"
              subtitle="The greatest miracle isn't the empty grave — it's the living testimony of someone whose life has been completely changed."
              light
              centered
            />
          </div>
          <div className="reveal">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ─── VOLUNTEER CTA ──────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80"
            alt="Volunteers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="reveal">
            <div className="section-label text-gold-400 justify-center mb-6">
              <span className="block w-8 h-px bg-gold-400" />
              Be Part of the Story
            </div>
            <h2 className="section-title text-white mb-6">
              The Harvest is Plentiful,<br />
              <span className="text-gradient-gold italic">the Workers are Few</span>
            </h2>
            <p className="font-sans text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a doctor, teacher, evangelist, or simply willing — there's a place for you on the mission field. Your unique gifts are needed in 85+ nations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30"
              >
                Apply to Volunteer
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/25 text-white font-600 text-sm px-10 py-4 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRAYER PREVIEW ─────────────────────────────────────── */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionHeader
                label="Prayer Wall"
                title="We Stand in Agreement With You"
                subtitle="Send your prayer request to our 24/7 intercession team. Thousands of believers are praying over your needs right now."
                light
              />
              <Link
                to="/prayer"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30 group"
              >
                Submit Prayer Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="reveal-right space-y-4">
              {[
                { initials: 'AM', name: 'Abigail M.', location: 'Ghana', request: 'Praying for divine healing and complete restoration for my husband who was diagnosed with cancer last week...', time: '2 hours ago' },
                { initials: 'JR', name: 'James R.', location: 'USA', request: 'Please pray for a breakthrough in our finances. We are standing on God\'s promise of provision and favor...', time: '5 hours ago' },
                { initials: 'SK', name: 'Sarah K.', location: 'India', request: 'Prayer needed for my village — we\'ve been experiencing severe drought. Believing for rain and for God\'s mercy...', time: '1 day ago' },
              ].map((p) => (
                <div key={p.initials} className="bg-navy-950 rounded-2xl p-5 border border-white/5 hover:border-gold-400/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400 font-700 text-sm shrink-0">
                      {p.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans font-600 text-white text-sm">{p.name}</span>
                        <span className="text-white/30 text-xs">·</span>
                        <span className="text-white/30 font-sans text-xs">{p.location}</span>
                      </div>
                      <p className="font-sans text-white/50 text-sm leading-relaxed line-clamp-2">{p.request}</p>
                      <span className="font-sans text-white/25 text-xs mt-2 block">{p.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DONATION BANNER ────────────────────────────────────── */}
      <DonationBanner />

      {/* ─── GALLERY ────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader
              label="Global Gallery"
              title="Glimpses From the Field"
              subtitle="Snapshots of God at work across continents — testimonies captured in color and light."
              light
              centered
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ aspectRatio: i % 3 === 1 ? '4/5' : '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="font-sans text-white font-600 text-sm">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link
              to="/global-missions"
              className="inline-flex items-center gap-2 border-2 border-gold-400/30 hover:border-gold-400 text-gold-400 font-sans font-600 text-sm px-8 py-3.5 rounded-full transition-all duration-300 group"
            >
              View All Missions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
