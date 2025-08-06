'use client';

import { CATEGORY_LIST } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';
import NavigationDropdown from '../dropdown/NavigationDropDown';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className='flex justify-between items-center px-16 py-3 border-b shadow-md fixed top-0 left-0 right-0 bg-white z-50'>
      {/* 로고 */}
      <Link href='/' className='text-xl font-bold'>
        정실이
      </Link>

      {/* 문제 버튼 */}
      <div className='relative'>
        <button
          onClick={toggleMobileMenu}
          className='text-base font-medium hover:underline sm:hidden block'
        >
          문제
        </button>

        {/* 데스크탑 드롭다운 */}
        <div className='sm:block hidden'>
          <NavigationDropdown title={'문제'} items={CATEGORY_LIST} />
        </div>
      </div>

      {/* 모바일 전체화면 오버레이 */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='absolute top-4 right-4 text-2xl font-bold'
          >
            ✕
          </button>
          {CATEGORY_LIST.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              onClick={toggleMobileMenu}
              className='text-xl font-semibold hover:underline'
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
