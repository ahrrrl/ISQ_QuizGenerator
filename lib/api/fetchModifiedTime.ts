import { API_ROUTES, SECONDS } from '@/constants';
import { ModifiedTime } from '@/types';

export async function fetchModifiedTime(): Promise<ModifiedTime> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.MODIFIED_TIME}`,
    { next: { revalidate: SECONDS.ONE_DAY } }
  );

  if (!res.ok) {
    throw new Error('최근 수정 날짜를 가져오는 데 실패했습니다.');
  }

  return res.json();
}
