import { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaCode,
  FaPlay,
  FaLightbulb,
  FaExclamationTriangle,
  FaTags,
  FaCheckCircle,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { tagDetails } from '../data/tagDetails';

import { Breadcrumb } from '@/components/Breadcrumb';

interface TagExplanationProps {
  tagName: string;
}

export const TagExplanation = ({ tagName }: TagExplanationProps) => {
  const navigate = useNavigate();
  const tagDetail = tagDetails[tagName] || tagDetails['h1'];

  // Force scroll to top when this component renders
  useLayoutEffect(() => {
    // Multiple methods to ensure scroll works
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    window.scrollTo(0, 0);

    // Also try scrolling the root element
    const root = document.getElementById('root');
    if (root) {
      root.scrollTop = 0;
    }

    // Force a reflow
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Reset scroll behavior
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }, [tagName]);

  const handleTryLive = (code: string) => {
    // Store the code in sessionStorage to pass to playground
    sessionStorage.setItem('playgroundCode', code);
    void navigate(`/playground/${tagName}`);
  };

  const handleRelatedTagClick = (tag: string) => {
    void navigate(`/learn/${tag}`);
  };

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <h1 className='text-2xl font-bold flex items-center mb-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
                  &lt;{tagName}&gt;
                </span>
                <span className='text-white ml-2'>HTML Tag</span>
              </h1>
              <Breadcrumb />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTryLive(tagDetail.examples[0]?.code || '')}
              className='flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity ml-4'
            >
              <FaPlay />
              Try Live Editor
            </motion.button>
          </div>
        </div>
      </header>

      <div className='w-full max-w-7xl mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content - Left Side (2 columns) */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Definition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-2'>
                <FaBook className='text-cyan-400' />
                What is &lt;{tagName}&gt;?
              </h2>
              <p className='text-gray-300 leading-relaxed text-lg'>
                {tagDetail.definition}
              </p>
            </motion.div>

            {/* Attributes - Moved here right after definition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-xl font-bold text-white mb-4'>
                HTML Attributes
              </h3>
              {tagDetail.attributes && tagDetail.attributes.length > 0 ? (
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-gray-700'>
                        <th className='text-left text-gray-400 font-semibold py-2'>
                          Attribute
                        </th>
                        <th className='text-left text-gray-400 font-semibold py-2'>
                          Description
                        </th>
                        <th className='text-left text-gray-400 font-semibold py-2'>
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tagDetail.attributes.map((attr, index) => (
                        <tr key={index} className='border-b border-gray-800'>
                          <td className='py-3'>
                            <code className='text-purple-400 font-mono font-semibold'>
                              {attr.name}
                            </code>
                            {attr.required && (
                              <span className='ml-2 px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded'>
                                Required
                              </span>
                            )}
                          </td>
                          <td className='py-3 text-gray-300 text-sm'>
                            {attr.description}
                          </td>
                          <td className='py-3'>
                            {attr.example && (
                              <code className='text-green-400 text-xs bg-black/30 px-2 py-1 rounded'>
                                {attr.example}
                              </code>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className='text-gray-400'>
                  This tag has no specific attributes.
                </p>
              )}
            </motion.div>

            {/* Syntax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-xl font-bold text-white mb-4'>Syntax</h3>
              <div className='bg-black/50 rounded-lg p-4'>
                <pre className='text-cyan-400 font-mono text-sm overflow-x-auto'>
                  {tagDetail.syntax}
                </pre>
              </div>
            </motion.div>

            {/* Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                <FaCode className='text-green-400' />
                Examples
              </h3>
              <div className='space-y-4'>
                {tagDetail.examples.map((example, index) => (
                  <div key={index} className='bg-gray-800/50 rounded-lg p-4'>
                    <div className='flex items-start justify-between mb-3'>
                      <div>
                        <h4 className='font-semibold text-white text-lg'>
                          {example.title}
                        </h4>
                        <p className='text-gray-400 text-sm mt-1'>
                          {example.description}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTryLive(example.code)}
                        className='flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors text-sm font-semibold'
                      >
                        <FaPlay size={12} />
                        Try Live
                      </motion.button>
                    </div>
                    <div className='bg-black/50 rounded p-3'>
                      <pre className='text-green-400 font-mono text-sm overflow-x-auto'>
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <div className='space-y-6'>
            {/* When to Use */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-lg font-bold text-white mb-3'>
                <FaCheckCircle className='inline mr-2 text-green-400' />
                When to Use
              </h3>
              <ul className='space-y-2'>
                {tagDetail.whenToUse.map((use, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-green-400 mt-1'>✓</span>
                    <span className='text-gray-300 text-sm'>{use}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Tags */}
            {tagDetail.relatedTags && tagDetail.relatedTags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
              >
                <h3 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
                  <FaTags className='text-purple-400' />
                  Related Tags
                </h3>
                <div className='space-y-2'>
                  {tagDetail.relatedTags.map((related, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleRelatedTagClick(related.tag)}
                      className='w-full bg-gray-800/50 rounded-lg p-3 text-left hover:bg-gray-800/70 transition-all group'
                    >
                      <code className='text-cyan-400 font-mono font-semibold group-hover:text-cyan-300'>
                        &lt;{related.tag}&gt;
                      </code>
                      <p className='text-gray-400 text-xs mt-1'>
                        {related.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pro Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
                <FaLightbulb className='text-yellow-400' />
                Pro Tips
              </h3>
              <ul className='space-y-2'>
                {tagDetail.tips.map((tip, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-yellow-400 mt-0.5'>•</span>
                    <span className='text-gray-300 text-sm'>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800'
            >
              <h3 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
                <FaExclamationTriangle className='text-red-400' />
                Common Mistakes
              </h3>
              <ul className='space-y-2'>
                {tagDetail.commonMistakes.map((mistake, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-red-400 mt-0.5'>✗</span>
                    <span className='text-gray-300 text-sm'>{mistake}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
