import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { quizExams, QuizTopic } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, Clock, Info, Lightbulb, Target } from 'lucide-react';

interface TopicWithRound extends QuizTopic {
  subjectId: string;
  subjectName: string;
}

export default function QuizSelectPage() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [_, navigate] = useLocation();

  const handleSelectExam = (examId: string) => {
    setSelectedExam(examId);
    setSelectedSubject(null);
  };

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId);
  };

  const startQuizSeries = (subjectId: string) => {
    if (!selectedExam || !selectedSubject) return;
    
    // Find the topics for this subject
    const currentExam = selectedExam ? quizExams[selectedExam] : null;
    const currentSubject = currentExam?.subjects.find(s => s.id === subjectId);
    const topics = currentSubject?.topics || [];
    
    if (topics.length > 0) {
      // Start with the first round
      navigate(`/quiz/${selectedExam}/${selectedSubject}/${topics[0].id}`);
    }
  };

  const currentExam = selectedExam ? quizExams[selectedExam] : null;
  const currentSubject = selectedSubject 
    ? currentExam?.subjects.find(s => s.id === selectedSubject)
    : null;

  // Get all topics for the selected subject
  const topics = currentSubject?.topics || [];
  
  // Get all subjects for the selected exam
  const subjects = currentExam?.subjects || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Selection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your exam and subject to start the quiz. Each subject includes both Observe & Reflect and Scientific Puzzle rounds.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${selectedExam ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <BookOpen size={20} />
            </div>
            <span className={`text-sm font-medium ${selectedExam ? 'text-blue-600' : 'text-gray-500'}`}>Exam</span>
          </div>
          <div className={`flex-1 h-1 ${selectedSubject ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${selectedSubject ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <Target size={20} />
            </div>
            <span className={`text-sm font-medium ${selectedSubject ? 'text-blue-600' : 'text-gray-500'}`}>Subject</span>
          </div>
        </div>

        {/* Exam Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <BookOpen className="mr-2 text-blue-600" size={24} />
            Choose Your Exam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(quizExams).map(([examId, exam]) => (
              <div 
                key={examId}
                onClick={() => handleSelectExam(examId)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                  selectedExam === examId 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{exam.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    {exam.subjects.length} {exam.subjects.length === 1 ? 'Subject' : 'Subjects'}
                  </span>
                  {selectedExam === examId && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Selection */}
        {selectedExam && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Target className="mr-2 text-blue-600" size={24} />
              Select Subject
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject) => (
                <div 
                  key={subject.id}
                  onClick={() => handleSelectSubject(subject.id)}
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                    selectedSubject === subject.id
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium">
                      {subject.topics.length} Rounds
                    </span>
                    {selectedSubject === subject.id && (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start Quiz Button */}
        {selectedSubject && currentSubject && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Brain className="mr-2 text-blue-600" size={24} />
              Ready to Start
            </h2>
            <p className="text-gray-600 mb-8">
              This subject includes {topics.length} rounds that will be completed sequentially.
            </p>
            
            <Button 
              onClick={() => startQuizSeries(currentSubject.id)}
              size="lg"
              className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
            >
              Start Quiz Series
            </Button>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Info className="mr-2 text-blue-600" size={20} />
                How it works
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">1</div>
                  <span>You'll complete all rounds ({topics.length}) in sequence</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">2</div>
                  <span>Your scores will be combined at the end</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">3</div>
                  <span>You can't skip rounds - complete them in order</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}