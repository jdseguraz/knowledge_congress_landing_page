import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

const primarySponsors = [
  { name: 'CIKI', src: '/assets/logos/principales/CIKI.png' },
  { name: 'ICKM', src: '/assets/logos/principales/ICKM.png' },
  { name: 'GFIC', src: '/assets/logos/principales/GFIC.png' },
]

const supportingSponsors = [
  { name: 'Universidad de Chile', src: '/assets/logos/sponsors/uchile_transparent.png', className: 'h-28 xl:h-32' },
  { name: 'OUI / IOHE', src: '/assets/logos/sponsors/OUI_logo_transparent.png', className: 'h-28 xl:h-32' },
  { name: 'Dialógica', src: '/assets/logos/sponsors/dialogica_logo.png', className: 'h-10 xl:h-12' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-white min-h-screen xl:h-screen flex items-center px-10 py-16 xl:py-0 overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 xl:gap-16 items-start w-full max-w-7xl mx-auto">

        {/* Col 1 — Título */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
          <h2 className="font-bahnschrift font-extrabold uppercase text-orange text-6xl leading-none">
            SPONSORS
          </h2>
        </motion.div>

        {/* Cols 2–4 — Logos */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} className="xl:col-span-3 flex flex-col gap-10">
          {/* Primary */}
          <motion.div variants={staggerContainer} className="flex flex-wrap items-center justify-center xl:justify-start gap-12">
            {primarySponsors.map((s) => (
              <motion.img key={s.name} variants={staggerItem} src={s.src} alt={s.name} className="h-24 xl:h-28 object-contain" />
            ))}
          </motion.div>

          <hr className="border-gray-200" />

          {/* Supporting */}
          <motion.div variants={staggerContainer} className="flex flex-wrap items-center justify-center xl:justify-start gap-12">
            {supportingSponsors.map((s) => (
              <motion.img key={s.name} variants={staggerItem} src={s.src} alt={s.name} className={`${s.className} object-contain`} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
