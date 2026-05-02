import { useNavigate } from 'react-router-dom';

import { Dashboard } from '@/components/Dashboard';

export function DashboardWrapper() {
  const navigate = useNavigate();
  const handleStartLesson = (lessonId: string) => {
    void navigate(`/lesson/${lessonId}`);
  };

  return <Dashboard onStartLesson={handleStartLesson} />;
}
