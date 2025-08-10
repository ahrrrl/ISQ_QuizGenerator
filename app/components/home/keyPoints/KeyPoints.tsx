export default function KeyPoints() {
  const points = [
    '빈출 주제 별로 문제 형성',
    '빠르게 문제 확인 가능',
    '랜덤 문제 출제로 다양한 실전 대비',
  ];

  return (
    <section className='flex flex-col items-center gap-2 text-center sm:text-lg mt-12'>
      {points.map((point, idx) => (
        <p key={idx} className='font-bold'>
          {point}
        </p>
      ))}
    </section>
  );
}
