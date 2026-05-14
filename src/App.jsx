import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Outreach from './pages/Outreach'
import GlobalMissions from './pages/GlobalMissions'
import Volunteer from './pages/Volunteer'
import Prayer from './pages/Prayer'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = window.location
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<Mission />} />
          <Route path="outreach" element={<Outreach />} />
          <Route path="global-missions" element={<GlobalMissions />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
