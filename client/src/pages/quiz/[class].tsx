import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quizExams } from '@/data/quizData';

export default function QuizPage() {
  const { exam, subject, topic } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [score, setScore] = useState(0);

  const currentExam = exam && quizExams[exam] ? quizExams[exam] : null;
  const currentSubject = currentExam?.subjects.find(s => s.id === subject);
  const currentTopic = currentSubject?.topics.find(t => t.id === topic);
  const currentQuestions = currentTopic?.questions || [];

  useEffect(() => {
    if (!showResults && !showFeedback && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining, showFeedback, showResults]);

  const handleAnswer = (index: number) => {
    const isCorrect = index === currentQuestions[currentQuestion].correctAnswer;
    setShowFeedback(index);
    
    if (isCorrect) {
      const timeBonus = Math.floor(timeRemaining / 5);
      setScore(prev => prev + 100 + timeBonus);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswers(prev => [...prev, showFeedback!]);
    setShowFeedback(null);
    setShowExplanation(false);
    setTimeRemaining(30);
    
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return currentQuestions.reduce((acc, q, i) => (
      selectedAnswers[i] === q.correctAnswer ? acc + 1 : acc
    ), 0);
  };

  if (!currentExam || !currentSubject || !currentTopic || currentQuestions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-xl text-red-600 font-semibold mb-4">
          Quiz not found
        </p>
        <Link href="/quiz/select">
          <Button variant="outline">Back to Quiz Selection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {currentExam.name} Quiz
              </h1>
              <p className="text-sm text-gray-600">
                {currentSubject.name} - {currentTopic.name}
              </p>
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
              Score: {score}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Question {currentQuestion + 1} of {currentQuestions.length}</span>
              <span>{timeRemaining}s remaining</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>
          </div>

          {/* Timer Visualization */}
          <div className="mb-6">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${(timeRemaining / 30) * 100}%` }}
                className={`h-full ${timeRemaining > 15 ? 'bg-green-500' : timeRemaining > 5 ? 'bg-yellow-500' : 'bg-red-500'}`}
              />
            </div>
          </div>

          {!showResults ? (
            <div>
              {/* Question */}
              <div className="mb-6">
                <div className="flex items-start mb-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">
                    {currentQuestion + 1}
                  </span>
                  <p className="text-lg font-semibold flex-1">
                    {currentQuestions[currentQuestion].question}
                  </p>
                </div>
                
                {currentQuestions[currentQuestion].difficulty && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    currentQuestions[currentQuestion].difficulty === 'easy' 
                      ? 'bg-green-100 text-green-800' 
                      : currentQuestions[currentQuestion].difficulty === 'medium' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {currentQuestions[currentQuestion].difficulty}
                  </span>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === currentQuestions[currentQuestion].correctAnswer;
                  const isSelected = index === showFeedback;
                  const isWrongSelected = showFeedback !== null && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: showFeedback === null ? 1.02 : 1 }}
                      whileTap={{ scale: showFeedback === null ? 0.98 : 1 }}
                      disabled={showFeedback !== null}
                      onClick={() => handleAnswer(index)}
                      className={`w-full py-3 px-4 rounded-lg border text-left flex justify-between items-center transition-all ${
                        isSelected
                          ? isCorrect
                            ? 'bg-green-50 text-green-800 border-green-300'
                            : 'bg-red-50 text-red-800 border-red-300'
                          : showFeedback !== null && isCorrect
                            ? 'bg-green-50 text-green-800 border-green-300'
                            : 'bg-white hover:border-blue-300 border-gray-200'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )
                      )}
                      {!isSelected && showFeedback !== null && isCorrect && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation and Next Button */}
              {showFeedback !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-blue-800 mb-1">
                          {showFeedback === currentQuestions[currentQuestion].correctAnswer 
                            ? 'Correct!' 
                            : 'Not quite right'}
                        </h3>
                        <p className="text-sm text-blue-700">
                          {currentQuestions[currentQuestion].explanation || 
                           'No explanation available for this question.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleNextQuestion}
                    className="w-full mt-4"
                    size="lg"
                  >
                    {currentQuestion < currentQuestions.length - 1 
                      ? 'Next Question' 
                      : 'See Results'}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
                  <p className="text-lg mb-4">
                    You scored {calculateScore()} out of {currentQuestions.length}
                  </p>
                  <div className="text-3xl font-bold">{score} points</div>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => {
                      setCurrentQuestion(0);
                      setSelectedAnswers([]);
                      setShowResults(false);
                      setShowFeedback(null);
                      setScore(0);
                      setTimeRemaining(30);
                    }}
                    className="w-full"
                    size="lg"
                  >
                    Try Again
                  </Button>
                  <Link href="/quiz/select">
                    <Button variant="outline" className="w-full" size="lg">
                      Choose Another Quiz
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}