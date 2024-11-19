import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { NotistackProvider } from '@/lib/notistack';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FullStack Blog',
  description: 'Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <NotistackProvider maxSnack={1} preventDuplicate>
          <div className="flex flex-col justify-between w-4/5 m-auto md:px-12 lg:min-h-[100vh]">
            <NavBar />
            {children}
            <Footer />
          </div>
        </NotistackProvider>
      </body>
    </html>
  );
}
