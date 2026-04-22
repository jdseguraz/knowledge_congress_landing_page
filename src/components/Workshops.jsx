import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const workshops = [
  {
    id: 1,
    title: 'Building Trusted Intelligence: Agentic AI and Data Governance for Organizational Decision-Making',
    overview: 'This workshop explores how organizations can integrate Agentic AI with strong data governance to enable trusted, transparent, and responsible decision-making. It bridges theory and practice, offering practical frameworks to align AI capabilities with governance, ensuring reliability, accountability, and strategic value.',
    learn: [
      'Understanding Agentic AI in modern organizations',
      'Core principles of data governance for AI systems',
      'How to build trusted and explainable AI decision frameworks',
      'Strategies to reduce risk and improve data quality',
      'Real-world applications and governance models',
    ],
    audience: [
      'AI and Data Professionals',
      'Knowledge Management Leaders',
      'Business and Strategy Executives (CEO, CTO, CFO)',
      'IT and Digital Transformation Teams',
      'Researchers and Graduate Students',
    ],
    presenters: [
      {
        name: 'Tereza Raquel Merlo, Ph.D.',
        photo: '/assets/people_photos/workshops/tereza_merlo.png',
        bio: 'Postdoctoral researcher at UFRJ and lecturer at the University of North Texas, specializing in knowledge management and emerging technologies. CEO of Merlo Management Consulting, focusing on data analytics and process improvement.',
      },
      {
        name: 'Dr. Anthony J. Rhem',
        photo: '/assets/people_photos/workshops/dr._anthony_j._rhem.jpg',
        bio: 'Recognized thought leader, author and consultant in AI, Knowledge Management, and Data Architectures. Consults with senior leadership on AI strategy, governance, and Digital Transformation.',
      },
    ],
  },
  {
    id: 2,
    title: 'Preparing for the AI Era: Challenges in Training, Professional Development, and Skills Adaptation',
    overview: null,
    learn: null,
    audience: null,
    presenters: [
      {
        name: 'Bruno Poellhuber, Ph.D.',
        photo: '/assets/people_photos/workshops/phd_bruno_poellhuber.jpg',
        bio: 'Director of LAVIA and Full Professor at the Faculty of Education, University of Montreal. Academic Director of the Center for University Pedagogy (CPU). His research focuses on digital technologies for learning in higher education and digital literacy among teachers and students.',
      },
      {
        name: 'Normand Roy, Ph.D.',
        photo: '/assets/people_photos/workshops/phd_normand_roy.jpg',
        bio: 'Professor in the Department of Psychopedagogy and Andragogy at the University of Montreal. His research focuses on emerging technologies (VR, robotics, video games) and the role of digital technologies in society, including AI and open educational resources.',
      },
    ],
  },
  {
    id: 3,
    title: 'The Elements of Knowledge and Innovation: How to Design Unique Capability Combinations for Strategy',
    overview: 'Teams will learn to read their organization as a system of capabilities rather than a collection of isolated initiatives. Using the Periodic Table of Knowledge and Innovation, they will identify which elements they already have, which ones are missing, and how to combine them to design a unique formula that strengthens their competitive advantage.',
    learn: [
      'Diagnose which knowledge and innovation capabilities exist in your organization and which are critical',
      'Identify gaps that hinder learning, collaboration, adaptation, and innovation',
      'Understand the combinations between knowledge management tools and innovation outcomes',
      'Design a tailored capability formula aligned with your company\'s strategy',
      'Turn the map into action through priorities, decisions, and concrete initiatives',
    ],
    audience: null,
    audienceText: 'CEOs, HR leaders, innovation leaders, strategy leaders, transformation leaders, organizational development leaders, and knowledge management leaders seeking to strengthen critical capabilities, reduce dependence on individual experts, and turn knowledge into a systematic competitive advantage.',
    presenters: [
      {
        name: 'Juan Esteban Cuervo Ocampo',
        photo: '/assets/people_photos/workshops/juan_esteban_cuervo_ocampo.png',
        bio: 'Architect, Specialist in Strategic Design and Innovation, and MSc in Innovation and Knowledge Management from EAFIT University. Director of Dialógica, a consulting firm specialized in sparking the conversations and decisions organizations need to uncover the knowledge required to win and grow.',
      },
    ],
  },
]

function PresenterCard({ name, photo, bio }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full border-[3px] border-orange overflow-hidden bg-navy-light flex-shrink-0">
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
        <p className="font-bahnschrift font-bold text-white text-sm xl:text-base leading-tight">{name}</p>
        <p className="text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug">{bio}</p>
      </div>
    </div>
  )
}

function WorkshopSlide({ workshop }) {
  const { title, overview, learn, audience, audienceText, presenters } = workshop

  return (
    <div className="w-full flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-5 xl:gap-10">

      {/* Col 1 — título de sección + título del workshop + overview */}
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="section-title text-4xl xl:text-5xl 2xl:text-6xl leading-none">WORKSHOPS</h2>
        <h3 className="font-bahnschrift font-extrabold text-orange text-xl xl:text-2xl 2xl:text-3xl leading-snug">
          {title}
        </h3>
        {overview && (
          <div className="mt-1">
            <p className="font-bahnschrift font-bold text-white uppercase text-sm xl:text-base tracking-widest mb-1">Overview</p>
            <p className="text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug">{overview}</p>
          </div>
        )}
      </div>

      {/* Col 2 — learn + attend + presenters */}
      <div className="flex flex-col gap-5 justify-center">

        {/* What you will learn + Who should attend + Presenters en grid de 2 cols */}
        <div className="grid grid-cols-2 gap-6">
          {learn && (
            <div>
              <p className="font-bahnschrift font-bold text-white uppercase text-sm xl:text-base tracking-widest mb-2">What you will learn</p>
              <ul className="space-y-1">
                {learn.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug">
                    <span className="text-orange mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(audience || audienceText) && (
            <div>
              <p className="font-bahnschrift font-bold text-white uppercase text-sm xl:text-base tracking-widest mb-2">Who should attend</p>
              {audience ? (
                <ul className="space-y-1">
                  {audience.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug">
                      <span className="text-orange mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug">{audienceText}</p>
              )}
            </div>
          )}

          {/* Presenters — ocupa las 2 sub-columnas */}
          <div className="col-span-2">
            <p className="font-bahnschrift font-bold text-white uppercase text-sm xl:text-base tracking-widest mb-3">Presenters</p>
            {presenters.length === 1 ? (
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 xl:w-40 xl:h-40 rounded-full border-[3px] border-orange overflow-hidden bg-navy-light flex-shrink-0">
                {presenters[0].photo ? (
                  <img src={presenters[0].photo} alt={presenters[0].name} className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
                ) : (
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
                    <circle cx="50" cy="38" r="20" />
                    <ellipse cx="50" cy="85" rx="35" ry="25" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bahnschrift font-bold text-white text-sm xl:text-base leading-tight">{presenters[0].name}</p>
                <p className="text-white/80 text-sm xl:text-base 2xl:text-lg leading-snug max-w-lg">{presenters[0].bio}</p>
              </div>
            </div>
          ) : (
              <div className="grid grid-cols-2 gap-6">
                {presenters.map((p) => <PresenterCard key={p.name} {...p} />)}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default function Workshops() {
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
      const next = Math.min(Math.floor(progress * workshops.length), workshops.length - 1)
      setActive(next)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative h-auto xl:h-[300vh]">
      <div className="xl:sticky xl:top-0 xl:h-screen bg-[#163457] flex flex-col justify-center px-6 md:px-16 py-16 xl:py-0 overflow-hidden">

        {/* Dots — desktop */}
        <div className="hidden xl:flex gap-3 justify-end mb-6">
          {workshops.map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: active === i ? 1 : 0.3, scale: active === i ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-2.5 h-2.5 rounded-full bg-orange"
            />
          ))}
        </div>

        {/* Desktop — slide animado */}
        <div className="hidden xl:block relative flex-1">
          {workshops.map((w, idx) => (
            <motion.div
              key={w.id}
              animate={{
                opacity: active === idx ? 1 : 0,
                y: active === idx ? 0 : active > idx ? -40 : 40,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center"
              style={{ pointerEvents: active === idx ? 'auto' : 'none' }}
            >
              <WorkshopSlide workshop={w} />
            </motion.div>
          ))}
        </div>

        {/* Por debajo de xl — todos visibles */}
        <div className="xl:hidden flex flex-col gap-20">
          {workshops.map((w) => (
            <WorkshopSlide key={w.id} workshop={w} />
          ))}
        </div>

      </div>
    </section>
  )
}
