export default function SectionHeader({ label, title, subtitle, light = false, centered = false }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <div className={`section-label ${centered ? 'justify-center' : ''} ${light ? 'text-gold-400' : 'text-gold-500'}`}>
        <span className={`block w-8 h-px ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />
        {label}
      </div>
      <h2 className={`section-title mt-3 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-sans text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
