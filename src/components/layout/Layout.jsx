import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from '../ui/WhatsAppButton'
import BackToTop from '../ui/BackToTop'
import { useScrollRevealAll } from '../../hooks/useScrollReveal'

export default function Layout() {
  const location = useLocation()
  useScrollRevealAll('.reveal', 0.12)
  useScrollRevealAll('.reveal-left', 0.12)
  useScrollRevealAll('.reveal-right', 0.12)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
