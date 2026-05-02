import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

interface CodePlaygroundProps {
  initialCode: string;
  solution?: string;
  hints?: string[];
  onSuccess?: () => void;
}

export const CodePlayground = ({
  initialCode,
  solution,
  hints = [],
  onSuccess,
}: CodePlaygroundProps) => {
  const [code, setCode] = useState(initialCode);
  const [preview, setPreview] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const updatePreview = (htmlCode: string) => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setPreview(url);
  };

  useEffect(() => {
    updatePreview(code);

    // Check solution
    if (solution && code.trim() === solution.trim()) {
      setIsCorrect(true);
      onSuccess?.();
    }
  }, [code, solution, onSuccess]);

  const handleHint = () => {
    setShowHint(true);
    if (currentHint < hints.length - 1) {
      setCurrentHint(prev => prev + 1);
    }
  };

  return (
    <div className='grid md:grid-cols-2 gap-6 h-[600px]'>
      <div className='flex flex-col'>
        <div className='bg-gray-800 text-white px-4 py-2 rounded-t-lg flex justify-between items-center'>
          <span className='font-semibold'>Code Editor</span>
          <div className='flex gap-2'>
            {hints.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHint}
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center gap-2 text-sm'
              >
                <FaLightbulb /> Hint
              </motion.button>
            )}
            {isCorrect && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm'
              >
                <FaCheckCircle /> Correct!
              </motion.div>
            )}
          </div>
        </div>

        <div className='relative flex-1'>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className='w-full h-full p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
            spellCheck={false}
          />

          {showHint && hints[currentHint] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='absolute bottom-4 left-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded'
            >
              <p className='text-sm text-yellow-800'>
                <strong>💡 Hint:</strong> {hints[currentHint]}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='bg-blue-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center'>
          <span className='font-semibold'>Live Preview</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updatePreview(code)}
            className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-2 text-sm'
          >
            <FaPlay /> Refresh
          </motion.button>
        </div>

        <div className='flex-1 bg-white rounded-b-lg overflow-hidden'>
          <iframe
            src={preview}
            className='w-full h-full border-0'
            title='Preview'
            sandbox='allow-scripts'
          />
        </div>
      </div>
    </div>
  );
};
