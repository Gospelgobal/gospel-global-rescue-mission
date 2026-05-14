import { Link } from 'react-router-dom'
import { Cross, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter Strip */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-700 text-white">Stay Connected to the Mission</h3>
              <p className="text-white/60 font-sans text-sm mt-1">Receive testimonies, updates, and urgent prayer needs.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-400 hover:bg-gold-300 text-navy-950 font-700 text-sm px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                <Cross className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-white font-700 text-sm leading-tight">Gospel Global</div>
                <div className="text-gold-400 text-xs font-sans tracking-widest uppercase">Rescue Mission</div>
              </div>
            </Link>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
              Bringing the hope of the Gospel and the hand of compassion to the world's most vulnerable — one life, one nation at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-white/5 hover:bg-gold-400 hover:text-navy-950 text-white/60 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/mission', label: 'Our Mission' },
                { to: '/outreach', label: 'Outreach Programs' },
                { to: '/global-missions', label: 'Global Missions' },
                { to: '/volunteer', label: 'Volunteer' },
                { to: '/prayer', label: 'Prayer Requests' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/50 hover:text-gold-400 font-sans text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-400/40 group-hover:w-6 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm tracking-widest uppercase mb-5">Programs</h4>
            <ul className="space-y-3">
              {[
                'Evangelism Outreach',
                'Food Relief Program',
                'Orphan Support',
                'Emergency Aid',
                'Discipleship Schools',
                'Medical Missions',
                'Education Support',
                'Clean Water Initiative',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-gold-400 font-sans text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-400/40 group-hover:w-6 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-700 text-white text-sm tracking-widest uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/50 font-sans text-sm">
                  123 Mission Boulevard, Suite 400<br />
                  Atlanta, GA 30301, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+14045550100" className="text-white/50 hover:text-gold-400 font-sans text-sm transition-colors">
                  +1 (404) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:info@gospelglobalrescue.org" className="text-white/50 hover:text-gold-400 font-sans text-sm transition-colors">
                  info@gospelglobalrescue.org
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-1">EIN / Tax ID</div>
              <div className="text-white/70 font-sans text-sm">47-1234567</div>
              <div className="text-white/40 font-sans text-xs mt-1">501(c)(3) Registered Nonprofit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-sans text-xs">
            © {new Date().getFullYear()} Gospel Global Rescue Mission. All rights reserved. Made with{' '}
            <Heart className="inline w-3 h-3 text-gold-400" /> for the Nations.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Financial Reports'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-gold-400 font-sans text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
