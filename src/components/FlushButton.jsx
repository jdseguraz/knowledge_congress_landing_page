export default function FlushButton({ href, children, subtitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-auto flex items-center justify-center md:justify-start px-8 py-4 rounded-full md:rounded-r-none md:rounded-l-full md:pl-8 md:pr-16 text-white font-bahnschrift font-bold italic transition-colors bg-[#ea4e2b] hover:bg-[#8abceb]"
    >
      <span className="flex flex-col items-center md:items-start">
        <span className="text-3xl md:text-4xl uppercase leading-tight">{children}</span>
        {subtitle && <span className="text-sm font-bold not-italic uppercase text-white leading-tight">{subtitle}</span>}
      </span>
    </a>
  )
}
