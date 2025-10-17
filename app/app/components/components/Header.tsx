'use client'
import Image from 'next/image'
import { useLocale } from '@/components/LocaleProvider'

const dict = {
  da: { 
    problem: 'Udfordring', solution: 'Løsning', features: 'Funktioner', 
    market: 'Marked', team: 'Team', contact: 'Kontakt', mission: 'Mission' 
  },
  en: { 
    problem: 'Challenge', solution: 'Solution', features: 'Features', 
    market: 'Market', team: 'Team', contact: 'Contact', mission: 'Mission' 
  }
}

export default function Header(){
  const { lang, setLang } = useLocale()
  const t = dict[lang]
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-greenDark/80 backdrop-blur">
      <div className="container-xxl flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AgriHub" width={40} height={40} className="rounded" />
          <span className="font-semibold tracking-wider">AgriHub</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#problem">{t.problem}</a>
          <a href="#solution">{t.solution}</a>
          <a href="#features">{t.features}</a>
          <a href="#mission">{t.mission}</a>
          <a href="#market">{t.market}</a>
          <a href="#team">{t.team}</a>
          <a href="#contact" className="btn-gold">{t.contact}</a>
          <div className="flex items-center gap-2 ml-4">
            <button onClick={()=>setLang('da')} aria-label="Dansk" className={`px-3 py-1 rounded-xl ${lang==='da'?'bg-white text-black':'bg-white/10'}`}>DA</button>
            <button onClick={()=>setLang('en')} aria-label="English" className={`px-3 py-1 rounded-xl ${lang==='en'?'bg-white text-black':'bg-white/10'}`}>EN</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
