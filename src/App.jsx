import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import About from './components/About'
import Speakers from './components/Speakers'
import CallForPapers from './components/CallForPapers'
import Program from './components/Program'
import Sponsors from './components/Sponsors'
import Registration from './components/Registration'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
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
