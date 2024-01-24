 import './globals.css'
import Header from 'components/header'
import SystemInfo from 'components/server-info'
import Footer from 'components/footer'

export const metadata = {
  title: process.env.TITLE,
  description: 'Hacker News clone built with the Next.js App Router.',
  robots: {
    index: true,
    follow: true
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <section className="page">
            {children}
            <Footer />
            <SystemInfo />
          </section>
        </main>
      </body>
    </html>
  )
}

