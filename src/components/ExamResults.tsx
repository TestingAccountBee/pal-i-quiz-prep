import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, Clock, RotateCcw, Home, Filter, Flag, Send } from 'lucide-react';
import { ExamResult } from '@/types/exam';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { formatTextWithLineBreaks } from '@/lib/utils';

interface ExamResultsProps {
  result: ExamResult;
  onRetakeExam: () => void;
  onBackToHome: () => void;
  category?: string;
  subcategory?: string;
}

// EmailJS Configuration - Replace with your actual IDs
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_17yvge4', // Replace with your Service ID
  TEMPLATE_ID: 'template_4buc6e9', // Replace with your Template ID
  PUBLIC_KEY: 'oYqYQl8I6Z4w_ZXO_', // Replace with your Public Key
};

// Declare EmailJS types for TypeScript
declare global {
  interface Window {
    emailjs: any;
  }
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
  const [isLoading, setIsLoading] = useState(false);
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);
  
  // Load EmailJS from CDN
  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        setEmailJSLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
          setEmailJSLoaded(true);
        }
      };
      script.onerror = () => {
        console.error('Failed to load EmailJS');
        toast({
          title: "Error loading email service",
          description: "Please refresh the page and try again.",
          variant: "destructive",
        });
      };
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, []);

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

  // Helper function to format answers for display
  const formatAnswer = (answer: any) => {
    if (answer === null || answer === undefined) return 'No answer';
    if (Array.isArray(answer)) {
      return answer.map(idx => String.fromCharCode(65 + idx)).join(', ');
    }
    return String.fromCharCode(65 + answer);
  };

  // Handle report submission using EmailJS via CDN
  const handleReportSubmit = async () => {
    if (!selectedQuestion || !reportText.trim()) {
      toast({
        title: "Required fields",
        description: "Please select a question and write your comment.",
        variant: "destructive",
      });
      return;
    }

    if (!emailJSLoaded || !window.emailjs) {
      toast({
        title: "Email service not ready",
        description: "Please wait a moment and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Get the selected question details
      const questionIndex = parseInt(selectedQuestion) - 1;
      const selectedQuestionData = questionResults[questionIndex];

      // Create email subject
      let subjectCategory = "Question Report";
      if (category) {
        subjectCategory = `${category}`;
        if (subcategory) {
          subjectCategory += ` / ${subcategory}`;
        }
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'dfts10.profissional@gmail.com',
        subject_category: subjectCategory,
        exam_title: exam.title,
        categoria: category || "N/A",
        subcategoria: subcategory || "N/A",
        question_number: selectedQuestion,
        question_text: selectedQuestionData?.question.question || "Question not found",
        user_feedback: reportText,
        user_score: scorePercentage,
        timestamp: new Date().toLocaleString('pt-PT'),
        question_options: selectedQuestionData?.question.options?.join(' | ') || "No options",
        correct_answer: formatAnswer(selectedQuestionData?.question.correctAnswer),
        user_answer: formatAnswer(selectedQuestionData?.userAnswer),
        explanation: selectedQuestionData?.question.explanation || "No explanation provided",
      };

      // Send email via EmailJS
      const response = await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', response);

      toast({
        title: "Report submitted!✅",
        description: "Your report has been sent. Thank you for your feedback!",
      });

      // Reset form and close dialog
      setSelectedQuestion('');
      setReportText('');
      setReportOpen(false);

    } catch (error) {
      console.error("Erro ao enviar report via EmailJS:", error);
      
      let errorMessage = "Failed to send the report. Please try again.";
      if (error && typeof error === 'object' && 'text' in error) {
        if (error.text.includes('Invalid email')) {
          errorMessage = "Email configuration error. Contact support.";
        } else if (error.text.includes('network') || error.text.includes('fetch')) {
          errorMessage = "Connection error. Check your internet connection and try again.";
        }
      }

      toast({
        title: "Erro ao enviar ❌",
        description: errorMessage,
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
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle>Report Question 📝</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="exam-info">Exam</Label>
                <div className="text-sm text-muted-foreground p-2 bg-accent/50 rounded">
                  {exam.title}
                  {(category || subcategory) && (
                    <div className="text-xs mt-1">
                      {category && <Badge variant="outline" className="mr-1">{category}</Badge>}
                      {subcategory && <Badge variant="outline">{subcategory}</Badge>}
                    </div>
                  )}
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
                <Label htmlFor="report-text">Describe the problem</Label>
                <Textarea
                  id="report-text"
                  placeholder="Explain why you believe the answer is incorrect, or suggest improvements..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  className="min-h-[100px]"
                />
                              </div>
              
              {!emailJSLoaded && (
                <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
                  ⚡ Loading service...
                </div>
              )}
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setReportOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleReportSubmit} 
                  disabled={isLoading || !emailJSLoaded}
                  className="bg-gradient-primary hover:shadow-glow"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Report
                    </>
                  )}
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
                All ({questionResults.length})
              </Button>
              <Button
                variant={filter === 'correct' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('correct')}
                className={filter === 'correct' ? 'bg-success hover:bg-success/90' : 'border-success text-success hover:bg-success hover:text-white'}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Correct ({questionResults.filter(qr => qr.isCorrect).length})
              </Button>
              <Button
                variant={filter === 'incorrect' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('incorrect')}
                className={filter === 'incorrect' ? 'bg-destructive hover:bg-destructive/90' : 'border-destructive text-destructive hover:bg-destructive hover:text-white'}
              >
                <XCircle className="h-4 w-4 mr-1" />
                Incorrect ({questionResults.filter(qr => !qr.isCorrect).length})
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
                    Question {originalIndex + 1}: {formatTextWithLineBreaks(qr.question.question)}
                  </h4>
                  
                  {isMultipleChoice(qr.question) && (
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        Multiple Choice
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
                          {formatTextWithLineBreaks(option)}
                          {isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Correct)</span>
                          )}
                          {isUserSelection && !isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Your Answer)</span>
                          )}
                          {isUserSelection && isCorrectOption && (
                            <span className="ml-2 text-xs font-medium">(Your Answer - Correct)</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {qr.question.explanation && (
                    <div className="bg-accent/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {formatTextWithLineBreaks(qr.question.explanation)}
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
