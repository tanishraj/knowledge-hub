import { motion } from 'framer-motion';
import { FaCheckCircle, FaCode } from 'react-icons/fa';

import { Breadcrumb } from '@/components/Breadcrumb';

interface LessonViewProps {
  lessonId: string;
  onBack: () => void;
}

export const LessonView = ({ lessonId, onBack }: LessonViewProps) => {
  // Mock lesson content based on ID
  const getLessonContent = () => {
    switch (lessonId) {
      case '1':
        return {
          title: 'HTML Basics',
          content: `
            <h2>Welcome to HTML!</h2>
            <p>HTML stands for HyperText Markup Language. It's the foundation of every website.</p>
            <h3>What you'll learn:</h3>
            <ul>
              <li>Basic HTML structure</li>
              <li>Tags and elements</li>
              <li>Creating your first webpage</li>
            </ul>
          `,
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`,
        };
      case '2':
        return {
          title: 'Text Elements',
          content: `
            <h2>Working with Text</h2>
            <p>Learn how to structure text content with headings, paragraphs, and more.</p>
            <h3>Common text elements:</h3>
            <ul>
              <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
              <li>&lt;p&gt; - Paragraphs</li>
              <li>&lt;strong&gt; - Bold text</li>
              <li>&lt;em&gt; - Italic text</li>
            </ul>
          `,
          code: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>`,
        };
      default:
        return {
          title: 'Lesson',
          content: '<p>Lesson content coming soon...</p>',
          code: '<!-- Code examples will appear here -->',
        };
    }
  };

  const lesson = getLessonContent();

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full max-w-7xl mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-white mb-2'>{lesson.title}</h1>
          <Breadcrumb />
        </div>
      </header>

      <div className='w-full max-w-7xl mx-auto px-6 py-10'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800'
          >
            <h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-2'>
              <FaCode className='text-cyan-400' />
              Lesson Content
            </h2>
            <div
              className='prose prose-invert max-w-none'
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800'
          >
            <h2 className='text-2xl font-bold text-white mb-4'>Code Example</h2>
            <div className='bg-black rounded-lg p-4 overflow-x-auto'>
              <pre className='text-green-400 font-mono text-sm'>
                <code>{lesson.code}</code>
              </pre>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='mt-4 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2'
              onClick={onBack}
            >
              <FaCheckCircle />
              Complete Lesson
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
