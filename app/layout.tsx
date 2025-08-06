import type { Metadata } from 'next';
import './globals.css';
import { Gowun_Dodum } from 'next/font/google';
import Header from '@/components/header/Header';

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
