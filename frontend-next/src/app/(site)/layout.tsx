import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AL-NFLY',
  description: "A personal website by Almer Naufaly, aimed to document every projects he has created",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`bg-dark text-white   ${inter.className}`}>
    <Header />
      {children}
    <Footer />
    </body>
  </html>
  )
}