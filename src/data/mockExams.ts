import { Exam } from '@/types/exam';

// Mock data for PAL I certification exams
export const mockExams: Exam[] = [
  {
    id: 'pal1-mock-1',
    title: 'PAL I Mock Exam #1',
    description: 'Professional Agile Leadership I practice exam covering foundational agile and scrum concepts.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q1_1',
        question: 'What is the primary purpose of the Sprint Review?',
        options: [
          'To inspect the Increment and adapt the Product Backlog',
          'To plan the next Sprint',
          'To review team performance',
          'To assign tasks to team members'
        ],
        correctAnswer: 0,
        explanation: 'The Sprint Review is an opportunity to inspect the Increment and adapt the Product Backlog based on feedback.'
      },
      {
        id: 'q1_2',
        question: 'Who is responsible for managing the Product Backlog?',
        options: [
          'The Scrum Master',
          'The Development Team',
          'The Product Owner',
          'The Stakeholders'
        ],
        correctAnswer: 2,
        explanation: 'The Product Owner is solely responsible for managing the Product Backlog.'
      },
      {
        id: 'q1_3',
        question: 'What is the recommended size for a Development Team?',
        options: [
          '3 to 9 people',
          '5 to 12 people',
          '7 to 15 people',
          'No specific size recommendation'
        ],
        correctAnswer: 0,
        explanation: 'The Development Team should be small enough to remain nimble and large enough to complete significant work within a Sprint, typically 3-9 people.'
      },
      {
        id: 'q1_4',
        question: 'What does it mean for a Development Team to be "cross-functional"?',
        options: [
          'Team members can switch roles at any time',
          'The team has all the skills necessary to create a product Increment',
          'The team works on multiple projects simultaneously',
          'The team reports to multiple managers'
        ],
        correctAnswer: 1,
        explanation: 'Cross-functional means the team has all the skills necessary to create a product Increment without depending on others outside the team.'
      },
      {
        id: 'q1_5',
        question: 'When does the next Sprint begin?',
        options: [
          'After the Sprint Review',
          'After the Sprint Retrospective',
          'Immediately after the previous Sprint ends',
          'One week after the previous Sprint ends'
        ],
        correctAnswer: 2,
        explanation: 'A new Sprint starts immediately after the conclusion of the previous Sprint.'
      }
      // Note: In real implementation, you would have 40 questions per exam
    ]
  },
  {
    id: 'pal1-mock-2',
    title: 'PAL I Mock Exam #2',
    description: 'Advanced concepts in agile leadership and organizational transformation.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q2_1',
        question: 'What is the purpose of the Daily Scrum?',
        options: [
          'To report progress to management',
          'To plan the day ahead and identify impediments',
          'To review completed work',
          'To assign new tasks'
        ],
        correctAnswer: 1,
        explanation: 'The Daily Scrum is for the Development Team to synchronize activities and create a plan for the next 24 hours.'
      },
      {
        id: 'q2_2',
        question: 'Who can cancel a Sprint?',
        options: [
          'The Scrum Master',
          'The Development Team',
          'The Product Owner',
          'Any stakeholder'
        ],
        correctAnswer: 2,
        explanation: 'Only the Product Owner has the authority to cancel a Sprint if the Sprint Goal becomes obsolete.'
      },
      {
        id: 'q2_3',
        question: 'What is the time-box for the Sprint Planning meeting in a one-month Sprint?',
        options: [
          '4 hours',
          '6 hours',
          '8 hours',
          '12 hours'
        ],
        correctAnswer: 2,
        explanation: 'Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint.'
      },
      {
        id: 'q2_4',
        question: 'Which statement best describes the Sprint Goal?',
        options: [
          'It is created during Sprint Planning',
          'It provides guidance to the Development Team',
          'It gives the Sprint purpose and focus',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'The Sprint Goal is created during Sprint Planning, provides guidance to the Development Team, and gives the Sprint purpose and focus.'
      },
      {
        id: 'q2_5',
        question: 'What is the main reason for keeping the Daily Scrum time-boxed to 15 minutes?',
        options: [
          'To keep costs down',
          'To ensure the meeting stays focused and efficient',
          'To fit into busy schedules',
          'To allow time for other meetings'
        ],
        correctAnswer: 1,
        explanation: 'The 15-minute time-box ensures the Daily Scrum stays focused and efficient, encouraging concise communication.'
      }
    ]
  },
  {
    id: 'pal1-mock-3',
    title: 'PAL I Mock Exam #3',
    description: 'Leadership challenges and agile coaching scenarios.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q3_1',
        question: 'What is empiricism in Scrum?',
        options: [
          'Making decisions based on past experience',
          'Making decisions based on what is known and experienced',
          'Following predetermined plans strictly',
          'Using complex theoretical models'
        ],
        correctAnswer: 1,
        explanation: 'Empiricism means making decisions based on what is known and experienced, using transparency, inspection, and adaptation.'
      }
    ]
  },
  {
    id: 'pal1-mock-4',
    title: 'PAL I Mock Exam #4',
    description: 'Scaling agile and organizational design patterns.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q4_1',
        question: 'What are the three pillars of empiricism in Scrum?',
        options: [
          'Planning, Monitoring, Controlling',
          'Transparency, Inspection, Adaptation',
          'People, Process, Technology',
          'Vision, Strategy, Execution'
        ],
        correctAnswer: 1,
        explanation: 'The three pillars of empiricism are Transparency, Inspection, and Adaptation.'
      }
    ]
  },
  {
    id: 'pal1-mock-5',
    title: 'PAL I Mock Exam #5',
    description: 'Comprehensive review covering all PAL I domains and competencies.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q5_1',
        question: 'What is the maximum length of a Sprint?',
        options: [
          '2 weeks',
          '1 month',
          '6 weeks',
          '3 months'
        ],
        correctAnswer: 1,
        explanation: 'Sprints are limited to one calendar month or less to ensure predictability and reduce risk.'
      }
    ]
  }
];