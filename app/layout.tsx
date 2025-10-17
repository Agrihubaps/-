import './globals.css'
import type { Metadata } from 'next'
import { LocaleProvider } from '@/components/LocaleProvider'
import Header from '@/components/Header'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://agrihub.example.com'),
  title: 'AgriHub ApS — Digitalt økosystem for landbruget',
  description: 'AgriHub samler landmænd, virksomheder og rekruttering i ét digitalt økosystem. Marketplace, HR og Community for Norden.',
  openGraph: { 
    title: 'AgriHub ApS', 
    description: 'Skandinaviens digitale agro-økosystem: marketplace, HR og community — alt ét sted.', 
    images: ['/og.jpg'], 
    type: 'website' 
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'AgriHub ApS', 
    description: 'Digitalt agro-økosystem for Norden', 
    images: ['/og.jpg'] 
  },
  icons: [{ rel: 'icon', url: '/logo.png' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="bg-ambient">
        <LocaleProvider>
          <Header />
          {children}
          <footer className="border-t border-white/10 mt-16">
            <div className="container-xxl py-10 text-sm opacity-70">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="AgriHub" width={28} height={28} />
                  <span>© {new Date().getFullYear()} AgriHub ApS</span>
                </div>
                <div className="space-x-6">
                  <a href="#">Privatlivspolitik</a>
                  <a href="#">Betingelser</a>
                </div>
              </div>
            </div>
          </footer>
        </LocaleProvider>
      </body>
    </html>
  )
}
