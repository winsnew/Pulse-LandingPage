// import { NavbarProvider } from '@/hooks/nav-provider';
import './globals.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png'
  },
  title: 'Pulse - AI Powered Monitoring for Crypto and Stocks',
  description: 'AI Powered Monitoring for Crypto and Stocks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
