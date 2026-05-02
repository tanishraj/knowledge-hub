import { useParams } from 'react-router-dom';

import { QuizCategory } from '@/components/QuizCategory';

export function QuizCategoryWrapper() {
  const { category } = useParams<{ category: string }>();

  return <QuizCategory category={category || 'all'} />;
}
