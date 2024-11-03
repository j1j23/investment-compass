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
      <body>{children}</body>
    </html>
  )
}
