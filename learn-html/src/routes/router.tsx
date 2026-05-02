import { createBrowserRouter, Navigate } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { ExplorePage } from '@/pages/ExplorePage';
import { QuizPage } from '@/pages/QuizPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { RootLayout } from '@/layouts/RootLayout';
import { DashboardWrapper } from '@/components/wrappers/DashboardWrapper';
import { LessonWrapper } from '@/components/wrappers/LessonWrapper';
import { ExplanationWrapper } from '@/components/wrappers/ExplanationWrapper';
import { PlaygroundWrapper } from '@/components/wrappers/PlaygroundWrapper';
import { QuizCategoryWrapper } from '@/components/wrappers/QuizCategoryWrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'explore',
        element: <ExplorePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardWrapper />,
      },
      {
        path: 'lesson/:lessonId',
        element: <LessonWrapper />,
      },
      {
        path: 'learn/:tagName',
        element: <ExplanationWrapper />,
      },
      {
        path: 'playground/:tagName',
        element: <PlaygroundWrapper />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'quiz/:category',
        element: <QuizCategoryWrapper />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
]);
