import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { SessionProvider } from 'next-auth/react';

export default async function HomeLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <SessionProvider session={pageProps?.session}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
