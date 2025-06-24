import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  Info, 
  Clock, 
  Award,
  BarChart2,
  Home,
  RotateCcw,
  ArrowLeft,
  BookOpen,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quizExams } from '@/data/quizData';

export default function QuizPage() {
  const { exam, subject, topic } = useParams();
  const [location, navigate] = useLocation();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [visitedQuestions, setVisitedQuestions] = useState<number[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [roundScores, setRoundScores] = useState<number[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const currentExam = exam && quizExams[exam] ? quizExams[exam] : null;
  const currentSubject = currentExam?.subjects.find(s => s.id === subject);
  const currentTopic = currentSubject?.topics.find(t => t.id === topic);
  const allTopics = currentSubject?.topics || [];
  const currentQuestions = currentTopic?.questions || [];
  const currentQuestionData = currentQuestions[currentQuestion];
  const totalQuestions = currentQuestions.length;

  const isLastRound = currentRoundIndex === allTopics.length - 1;

  useEffect(() => {
    if (quizStarted && !showResults && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !timeUp) {
      setTimeUp(true);
      setShowResults(true);
    }
  }, [quizStarted, timeRemaining, showResults, timeUp]);

  useEffect(() => {
    if (!visitedQuestions.includes(currentQuestion)) {
      setVisitedQuestions(prev => [...prev, currentQuestion]);
    }
  }, [currentQuestion, visitedQuestions]);

  const handleAnswer = useCallback((index: number) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });
    
    setAnsweredQuestions(prev => [...prev, currentQuestion]);
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const correctCount = currentQuestions.reduce((acc, q, i) => (
        selectedAnswers[i] === q.correctAnswer ? acc + 1 : acc
      ), 0);
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      setScore(percentage);
      setRoundScores(prev => [...prev, percentage]);
      
      if (!isLastRound) {
        setCurrentRoundIndex(prev => prev + 1);
        navigate(`/quiz/${exam}/${subject}/${allTopics[currentRoundIndex + 1].id}`);
        setQuizStarted(false);
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setAnsweredQuestions([]);
      } else {
        setShowResults(true);
      }
    }
  }, [currentQuestion, totalQuestions, selectedAnswers, isLastRound, currentRoundIndex, exam, subject, allTopics, navigate, currentQuestions, answeredQuestions]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const correctCount = currentQuestions.reduce((acc, q, i) => (
        selectedAnswers[i] === q.correctAnswer ? acc + 1 : acc
      ), 0);
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      setScore(percentage);
      setRoundScores(prev => [...prev, percentage]);
      
      if (!isLastRound) {
        setCurrentRoundIndex(prev => prev + 1);
        navigate(`/quiz/${exam}/${subject}/${allTopics[currentRoundIndex + 1].id}`);
        setQuizStarted(false);
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setAnsweredQuestions([]);
      } else {
        setShowResults(true);
      }
    }
  }, [currentQuestion, totalQuestions, selectedAnswers, isLastRound, currentRoundIndex, exam, subject, allTopics, navigate, currentQuestions]);

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
    setTimeUp(false);
    setAnsweredQuestions([]);
    setRoundScores([]);
    setCurrentRoundIndex(0);
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!currentExam || !currentSubject || !currentTopic || currentQuestions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="h-10 w-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Not Found</h2>
          <p className="text-gray-600 mb-6">The requested quiz could not be found. Please select another one.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz/select">
              <Button className="w-full sm:w-auto">
                <BookOpen className="mr-2 h-4 w-4" />
                Back to Quiz Selection
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                    {currentTopic.name} (Round {currentRoundIndex + 1} of {allTopics.length})
                  </h1>
                  <p className="text-blue-100 text-sm sm:text-base">
                    {currentExam.name} • {currentSubject.name}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 sm:mt-0 bg-white/10 hover:bg-white/20 border-white/20 text-white"
                  onClick={() => navigate('/quiz/select')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Change Quiz
                </Button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Time Limit</h3>
                  <p className="text-sm text-gray-600">
                    {currentQuestionData?.timeLimit || 30} seconds per question
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Scoring</h3>
                  <p className="text-sm text-gray-600">
                    100 points per correct answer
                  </p>
                </div>

                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <BarChart2 className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Questions</h3>
                  <p className="text-sm text-gray-600">
                    {totalQuestions} questions in this round
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-600" />
                  About This Round
                </h3>
                <p className="text-gray-700 mb-4">
                  {currentTopic.description || 'Test your knowledge with a series of challenging questions.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentTopic.subtopics.slice(0, 5).map((subtopic, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {subtopic}
                    </span>
                  ))}
                  {currentTopic.subtopics.length > 5 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{currentTopic.subtopics.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              <Button 
                onClick={() => setQuizStarted(true)}
                size="lg"
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Round {currentRoundIndex + 1}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizStarted && !showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">{currentTopic?.name}</h1>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Question {currentQuestion + 1} of {totalQuestions}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-blue-700/30 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                  <span className="font-mono text-lg font-bold">
                    {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: totalQuestions }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      currentQuestion === index
                        ? 'bg-white text-blue-700 ring-2 ring-white'
                        : selectedAnswers[index] !== undefined
                        ? 'bg-blue-500 text-white'
                        : visitedQuestions.includes(index)
                        ? 'bg-blue-400/50 text-white'
                        : 'bg-blue-600/30 text-white hover:bg-blue-500/50'
                    }`}
                    title={`Question ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start mb-6">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  {currentQuestion + 1}
                </span>
                <h3 className="text-xl font-semibold">
                  {currentQuestionData.question}
                </h3>
              </div>

              {currentQuestionData.difficulty && (
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(currentQuestionData.difficulty)}`}>
                  {currentQuestionData.difficulty}
                </span>
              )}

              <div className="mt-6 grid gap-3">
                {currentQuestionData.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                      className={`w-full p-4 rounded-xl text-left flex items-center transition-all shadow-sm
                        border-2 ${isSelected 
                          ? 'bg-blue-50 border-blue-400 text-blue-800' 
                          : 'bg-white hover:border-blue-200 border-gray-200 hover:shadow-md'}
                      `}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 font-medium
                          ${isSelected 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-gray-50 text-gray-600'}
                        `}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-gray-800">{option}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="flex-1 sm:flex-none"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => setShowResults(true)}
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    Submit Quiz
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      if (currentQuestion < totalQuestions - 1) {
                        setCurrentQuestion(prev => prev + 1);
                      } else {
                        handleNextQuestion();
                      }
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {currentQuestion < totalQuestions - 1 ? 'Next' : 'Finish'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const correctAnswers = currentQuestions.reduce((acc, q, i) => (
      selectedAnswers[i] === q.correctAnswer ? acc + 1 : acc
    ), 0);
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    const totalScore = [...roundScores, percentage].reduce((a, b) => a + b, 0);
    const averagePercentage = roundScores.length > 0 
      ? Math.round((percentage + roundScores.reduce((a, b) => a + b, 0)) / (roundScores.length + 1))
      : percentage;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Quiz Complete!
              </h1>
              <p className="text-blue-100">
                {currentSubject?.name} • {totalQuestions} Questions
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * percentage) / 100}
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-1000 ease-in-out"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
                    <span className="text-sm text-gray-500">Your Score</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-blue-800 text-center text-lg mb-4">
                  Quiz Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Correct Answers:</span>
                    <span className="font-medium">{correctAnswers} / {totalQuestions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score:</span>
                    <span className="font-medium">{percentage}%</span>
                  </div>
                  {roundScores.length > 0 && (
                    <div className="pt-3 mt-3 border-t border-blue-100">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Score (All Rounds):</span>
                        <span className="font-medium">{averagePercentage}%</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={resetQuiz}
                  variant="outline"
                  className="flex-1 py-6"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Try Again
                </Button>
                <Link 
                  href="/" 
                  className="flex-1"
                >
                  <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700">
                    <Home className="h-5 w-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}