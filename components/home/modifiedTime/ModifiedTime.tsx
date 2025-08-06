import { fetchModifiedTime } from '@/lib/api/fetchModifiedTime';
import React from 'react';

export default async function ModifiedTime() {
  try {
    const data: { modifiedTime: string | null } = await fetchModifiedTime();
    const formattedTime = data.modifiedTime
      ? new Date(data.modifiedTime).toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : '날짜 정보 없음';

    return <p>문제 최종 수정일: {formattedTime}</p>;
  } catch (error) {
    return <p>에러 발생: {(error as Error).message || '알 수 없는 에러'}</p>;
  }
}
