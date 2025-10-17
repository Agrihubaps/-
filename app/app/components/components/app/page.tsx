'use client'
import Image from 'next/image'
import Section from '@/components/Section'
import { useLocale } from '@/components/LocaleProvider'

const copy = {
  da: {
    hero_kicker: 'AgriHub ApS',
    hero_title: 'Et nyt kapitel for skandinavisk landbrug',
    hero_body: 'AgriHub samler hele landbrugssektoren i ét digitalt univers. En platform skabt til samarbejde, innovation og vækst. Her mødes mennesker, teknologi og bæredygtighed – for at forme fremtidens landbrug.',
    cta_1: 'Oplev visionen', cta_2: 'Bliv en del af AgriHub',
    problem_title: 'Udfordringen', problem_sub: 'Landbruget står over for digital transformation. Vi gør den menneskelig, effektiv og værdiskabende.',
    problem_1_h: 'Fragmenterede løsninger og spildt tid',
    problem_1_b: 'Landmænd og virksomheder jonglerer mellem platforme, kontakter og manuelle processer – og mister fokus på deres kerne: jorden og produktionen.',
    problem_2_h: 'Behov for et samlet økosystem',
    problem_2_b: 'Branchen har brug for et sted, hvor samarbejde, tillid og innovation kan vokse naturligt. Det er her, AgriHub kommer ind.',
    solution_title: 'Løsningen', solution_sub: 'AgriHub er mere end en platform – det er et fællesskab og en bevægelse mod et smartere, grønnere landbrug.',
    features: [
      { t: 'Marketplace', b: 'Et sted hvor landmænd og virksomheder mødes for at handle maskiner, udstyr og ydelser.' },
      { t: 'HR & Rekruttering', b: 'Skab forbindelser mellem talent og landbrug. Find specialister og partnere.' },
      { t: 'Community & Videndeling', b: 'Et stærkt fællesskab for alle i landbruget. Samarbejde, innovation og tillid.' },
      { t: 'Data & Indsigt', b: 'Digitalisering af landbruget med viden, analyser og bæredygtige løsninger.' }
    ],
    mission_title: 'Vores mission & værdier', mission_sub: 'Vi bygger bro mellem tradition og innovation – med respekt for jorden og menneskene bag.',
    values: [
      { t: 'Samarbejde', b: 'Vi forbinder aktører på tværs af værdikæden og skaber stærke relationer.' },
      { t: 'Gennemsigtighed', b: 'Åben information og fair spilleregler for alle.' },
      { t: 'Bæredygtighed', b: 'Teknologi og data til smartere og grønnere beslutninger.' },
      { t: 'Tillid', b: 'Bedømmelser, historik og verificerede profiler bygger et sikkert økosystem.' }
    ],
    market_title: 'Marked og fremtid', market_sub: 'Vi starter i Skandinavien – men visionen rækker videre.',
    stats: [ { l: 'Danmark', v: '≈ 33.000 gårde' }, { l: 'Sverige', v: '≈ 59.000 gårde' }, { l: 'Norge', v: '≈ 10.000 gårde' }, { l: 'Tyskland', v: '≈ 255.000 gårde' } ],
    market_card_h: 'Et voksende digitalt potentiale', market_card_b: 'Digitalisering af landbruget er ikke fremtiden – den sker nu. AgriHub forbinder de mennesker og data, der gør det muligt.',
    team_title: 'Menneskene bag AgriHub', team_sub: 'Erfaring, passion og et klart mål: at gøre landbruget mere forbundet og bæredygtigt.',
    team: [
      { n: 'Rune Larssen Elsborg — Adm. Direktør', b: '6 års erfaring i en stor nordisk agrovirksomhed; 20 års ledelse offshore.' },
      { n: 'Denys Antoshyn — Direktør', b: '15+ års erfaring i landbrugssektoren, teknisk ekspertise og markedsindsigt.' }
    ],
    partners_h: 'Partnere og støtte', partners_b: 'Sønderjyllands Revision (regnskab), Stfalcon (udvikling), Netpeak (marketing) m.fl.',
    contact_title: 'Bliv en del af fremtidens landbrug', contact_sub: 'Skriv til os – vi sender demo og partnerinformation.',
    form_name: 'Dit navn', form_company: 'Virksomhed', form_msg: 'Din besked', form_send: 'Send',
    alert_ok: 'Tak! Vi kontakter dig snart.', alert_err: 'Der opstod en fejl. Prøv igen senere.'
  },
  en: {
    hero_kicker: 'AgriHub ApS', hero_title: 'A new chapter for Nordic agriculture',
    hero_body: 'AgriHub unites the agricultural sector in one digital universe. A platform for collaboration, innovation and growth. Where people, technology and sustainability meet to shape the future of farming.',
    cta_1: 'See the vision', cta_2: 'Join AgriHub',
    problem_title: 'The challenge', problem_sub: 'Agriculture is undergoing digital transformation. We make it human, effective and value-creating.',
    problem_1_h: 'Fragmented tools and lost time', problem_1_b: 'Farmers and companies juggle platforms, contacts and manual processes – losing focus on the field and production.',
    problem_2_h: 'Need for one ecosystem', problem_2_b: 'An industry hub where collaboration, trust and innovation can grow. That is AgriHub.',
    solution_title: 'The solution', solution_sub: 'More than a platform – a community and a movement towards smarter, greener farming.',
    features: [
      { t: 'Marketplace', b: 'A place where farmers and companies trade machines, equipment and services.' },
      { t: 'HR & Recruiting', b: 'Connect talent and agriculture. Find specialists and partners.' },
      { t: 'Community & Knowledge', b: 'A strong community for everyone in agriculture. Collaboration, innovation and trust.' },
      { t: 'Data & Insight', b: 'Digitalising agriculture with knowledge, analytics and sustainable solutions.' }
    ],
    mission_title: 'Our mission & values', mission_sub: 'Bridging tradition and innovation – with respect for the land and the people behind it.',
    values: [
      { t: 'Collaboration', b: 'Connecting actors across the value chain and building strong relationships.' },
      { t: 'Transparency', b: 'Open information and fair rules for everyone.' },
      { t: 'Sustainability', b: 'Technology and data for smarter, greener decisions.' },
      { t: 'Trust', b: 'Ratings, history and verified profiles create a safe ecosystem.' }
    ],
    market_title: 'Market and future', market_sub: 'We start in Scandinavia – the vision goes further.',
    stats: [ { l: 'Denmark', v: '≈ 33,000 farms' }, { l: 'Sweden', v: '≈ 59,000 farms' }, { l: 'Norway', v: '≈ 10,000 farms' }, { l: 'Germany', v: '≈ 255,000 farms' } ],
    market_card_h: 'A growing digital opportunity', market_card_b: 'The digital shift is now. AgriHub connects the people and data that make it possible.',
    team_title: 'The people behind AgriHub', team_sub: 'Experience, passion and a clear goal: a more connected and sustainable agriculture.',
    team: [
      { n: 'Rune Larssen Elsborg — CEO', b: '6 years in a major Nordic agro company; 20 years of offshore leadership.' },
      { n: 'Denys Antoshyn — Director', b: '15+ years in the sector; technical expertise and market insight.' }
    ],
    partners_h: 'Partners & support', partners_b: 'Sønderjyllands Revision (accounting), Stfalcon (development), Netpeak (marketing) and more.',
    contact_title: 'Join the future of farming', contact_sub: 'Send us a message – we will share a demo and partner information.',
    form_name: 'Your name', form_company: 'Company', form_msg: 'Your message', form_send: 'Send',
    alert_ok: 'Thank you! We will contact you soon.', alert_err: 'Something went wrong. Please try again later.'
  }
}

export default function Page(){
  const { lang } = useLocale()
  const t = copy[lang]

  function handleContact(e: React.FormEvent<HTMLFormElement>){
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
    if (!endpoint) return
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    fetch(endpoint as string, { method: 'POST', body: data })
      .then(()=>{ alert(t.alert_ok); form.reset() })
      .catch(()=> alert(t.alert_err))
  }

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="container-xxl py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest opacity-70 mb-2">{t.hero_kicker}</p>
            <h1 className="mb-4">{t.hero_title}</h1>
            <p className="opacity-90 mb-8 max-w-2xl">{t.hero_body}</p>
            <div className="flex gap-4">
              <a href="#solution" className="btn-gold">{t.cta_1}</a>
              <a href="#contact" className="btn-gold" style={{background: 'linear-gradient(135deg,#1a3a2a,#274738)'}}>{t.cta_2}</a>
            </div>
          </div>
          <div className="grid place-items-center">
            <Image src="/logo.png" alt="AgriHub Logo" width={320} height={320} className="drop-shadow-2xl" />
          </div>
        </div>
      </section>
    </main>
  )
}
