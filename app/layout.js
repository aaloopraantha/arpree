export const metadata = {
  title: 'Arpree',
  description: 'Bite-sized TEF & TCF simulations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
