function scrollToCallForPapers(e) {
  e.preventDefault()
  const el = document.getElementById('call-for-papers')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function CallForPapersCta({ variant = 'desktop' }) {
  const base = 'bg-orange hover:bg-[#8abceb] text-white font-bahnschrift font-extrabold uppercase transition-colors shadow-lg flex items-center gap-3'

  if (variant === 'mobile') {
    return (
      <a
        href="#call-for-papers"
        onClick={scrollToCallForPapers}
        className={`${base} mt-8 self-start rounded-2xl px-7 py-5`}
      >
        <div className="flex flex-col italic items-start gap-1">
          <span className="text-2xl font-semibold leading-tight">CALL FOR PAPERS</span>
          <span className="text-sm font-semibold tracking-wide opacity-90 italic leading-snug">SUBMISSION DEADLINE JULY 15TH, 2026</span>
        </div>
        <span className="text-3xl font-bold self-center">›</span>
      </a>
    )
  }

  return (
    <a
      href="#call-for-papers"
      onClick={scrollToCallForPapers}
      className={`${base} absolute bottom-10 right-0 rounded-l-full pl-10 pr-8 py-5 z-20`}
    >
      <div className="flex flex-col leading-none italic items-end gap-0">
        <span className="text-[40px] font-semibold">CALL FOR PAPERS</span>
        <span className="text-lg font-semibold tracking-wide opacity-90 italic">SUBMISSION DEADLINE JULY 15TH, 2026</span>
      </div>
      <span className="text-3xl font-bold">›</span>
    </a>
  )
}
