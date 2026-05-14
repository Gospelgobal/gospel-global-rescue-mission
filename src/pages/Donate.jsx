import { useState } from 'react'
import { Heart, RefreshCw, Shield, Globe, CheckCircle, CreditCard, Building, Smartphone } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const presets = [25, 50, 100, 250, 500, 1000]

const impacts = [
  { amount: 25, impact: 'Feeds a child for one month through our food relief program' },
  { amount: 50, impact: 'Provides clean water to a family for six months' },
  { amount: 100, impact: 'Funds a medical consultation for 10 remote patients' },
  { amount: 250, impact: 'Sponsors one child\'s education for an entire school year' },
  { amount: 500, impact: 'Equips and sends one volunteer into the field for two weeks' },
  { amount: 1000, impact: 'Drills a community water well serving 200+ people' },
]

const paymentMethods = [
  { id: 'card', icon: CreditCard, label: 'Credit / Debit Card', sub: 'Visa, Mastercard, Amex' },
  { id: 'paypal', icon: Smartphone, label: 'PayPal', sub: 'Fast & secure' },
  { id: 'bank', icon: Building, label: 'Bank Transfer', sub: 'ACH / Wire' },
  { id: 'flutterwave', icon: Globe, label: 'Flutterwave', sub: 'Africa & Global' },
]

export default function Donate() {
  const [amount, setAmount] = useState(100)
  const [custom, setCustom] = useState('')
  const [frequency, setFrequency] = useState('once')
  const [method, setMethod] = useState('card')
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '', cvv: '' })
  const [submitted, setSubmitted] = useState(false)

  const displayAmount = custom ? parseFloat(custom) || 0 : amount
  const currentImpact = impacts.find(i => i.amount <= displayAmount)

  const handleDonate = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-navy-950">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fec84b 0%, transparent 60%), radial-gradient(circle at 80% 50%, #1e4278 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="section-label text-gold-400 mb-4"><span className="block w-8 h-px bg-gold-400" />Give</div>
          <h1 className="section-title text-white max-w-2xl">Your Gift <span className="text-gradient-gold italic">Reaches Nations</span></h1>
          <p className="font-sans text-white/60 text-lg mt-4 max-w-xl">100% of your donation goes directly to the mission. We are a 501(c)(3) nonprofit — your gift is fully tax-deductible.</p>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="max-w-6xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-16 reveal">
              <div className="w-24 h-24 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-gold-400" />
              </div>
              <h2 className="font-display text-4xl font-700 text-white mb-4">Thank You, {form.name || 'Generous Donor'}!</h2>
              <p className="font-sans text-white/60 text-lg mb-2">Your gift of <span className="text-gold-400 font-700">${displayAmount.toLocaleString()}</span> has been received.</p>
              <p className="font-sans text-white/40 text-sm max-w-md mx-auto">A receipt will be sent to {form.email || 'your email'}. Your generosity is changing lives across 85+ nations right now.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Left: Amount & Impact */}
              <div className="lg:col-span-3 space-y-8 reveal">
                {/* Frequency */}
                <div className="bg-navy-900 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-display text-xl font-700 text-white mb-4">Donation Frequency</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[{ id: 'once', label: 'Give Once' }, { id: 'monthly', label: 'Monthly Partner' }].map(({ id, label }) => (
                      <button key={id} onClick={() => setFrequency(id)}
                        className={`py-3 rounded-xl font-sans font-600 text-sm transition-all duration-300 ${frequency === id ? 'bg-gold-400 text-navy-950' : 'bg-navy-800 text-white/60 hover:text-white border border-white/10'}`}>
                        {id === 'monthly' && <RefreshCw className="inline w-3.5 h-3.5 mr-1.5" />}{label}
                      </button>
                    ))}
                  </div>
                  {frequency === 'monthly' && (
                    <p className="font-sans text-gold-400/80 text-xs mt-3 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-current" /> Monthly partners unlock priority mission updates and prayer coverage.
                    </p>
                  )}
                </div>

                {/* Amount */}
                <div className="bg-navy-900 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-display text-xl font-700 text-white mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {presets.map((p) => (
                      <button key={p} onClick={() => { setAmount(p); setCustom('') }}
                        className={`py-3 rounded-xl font-sans font-600 text-sm transition-all duration-300 ${amount === p && !custom ? 'bg-gold-400 text-navy-950 shadow-lg shadow-gold-400/20' : 'bg-navy-800 text-white/60 hover:text-white border border-white/10 hover:border-gold-400/30'}`}>
                        ${p}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-white/50 text-sm">Custom:</span>
                    <div className="flex-1 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
                      <input type="number" placeholder="Other amount" min="1"
                        className="w-full bg-navy-800 border border-white/10 focus:border-gold-400/60 rounded-xl pl-8 pr-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                        value={custom} onChange={(e) => { setCustom(e.target.value); setAmount(0) }} />
                    </div>
                  </div>
                </div>

                {/* Impact */}
                {currentImpact && (
                  <div className="bg-gold-400/5 border border-gold-400/20 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <Heart className="w-5 h-5 text-gold-400 fill-current shrink-0 mt-0.5" />
                      <div>
                        <div className="font-sans font-700 text-gold-400 text-sm mb-1">Your Impact</div>
                        <p className="font-sans text-white/60 text-sm leading-relaxed">
                          <span className="text-white font-700">${displayAmount}</span> — {currentImpact.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Method */}
                <div className="bg-navy-900 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-display text-xl font-700 text-white mb-4">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {paymentMethods.map(({ id, icon: Icon, label, sub }) => (
                      <button key={id} onClick={() => setMethod(id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${method === id ? 'border-gold-400/60 bg-gold-400/5' : 'border-white/10 bg-navy-800 hover:border-white/25'}`}>
                        <Icon className={`w-5 h-5 ${method === id ? 'text-gold-400' : 'text-white/40'}`} />
                        <div className="text-left">
                          <div className={`font-sans font-600 text-sm ${method === id ? 'text-white' : 'text-white/60'}`}>{label}</div>
                          <div className="font-sans text-white/30 text-xs">{sub}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <form onSubmit={handleDonate} className="space-y-4">
                    <div>
                      <label className="block font-sans text-sm font-600 text-white/70 mb-2">Full Name</label>
                      <input className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="As it appears on card" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block font-sans text-sm font-600 text-white/70 mb-2">Email Address</label>
                      <input type="email" className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="For receipt" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} />
                    </div>
                    {method === 'card' && (
                      <>
                        <div>
                          <label className="block font-sans text-sm font-600 text-white/70 mb-2">Card Number</label>
                          <input className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="1234 5678 9012 3456" value={form.card} onChange={(e) => setForm(p => ({ ...p, card: e.target.value }))} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block font-sans text-sm font-600 text-white/70 mb-2">Expiry</label>
                            <input className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="MM / YY" value={form.expiry} onChange={(e) => setForm(p => ({ ...p, expiry: e.target.value }))} />
                          </div>
                          <div>
                            <label className="block font-sans text-sm font-600 text-white/70 mb-2">CVV</label>
                            <input className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold-400/60 transition-colors" placeholder="123" value={form.cvv} onChange={(e) => setForm(p => ({ ...p, cvv: e.target.value }))} />
                          </div>
                        </div>
                      </>
                    )}
                    {method === 'bank' && (
                      <div className="bg-navy-800 rounded-xl p-5 border border-white/10">
                        <p className="font-sans text-white/60 text-sm mb-3">Wire transfer details:</p>
                        {[['Bank', 'First National Bank'], ['Account Name', 'Gospel Global Rescue Mission'], ['Account No.', '1234567890'], ['Routing No.', '021000021'], ['SWIFT', 'FNBUS33XXX']].map(([k, v]) => (
                          <div key={k} className="flex justify-between py-1.5 border-b border-white/5 last:border-0">
                            <span className="font-sans text-white/40 text-xs">{k}</span>
                            <span className="font-sans text-white text-xs font-600">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <button type="submit" className="w-full bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20 flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4 fill-current" />
                      {frequency === 'monthly' ? `Give $${displayAmount}/month` : `Donate $${displayAmount}`}
                    </button>
                  </form>
                </div>
              </div>

              {/* Right: Summary */}
              <div className="lg:col-span-2 space-y-6 reveal-right">
                <div className="bg-navy-900 rounded-2xl p-6 border border-white/5 sticky top-28">
                  <h3 className="font-display text-xl font-700 text-white mb-6">Donation Summary</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      ['Amount', `$${displayAmount.toLocaleString()}`],
                      ['Frequency', frequency === 'monthly' ? 'Monthly' : 'One-Time'],
                      ['Tax Deductible', 'Yes — 501(c)(3)'],
                      ['Currency', 'USD'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2.5 border-b border-white/5 last:border-0">
                        <span className="font-sans text-white/40 text-sm">{k}</span>
                        <span className="font-sans text-white text-sm font-600">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs mb-6">
                    <Shield className="w-3.5 h-3.5" />
                    256-bit SSL encrypted & secure
                  </div>
                  <div className="space-y-3">
                    {impacts.slice(0, 4).map(({ amount: a, impact }) => (
                      <div key={a} className={`p-3 rounded-xl border transition-colors ${displayAmount >= a ? 'border-gold-400/30 bg-gold-400/5' : 'border-white/5 bg-navy-800/50 opacity-50'}`}>
                        <div className="font-sans font-700 text-gold-400 text-xs mb-0.5">${a}</div>
                        <div className="font-sans text-white/50 text-xs leading-relaxed">{impact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
