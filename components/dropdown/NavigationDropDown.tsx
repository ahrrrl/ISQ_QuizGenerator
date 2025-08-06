'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 타입 정의
type MenuItem = {
  title: string;
  link: string;
};

type NavigationDropdownProps = {
  title: string;
  items: readonly MenuItem[];
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  hoverMode?: boolean;
};

const NavigationDropdown = ({
  title,
  items,
  className = '',
  triggerClassName = '',
  menuClassName = '',
  itemClassName = '',
  hoverMode = false,
}: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (!hoverMode) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (!hoverMode) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [hoverMode]);

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleClick = () => {
    if (!hoverMode) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (hoverMode) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverMode) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms 지연으로 메뉴가 너무 빨리 사라지지 않도록
      setHoverTimeout(timeout);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 메뉴 트리거 */}
      <button
        type='button'
        onClick={handleClick}
        className={`
          inline-flex items-center px-4 py-2 font-medium 
        hover:bg-gray-100 rounded-md transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${triggerClassName}
        `}
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        {title}
        <Image
          src={'/chevronDown.svg'}
          alt='chevronDown icon'
          width={16}
          height={16}
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div
          className={`
            absolute left-0 z-50 mt-1 w-32 origin-top-left bg-white 
            border border-gray-200 rounded-md shadow-lg ring-1 ring-primary ring-opacity-5 
            focus:outline-none animate-in fade-in-0 zoom-in-95 duration-100
            ${menuClassName}
          `}
          role='menu'
          aria-orientation='vertical'
        >
          <div className='py-1' role='none'>
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`
                  block px-4 py-2 hover:bg-gray-100 
                  transition-colors duration-150
                  first:rounded-t-md last:rounded-b-md
                  ${itemClassName}
                `}
                role='menuitem'
                onClick={handleItemClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationDropdown;
