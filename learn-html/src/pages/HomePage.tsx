import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaCode,
  FaBrain,
  FaGraduationCap,
  FaStar,
  FaArrowRight,
  FaClipboardCheck,
} from 'react-icons/fa';

import { usePageTitle } from '@/hooks/usePageTitle';

export const HomePage = () => {
  usePageTitle('Home');
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; tag: string }>
  >([]);

  useEffect(() => {
    const elements = [
      { id: 1, x: 10, y: 20, tag: '<div>' },
      { id: 2, x: 80, y: 15, tag: '<h1>' },
      { id: 3, x: 25, y: 70, tag: '<img>' },
      { id: 4, x: 70, y: 60, tag: '<button>' },
      { id: 5, x: 50, y: 30, tag: '<form>' },
      { id: 6, x: 15, y: 50, tag: '<p>' },
      { id: 7, x: 90, y: 40, tag: '<table>' },
      { id: 8, x: 40, y: 80, tag: '<a>' },
    ];
    setFloatingElements(elements);
  }, []);

  return (
    <div className='relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none'>
        {floatingElements.map(el => (
          <motion.div
            key={el.id}
            className='absolute text-cyan-500/20 font-mono text-2xl'
            style={{ left: `${el.x}%`, top: `${el.y}%` }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + el.id * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {el.tag}
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse' />
      </div>

      {/* Hero Section */}
      <section className='relative z-10 min-h-screen flex items-center justify-center'>
        <div className='w-full px-8 py-20'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='inline-block mb-6'
            >
              <div className='w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl'>
                <FaCode className='text-white text-4xl' />
              </div>
            </motion.div>

            <h1 className='text-6xl md:text-8xl font-black mb-6'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'>
                HTML
              </span>
              <span className='text-white'> Made </span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Simple
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto'>
              Learn HTML in the most{' '}
              <span className='text-cyan-400 font-bold'>futuristic</span> and
              <span className='text-purple-400 font-bold'>
                {' '}
                beginner-friendly
              </span>{' '}
              way possible. Even your grandma could build websites after this!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to='/explore'
                  className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all'
                  style={{ color: 'white' }}
                >
                  <FaRocket className='group-hover:rotate-45 transition-transform' />
                  Explore HTML Tags
                  <FaArrowRight className='group-hover:translate-x-2 transition-transform' />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to='/quiz'
                  className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all'
                  style={{ color: 'white' }}
                >
                  <FaClipboardCheck className='group-hover:scale-110 transition-transform' />
                  Test Knowledge
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto'
            >
              <div className='bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20'>
                <FaBrain className='text-3xl text-cyan-400 mb-3' />
                <h3 className='text-2xl font-bold text-white mb-1'>
                  Zero Jargon
                </h3>
                <p className='text-gray-400'>Plain English only</p>
              </div>

              <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20'>
                <FaGraduationCap className='text-3xl text-purple-400 mb-3' />
                <h3 className='text-2xl font-bold text-white mb-1'>
                  5-Min Lessons
                </h3>
                <p className='text-gray-400'>Bite-sized learning</p>
              </div>

              <div className='bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20'>
                <FaStar className='text-3xl text-green-400 mb-3' />
                <h3 className='text-2xl font-bold text-white mb-1'>
                  100% Interactive
                </h3>
                <p className='text-gray-400'>Learn by doing</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
