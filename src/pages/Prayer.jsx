import { useState } from 'react'
import { CheckCircle, Clock, MapPin } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const recentRequests = [
  { initials: 'AM', name: 'Abigail M.', location: 'Ghana', request: 'Praying for divine healing for my husband who was diagnosed with cancer. We are standing on God\'s promise and asking for His miraculous intervention.', time: '2 hours ago', category: 'Healing' },
  { initials: 'JR', name: 'James R.', location: 'USA', request: 'Please pray for a financial breakthrough. God has given us a promise and we are waiting for His provision to manifest in our lives this season.', time: '5 hours ago', category: 'Provision' },
  { initials: 'SK', name: 'Sarah K.', location: 'India', request: 'Our village is experiencing severe drought. We are believing for rain and for God\'s mercy to sustain our crops and livestock.', time: '1 day ago', category: 'Community' },
  { initials: 'PM', name: 'Pastor M.', location: 'Nigeria', request: 'Pray for the safety of our evangelism teams going into the northern states. We face threats but trust God for protection and boldness.', time: '1 day ago', category: 'Mission Safety' },
  { initials: 'LC', name: 'Lydia C.', location: 'Brazil', request: 'I lost my job and my home. I have three children. Please pray for a way forward — for housing, work, and the strength to keep going.', time: '2 days ago', category: 'Family' },
  { initials: 'TW', name: 'Thomas W.', location: 'Uganda', request: 'Our church building collapsed in the floods. 200 families now without a place to worship. Pray for resources to rebuild.', time: '3 days ago', category: 'Community' },
]

const categoryColors = {
  'Healing': 'text-rose-400 bg-rose-400/10',
  'Provision': 'text-gold-400 bg-gold-400/10',
  'Community': 'text-blue-400 bg-blue-400/10',
  'Mission Safety': 'text-emerald-400 bg-emerald-400/10',
  'Family': 'text-purple-400 bg-purple-400/10',
}

export default function Prayer() {
  const [form, setForm] = useState({ name: '', email: '', location: '', category: '', request: '', private: false })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.request.trim() || form.request.length < 20) e.request = 'Please share your prayer need (minimum 20 characters)'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #fec84b 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Prayer Wall</div>
          <h1 className="section-title text-white max-w-2xl">You Are Not <span className="text-gradient-gold italic">Alone in This</span></h1>
          <p className="font-sans text-white/60 text-lg mt-4 max-w-xl">Our 24/7 intercession team receives every prayer request and stands in agreement with you before the throne of grace.</p>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="reveal">
              <SectionHeader label="Submit Request" title="Share Your Prayer Need" light />
              {submitted ? (
                <div className="text-center py-12 bg-navy-900 rounded-3xl border border-white/5 p-8">
                  <div className="w-20 h-20 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-gold-400" />
                  </div>
                  <h3 className="font-display text-2xl font-700 text-white mb-3">Prayer Received!</h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                    Your request has been sent to our intercession team. We are praying with you right now. God hears every cry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-navy-900 rounded-3xl p-8 border border-white/5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-sm font-600 text-white/70 mb-2">Your Name <span className="text-gold-400">*</span></label>
                      <input className={`w-full bg-navy-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-gold-400/60'}`} placeholder="First name is fine" value={form.name} onChange={(e) => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })) }} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-sans text-sm font-600 text-white/70 mb-2">Location</label>
                      <input className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="City, Country" value={form.location} onChange={(e) => setForm(p => ({ ...p, location: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-600 text-white/70 mb-2">Category</label>
                    <select className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400/60 transition-colors" value={form.category} onChange={(e) => setForm(p => ({ ...p, category: e.target.value }))}>
                      <option value="" className="bg-navy-800">Select category...</option>
                      {['Healing', 'Provision', 'Family', 'Community', 'Salvation', 'Guidance', 'Mission Safety', 'Other'].map(c => <option key={c} value={c} className="bg-navy-800">{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-600 text-white/70 mb-2">Your Prayer Request <span className="text-gold-400">*</span></label>
                    <textarea rows={5} className={`w-full bg-navy-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-colors resize-none ${errors.request ? 'border-red-500/50' : 'border-white/10 focus:border-gold-400/60'}`} placeholder="Share what's on your heart. Be as specific as you feel led..." value={form.request} onChange={(e) => { setForm(p => ({ ...p, request: e.target.value })); setErrors(p => ({ ...p, request: undefined })) }} />
                    {errors.request && <p className="text-red-400 text-xs mt-1">{errors.request}</p>}
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-gold-400" checked={form.private} onChange={(e) => setForm(p => ({ ...p, private: e.target.checked }))} />
                    <span className="font-sans text-white/50 text-sm">Keep this request private (only seen by our prayer team)</span>
                  </label>
                  <button type="submit" className="w-full bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20">
                    Submit Prayer Request
                  </button>
                </form>
              )}
            </div>

            {/* Recent Requests */}
            <div className="reveal-right">
              <SectionHeader label="Prayer Wall" title="Recent Requests" light />
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {recentRequests.map((p) => (
                  <div key={p.initials + p.time} className="bg-navy-900 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400 font-700 text-sm shrink-0">{p.initials}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-2 mb-2">
                          <span className="font-sans font-600 text-white text-sm">{p.name}</span>
                          <div className="flex items-center gap-1 text-white/30">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{p.location}</span>
                          </div>
                          {p.category && (
                            <span className={`font-sans text-xs px-2 py-0.5 rounded-full ${categoryColors[p.category] || 'text-white/40 bg-white/5'}`}>{p.category}</span>
                          )}
                        </div>
                        <p className="font-sans text-white/50 text-sm leading-relaxed line-clamp-3">{p.request}</p>
                        <div className="flex items-center gap-1 mt-2 text-white/25">
                          <Clock className="w-3 h-3" />
                          <span className="font-sans text-xs">{p.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
