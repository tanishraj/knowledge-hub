import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

import { Breadcrumb } from '@/components/Breadcrumb';
import { usePageTitle } from '@/hooks/usePageTitle';

interface DashboardProps {
  onStartLesson?: (lessonId: string) => void;
}

export const Dashboard = ({ onStartLesson }: DashboardProps) => {
  usePageTitle('Dashboard');

  const lessons = [
    {
      id: '1',
      title: 'HTML Basics',
      description: 'Learn the fundamentals',
      icon: '📝',
      progress: 100,
    },
    {
      id: '2',
      title: 'Text Elements',
      description: 'Headings, paragraphs, and more',
      icon: '📄',
      progress: 75,
    },
    {
      id: '3',
      title: 'Links & Images',
      description: 'Connect and display content',
      icon: '🔗',
      progress: 50,
    },
    {
      id: '4',
      title: 'Lists & Tables',
      description: 'Organize your data',
      icon: '📊',
      progress: 25,
    },
    {
      id: '5',
      title: 'Forms',
      description: 'User input elements',
      icon: '📋',
      progress: 0,
    },
    {
      id: '6',
      title: 'Advanced HTML',
      description: 'Semantic HTML and more',
      icon: '🎯',
      progress: 0,
    },
  ];

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-white flex items-center gap-2 mb-2'>
                <FaGraduationCap className='text-cyan-400' />
                Learning Dashboard
              </h1>
              <Breadcrumb />
            </div>
            <Link
              to='/explore'
              className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity'
            >
              Explore Tags
            </Link>
          </div>
        </div>
      </header>

      <div className='w-full max-w-7xl mx-auto px-6 py-10'>
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-cyan-500/20'
        >
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-white mb-2'>
                Your Progress
              </h2>
              <p className='text-gray-400'>
                Keep up the great work! You're doing amazing.
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
                42%
              </div>
              <p className='text-sm text-gray-400 mt-1'>Complete</p>
            </div>
          </div>
          <div className='w-full bg-gray-800 rounded-full h-3 mt-4'>
            <div
              className='bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full'
              style={{ width: '42%' }}
            />
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => onStartLesson?.(lesson.id)}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='text-3xl'>{lesson.icon}</div>
                {lesson.progress > 0 && (
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg'>
                    {lesson.progress}%
                  </span>
                )}
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                {lesson.title}
              </h3>
              <p className='text-gray-400 text-sm mb-4'>{lesson.description}</p>
              <div className='w-full bg-gray-800 rounded-full h-2'>
                <div
                  className='bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all'
                  style={{ width: `${lesson.progress}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='mt-12 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800'
        >
          <h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            Recent Achievements
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-gray-800/50 rounded-lg p-4 flex items-center gap-3'>
              <div className='text-2xl'>🌟</div>
              <div>
                <h4 className='font-semibold text-white'>First Steps</h4>
                <p className='text-xs text-gray-400'>
                  Completed your first lesson
                </p>
              </div>
            </div>
            <div className='bg-gray-800/50 rounded-lg p-4 flex items-center gap-3'>
              <div className='text-2xl'>🔥</div>
              <div>
                <h4 className='font-semibold text-white'>On Fire!</h4>
                <p className='text-xs text-gray-400'>3 day learning streak</p>
              </div>
            </div>
            <div className='bg-gray-800/50 rounded-lg p-4 flex items-center gap-3'>
              <div className='text-2xl'>💎</div>
              <div>
                <h4 className='font-semibold text-white'>Code Master</h4>
                <p className='text-xs text-gray-400'>Wrote 100 lines of code</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
