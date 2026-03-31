import { motion } from 'framer-motion'
import UnderConstruction from './UnderConstruction'
import { fadeRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Speakers() {
  return (
    <section id="speakers" className="bg-navy min-h-screen md:h-screen flex items-center px-6 md:px-16 py-16 md:py-0 overflow-hidden">
      <div className="w-full h-full grid md:grid-cols-3 gap-10 items-start py-16">
        {/* Left — label */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.p variants={staggerItem} className="font-bahnschrift font-bold text-orange uppercase text-xl mb-1">KEY NOTE</motion.p>
          <motion.h2 variants={staggerItem} className="section-title text-4xl md:text-6xl">SPEAKERS</motion.h2>
          <motion.div variants={staggerContainer} className="mt-6 space-y-2">
            <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug">The Next Horizon: Integrating AI, Knowledge, Innovation and Talent for Sustainable Global Development</motion.p>
            <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug"><strong className="text-white">Date:</strong> October 28–30, 2026</motion.p>
            <motion.p variants={staggerItem} className="text-white/80 text-lg leading-snug"><strong className="text-white">Location:</strong> Universidad de Santiago de Chile</motion.p>
          </motion.div>
        </motion.div>

        {/* Right — under construction */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} className="md:col-span-2 self-end">
          <UnderConstruction />
        </motion.div>
      </div>
    </section>
  )
}
