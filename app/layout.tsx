import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/providers/ThemeProvider';
import NavBar from '@/components/NavBar';
import SkeletonProvider from '@/providers/SkeletonProvider';

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
  title: 'Github user search',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SkeletonProvider>
            <div className="w-full max-w-screen-2xl mx-auto  min-h-screen bg-[#dae2ec] dark:bg-dark-200 ">
              <NavBar />
              {children}
            </div>
          </SkeletonProvider>
        </Providers>
      </body>
    </html>
  );
}
