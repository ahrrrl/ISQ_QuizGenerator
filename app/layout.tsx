import type { Metadata } from 'next';
import './globals.css';
import { Gowun_Dodum } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/home/footer/Footer';

const GowunFont = Gowun_Dodum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
  variable: '--font-gowun',
});

export const metadata: Metadata = {
  title: '정보처리기사 실기 이론 랜덤 문제',
  description:
    '정보처리기사 실기 이론 문제를 카테고리 별로 랜덤하게 풀 수 있습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={GowunFont.variable}>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex min-h-0 max-w-5xl mx-auto w-full flex-col p-8 pt-20 sm:px-20 sm:pb-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
