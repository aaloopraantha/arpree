import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Arpree',
  description: 'TEF & TCF Preparation Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          background: '#000',
          color: '#fff',
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
