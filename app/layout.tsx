import type { Metadata } from 'next'
import { Merriweather, Nunito_Sans } from 'next/font/google'
import './globals.css'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Training and Development - Tobams Group',
  description: 'Training and Development - Tobams Group',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
