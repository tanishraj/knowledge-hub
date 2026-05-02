import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Trophy,
  CheckCircle,
  XCircle,
  RotateCcw,
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

interface QuizCategoryProps {
  category: string;
}

export const QuizCategory: React.FC<QuizCategoryProps> = ({ category }) => {
  const navigate = useNavigate();
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>(
    {},
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>('');
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [totalTime, setTotalTime] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<
    Record<string, string[]>
  >({});

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  useEffect(() => {
    let questions: Question[];
    if (category === 'all') {
      questions = [...quizQuestions];
    } else {
      questions = quizQuestions.filter(q => q.category === category);
    }

    // Shuffle options for each question that has options
    const optionsMap: Record<string, string[]> = {};
    questions.forEach(question => {
      if (question.options) {
        optionsMap[question.id] = shuffleArray(question.options);
      }
    });
    setShuffledOptions(optionsMap);

    setFilteredQuestions(questions);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
  }, [category]);

  useEffect(() => {
    setSelectedAnswer('');
    setShowExplanation(false);
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  if (filteredQuestions.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-white'>Loading questions...</p>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const isAnswered = userAnswers[currentQuestion.id] !== undefined;

  const handleSelectAnswer = (answer: string) => {
    if (currentQuestion.type === 'multiple-choice') {
      const currentAnswers = Array.isArray(selectedAnswer)
        ? selectedAnswer
        : [];
      if (currentAnswers.includes(answer)) {
        setSelectedAnswer(currentAnswers.filter(a => a !== answer));
      } else {
        setSelectedAnswer([...currentAnswers, answer]);
      }
    } else {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
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
    void navigate('/quiz');
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

  const getCategoryName = () => {
    const categoryNames: Record<string, string> = {
      all: 'All Questions',
      objective: 'Objective',
      attributes: 'HTML Attributes',
      'complete-code': 'Complete Code',
      'practical-easy': 'Easy Practical',
      'practical-medium': 'Medium Practical',
      'practical-hard': 'Hard Practical',
    };

    return categoryNames[category] || category;
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
                          <span className='w-5 h-5 mr-2' />
                        )}
                        <span className='text-white'>Question {index + 1}</span>
                      </span>
                      <span className='text-sm text-gray-400'>
                        {answer ? formatTime(answer.timeSpent) : 'Not answered'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='flex gap-4'>
              <button
                onClick={resetQuiz}
                className='flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center'
              >
                <RotateCcw className='w-5 h-5 mr-2' />
                Back to Quiz
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
            HTML Quiz - {getCategoryName()}
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
            <div className='flex justify-end items-center mb-4'>
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
                  {(
                    shuffledOptions[currentQuestion.id] ||
                    currentQuestion.options
                  ).map((option, index) => (
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
                        onChange={() => handleSelectAnswer(option)}
                        disabled={isAnswered}
                        className='mr-3'
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <textarea
                  value={
                    typeof selectedAnswer === 'string' ? selectedAnswer : ''
                  }
                  onChange={e => setSelectedAnswer(e.target.value)}
                  disabled={isAnswered}
                  placeholder='Type your answer here...'
                  className='w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors'
                  rows={6}
                />
              )}
            </div>

            {showExplanation && userAnswers[currentQuestion.id] && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
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
                <p className='text-gray-300'>{currentQuestion.explanation}</p>
              </motion.div>
            )}

            <div className='flex justify-between'>
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                } transition-colors`}
              >
                <ChevronLeft className='w-5 h-5 mr-1' />
                Previous
              </button>

              {!isAnswered ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={
                    !selectedAnswer ||
                    (Array.isArray(selectedAnswer) &&
                      selectedAnswer.length === 0)
                  }
                  className={`px-6 py-3 rounded-lg font-medium ${
                    !selectedAnswer ||
                    (Array.isArray(selectedAnswer) &&
                      selectedAnswer.length === 0)
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90'
                  } transition-opacity`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center'
                >
                  {currentQuestionIndex === totalQuestions - 1 ? (
                    <>
                      View Results
                      <Trophy className='w-5 h-5 ml-1' />
                    </>
                  ) : (
                    <>
                      Next
                      <ChevronRight className='w-5 h-5 ml-1' />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
