export interface ExamCategory {
  id: string;
  title: string;
  description: string;
  examIds: string[];
  color: string;
  icon?: string;
}