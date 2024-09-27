import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { HeaderMain } from '@/core/components/header/header-main.component';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Challenge Mercado Libre | Jonathan González',
  description: 'Challenge Mercado Libre | Jonathan González',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.mercadolibre.com.ar/',
    siteName: 'Challenge Mercado Libre',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
