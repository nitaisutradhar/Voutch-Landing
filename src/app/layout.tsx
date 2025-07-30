// src/app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voutch | The Easy Way to Buy & Sell Event Tickets',
  description: 'Voutch - The simple, secure ticket marketplace for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
