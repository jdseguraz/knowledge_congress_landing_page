import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const chairs = [
  {
    name: 'Gregorio Pérez Arrau',
    role: 'General Chair',
    country: 'Chile',
    photo: '/assets/people_photos/chairs/gregorio_perez_arrau.jpg',
    bio: 'PhD in Management from the University of Liverpool and faculty member at USACH since 1997, where he leads the Human Resource Management area at the Faculty of Administration and Economics.',
  },
  {
    name: 'Paulo Mauricio Selig',
    role: 'Meritorious Chair',
    country: 'Brasil',
    photo: '/assets/people_photos/chairs/paulo_selig.jpg',
    bio: 'PhD in Production Engineering, former President of the Brazilian Production Engineering Association, and current Chairman of the International Conference on Knowledge and Innovation (CIKI).',
  },
  {
    name: 'Suliman Hawamdeh',
    role: 'Meritorious Chair',
    country: 'United States',
    photo: '/assets/people_photos/chairs/suliman_h.png',
    bio: 'Regents Professor of Information Science at the University of North Texas and a leading authority in knowledge management. Editor-in-Chief of the Journal of Information and Knowledge Management.',
  },
  {
    name: 'Florinda Matos',
    role: 'Meritorious Chair',
    country: 'Portugal',
    photo: '/assets/people_photos/chairs/florinda_matos.jpg',
    bio: "Professor of General Management at ISCTE Business School. Founder and President of the Intellectual Capital Association (ICAA) and Portugal's ambassador to The New Club of Paris.",
  },
  {
    name: 'Tereza Raquel Merlo',
    role: 'Meritorious Chair',
    country: 'United States',
    photo: '/assets/people_photos/chairs/tereza_raquel_merlo.jpeg',
    bio: 'Postdoctoral researcher at UFRJ and lecturer at the University of North Texas, specializing in knowledge management and emerging technologies. CEO of Merlo Management Consulting.',
  },
  {
    name: 'Fernando Gauthier',
    role: 'President of the Scientific Committee',
    country: 'Brasil',
    photo: '/assets/people_photos/chairs/fernando_gauthier.png',
    bio: 'Full Professor of Knowledge Engineering at the Federal University of Santa Catarina. His work focuses on knowledge engineering, artificial intelligence, ontologies, and digital education.',
  },
  {
    name: 'Nuno Matos',
    role: 'GFIC Conference Co-Chair',
    country: 'Portugal',
    photo: '/assets/people_photos/chairs/nuno_matos.png',
    bio: 'Operational Director at Diagonal – Insurance Brokers and Vice President of the Intellectual Capital Association (ICAA). His work focuses on intellectual capital and knowledge management.',
  },
]

const page1 = chairs.slice(0, 4)
const page2 = chairs.slice(4)

function ChairCard({ name, role, country, photo, bio }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-full">
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
        <p className="text-orange text-sm xl:text-base 2xl:text-lg font-semibold">{role}</p>
        <p className="text-white/50 text-xs xl:text-sm 2xl:text-base">{country}</p>
        <p className="text-white/70 text-sm 2xl:text-base leading-snug mt-2">{bio}</p>
      </div>
    </div>
  )
}

export default function Chairs() {
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
      setActivePage(progress >= 0.5 ? 1 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative h-auto xl:h-[200vh]">
      <div className="xl:sticky xl:top-0 xl:h-screen bg-navy flex flex-col px-6 xl:px-12 pt-14 pb-6">

        {/* Title */}
        <h2 className="font-bahnschrift font-bold text-orange uppercase tracking-widest text-5xl xl:text-7xl mb-6">
          CHAIRS
        </h2>

        {/* Desktop — páginas animadas */}
        <div className="hidden xl:block relative flex-1">
          {[page1, page2].map((page, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: activePage === idx ? 1 : 0,
                y: activePage === idx ? 0 : idx === 0 ? -40 : 40,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center"
              style={{ pointerEvents: activePage === idx ? 'auto' : 'none' }}
            >
              <div className={`grid gap-8 2xl:gap-12 w-full ${idx === 0 ? 'grid-cols-4' : 'grid-cols-3 max-w-[75%] mx-auto'}`}>
                {page.map((c) => <ChairCard key={c.name} {...c} />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — todo visible en grid */}
        <div className="xl:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4 pb-8">
          {chairs.map((c) => <ChairCard key={c.name} {...c} />)}
        </div>

        {/* Indicador de página (solo desktop) */}
        <div className="hidden xl:flex gap-3 justify-center pb-2">
          {[0, 1].map((i) => (
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
