export default function CallForPapersCta({ variant = 'desktop' }) {
  const base = 'bg-orange hover:bg-orange-hover text-white font-bahnschrift font-extrabold uppercase transition-colors shadow-lg flex items-center gap-3'

  if (variant === 'mobile') {
    return (
      <a
        href="#call-for-papers"
        className={`${base} mt-8 self-start rounded-full px-8 py-4`}
      >
        <div className="flex flex-col leading-none italic items-start gap-0.5">
          <span className="text-2xl font-semibold">CALL FOR PAPERS!</span>
          <span className="text-sm font-semibold tracking-wide opacity-90 italic">SUBMISSION DEADLINE JUNE 8, 2026</span>
        </div>
        <span className="text-2xl font-bold">›</span>
      </a>
    )
  }

  return (
    <a
      href="#call-for-papers"
      className={`${base} absolute bottom-10 right-0 rounded-l-full pl-10 pr-8 py-5`}
    >
      <div className="flex flex-col leading-none italic items-end gap-0">
        <span className="text-[40px] font-semibold">CALL FOR PAPERS!</span>
        <span className="text-lg font-semibold tracking-wide opacity-90 italic">SUBMISSION DEADLINE JUNE 8, 2026</span>
      </div>
      <span className="text-3xl font-bold">›</span>
    </a>
  )
}
