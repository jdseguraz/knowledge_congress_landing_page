import { motion } from 'framer-motion'
import CallForPapersCta from './CallForPapersCta'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen md:h-screen overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/video-inicial.mov" type="video/mp4" />
      </video>

      {/* Overlay transparente sobre el video */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-[20vh] px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="max-w-3xl space-y-6 text-white/90 text-lg leading-snug"
        >
          <motion.p variants={staggerItem}>
            <strong className="text-white">We are living a decisive moment.</strong> The convergence of artificial
            intelligence, knowledge, innovation, and talent is transforming how we understand development,
            competitiveness, and collective well-being. More than a technological revolution, this is an inflection
            point that invites us to rethink how we want to build the future.
          </motion.p>
          <motion.p variants={staggerItem}>
            The real challenge is not only to develop new capabilities, but to guide that progress with judgment,
            ethics, and a clear sense of purpose. Today, more than ever, we need to open meaningful conversations
            about sustainability, governance, inclusion, and the role of knowledge in creating more resilient and
            equitable societies.
          </motion.p>
          <motion.p variants={staggerItem}>
            In 2026, ICKM, CIKI, and GFIC will convene in Chile, bringing together researchers, professionals,
            business leaders, public policy decision-makers, and graduate students in a space for interdisciplinary
            dialogue on the key issues shaping the next frontier of global development.
          </motion.p>
        </motion.div>

        {/* CTA mobile — debajo del contenido */}
        <div className="md:hidden">
          <CallForPapersCta variant="mobile" />
        </div>
      </div>

      {/* CTA desktop — absoluto bottom-right */}
      <div className="hidden md:block">
        <CallForPapersCta variant="desktop" />
      </div>

    </section>
  )
}
