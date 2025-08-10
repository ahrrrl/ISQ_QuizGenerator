import Image from 'next/image';
import { Suspense } from 'react';
import ModifiedTime from '../modifiedTime/ModifiedTime';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Footer() {
  return (
    <footer className='flex gap-4 sm:gap-12 pb-4 sm:pb-10 flex-wrap justify-center items-center'>
      <div className='flex gap-2 sm:gap-8'>
        <a
          href='https://github.com/ahrrrl/ISQ_QuizGenerator'
          className='flex gap-2 hover:underline hover:underline-offset-4'
        >
          <GithubIcon width={24} height={24} />
          깃허브
        </a>
        <a
          href='https://www.q-net.or.kr/'
          className='flex gap-2 hover:underline hover:underline-offset-4'
        >
          <Image
            aria-hidden
            src='/qnet.svg'
            alt='qnet icon'
            width={24}
            height={24}
          />
          큐넷
        </a>
      </div>

      <div>
        <Suspense fallback={<p>수정 시간 로딩중...</p>}>
          <ModifiedTime />
        </Suspense>
      </div>
    </footer>
  );
}
