
const leads = [
  {
    name: 'Gregorio Pérez Arrau',
    role: 'General Chair',
    country: 'Chile',
    photo: '/assets/people_photos/organizers/gregorio_perez.png',
  },
  {
    name: 'Evelyn Bunster',
    role: 'Conference Manager',
    country: 'Chile',
    photo: '/assets/people_photos/organizers/evelyn_bunster_conference_manager.png',
  },
]

const committee = [
  { name: 'Juan Esteban Cuervo', org: 'Dialógica, Colombia' },
  { name: 'Roberto Campos', org: 'Universidad Alberto Hurtado, Chile' },
  { name: 'Isabel Torres', org: 'Universidad de Santiago de Chile, Chile' },
  { name: 'Gonzalo Millie', org: 'Duoc UC, Chile' },
  { name: 'Pablo Isla', org: 'Universidad Técnica Federico Santa María, Chile' },
  { name: 'Jean Pierre Remonsellez', org: 'Universidad Nacional Andrés Bello, Chile' },
  { name: 'Sandra Riascos', org: 'Universidad del Valle, Colombia' },
  { name: 'José Luis Álvarez', org: 'European Southern Observatory, Chile' },
  { name: 'Marcelo Godoy', org: 'Universidad de La Serena, Chile' },
  { name: 'Jaime Campos', org: 'Consultor IA, Walmart Chile' },
]

function LeadCard({ name, role, country, photo }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 rounded-full border-4 border-orange overflow-hidden bg-navy-light flex-shrink-0">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30 fill-current">
            <circle cx="50" cy="38" r="20" />
            <ellipse cx="50" cy="85" rx="35" ry="25" />
          </svg>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="font-bahnschrift font-bold text-white text-sm xl:text-base leading-tight">{name}</p>
        <p className="text-orange text-xs xl:text-sm font-semibold">{role}</p>
        <p className="text-white/50 text-xs">{country}</p>
      </div>
    </div>
  )
}

export default function Organizers() {
  return (
    <section className="relative h-auto xl:h-screen">
      <div className="xl:sticky xl:top-0 xl:h-screen bg-[#163457] flex flex-col px-6 xl:px-12 pt-14 pb-6">

        {/* Title */}
        <p className="font-bahnschrift font-bold text-orange uppercase text-xl mb-1">LOCAL ORGANIZING</p>
        <h2 className="section-title text-4xl xl:text-6xl mb-8">COMMITTEE</h2>

        {/* Contenido — dos columnas */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">

          {/* Columna izquierda — leads con foto */}
          <div className="flex items-center justify-center gap-10 xl:gap-16">
            {leads.map((l) => <LeadCard key={l.name} {...l} />)}
          </div>

          {/* Columna derecha — lista Nombre - Organización */}
          <div className="flex flex-col justify-center gap-3">
            {committee.map((m) => (
              <p key={m.name} className="text-white text-sm xl:text-base leading-snug">
                <span className="font-bahnschrift font-bold">{m.name}</span>
                <span className="text-white/50 mx-2">-</span>
                <span className="text-white/70">{m.org}</span>
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
