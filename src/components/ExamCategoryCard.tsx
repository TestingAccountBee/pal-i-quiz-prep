import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExamCategory } from "@/types/examCategory";
import { mockExams } from "@/data/mockExams";

interface ExamCategoryCardProps {
  category: ExamCategory;
  onViewExams: (category: ExamCategory) => void;
}

export function ExamCategoryCard({ category, onViewExams }: ExamCategoryCardProps) {
  const availableExams = category.examIds 
    ? mockExams.filter(exam => category.examIds!.includes(exam.id))
    : [];
  
  const subcategoryCount = category.subcategories?.length || 0;
  const examCount = availableExams.length;
  const totalCount = examCount + subcategoryCount;

  return (
    <Card className="hover:shadow-lg transition-all duration-smooth border-2 hover:border-primary/20">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">{category.icon}</div>
        <CardTitle className="text-xl font-semibold text-card-foreground">
          {category.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {category.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          {subcategoryCount > 0 ? (
            <Badge variant="secondary" className="text-sm">
              {subcategoryCount} {subcategoryCount === 1 ? 'subcategory' : 'subcategories'}
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-sm">
              {examCount} {examCount === 1 ? 'exam' : 'exams'} available
            </Badge>
          )}
        </div>
        <Button 
          onClick={() => onViewExams(category)} 
          className="w-full"
          disabled={totalCount === 0}
        >
          {totalCount === 0 ? 'Coming Soon' : subcategoryCount > 0 ? 'View Categories' : 'View Exams'}
        </Button>
      </CardContent>
    </Card>
  );
}
