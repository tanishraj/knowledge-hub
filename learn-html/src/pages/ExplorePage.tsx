import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TagCard } from '../components/TagCard';
import { htmlTags } from '../data/htmlTags';

import { Breadcrumb } from '@/components/Breadcrumb';
import { usePageTitle } from '@/hooks/usePageTitle';

export const ExplorePage = () => {
  usePageTitle('Explore HTML Tags');
  const [filter, setFilter] = useState<
    'all' | 'basic' | 'intermediate' | 'advanced'
  >('all');
  const [category, setCategory] = useState<string>('all');
  const navigate = useNavigate();

  const filteredTags = htmlTags.filter(tag => {
    const difficultyMatch = filter === 'all' || tag.difficulty === filter;
    const categoryMatch = category === 'all' || tag.category === category;

    return difficultyMatch && categoryMatch;
  });

  const categories = [
    'all',
    ...Array.from(new Set(htmlTags.map(tag => tag.category))),
  ];

  const handleTryLive = (tagName: string) => {
    void navigate(`/learn/${tagName}`);
  };

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full max-w-[1400px] mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Explore HTML Tags
          </h1>
          <Breadcrumb />
        </div>
      </header>

      <div className='w-full max-w-[1400px] mx-auto px-12 py-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-5xl font-black mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
              Master Every HTML Tag
            </span>
          </h2>
          <p className='text-xl text-gray-400'>
            Click on any card to reveal the code behind the magic ✨
          </p>
        </motion.div>

        {/* Modern Filter Section */}
        <div className='mb-10'>
          <div className='bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50'>
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Difficulty Filter */}
              <div>
                <label className='block text-sm font-semibold text-gray-400 mb-3'>
                  DIFFICULTY LEVEL
                </label>
                <div className='relative'>
                  <select
                    value={filter}
                    onChange={e =>
                      setFilter(
                        e.target.value as SetStateAction<
                          'all' | 'basic' | 'intermediate' | 'advanced'
                        >,
                      )
                    }
                    className='w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer'
                  >
                    <option value='all'>🌟 All Levels</option>
                    <option value='basic'>🟢 Basic</option>
                    <option value='intermediate'>🟡 Intermediate</option>
                    <option value='advanced'>🔴 Advanced</option>
                  </select>
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className='block text-sm font-semibold text-gray-400 mb-3'>
                  CATEGORY
                </label>
                <div className='relative'>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className='w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors appearance-none cursor-pointer'
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? '📚 ' : ''}
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className='mt-4 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-gray-500'>Showing:</span>
                <span className='px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-semibold'>
                  {filteredTags.length} tags
                </span>
              </div>
              {(filter !== 'all' || category !== 'all') && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setFilter('all');
                    setCategory('all');
                  }}
                  className='text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                  Clear filters
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Tag Cards Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
        >
          {filteredTags.map((tag, index) => (
            <motion.div
              key={tag.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TagCard tag={tag} onTryLive={handleTryLive} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
