import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import About from './components/About'
import Chairs from './components/Chairs'
import ScientificCommittee from './components/ScientificCommittee'
import Organizers from './components/Organizers'
import Speakers from './components/Speakers'
import CallForPapers from './components/CallForPapers'
import Program from './components/Program'
import Sponsors from './components/Sponsors'
import Registration from './components/Registration'
import Contact from './components/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = new Promise((r) => setTimeout(r, 1500))
    const pageLoad = new Promise((r) => {
      if (document.readyState === 'complete') r()
      else window.addEventListener('load', r, { once: true })
    })
    Promise.all([minDelay, pageLoad]).then(() => setLoading(false))
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <Chairs />
        <ScientificCommittee />
        <Organizers />
        <Speakers />
        <CallForPapers />
        <Program />
        <Sponsors />
        <Registration />
        <Contact />
      </main>
    </>
  )
}
