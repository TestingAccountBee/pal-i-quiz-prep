import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Target } from 'lucide-react';
import { Exam } from '@/types/exam';

interface ExamCardProps {
  exam: Exam;
  onStartExam: (examId: string) => void;
  isCompleted?: boolean;
  lastScore?: number;
}

export const ExamCard = ({ exam, onStartExam, isCompleted, lastScore }: ExamCardProps) => {
  return (
    <Card className="group hover:shadow-large transition-all duration-smooth cursor-pointer bg-gradient-card border-0 hover:scale-[1.02]">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-fast">
              {exam.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {exam.description}
            </CardDescription>
          </div>
          {isCompleted && (
            <Badge 
              variant={lastScore && lastScore >= exam.passingScore ? "default" : "secondary"}
              className="ml-2 bg-primary/10 text-primary border-primary/20"
            >
              {lastScore && lastScore >= exam.passingScore ? 'Passed' : 'Completed'}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-4 w-4 text-primary" />
            <span>{exam.questions.length} questions</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>{exam.timeLimit} min</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target className="h-4 w-4 text-primary" />
            <span>{exam.passingScore}% to pass</span>
          </div>
        </div>
        
        {lastScore !== undefined && (
          <div className="flex items-center justify-between py-2 px-3 bg-accent/50 rounded-lg">
            <span className="text-sm text-muted-foreground">Last Score:</span>
            <span className={`font-semibold ${lastScore >= exam.passingScore ? 'text-success' : 'text-warning'}`}>
              {lastScore}%
            </span>
          </div>
        )}

        <Button 
          onClick={() => onStartExam(exam.id)}
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-smooth font-medium"
          size="lg"
        >
          {isCompleted ? 'Retake Exam' : 'Start Exam'}
        </Button>
      </CardContent>
    </Card>
  );
};