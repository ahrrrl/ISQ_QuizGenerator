import { fetchQuestionsByCategory } from '@/lib/api/fetchQuestions';
import Questions from './components/Questions/Questions';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const questions = await fetchQuestionsByCategory(category);

  return (
    <div className='h-screen w-full pt-20 pb-20 p-8 sm:p-20'>
      <Questions category={category} questions={questions} />
    </div>
  );
}
