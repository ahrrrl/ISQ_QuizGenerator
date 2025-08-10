'use client';

import NavigationDropdown from '@/components/dropdown/NavigationDropDown';
import { CATEGORY_LIST, ROUTES } from '@/constants';
import { CircleQuestionMarkIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className='flex justify-between items-center px-8 sm:px-16 py-3 border-b shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
        {/* 오른쪽 로고 */}
        <Link
          href='/'
          className='flex items-center gap-2'
          aria-label='홈으로 이동'
        >
          <Image src='/logo.png' alt='정실이 로고' width={44} height={44} />
          <span className='text-xl font-bold'>정실이</span>
        </Link>

        {/* 왼쪽 */}
        <div className='flex justify-center items-center gap-6'>
          <Link href={ROUTES.GUIDE}>
            <CircleQuestionMarkIcon className='my-icon' />
          </Link>
          <NavigationDropdown
            className='hidden sm:block'
            title={'문제'}
            items={CATEGORY_LIST}
          />
          <MenuIcon
            onClick={toggleMobileMenu}
            className='block sm:hidden my-icon cursor-pointer'
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
          />
        </div>
      </header>

      {/* 모바일 전체화면 오버레이 */}
      {isMobileMenuOpen && (
        <div
          id='mobile-menu'
          className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white md:hidden'
        >
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
              <span className='text-black'>{title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
