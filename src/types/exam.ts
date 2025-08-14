export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[]; // Single answer (number) or multiple answers (array)
  explanation?: string;
  multipleChoice?: boolean; // Optional flag to explicitly mark multiple choice questions
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
  answers: Record<string, number | number[]>; // Support both single and multiple answers
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
    userAnswer: number | number[] | null;
    isCorrect: boolean;
  }>;
}