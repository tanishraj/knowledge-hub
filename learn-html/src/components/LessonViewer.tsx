import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';
import Confetti from 'react-confetti';

import { Lesson } from '../types';
import { CodePlayground } from './CodePlayground';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onBack: () => void;
}

export const LessonViewer = ({
  lesson,
  onComplete,
  onBack,
}: LessonViewerProps) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentModule = lesson.modules[currentModuleIndex];
  const isLastModule = currentModuleIndex === lesson.modules.length - 1;
  const progress = ((currentModuleIndex + 1) / lesson.modules.length) * 100;

  const handleNext = () => {
    if (!isLastModule) {
      setCurrentModuleIndex(prev => prev + 1);
    } else {
      setShowConfetti(true);
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
    }
  };

  const handleModuleComplete = () => {
    setCompletedModules(prev => new Set(prev).add(currentModule.id));
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
      {showConfetti && <Confetti />}

      <div className='w-full px-8 py-8'>
        <div className='bg-white rounded-xl shadow-lg p-6 mb-6'>
          <div className='flex justify-between items-center mb-4'>
            <button
              onClick={onBack}
              className='flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors'
            >
              <FaHome /> Back to Lessons
            </button>

            <h1 className='text-2xl font-bold flex items-center gap-3'>
              <span className='text-3xl'>{lesson.icon}</span>
              {lesson.title}
            </h1>

            <div className='text-sm text-gray-600'>
              Module {currentModuleIndex + 1} of {lesson.modules.length}
            </div>
          </div>

          <div className='w-full bg-gray-200 rounded-full h-2'>
            <motion.div
              className='bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full'
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentModule.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='bg-white rounded-xl shadow-lg p-8'
          >
            <h2 className='text-3xl font-bold mb-6 text-gray-800'>
              {currentModule.title}
            </h2>

            {currentModule.type === 'explanation' && (
              <div className='prose prose-lg max-w-none'>
                <div className='bg-blue-50 p-6 rounded-xl'>
                  <p className='text-lg whitespace-pre-line text-gray-700'>
                    {currentModule.content}
                  </p>
                </div>
              </div>
            )}

            {currentModule.type === 'demo' && (
              <div>
                <p className='text-lg mb-6 text-gray-700'>
                  {currentModule.content}
                </p>
                {currentModule.code && (
                  <CodePlayground
                    initialCode={currentModule.code}
                    onSuccess={handleModuleComplete}
                  />
                )}
              </div>
            )}

            {currentModule.type === 'practice' && (
              <div>
                <p className='text-lg mb-6 text-gray-700'>
                  {currentModule.content}
                </p>
                {currentModule.code && (
                  <CodePlayground
                    initialCode={currentModule.code}
                    solution={currentModule.solution}
                    hints={currentModule.hints}
                    onSuccess={handleModuleComplete}
                  />
                )}
              </div>
            )}

            {currentModule.type === 'challenge' && (
              <div>
                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6'>
                  <p className='text-lg font-semibold text-yellow-800'>
                    🏆 Challenge Time!
                  </p>
                  <p className='text-gray-700'>{currentModule.content}</p>
                </div>
                {currentModule.code && (
                  <CodePlayground
                    initialCode={currentModule.code}
                    solution={currentModule.solution}
                    hints={currentModule.hints}
                    onSuccess={handleModuleComplete}
                  />
                )}
              </div>
            )}

            <div className='flex justify-between mt-8'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={currentModuleIndex === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentModuleIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <FaArrowLeft /> Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all'
              >
                {isLastModule ? 'Complete Lesson 🎉' : 'Next'} <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
