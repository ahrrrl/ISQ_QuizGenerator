'use client';

import { useState } from 'react';

interface Props {
  question: string;
  answer: string;
  onNext: () => void;
}

export default function QuestionCard({ question, answer, onNext }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = () => {
    if (showAnswer) {
      setShowAnswer(false);
      onNext(); // 답이 보이면 다음 문제로
    } else {
      setShowAnswer(true); // 답을 보여줌
    }
  };

  const handleQuestionClick = () => {
    setShowAnswer(false);
    onNext();
  };

  return (
    <div className='h-full grid grid-rows-[1fr_30px_2fr] border border-primary p-6 rounded-xl cursor-pointer shadow-md bg-white '>
      <div
        className='row-start-1 overflow-y-auto h-full'
        onClick={handleQuestionClick}
      >
        <p className='text-2xl whitespace-pre-wrap font-medium '>
          Q. {question}
        </p>
      </div>

      <hr className='my-4 row-start-2 h-full text-primaryActive' />
      <div
        className='row-start-3 overflow-y-auto group'
        onClick={handleAnswerClick}
      >
        {showAnswer ? (
          <p className='text-lg whitespace-pre-wrap text-gray-800 select-none'>
            A. {answer}
          </p>
        ) : (
          <p className='group-hover:text-blue-600 group-hover:underline'>
            답 보기
          </p>
        )}
      </div>
    </div>
  );
}
