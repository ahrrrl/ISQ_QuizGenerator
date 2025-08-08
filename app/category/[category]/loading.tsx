'use client';

import Lottie from 'lottie-react';
import LoadingAnimationData from '@/public/animations/LoadingAnimationData.json';

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Lottie animationData={LoadingAnimationData} />
    </div>
  );
}
