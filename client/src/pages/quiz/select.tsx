import { useState } from 'react';
import { useLocation } from 'wouter';
import { quizExams } from '@/data/quizData';
import { BookOpen, Clock, Info } from 'lucide-react';

export default function QuizSelectPage() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [_, navigate] = useLocation();

  const handleSelectExam = (examId: string) => {
    setSelectedExam(examId);
    navigate(`/quiz/${examId}`);
  };

  const currentExam = selectedExam ? quizExams[selectedExam] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Select Your Exam</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Choose an exam to start your quiz. Each exam contains mixed questions from relevant subjects.
          </p>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(quizExams).map(([examId, exam]) => (
              <div 
                key={examId}
                onClick={() => handleSelectExam(examId)}
                className="p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-gray-200 transition-all cursor-pointer hover:shadow-md hover:border-amber-300 relative"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 flex items-center justify-center mr-2 sm:mr-3">
                    <BookOpen className="text-amber-600" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{exam.name}</h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{exam.description}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <Clock className="mr-1" size={12} />
                  <span>{Math.floor(exam.timeLimit / 60)} min</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span>{exam.questions.length} Questions</span>
                </div>
                <div className="mt-3 sm:mt-4">
                  <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">{exam.subjectInfo.name}</div>
                  <p className="text-xs text-gray-500">{exam.subjectInfo.description}</p>
                </div>
                {selectedExam === examId && (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-600 flex items-center justify-center ml-auto mt-1 sm:mt-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {selectedExam && currentExam && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
              <Info className="mr-2 text-amber-600" size={20} />
              About This Quiz
            </h2>
            <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2 sm:mb-3">Quiz Details</h3>
                  <ul className="space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                    <li className="flex items-center">
                      <Clock className="mr-2 text-amber-500" size={14} />
                      Duration: {Math.floor(currentExam.timeLimit / 60)} minutes
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="mr-2 text-amber-500" size={14} />
                      Questions: {currentExam.questions.length}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2 sm:mb-3">Subjects Covered</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {currentExam.subjectInfo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}