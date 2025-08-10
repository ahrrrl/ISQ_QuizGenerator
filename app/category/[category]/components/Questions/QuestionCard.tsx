'use client';

import { useState } from 'react';

interface Props {
  question: string;
  answer: string;
  description: string;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  answer,
  description,
  onNext,
}: Props) {
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
    <div className='h-full grid grid-rows-[132px_30px_1fr] border border-primary bg-background-secondary p-4 rounded-xl shadow-md select-none'>
      <div
        className='row-start-1 overflow-y-auto h-full min-h-[100px]'
        onClick={handleQuestionClick}
      >
        <p className='text-2xl whitespace-pre-wrap font-medium '>
          <span className='font-bold'>❓</span> {question}
        </p>
      </div>

      <hr className='my-4 row-start-2 h-full text-primary-active' />
      <div
        className='row-start-3 overflow-y-auto group'
        onClick={handleAnswerClick}
      >
        {showAnswer ? (
          <p className='text-lg whitespace-pre-wrap'>
            <span className='font-bold'>{answer}</span>
            <br />
            <br />
            <span className='font-bold'>해설</span>
            <br />
            <span>{description}</span>
          </p>
        ) : (
          <p className='group-hover:text-primary group-hover:underline'>
            답 보기
          </p>
        )}
      </div>
    </div>
  );
}
