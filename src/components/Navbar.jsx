import { useState, useEffect } from 'react'

const LINKS = ['About', 'Speakers', 'Call for Papers', 'Program', 'Sponsors', 'Registration', 'Contact']

function NavLinks({ active, onLinkClick }) {
  return (
    <ul className="flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-7">
      {LINKS.map((link) => {
        const id = link.toLowerCase().replace(/\s+/g, '-')
        const isActive = active === id
        return (
          <li key={link}>
            <a
              href={`#${id}`}
              onClick={onLinkClick}
              className={`font-bahnschrift uppercase text-base tracking-wide transition-colors hover:text-orange ${
                isActive ? 'font-bold text-orange' : 'font-semibold text-navy'
              }`}
            >
              {link}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Navbar() {
  const [active, setActive] = useState('')
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = LINKS.map((l) => l.toLowerCase().replace(/\s+/g, '-'))

      const aboutEl = document.getElementById('about')
      const contactEl = document.getElementById('contact')
      if (aboutEl && contactEl) {
        const reachedAbout = aboutEl.getBoundingClientRect().top < window.innerHeight * 0.8

        const contactRect = contactEl.getBoundingClientRect()
        const contactVisiblePx = Math.min(contactRect.bottom, window.innerHeight) - Math.max(contactRect.top, 0)
        const inContact = contactVisiblePx / contactRect.height >= 0.2

        setVisible(!reachedAbout || inContact)
      }

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Full navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#c1e4f5] h-[20vh] min-h-[80px] max-h-[130px] px-6 xl:px-12 shadow-md flex items-center transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center gap-1 xl:gap-6">
            <img src="/assets/logos/principales/CIKI.png" alt="CIKI" className="h-10 xl:h-16 object-contain" />
            <span className="text-navy/30 text-2xl xl:text-4xl font-thin">|</span>
            <img src="/assets/logos/principales/ICKM.png" alt="ICKM" className="h-10 xl:h-16 object-contain" />
            <span className="text-navy/30 text-2xl xl:text-4xl font-thin">|</span>
            <img src="/assets/logos/principales/GFIC.png" alt="GFIC" className="h-10 xl:h-16 object-contain" />
          </div>

          {/* Desktop: globe + links */}
          <div className="hidden xl:flex flex-col items-end gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-navy/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeWidth="1.5" />
            </svg>
            <NavLinks active={active} />
          </div>

          {/* Mobile: hamburger button inside navbar */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-navy"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Floating menu button — visible when navbar is hidden, desktop only hidden by visible state */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 bg-navy/90 hover:bg-navy text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          visible ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'
        }`}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Dropdown menu panel */}
      <div
        className={`fixed right-6 z-40 bg-sky-light/95 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-6 transition-all duration-300 ${
          visible ? 'top-[min(20vh,130px)]' : 'top-20'
        } ${
          menuOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'
        }`}
      >
        <NavLinks active={active} onLinkClick={() => setMenuOpen(false)} />
      </div>
    </>
  )
}
