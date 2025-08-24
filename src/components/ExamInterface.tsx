import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Clock, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import { Exam, ExamAttempt, Question } from '@/types/exam';

interface ExamInterfaceProps {
  exam: Exam;
  onSubmit: (attempt: ExamAttempt) => void;
  onBack: () => void;
}

export const ExamInterface = ({ exam, onSubmit, onBack }: ExamInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [timeLeft, setTimeLeft] = useState(exam.timeLimit * 60); // Convert to seconds
  const [startTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper function to determine if a question is multiple choice
  const isMultipleChoice = (question: Question) => {
    return question.multipleChoice || Array.isArray(question.correctAnswer);
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    const question = exam.questions.find(q => q.id === questionId);
    if (!question) return;

    if (isMultipleChoice(question)) {
      // Multiple choice logic
      setAnswers(prev => {
        const currentAnswers = prev[questionId] as number[] || [];
        const newAnswers = currentAnswers.includes(answerIndex)
          ? currentAnswers.filter(idx => idx !== answerIndex)
          : [...currentAnswers, answerIndex];
        
        return {
          ...prev,
          [questionId]: newAnswers
        };
      });
    } else {
      // Single choice logic
      setAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    }
  };

  const handleSubmit = () => {
    const attempt: ExamAttempt = {
      examId: exam.id,
      answers,
      startTime,
      endTime: new Date()
    };
    onSubmit(attempt);
  };

  const handleExitExam = () => {
    // Same as handleSubmit - we want to show results even on exit
    handleSubmit();
  };

  const progress = ((currentQuestion + 1) / exam.questions.length) * 100;
  const currentQ = exam.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const isCurrentMultiple = isMultipleChoice(currentQ);
  const currentAnswer = answers[currentQ.id];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card className="bg-gradient-card border-0 shadow-medium">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">{exam.title}</CardTitle>
              <p className="text-muted-foreground mt-1">
                Question {currentQuestion + 1} of {exam.questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary/20 text-primary">
                <Clock className="h-4 w-4 mr-1" />
                {formatTime(timeLeft)}
              </Badge>
              <Badge variant="outline" className="border-success/20 text-success">
                <Flag className="h-4 w-4 mr-1" />
                {answeredCount}/{exam.questions.length}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2 mt-4" />
        </CardHeader>
      </Card>

      {/* Question */}
      <Card className="bg-gradient-card border-0 shadow-medium">
        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg leading-relaxed flex-1">
                {currentQ.question}
              </CardTitle>
              {isCurrentMultiple && (
                <Badge variant="outline" className="text-xs">
                  Multiple Choice
                </Badge>
              )}
            </div>
            {isCurrentMultiple && (
              <p className="text-sm text-muted-foreground">
                Select all correct options
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {isCurrentMultiple ? (
            // Multiple choice with checkboxes
            currentQ.options.map((option, index) => {
              const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(index);
              
              return (
                <div
                  key={`${currentQ.id}-${index}`}
                  className={`p-4 rounded-lg border-2 transition-all duration-fast hover:border-primary/50 hover:bg-primary/5 ${
                    isSelected
                      ? 'border-primary bg-primary/10 shadow-soft'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleAnswerSelect(currentQ.id, index)}
                      id={`${currentQ.id}-option-${index}`}
                    />
                    <Label
                      htmlFor={`${currentQ.id}-option-${index}`}
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                    </Label>
                  </div>
                </div>
              );
            })
          ) : (
            // Single choice with radio buttons
            <RadioGroup
              value={currentAnswer !== undefined && currentAnswer !== null ? currentAnswer.toString() : ""}
              onValueChange={(value) => handleAnswerSelect(currentQ.id, parseInt(value))}
            >
              {currentQ.options.map((option, index) => {
                const isSelected = currentAnswer === index;
                
                return (
                  <div
                    key={`${currentQ.id}-${index}`}
                    className={`p-4 rounded-lg border-2 transition-all duration-fast hover:border-primary/50 hover:bg-primary/5 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-soft'
                        : 'border-border bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={index.toString()} id={`${currentQ.id}-option-${index}`} />
                      <Label
                        htmlFor={`${currentQ.id}-option-${index}`}
                        className="flex items-center gap-2 cursor-pointer flex-1"
                      >
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </RadioGroup>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="border-border hover:border-primary hover:text-primary"
            >
              Exit Exam
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Exit Exam?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to exit the exam? All unanswered questions will be considered incorrect.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleExitExam}>Exit Exam</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="border-border hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          {currentQuestion < exam.questions.length - 1 ? (
            <Button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={
                (isCurrentMultiple && (!Array.isArray(currentAnswer) || currentAnswer.length === 0)) ||
                (!isCurrentMultiple && (currentAnswer === undefined || currentAnswer === null))
              }
              className="bg-gradient-primary hover:shadow-glow transition-all duration-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-smooth font-semibold"
              disabled={answeredCount < exam.questions.length}
            >
              Submit Exam
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
