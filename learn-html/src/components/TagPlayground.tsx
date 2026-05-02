import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import {
  FaCode,
  FaPlay,
  FaSync,
  FaCopy,
  FaUndo,
  FaBook,
  FaPalette,
  FaCheckCircle,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { tagDetails } from '../data/tagDetails';

import { Breadcrumb } from '@/components/Breadcrumb';

interface TagPlaygroundProps {
  tagName: string;
}

const themes = [
  { value: 'vs-dark', label: 'Dark', icon: '🌙' },
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'hc-black', label: 'High Contrast', icon: '⚡' },
];

export const TagPlayground = ({ tagName }: TagPlaygroundProps) => {
  const navigate = useNavigate();
  const tagDetail = tagDetails[tagName] || tagDetails['h1'];

  // Get initial code from sessionStorage or use default example
  const getInitialCode = () => {
    const storedCode = sessionStorage.getItem('playgroundCode');
    if (storedCode) {
      sessionStorage.removeItem('playgroundCode'); // Clear after use

      return storedCode;
    }

    return tagDetail.examples[0]?.code || '';
  };

  const [code, setCode] = useState(getInitialCode());
  const [preview, setPreview] = useState('');
  const [copied, setCopied] = useState(false);
  const [originalCode] = useState(getInitialCode());
  const [editorTheme, setEditorTheme] = useState('vs-dark');
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [autoRun, setAutoRun] = useState(true);

  const updatePreview = (htmlCode: string) => {
    const blob = new Blob(
      [
        `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              padding: 20px;
              color: #333;
              line-height: 1.6;
              background: white;
            }
            h1, h2, h3, h4, h5, h6 {
              margin-bottom: 16px;
              font-weight: 600;
            }
            h1 { font-size: 2.5em; }
            h2 { font-size: 2em; }
            h3 { font-size: 1.75em; }
            h4 { font-size: 1.5em; }
            h5 { font-size: 1.25em; }
            h6 { font-size: 1em; }
            p {
              margin-bottom: 16px;
            }
            button {
              padding: 10px 20px;
              margin: 5px;
              border-radius: 6px;
              border: 1px solid #ddd;
              background: #007bff;
              color: white;
              cursor: pointer;
              font-size: 14px;
              transition: all 0.3s;
            }
            button:hover {
              background: #0056b3;
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              display: block;
              margin: 16px 0;
            }
            a {
              color: #007bff;
              text-decoration: none;
              transition: color 0.3s;
            }
            a:hover {
              color: #0056b3;
              text-decoration: underline;
            }
            ul, ol {
              margin-left: 20px;
              margin-bottom: 16px;
            }
            li {
              margin-bottom: 8px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 16px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 12px;
              text-align: left;
            }
            th {
              background: #f5f5f5;
              font-weight: 600;
            }
            input, textarea, select {
              padding: 8px 12px;
              margin: 5px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 14px;
            }
            input:focus, textarea:focus, select:focus {
              outline: none;
              border-color: #007bff;
              box-shadow: 0 0 0 2px rgba(0,123,255,0.1);
            }
            form {
              margin: 16px 0;
            }
            div {
              margin: 8px 0;
            }
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
    `,
      ],
      { type: 'text/html' },
    );
    const url = URL.createObjectURL(blob);
    setPreview(url);
  };

  useEffect(() => {
    if (autoRun) {
      updatePreview(code);
    }
  }, [code, autoRun]);

  const copyCode = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetCode = () => {
    setCode(originalCode);
  };

  const goToExplanation = () => {
    void navigate(`/learn/${tagName}`);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full px-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <h1 className='text-xl font-bold flex items-center mb-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
                  &lt;{tagName}&gt;
                </span>
                <span className='text-white ml-2'>Playground</span>
              </h1>
              <Breadcrumb />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToExplanation}
              className='flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm font-semibold ml-4'
            >
              <FaBook />
              Learn More
            </motion.button>
          </div>
        </div>
      </header>

      {/* Editor and Preview Container */}
      <div className='flex flex-col h-[calc(100vh-93px)]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 flex-1'>
          {/* Code Editor */}
          <div className='border-r border-gray-800 flex flex-col'>
            <div className='min-h-16 bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700'>
              <span className='text-white font-semibold flex items-center gap-2'>
                <FaCode className='text-cyan-400' /> HTML Editor
              </span>
              <div className='flex items-center gap-2'>
                {/* Theme Selector */}
                <div className='relative'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowThemeMenu(!showThemeMenu)}
                    className='p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all border border-gray-700 hover:border-cyan-500/50'
                    title='Change Theme'
                  >
                    <FaPalette />
                  </motion.button>
                  {showThemeMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/30 py-2 z-20'
                    >
                      {themes.map(theme => (
                        <button
                          key={theme.value}
                          onClick={() => {
                            setEditorTheme(theme.value);
                            setShowThemeMenu(false);
                          }}
                          className='w-full px-4 py-2 text-left text-sm hover:bg-cyan-500/20 transition-colors flex items-center gap-2'
                        >
                          <span>{theme.icon}</span>
                          <span
                            className={
                              editorTheme === theme.value
                                ? 'text-cyan-400'
                                : 'text-gray-300'
                            }
                          >
                            {theme.label}
                          </span>
                          {editorTheme === theme.value && (
                            <FaCheckCircle
                              className='text-cyan-400 ml-auto'
                              size={12}
                            />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Auto-run Toggle */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAutoRun(!autoRun)}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-sm font-semibold ${
                    autoRun
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300 border border-gray-700'
                  }`}
                  title={
                    autoRun
                      ? 'Auto-run Enabled (Click to disable)'
                      : 'Auto-run Disabled (Click to enable)'
                  }
                >
                  {autoRun ? (
                    <>
                      <FaSync className='animate-spin-slow' size={12} />
                      <span>Auto</span>
                    </>
                  ) : (
                    <>
                      <FaPlay size={12} />
                      <span>Manual</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetCode}
                  className='p-2 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all border border-gray-700 hover:border-purple-500/50'
                  title='Reset Code'
                >
                  <FaUndo />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyCode}
                  className='p-2 rounded-lg bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all border border-gray-700 hover:border-blue-500/50'
                  title='Copy Code'
                >
                  {copied ? '✓' : <FaCopy />}
                </motion.button>

                {!autoRun && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updatePreview(code)}
                    className='px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm flex items-center gap-1.5 font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all'
                  >
                    <FaPlay size={12} /> Run Code
                  </motion.button>
                )}
              </div>
            </div>
            <div className='flex-1 relative'>
              <Editor
                height='100%'
                defaultLanguage='html'
                value={code}
                onChange={handleEditorChange}
                theme={editorTheme}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  automaticLayout: true,
                  wordWrap: 'on',
                  padding: { top: 16, bottom: 16 },
                  scrollBeyondLastLine: false,
                  renderWhitespace: 'selection',
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: {
                    strings: true,
                    comments: true,
                    other: true,
                  },
                  formatOnPaste: true,
                  formatOnType: true,
                  autoClosingBrackets: 'always',
                  autoClosingQuotes: 'always',
                }}
              />
            </div>
          </div>

          {/* Preview */}
          <div className='flex flex-col'>
            <div className='min-h-16 bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between'>
              <span className='text-white font-semibold'>Output</span>
              <div className='flex items-center gap-2'>
                {autoRun && (
                  <span className='text-xs text-cyan-400 flex items-center gap-1'>
                    <span className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse' />
                    Live Preview
                  </span>
                )}
                {!autoRun && (
                  <span className='text-xs text-gray-400'>Manual Mode</span>
                )}
              </div>
            </div>
            <div className='flex-1 bg-white'>
              <iframe
                src={preview}
                className='w-full h-full'
                title='Preview'
                sandbox='allow-scripts'
              />
            </div>
          </div>
        </div>

        {/* Examples Bar */}
        <div className='bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 px-4 py-3'>
          <div className='flex items-center gap-3 overflow-x-auto'>
            <span className='text-gray-400 text-sm font-semibold whitespace-nowrap'>
              Try Examples:
            </span>
            {tagDetail.examples.map((example, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCode(example.code)}
                className='px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors whitespace-nowrap'
              >
                {example.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
