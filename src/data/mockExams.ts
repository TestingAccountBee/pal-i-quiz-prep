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
        question: 'Creating an environment where Agility is supported and helping remove impediments blocking teams is a critical responsibility of an Agile leader.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Agile leaders are primarily serving leaders who help their teams improve by supporting good Agile working practices and, most importantly, interceding on their behalf when they need help to remove impediments. Shipping/Delivering a valuable product should be the metric used to measure success.'
      },
      {
        id: 'q1_2',
        question: 'Technical debt is any shortcomings in the code that makes it less than "good enough" (technical shortcuts and brittle or outdated legacy applications) that creates risks in the future. Which of the following statements is true about technical debt?',
        options: [
          'Technical debt is a threat to the long-term viability of a product.',
          'Technical debt can be handled after delivery during the maintenance period.',
          'The amount of technical debt is a representation of the quality of the development practices.',
          'Only the developers need to be concerned with technical debt.'
        ],
        correctAnswer: 0,
        explanation: 'Technical debt is any shortcoming in the solution that makes it less than "good enough" and might create problems in the future. Technical debt will always exist and cannot be completely eliminated as it is a natural byproduct of working in complex environments thus may not be a sign of poor practices. When there\'s a lot of technical debt, the velocity might decrease in the future because developers have to deal with the shortcomings.'
      },
      {
        id: 'q1_3',
        question: 'The primary benefit of an Agile approach as compared to a traditional plan-based approach is to improve the ability of a team to deliver on-time, on-budget, and on-scope.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'The primary benefit of an Agile approach as compared to a traditional plan-based approach is to deliver business value by improving customer outcomes. In the course of frequent product deliveries and empirical feedback, an Agile team will learn what customers really need, which may not align with the original scope of the release.'
      },
      {
        id: 'q1_4',
        question: 'There are benefits in both an Agile approach and a waterfall approach. The primary benefit for both can be different. What is the primary benefit of an Agile approach?',
        options: [
          'To deliver the scope on-time and on-budget.',
          'To maximize efficiency.',
          'To minimize risks.',
          'To maximize value.'
        ],
        correctAnswer: 3,
        explanation: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software. Agile approaches moves the focus from the process towards the outcomes of the process.'
      },
      {
        id: 'q1_5',
        question: 'You are a Scrum Master for a Scrum Team. The Developers are having a disagreement on an objective of a particular requirement for an item they are currently working on. They are unable to come to an agreement on the purpose of the requirement and whether it is necessary or not. You observe that the conversation is starting to get heated and an argument will soon occur. As a Scrum Master, which would be the best approach?',
        options: [
          'You ask the team to vote and let them take ownership of the decision.',
          'You ask the Business Analyst for more information and update the User Story accordingly.',
          'You ask the Developers to work on a different item and discuss at Retrospective on how to improve Sprint Planning.',
          'You facilitate a meeting between the Product Owner and Developers to help clarify the requirements for the item.'
        ],
        correctAnswer: 3,
        explanation: 'The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps members of the Scrum Team understand which of their interactions are helpful and which aren\'t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.'
      },
      {
        id: 'q1_6',
        question: 'You are the manager in charge of the product development department in your organization. During one of the Sprint Reviews, the Product Owner communicates with you that the Scrum Team was not able to complete all of the items in the Sprint Backlog and that he will ensure that the Developers will commit to completing all Sprint Backlog items in the next Sprint. As the product development manager, what is the most appropriate response?',
        options: [
          'Support the Product Owner and encourage the Developers to find ways to work more efficiently.',
          'Ask a senior engineer, external to the team, to help estimate during the Sprint Planning.',
          'The team should commit to achieving the Sprint Goal rather than trying to make all of the items in the Sprint Backlog done.',
          'Attend the Sprint Retrospective to provide feedback on improvement areas.'
        ],
        correctAnswer: 2,
        explanation: 'The Sprint Goal provides guidance to the Developers on why it is building the Increment. The Sprint Backlog is a forecast on the work needed to realize the Sprint Goal. The Sprint Backlog is an emergent artifact and the work can be adjusted during the Sprint in order to achieve the Sprint Goal.'
      },
      {
        id: 'q1_7',
        question: 'Who manages the progress of work being done during a Sprint?',
        options: [
          'The Product Owner.',
          'The Development Manager.',
          'The Business Analyst.',
          'The Product Manager.',
          'The Developers.',
          'The Scrum Master.'
        ],
        correctAnswer: 4,
        explanation: 'Scrum Teams are structured and empowered by the organization to organize and manage their own work. The Developers track the total work remaining at least for every Daily Scrum to project the likelihood of achieving the Sprint Goal. By tracking the remaining work throughout the Sprint, the Developers can manage their progress.'
      },
      {
        id: 'q1_8',
        question: 'You\'re a Product Owner of a new product initiative to be developed by the organization. The product has multiple internal stakeholders. During a meeting to gather expectations, you observe that the stakeholders are unable to come to an agreement on the target users and the primary objective of the product. As a Product Owner, which is the best way to help the stakeholders with alignment?',
        options: [
          'Ask the Developers to start working on the infrastructure and architecture while you work with the stakeholders to finalize the product requirements.',
          'Work with the stakeholders to finalize the product requirements before forming the Scrum Team.',
          'Work with the primary stakeholder to create and prioritize the Product Backlog.',
          'Gather market insights by iteratively and incrementally building and delivering selective elements of the product. Share the results of the experiments with the stakeholders.'
        ],
        correctAnswer: 3,
        explanation: 'Complex products requires experimentation as the cause and effect can only be deduced in retrospect. There\'s no singular method that leads to guaranteed success. The outcomes of earlier experiments plays a crucial role in making product decisions and deciding on the direction.'
      },
      {
        id: 'q1_9',
        question: 'You are a leader in an Agile organization. You are trying to gain information regarding future work that will be done for the product, including technical enhancements suggested by the Developers. How should you do this?',
        options: [
          'Consult with the Product Owner and ask about the Product Backlog, as the Product Backlog contains the current state and current intended ordering of all future items to be worked on for the product.',
          'Attend the Daily Scrum and ask the team each day to update you on the status of their tasks.',
          'Consult with the Scrum Master and ask about status changes to the teams goals. The Scrum Master should be tracking all the work that the Developers perform and should be able to provide regular updates.',
          'Ensure that you are attending the Sprint Retrospective each Sprint so that you can ask questions to the Developers on their planned goals and improvement activities.'
        ],
        correctAnswer: 0,
        explanation: 'The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product. The Product Owner is responsible for the Product Backlog, including its content, availability, and ordering and would be the best person to provide information on the contents.'
      },
      {
        id: 'q1_10',
        question: 'You manage the product development department in your organization. Some of your teams will require a new testing environment that replicates production in order to perform User Acceptance Testing (UAT) during development. Current policies stipulate that UAT environments are only available when all other stages of development activities has been completed. UAT is the last stage before before making the done work shippable. Which would be the best two strategies?',
        options: [
          'You help them find someone who can help them with setting up testing and simulation tools that can partially emulate the User Acceptance Test environment needed.',
          'Add additional time to the end of the project schedule that mainly focuses on UAT testing and support. Set stakeholder expectations accordingly.',
          'Work with the teams to create a business proposal in order to acquire the necessary environments and provide the funding for the additional headcount for UAT testing.',
          'They should make do with their current test environment, simulating production as much as possible, and doing as much User Acceptance Testing as they can within it.'
        ],
        correctAnswer: 0,
        explanation: 'The team should try to find a way to work with the current limitations if an external solution is not possible. Help the team collaborate with other people to help come up with a solution. Adding additional time or budget takes focus away from solving the core problem which is creating potentially shippable increments. (Note: This is a multiple correct answer question with options A and D both being correct)'
      },
      {
        id: 'q1_11',
        question: 'Which one of the following best describes the Product Owner?',
        options: [
          'Product Owner that constantly changes the requirements.',
          'The Product Owner isn\'t very important to the Scrum Team.',
          'A single long-serving Product Owner with subject matter expertise in the product that is being developed.'
        ],
        correctAnswer: 2,
        explanation: 'An ideal Product Owner would be a single long-serving Product Owner with subject matter expertise in the product that is being developed. A team with a Product Owner does not constantly changes opinions. He / she keeps up with the market changes and provides a single vision to the team using the Product Backlog and Product Goals.'
      },
      {
        id: 'q1_12',
        question: 'You are a manager in an Agile organization. You need a way to measure how much business value each Scrum Team is producing in order to manage stakeholder expectations. How do you go about measuring the value produced by each team?',
        options: [
          'Compare the velocity of each Scrum Team. Those with the highest average Story Points completed per Sprint is producing the most value.',
          'Consult with the Scrum Master of each Scrum Team. As the person who spends the most time with the Developers, they are best suited to help provide you with the information you seek.',
          'Consult with the Product Owners of the teams. As the person responsible for managing the members on the Scrum Team, they are best suited to help provide you with the information you seek.',
          'Consult with the Product Owners of the teams. As the person responsible of maximizing the value of the Scrum Teams\' work, they are best suited to help provide you with the information you seek.'
        ],
        correctAnswer: 3,
        explanation: 'The Product Owner is the sole person responsible for managing the Product Backlog to ensure the value of the product resulting from the work of the Developers is maximized. How this is done may vary widely across organizations, Scrum Teams, and individuals so directly consulting with them will provide the most accurate information on value produced and projected value that will be worked on.'
      },
      {
        id: 'q1_13',
        question: 'As an Agile leader, your most important responsibility is to define the product goals for the team and hold everyone accountable for meeting the goals.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'As an Agile leader, defining product goals and ensuring accountability are indeed vital aspects of the role, but they represent just one facet of a multifaceted leadership approach. In addition to setting clear objectives and holding team members accountable, Agile leadership encompasses a broader spectrum of responsibilities.'
      },
      {
        id: 'q1_14',
        question: 'Who is responsible for resolving issues if a Scrum Team is continuously failing to deliver shippable increments by the end of the Sprints?',
        options: [
          'The Delivery Manager.',
          'The Scrum Master.',
          'The CEO.',
          'The Developers.',
          'The Scrum Team.',
          'The Product Owner.'
        ],
        correctAnswer: 4,
        explanation: 'In Scrum, the term "Scrum Team" encompasses the Developers, Scrum Master, and Product Owner collectively. Therefore, when referring to responsibility for resolving issues related to failing to deliver shippable increments, it is the responsibility of the Scrum Team as a whole, which includes both the Developers and the Scrum Master, with support and collaboration from the Product Owner.'
      },
      {
        id: 'q1_15',
        question: 'Agile Maturity Is a result of Role Maturity.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'People in key Scrum roles, like Scrum Masters, Product Owners, and Developers, need to understand their responsibilities well. When they do, they help the team work better, follow Scrum properly, and keep improving. But Agile maturity isn\'t just about individuals doing their jobs well.'
      },
      {
        id: 'q1_16',
        question: 'Which of the following statements does not support an Agile way of thinking? (Choose all that apply)',
        options: [
          'The lack of upfront planning results in most failures in product development.',
          'Predictability is the most important factor in project success.',
          'A sign of a good project manager is the ability to follow the plan.',
          'The level of unpredictability is a sign that someone has not invested enough time in upfront planning.',
          'Working on complex problems is often unpredictable and unexpected things will occur. The best approach is to learn from them.'
        ],
        correctAnswer: 0,
        explanation: 'Complex contexts are often unpredictable, and the best approach here is to "Probe – Sense – Respond." Rather than trying to control the situation or insisting on a plan of action, it\'s often best to be patient, look for patterns, and encourage a solution to emerge. (Note: This is a multiple correct answer question - options A, B, C, and D are all correct)'
      },
      {
        id: 'q1_17',
        question: 'As a Development Manager overseeing 5 Scrum Teams in an Agile organization, tasked with reducing costs, how would you evaluate the value generated by each Scrum Team to determine the potential removal of two teams?',
        options: [
          'Disband teams without considering the potential impact on ongoing projects or future workloads.',
          'Assess the teams based solely on their seniority or experience levels.',
          'Evaluate teams based solely on qualitative factors, disregarding quantitative performance metrics.',
          'Evaluate the teams based on their throughput and efficiency metrics, such as Sprint velocity, cycle time, and Sprint burndown. Identify teams with consistently lower performance or higher inefficiencies.',
          'Eliminate teams working on projects with less visible impact or immediate returns.',
          'Remove the teams with the lowest headcount, assuming they are less valuable.'
        ],
        correctAnswer: 3,
        explanation: 'In assessing the value of Scrum Teams to reduce costs, it\'s crucial to employ metrics that objectively evaluate their performance and efficiency. The most effective approach involves analyzing quantitative measures such as throughput, cycle time, and Sprint burndown.'
      },
      {
        id: 'q1_18',
        question: 'A good way to support empiricism is to deliver a solution and gather feedback on the solution and then decide on the next best action.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Supporting empiricism, which is a fundamental principle of Agile methodologies, involves making decisions based on empirical evidence, observation, and experimentation rather than speculation or assumptions. One effective way to support empiricism is by delivering a solution or increment of work and gathering feedback on its performance and impact in the real world.'
      },
      {
        id: 'q1_19',
        question: 'Which of the following activities is most effective for a Scrum Master to help the Scrum Team work at its highest productivity level possible?',
        options: [
          'Make sure that the Scrum events start and end on-time.',
          'Causing the removal of impediments to the Scrum Team\'s progress and facilitating its decisions when requested.',
          'Keeping high value items at the top of the Product Backlog.',
          'Ensuring that no changes are made to the scope of the Sprint Backlog once development begins.',
          'Managing the Daily Scrum.'
        ],
        correctAnswer: 1,
        explanation: 'The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide. The Scrum Master serves the Scrum Team by causing the removal of impediments to the Scrum Team\'s progress and facilitating as requested or needed.'
      },
      {
        id: 'q1_20',
        question: 'Which of the following is not a principle from the Manifesto for Agile Software Development?',
        options: [
          'The most efficient and effective method of conveying information to and within a Scrum Team is via comprehensive documentation.',
          'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
          'Business people and developers must work together daily throughout the project.',
          'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.'
        ],
        correctAnswer: 0,
        explanation: 'We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan.'
      },
      {
        id: 'q1_21',
        question: 'The average amount of work done is an effective method of comparing performance between teams.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Focusing on the value the teams deliver and removing impediments that hinder their performance is more important than comparing performance between teams. Each team faces different challenges and work in different contexts so comparing teams is impossible, leads to unhealthy behaviors, and draws focus away from maximizing value produced.'
      },
      {
        id: 'q1_22',
        question: 'The value a team produces is measured by the team\'s velocity.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Velocity tells you only how many units of work were completed, not whether that work was valuable. Instead of focusing on productivity, look at the business value that the team is delivering. To improve their ability to deliver business value, focus on removing impediments that block the team.'
      },
      {
        id: 'q1_23',
        question: 'You are the Director of Customer Service in your organization. Several customers have been complaining about a missing feature in the product. When meeting with the Product Owner, you ask if he can include this feature in the next release. He responds that he feels the currently planned features are more important for the business at the moment. You believe that he may not have enough information to make this decision. As the Director of Customer Service, what should you do?',
        options: [
          'Allocate a separate team to address customer requests so not to impact the current release schedule or interrupt the Developers.',
          'Ask the Scrum Master to persuade the Product Owner to include the feature in the next Sprint.',
          'Get support from the Developers who you think may support your opinion in order to persuade the Product Owner.',
          'Get support from the Head of Product in order to include the feature to the next release.',
          'Ask to the Product Owner if he would like help to connect with the customers to understand the problems they are currently having but let him decide whether or not to engage.'
        ],
        correctAnswer: 4,
        explanation: 'For the Product Owner to succeed, the entire organization must respect his or her decisions. The Product Owner is responsible for maximizing the value of the product resulting from the work of the Developers.'
      },
      {
        id: 'q1_24',
        question: 'What best describes a responsibility of the Scrum Master?',
        options: [
          'Being a servant/leader in order to help Scrum Team increase effectiveness in delivering product increments.',
          'Managing the project and ensuring that the work adheres to the committed timelines.',
          'Managing the stakeholders perceptions.',
          'Managing the work of each Developer on the Scrum Team.',
          'Maximizing the flow of value performed by the Scrum Team.'
        ],
        correctAnswer: 0,
        explanation: 'The Scrum Master removes impediments and facilitates when requested or needed in order to help the team become more effective at delivering the right thing at the right time.'
      },
      {
        id: 'q1_25',
        question: 'What does the Unrealized Value (UV) Key Value Area from the Evidence Based Management framework of Scrum page reveals?',
        options: [
          'Projected revenue for the next financial year.',
          'The potential future value that could be realized if the organization was able to approximately meet the needs of the high revenue customers only.',
          'The potential future value that could be realized if the organization was able to perfectly meet the needs of all potential customers.',
          'The planned revenue uplift expected in the next 12 months from scheduled new features to be delivered.'
        ],
        correctAnswer: 2,
        explanation: 'The concept of Unrealized Value (UV) in the Evidence-Based Management framework of Scrum provides organizations with a lens through which to view the untapped potential within their market. UV represents the hypothetical future value that could be achieved if the organization perfectly met the needs of all potential customers.'
      },
      {
        id: 'q1_26',
        question: 'Your organization is looking to hire a new Product Owner for a Scrum Team. You are the Agile leader and the recruitment department has asked you for feedback on the following job description before publishing it to their job board. What would be the most appropriate regarding Product Owner\'s job description? (Choose the best two answers)',
        options: [
          'Proficiency in software development languages and frameworks.',
          'Strong collaboration and communication skills, able to work closely with stakeholders to gather and prioritize requirements.',
          'Ability to micromanage and dictate tasks to the Developers.',
          'Minimal interaction with stakeholders and end-users.',
          'Experience in project management methodologies.',
          'Demonstrated experience in product management, including defining product vision, roadmap, and release planning.'
        ],
        correctAnswer: 1,
        explanation: 'The correct answers highlight the significance of product management abilities and collaboration with stakeholders, aligning well with the Product Owner role in Scrum. Product Owners should possess a clear comprehension of the product vision, roadmap, and release planning to effectively guide the Developers. (Note: This is a multiple correct answer question with options B and F both being correct)'
      },
      {
        id: 'q1_27',
        question: 'You are a Team Leader of a Scrum Team. You are leading a team with an average velocity of 35 points per Sprint. Another team of the same size in your organization is working on a project. The other team\'s velocity is averaging 50 points per Sprint. What should you do as a Team Leader?',
        options: [
          'Hire more people to get the work done.',
          'Work overtime.',
          'Nothing.',
          'Perform affinity estimating to check their estimates, since they should be missing something.'
        ],
        correctAnswer: 2,
        explanation: 'Velocity is the amount of work a Scrum Team can tackle during a Sprint and is the key metric in Scrum. Comparing team performance often leads to unhealthy behaviors. All teams face different challenges, they work on different contexts. As a Team leader you should help them remove their impediments so they can get their velocity increased.'
      },
      {
        id: 'q1_28',
        question: 'You are a manager at an organization that develops and provides products and services for customers. The head of product development initiatives has asked you to provide a plan and schedule for what will be delivered for the upcoming year. As a manager, what is the best way to proceed?',
        options: [
          'Work with the Product Owner(s) to analyze current delivery capabilities of the teams and create a projected forecast based on the data to illustrate what might be achievable.',
          'Provide a plan based on your current knowledge and negotiate with the Scrum Teams during the implementation.',
          'Ask the Scrum Teams to standardize Story Points so that you can provide the estimates for the plan without interrupting the teams.',
          'Work with the technical architect or technical leads to estimate the plan using a Gantt chart.'
        ],
        correctAnswer: 0,
        explanation: 'This approach emphasizes collaboration with the Product Owner(s) to assess the team\'s current delivery capabilities and create a realistic forecast based on empirical data. It aligns with Agile principles by involving key stakeholders in the planning process and leveraging data-driven insights to inform decision-making.'
      },
      {
        id: 'q1_29',
        question: 'Which statements are correct when four teams are working on a product? (Choose the best three answers)',
        options: [
          'There can be multiple Product Backlogs.',
          'There are multiple Sprint Backlogs each Sprint.',
          'There can be multiple Scrum Masters.',
          'There is only one Sprint Backlog each Sprint.',
          'There can be multiple Product Owners.',
          'There is only one Product Backlog.'
        ],
        correctAnswer: 1,
        explanation: 'Product Owners is one person not a committee and he/she owns one single Product Backlog. Each team has separate Sprint Backlog and Scrum Events and a single one Product Owner assists each one of them. (Note: This is a multiple correct answer question with options B, C, and F all being correct)'
      },
      {
        id: 'q1_30',
        question: 'You are a Team Leader of a team. Two Developers of your team argue regarding a solution of an item in the Product Backlog. What should be done to address this issue?',
        options: [
          'You should assess the level of conflict and intervene appropriately.',
          'The team should gather to discuss the issue and come up with a collective solution.',
          'The Scrum Master should resolve the issue, since it is becoming an impediment to progress.',
          'The Product Manager should be consulted.',
          'The Product Owner should be consulted.'
        ],
        correctAnswer: 1,
        explanation: 'When issues arise between members on a Scrum Team, they should have the courage to face them and have open, honest, and respectful conversations of the problem and come to a conclusion. On an Agile team, it is up to the team members to resolve their technical disputes collectively.'
      },
      {
        id: 'q1_31',
        question: 'Your organization is selling a digital product for customers. You manage the department that is responsible for developing and maintaining the product. A sales executive comes to the Product Owner requesting for a specific feature to be added to the product in order to sign a deal with one of her customers. The Product Owner understands the need but believes that there are more valuable items on the Product Backlog that will lead to more long-term value to the business. Disappointed, the sales executive comes to you asking you to intervene. As the manager of the development department, how do you respond?',
        options: [
          'Persuade the Product Owner to implement the feature anyway because it will close a deal.',
          'Ask directly to the Developers to implement the feature if they have unused time during the Sprint.',
          'Lobby other stakeholders to express support for adding the feature, to put more pressure on the Product Owner.',
          'Support the Product Owner\'s decision to focus on broader market needs in the long run, even though it may mean loss of short-term business.'
        ],
        correctAnswer: 3,
        explanation: 'For the Product Owner to succeed, the entire organization must respect his or her decisions. The Product Owner is responsible for maximizing the value of the product resulting from the work of the Developers.'
      },
      {
        id: 'q1_32',
        question: 'An Agile approach is more effective at managing risk than a traditional approach.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'The risk of delivering the wrong product to your customer increases the longer you wait to receive feedback about that product. Agile product delivery aims to deliver a working product to the customer early and in smaller increments, allowing teams to correct course before valuable time and effort are invested to deliver a product that does not meet the customers expectations.'
      },
      {
        id: 'q1_33',
        question: 'Which of the following are not Product Owner\'s responsibilities? (Choose all that apply)',
        options: [
          'Updating and managing the stakeholders.',
          'Managing the Product Backlog.',
          'Managing the Developers.',
          'Optimizing the value of the items that the Developers are or will be working on.'
        ],
        correctAnswer: 0,
        explanation: 'The Product Owner is the primary role responsible for releasing the most valuable product possible resulting from work of the Developers. He/she does this by maximizing the flow of value throughout the development process and provide transparency on the overall progress. The Product Owner is also managing the Product Backlog. (Note: This is a multiple correct answer question with options A and C both being correct)'
      },
      {
        id: 'q1_34',
        question: 'Improving team utilization is a good reason for keeping a team together for a long period of time.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'High utilization doesn\'t always result in Agility. Better reasons for keeping a team together would be improving collaboration, consistent forecasting, improving focus, and increased knowledge sharing.'
      },
      {
        id: 'q1_35',
        question: 'Investing additional time in upfront planning (before beginning a project) will increase the chances of success.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'When addressing complex adaptive problems or products, such as those encountered in Agile and Scrum environments, the level of uncertainty is often highest at the beginning of the project. This is because there is limited information available, and the full extent of the challenges and requirements may not be fully understood.'
      },
      {
        id: 'q1_36',
        question: 'You are coaching an Agile Team, what would you expect the team members to do?',
        options: [
          'Report their impediments during Daily Scrum event.',
          'Figure out everything by themselves.',
          'Report any issues to you.',
          'Try their best to remove any impediments by themselves as the work proceeds.'
        ],
        correctAnswer: 3,
        explanation: 'Agile team members are expected to solve most of their technical problems collectively as the work proceeds. They don\'t try to figure out everything on their own. Agile team members also would not bring their problems to their coach on a daily basis, since most of such problems would be solved by the team\'s collective technical expertise and diverse viewpoints.'
      }
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