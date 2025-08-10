import { fetchQuestionsByCategory } from '@/lib/api/fetchQuestions';
import Questions from './components/Questions/Questions';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const questions = await fetchQuestionsByCategory(category);

  return <Questions category={category} questions={questions} />;
}
