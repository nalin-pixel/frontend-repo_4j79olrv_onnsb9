import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './components/Hero'
import { About, Services, Reviews, Careers, Contact } from './components/Sections'
import { AboutPage, ServicesPage, ReviewsPage, CareersPage, ContactPage } from './components/Pages'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#001024]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Careers />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/50">© {new Date().getFullYear()} NEWRAL — All rights reserved.</footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<><Navbar /><AboutPage /></>} />
      <Route path="/services" element={<><Navbar /><ServicesPage /></>} />
      <Route path="/reviews" element={<><Navbar /><ReviewsPage /></>} />
      <Route path="/careers" element={<><Navbar /><CareersPage /></>} />
      <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
    </Routes>
  )
}
