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
    subcategories: [
      {
        id: 'pspo-i',
        title: 'PSPO I',
        description: 'Professional Scrum Product Owner Level I certification',
        examIds: [],
        color: 'bg-green-400',
        icon: '📋'
      },
      {
        id: 'pspo-ii',
        title: 'PSPO II',
        description: 'Professional Scrum Product Owner Level II certification',
        examIds: [],
        color: 'bg-green-600',
        icon: '📊'
      },
      {
        id: 'pspo-iii',
        title: 'PSPO III',
        description: 'Professional Scrum Product Owner Level III certification',
        examIds: [],
        color: 'bg-green-800',
        icon: '🎯'
      }
    ],
    color: 'bg-green-500',
    icon: '📋'
  },
  {
    id: 'psm',
    title: 'Professional Scrum Master (PSM)',
    description: 'Scrum framework mastery and team facilitation',
    subcategories: [
      {
        id: 'psm-i',
        title: 'PSM I',
        description: 'Professional Scrum Master Level I certification',
        examIds: [],
        color: 'bg-purple-400',
        icon: '🎯'
      },
      {
        id: 'psm-ii',
        title: 'PSM II',
        description: 'Professional Scrum Master Level II certification',
        examIds: ['psm-ii-mock-1', 'psm-ii-mock-2', 'psm-ii-mock-3', 'psm-ii-mock-4', 'psm-ii-mock-5', 'psm-ii-mock-6', 'psm-ii-mock-7', 'psm-ii-mock-8', 'psm-ii-mock-9', 'psm-ii-mock-10', 'psm-ii-mock-11'],
        color: 'bg-purple-600',
        icon: '🚀'
      },
      {
        id: 'psm-iii',
        title: 'PSM III',
        description: 'Professional Scrum Master Level III certification',
        examIds: [],
        color: 'bg-purple-800',
        icon: '👑'
      }
    ],
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
