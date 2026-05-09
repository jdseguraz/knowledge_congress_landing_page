import { useState, useEffect } from 'react'

function scrollToCallForPapers(e) {
  e.preventDefault()
  const el = document.getElementById('call-for-papers')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const base = 'bg-orange hover:bg-[#8abceb] text-white font-bahnschrift font-extrabold uppercase transition-colors shadow-lg flex items-center gap-3'

export default function CallForPapersCta({ variant = 'desktop' }) {
  if (variant === 'mobile') {
    return (
      <a
        href="#call-for-papers"
        onClick={scrollToCallForPapers}
        className={`${base} mt-8 self-start rounded-2xl px-7 py-5`}
      >
        <div className="flex flex-col italic items-start gap-1">
          <span className="text-2xl font-semibold leading-tight">CALL FOR PAPERS</span>
          <span className="text-sm font-semibold tracking-wide opacity-90 italic leading-snug">ABSTRACT DEADLINE MAY 15TH, 2026</span>
        </div>
        <span className="text-3xl font-bold self-center">›</span>
      </a>
    )
  }

  return <DesktopStickyCta />
}

function DesktopStickyCta() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const chairs = document.getElementById('chairs')
      if (!chairs) return
      setVisible(chairs.getBoundingClientRect().top > window.innerHeight)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#call-for-papers"
      onClick={scrollToCallForPapers}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`${base} fixed bottom-10 right-0 rounded-l-full pl-10 pr-8 py-5 z-30 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? 'translate-x-0 opacity-100'
          : '-translate-x-[calc(100vw+100%)] opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col leading-none italic items-end gap-0">
        <span className="text-[40px] font-semibold">CALL FOR PAPERS</span>
        <span className="text-lg font-semibold tracking-wide opacity-90 italic">ABSTRACT DEADLINE MAY 15TH, 2026</span>
      </div>
      <span className="text-3xl font-bold">›</span>
    </a>
  )
}
