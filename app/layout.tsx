import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CoffeeHub Pro - Premium Automated Coffee Station Business',
  description: 'Launch your profitable coffee business with CoffeeHub Pro automated stations. Italian quality, contactless payments, full support. Start from €12,900.',
  keywords: 'coffee business, automated coffee station, italian coffee, business opportunity, passive income, franchise',
  authors: [{ name: 'CoffeeHub Pro Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coffeehubpro.com',
    siteName: 'CoffeeHub Pro',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}