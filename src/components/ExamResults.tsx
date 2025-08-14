import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, RotateCcw, Home } from 'lucide-react';
import { ExamResult } from '@/types/exam';

interface ExamResultsProps {
  result: ExamResult;
  onRetakeExam: () => void;
  onBackToHome: () => void;
}

export const ExamResults = ({ result, onRetakeExam, onBackToHome }: ExamResultsProps) => {
  const { attempt, exam, correctAnswers, totalQuestions, timeSpent, questionResults } = result;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = scorePercentage >= exam.passingScore;
  const timeUsed = Math.floor(timeSpent / 60);

  // Helper function to determine if a question is multiple choice
  const isMultipleChoice = (question: any) => {
    return question.multipleChoice || Array.isArray(question.correctAnswer);
  };

  // Helper function to check if arrays are equal (for multiple choice comparison)
  const arraysEqual = (a: number[], b: number[]) => {
    if (a.length !== b.length) return false;
    return a.sort().every((val, index) => val === b.sort()[index]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Results Header */}
      <Card className={`bg-gradient-card border-0 shadow-large ${passed ? 'ring-2 ring-success/20' : 'ring-2 ring-warning/20'}`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {passed ? (
              <CheckCircle className="h-16 w-16 text-success" />
            ) : (
              <XCircle className="h-16 w-16 text-warning" />
            )}
          </div>
          <CardTitle className="text-3xl font-bold mb-2">
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            {passed 
              ? `You passed the ${exam.title} with flying colors!`
              : `You're making progress! Review the questions below and try again.`
            }
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score Display */}
          <div className="text-center space-y-3">
            <div className="text-6xl font-bold text-primary">
              {scorePercentage}%
            </div>
            <div className="flex justify-center gap-4">
              <Badge variant={passed ? "default" : "secondary"} className="text-lg py-2 px-4">
                {correctAnswers}/{totalQuestions} Correct
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Clock className="h-4 w-4 mr-1" />
                {timeUsed} minutes
              </Badge>
            </div>
            <Progress value={scorePercentage} className="h-3 mt-4" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={onRetakeExam}
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Exam
            </Button>
            <Button
              onClick={onBackToHome}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-smooth"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Question Review */}
      <Card className="bg-gradient-card border-0 shadow-medium">
        <CardHeader>
          <CardTitle className="text-xl">Question Review</CardTitle>
          <p className="text-muted-foreground">
            Review your answers and learn from the explanations below.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {questionResults.map((qr, index) => (
            <div
              key={qr.question.id}
              className={`p-4 rounded-lg border-2 ${
                qr.isCorrect ? 'border-success/20 bg-success/5' : 'border-warning/20 bg-warning/5'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                {qr.isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">
                    Question {index + 1}: {qr.question.question}
                  </h4>
                  
                  {isMultipleChoice(qr.question) && (
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        Múltipla Escolha
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-2 mb-3">
                    {qr.question.options.map((option, optIndex) => {
                      const correctAnswers = Array.isArray(qr.question.correctAnswer) 
                        ? qr.question.correctAnswer 
                        : [qr.question.correctAnswer];
                      const userAnswers = Array.isArray(qr.userAnswer) 
                        ? qr.userAnswer 
                        : qr.userAnswer !== null ? [qr.userAnswer] : [];
                      
                      const isCorrectOption = correctAnswers.includes(optIndex);
                      const isUserSelection = userAnswers.includes(optIndex);
                      const isWrongSelection = isUserSelection && !isCorrectOption;
                      
                      return (
                        <div
                          key={optIndex}
                          className={`p-2 rounded border ${
                            isCorrectOption
                              ? 'border-success bg-success/10 text-success'
                              : isWrongSelection
                              ? 'border-warning bg-warning/10 text-warning'
                              : 'border-border bg-card'
                          }`}
                        >
                          <span className="font-medium mr-2">
                            {String.fromCharCode(65 + optIndex)}.
                          </span>
                          {option}
                          {isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Correct)</span>
                          )}
                          {isUserSelection && !isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Sua Resposta)</span>
                          )}
                          {isUserSelection && isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Sua Resposta - Correta)</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {qr.question.explanation && (
                    <div className="bg-accent/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {qr.question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};