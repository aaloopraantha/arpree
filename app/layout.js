export const metadata = {
  title: "Arpree",
  description: "TEF & TCF Canada preparation platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
