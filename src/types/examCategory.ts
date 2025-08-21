export interface ExamCategory {
  id: string;
  title: string;
  description: string;
  examIds?: string[];
  subcategories?: ExamCategory[];
  color: string;
  icon?: string;
}
