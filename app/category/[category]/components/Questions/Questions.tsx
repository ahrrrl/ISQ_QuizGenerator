'use client';

import { shuffleArray } from './shuffleArray';
import { useEffect, useMemo, useState } from 'react';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';
import { QuestionItem } from '@/types';

interface QuestionsProps {
  category: string;
  questions: QuestionItem[];
}

export default function Questions({ category, questions }: QuestionsProps) {
  const decodedCategory = decodeURIComponent(category);
  const [shuffledData, setShuffledData] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (questions.length > 0) {
      // 클라이언트에서만 실행
      const shuffled = [...questions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledData(shuffled);
    }
  }, [questions]);

  const goNext = () => {
    if (currentIndex < shuffledData.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const current = shuffledData[currentIndex];

  return (
    <article className='grid grid-rows-[40px_1fr_40px] max-w-xl mx-auto w-full h-full gap-3'>
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

      {/* 네비게이션은 항상 보여줌 */}
      <NavigationButtons
        currentIndex={currentIndex}
        total={shuffledData.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </article>
  );
}
