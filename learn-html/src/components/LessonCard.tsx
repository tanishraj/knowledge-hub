import { motion } from 'framer-motion';
import { FaClock, FaCheckCircle } from 'react-icons/fa';

import { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export const LessonCard = ({ lesson, onClick }: LessonCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className='bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all'
      onClick={onClick}
    >
      <div className='flex items-start justify-between mb-4'>
        <span className='text-4xl'>{lesson.icon}</span>
        {lesson.completed && (
          <FaCheckCircle className='text-green-500 text-xl' />
        )}
      </div>

      <h3 className='text-xl font-bold mb-2 text-gray-800'>{lesson.title}</h3>

      <p className='text-gray-600 mb-4'>{lesson.description}</p>

      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center text-gray-500'>
          <FaClock className='mr-1' />
          <span>{lesson.duration} min</span>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            lesson.difficulty === 'beginner'
              ? 'bg-green-100 text-green-700'
              : lesson.difficulty === 'intermediate'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
          }`}
        >
          {lesson.difficulty}
        </span>
      </div>
    </motion.div>
  );
};
