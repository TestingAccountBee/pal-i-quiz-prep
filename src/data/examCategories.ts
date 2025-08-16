import { ExamCategory } from '@/types/examCategory';

export const examCategories: ExamCategory[] = [
  {
    id: 'pal',
    title: 'Professional Agile Leadership (PAL)',
    description: 'Leadership skills for Agile environments',
    examIds: ['pal1-mock-1', 'pal1-mock-2', 'pal1-mock-3', 'pal1-mock-4', 'pal1-mock-5'],
    color: 'bg-blue-500',
    icon: '👥'
  },
  {
    id: 'pspo',
    title: 'Professional Scrum Product Owner (PSPO)',
    description: 'Product ownership and value maximization',
    examIds: [],
    color: 'bg-green-500',
    icon: '📋'
  },
  {
    id: 'psm',
    title: 'Professional Scrum Master (PSM)',
    description: 'Scrum framework mastery and team facilitation',
    examIds: [],
    color: 'bg-purple-500',
    icon: '🎯'
  },
  {
    id: 'pal-ebm',
    title: 'Professional Agile Leadership - EBM',
    description: 'Evidence-Based Management for Agile leaders',
    examIds: ['palebm-mock-1', 'palebm-mock-2', 'palebm-mock-3', 'palebm-mock-4', 'palebm-mock-5', 'palebm-mock-6'],
    color: 'bg-orange-500',
    icon: '📊'
  }
];
