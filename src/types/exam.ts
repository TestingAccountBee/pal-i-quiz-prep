export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number; // in minutes
  passingScore: number; // percentage
}

export interface ExamAttempt {
  examId: string;
  answers: Record<string, number>;
  startTime: Date;
  endTime?: Date;
  score?: number;
  passed?: boolean;
}

export interface ExamResult {
  attempt: ExamAttempt;
  exam: Exam;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number; // in seconds
  questionResults: Array<{
    question: Question;
    userAnswer: number | null;
    isCorrect: boolean;
  }>;
}