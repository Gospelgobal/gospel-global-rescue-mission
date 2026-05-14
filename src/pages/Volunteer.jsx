import { useState } from 'react'
import { CheckCircle, Globe, Heart, Stethoscope, GraduationCap, Camera, Code, Music } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import DonationBanner from '../components/ui/DonationBanner'

const roles = [
  { icon: Globe, title: 'Field Evangelist', desc: 'Join crusade teams, lead outreach, and preach the Gospel in nations where the harvest is ripe.' },
  { icon: Stethoscope, title: 'Medical Professional', desc: 'Doctors, nurses, surgeons, and health workers needed for medical mission camps across Africa and Asia.' },
  { icon: GraduationCap, title: 'Education Volunteer', desc: 'Teachers, tutors, and curriculum developers supporting schools in underserved communities worldwide.' },
  { icon: Heart, title: 'Humanitarian Aid', desc: 'Logistics, food distribution, disaster response, and community development specialists.' },
  { icon: Camera, title: 'Media & Communications', desc: 'Photographers, videographers, and storytellers who capture the mission for global impact.' },
  { icon: Code, title: 'Tech & Administration', desc: 'IT professionals, accountants, and administrators who keep the mission running smoothly.' },
]

export default function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', role: '', skills: '', availability: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.role) e.role = 'Please select a role'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const Field = ({ id, label, type = 'text', placeholder, required, error, ...rest }) => (
    <div>
      <label htmlFor={id} className="block font-sans text-sm font-600 text-white/70 mb-2">{label}{required && <span className="text-gold-400 ml-1">*</span>}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full bg-navy-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-colors ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-gold-400/60'}`}
        value={form[id]}
        onChange={(e) => { setForm(p => ({ ...p, [id]: e.target.value })); setErrors(p => ({ ...p, [id]: undefined })) }}
        {...rest}
      />
      {error && <p className="font-sans text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80" alt="Volunteer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Get Involved</div>
          <h1 className="section-title text-white max-w-2xl">Answer the Call. <span className="text-gradient-gold italic">Change a Nation.</span></h1>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="Volunteer Roles" title="Your Gift Has a Place on the Field" subtitle="Whether you're a seasoned professional or a first-time volunteer — we have a role designed for your unique calling." light centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {roles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy-900 rounded-2xl p-7 border border-white/5 hover:border-gold-400/30 transition-all duration-300 card-hover">
                <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-700 text-white mb-3">{title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal">
            <SectionHeader label="Apply Now" title="Volunteer Application" subtitle="Complete the form below and our team will contact you within 48 hours with next steps." light centered />
          </div>

          {submitted ? (
            <div className="reveal text-center py-16">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="font-display text-3xl font-700 text-white mb-4">Application Received!</h3>
              <p className="font-sans text-white/60 leading-relaxed max-w-md mx-auto">
                Thank you, {form.name}! Our volunteer coordinator will reach out to {form.email} within 48 hours. Welcome to the mission!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="reveal space-y-6 bg-navy-950 rounded-3xl p-8 md:p-12 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Full Name" placeholder="Your full name" required error={errors.name} />
                <Field id="email" label="Email Address" type="email" placeholder="your@email.com" required error={errors.email} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="phone" label="Phone Number" placeholder="+1 (555) 000-0000" />
                <Field id="country" label="Country of Residence" placeholder="United States" />
              </div>
              <div>
                <label htmlFor="role" className="block font-sans text-sm font-600 text-white/70 mb-2">Volunteer Role <span className="text-gold-400">*</span></label>
                <select
                  id="role"
                  className={`w-full bg-navy-800 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${errors.role ? 'border-red-500/50' : 'border-white/10 focus:border-gold-400/60'}`}
                  value={form.role}
                  onChange={(e) => { setForm(p => ({ ...p, role: e.target.value })); setErrors(p => ({ ...p, role: undefined })) }}
                >
                  <option value="" className="bg-navy-800">Select a role...</option>
                  {roles.map(({ title }) => <option key={title} value={title} className="bg-navy-800">{title}</option>)}
                </select>
                {errors.role && <p className="font-sans text-red-400 text-xs mt-1">{errors.role}</p>}
              </div>
              <Field id="skills" label="Skills & Qualifications" placeholder="Tell us about your professional background, languages, certifications..." />
              <div>
                <label htmlFor="availability" className="block font-sans text-sm font-600 text-white/70 mb-2">Availability</label>
                <select
                  id="availability"
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400/60 transition-colors"
                  value={form.availability}
                  onChange={(e) => setForm(p => ({ ...p, availability: e.target.value }))}
                >
                  <option value="" className="bg-navy-800">Select availability...</option>
                  {['1-2 weeks', '1 month', '3 months', '6+ months', 'Full-time deployment'].map(a => <option key={a} value={a} className="bg-navy-800">{a}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-600 text-white/70 mb-2">Why Do You Want to Serve?</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your heart for missions and what drives you..."
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors resize-none"
                  value={form.message}
                  onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-400 hover:bg-gold-300 text-navy-950 font-sans font-700 text-sm py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <DonationBanner />
    </>
  )
}
