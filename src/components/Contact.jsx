import { motion } from 'framer-motion'
import FlushButton from './FlushButton'
import { fadeRight, fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

const importantDates = [
  { label: 'Call for papers/working papers/industrial cases/posters opens', date: 'March 20, 2026' },
  { label: 'Submission deadline', date: 'June 8, 2026' },
  { label: 'Early registration deadline (on-site/online)', date: 'August 2, 2026' },
  { label: 'Final registration deadline', date: 'October 12, 2026' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-navy min-h-screen md:h-screen flex items-center px-6 md:px-16 pt-[20vh] pb-16 md:pb-0 overflow-hidden">
      <div className="w-full grid md:grid-cols-3 gap-12 items-start">
        {/* Left — contact person */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} className="flex flex-col items-center gap-4">
          <motion.h2 variants={staggerItem} className="section-title text-4xl md:text-6xl self-start">CONTACT</motion.h2>
          <motion.div variants={fadeUp} className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-orange overflow-hidden mt-4">
            <img
              src="/assets/people_photos/evelyn_bunster_conference_manager.png"
              alt="Evelyn Bunster"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p variants={staggerItem} className="font-bahnschrift font-bold text-white text-2xl leading-none">Evelyn Bunster</motion.p>
          <motion.p variants={staggerItem} className="text-white/60 text-xl leading-none">Conference Manager</motion.p>

          <motion.div variants={staggerContainer} className="space-y-3 w-full mt-2">
            <motion.div variants={staggerItem} className="flex items-center gap-3">
              <span className="text-white/60 text-lg">✉</span>
              <a href="mailto:evelyn.bunster@usach.cl" className="text-white/80 text-lg leading-snug hover:text-white transition-colors">
                evelyn.bunster@usach.cl
              </a>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center gap-3">
              <span className="text-white/60 text-lg">📞</span>
              <span className="text-white/80 text-lg leading-snug">+56 XXXXXXXX</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Center — important dates */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.h3 variants={staggerItem} className="font-bahnschrift font-bold text-orange text-lg mb-6">Important Dates</motion.h3>
          <motion.div variants={staggerContainer} className="space-y-4">
            {importantDates.map((d) => (
              <motion.div key={d.label} variants={staggerItem}>
                <p className="text-white/70 text-lg leading-snug">{d.label}</p>
                <p className="font-bahnschrift font-bold text-orange text-lg leading-snug">{d.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — CTAs */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} className="flex flex-col gap-4 md:gap-5 md:items-end md:-mr-16 justify-center h-full">
          <FlushButton href="https://drive.google.com/drive/folders/153ctrly5yShpel72xCIvBx2SeTTIGhEm?usp=sharing">
            USEFUL INFORMATION
          </FlushButton>
          <FlushButton href="https://drive.google.com/drive/folders/1LqyLdQFYIcuXxn_VSWwuUWFCqdWmz-iu?usp=sharing" subtitle="Deadline June 8, 2026">
            SUBMISSION LINK
          </FlushButton>
        </motion.div>
      </div>
    </section>
  )
}
