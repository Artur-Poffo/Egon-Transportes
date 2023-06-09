import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileMenu } from '@/components/MobileMenu'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Egon Transportes',
  description: 'Sua empresa de fretes mais confiável e rápida!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900"
    >
      <body className="min-h-screen bg-zinc-900 text-zinc-200 relative">
        <Header />
        <MobileMenu />
        <main className="py-20 px-5 max-w-7xl m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
