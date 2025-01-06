import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants';
import ClientProviders from '@/components/shared/client-providers';
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
  pageProps: object;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={pageProps?.session}>
          <ClientProviders>{children}</ClientProviders>
        </SessionProvider>
      </body>
    </html>
  );
}
