import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaEye, FaPlay } from 'react-icons/fa';

interface TagCardProps {
  tag: {
    name: string;
    displayName: string;
    description: string;
    preview: React.ReactNode;
    code: string;
    category: string;
    difficulty: 'basic' | 'intermediate' | 'advanced';
  };
  onTryLive?: (tagName: string) => void;
}

export const TagCard = ({ tag, onTryLive }: TagCardProps) => {
  const [showCode, setShowCode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyGradient = () => {
    switch (tag.difficulty) {
      case 'basic':
        return {
          badge: 'from-emerald-400 via-green-500 to-teal-600',
          glow: 'shadow-emerald-500/50',
          border: 'from-emerald-400/20 to-teal-600/20',
        };
      case 'intermediate':
        return {
          badge: 'from-amber-400 via-orange-500 to-yellow-600',
          glow: 'shadow-orange-500/50',
          border: 'from-amber-400/20 to-yellow-600/20',
        };
      case 'advanced':
        return {
          badge: 'from-violet-400 via-purple-500 to-pink-600',
          glow: 'shadow-purple-500/50',
          border: 'from-violet-400/20 to-pink-600/20',
        };
    }
  };

  const colors = getDifficultyGradient();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='relative group perspective-1000'
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-3xl blur-xl ${colors.glow} shadow-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut',
        }}
      />

      {/* Main card */}
      <motion.div
        className='relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 w-full'
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 h-1 bg-cyan-400 rounded-full'
                initial={{
                  x: Math.random() * 300,
                  y: 300,
                  opacity: 0,
                }}
                animate={{
                  y: -50,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        )}

        <div className='relative p-6 z-10'>
          {/* Header section */}
          <div className='flex justify-between items-start mb-4'>
            <div className='flex-1'>
              <motion.div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colors.badge} text-white mb-2 shadow-lg`}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: isHovered
                    ? '0 0 30px rgba(0,255,255,0.5)'
                    : '0 10px 25px rgba(0,0,0,0.3)',
                }}
              >
                <span className='animate-pulse mr-2'>●</span>
                {tag.difficulty.toUpperCase()}
              </motion.div>

              <motion.h3
                className='text-2xl font-bold mb-2'
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600'>
                  &lt;
                </span>
                <span className='text-white'>{tag.name}</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500'>
                  /&gt;
                </span>
              </motion.h3>

              <p className='text-gray-400 text-sm'>{tag.description}</p>
            </div>

            {/* Action buttons */}
            <div className='flex gap-2'>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCode(!showCode)}
                className='p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all backdrop-blur-sm'
              >
                {showCode ? <FaEye size={16} /> : <FaCode size={16} />}
              </motion.button>
            </div>
          </div>

          {/* Preview/Code section with 3D effect */}
          <motion.div
            className='relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-gray-700/50 shadow-2xl'
            animate={{
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Glass effect overlay */}
            <div className='absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 pointer-events-none' />

            <AnimatePresence mode='wait'>
              {!showCode ? (
                <motion.div
                  key='preview'
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 p-4 flex items-center justify-center'
                >
                  <div className='w-full'>{tag.preview}</div>
                </motion.div>
              ) : (
                <motion.div
                  key='code'
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 p-4 overflow-auto custom-scrollbar'
                >
                  <pre className='text-xs font-mono'>
                    <code className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400'>
                      {tag.code}
                    </code>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Status badge - at bottom right inside container */}
            <motion.div
              className='absolute bottom-3 right-3 z-10'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold border border-gray-600/50'>
                {showCode ? (
                  <>
                    <span className='text-green-400 animate-pulse'>●</span>
                    <span className='text-green-400'>CODE</span>
                  </>
                ) : (
                  <>
                    <span className='text-blue-400 animate-pulse'>●</span>
                    <span className='text-blue-400'>PREVIEW</span>
                  </>
                )}
              </span>
            </motion.div>
          </motion.div>

          {/* Footer section */}
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <span className='px-3 py-1 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-xs text-gray-400 font-semibold uppercase tracking-wider border border-gray-600/30'>
                {tag.category}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTryLive?.(tag.name)}
              className='group flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/30 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all backdrop-blur-sm'
            >
              <FaPlay size={10} />
              <span>Learn More</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <motion.div
          className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};
