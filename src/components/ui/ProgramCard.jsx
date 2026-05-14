import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProgramCard({ icon: Icon, title, description, color = 'gold', tag }) {
  const colorMap = {
    gold: 'bg-gold-400/10 text-gold-500 border-gold-400/20 hover:border-gold-400/60',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400/60',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-400/60',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:border-rose-400/60',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-400/60',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-400/60',
  }

  return (
    <div className={`group relative bg-navy-900 border rounded-2xl p-7 card-hover cursor-pointer ${colorMap[color]}`}>
      {tag && (
        <span className="absolute top-4 right-4 text-xs font-sans font-600 bg-gold-400/10 text-gold-400 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[color].split(' ').slice(0, 2).join(' ')}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-xl font-700 text-white mb-3">{title}</h3>
      <p className="font-sans text-white/50 text-sm leading-relaxed mb-5">{description}</p>
      <Link
        to="/outreach"
        className="inline-flex items-center gap-2 font-sans text-xs font-600 text-gold-400 group-hover:gap-3 transition-all duration-300 uppercase tracking-wider"
      >
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}
