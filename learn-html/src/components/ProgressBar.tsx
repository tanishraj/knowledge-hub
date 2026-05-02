import { motion } from 'framer-motion';
import { FaTrophy, FaFire, FaStar } from 'react-icons/fa';

import { UserProgress } from '../types';

interface ProgressBarProps {
  progress: UserProgress;
  totalLessons: number;
}

export const ProgressBar = ({ progress, totalLessons }: ProgressBarProps) => {
  const progressPercentage = (progress.lessonsCompleted / totalLessons) * 100;

  return (
    <div className='bg-white rounded-xl p-6 shadow-lg mb-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>
          Your Learning Journey
        </h2>
        <div className='flex gap-4'>
          <div className='flex items-center gap-2'>
            <FaFire className='text-orange-500' />
            <span className='font-semibold'>
              {progress.currentStreak} day streak
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <FaStar className='text-yellow-500' />
            <span className='font-semibold'>{progress.totalPoints} points</span>
          </div>
        </div>
      </div>

      <div className='relative'>
        <div className='h-6 bg-gray-200 rounded-full overflow-hidden'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='h-full bg-gradient-to-r from-blue-400 to-purple-500'
          />
        </div>
        <div className='mt-2 flex justify-between text-sm text-gray-600'>
          <span>{progress.lessonsCompleted} lessons completed</span>
          <span>{totalLessons - progress.lessonsCompleted} lessons to go</span>
        </div>
      </div>

      {progress.achievements.length > 0 && (
        <div className='mt-6'>
          <h3 className='text-lg font-semibold mb-3 flex items-center gap-2'>
            <FaTrophy className='text-yellow-500' />
            Recent Achievements
          </h3>
          <div className='flex gap-3'>
            {progress.achievements.slice(-3).map(achievement => (
              <motion.div
                key={achievement.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='bg-yellow-50 p-3 rounded-lg flex items-center gap-2'
              >
                <span className='text-2xl'>{achievement.icon}</span>
                <div>
                  <p className='font-semibold text-sm'>{achievement.title}</p>
                  <p className='text-xs text-gray-600'>
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
