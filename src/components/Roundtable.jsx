import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roundtables = [
  {
    id: 1,
    title: 'Data to Decisions: Agentic AI, Knowledge Management, and the Future of Intelligent Organizations.',
    participants: [
      {
        name: 'Gregorio Varvakis',
        role: 'Moderator',
        photo: '/assets/people_photos/roundtables/gregorio_jean_varvakis_rado.png',
        bio: 'Full Professor and Head of the Department of Knowledge Engineering and Management at the Federal University of Santa Catarina (UFSC), Brazil. His academic and research work focuses on Knowledge Management, Knowledge Engineering, Organizational Cognition, Innovation, and Sustainability. He leads several interdisciplinary research groups dedicated to knowledge, complexity, and organizational innovation.',
      },
      {
        name: 'Dr. Tereza Merlo',
        role: 'Invited Speaker',
        photo: '/assets/people_photos/workshops/tereza_merlo.png',
        bio: 'Postdoctoral researcher at UFRJ and lecturer at the University of North Texas, specializing in knowledge management and emerging technologies. CEO of Merlo Management Consulting, focusing on data analytics and process improvement. Active contributor to international journals and conferences, including leadership roles within ICKM.',
      },
      {
        name: 'Zach Wahl',
        role: 'Invited Speaker',
        affiliation: 'Founder and CEO, Enterprise Knowledge',
        photo: '/assets/people_photos/roundtables/zach_wahl.jpg',
        bio: 'Over 25 years of experience leading programs in knowledge and information management. He has worked with more than 200 organizations to strategize, design, and implement information management systems. Chairman of the annual Semantic Layer Symposium (SLS), faculty for the Knowledge Management Institute, and host of the Knowledge Cast podcast. Coauthor of "Making Knowledge Management Clickable" and "Bridging Knowledge, Data, and AI" (Springer).',
      },
    ],
  },
  {
    id: 2,
    title: 'Preparing for the AI Era: Challenges in Training, Professional Development, and Skills Adaptation.',
    participants: [
      {
        name: 'Bruno Poellhuber, Ph.D.',
        photo: '/assets/people_photos/roundtables/phd_bruno_poellhuber.jpg',
        bio: "Director of LAVIA (Laboratoire sur l'Apprentissage avec les Technologies Innovantes et l'Intelligence Artificielle) and Full Professor at the Faculty of Education, University of Montreal. Academic Director of the Center for University Pedagogy (CPU). His research focuses on digital technologies for learning in higher education and digital literacy among teachers and students. Co-led the team that developed the Digital Competency Framework (MÉES, 2019), with a recent update to incorporate AI literacy.",
      },
      {
        name: 'Normand Roy, Ph.D.',
        photo: '/assets/people_photos/roundtables/phd_normand_roy.jpg',
        bio: 'Professor in the Department of Psychopedagogy and Andragogy at the University of Montreal. His research focuses on emerging technologies (VR, robotics, video games) and the role of digital technologies in society, including AI and open educational resources. He explores the pedagogical potential and conditions required for the effective implementation of digital technologies in education.',
      },
    ],
  },
]

function ParticipantCard({ name, role, affiliation, photo, bio }) {
  return (
    <div className="flex items-start gap-4 xl:gap-5">
      <div className="w-28 h-28 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 rounded-full border-[3px] border-orange overflow-hidden bg-navy-light flex-shrink-0">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
            <circle cx="50" cy="38" r="20" />
            <ellipse cx="50" cy="85" rx="35" ry="25" />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        {role && (
          <p className="font-bahnschrift font-bold text-orange uppercase text-xs tracking-widest">{role}</p>
        )}
        <p className="font-bahnschrift font-bold text-white text-base xl:text-lg leading-tight">{name}</p>
        {affiliation && (
          <p className="text-white/70 text-xs xl:text-sm italic leading-snug">{affiliation}</p>
        )}
        <p className="text-white/80 text-sm xl:text-sm 2xl:text-base leading-snug mt-1">{bio}</p>
      </div>
    </div>
  )
}

function RoundtableSlide({ roundtable }) {
  const { title, participants } = roundtable

  return (
    <div className="w-full flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-6 xl:gap-10">

      {/* Col 1 — section title + roundtable title */}
      <div className="flex flex-col gap-3 justify-center">
        <h2 className="section-title text-4xl xl:text-5xl 2xl:text-6xl leading-none">ROUNDTABLES</h2>
        <h3 className="font-bahnschrift font-extrabold text-orange text-xl xl:text-2xl 2xl:text-3xl leading-snug mt-2">
          {title}
        </h3>
      </div>

      {/* Col 2 — participants stacked */}
      <div className="flex flex-col gap-5 xl:gap-6 justify-center">
        {participants.map((p) => <ParticipantCard key={p.name} {...p} />)}
      </div>
    </div>
  )
}

export default function Roundtable() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const sectionHeight = ref.current.offsetHeight
      const scrolled = -rect.top
      const denominator = sectionHeight - window.innerHeight
      if (denominator <= 0) return
      const progress = Math.max(0, Math.min(1, scrolled / denominator))
      const next = Math.min(Math.floor(progress * roundtables.length), roundtables.length - 1)
      setActive(next)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="roundtables" ref={ref} className="relative h-auto xl:h-[200vh]">
      <div className="xl:sticky xl:top-0 xl:h-screen bg-[#163457] flex flex-col justify-center px-6 md:px-16 py-16 xl:py-0 overflow-hidden">

        {/* Dots — desktop */}
        <div className="hidden xl:flex gap-3 justify-end mb-6">
          {roundtables.map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: active === i ? 1 : 0.3, scale: active === i ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-2.5 h-2.5 rounded-full bg-orange"
            />
          ))}
        </div>

        {/* Desktop — animated slide */}
        <div className="hidden xl:block relative flex-1">
          {roundtables.map((r, idx) => (
            <motion.div
              key={r.id}
              animate={{
                opacity: active === idx ? 1 : 0,
                y: active === idx ? 0 : active > idx ? -40 : 40,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center"
              style={{ pointerEvents: active === idx ? 'auto' : 'none' }}
            >
              <RoundtableSlide roundtable={r} />
            </motion.div>
          ))}
        </div>

        {/* Below xl — all visible */}
        <div className="xl:hidden flex flex-col gap-20">
          {roundtables.map((r) => (
            <RoundtableSlide key={r.id} roundtable={r} />
          ))}
        </div>

      </div>
    </section>
  )
}
