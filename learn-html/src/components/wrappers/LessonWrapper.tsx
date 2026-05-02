import { useParams, useNavigate } from 'react-router-dom';

import { LessonView } from '@/components/LessonView';

export function LessonWrapper() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  return (
    <LessonView
      lessonId={lessonId || ''}
      onBack={() => navigate('/dashboard')}
    />
  );
}
