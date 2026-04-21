import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

const speakers = [
  {
    name: 'Sébastien Béland, PhD',
    country: 'Canada',
    photo: '/assets/people_photos/speakers/phd_sebastien_beland.jpg',
    bio: 'Associate Professor at the Faculty of Education, University of Montreal. Member of the Interuniversity Observatory on Innovative Learning Assessment Practices (OPIEVA), the Interdisciplinary Research Laboratory on Higher Education (LIRES), the Interdisciplinary Perspectives on Higher Education Missions team (RIMES), the Open Statistics Teaching Initiative (OSTI), and the Research Group on Medical Admissions in Quebec (GRAM-Q).',
  },
  {
    name: 'Florinda Matos, PhD',
    country: 'Portugal',
    photo: '/assets/people_photos/chairs/florinda_matos.jpg',
    bio: 'Professor of General Management at ISCTE Business School, ISCTE – University Institute of Lisbon, and an associate research fellow at DINÂMIA\'CET – IUL – Centre for Socioeconomic and Territorial Studies.',
  },
  {
    name: 'Pedro Salcedo, PhD',
    country: 'Chile',
    photo: '/assets/people_photos/speakers/phd_pedro_salcedo.png',
    bio: 'Full Professor at the University of Concepción. Member of the Academic Committee of the PhD Program in Artificial Intelligence. Director, Department of Research Methodology and Educational Informatics, University of Concepción.',
  },
]

function SpeakerCard({ name, country, photo, bio }) {
  const photoEl = photo ? (
    <img src={photo} alt={name} className="w-full h-full object-cover" />
  ) : (
    <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
      <circle cx="50" cy="38" r="20" />
      <ellipse cx="50" cy="85" rx="35" ry="25" />
    </svg>
  )

  return (
    <>
      {/* Mobile: imagen arriba, descripción abajo */}
      <div className="md:hidden flex flex-col items-center text-center gap-5 w-full px-4">
        <div className="w-52 h-52 rounded-full border-4 border-orange overflow-hidden bg-navy-light flex-shrink-0">
          {photoEl}
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bahnschrift font-bold text-white text-2xl leading-tight">{name}</p>
          <p className="text-orange text-base font-semibold">{country}</p>
          <p className="text-white/70 text-sm leading-relaxed">{bio}</p>
        </div>
      </div>

      {/* Desktop: círculo grande arriba-izquierda, texto abajo-derecha */}
      <div className="hidden md:flex items-end gap-10 w-full h-[58vh] pb-6 justify-center items-center">
        {/* Círculo grande — anclado arriba */}
        <div className="self-start flex-shrink-0 w-[22rem] h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[28rem] 2xl:h-[28rem] rounded-full border-[12px] border-orange overflow-hidden bg-navy-light">
          {photoEl}
        </div>
        {/* Texto — anclado abajo, diagonal natural */}
        <div className="flex flex-col gap-3 items-center text-center">
          <p className="font-bahnschrift font-bold text-white text-2xl xl:text-3xl 2xl:text-4xl leading-tight">{name}</p>
          <p className="text-orange text-base xl:text-lg font-semibold">{country}</p>
          <p className="text-white/70 text-sm xl:text-base leading-relaxed">{bio}</p>
        </div>
      </div>
    </>
  )
}

export default function Speakers() {
  const ref = useRef(null)
  const [activeSpeaker, setActiveSpeaker] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const sectionHeight = ref.current.offsetHeight
      const scrolled = -rect.top
      const denominator = sectionHeight - window.innerHeight
      if (denominator <= 0) return
      const progress = Math.max(0, Math.min(1, scrolled / denominator))
      const next = Math.min(Math.floor(progress * speakers.length), speakers.length - 1)
      setActiveSpeaker(next)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative h-auto md:h-[300vh]">
      <div className="md:sticky md:top-0 md:h-screen bg-navy flex items-center px-6 md:px-16 py-16 md:py-0 overflow-hidden">
        <div className="w-full grid md:grid-cols-3 gap-10 items-center">

          {/* Left — label estático */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="md:col-span-1"
          >
            <motion.p variants={staggerItem} className="font-bahnschrift font-bold text-orange uppercase text-xl mb-1">
              KEY NOTE
            </motion.p>
            <motion.h2 variants={staggerItem} className="section-title text-4xl md:text-6xl">
              SPEAKERS
            </motion.h2>
            <motion.div variants={staggerContainer} className="mt-6 space-y-2">
              <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug">
                The Next Horizon: Integrating AI, Knowledge, Innovation and Talent for Sustainable Global Development
              </motion.p>
              <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug">
                <strong className="text-white">Date:</strong> October 28–30, 2026
              </motion.p>
              <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug">
                <strong className="text-white">Location:</strong> Universidad de Santiago de Chile
              </motion.p>
            </motion.div>

            {/* Dots */}
            <div className="hidden md:flex gap-3 mt-10">
              {speakers.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: activeSpeaker === i ? 1 : 0.3, scale: activeSpeaker === i ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-2.5 h-2.5 rounded-full bg-orange cursor-default"
                />
              ))}
            </div>
          </motion.div>

          {/* Right — speaker animado */}
          <div className="md:col-span-2 relative min-h-[300px] md:min-h-0 md:h-[60vh] flex items-center">

            {/* Mobile — todos visibles */}
            <div className="md:hidden flex flex-col gap-12 w-full">
              {speakers.map((s) => <SpeakerCard key={s.name} {...s} />)}
            </div>

            {/* Desktop — uno por página */}
            <div className="hidden md:block relative w-full h-full">
              {speakers.map((s, idx) => (
                <motion.div
                  key={s.name}
                  animate={{
                    opacity: activeSpeaker === idx ? 1 : 0,
                    y: activeSpeaker === idx ? 0 : activeSpeaker > idx ? -40 : 40,
                  }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center"
                  style={{ pointerEvents: activeSpeaker === idx ? 'auto' : 'none' }}
                >
                  <SpeakerCard {...s} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
