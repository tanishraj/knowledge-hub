import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code,
  Zap,
  Brain,
  Target,
  Rocket,
  Trophy,
} from 'lucide-react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { usePageTitle } from '@/hooks/usePageTitle';

interface QuizCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  questionCount: number;
  color: string;
  path: string;
}

const categories: QuizCategory[] = [
  {
    id: 'all',
    name: 'All Questions',
    icon: <BookOpen className='w-6 h-6' />,
    description: 'Complete 100-question challenge',
    questionCount: 100,
    color: 'from-purple-500 to-pink-500',
    path: '/quiz/all',
  },
  {
    id: 'objective',
    name: 'Objective',
    icon: <Target className='w-6 h-6' />,
    description: 'Multiple choice questions',
    questionCount: 25,
    color: 'from-cyan-500 to-blue-500',
    path: '/quiz/objective',
  },
  {
    id: 'attributes',
    name: 'HTML Attributes',
    icon: <Code className='w-6 h-6' />,
    description: 'Test your attribute knowledge',
    questionCount: 25,
    color: 'from-green-500 to-emerald-500',
    path: '/quiz/attributes',
  },
  {
    id: 'complete-code',
    name: 'Complete Code',
    icon: <Brain className='w-6 h-6' />,
    description: 'Fill in the blanks',
    questionCount: 25,
    color: 'from-yellow-500 to-orange-500',
    path: '/quiz/complete-code',
  },
  {
    id: 'practical-easy',
    name: 'Easy Practical',
    icon: <Zap className='w-6 h-6' />,
    description: 'Simple hands-on tasks',
    questionCount: 10,
    color: 'from-green-400 to-cyan-400',
    path: '/quiz/practical-easy',
  },
  {
    id: 'practical-medium',
    name: 'Medium Practical',
    icon: <Rocket className='w-6 h-6' />,
    description: 'Intermediate challenges',
    questionCount: 10,
    color: 'from-orange-500 to-red-500',
    path: '/quiz/practical-medium',
  },
  {
    id: 'practical-hard',
    name: 'Hard Practical',
    icon: <Trophy className='w-6 h-6' />,
    description: 'Real-world scenarios',
    questionCount: 5,
    color: 'from-purple-600 to-indigo-600',
    path: '/quiz/practical-hard',
  },
];

export const QuizPage: React.FC = () => {
  usePageTitle('Quiz');

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full max-w-7xl mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-white mb-2'>HTML Quiz</h1>
          <Breadcrumb />
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4'>
            Test Your HTML Knowledge
          </h2>
          <p className='text-xl text-gray-400'>
            Choose a category to start your quiz journey
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to={category.path} className='block h-full'>
                <div className='h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all cursor-pointer'>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {category.name}
                  </h3>
                  <p className='text-sm text-gray-400 mb-4'>
                    {category.description}
                  </p>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-cyan-400 font-semibold'>
                      {category.questionCount} questions
                    </span>
                    <span className='text-gray-500'>
                      {category.id === 'practical-easy'
                        ? 'Easy'
                        : category.id === 'practical-medium'
                          ? 'Medium'
                          : category.id === 'practical-hard'
                            ? 'Hard'
                            : 'Mixed'}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
