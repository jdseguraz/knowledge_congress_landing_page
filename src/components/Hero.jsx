import CallForPapersCta from './CallForPapersCta'

const BG = 'rgba(168,190,205,0.80)'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
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

      {/* Content — flex col, centrado verticalmente con padding top para navbar */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-[20vh] px-10">

        {/* Título — navy */}
        <div>
          <span
            className="font-bahnschrift font-extrabold uppercase leading-none px-2 py-0 inline-block"
            style={{ color: '#163458', background: BG, fontSize: 'clamp(2.5rem, 4.8vw, 4.8rem)' }}
          >
            THE NEXT HORIZON:
          </span>
        </div>

        {/* Subtítulos — blanco */}
        <div className="mt-1 space-y-1">
          <div>
            <span
              className="font-bahnschrift font-extrabold uppercase text-white leading-none px-2 py-0 inline-block"
              style={{ background: BG, fontSize: 'clamp(1.2rem, 2.8vw, 2.4rem)' }}
            >
              INTEGRATING AI, KNOWLEDGE, INNOVATION
            </span>
          </div>
          <div>
            <span
              className="font-bahnschrift font-extrabold uppercase text-white leading-none px-2 py-0 inline-block"
              style={{ background: BG, fontSize: 'clamp(1.2rem, 2.8vw, 2.4rem)' }}
            >
              AND TALENT FOR SUSTAINABLE GLOBAL DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Fecha y lugar */}
        <div className="mt-4 space-y-0.5">
          <div>
            <span
              className="font-bahnschrift font-bold text-white leading-none px-2 py-0 inline-block"
              style={{ background: BG, fontSize: 'clamp(0.95rem, 1.7vw, 1.35rem)' }}
            >
              28, 29 &amp; 30 October 2026
            </span>
          </div>
          <div>
            <span
              className="font-bahnschrift font-semibold text-white leading-none px-2 py-0 inline-block"
              style={{ background: BG, fontSize: 'clamp(0.95rem, 1.7vw, 1.35rem)' }}
            >
              Santiago de Chile
            </span>
          </div>
        </div>

        {/* CTA mobile — debajo del contenido, oculto en desktop */}
        <div className="md:hidden">
          <CallForPapersCta variant="mobile" />
        </div>
      </div>

      {/* CTA desktop — absoluto bottom-right, oculto en mobile */}
      <div className="hidden md:block">
        <CallForPapersCta variant="desktop" />
      </div>

    </section>
  )
}
