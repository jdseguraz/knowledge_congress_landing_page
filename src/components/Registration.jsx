import { motion } from 'framer-motion'
import FlushButton from './FlushButton'
import { fadeRight, fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

const fees = [
  { label: 'Early Bird Registration', price: 'US$250' },
  { label: 'Early Bird Registration + Conference Dinner', price: 'US$350' },
  { label: 'Regular Registration', price: 'US$350' },
  { label: 'Regular Registration + Conference Dinner', price: 'US$450' },
  { label: 'Student Early Bird Registration', price: 'US$160' },
  { label: 'Student Regular Registration', price: 'US$200' },
  { label: 'Online Early Bird Registration', price: 'US$200' },
  { label: 'Online Registration', price: 'US$250' },
  { label: 'One-Day Visitor (no paper presentation; no certificate issued)', price: 'US$150' },
  { label: 'Extra Paper. Each (maximum of three)', price: 'US$80' },
  { label: 'Additional Conference Dinner Ticket', price: 'US$100' },
]

const importantDates = [
  { label: 'Call for abstracts/Industrial cases/Posters opens', date: 'April 1st, 2026' },
  { label: 'Submission deadline', date: 'July 30, 2026' },
  { label: 'Early registration deadline (on-site/online)', date: 'July 24, 2026' },
  { label: 'Final registration deadline', date: 'October 12, 2026' },
]

export default function Registration() {
  return (
    <section id="registration" className="bg-navy min-h-screen md:h-screen flex items-center px-6 md:px-16 py-16 md:py-0 overflow-hidden">
      <div className="w-full grid md:grid-cols-2 gap-10 md:gap-12">
        {/* Left */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.p variants={staggerItem} className="font-bahnschrift font-bold text-orange uppercase text-lg mb-1">CONFERENCE</motion.p>
          <motion.h2 variants={staggerItem} className="section-title text-4xl md:text-6xl mb-6 md:mb-8">REGISTRATION</motion.h2>

          <motion.h3 variants={staggerItem} className="font-bahnschrift font-bold text-orange text-base md:text-lg mb-3">Important Dates</motion.h3>
          <motion.div variants={staggerContainer} className="space-y-3 md:space-y-4">
            {importantDates.map((d) => (
              <motion.div key={d.label} variants={staggerItem}>
                <p className="text-white/70 text-sm md:text-lg leading-snug">{d.label}</p>
                <p className="font-bahnschrift font-bold text-orange text-sm md:text-lg leading-snug">{d.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — fees table */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight}>
          <motion.div variants={fadeUp} className="bg-sky-light/20 rounded-t-lg px-4 py-3">
            <h3 className="font-bahnschrift font-bold text-white text-center text-base md:text-xl">Registration Fees</h3>
          </motion.div>
          <div className="overflow-x-auto rounded-b-lg border border-t-0 border-white/10">
            <table className="w-full text-xs">
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-2 px-3 text-white/80 leading-snug">{f.label}</td>
                    <td className="py-2 px-3 text-white/80 text-right whitespace-nowrap font-bold">{f.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-5 md:items-end md:-mr-16">
            <FlushButton href="https://drive.google.com/drive/folders/153ctrly5yShpel72xCIvBx2SeTTIGhEm?usp=sharing">
              USEFUL INFORMATION
            </FlushButton>
            <FlushButton href="https://easychair.org/account/signin?l=2180654027413405632.1774997082.ecc9ef9f" subtitle="Deadline July 30, 2026">
              SUBMISSION LINK
            </FlushButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
