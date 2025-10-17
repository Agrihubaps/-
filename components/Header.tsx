'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from '@/components/LocaleProvider'

const dict = {
  da: { problem: 'Udfordring', solution: 'Løsning', features: 'Funktioner', market: 'Marked', team: 'Team', contact: 'Kontakt', mission: 'Mission', menu: 'Menu' },
  en: { problem: 'Challenge', solution: 'Solution', features: 'Features', market: 'Market', team: 'Team', contact: 'Contact', mission: 'Mission', menu: 'Menu' }
}

// Универсальная ссылка с мягким скроллом к якорю (#id)
function Anchor({
  href,
  className,
  children,
  onDone,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onDone?: () => void
}) {
  const isHash = href.startsWith('#')
  const id = isHash ? href.slice(1) : null

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (id) {
      e.preventDefault()
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Обновим URL-хеш без перезагрузки
        history.replaceState(null, '', href)
      }
      onDone?.()
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

export default function Header(){
  const { lang, setLang } = useLocale()
  const t = dict[lang]
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  const NavLinks = () => (
    <>
      <Anchor href="#problem" onDone={closeMenu}>{t.problem}</Anchor>
      <Anchor href="#solution" onDone={closeMenu}>{t.solution}</Anchor>
      {/* "Funktioner/Features" ведём на тот же блок Løsning */}
      <Anchor href="#solution" onDone={closeMenu}>{t.features}</Anchor>
      <Anchor href="#mission" onDone={closeMenu}>{t.mission}</Anchor>
      <Anchor href="#market" onDone={closeMenu}>{t.market}</Anchor>
      <Anchor href="#team" onDone={closeMenu}>{t.team}</Anchor>
      <Anchor href="#contact" className="btn-gold" onDone={closeMenu}>{t.contact}</Anchor>
      <div className="flex items-center gap-2 ml-4">
        <button onClick={()=>{ setLang('da'); closeMenu() }} aria-label="Dansk" className={`px-3 py-1 rounded-xl ${lang==='da'?'bg-white text-black':'bg-white/10'}`}>DA</button>
        <button onClick={()=>{ setLang('en'); closeMenu() }} aria-label="English" className={`px-3 py-1 rounded-xl ${lang==='en'?'bg-white text-black':'bg-white/10'}`}>EN</button>
      </div>
    </>
  )

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-greenDark/80 backdrop-blur">
      <div className="container-xxl flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AgriHub" width={40} height={40} className="rounded" />
          <span className="font-semibold tracking-wider">AgriHub</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <NavLinks />
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden px-3 py-2 rounded-xl bg-white/10"
          aria-label={t.menu}
          onClick={()=>setOpen(v=>!v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-greenDark/95">
          <div className="container-xxl py-4 flex flex-col gap-4 text-sm">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  )
}
