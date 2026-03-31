import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '../utils/animations'

const tracks = [
  {
    num: 1,
    title: 'Knowledge Management, Innovation, and Intellectual Capital',
    topics: [
      'Knowledge management and innovation',
      'Measurement, reporting, and management of intellectual capital',
      'Intellectual capital in organizations and territories',
      'Knowledge transfer and technology transfer',
      'Innovation ecosystems and knowledge networks',
      'Technology entrepreneurship',
    ],
  },
  {
    num: 2,
    title: 'Artificial Intelligence, Knowledge Engineering, and Emerging Technologies',
    topics: [
      'Advances and future directions in artificial intelligence and knowledge engineering',
      'Knowledge-based intelligent systems',
      'Generative AI and knowledge creation',
      'Data-driven and AI-based innovation',
      'Human–machine collaboration and hybrid intelligence',
    ],
  },
  {
    num: 3,
    title: 'Education, Talent, and the Future of Work',
    topics: [
      'Artificial intelligence, neurotechnology, and the future of learning',
      'Education and intellectual capital in the AI era',
      'AI in higher education and lifelong learning',
      'Work, talent, and organizations in the knowledge economy',
      'Leadership and organizational transformation in AI-driven environments',
    ],
  },
  {
    num: 4,
    title: 'Governance, Public Policy, and Digital Transformation',
    topics: [
      'Governance, ethics, and regulation of artificial intelligence',
      'Digital transformation in the public sector',
      'Knowledge-based public policy',
      'Data governance and algorithmic transparency',
      'Compliance and institutional governance in the digital era',
    ],
  },
  {
    num: 5,
    title: 'AI, Society, and Sustainable Development',
    topics: [
      'Global economy, technology, and sustainability',
      'AI for sustainable development',
      'AI, knowledge, and innovation for sustainable healthcare systems',
      'AI in the management of natural, intellectual, and social capital',
      'Digital inclusion and sustainability',
      'Social impact of AI: inequalities, digital inclusion, and the future of democracy',
    ],
  },
]

const submissionTypes = [
  {
    type: 'INDUSTRIAL/INNOVATION CASE STUDY (IN-PERSON/ONLINE)',
    desc: 'Seeks to share practical experiences, lessons learned, and solutions applied in real industrial, business, or public contexts. Cases of innovations applied in companies and the public sector are especially welcome. 200-300 words that will cover the main idea of the case.',
  },
  {
    type: 'WORKING PAPERS (IN-PERSON/ONLINE)',
    desc: 'Must contain the essential elements that allow understanding of the academic contribution of the article to the conference, such as: objectives, methodology, theoretical foundations, and partial results. Documents of 2000-3000 words are accepted.',
  },
  {
    type: 'FULL PAPER (IN-PERSON/ONLINE)',
    desc: 'Must present original and significant contributions to scientific knowledge, validated through rigorous methods. Documents must contain between 3000-6000 words. Best papers will be considered for publication in the journals associated with the conference.',
  },
  {
    type: 'POSTER (IN-PERSON ONLY)',
    desc: 'Seeks to highlight ideas and research proposals in the initial stages, ongoing research, and promising preliminary results. Contributions with academic standards are expected.',
  },
]

const SUBMISSION_LINK = 'https://drive.google.com/drive/folders/1hhFpjOtHyhu_cQXnH4sNaMrcHaR_7kCX?usp=sharing'

export default function CallForPapers() {
  const [activeTrack, setActiveTrack] = useState(null)

  const visibleTracks = activeTrack === null
    ? tracks
    : tracks.filter((t) => t.num === activeTrack)

  return (
    <section id="call-for-papers" className="bg-navy min-h-screen md:h-screen flex items-center px-6 md:px-16 py-16 md:py-0">
      <div className="w-full grid md:grid-cols-2 gap-12">
        {/* Left */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.div variants={staggerItem} className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-6">
            <h2 className="font-bahnschrift font-extrabold uppercase text-orange text-4xl md:text-6xl leading-none shrink-0">
              CALL FOR<br />
              <span className="text-white">PAPERS</span>
            </h2>

            <div className="text-white/80 text-base md:text-lg leading-snug space-y-1 md:pt-1">
              <p>Call for papers/working papers/industrial cases/posters opens: <strong className="text-white">March 20, 2026</strong></p>
              <p className="text-orange font-bahnschrift font-bold">SUBMISSION DEADLINE: JUNE 8, 2026</p>
            </div>
          </motion.div>

          <motion.h3 variants={staggerItem} className="font-bahnschrift font-bold uppercase text-white text-sm tracking-widest mb-4">SUBMISSION TYPES</motion.h3>

          <motion.div variants={staggerContainer} className="space-y-4">
            {submissionTypes.map((s) => (
              <motion.p key={s.type} variants={staggerItem} className="text-white/80 text-base md:text-lg leading-snug">
                <strong className="text-white">{s.type}:</strong> {s.desc}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Tracks accordion */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} className="md:-mr-16 md:w-[calc(100%+4rem)] space-y-5">
          {visibleTracks.map((track) => {
            const isOpen = activeTrack === track.num
            return (
              <div key={track.num}>
                <button
                  onClick={() => setActiveTrack(isOpen ? null : track.num)}
                  className="w-full flex items-center gap-4 md:gap-6 px-6 md:pl-8 md:pr-16 py-4 md:py-5 rounded-full md:rounded-r-none md:rounded-l-full bg-orange hover:bg-[#8abceb] text-white font-bahnschrift font-bold uppercase transition-colors"
                >
                  <span className="text-xl md:text-2xl shrink-0">TRACK {track.num}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-sm md:text-lg font-normal normal-case text-left leading-snug">{track.title}</span>
                </button>

                {isOpen && (
                  <ul className="mt-3 md:mr-16 space-y-2 pl-4 md:pl-8">
                    {track.topics.map((topic) => (
                      <li key={topic} className="text-white/80 text-base md:text-lg leading-snug flex items-start gap-3">
                        <span className="text-white mt-1 shrink-0">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}

          <div className="mt-5 flex justify-center md:justify-end">
            <a
              href={SUBMISSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-5 md:pl-8 md:pr-16 md:py-7 rounded-full md:rounded-r-none md:rounded-l-full text-white font-bahnschrift font-normal transition-colors hover:opacity-90"
              style={{ backgroundColor: '#8abceb' }}
            >
              <span className="text-xl md:text-2xl">Paper Guidelines &amp; Submission</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
