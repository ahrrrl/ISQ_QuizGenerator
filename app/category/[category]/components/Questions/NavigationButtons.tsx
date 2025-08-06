import Button from '@/components/button/Button';

interface Props {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationButtons({
  currentIndex,
  total,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className='flex gap-4 row-start-3'>
      <Button onClick={onPrev} disabled={currentIndex === 0}>
        이전
      </Button>
      <Button onClick={onNext} disabled={currentIndex === total - 1}>
        다음
      </Button>
    </div>
  );
}
