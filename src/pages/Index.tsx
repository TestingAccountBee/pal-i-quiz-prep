import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExamCard } from '@/components/ExamCard';
import { ExamInterface } from '@/components/ExamInterface';
import { ExamResults } from '@/components/ExamResults';
import { mockExams } from '@/data/mockExams';
import { Exam, ExamAttempt, ExamResult } from '@/types/exam';
import { Trophy, BookOpen, Target, TrendingUp } from 'lucide-react';

type ViewState = 'dashboard' | 'exam' | 'results';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [examResults, setExamResults] = useState<ExamResult | null>(null);
  const [completedExams, setCompletedExams] = useState<Record<string, number>>({});

  // Load completed exams from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('exam-results');
    if (saved) {
      setCompletedExams(JSON.parse(saved));
    }
  }, []);

  const handleStartExam = (examId: string) => {
    const exam = mockExams.find(e => e.id === examId);
    if (exam) {
      setSelectedExam(exam);
      setCurrentView('exam');
    }
  };

  const handleExamSubmit = (attempt: ExamAttempt) => {
    if (!selectedExam) return;

    let correctAnswers = 0;
    const questionResults = selectedExam.questions.map(question => {
      const userAnswer = attempt.answers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) correctAnswers++;

      return {
        question,
        userAnswer: userAnswer ?? null,
        isCorrect
      };
    });

    const timeSpent = Math.floor((new Date().getTime() - attempt.startTime.getTime()) / 1000);
    const score = Math.round((correctAnswers / selectedExam.questions.length) * 100);

    const result: ExamResult = {
      attempt: {
        ...attempt,
        endTime: new Date(),
        score,
        passed: score >= selectedExam.passingScore
      },
      exam: selectedExam,
      correctAnswers,
      totalQuestions: selectedExam.questions.length,
      timeSpent,
      questionResults
    };

    // Save result
    const newCompletedExams = { ...completedExams, [selectedExam.id]: score };
    setCompletedExams(newCompletedExams);
    localStorage.setItem('exam-results', JSON.stringify(newCompletedExams));

    setExamResults(result);
    setCurrentView('results');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedExam(null);
    setExamResults(null);
  };

  const handleRetakeExam = () => {
    setCurrentView('exam');
    setExamResults(null);
  };

  const completedCount = Object.keys(completedExams).length;
  const passedCount = Object.values(completedExams).filter(score => score >= 85).length;
  const averageScore = completedCount > 0 
    ? Math.round(Object.values(completedExams).reduce((a, b) => a + b, 0) / completedCount)
    : 0;

  if (currentView === 'exam' && selectedExam) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <ExamInterface
          exam={selectedExam}
          onSubmit={handleExamSubmit}
          onBack={handleBackToDashboard}
        />
      </div>
    );
  }

  if (currentView === 'results' && examResults) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <ExamResults
          result={examResults}
          onRetakeExam={handleRetakeExam}
          onBackToHome={handleBackToDashboard}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            PAL I Mock Exams
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional Agile Leadership I certification practice exams. 
            Master the fundamentals of agile leadership and pass your certification with confidence.
          </p>
        </div>

        {/* Stats */}
        {completedCount > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Exams Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">{passedCount}</div>
                <div className="text-sm text-muted-foreground">Exams Passed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{averageScore}%</div>
                <div className="text-sm text-muted-foreground">Average Score</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">Passing Score</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Exams Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">Available Mock Exams</h2>
            <Badge variant="outline" className="border-primary/20 text-primary px-4 py-2">
              {mockExams.length} Total Exams
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockExams.map(exam => (
              <ExamCard
                key={exam.id}
                exam={exam}
                onStartExam={handleStartExam}
                isCompleted={exam.id in completedExams}
                lastScore={completedExams[exam.id]}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="bg-gradient-card border-0 shadow-medium mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">About PAL I Certification</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Professional Agile Leadership - Essentials (PAL-E) certification validates your knowledge 
              of how agile leaders can help their teams and organizations become more agile. These mock exams 
              cover key concepts in agile leadership, organizational change, and team development.
            </p>
            <div className="flex justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40</div>
                <div className="text-sm text-muted-foreground">Questions per Exam</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">60</div>
                <div className="text-sm text-muted-foreground">Minutes Time Limit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Required Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
