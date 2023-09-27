import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from './providers'

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
    <Providers>
      <body className={`dark:bg-dark   ${inter.className}`}>
      {/* <body className={inter.className}> */}
          <Header />
            {children}
          <Footer />
      </body>
    </Providers>
  </html>
  )
}