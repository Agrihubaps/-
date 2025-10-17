'use client'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'da' | 'en'
const LocaleCtx = createContext<{lang: Lang, setLang: (l: Lang)=>void}>({ lang: 'da', setLang: ()=>{} })

export function LocaleProvider({ children }: { children: React.ReactNode }){
  const [lang, setLang] = useState<Lang>('da')
  useEffect(()=>{ 
    const saved = localStorage.getItem('lang') as Lang | null
    if(saved) setLang(saved) 
  },[])
  const api = useMemo(()=>({ 
    lang, 
    setLang: (l: Lang)=>{ 
      setLang(l); 
      localStorage.setItem('lang', l) 
    } 
  }),[lang])
  return <LocaleCtx.Provider value={api}>{children}</LocaleCtx.Provider>
}

export function useLocale(){ 
  return useContext(LocaleCtx) 
}
