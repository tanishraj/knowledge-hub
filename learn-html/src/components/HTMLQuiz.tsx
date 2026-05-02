import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Trophy,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  Code,
  Zap,
  Brain,
  Target,
  Rocket,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { quizQuestions, Question } from '@/data/quizQuestions';
import { Breadcrumb } from '@/components/Breadcrumb';

interface UserAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  timeSpent: number;
}

interface QuizCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  questionCount: number;
  color: string;
}

const categories: QuizCategory[] = [
  {
    id: 'all',
    name: 'All Questions',
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Complete 100-question challenge',
    questionCount: 100,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'objective',
    name: 'Objective',
    icon: <Target className='w-5 h-5' />,
    description: 'Multiple choice questions',
    questionCount: 25,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'attributes',
    name: 'HTML Attributes',
    icon: <Code className='w-5 h-5' />,
    description: 'Test your attribute knowledge',
    questionCount: 25,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'complete-code',
    name: 'Complete Code',
    icon: <Brain className='w-5 h-5' />,
    description: 'Fill in the blanks',
    questionCount: 25,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'practical-easy',
    name: 'Easy Practical',
    icon: <Zap className='w-5 h-5' />,
    description: 'Simple hands-on tasks',
    questionCount: 10,
    color: 'from-green-400 to-cyan-400',
  },
  {
    id: 'practical-medium',
    name: 'Medium Practical',
    icon: <Rocket className='w-5 h-5' />,
    description: 'Intermediate challenges',
    questionCount: 10,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'practical-hard',
    name: 'Hard Practical',
    icon: <Trophy className='w-5 h-5' />,
    description: 'Real-world scenarios',
    questionCount: 5,
    color: 'from-purple-600 to-indigo-600',
  },
];

export const HTMLQuiz: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>(
    {},
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>('');
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState<number>(
    Date.now(),
  );
  const [totalTime, setTotalTime] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      const questions =
        selectedCategory === 'all'
          ? quizQuestions
          : quizQuestions.filter(q => q.category === selectedCategory);
      setFilteredQuestions(questions);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setSelectedAnswer('');
      setShowResults(false);
      setStartTime(Date.now());
      setQuestionStartTime(Date.now());
      setShowExplanation(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      setQuestionStartTime(Date.now());
      setShowExplanation(false);
      const currentQuestion = filteredQuestions[currentQuestionIndex];
      const savedAnswer = userAnswers[currentQuestion.id];
      if (savedAnswer) {
        setSelectedAnswer(savedAnswer.answer);
      } else {
        setSelectedAnswer('');
      }
    }
  }, [currentQuestionIndex, filteredQuestions, userAnswers]);

  if (!selectedCategory) {
    return (
      <div className='relative'>
        {/* Header */}
        <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
          <div className='w-full max-w-7xl mx-auto px-6 py-4'>
            <h1 className='text-2xl font-bold text-white mb-2'>HTML Quiz</h1>
            <Breadcrumb />
          </div>
        </header>

        <div className='max-w-7xl mx-auto px-4 py-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-12'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6 pb-2 m-0'>
              HTML Knowledge Test
            </h1>
            <p className='text-xl text-gray-400'>
              Choose a category to begin your challenge
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category.id)}
                className='cursor-pointer group'
              >
                <div className='relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className='relative z-10'>
                    <div className='flex items-center justify-between mb-4'>
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color}`}
                      >
                        <div className='text-white opacity-90'>
                          {category.icon}
                        </div>
                      </div>
                      <span className='text-xl font-bold text-white/90 bg-gray-800/50 px-3 py-1 rounded-lg'>
                        {category.questionCount}
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold text-white mb-1'>
                      {category.name}
                    </h3>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-white'>Loading questions...</p>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;
  const answeredQuestions = Object.keys(userAnswers).filter(id =>
    filteredQuestions.some(q => q.id === id),
  ).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (currentQuestion.type === 'single-choice') {
      setSelectedAnswer(answer);
    } else if (currentQuestion.type === 'multiple-choice') {
      const currentAnswers = Array.isArray(selectedAnswer)
        ? selectedAnswer
        : [];
      if (currentAnswers.includes(answer)) {
        setSelectedAnswer(currentAnswers.filter(a => a !== answer));
      } else {
        setSelectedAnswer([...currentAnswers, answer]);
      }
    }
  };

  const handleTextAnswer = (value: string) => {
    setSelectedAnswer(value);
  };

  const checkAnswer = () => {
    const timeSpent = Date.now() - questionStartTime;
    let isCorrect = false;

    if (
      Array.isArray(currentQuestion.correctAnswer) &&
      Array.isArray(selectedAnswer)
    ) {
      isCorrect =
        currentQuestion.correctAnswer.length === selectedAnswer.length &&
        currentQuestion.correctAnswer.every(ans =>
          selectedAnswer.includes(ans),
        );
    } else if (
      typeof currentQuestion.correctAnswer === 'string' &&
      typeof selectedAnswer === 'string'
    ) {
      if (
        currentQuestion.type === 'code-completion' ||
        currentQuestion.type === 'practical'
      ) {
        isCorrect =
          selectedAnswer.trim().toLowerCase() ===
          currentQuestion.correctAnswer.trim().toLowerCase();
      } else {
        isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      }
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        answer: selectedAnswer,
        isCorrect,
        timeSpent,
      },
    }));

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTotalTime(Date.now() - startTime);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setFilteredQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedAnswer('');
    setShowResults(false);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
    setTotalTime(0);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    const correctAnswers = filteredQuestions.filter(
      q => userAnswers[q.id]?.isCorrect,
    ).length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    return { correctAnswers, percentage };
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  if (showResults) {
    const { correctAnswers, percentage } = calculateScore();

    return (
      <div className='relative'>
        {/* Header */}
        <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
          <div className='w-full max-w-7xl mx-auto px-6 py-4'>
            <h1 className='text-2xl font-bold text-white mb-2'>Quiz Results</h1>
            <Breadcrumb />
          </div>
        </header>

        <div className='max-w-4xl mx-auto px-4 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8'
          >
            <div className='text-center mb-8'>
              <Trophy className='w-16 h-16 mx-auto text-yellow-500 mb-4' />
              <h1 className='text-3xl font-bold text-white mb-2'>
                Quiz Completed!
              </h1>
              <p className='text-gray-400'>Here are your results</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20'>
                <p className='text-2xl font-bold text-cyan-400'>
                  {correctAnswers}/{totalQuestions}
                </p>
                <p className='text-gray-400'>Correct Answers</p>
              </div>
              <div className='bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/20'>
                <p className='text-2xl font-bold text-green-400'>
                  {percentage.toFixed(1)}%
                </p>
                <p className='text-gray-400'>Score</p>
              </div>
              <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20'>
                <p className='text-2xl font-bold text-purple-400'>
                  {formatTime(totalTime)}
                </p>
                <p className='text-gray-400'>Time Taken</p>
              </div>
            </div>

            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-white mb-4'>
                Review Your Answers
              </h2>
              <div className='max-h-96 overflow-y-auto space-y-2 bg-gray-950/50 rounded-xl p-4 border border-gray-800'>
                {filteredQuestions.map((question, index) => {
                  const answer = userAnswers[question.id];

                  return (
                    <div
                      key={question.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        answer?.isCorrect
                          ? 'bg-green-900/20 hover:bg-green-900/30 border border-green-500/20'
                          : answer
                            ? 'bg-red-900/20 hover:bg-red-900/30 border border-red-500/20'
                            : 'bg-gray-800/20 hover:bg-gray-800/30 border border-gray-700/20'
                      }`}
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        setShowResults(false);
                        setShowExplanation(true);
                      }}
                    >
                      <span className='flex items-center'>
                        {answer?.isCorrect ? (
                          <CheckCircle className='w-5 h-5 text-green-400 mr-2' />
                        ) : answer ? (
                          <XCircle className='w-5 h-5 text-red-400 mr-2' />
                        ) : (
                          <div className='w-5 h-5 border-2 border-gray-600 rounded-full mr-2' />
                        )}
                        <span className='text-sm text-gray-300'>
                          Q{index + 1}: {question.question.substring(0, 50)}...
                        </span>
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          question.difficulty === 'easy'
                            ? 'bg-green-900/30 text-green-400'
                            : question.difficulty === 'medium'
                              ? 'bg-yellow-900/30 text-yellow-400'
                              : 'bg-red-900/30 text-red-400'
                        }`}
                      >
                        {question.difficulty}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='flex justify-center'>
              <button
                onClick={resetQuiz}
                className='flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all'
              >
                <RotateCcw className='w-5 h-5 mr-2' />
                Try Another Category
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='w-full max-w-7xl mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-white mb-2'>
            HTML Quiz -{' '}
            {selectedCategory &&
              categories.find(c => c.id === selectedCategory)?.name}
          </h1>
          <Breadcrumb />
        </div>
      </header>

      <div className='max-w-4xl mx-auto px-4 py-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800'
        >
          <div className='p-6 border-b border-gray-800'>
            <div className='flex justify-between items-center mb-4'>
              <button
                onClick={resetQuiz}
                className='text-gray-400 hover:text-white transition-colors'
              >
                ← Back to Categories
              </button>
              <div className='flex items-center text-gray-400'>
                <Clock className='w-5 h-5 mr-2' />
                <span>
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
              </div>
            </div>

            <div className='w-full bg-gray-800 rounded-full h-2'>
              <div
                className='bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300'
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className='p-8'>
            <div className='mb-6'>
              <div className='flex items-center justify-between mb-4'>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentQuestion.difficulty === 'easy'
                      ? 'bg-green-900/30 text-green-400 border border-green-500/20'
                      : currentQuestion.difficulty === 'medium'
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/20'
                        : 'bg-red-900/30 text-red-400 border border-red-500/20'
                  }`}
                >
                  {currentQuestion.difficulty}
                </span>
                <span className='text-sm text-gray-400'>
                  {currentQuestion.category
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </span>
              </div>

              <h2 className='text-xl font-semibold mb-4 text-white'>
                {currentQuestion.question}
              </h2>

              {currentQuestion.code && (
                <pre className='bg-gray-950/50 border border-gray-800 p-4 rounded-xl mb-4 overflow-x-auto'>
                  <code className='text-cyan-400'>{currentQuestion.code}</code>
                </pre>
              )}
            </div>

            <div className='mb-6'>
              {(currentQuestion.type === 'single-choice' ||
                currentQuestion.type === 'multiple-choice') &&
              currentQuestion.options ? (
                <div className='space-y-3'>
                  {currentQuestion.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all border ${
                        Array.isArray(selectedAnswer)
                          ? selectedAnswer.includes(option)
                            ? 'bg-blue-900/30 border-blue-500/50 text-white'
                            : 'bg-gray-800/30 hover:bg-gray-800/50 border-gray-700 text-gray-300'
                          : selectedAnswer === option
                            ? 'bg-blue-900/30 border-blue-500/50 text-white'
                            : 'bg-gray-800/30 hover:bg-gray-800/50 border-gray-700 text-gray-300'
                      }`}
                    >
                      <input
                        type={
                          currentQuestion.type === 'single-choice'
                            ? 'radio'
                            : 'checkbox'
                        }
                        name='answer'
                        value={option}
                        checked={
                          Array.isArray(selectedAnswer)
                            ? selectedAnswer.includes(option)
                            : selectedAnswer === option
                        }
                        onChange={() => handleAnswerSelect(option)}
                        className='mr-3 accent-cyan-500'
                        disabled={!!userAnswers[currentQuestion.id]}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <textarea
                  className='w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-xl resize-vertical min-h-[200px] font-mono text-sm focus:outline-none focus:border-cyan-500'
                  placeholder='Type your answer here...'
                  value={selectedAnswer as string}
                  onChange={e => handleTextAnswer(e.target.value)}
                  disabled={!!userAnswers[currentQuestion.id]}
                />
              )}
            </div>

            {showExplanation && userAnswers[currentQuestion.id] && (
              <div
                className={`p-4 rounded-xl mb-6 ${
                  userAnswers[currentQuestion.id].isCorrect
                    ? 'bg-green-900/20 border border-green-500/30'
                    : 'bg-red-900/20 border border-red-500/30'
                }`}
              >
                <div className='flex items-center mb-2'>
                  {userAnswers[currentQuestion.id].isCorrect ? (
                    <>
                      <CheckCircle className='w-5 h-5 text-green-400 mr-2' />
                      <span className='font-semibold text-green-400'>
                        Correct!
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className='w-5 h-5 text-red-400 mr-2' />
                      <span className='font-semibold text-red-400'>
                        Incorrect
                      </span>
                    </>
                  )}
                </div>
                <p className='text-gray-300 mb-2'>
                  {currentQuestion.explanation}
                </p>
                {!userAnswers[currentQuestion.id].isCorrect && (
                  <div className='mt-2'>
                    <span className='font-semibold text-gray-400'>
                      Correct answer:{' '}
                    </span>
                    <code className='bg-gray-800/50 px-2 py-1 rounded text-cyan-400'>
                      {Array.isArray(currentQuestion.correctAnswer)
                        ? currentQuestion.correctAnswer.join(', ')
                        : currentQuestion.correctAnswer}
                    </code>
                  </div>
                )}
              </div>
            )}

            <div className='flex justify-between'>
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center px-4 py-2 rounded-xl transition-colors ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-800/30 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <ChevronLeft className='w-5 h-5 mr-1' />
                Previous
              </button>

              <div className='flex gap-3'>
                {!userAnswers[currentQuestion.id] && (
                  <button
                    onClick={checkAnswer}
                    disabled={
                      !selectedAnswer ||
                      (Array.isArray(selectedAnswer) &&
                        selectedAnswer.length === 0)
                    }
                    className={`px-6 py-2 rounded-xl transition-all ${
                      !selectedAnswer ||
                      (Array.isArray(selectedAnswer) &&
                        selectedAnswer.length === 0)
                        ? 'bg-gray-800/30 text-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    }`}
                  >
                    Check Answer
                  </button>
                )}

                {userAnswers[currentQuestion.id] && (
                  <button
                    onClick={handleNext}
                    className='flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all'
                  >
                    {currentQuestionIndex === totalQuestions - 1
                      ? 'Finish'
                      : 'Next'}
                    <ChevronRight className='w-5 h-5 ml-1' />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
