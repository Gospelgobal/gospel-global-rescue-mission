import { useCounter } from '../../hooks/useCounter'

export default function StatCard({ value, suffix = '', label, icon: Icon, light = false }) {
  const { count, ref } = useCounter(value, 2200)

  return (
    <div
      ref={ref}
      className={`text-center p-8 rounded-2xl ${
        light
          ? 'bg-white/5 border border-white/10 hover:border-gold-400/30'
          : 'bg-navy-50 border border-navy-100 hover:border-gold-400/50'
      } transition-all duration-300 card-hover`}
    >
      {Icon && (
        <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-gold-500" />
        </div>
      )}
      <div className={`font-display text-5xl font-800 mb-2 ${light ? 'text-white' : 'text-navy-900'}`}>
        <span className="text-gradient-gold">{count.toLocaleString()}{suffix}</span>
      </div>
      <div className={`font-sans text-sm tracking-wide uppercase ${light ? 'text-white/50' : 'text-gray-400'}`}>
        {label}
      </div>
    </div>
  )
}
