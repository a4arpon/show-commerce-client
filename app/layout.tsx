import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import twClassName from '@/lib/cn'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Show Commerce | No. 1 Customized Products From Factory To Feet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={twClassName(rubik.className, 'bg-light text-dark')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
