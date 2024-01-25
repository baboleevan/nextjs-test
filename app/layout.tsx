import { ReactNode } from 'react';

import Header from '@/components/Header';
import SystemInfo from '@/components/SystemInfo';
import Footer from '@/components/Footer';

import '@/app/globals.scss';

export const metadata = {
  title: process.env.TITLE,
  description: 'Hacker News clone built with the Next.js App Router.',
  robots: {
    index: true,
    follow: true
  }
};

console.log('TITLE', process.env.TITLE);
console.log('NEXT_PUBLIC_TITLE', process.env.NEXT_PUBLIC_TITLE);

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
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
  );
}
