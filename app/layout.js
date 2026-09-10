import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'ARPREE — TEF & TCF Canada Preparation',
  description: 'Practice TEF Canada and TCF Canada with structured lessons, exam simulations, progress tracking, and French skill practice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
