import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please write at least 20 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const Field = ({ id, label, required, error, children }) => (
    <div>
      <label className="block font-sans text-sm font-600 text-white/70 mb-2">{label}{required && <span className="text-gold-400 ml-1">*</span>}</label>
      {children}
      {error && <p className="font-sans text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )

  const inputCls = (err) => `w-full bg-navy-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-colors ${err ? 'border-red-500/50' : 'border-white/10 focus:border-gold-400/60'}`

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-navy-950">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #fec84b 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Reach Us</div>
          <h1 className="section-title text-white max-w-2xl">We Would Love <span className="text-gradient-gold italic">to Hear From You</span></h1>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 reveal">
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: 'Headquarters', value: '123 Mission Boulevard, Suite 400\nAtlanta, GA 30301, USA' },
                  { icon: Phone, label: 'Phone', value: '+1 (404) 555-0100' },
                  { icon: Mail, label: 'Email', value: 'info@gospelglobalrescue.org' },
                  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM ET\nSat: 9:00 AM – 1:00 PM ET' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 bg-gold-400/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-sans font-700 text-white text-sm mb-1">{label}</div>
                      <div className="font-sans text-white/50 text-sm whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="font-sans font-700 text-white text-sm tracking-widest uppercase mb-4">Regional Offices</h3>
                <div className="space-y-3">
                  {['Nairobi, Kenya — Africa HQ', 'Lagos, Nigeria — West Africa', 'Manila, Philippines — Asia Pacific', 'São Paulo, Brazil — Latin America', 'Kyiv, Ukraine — Eastern Europe'].map(o => (
                    <div key={o} className="flex items-center gap-2 text-white/40 font-sans text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-8">
                <h3 className="font-sans font-700 text-white text-sm tracking-widest uppercase mb-4">Follow the Mission</h3>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-gold-400 hover:text-navy-950 text-white/40 rounded-full flex items-center justify-center transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal-right">
              {submitted ? (
                <div className="text-center py-16 bg-navy-900 rounded-3xl border border-white/5 p-8">
                  <div className="w-20 h-20 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-gold-400" />
                  </div>
                  <h3 className="font-display text-3xl font-700 text-white mb-3">Message Received!</h3>
                  <p className="font-sans text-white/60 leading-relaxed max-w-sm mx-auto">
                    Thank you, {form.name}! Our team will respond to {form.email} within 24–48 business hours. God bless you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-navy-900 rounded-3xl p-8 md:p-12 border border-white/5 space-y-6">
                  <h2 className="font-display text-2xl font-700 text-white">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field id="name" label="Full Name" required error={errors.name}>
                      <input className={inputCls(errors.name)} placeholder="Your full name" value={form.name} onChange={(e) => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })) }} />
                    </Field>
                    <Field id="email" label="Email Address" required error={errors.email}>
                      <input type="email" className={inputCls(errors.email)} placeholder="your@email.com" value={form.email} onChange={(e) => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: undefined })) }} />
                    </Field>
                  </div>
                  <Field id="subject" label="Subject">
                    <select className={inputCls(false)} value={form.subject} onChange={(e) => setForm(p => ({ ...p, subject: e.target.value }))}>
                      <option value="" className="bg-navy-800">Select a topic...</option>
                      {['General Inquiry', 'Partnership / Collaboration', 'Donation Questions', 'Volunteer Inquiry', 'Media / Press', 'Prayer Request', 'Other'].map(s => <option key={s} value={s} className="bg-navy-800">{s}</option>)}
                    </select>
                  </Field>
                  <Field id="message" label="Your Message" required error={errors.message}>
                    <textarea rows={6} className={`${inputCls(errors.message)} resize-none`} placeholder="How can we help you? Share your message, question, or heart..." value={form.message} onChange={(e) => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: undefined })) }} />
                  </Field>
                  <button type="submit" className="w-full bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
