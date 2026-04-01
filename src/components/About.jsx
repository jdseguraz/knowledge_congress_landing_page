export default function About() {
  return (
    <section id="about" className="relative min-h-screen xl:h-screen overflow-hidden bg-[#163457] flex flex-col xl:block">

      {/* Top layer — About text */}
      <div
        className="relative z-10 xl:h-[60vh] px-6 xl:px-10 py-10 xl:py-0 flex items-center"
        style={{ background: 'linear-gradient(to bottom, #163457 0%, #163457 60%, rgba(22,52,87,0) 100%)' }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-6 xl:gap-8 w-full">
          {/* Col 1/3 — ABOUT */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="section-title text-6xl mb-4 self-center">ABOUT</h2>
            <p className="font-bahnschrift font-bold text-white text-base mb-3 leading-snug">
              The Next Horizon: Integrating AI, Knowledge, Innovation and Talent for Sustainable Global Development
            </p>
            <p className="text-white/70 text-sm mb-1">Date: October 28–30, 2026</p>
            <p className="text-white/70 text-sm">Location: Universidad de Santiago de Chile</p>
          </div>

          {/* Col 2/3 — Párrafos */}
          <div className="space-y-6 text-white/85 text-lg leading-snug">
            <p>The CIKI–ICKM–GFIC Triple Conference 2026 is a premier international event that brings together leading
              academics, researchers, professionals, and organizational leaders at the forefront of knowledge
              management, intellectual capital, innovation, artificial intelligence, and sustainability.</p>
            <p>Designed to foster high-level dialogue and meaningful exchange, the conference offers a dynamic format
              that combines scientific rigor with active participation, enabling direct interaction between research
              and practice. It is a space where ideas are not only presented, but challenged, connected, and
              transformed into actionable insights.</p>
            <p>This unique gathering is the result of a strategic collaboration between three globally recognized
              academic communities: CIKI, ICKM, and GFIC. The 2026 edition will be hosted by the Universidad de
              Santiago de Chile.</p>
            <p>CIKI–ICKM–GFIC 2026 offers a unique opportunity to understand the defining issues of the 21st century
              through the voices of those leading them—researchers, industry leaders, policymakers, and
              entrepreneurs—across diverse sectors and disciplines.</p>
          </div>
        </div>
      </div>

      {/* Bottom — Audience image (static) */}
      <div className="relative xl:absolute xl:inset-x-0 xl:bottom-0 h-[70vh] xl:h-[50vh]">
        <img
          src="/assets/audience_photos/audience2.jpg"
          alt="Conference audience"
          className="w-full h-full object-cover"
        />
        {/* Gradiente top para fusión con la sección de texto */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #163457 0%, rgba(22,52,87,0.6) 60%, rgba(22,52,87,0) 100%)' }}
        />
      </div>

    </section>
  )
}
