import Image from 'next/image';

export default function RandomGuidePage() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-6'>랜덤문제 사용 방법</h1>
      <p className='mb-8 text-2xl'>
        이 페이지에서는 <strong>랜덤문제</strong> 기능을 사용하는 방법을
        설명합니다. 아래 이미지를 참고하여 문제 영역, 정답 영역, 그리고 버튼의
        역할을 확인하세요.
      </p>

      {/* 이미지 */}
      <div className='mb-10'>
        <Image
          src='/sectionGuide.png'
          alt='랜덤문제 사용 가이드'
          width={800}
          height={500}
          className='border rounded-lg'
        />
      </div>

      {/* 1. 문제 영역 */}
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>1. 문제 영역</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>문제를 표시하는 영역입니다.</li>
          <li>
            문제 영역을 클릭하면 <strong>정답을 확인하지 않고</strong> 바로 다음
            문제로 넘어갑니다.
          </li>
          <li>빠르게 문제만 훑고 싶을 때 유용합니다.</li>
        </ul>
      </section>

      {/* 2. 정답 영역 */}
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>2. 정답 영역</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            문제의 정답을 표시하는 영역입니다. (처음에는 정답이 보이지 않음)
          </li>
          <li>
            정답이 표시되지 않은 상태에서 클릭하면 <strong>정답이 표시</strong>
            됩니다.
          </li>
          <li>
            정답이 이미 표시된 상태에서 클릭하면{' '}
            <strong>다음 문제로 이동</strong>합니다.
          </li>
        </ul>
      </section>

      {/* 3. 버튼 */}
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>3. 버튼</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>문제를 앞뒤로 이동할 수 있습니다.</li>
          <li>
            정답이 표시된 상태로 이동하면 다음 문제도 정답이 표시된 채로,
            표시되지 않았다면 표시되지 않은 채로 이동합니다.
          </li>
        </ul>
      </section>

      {/* Tip */}
      <section className='bg-background-secondary p-4 rounded-lg mt-8'>
        <h3 className='font-semibold mb-2'>💡 Tip</h3>
        <p>
          빠른 학습을 위해 문제 영역 클릭 → 빠르게 넘어가기, 정답 영역 클릭 →
          정답 확인 후 넘어가기 패턴을 번갈아 사용해 보세요.
        </p>
      </section>
    </>
  );
}
