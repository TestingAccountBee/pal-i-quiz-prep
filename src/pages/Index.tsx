import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExamCard } from '@/components/ExamCard';
import { ExamInterface } from '@/components/ExamInterface';
import { ExamResults } from '@/components/ExamResults';
import { ExamCategoryCard } from '@/components/ExamCategoryCard';
import { mockExams } from '@/data/mockExams';
import { examCategories } from '@/data/examCategories';
import { Exam, ExamResult } from '@/types/exam';
import { ExamCategory } from '@/types/examCategory';

type ViewState = 'dashboard' | 'category' | 'exam' | 'results';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);
  const [examResults, setExamResults] = useState<ExamResult | null>(null);
  const [completedExams, setCompletedExams] = useState<ExamResult[]>([]);

  // Load completed exams from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('exam-results');
    if (saved) {
      try {
        setCompletedExams(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved exam results:', e);
      }
    }
  }, []);

  const handleViewCategory = (category: ExamCategory) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleStartExam = (exam: Exam) => {
    setSelectedExam(exam);
    setCurrentView('exam');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentView('dashboard');
  };

  const handleBackToCategoryExams = () => {
    setCurrentView('category');
  };

  const handleExamSubmit = (attempt: any) => {
    if (!selectedExam) return;

    // Calculate real results based on user answers
    const questionResults = selectedExam.questions.map((question) => {
      const userAnswer = attempt.answers[question.id];
      let isCorrect = false;

      if (Array.isArray(question.correctAnswer)) {
        // Multiple choice - check if arrays match
        const userAnswerArray = Array.isArray(userAnswer) ? userAnswer : [];
        const correctAnswerArray = question.correctAnswer;
        isCorrect = userAnswerArray.length === correctAnswerArray.length && 
                   userAnswerArray.sort().every((val, index) => val === correctAnswerArray.sort()[index]);
      } else {
        // Single choice - direct comparison
        isCorrect = userAnswer === question.correctAnswer;
      }

      return {
        question,
        userAnswer: userAnswer !== undefined ? userAnswer : null,
        isCorrect
      };
    });

    const correctAnswers = questionResults.filter(qr => qr.isCorrect).length;
    const totalQuestions = selectedExam.questions.length;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = scorePercentage >= selectedExam.passingScore;

    // Calculate actual time spent
    const timeSpent = Math.floor((new Date().getTime() - attempt.startTime.getTime()) / 1000);

    const result: ExamResult = {
      attempt: {
        ...attempt,
        endTime: new Date(),
        score: scorePercentage,
        passed
      },
      exam: selectedExam,
      correctAnswers,
      totalQuestions,
      timeSpent,
      questionResults
    };

    // Save to localStorage
    const updatedResults = [...completedExams, result];
    setCompletedExams(updatedResults);
    localStorage.setItem('exam-results', JSON.stringify(updatedResults));

    setExamResults(result);
    setCurrentView('results');
  };

  const handleBackToDashboard = () => {
    if (selectedCategory) {
      setCurrentView('category');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleRetakeExam = () => {
    setCurrentView('exam');
  };

  const completedCount = completedExams.length;
  const passedCount = completedExams.filter(result => result.attempt.passed).length;
  const averageScore = completedCount > 0 
    ? Math.round(completedExams.reduce((sum, result) => sum + (result.attempt.score || 0), 0) / completedCount)
    : 0;

  // Render exam interface when in exam mode
  if (currentView === 'exam' && selectedExam) {
    return (
      <ExamInterface
        exam={selectedExam}
        onSubmit={handleExamSubmit}
        onBack={handleBackToDashboard}
      />
    );
  }

  // Render results when in results mode
  if (currentView === 'results' && examResults) {
    return (
      <ExamResults
        result={examResults}
        onBackToHome={handleBackToDashboard}
        onRetakeExam={handleRetakeExam}
        category={selectedCategory?.title || ''}
        subcategory={selectedCategory?.subcategories ? 'N/A' : ''}
      />
    );
  }

  // Render category exams when in category mode
  if (currentView === 'category' && selectedCategory) {
    // Check if this category has subcategories
    if (selectedCategory.subcategories && selectedCategory.subcategories.length > 0) {
      return (
        <div className="min-h-screen bg-gradient-subtle p-4">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="text-center space-y-4">
              <Button 
                variant="outline" 
                onClick={handleBackToCategories}
                className="mb-4"
              >
                ← Back to Categories
              </Button>
              <h1 className="text-4xl font-bold text-foreground">
                {selectedCategory.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {selectedCategory.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedCategory.subcategories.map((subcategory) => (
                <ExamCategoryCard
                  key={subcategory.id}
                  category={subcategory}
                  onViewExams={handleViewCategory}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    // Original logic for categories with direct exams
    const categoryExams = selectedCategory.examIds 
      ? mockExams.filter(exam => selectedCategory.examIds!.includes(exam.id))
      : [];
    
    return (
      <div className="min-h-screen bg-gradient-subtle p-4">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-4">
            <Button 
              variant="outline" 
              onClick={handleBackToCategories}
              className="mb-4"
            >
              ← Back to Categories
            </Button>
            <h1 className="text-4xl font-bold text-foreground">
              {selectedCategory.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {selectedCategory.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryExams.map((exam) => {
              const result = completedExams.find(r => r.exam.id === exam.id);
              return (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                  onStartExam={() => handleStartExam(exam)}
                  isCompleted={!!result}
                  lastScore={result?.attempt.score}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Dashboard view
  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Mock Exam Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice for your Scrum.org certifications with our comprehensive mock exams
          </p>
        </div>

        {/* Stats Cards */}
        {completedCount > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Passed Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">{passedCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageScore}%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Target Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">85%</div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {examCategories.map((category) => (
            <ExamCategoryCard
              key={category.id}
              category={category}
              onViewExams={handleViewCategory}
            />
          ))}
        </div>

        {/* Information Card */}
        <Card className="bg-card border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-card-foreground">
              About Scrum.org Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Scrum.org offers professional certifications that validate your knowledge and understanding 
              of the Scrum framework and Agile practices. Our mock exams help you prepare for these 
              challenging assessments with realistic questions and detailed explanations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Available Certifications:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Professional Agile Leadership (PAL I)</li>
                  <li>• Professional Scrum Product Owner (PSPO I & II)</li>
                  <li>• Professional Scrum Master (PSM I & II)</li>
                  <li>• Professional Agile Leadership - EBM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Platform Features:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Realistic exam simulation</li>
                  <li>• Detailed explanations</li>
                  <li>• Progress tracking</li>
                  <li>• Multiple practice attempts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            These mock exams are NOT from, endorsed by or affiliated with Scrum.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
