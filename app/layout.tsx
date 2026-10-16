import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Libre_Franklin, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const displayFace = Libre_Franklin({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-face',
  display: 'swap',
})

const bodyFace = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'V. Thambidurai — QA Engineer, Chennai',
  description:
    'Portfolio of V. Thambidurai, QA engineer with approximately five years of testing experience across banking, UPI payments, cryptocurrency, healthcare, pharmaceuticals and title insurance, specialising in manual and functional QA, Selenium/Java test automation and LLM response evaluation.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b1f3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${displayFace.variable} ${bodyFace.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
