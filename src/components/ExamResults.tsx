import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle, Clock, RotateCcw, Home, Filter, Flag } from 'lucide-react';
import { ExamResult } from '@/types/exam';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ExamResultsProps {
  result: ExamResult;
  onRetakeExam: () => void;
  onBackToHome: () => void;
  category?: string;
  subcategory?: string;
}

export const ExamResults = ({ result, onRetakeExam, onBackToHome, category, subcategory }: ExamResultsProps) => {
  const { attempt, exam, correctAnswers, totalQuestions, timeSpent, questionResults } = result;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = scorePercentage >= exam.passingScore;
  const timeUsed = Math.floor(timeSpent / 60);
  const { toast } = useToast();

  // Filter state
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  
  // Report state
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [reportText, setReportText] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter questions based on current filter
  const filteredQuestions = questionResults.filter((qr) => {
    if (filter === 'correct') return qr.isCorrect;
    if (filter === 'incorrect') return !qr.isCorrect;
    return true;
  });

  // Helper function to determine if a question is multiple choice
  const isMultipleChoice = (question: any) => {
    return question.multipleChoice || Array.isArray(question.correctAnswer);
  };

  // Helper function to check if arrays are equal (for multiple choice comparison)
  const arraysEqual = (a: number[], b: number[]) => {
    if (a.length !== b.length) return false;
    return a.sort().every((val, index) => val === b.sort()[index]);
  };

  // Handle report submission
  const handleReportSubmit = async () => {
    if (!selectedQuestion || !reportText.trim()) {
      toast({
        title: "Required fields",
        description: "Please select a question and write your comment.",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl.trim()) {
      toast({
        title: "Webhook URL required",
        description: "Please enter your Zapier webhook URL to send the report via email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create email subject with category and subcategory
      let emailSubject = "Question Report";
      if (category) {
        emailSubject += ` - ${category}`;
        if (subcategory) {
          emailSubject += ` - ${subcategory}`;
        }
      }

      // Prepare data for Zapier webhook
      const reportData = {
        to_email: "dfts10.profissional@gmail.com",
        subject: emailSubject,
        exam_title: exam.title,
        question_number: selectedQuestion,
        question_text: questionResults[parseInt(selectedQuestion) - 1]?.question.question,
        user_feedback: reportText,
        category: category || "N/A",
        subcategory: subcategory || "N/A",
        timestamp: new Date().toISOString(),
        triggered_from: window.location.origin,
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(reportData),
      });

      toast({
        title: "Report sent",
        description: "Your report has been sent via email. Thank you for your feedback!",
      });

      // Reset form and close dialog
      setSelectedQuestion('');
      setReportText('');
      setReportOpen(false);
    } catch (error) {
      console.error("Error sending report:", error);
      toast({
        title: "Error",
        description: "Failed to send the report. Please check the webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Report Button - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <Dialog open={reportOpen} onOpenChange={setReportOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm border-warning hover:bg-warning hover:text-warning-foreground"
            >
              <Flag className="h-4 w-4 mr-2" />
              Report Question
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Report Incorrect Question</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="exam-info">Exam</Label>
                <div className="text-sm text-muted-foreground p-2 bg-accent/50 rounded">
                  {exam.title}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="question-select">Question Number</Label>
                <Select value={selectedQuestion} onValueChange={setSelectedQuestion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a question" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionResults.map((qr, index) => (
                      <SelectItem key={qr.question.id} value={`${index + 1}`}>
                        Question {index + 1}: {qr.question.question.substring(0, 50)}...
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Zapier Webhook URL</Label>
                <Input
                  id="webhook-url"
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Create a Zap with a webhook trigger and paste the URL here to send reports via email.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="report-text">Describe the problem</Label>
                <Textarea
                  id="report-text"
                  placeholder="Explain why you believe the answer is incorrect..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setReportOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleReportSubmit} disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Report"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-xl">Question Review</CardTitle>
              <p className="text-muted-foreground">
                Review your answers and learn from the explanations below.
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                <Filter className="h-4 w-4 mr-1" />
                Todas ({questionResults.length})
              </Button>
              <Button
                variant={filter === 'correct' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('correct')}
                className={filter === 'correct' ? 'bg-success hover:bg-success/90' : 'border-success text-success hover:bg-success hover:text-white'}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Corretas ({questionResults.filter(qr => qr.isCorrect).length})
              </Button>
              <Button
                variant={filter === 'incorrect' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('incorrect')}
                className={filter === 'incorrect' ? 'bg-destructive hover:bg-destructive/90' : 'border-destructive text-destructive hover:bg-destructive hover:text-white'}
              >
                <XCircle className="h-4 w-4 mr-1" />
                Incorretas ({questionResults.filter(qr => !qr.isCorrect).length})
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredQuestions.map((qr) => {
            // Find the original index of this question in the full exam
            const originalIndex = questionResults.findIndex(originalQr => originalQr.question.id === qr.question.id);
            
            return (
            <div
              key={qr.question.id}
              className={`p-4 rounded-lg border-2 ${
                qr.isCorrect ? 'border-success/20 bg-success/5' : 'border-destructive/20 bg-destructive/5'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                {qr.isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">
                    Question {originalIndex + 1}: {qr.question.question}
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
                              ? 'border-destructive bg-destructive/10 text-destructive'
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
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};