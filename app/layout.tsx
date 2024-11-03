import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Investment Compass',
  description: 'Navigate your investment journey with Investment Compass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100`}>{children}</body>
    </html>
  )
}
