import { useState, useEffect, useRef, useCallback } from 'react'

const scientificCommittee = [
  { name: 'Florinda Matos', location: 'Lisboa', photo: '/assets/people_photos/florinda_matos.jpg' },
  { name: 'Paulo Mauricio Selig', location: 'Brasil', photo: '/assets/people_photos/paulo_selig.jpg' },
  { name: 'Tereza Raquel Merlo', location: 'EEUU', photo: null },
  { name: 'Suliman Hawamdeh', location: 'EEUU', photo: '/assets/people_photos/suliman_h.png' },
]

const localCommittee = [
  { name: 'Roberto Campos', org: 'Universidad Alberto Hurtado, Chile' },
  { name: 'Isabel Torres', org: 'Universidad de Santiago de Chile, Chile' },
  { name: 'Gonzalo Millie', org: 'Duoc UC, Chile' },
  { name: 'Pablo Isla', org: 'Universidad Técnica Federico Santa María, Chile' },
  { name: 'Jean Pierre Remonsellez', org: 'Universidad Nacional Andrés Bello, Chile' },
  { name: 'Sandra Riascos', org: 'Universidad del Valle, Colombia' },
  { name: 'José Luis Alvarez', org: 'European Southern Observatory, Chile' },
  { name: 'Marcelo Godoy', org: 'Universidad de La Serena' },
  { name: 'Jaime Campos', org: 'Consultor IA, Walmart Chile' },
]

const TOTAL = 4

function Avatar({ name, subtitle, photo, size = 'md' }) {
  const sizeClass = size === 'lg' ? 'w-24 h-24 xl:w-36 xl:h-36' : 'w-20 h-20 xl:w-28 xl:h-28'
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${sizeClass} rounded-full border-4 border-orange overflow-hidden bg-navy-light flex items-center justify-center`}>
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
            <circle cx="50" cy="38" r="20" />
            <ellipse cx="50" cy="85" rx="35" ry="25" />
          </svg>
        )}
      </div>
      <p className="font-bahnschrift font-bold text-white text-center text-xs xl:text-sm">{name}</p>
      {subtitle && <p className="text-white/60 text-xs text-center">{subtitle}</p>}
    </div>
  )
}

function ChevronRight() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export default function About() {
  const [slide, setSlide] = useState(0)
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setSlide((s) => (s === TOTAL - 1 ? 0 : s + 1)), 6000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  const prev = () => { setSlide((s) => (s === 0 ? TOTAL - 1 : s - 1)); startTimer() }
  const next = () => { setSlide((s) => (s === TOTAL - 1 ? 0 : s + 1)); startTimer() }

  return (
    <section id="about" className="relative min-h-screen xl:h-screen overflow-hidden bg-[#163457] flex flex-col xl:block">

      {/* Top layer — About text */}
      <div
        className="relative z-10 xl:h-[60vh] px-6 xl:px-10 py-10 xl:py-0 flex items-center"
        style={{ background: 'linear-gradient(to bottom, #163457 0%, #163457 60%, rgba(22,52,87,0) 100%)' }}
      >
        {/* Gradiente negro — solo visible en slide 0 (foto de audiencia) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.65))',
            opacity: slide === 0 ? 1 : 0,
          }}
        />

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-6 xl:gap-8 w-full">
          {/* Col 1/3 — ABOUT */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="section-title text-6xl mb-4 self-center">ABOUT</h2>
            <p className="font-bahnschrift font-bold text-white text-base mb-3 leading-snug">
              The Next Horizon: Integrating AI, Knowledge, Innovation and Talent for Sustainable Global Development
            </p>
            <p className="text-white/70 text-sm mb-1">Date: October 28–30, 2026</p>
            <p className="text-white/70 text-sm">Location: Universidad de Santiago de Chile</p>
          </div>

          {/* Col 2/3 — Párrafos */}
          <div className="space-y-6 text-white/85 text-lg leading-snug">
            <p>The CIKI–ICKM–GFIC Triple Conference 2026 is a premier international event that brings together leading
              academics, researchers, professionals, and organizational leaders at the forefront of knowledge
              management, intellectual capital, innovation, artificial intelligence, and sustainability.</p>
            <p>Designed to foster high-level dialogue and meaningful exchange, the conference offers a dynamic format
              that combines scientific rigor with active participation, enabling direct interaction between research
              and practice. It is a space where ideas are not only presented, but challenged, connected, and
              transformed into actionable insights.</p>
            <p>This unique gathering is the result of a strategic collaboration between three globally recognized
              academic communities: CIKI, ICKM, and GFIC. The 2026 edition will be hosted by the Universidad de
              Santiago de Chile.</p>
            <p>CIKI–ICKM–GFIC 2026 offers a unique opportunity to understand the defining issues of the 21st century
              through the voices of those leading them—researchers, industry leaders, policymakers, and
              entrepreneurs—across diverse sectors and disciplines.</p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative xl:absolute xl:inset-x-0 xl:bottom-0 h-[70vh] xl:h-[50vh] bg-[#163457]">
        <div className="relative w-full h-full overflow-hidden">

          {/* Slide 0 — Audience photo */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${slide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <img src="/assets/audience_photos/audience2.jpg" alt="Conference audience" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #163457 0%, rgba(22,52,87,0.6) 60%, rgba(22,52,87,0) 100%)' }} />
          </div>

          {/* Slide 1 — Honorary Committee */}
          <div className={`absolute inset-0 transition-opacity duration-500 bg-[#163457] ${slide === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative z-20 w-full h-full flex items-center px-10 xl:px-20">
              <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10 w-full">
                <h2 className="section-title shrink-0 text-3xl xl:text-5xl pl-10">HONORARY<br />COMMITTEE</h2>
                <div className="flex gap-4 xl:gap-8 justify-center flex-1">
                  {[
                    { name: 'Florinda Matos', location: 'Lisboa', photo: '/assets/people_photos/florinda_matos.jpg' },
                    { name: 'Paulo Mauricio Selig', location: 'Brasil', photo: '/assets/people_photos/paulo_selig.jpg' },
                    { name: 'Tereza Raquel Merlo', location: 'EEUU', photo: null },
                  ].map((person) => (
                    <Avatar key={person.name} name={person.name} subtitle={person.location} photo={person.photo} size="lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 — Scientific Committee */}
          <div className={`absolute inset-0 transition-opacity duration-500 bg-[#163457] ${slide === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative z-20 w-full h-full flex items-center px-10 xl:px-28">
              <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10 w-full">
                <h2 className="section-title shrink-0 text-3xl xl:text-5xl pl-10">SCIENTIFIC<br />COMMITTEE &amp;<br />ORGANIZERS</h2>
                <div className="flex gap-4 xl:gap-8 justify-center flex-1 flex-wrap">
                  {scientificCommittee.map((person) => (
                    <Avatar key={person.name} name={person.name} subtitle={person.location} photo={person.photo} size="lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 — Local Organizing Committee */}
          <div className={`absolute inset-0 transition-opacity duration-500 bg-[#163457] ${slide === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative z-20 w-full h-full flex items-center px-6 xl:px-20">
              <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_1fr] gap-4 xl:gap-8 items-center w-full">
                <div>
                  <h2 className="section-title text-3xl xl:text-5xl pl-10">LOCAL<br />ORGANIZING<br />COMMITTEE</h2>
                </div>
                <div className="flex flex-col items-center gap-3 xl:gap-4">
                  <p className="font-bahnschrift font-bold text-white text-base xl:text-lg">Local Organizing Committee</p>
                  <div className="flex gap-6 xl:gap-10">
                    <Avatar name="Gregorio Pérez" subtitle="General Chair – Chile" photo={null} size="lg" />
                    <Avatar name="Evelyn Bunster" subtitle="Conference Manager – Chile"
                      photo="/assets/people_photos/evelyn_bunster_conference_manager.png" size="lg" />
                  </div>
                </div>
                <ul className="space-y-1 xl:space-y-2">
                  {localCommittee.map((member) => (
                    <li key={member.name} className="text-xs xl:text-sm text-white/80">
                      <span className="text-white font-semibold">– {member.name},</span>{' '}
                      <span className="text-white/60">{member.org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gradiente centrado — slides 1, 2, 3 */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to bottom, rgba(22,52,87,0) 0%, rgba(0,0,0,0.55) 50%, rgba(22,52,87,0) 100%)',
              opacity: slide === 0 ? 0 : 1,
            }}
          />

          {/* Flechas de navegación */}
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-30"
            aria-label="Previous slide"
          >
            <span className="arrow-left block"><ChevronLeft /></span>
          </button>
          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-30"
            aria-label="Next slide"
          >
            <span className="arrow-right block"><ChevronRight /></span>
          </button>
        </div>
      </div>

    </section>
  )
}
