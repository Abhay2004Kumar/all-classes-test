import { useState } from 'react';
import { Link } from 'wouter';
import { quizExams } from '@/data/quizData';
import { Button } from '@/components/ui/button';

export default function QuizSelectPage() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleSelectExam = (examId: string) => {
    setSelectedExam(examId);
    setSelectedSubject(null);
    setSelectedTopic(null);
  };

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedTopic(null);
  };

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const startQuizUrl = () => {
    if (!selectedExam || !selectedSubject || !selectedTopic) return '';
    return `/quiz/${selectedExam}/${selectedSubject}/${selectedTopic}`;
  };

  const currentExam = selectedExam ? quizExams[selectedExam] : null;
  const currentSubject = currentExam?.subjects.find(s => s.id === selectedSubject);
  const currentTopic = currentSubject?.topics.find(t => t.id === selectedTopic);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your Quiz</h1>

      {/* Exam Selection */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Choose Exam</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(quizExams).map(([examId, exam]) => (
            <Button
              key={examId}
              variant={selectedExam === examId ? "default" : "outline"}
              onClick={() => handleSelectExam(examId)}
              className="flex items-center justify-center space-x-2"
            >
              <span>{exam.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Subject Selection */}
      {selectedExam && (
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Choose Subject</h2>
          <div className="grid grid-cols-2 gap-4">
            {currentExam?.subjects.map((subject) => (
              <Button
                key={subject.id}
                variant={selectedSubject === subject.id ? "default" : "outline"}
                onClick={() => handleSelectSubject(subject.id)}
                className="flex items-center justify-center space-x-2"
              >
                <span>{subject.name}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Topic Selection */}
      {selectedSubject && (
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Choose Topic</h2>
          <div className="grid grid-cols-2 gap-4">
            {currentSubject?.topics.map((topic) => (
              <Button
                key={topic.id}
                variant={selectedTopic === topic.id ? "default" : "outline"}
                onClick={() => handleSelectTopic(topic.id)}
                className="flex items-center justify-center space-x-2"
              >
                <span>{topic.name}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Start Quiz Button */}
      {selectedTopic && (
        <Link href={startQuizUrl()}>
          <Button className="w-full max-w-sm">
            Start Quiz
          </Button>
        </Link>
      )}
    </div>
  );
}
