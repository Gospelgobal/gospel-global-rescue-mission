import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Cross, Heart } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/mission', label: 'Our Mission' },
  { to: '/outreach', label: 'Outreach' },
  { to: '/global-missions', label: 'Global Missions' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/prayer', label: 'Prayer' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-gold-400/40 transition-all duration-300">
              <Cross className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-white font-700 text-sm leading-tight">Gospel Global</div>
              <div className="text-gold-400 text-xs font-sans tracking-widest uppercase">Rescue Mission</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link font-sans text-sm font-500 transition-colors duration-200 ${
                    isActive ? 'text-gold-400 active' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/donate"
              className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-sans font-700 text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? 'max-h-screen opacity-100 pt-4 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-sm font-500 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-white/5'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-gold-400 text-navy-950 font-700 text-sm py-3 px-6 rounded-full"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
