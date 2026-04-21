import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const members = [
  {
    name: 'PhD. Isabel Torres',
    role: 'Faculty Member, Dept. of Accounting and Auditing',
    org: 'University of Santiago of Chile',
    country: 'Chile',
    photo: '/assets/people_photos/scientific_committee/phd_isabel_torres.jpeg',
  },
  {
    name: 'PhD. Marcelo Macedo',
    role: 'Chair',
    org: 'Federal University of Santa Catarina',
    country: 'Brazil',
    photo: '/assets/people_photos/scientific_committee/phd_marcelo_macedo.png',
  },
  {
    name: 'PhD. Vinicius Ramos',
    role: 'Co-Chair',
    org: 'Federal University of Santa Catarina',
    country: 'Brazil',
    photo: '/assets/people_photos/scientific_committee/phd_vinicius_ramos.jpeg',
  },
  {
    name: 'PhD. Marcela Vera',
    role: 'Director of Asian Affairs, Faculty Member',
    org: 'University of Santiago of Chile',
    country: 'Chile',
    photo: '/assets/people_photos/scientific_committee/phd_marcela_vera.png',
  },
  {
    name: 'PhD. Diego Fuentealba',
    role: 'Director of the Artificial Intelligence Laboratory, Dept. of Accounting and Auditing',
    org: 'University of Santiago of Chile',
    country: 'Chile',
    photo: '/assets/people_photos/scientific_committee/phd_diego_fuenzalida.jpeg',
  },
  {
    name: 'PhD. José Luis Álvarez',
    role: 'Strategic Advisor — Deep Tech & AI Transition Lead',
    org: 'European Southern Observatory',
    country: 'Chile',
    photo: '/assets/people_photos/scientific_committee/phd_jose_luis_alvarez.jpg',
  },
  {
    name: 'PhD. Daniel Alemneh',
    role: 'Head - Digital Curation Unit, UNT Digital Libraries · Adjunct Professor, College of Information',
    org: 'University of North Texas',
    country: 'United States',
    photo: '/assets/people_photos/scientific_committee/phd_daniel_alemneh.png',
  },
  {
    name: 'PhD. Kendra Albright',
    role: 'Goodyear Endowed Professor in Knowledge Management / Smart City and Community Development Consultant',
    org: 'University of Kent',
    country: 'United States',
    photo: '/assets/people_photos/scientific_committee/phd_kendra_albright.png',
  },
]

const page1 = members.slice(0, 3)
const page2 = members.slice(3, 6)
const page3 = members.slice(6)

function MemberCard({ name, role, org, country, photo }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-56 xl:w-64 2xl:w-80">
      <div className="w-36 h-36 xl:w-44 xl:h-44 2xl:w-56 2xl:h-56 rounded-full border-4 border-orange overflow-hidden bg-navy-light flex-shrink-0">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
            <circle cx="50" cy="38" r="20" />
            <ellipse cx="50" cy="85" rx="35" ry="25" />
          </svg>
        )}
      </div>
      <div className="space-y-1">
        <p className="font-bahnschrift font-bold text-white text-base xl:text-lg 2xl:text-xl leading-tight">{name}</p>
        <p className="text-white/60 text-sm xl:text-base 2xl:text-lg font-semibold leading-snug">{role}</p>
        <p className="text-orange text-sm 2xl:text-base mt-1">{org}</p>
        <p className="text-white/50 text-xs xl:text-sm 2xl:text-base">{country}</p>
      </div>
    </div>
  )
}

export default function ScientificCommittee() {
  const ref = useRef(null)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const sectionHeight = ref.current.offsetHeight
      const scrolled = -rect.top
      const denominator = sectionHeight - window.innerHeight
      if (denominator <= 0) return
      const progress = Math.max(0, Math.min(1, scrolled / denominator))
      setActivePage(progress >= 0.66 ? 2 : progress >= 0.33 ? 1 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative h-auto xl:h-[300vh]">
      <div className="xl:sticky xl:top-0 xl:h-screen bg-[#163457] flex flex-col px-6 xl:px-12 pt-14 pb-6">

        {/* Title */}
        <p className="font-bahnschrift font-bold text-orange uppercase text-xl mb-1">SCIENTIFIC</p>
        <h2 className="section-title text-4xl xl:text-6xl mb-6">COMMITTEE</h2>

        {/* Desktop — páginas animadas */}
        <div className="hidden xl:block relative flex-1">
          {[page1, page2, page3].map((page, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: activePage === idx ? 1 : 0,
                y: activePage === idx ? 0 : idx < activePage ? -40 : 40,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: activePage === idx ? 'auto' : 'none' }}
            >
              <div className="flex flex-wrap justify-center gap-10 xl:gap-16 w-full">
                {page.map((m) => <MemberCard key={m.name} {...m} />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — todo visible */}
        <div className="xl:hidden flex flex-wrap justify-center gap-8 mt-4 pb-8">
          {members.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>

        {/* Indicador de página (solo desktop) */}
        <div className="hidden xl:flex gap-3 justify-center pb-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: activePage === i ? 1 : 0.3, scale: activePage === i ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-2.5 h-2.5 rounded-full bg-orange cursor-default"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
