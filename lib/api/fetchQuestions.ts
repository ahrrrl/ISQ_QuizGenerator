import { API_ROUTES, SECONDS } from '@/constants';
import { QuestionItem } from '@/types';

export async function fetchQuestionsByCategory(
  category: string
): Promise<QuestionItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.QUESTIONS_BY_CATEGORY(
      category
    )}`,
    {
      next: {
        revalidate: SECONDS.ONE_DAY,
      },
    }
  );

  if (!res.ok) {
    throw new Error('질문 데이터를 가져오는 데 실패했습니다.');
  }

  return res.json();
}
