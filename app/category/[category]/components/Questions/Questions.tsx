'use client';

import { shuffleArray } from './shuffleArray';
import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';
import { QuestionItem } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Button from '@/components/button/Button';
import Lottie from 'lottie-react';
import thumbsUpAnimation from '@/public/animations/ThumbsUpAnimationData.json';

interface QuestionsProps {
  category: string;
  questions: QuestionItem[];
}

export default function Questions({ category, questions }: QuestionsProps) {
  const decodedCategory = decodeURIComponent(category);
  const [shuffledData, setShuffledData] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setShuffledData(shuffleArray(questions));
    }
  }, [questions]);

  const goNext = () => {
    if (currentIndex < shuffledData.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleRestart = () => {
    setShuffledData(shuffleArray(questions));
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const current = shuffledData[currentIndex];

  return (
    <>
      <article className='grid grid-rows-[40px_1fr_40px] max-w-xl mx-auto w-full h-[calc(100vh-200px)] gap-3'>
        {/* 헤더 영역 */}
        <header className='flex items-center justify-between'>
          <h1 className='text-2xl'>{decodedCategory} 문제</h1>
          <div className='text-sm text-gray-500 text-right'>
            {shuffledData.length > 0 &&
              `${currentIndex + 1} / ${shuffledData.length}`}
          </div>
        </header>

        {/* 문제 영역 */}
        <section className='row-start-2 min-h-0 w-full h-full'>
          {!current ? (
            <div className='text-center py-8'>문제가 없습니다.</div>
          ) : (
            <QuestionCard
              question={current.question}
              answer={current.answer}
              description={current.description}
              onNext={goNext}
            />
          )}
        </section>

        {/* 네비게이션 영역 */}
        <NavigationButtons
          currentIndex={currentIndex}
          total={shuffledData.length}
          onPrev={goPrev}
          onNext={goNext}
        />
      </article>

      {/* 모달 */}
      <Dialog open={isFinished} onOpenChange={setIsFinished}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>모든 문제를 완료했습니다</DialogTitle>
          </DialogHeader>
          <Lottie animationData={thumbsUpAnimation} loop={false} />
          <DialogFooter className='mt-4'>
            <Button
              variant='progress'
              onClick={() => (window.location.href = '/')}
            >
              홈으로
            </Button>
            <Button onClick={handleRestart}>다시 시작</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
