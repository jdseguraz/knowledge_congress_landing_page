import { motion } from 'framer-motion'
import UnderConstruction from './UnderConstruction'
import { fadeRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

const days = [
  { num: 1, title: 'The new scenario for knowledge management and innovation' },
  { num: 2, title: 'Advances in AI and its impact on organizations and society' },
  { num: 3, title: 'Disruptive technology and sustainability' },
]

export default function Program() {
  return (
    <section id="program" className="bg-navy min-h-screen md:h-screen flex items-center px-6 md:px-16 py-16 md:py-0 overflow-hidden">
      <div className="w-full h-full grid md:grid-cols-3 gap-10 items-start py-16">
        {/* Left — day selectors */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.p variants={staggerItem} className="font-bahnschrift font-bold text-orange uppercase text-xl mb-1">CONFERENCE</motion.p>
          <motion.h2 variants={staggerItem} className="section-title text-4xl md:text-6xl mb-8">PROGRAM</motion.h2>

          <div className="md:-ml-16 md:w-[calc(100%+4rem)] space-y-5">
            {days.map((day, i) => (
              <motion.div
                key={day.num}
                variants={staggerItem}
                custom={i}
                className="w-full flex items-center gap-4 md:gap-6 px-6 md:pl-16 md:pr-8 py-5 md:py-7 rounded-full md:rounded-l-none md:rounded-r-full bg-orange hover:bg-[#8abceb] transition-colors text-white font-bahnschrift font-bold uppercase"
              >
                <span className="text-3xl md:text-5xl shrink-0">DAY {day.num}</span>
                <span className="text-sm md:text-lg font-normal normal-case leading-snug">{day.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — under construction */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} className="md:col-span-2 self-center flex items-center justify-center">
          <UnderConstruction />
        </motion.div>
      </div>
    </section>
  )
}
