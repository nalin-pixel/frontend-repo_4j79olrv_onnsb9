import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './components/Hero'
import { About, Services, Reviews, Careers, Contact } from './components/Sections'

function Page() {
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
      <Route path="/" element={<Page />} />
      <Route path="/about" element={<div className="pt-24 text-white">About</div>} />
      <Route path="/services" element={<div className="pt-24 text-white">Services</div>} />
      <Route path="/reviews" element={<div className="pt-24 text-white">Reviews</div>} />
      <Route path="/careers" element={<div className="pt-24 text-white">Careers</div>} />
      <Route path="/contact" element={<div className="pt-24 text-white">Contact</div>} />
    </Routes>
  )
}
