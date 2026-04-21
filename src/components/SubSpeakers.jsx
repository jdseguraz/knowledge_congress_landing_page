import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

const subSpeakers = [
  {
    name: 'David Ryu',
    country: 'South Korea',
    photo: '/assets/people_photos/sub-speakers/david_ryu.jpg',
    role: 'CEO & Founder, MAIDEPOT, Inc.',
    talk: 'Lessons Learned from AI Implementation for SMEs in South Korea.',
    linkedin: 'https://linkedin.com/in/david-ryu-2479b854',
  },
  {
    name: 'Eduardo Bahamondes',
    country: 'Chile',
    photo: '/assets/people_photos/sub-speakers/eduardo_bahamondes.jpg',
    role: 'Deputy Director of Rehabilitation, Club de Leones Cruz del Sur Rehabilitation Corporation',
    talk: 'Experiences with Technologies for Rehabilitation in Magallanes',
    linkedin: 'https://linkedin.com/in/eduardo-bahamonde-71a63b169',
    objectPosition: 'center 20%',
  },
  {
    name: 'Ivonne Bell',
    country: 'Chile',
    photo: '/assets/people_photos/sub-speakers/ivonne_bell.jpg',
    role: 'General Manager Chile at Hidrolena · VP, Association of Women in Energy of Chile',
    talk: 'AI as a driver of corporate and institutional eco-efficiency',
    linkedin: 'https://linkedin.com/in/bonchibell',
  },
  {
    name: 'Marcela Rosinelli',
    country: 'Chile',
    photo: '/assets/people_photos/sub-speakers/marcela_rosinelli.jpg',
    role: 'Vice-Rector for Virtual Education, Universidad del Alba · Director of Virtual Industry, USACH',
    talk: 'Intelligent Virtual Campus (IVC): An AI-Driven Model to Democratize STEM-H Competencies',
    linkedin: 'https://linkedin.com/in/marcela-lorena-rosinelli-contreras-18912025',
    objectPosition: 'center 20%',
  },
  {
    name: 'Eduardo Giugliani',
    country: 'Brazil',
    photo: '/assets/people_photos/sub-speakers/eduardo_giugliani.png',
    role: 'Head at IDEIA – S&T Center, PUCRS/TECNOPUC · Full Professor, PUCRS',
    talk: null,
    linkedin: 'https://linkedin.com/in/eduardo-giugliani-7b812642',
  },
  {
    name: 'Juan Esteban Cuervo',
    country: 'Colombia',
    photo: '/assets/people_photos/workshops/juan_esteban_cuervo_ocampo.png',
    role: 'Founder, Dialógica – Knowledge Management, Strategy & Data Information',
    talk: 'Knowledge management needs a REBRANDING!',
    linkedin: 'https://linkedin.com/in/juanes-cuervo-782736109',
    objectPosition: 'center 20%',
  },
  {
    name: 'Patricia Roa',
    country: 'Chile',
    photo: '/assets/people_photos/sub-speakers/patricia_roa.png',
    role: 'Lawyer, University of Chile · Programme Officer, ILO',
    talk: 'Work of the Future: Transformations and Opportunities.',
    linkedin: null,
  },
  {
    name: 'Alejandro Gamboa',
    country: 'Colombia',
    photo: '/assets/people_photos/sub-speakers/alejandro_gamboa.png',
    role: 'Regional Learning Manager, Softys',
    talk: 'Skill-Based Organizations as a Key Driver of Talent and the Future of Work',
    linkedin: 'https://linkedin.com/in/alejandrogamboaurrego',
  },
  {
    name: 'Kaiyu Zhang',
    country: 'China',
    photo: null,
    role: 'Manager, China Railway No. 10 Engineering Group – Chile Branch',
    talk: null,
    linkedin: null,
  },
]

const duplicated = [...subSpeakers, ...subSpeakers]

function PersonItem({ name, country, photo, role, talk, linkedin, objectPosition }) {
  const inner = (
    <div className="flex flex-col items-center text-center gap-3 w-48 xl:w-56 flex-shrink-0 px-2">
      <div className="w-32 h-32 xl:w-36 xl:h-36 rounded-full border-4 border-orange overflow-hidden bg-navy-light flex-shrink-0">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" style={objectPosition ? { objectPosition } : undefined} />
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
            <circle cx="50" cy="38" r="20" />
            <ellipse cx="50" cy="85" rx="35" ry="25" />
          </svg>
        )}
      </div>
      <div className="space-y-1">
        <p className="font-bahnschrift font-bold text-white text-sm xl:text-base leading-tight">{name}</p>
        <p className="text-orange text-xs font-semibold">{country}</p>
        <p className="text-white/55 text-xs leading-snug">{role}</p>
        {talk && (
          <p className="text-white/70 text-xs italic leading-snug pt-1">"{talk}"</p>
        )}
      </div>
    </div>
  )

  if (linkedin) {
    return (
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        {inner}
      </a>
    )
  }
  return inner
}

export default function SubSpeakers() {
  return (
    <section className="bg-navy pt-0 pb-20">

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 80s linear infinite;
        }
      `}</style>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem} className="mb-10 border-t border-white/10 pt-12 px-6 md:px-16">
          <p className="font-bahnschrift font-bold text-orange uppercase text-base mb-1">ALSO PRESENTING</p>
          <h3 className="font-bahnschrift font-bold text-white text-2xl md:text-3xl uppercase">SPEAKERS</h3>
        </motion.div>
      </motion.div>

      {/* Desktop — carrusel infinito */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex marquee-track w-max gap-8 xl:gap-12">
          {duplicated.map((s, i) => (
            <PersonItem key={`${s.name}-${i}`} {...s} />
          ))}
        </div>
      </div>

      {/* Mobile — grid 2 columnas */}
      <div className="md:hidden grid grid-cols-2 gap-8 px-6">
        {subSpeakers.map((s) => (
          <PersonItem key={s.name} {...s} />
        ))}
      </div>

    </section>
  )
}
