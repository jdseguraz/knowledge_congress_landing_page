const INSTAGRAM_URL = 'https://www.instagram.com/knowledgeconference?utm_source=qr&igsh=YjhyaXM3bGs2MHVp'

export default function FloatingCalendar() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Knowledge Conference on Instagram"
      className="group fixed bottom-10 left-6 z-30 flex items-center gap-3 bg-navy hover:bg-orange text-white rounded-full shadow-lg pl-4 pr-5 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/40"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </span>
      <span className="font-bahnschrift font-extrabold uppercase text-sm md:text-base tracking-wide leading-none whitespace-nowrap">
        Síguenos
      </span>
    </a>
  )
}
