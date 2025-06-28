import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  Info, 
  Clock, 
  Award,
  Home,
  RotateCcw,
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quizExams } from '@/data/quizData';

export default function QuizPage() {
  const { exam } = useParams();
  const [_, navigate] = useLocation();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  const currentExam = exam && quizExams[exam] ? quizExams[exam] : null;
  const currentQuestions = currentExam?.questions || [];
  const currentQuestionData = currentQuestions[currentQuestion];
  const totalQuestions = currentQuestions.length;
  const currentSubject = currentQuestionData?.subject || '';

  // Initialize quiz state
  useEffect(() => {
    if (currentExam && !isInitialized) {
      setIsInitializing(true);
      setSelectedAnswers(new Array(currentQuestions.length).fill(-1));
      setTimeRemaining(currentExam.timeLimit);
      setIsInitialized(true);
      setIsInitializing(false);
    }
  }, [currentExam, isInitialized, currentQuestions.length]);

  // Timer effect
  useEffect(() => {
    if (quizStarted && !showResults && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !timeUp) {
      setTimeUp(true);
      handleSubmit();
    }
  }, [quizStarted, timeRemaining, showResults, timeUp]);

  const handleAnswer = useCallback((index: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });

    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    }
  }, [currentQuestion, totalQuestions]);

  const handleSubmit = useCallback(() => {
    const correctCount = currentQuestions.reduce((acc, q, i) => (
      selectedAnswers[i] === q.correctAnswer ? acc + 1 : acc
    ), 0);
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    setScore(percentage);
    setShowResults(true);
  }, [currentQuestions, selectedAnswers, totalQuestions]);

  const handleStartQuiz = () => {
    if (!isInitializing) {
      setQuizStarted(true);
      setCurrentQuestion(0);
      setShowResults(false);
      setTimeUp(false);
    }
  };

  const handleRestartQuiz = () => {
    setIsInitialized(false);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setShowResults(false);
    setTimeUp(false);
    if (currentExam) {
      setTimeRemaining(currentExam.timeLimit);
    }
  };

  if (!currentExam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Exam Not Found</h1>
          <p className="text-gray-600 mb-6">The requested exam could not be found.</p>
          <Link href="/quiz/select">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Exam Selection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8 text-amber-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentExam.name} Quiz</h1>
            <p className="text-gray-600">{currentExam.subjectInfo.name}</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Info className="mr-2 text-amber-600" size={18} />
              Quiz Instructions
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 text-amber-500 mr-2">1</div>
                <span>This quiz contains {totalQuestions} questions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 text-amber-500 mr-2">2</div>
                <span>Time limit: {Math.floor(currentExam.timeLimit / 60)} minutes</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 text-amber-500 mr-2">3</div>
                <span>You will automatically advance to the next question when selecting an answer</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 text-amber-500 mr-2">4</div>
                <span>Answers can be changed until final submission</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 text-amber-500 mr-2">5</div>
                <span>Results will be shown only after submission</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={handleStartQuiz}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 text-base"
              disabled={isInitializing}
            >
              {isInitializing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Preparing Quiz...
                </>
              ) : (
                <>
                  Start Quiz
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
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
    const timeTaken = currentExam.timeLimit - timeRemaining;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = (timeTaken % 60).toString().padStart(2, '0');

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Quiz Complete!
              </h1>
              <p className="text-amber-100 text-sm">
                {currentExam.subjectInfo.name} • {totalQuestions} Questions
              </p>
            </div>

            {/* Stats Section */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">{percentage}%</div>
                  <div className="text-xs font-medium text-green-700">Your Score</div>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                  <div className="text-2xl font-bold text-amber-600 mb-1">{correctAnswers}/{totalQuestions}</div>
                  <div className="text-xs font-medium text-amber-700">Correct Answers</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {minutes}:{seconds}
                  </div>
                  <div className="text-xs font-medium text-orange-700">Time Taken</div>
                </div>
              </div>

              {/* Question Review */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Question Review</h3>
                <div className="space-y-3">
                  {currentQuestions.map((question, index) => {
                    const isCorrect = selectedAnswers[index] === question.correctAnswer;
                    const isAnswered = selectedAnswers[index] !== -1;
                    
                    return (
                      <div key={index} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center mb-2">
                          <span className="font-medium mr-2 text-sm">Q{index + 1}:</span>
                          <span className="text-sm">{question.question}</span>
                          {isAnswered && (
                            isCorrect ? (
                              <CheckCircle className="ml-auto h-4 w-4 text-green-500" />
                            ) : (
                              <XCircle className="ml-auto h-4 w-4 text-red-500" />
                            )
                          )}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {question.options.map((option, optIndex) => {
                            let optionClass = "p-2 rounded border text-xs ";
                            if (isAnswered) {
                              if (optIndex === question.correctAnswer) {
                                optionClass += "bg-green-50 border-green-300 text-green-800";
                              } else if (optIndex === selectedAnswers[index]) {
                                optionClass += "bg-red-50 border-red-300 text-red-800";
                              } else {
                                optionClass += "bg-gray-50 border-gray-200 text-gray-600";
                              }
                            } else {
                              optionClass += "bg-white border-gray-200 text-gray-800";
                            }
                            
                            return (
                              <div key={optIndex} className={optionClass}>
                                {String.fromCharCode(65 + optIndex)}. {option}
                              </div>
                            );
                          })}
                        </div>
                        {isAnswered && !isCorrect && (
                          <div className="mt-1 text-xs text-gray-600">
                            <span className="font-medium">Explanation:</span> {question.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons - Optimized for Mobile */}
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleRestartQuiz}
                  className="w-full py-3 text-sm sm:text-base"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart Quiz
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/quiz/select" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full py-3 text-sm sm:text-base flex items-center justify-center"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>New Quiz</span>
                    </Button>
                  </Link>
                  
                  <Link href="/" className="w-full">
                    <Button 
                      className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-sm sm:text-base flex items-center justify-center"
                    >
                      <Home className="mr-2 h-4 w-4" />
                      <span>Home</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h1 className="text-lg font-bold">{currentExam.name}</h1>
                <p className="text-gray-600 text-xs">
                  Question {currentQuestion + 1} of {totalQuestions}
                </p>
              </div>
              <div className="flex items-center bg-amber-50 px-3 py-1 rounded-md">
                <Clock className="h-4 w-4 text-amber-600 mr-1" />
                <span className="font-medium text-amber-800 text-sm">
                  {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentQuestion) / totalQuestions) * 100}%` }}
              />
            </div>

            <div className="flex justify-center mt-1">
              <div className="flex space-x-1">
                {selectedAnswers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      answer !== -1 ? 'bg-amber-500' : 'bg-gray-300'
                    } ${currentQuestion === index ? 'ring-2 ring-amber-600' : ''}`}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-1">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                  {currentSubject}
                </span>
                <span className="text-xs text-gray-500">
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
              </div>
              <h2 className="text-lg font-medium text-gray-800 mb-3">
                {currentQuestionData?.question}
              </h2>
              
              {currentQuestionData?.image && (
                <div className="mb-3 rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src={currentQuestionData.image} 
                    alt="Question illustration" 
                    className="w-full h-auto max-h-48 object-contain"
                  />
                </div>
              )}

              <div className="space-y-2">
                {currentQuestionData?.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  
                  return (
                    <button
                      key={index}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                        isSelected
                          ? "bg-amber-50 border-amber-500 text-amber-800"
                          : "bg-white border-gray-200 hover:border-amber-300 text-gray-800"
                      }`}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-center">
                        <span className="font-medium mr-2 text-sm">{String.fromCharCode(65 + index)}.</span>
                        <span className="text-sm">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-2 border-t border-gray-200 gap-2">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="w-full sm:w-auto"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              
              <div className="flex items-center">
                <span className="text-xs text-gray-500">
                  {selectedAnswers.filter(a => a !== -1).length} of {totalQuestions} answered
                </span>
              </div>
              
              <div className="w-full sm:w-auto">
                {currentQuestion < totalQuestions - 1 ? (
                  <Button
                    onClick={() => setCurrentQuestion(prev => Math.min(totalQuestions - 1, prev + 1))}
                    className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700"
                  >
                    Skip
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-4 py-2 bg-green-600 hover:bg-green-700"
                    disabled={selectedAnswers[currentQuestion] === -1}
                  >
                    Submit Quiz
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}