import SectionHeader from '../components/ui/SectionHeader'
import DonationBanner from '../components/ui/DonationBanner'

const missions = [
  { region: 'Sub-Saharan Africa', nations: 32, events: 4200, salvations: '1.8M+', img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=700&q=80', highlight: 'Operation Kenya 2024 drew 1.2 million people across 30 nights.', active: true },
  { region: 'South & Southeast Asia', nations: 18, events: 2800, salvations: '890K+', img: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=700&q=80', highlight: 'Over 300 discipleship schools planted across India, Myanmar, and the Philippines.', active: true },
  { region: 'Latin America', nations: 15, events: 1900, salvations: '620K+', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=700&q=80', highlight: 'Brazil crusade in 2023: 220,000 gathered in Recife. 85,000 salvation decisions.', active: true },
  { region: 'Eastern Europe & Caucasus', nations: 11, events: 900, salvations: '180K+', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80', highlight: 'War relief ministry in Ukraine since 2022 — serving 120,000+ displaced families.', active: true },
  { region: 'Middle East & North Africa', nations: 7, events: 400, salvations: '62K+', img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=700&q=80', highlight: 'Underground church networks growing in 7 restricted-access nations.', active: true },
  { region: 'Pacific & Oceania', nations: 8, events: 320, salvations: '48K+', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80', highlight: 'Remote island missions across PNG, Vanuatu, and Solomon Islands.', active: false },
]

export default function GlobalMissions() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80" alt="Global" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Global Reach</div>
          <h1 className="section-title text-white max-w-2xl">85+ Nations, <span className="text-gradient-gold italic">One Mission</span></h1>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="Mission Regions" title="Where We Are Active" subtitle="From the megacities of Asia to the remote villages of Africa — the Gospel knows no borders." light centered />
          </div>

          {/* World Map placeholder */}
          <div className="reveal bg-navy-900 rounded-3xl border border-white/5 p-8 mb-16 text-center">
            <div className="h-64 flex items-center justify-center">
              <div>
                <div className="font-display text-6xl text-gradient-gold mb-2">🌍</div>
                <div className="font-sans text-white/40 text-sm">Interactive Mission Map — 85+ Nations</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map(({ region, nations, events, salvations, img, highlight, active }, i) => (
              <div key={region} className="reveal group bg-navy-900 rounded-3xl overflow-hidden border border-white/5 hover:border-gold-400/20 transition-all duration-300 card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={img} alt={region} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  {active && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-sans text-emerald-400 text-xs">Active</span>
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-700 text-white mb-4">{region}</h3>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { val: nations, lab: 'Nations' },
                      { val: `${events}+`, lab: 'Events' },
                      { val: salvations, lab: 'Salvations' },
                    ].map(({ val, lab }) => (
                      <div key={lab} className="text-center bg-navy-950/50 rounded-xl p-3">
                        <div className="font-display text-lg font-700 text-gradient-gold">{val}</div>
                        <div className="font-sans text-white/30 text-xs">{lab}</div>
                      </div>
                    ))}
                  </div>
                  <p className="font-sans text-white/40 text-sm leading-relaxed italic">"{highlight}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationBanner title="Fund the Next Mission" subtitle="Your gift sends teams into the field, pays for crusade logistics, and equips local leaders to carry the torch after we leave." />
    </>
  )
}
