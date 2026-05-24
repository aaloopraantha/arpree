import './globals.css'

export const metadata = {
  title: 'Arpree',
  description: 'TEF & TCF Preparation Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
