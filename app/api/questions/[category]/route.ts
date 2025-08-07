import { QuestionItem } from '@/types';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  // 동적 라우터이기 때문에 params에 await를 사용
  // Next.js는 내부적으로 정적 최적화를 시도하는데,
  // params가 비동기적임을 알려주지 않는다면 정적 최적화 진행 중 에러 발생 가능
  const { category } = await params;

  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SPREAD_SHEET_ID;
  const range = `${category}!A2:D`;

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = res.data.values || [];
  const questions: QuestionItem[] = rows.map(
    ([category, question, answer, description]) => ({
      category,
      question,
      answer,
      description,
    })
  );

  return NextResponse.json(questions);
}
