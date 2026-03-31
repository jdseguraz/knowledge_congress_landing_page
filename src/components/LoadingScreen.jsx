import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center gap-10"
        >
          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
            className="flex items-center gap-4 md:gap-6"
          >
            <img src="/assets/logos/principales/CIKI.png" alt="CIKI" className="h-14 md:h-20 object-contain" />
            <img src="/assets/logos/principales/ICKM.png" alt="ICKM" className="h-14 md:h-20 object-contain" />
            <img src="/assets/logos/principales/GFIC.png" alt="GFIC" className="h-14 md:h-20 object-contain" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' } }}
            className="text-center space-y-1 px-6"
          >
            <p className="font-bahnschrift font-extrabold text-orange uppercase text-2xl md:text-3xl leading-tight tracking-wide">
              The Next Horizon
            </p>
            <p className="font-bahnschrift text-white/60 text-sm md:text-base uppercase tracking-widest">
              Santiago de Chile · October 2026
            </p>
          </motion.div>

          {/* Loader dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            className="flex items-center gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-2 h-2 rounded-full bg-orange"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
