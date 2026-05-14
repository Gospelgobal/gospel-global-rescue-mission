import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'

export default function DonationBanner({
  title = 'Every Gift Changes Lives',
  subtitle = 'Your generous support powers rescue missions, feeds families, and brings the Gospel to the unreached.',
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-navy-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #fec84b 0%, transparent 50%), radial-gradient(circle at 75% 50%, #1e4278 0%, transparent 60%)`
        }} />
      </div>
      {/* Gold horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-5 py-2 mb-8">
          <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
          <span className="text-gold-400 font-sans text-xs tracking-widest uppercase">Make an Impact</span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-700 text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="font-sans text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/donate"
            className="flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-navy-950 font-sans font-700 text-sm px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30 group"
          >
            <Heart className="w-4 h-4 fill-current" />
            Give Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/volunteer"
            className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-sans font-600 text-sm px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            Join the Mission
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {['501(c)(3) Nonprofit', 'Financial Transparency', 'Charity Navigator Rated', 'GuideStar Certified'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/30 font-sans text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400/50" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
