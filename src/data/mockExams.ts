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
        question: 'Technical debt is any shortcomings in the code that makes it less than "good enough" (technical shortcuts and brittle or outdated legacy applications) that creates risks in the future. Which of the following statements is true about technical debt? (Choose the best answer)',
        options: [
          'Technical debt is a threat to the long-term viability of a product.',
          'Technical debt can be handled after delivery during the maintenance period.',
          'The amount of technical debt is a representation of the quality of the development practices.',
          'Only the developers need to be concerned with technical debt.'
        ],
        correctAnswer: 0,
        explanation: 'Technical debt is any shortcoming in the solution that makes it less than "good enough" and might create problems in the future. Technical debt will always exist and cannot be completely eliminated as it is a natural byproduct of working in complex environments thus may not be a sign of poor practices. When there\'s a lot of technical debt, the velocity might decrease in the future because developers have to deal with the shortcomings. On the other hand, this debt might even remain in the final product and make it harder and more expensive to maintain the product. Refactoring is a common way of managing or reducing technical debt. Refactoring is when the code is improved without changing its external behavior. It\'s a good idea for Agile teams to spend some of their capacity on continuous refactoring. Improving the definition of "Done" is the another way of managing technical debt.'
      },
      {
        id: 'q1_3',
        question: 'The primary benefit of an Agile approach as compared to a traditional plan-based approach is to improve the ability of a team to deliver on-time, on-budget, and on-scope.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'The primary benefit of an Agile approach as compared to a traditional plan-based approach is to deliver business value by improving customer outcomes. In the course of frequent product deliveries and empirical feedback, an Agile team will learn what customers really need, which may not align with the original scope of the release. Because of this feedback, they are able to adapt the product based on feedback to provide better customer outcomes with the time and budget available.'
      },
      {
        id: 'q1_4',
        question: 'There are benefits in both an Agile approach and a waterfall approach. The primary benefit for both can be different. What is the primary benefit of an Agile approach? (Choose the best answer)',
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
        question: 'You are a Scrum Master for a Scrum Team. The Developers are having a disagreement on an objective of a particular requirement for an item they are currently working on. They are unable to come to an agreement on the purpose of the requirement and whether it is necessary or not. You observe that the conversation is starting to get heated and an argument will soon occur. As a Scrum Master, which would be the best approach? (Choose the best answer)',
        options: [
          'You ask the team to vote and let them take ownership of the decision.',
          'You ask the Business Analyst for more information and update the User Story accordingly.',
          'You ask the Developers to work on a different item and discuss at Retrospective on how to improve Sprint Planning.',
          'You facilitate a meeting between the Product Owner and Developers to help clarify the requirements for the item.'
        ],
        correctAnswer: 3,
        explanation: 'The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps members of the Scrum Team understand which of their interactions are helpful and which aren\'t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team. The Scrum Master is responsible for helping everyone understand Scrum theory, practices, rules, and values. The Scrum Master is responsible for facilitating when needed and helping the team remove impediments blocking their progress.'
      },
      {
        id: 'q1_6',
        question: 'You are the manager in charge of the product development department in your organization. During one of the Sprint Reviews, the Product Owner communicates with you that the Scrum Team was not able to complete all of the items in the Sprint Backlog and that he will ensure that the Developers will commit to completing all Sprint Backlog items in the next Sprint. As the product development manager, what is the most appropriate response? (Choose the best answer)',
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
        question: 'Who manages the progress of work being done during a Sprint? (Choose the best answer)',
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
        question: 'You\'re a Product Owner of a new product initiative to be developed by the organization. The product has multiple internal stakeholders. During a meeting to gather expectations, you observe that the stakeholders are unable to come to an agreement on the target users and the primary objective of the product. As a Product Owner, which is the best way to help the stakeholders with alignment? (Choose the best answer)',
        options: [
          'Ask the Developers to start working on the infrastructure and architecture while you work with the stakeholders to finalize the product requirements.',
          'Work with the stakeholders to finalize the product requirements before forming the Scrum Team.',
          'Work with the primary stakeholder to create and prioritize the Product Backlog.',
          'Gather market insights by iteratively and incrementally building and delivering selective elements of the product. Share the results of the experiments with the stakeholders.'
        ],
        correctAnswer: 3,
        explanation: 'Complex products requires experimentation as the cause and effect can only be deduced in retrospect. There’s no singular method that leads to guaranteed success. The outcomes of earlier experiments plays a crucial role in making product decisions and deciding on the direction. Short feedback loops from having an idea to gathering user feedback will improve business Agility. Ultimately, the market response will define the value of the work being done.'
      },
      {
        id: 'q1_9',
        question: 'You are a leader in an Agile organization. You are trying to gain information regarding future work that will be done for the product, including technical enhancements suggested by the Developers. How should you do this? (Choose the best answer)',
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
        question: 'You manage the product development department in your organization. Some of your teams will require a new testing environment that replicates production in order to perform User Acceptance Testing (UAT) during development. Current policies stipulate that UAT environments are only available when all other stages of development activities has been completed. UAT is the last stage before before making the done work shippable. Which would be the best two strategies? (Choose the best two answers)',
        options: [
          'You help them find someone who can help them with setting up testing and simulation tools that can partially emulate the User Acceptance Test environment needed.',
          'Add additional time to the end of the project schedule that mainly focuses on UAT testing and support. Set stakeholder expectations accordingly.',
          'Work with the teams to create a business proposal in order to acquire the necessary environments and provide the funding for the additional headcount for UAT testing.',
          'They should make do with their current test environment, simulating production as much as possible, and doing as much User Acceptance Testing as they can within it.'
        ],
        correctAnswer: [0, 3],
        explanation: 'The team should try to find a way to work with the current limitations if an external solution is not possible. Help the team collaborate with other people to help come up with a solution. Adding additional time or budget takes focus away from solving the core problem which is creating potentially shippable increments.'
      },
      {
        id: 'q1_11',
        question: 'Which one of the following best describes the Product Owner? (Choose the best answer)',
        options: [
          'Product Owner that constantly changes the requirements.',
          'The Product Owner isn\'t very important to the Scrum Team.',
          'A single long-serving Product Owner with subject matter expertise in the product that is being developed.'
        ],
        correctAnswer: 2,
        explanation: 'An ideal Product Owner would be a single long-serving Product Owner with subject matter expertise in the product that is being developed. A team with a Product Owner does not constantly changes opinions. He / she keeps up with the market changes and provides a single vision to the team using the Product Backlog and Product Goals. It is alright to change the requirements, but not constantly changing them. If this happens something else might be wrong with the Product Owner or stakeholders.'
      },
      {
        id: 'q1_12',
        question: 'You are a manager in an Agile organization. You need a way to measure how much business value each Scrum Team is producing in order to manage stakeholder expectations. How do you go about measuring the value produced by each team? (Choose the best answer)',
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
        explanation: 'As an Agile leader, defining product goals and ensuring accountability are indeed vital aspects of the role, but they represent just one facet of a multifaceted leadership approach. In addition to setting clear objectives and holding team members accountable, Agile leadership encompasses a broader spectrum of responsibilities. These include creating a compelling vision that aligns with organizational goals, empowering teams to make decisions and take ownership of their work, facilitating collaboration and communication, removing obstacles that hinder progress, supporting continuous improvement through experimentation and learning, and practicing servant leadership by prioritizing the needs of the team. By embracing this holistic approach, Agile leaders foster an environment conducive to innovation, collaboration, and adaptability, ultimately enabling teams to deliver value effectively and achieve sustainable success.'
      },
      {
        id: 'q1_14',
        question: 'Who is responsible for resolving issues if a Scrum Team is continuously failing to deliver shippable increments by the end of the Sprints? (Choose the best answer)',
        options: [
          'The Delivery Manager.',
          'The Scrum Master.',
          'The CEO.',
          'The Developers.',
          'The Scrum Team.',
          'The Product Owner.'
        ],
        correctAnswer: 4,
        explanation: 'In Scrum, the term "Scrum Team" encompasses the Developers, Scrum Master, and Product Owner collectively. Therefore, when referring to responsibility for resolving issues related to failing to deliver shippable increments, it is the responsibility of the Scrum Team as a whole, which includes both the Developers and the Scrum Master, with support and collaboration from the Product Owner. Each member of the Scrum Team plays a role in addressing impediments and ensuring successful delivery.'
      },
      {
        id: 'q1_15',
        question: 'Agile Maturity Is a result of Role Maturity.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'People in key Scrum roles, like Scrum Masters, Product Owners, and Developers, need to understand their responsibilities well. When they do, they help the team work better, follow Scrum properly, and keep improving. But Agile maturity isn’t just about individuals doing their jobs well. It also depends on how the team works together, how the company supports Agile ways of working, and how good the technical setup is. So, while role maturity is important, it’s only one part of what makes a team or organisation truly Agile.'
      },
      {
        id: 'q1_16',
        question: 'Which of the following statements does not support an Agile way of thinking? (Choose all that apply)',
        options: [
          '"The lack of upfront planning results in most failures in product development."',
          '"Predictability is the most important factor in project success."',
          '"A sign of a good project manager is the ability to follow the plan."',
          '"The level of unpredictability is a sign that someone has not invested enough time in upfront planning."',
          '"Working on complex problems is often unpredictable and unexpected things will occur. The best approach is to learn from them."'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Complex contexts are often unpredictable, and the best approach here is to "Probe – Sense – Respond." Rather than trying to control the situation or insisting on a plan of action, it\'s often best to be patient, look for patterns, and encourage a solution to emerge.'
      },
      {
        id: 'q1_17',
        question: 'As a Development Manager overseeing 5 Scrum Teams in an Agile organization, tasked with reducing costs, how would you evaluate the value generated by each Scrum Team to determine the potential removal of two teams? (Choose the best answer)',
        options: [
          'Disband teams without considering the potential impact on ongoing projects or future workloads.',
          'Assess the teams based solely on their seniority or experience levels.',
          'Evaluate teams based solely on qualitative factors, disregarding quantitative performance metrics.',
          'Evaluate the teams based on their throughput and efficiency metrics, such as Sprint velocity, cycle time, and Sprint burndown. Identify teams with consistently lower performance or higher inefficiencies.',
          'Eliminate teams working on projects with less visible impact or immediate returns.',
          'Remove the teams with the lowest headcount, assuming they are less valuable.'
        ],
        correctAnswer: 3,
        explanation: 'In assessing the value of Scrum Teams to reduce costs, it\'s crucial to employ metrics that objectively evaluate their performance and efficiency. The most effective approach involves analyzing quantitative measures such as throughput, cycle time, and Sprint burndown. By identifying teams with consistently lower performance or higher inefficiencies based on these metrics, informed decisions can be made regarding their removal. However, approaches based solely on headcount, seniority, qualitative factors, or project visibility may lead to inaccurate assessments and overlook the broader implications of disbanding teams. Therefore, prioritizing objective performance metrics ensures that decisions are grounded in data and aligned with organizational goals, ultimately enabling cost reduction without sacrificing productivity or effectiveness.'
      },
      {
        id: 'q1_18',
        question: 'A good way to support empiricism is to deliver a solution and gather feedback on the solution and then decide on the next best action.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Supporting empiricism, which is a fundamental principle of Agile methodologies, involves making decisions based on empirical evidence, observation, and experimentation rather than speculation or assumptions. One effective way to support empiricism is by delivering a solution or increment of work and gathering feedback on its performance and impact in the real world. This feedback provides valuable insights into the effectiveness of the solution, identifies areas for improvement, and informs the decision-making process for determining the next best action. By embracing a cycle of delivery, feedback, and adaptation, teams can continuously improve their products or solutions and better meet the needs of their users or customers. Therefore, delivering a solution and gathering feedback before deciding on the next best action aligns with the principles of empiricism in Agile.'
      },
      {
        id: 'q1_19',
        question: 'Which of the following activities is most effective for a Scrum Master to help the Scrum Team work at its highest productivity level possible? (Choose the best answer)',
        options: [
          'Make sure that the Scrum events start and end on-time.',
          'Causing the removal of impediments to the Scrum Team’s progress and facilitating its decisions when requested.',
          'Keeping high value items at the top of the Product Backlog.',
          'Ensuring that no changes are made to the scope of the Sprint Backlog once development begins.',
          'Managing the Daily Scrum.'
        ],
        correctAnswer: 1,
        explanation: 'The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide. The Scrum Master serves the Scrum Team by causing the removal of impediments to the Scrum Team’s progress and facilitating as requested or needed.'
      },
      {
        id: 'q1_20',
        question: 'Which of the following is not a principle from the Manifesto for Agile Software Development? (Choose the best answer)',
        options: [
          'The most efficient and effective method of conveying information to and within a Scrum Team is via comprehensive documentation.',
          'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
          'Business people and developers must work together daily throughout the project.',
          'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.'
        ],
        correctAnswer: 0,
        explanation: 'We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan. Remember the most efficient method of communications within a Scrum Team is face-to-face communication.'
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
        question: 'You are the Director of Customer Service in your organization. Several customers have been complaining about a missing feature in the product. When meeting with the Product Owner, you ask if he can include this feature in the next release. He responds that he feels the currently planned features are more important for the business at the moment. You believe that he may not have enough information to make this decision. As the Director of Customer Service, what should you do? (Choose the best answer)',
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
        question: 'What best describes a responsibility of the Scrum Master? (Choose the best answer)',
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
        question: 'What does the Unrealized Value (UV) Key Value Area from the Evidence Based Management framework of Scrum page reveals? (Choose the best answer)',
        options: [
          'Projected revenue for the next financial year.',
          'The potential future value that could be realized if the organization was able to approximately meet the needs of the high revenue customers only.',
          'The potential future value that could be realized if the organization was able to perfectly meet the needs of all potential customers.',
          'The planned revenue uplift expected in the next 12 months from scheduled new features to be delivered.'
        ],
        correctAnswer: 2,
        explanation: 'The concept of Unrealized Value (UV) in the Evidence-Based Management framework of Scrum provides organizations with a lens through which to view the untapped potential within their market. UV represents the hypothetical future value that could be achieved if the organization perfectly met the needs of all potential customers. By quantifying this potential, UV offers insights into the size of the market opportunity and underscores the importance of aligning products and services with customer needs. It emphasizes a customer-centric approach to product development and delivery, encouraging organizations to prioritize continuous improvement and innovation to better meet customer demands. Understanding UV not only identifies areas for potential growth and expansion but also serves as a catalyst for organizational evolution, prompting a shift towards iterative and adaptive strategies that aim to realize more of the untapped value within the market.'
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
        correctAnswer: [1, 5],
        explanation: 'The correct answers highlight the significance of product management abilities and collaboration with stakeholders, aligning well with the Product Owner role in Scrum. Product Owners should possess a clear comprehension of the product vision, roadmap, and release planning to effectively guide the Developers. Furthermore, robust communication and collaboration skills are indispensable for gathering and prioritizing requirements from stakeholders. Conversely, the incorrect answers propose qualifications that are not directly pertinent to the Product Owner role in Scrum. Proficiency in software development languages and frameworks is typically more suitable for developer roles, while micromanagement and minimal stakeholder interaction are contrary to the collaborative and customer-focused essence of the Product Owner role. Similarly, experience in Waterfall project management methodologies may not harmonize with the Agile principles embraced in Scrum.'
      },
      {
        id: 'q1_27',
        question: 'You are a Team Leader of a Scrum Team. You are leading a team with an average velocity of 35 points per Sprint. Another team of the same size in your organization is working on a project. The other team’s velocity is averaging 50 points per Sprint. What should you do as a Team Leader? (Choose the best answer)',
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
        question: 'You are a manager at an organization that develops and provides products and services for customers. The head of product development initiatives has asked you to provide a plan and schedule for what will be delivered for the upcoming year. As a manager, what is the best way to proceed? (Choose the best answer)',
        options: [
          'Work with the Product Owner(s) to analyze current delivery capabilities of the teams and create a projected forecast based on the data to illustrate what might be achievable.',
          'Provide a plan based on your current knowledge and negotiate with the Scrum Teams during the implementation.',
          'Ask the Scrum Teams to standardize Story Points so that you can provide the estimates for the plan without interrupting the teams.',
          'Work with the technical architect or technical leads to estimate the plan using a Gantt chart.'
        ],
        correctAnswer: 0,
        explanation: 'This approach emphasizes collaboration with the Product Owner(s) to assess the team\'s current delivery capabilities and create a realistic forecast based on empirical data. It aligns with Agile principles by involving key stakeholders in the planning process and leveraging data-driven insights to inform decision-making. This approach encourages transparency, accountability, and alignment between the development teams and the product vision, leading to a more realistic and achievable plan.'
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
        correctAnswer: [1, 2, 5],
        explanation: 'Product Owners is one person not a committee and he/she owns one single Product Backlog. Each team has separate Sprint Backlog and Scrum Events and a single one Product Owner assists each one of them.'
      },
      {
        id: 'q1_30',
        question: 'You are a Team Leader of a team. Two Developers of your team argue regarding a solution of an item in the Product Backlog. What should be done to address this issue? (Choose the best answer)',
        options: [
          'You should assess the level of conflict and intervene appropriately.',
          'The team should gather to discuss the issue and come up with a collective solution.',
          'The Scrum Master should resolve the issue, since it is becoming an impediment to progress.',
          'The Product Manager should be consulted.',
          'The Product Owner should be consulted.'
        ],
        correctAnswer: 1,
        explanation: 'When issues arise between members on a Scrum Team, they should have the courage to face them and have open, honest, and respectful conversations of the problem and come to a conclusion. On an Agile team, it is up to the team members to resolve their technical disputes collectively. In this particular situation, the coach, Scrum Master, or Product Owner are unlikely to have the knowledge required to make a decision on how to implement a story. Encouraging self-management and convening the team to collectively address issues aligns with Agile principles.'
      },
      {
        id: 'q1_31',
        question: 'Your organization is selling a digital product for customers. You manage the department that is responsible for developing and maintaining the product. A sales executive comes to the Product Owner requesting for a specific feature to be added to the product in order to sign a deal with one of her customers. The Product Owner understands the need but believes that there are more valuable items on the Product Backlog that will lead to more long-term value to the business. Disappointed, the sales executive comes to you asking you to intervene. As the manager of the development department, how do you respond? (Choose the best answer)',
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
        explanation: 'The risk of delivering the wrong product to your customer increases the longer you wait to receive feedback about that product. Agile product delivery aims to deliver a working product to the customer early and in smaller increments, allowing teams to correct course before valuable time and effort are invested to deliver a product that does not meet the customers expectations. In addition, delivering working product on frequent intervals helps a team to manage and reduce technical risk.'
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
        correctAnswer: [0, 2],
        explanation: 'The Product Owner is the primary role responsible for releasing the most valuable product possible resulting from work of the Developers. He/she does this by maximizing the flow of value throughout the development process and provide transparency on the overall progress. The Product Owner is also managing the Product Backlog.'
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
        question: 'You are coaching an Agile Team, what would you expect the team members to do? (Choose the best answer)',
        options: [
          'Report their impediments during Daily Scrum event.',
          'Figure out everything by themselves.',
          'Report any issues to you.',
          'Try their best to remove any impediments by themselves as the work proceeds.'
        ],
        correctAnswer: 3,
        explanation: 'Agile team members are expected to solve most of their technical problems collectively as the work proceeds. They don\'t try to figure out everything on their own. Agile team members also would not bring their problems to their coach on a daily basis, since most of such problems would be solved by the team’s collective technical expertise and diverse viewpoints. Agile team members also don\'t report all their problems during Daily Scrum.'
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
        question: 'What outcome would you expect for a newly formed team that has limited experience in Scrum and members in different countries: 3 in England, 4 in the United States, and 2 in Vietnam? (Choose the best answer)',
        options: [
          'Having the right collaboration tools can make a distributed team as productive as a co-located team.',
          'The cost of delivering the product will be significantly lower than if all team members were together in Vietnam.',
          'The team will likely have communication and knowledge sharing challenges that will require help to resolve.',
          'Having team members in multiple locations can increase productivity because the number of hours utilized per day will be increased.'
        ],
        correctAnswer: 2,
        explanation: 'One of the Agile principles states that the most efficient and effective method of conveying information to and within Developers is face-to-face conversation. Having remote team members adds complexity to collaboration and communication efforts. Facilitating conversations with the members on this issue will allow the team to give feedback and decide on how best to resolve the issue. This may require support from the organization, but ownership of the decision belongs to the team.'
      },
      {
        id: 'q2_2',
        question: 'Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Team Leader how to coordinate their work with the other teams. What should the Team Leader do? (Choose the best answer)',
        options: [
          'Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.',
          'Teach the Product Owner to work with the lead developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint',
          'Visit the five teams each day to inspect that their Sprint Backlogs are aligned',
          'Teach them that it is their responsibility to work with the other teams to create an integrated Increment and as a Team Leader you can help them if needed.'
        ],
        correctAnswer: 3,
        explanation: 'In Scrum, collaboration and integration among teams are crucial for delivering a coherent and integrated product increment. The Team Leader should teach the developers that it is their responsibility to work collaboratively with the other teams to ensure that the product increment is integrated smoothly. The Team Leader can support them in this endeavor if needed but should emphasize that collaboration and integration are key responsibilities of all team members. This approach fosters a culture of teamwork, shared ownership, and collective accountability for delivering value to the customer. Therefore, teaching the developers about their responsibility to collaborate with other teams aligns with Scrum principles and promotes effective cross-team coordination.'
      },
      {
        id: 'q2_3',
        question: 'Scrum Teams should normalize their estimations, so that management can measure and compare their performance.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Scrum Teams should not normalize their estimations solely for the purpose of allowing management to measure and compare their performance. Estimations in Scrum are meant to be relative and based on the team\'s understanding of the work, rather than serving as a metric for performance evaluation. Normalizing estimations to allow for comparison can lead to inaccurate assessments and undermine the principles of self-organization and empiricism in Scrum. Instead, Scrum Teams should focus on delivering value to the customer and continuously improving their processes based on feedback and outcomes, rather than adhering to standardized measurements for management purposes.'
      },
      {
        id: 'q2_4',
        question: 'As a manager of the product development department, what would be the best approach for understanding the status of different teams working on different products? (Choose the best answer)',
        options: [
          'Implement a tool that extracts the different team statuses into a single dashboard.',
          'Work with the teams to develop and agree on a common way to share their Sprint Goals and Sprint progress.',
          'Ask the Product Owners to use a standardized Story Point system across all teams in order to make velocity comparisons easier.',
          'Ask the Scrum Masters for status reports. Let them decide and agree on the frequency and format of the reports.'
        ],
        correctAnswer: 1,
        explanation: 'Agile teams are structured and empowered by the organization to organize and manage their own work. Self-managing teams are responsible for applying the most appropriate practices to provide transparency in order to optimize value, control risk, and manage expectations.'
      },
      {
        id: 'q2_5',
        question: 'A Product Owner\'s responsibilities are best described by which of the following statements? (Choose the best answer)',
        options: [
          'Optimizing the value of the items that the Developers are or will be working on.',
          'Managing the project and ensuring that the work adheres to the commitments made to the stakeholders.',
          'Updating and managing the stakeholders.',
          'Helping the Scrum Team to improve their capabilities to deliver.',
          'Managing the Developers.'
        ],
        correctAnswer: 0,
        explanation: 'The Product Owner is the primary role responsible for releasing the most valuable product possible resulting from work of the Developers. He/she does this by maximizing the flow of value throughout the development process and provide transparency on the overall progress.'
      },
      {
        id: 'q2_6',
        question: 'The primary benefit of an Agile approach is to make it easier to meet short time-to-market schedules.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'One of the primary benefits of an Agile approach is indeed to make it easier to meet short time-to-market schedules. Agile methodologies, such as Scrum, emphasize iterative and incremental development, allowing teams to deliver small increments of value to customers quickly and frequently. By breaking down the project into manageable chunks and prioritizing features based on customer feedback and business value, Agile enables organizations to respond rapidly to changing market demands and deliver products to market faster. This iterative approach facilitates early and continuous delivery of valuable software, reducing time-to-market and increasing the organization\'s ability to adapt to evolving customer needs. Therefore, the statement is true.'
      },
      {
        id: 'q2_7',
        question: 'People with project management backgrounds are best suited as Scrum Masters because they have existing experience with managing projects, tasks, and schedules.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'While individuals with project management backgrounds may possess valuable skills and experience that can benefit them in the role of Scrum Master, it is not necessarily true that they are inherently best suited for the position. Scrum Masters require a unique set of skills and attributes that go beyond traditional project management. They focus on removing impediments, fostering a collaborative team environment, and facilitating communication and decision-making within the team. While project management experience can certainly be helpful in understanding organizational dynamics and managing tasks and schedules, successful Scrum Masters also require strong interpersonal skills, empathy, facilitation skills, and a deep understanding of Agile principles and frameworks.'
      },
      {
        id: 'q2_8',
        question: 'You are the Scrum Master for a new team that has been practicing Scrum for three months. During the Daily Scrum, two out of the six developers seldom contribute to the conversation. When prompted, they communicate in vague, unclear terms. The rest of the Scrum Team members have shown signs of frustration over several Sprints, yet they haven\'t addressed the issue. In managing this situation, which of the following options are preferable? (Choose the best two answers)',
        options: [
          'Have private conversations with the two developers to understand their perspective and address any concerns or obstacles they may be facing that hinder their participation.',
          'Introduce strict rules or penalties for those who do not actively contribute during the Daily Scrum.',
          'Ignore the issue and hope that it resolves itself over time.',
          'Assign specific speaking roles to each team member during the Daily Scrum to ensure equal participation.',
          'Facilitate a discussion during the Sprint Retrospective about the importance of active participation in the Daily Scrum and its impact on team collaboration and progress.',
          'Publicly reprimand the two developers during the Daily Scrum for their lack of participation.'
        ],
        correctAnswer: [0, 4],
        explanation: 'Facilitating a discussion during the retrospective about the importance of active participation in the Daily Scrum and its impact on team collaboration and progress is crucial as it allows the team to collectively address the issue in a constructive manner. Additionally, having private conversations with the two developers to understand their perspective is essential for identifying any underlying concerns or obstacles they may be facing that are hindering their participation.'
      },
      {
        id: 'q2_9',
        question: 'Scrum is only effective when the team is small and the project is limited in scope. Traditional processes are better suited for larger and more complex projects.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Agile approaches, such as Scrum, focuses on achieving outcomes. Traditional approaches, such as waterfall, mainly focuses on the process. One is not better than the other and not comparable. Which approach you use is not dependent on the number of people but rather the objective you want to achieve. When working on complex problems, where there are unknowns and unpredictability, using an empirical approach is optimal. This is the purpose for which Scrum and other Agile approaches are created. Traditional processes work better when there are no unknowns and everything can be predicted upfront.'
      },
      {
        id: 'q2_10',
        question: 'Having complete freedom is a requirement for having self-managing teams.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Teams are governed by organizational standards and policies, as well as the maturity level of the team. More mature teams may be given more authority than less mature teams, but even for the most mature teams, every organization has some rules that everyone must follow.'
      },
      {
        id: 'q2_11',
        question: 'Which of the following is a Key Value Area from the Evidence Based Management framework of Scrum page? (Choose the best three answers)',
        options: [
          'Unrealised Value',
          'Current Value',
          'Desire to Innovate',
          'Customer Satisfaction',
          'Time to Market'
        ],
        correctAnswer: [0, 1, 4],
        explanation: 'The Evidence-Based Management framework of Scrum encompasses three key value areas: Time to Market, Current Value, and Unrealized Value. Time to Market focuses on the efficiency of delivering products or features to the market, emphasizing rapid delivery to gain a competitive edge. Current Value assesses the value currently delivered to customers, reflecting their current satisfaction with the organization\'s offerings. Unrealized Value represents the untapped potential for future value creation if the organization perfectly meets all potential customer needs. Together, these key value areas provide a holistic view of the organization\'s performance.'
      },
      {
        id: 'q2_12',
        question: 'Which is not a measurement of a team\'s level of effectiveness in delivering value to the customer? (Choose the best answer)',
        options: [
          'Trends in technical debt.',
          'Trends in user feedback.',
          'Team velocity and trends in completed Story Points.',
          'How often Sprint Goals are met.'
        ],
        correctAnswer: 2,
        explanation: 'Velocity and capacity is not a measure of value. The speed or amount of effort of the team does not correspond with higher value. Providing value to the customers is more important than number of Story Points delivered. A team with lower velocity may be delivering more value than a team with a high velocity.'
      },
      {
        id: 'q2_13',
        question: 'The Developers are requesting to extend the Sprint an extra 2 days in order to complete the items in the Sprint Backlog. They are worried that management will be upset if they are not able to finish all of the items before the end of the Sprint. As a Product Owner, what should you do? (Choose the best answer)',
        options: [
          'Temporarily extend the Sprint in order to complete all of the items.',
          'Ask the Developers to commit to what was agreed at Sprint Planning and find a solution for the problem.',
          'Do not extend the Sprint and keep original time-box. Work with the stakeholders to explain why transparency and openness are important in an empirical environment.',
          'Ask the Developers to work longer hours to meet the Sprint Goal.',
          'Reduce the testing effort or leave some items incomplete in order to maximize the work in progress.'
        ],
        correctAnswer: 2,
        explanation: 'Time-boxes helps everyone focus on the same problem at the same time and encourages the people who are closest to the problem to create the best possible result in the time allotted, give the current context. The Sprint Backlog is a forecast of functionality that will be developed during the Sprint if completed would achieve the Sprint Goal. If the Developers determine it has too much or too little work, it may renegotiate the selected Product Backlog items with the Product Owner in order to produce a releasable Increment and achieve the Sprint Goal.'
      },
      {
        id: 'q2_14',
        question: 'During a meeting at the outset of a new software development initiative utilizing Scrum, a stakeholder expresses skepticism about the methodology, stating that they do not "believe" in Scrum. They argue that traditional project management, with its fixed deadlines and budgets, mitigates business risk more effectively. They perceive Scrum as lacking these elements, making it a high-risk approach they are unwilling to embrace. What is the best response? (Choose the best answer)',
        options: [
          'Explain that in complex product development, discoveries are made along the way. No guarantees can be given. Risk is inherent to building software.',
          'Provide a vague explanation of Scrum principles without addressing the stakeholder\'s specific concerns about risk management and adherence to deadlines and budgets.',
          'Explain that those traditional approaches always went over budget, time while delivering low value, unmaintainable products.',
          'Explain that Scrum limits risk by frequent inspection and adaptation mechanism, and in every Sprint, a product Increment is created by the Scrum Team, and by doing so, we become able to respond to change and address risk when it occurs.',
          'Dismiss the stakeholder\'s concerns and insist that Scrum is the only viable approach, disregarding their perspective on traditional project management.'
        ],
        correctAnswer: 3,
        explanation: 'It\'s essential to highlight that while Scrum indeed operates differently from traditional project management, it offers distinct advantages in managing complexity, fostering adaptability, and delivering value incrementally. Assure the stakeholder that Scrum provides mechanisms for managing risk through its iterative approach, frequent inspections, and opportunities for course correction. Emphasize the flexibility inherent in Scrum, allowing teams to respond to changing requirements and market dynamics swiftly.'
      },
      {
        id: 'q2_15',
        question: 'The primary benefit of an Agile approach is to make it easier to deliver on-time and within-budget.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'The primary benefit of an Agile approach is not solely about delivering on-time and within-budget, although those are important outcomes. Agile emphasizes adaptability, flexibility, and responsiveness to change, which allows teams to deliver value incrementally and iteratively while responding to evolving customer needs and market dynamics. While on-time delivery and staying within budget are indeed objectives, Agile recognizes that priorities and requirements may change over the course of a project. Therefore, the primary benefit of Agile lies in its ability to deliver value continuously, foster collaboration, and enable teams to adapt quickly to changing circumstances.'
      },
      {
        id: 'q2_16',
        question: 'Which of the following activities will help a team improve its delivery frequency? (Choose all that apply)',
        options: [
          'Reducing dependencies between teams.',
          'Automating the delivery process.',
          'Synchronizing delivery schedules across all teams.',
          'Product Backlog refinement.'
        ],
        correctAnswer: [0, 1, 3],
        explanation: 'Scrum Teams should release early and often, regardless of whether their releases are synchronized or not. Synchronizing release schedules does not guarantee improved productivity. Decreasing dependencies between teams, automating the delivery pipeline, and a healthy Product Backlog will improve autonomy and localized decision making.'
      },
      {
        id: 'q2_17',
        question: 'Which of the following are benefits of cross-functional teams? (Choose all that apply)',
        options: [
          'Having a cross-functional team will reduce external dependencies.',
          'Having a cross-functional team will help team members step outside of their comfort zone to meet the team\'s goals.',
          'Having a cross-functional team will help team members become specialized and develop expertise in a specific function.',
          'Having a cross-functional team will increase opportunities for team members to develop and grow their skills by learning from others within the team.',
          'Having a cross-functional team will increase opportunities of delivering increments that provide value to the users.'
        ],
        correctAnswer: [0, 1, 3, 4],
        explanation: 'To be a cross-functional team, the team has a combined set of skills and competencies to create a product increment. Individuals may have specializations but accountability belongs to the Scrum Team as a whole. Having a cross-functional team will reduce external dependencies and complexity as decisions can be made locally.'
      },
      {
        id: 'q2_18',
        question: 'Which of the following can be used as a measurement of business Agility? (Choose the best answer)',
        options: [
          'The number of Scrum Teams working on the same product. Increasing the number of teams working on a product will produce more value.',
          'The time it takes to go from having an idea to the point where a customer experiences the benefit of that idea, and customer feedback has been gathered.',
          'How much budget was used compared to how much was allocated. Agile teams will deliver projects more quickly with less budget than a traditional team.',
          'The number of change requests during an active Sprint. Reducing the changes to the scope of work helps the team focus on delivering Increments.'
        ],
        correctAnswer: 1,
        explanation: 'Lead Time is a measure of the time it takes to go from having an idea to the point where a customer experiences the benefit of that idea, and customer acceptance feedback has been gathered. This means that Lead Time is a way to measure business Agility. Delivering working software frequently and satisfying the customer through early and continuous delivery helps maximize opportunity for the business to deliver value.'
      },
      {
        id: 'q2_19',
        question: 'Synchronizing release schedules across multiple teams will increase the frequency of delivery.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Synchronizing release schedules across multiple teams does not necessarily guarantee an increase in the frequency of delivery. While it may facilitate coordination and alignment between teams, the frequency of delivery depends on various factors such as the complexity of the product, the size and capability of each team, the maturity of the development process, and the level of automation in the deployment pipeline.'
      },
      {
        id: 'q2_20',
        question: 'The best practice for delivering a fixed set of requirements faster is with an Agile approach.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'It is false because while Agile methodologies prioritize delivering value efficiently, they also emphasize flexibility, adaptability, and responding to change over following a fixed set of requirements. While Agile can often lead to faster delivery due to its iterative and incremental nature, its primary focus is on delivering value to the customer rather than simply completing tasks quickly.'
      },
      {
        id: 'q2_21',
        question: 'Which one of the following statements is correct about the Product Owner? (Choose the best answer)',
        options: [
          'The Product Owner a single person that is empowered by the organization to make product decisions.',
          'The Product Owner should have proficient Project Management experience. The Product Owner role is an extension of the Project Manager role.',
          'The Product Owner is someone from management as they are responsible for influencing the stakeholders and delegating the work according to the schedule.',
          'The Product Owner should have the ability to work on multiple products at the same time. This promotes cross-sharing between different Product Owners and allows teams to have different viewpoints and perspectives.'
        ],
        correctAnswer: 0,
        explanation: 'The Product Owner is one person and is responsible for managing the Product Backlog to ensure the value of the product resulting from the work of the Scrum Team is maximized. For the Product Owner to succeed, the entire organization must respect his or her decisions.'
      },
      {
        id: 'q2_22',
        question: 'You are a manager at an organization that develops and provides products and services for customers. Your organization has 4 Scrum Teams. Over the past several Sprints it has come to your observation that one of the teams is only averaging 15-20 story points per Sprint whereas the other teams are averaging 30-40 story points. Is this something to be worried about? (Choose the best answer)',
        options: [
          'Yes, this is something to be concerned about. The team in question is not following the standardized story points like the other teams.',
          'No, this is not something to be concerned about. The velocity of the team in question will gradually increase over time.',
          'Yes, this is something to be concerned about. The Product Owner of the team in question is not managing the team members effectively.',
          'Yes, this is something to be concerned about. The Scrum Master of the team in question is not maximizing team member utilization.',
          'No, this is not something to be concerned about. Velocity is not a measurement for team performance.',
          'Yes, this is something to be concerned about. The performance of the team in question is lower than the others.'
        ],
        correctAnswer: 4,
        explanation: 'Velocity is a localized measurement and helps the team forecast what they believe they can achieve in the Sprint rather than its performance. Having a high velocity does not reflect in the value of the work being done.'
      },
      {
        id: 'q2_23',
        question: 'It has been a year since the inception of a new product, and you\'ve recently taken on the role of Scrum Master for the team. Throughout this period, the team has consistently delivered working software at the end of each Sprint, albeit without releasing it to the market. However, there is now mounting pressure from internal stakeholders to push for a release within the next two months. Despite this, the Product Owner expresses reservations, deeming the proposed release premature given the substantial work required before she can confidently endorse it, estimating a timeline of at least six months for readiness. In light of these circumstances, and in adherence to Scrum principles, what guidance or support can you provide? (Choose the best two answers)',
        options: [
          'Collaborate with the Product Owner to prioritize the backlog items that are critical for ensuring the product\'s readiness for release, focusing on delivering high-value features that address stakeholders\' concerns and minimize risk.',
          'Advocate for a transparent discussion during the Sprint Review, emphasizing the importance of stakeholders understanding the product\'s current state and the risks associated with an early release.',
          'Suggest conducting the release as planned and then relying on post-release feedback and iterations to address any shortcomings, disregarding the potential impact on customer satisfaction and reputation.',
          'Recommend increasing the scope of work to accommodate the accelerated timeline, potentially compromising the product\'s quality and stability in the rush to meet the release deadline.',
          'Advise the Product Owner to accept the pressure from stakeholders and proceed with the planned release, reassuring them that any issues can be addressed in subsequent updates.',
          'Encourage the team to accelerate their pace of development, disregarding the Product Owner\'s concerns and prioritizing speed over quality and completeness.'
        ],
        correctAnswer: [0, 1],
        explanation: 'Advocating for a transparent discussion during the Sprint Review emphasizes the importance of stakeholders understanding the product\'s current state and the risks associated with an early release. This fosters open communication and allows stakeholders to make informed decisions. Secondly, collaborating with the Product Owner to prioritize backlog items critical for ensuring product readiness demonstrates a commitment to delivering value while mitigating risk. By focusing on high-value features and addressing stakeholders\' concerns, the team can maintain alignment with Scrum principles while navigating external pressures.'
      },
      {
        id: 'q2_24',
        question: 'Agility often requires a change in organizational culture and how individuals, teams, and those around them behave. Which of the following statements would enable positive change? (Choose all that apply)',
        options: [
          'Coach people in Scrum and positive team behavior by gradually embodying the Scrum values.',
          'Guide the Scrum Team members to discover what works best for them.',
          'Coach the Product Owner to focus on quality by expanding the definition of \'Done\' at every Sprint Retrospective.',
          'Enable self-management within Scrum Teams',
          'The Product Owner should focus on Value, Flow and Quality',
          'The Scrum Master of the team acts as a subject matter expert and provides technical solutions to the team.'
        ],
        correctAnswer: [0, 1, 3, 4],
        explanation: 'The cornerstone of Scrum is the Scrum Team, comprising a Scrum Master, a Product Owner, and Developers, without sub-teams or hierarchies. Scrum Teams are characterized by cross-functionality, where each member possesses the skills necessary to deliver value every Sprint, and self-management, allowing them to autonomously determine task allocation and execution. The Scrum Master plays a pivotal role in implementing Scrum principles, guiding the team and organization in understanding and applying Scrum theory and practices. Accountable for the team\'s effectiveness, the Scrum Master fosters continuous improvement within the Scrum framework.'
      },
      {
        id: 'q2_25',
        question: 'A valuable way for management to support the team is by participating in both the Sprint Retrospective and Sprint Planning sessions.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'In traditional Scrum practices, the Sprint Retrospective and Sprint Planning sessions are considered internal meetings for the Scrum Team, which includes the Developers, Scrum Master, and Product Owner. These sessions are designed to facilitate open and candid discussions among team members to reflect on the previous Sprint\'s successes and challenges, as well as to plan the upcoming Sprint\'s work.'
      },
      {
        id: 'q2_26',
        question: 'The primary objective of a product is to provide value for its users/customers. Who is accountable for the value provided by the product? (Choose the best answer)',
        options: [
          'The Developers.',
          'The Scrum Master.',
          'The Management.',
          'The CEO.',
          'The Product Owner.'
        ],
        correctAnswer: 4,
        explanation: 'The Product Owner is the value maximizer and accountable for the value of the product resulting from work of the Developers. For the Product Owner to succeed, the entire organization must respect his or her decisions.'
      },
      {
        id: 'q2_27',
        question: 'A Project Manager working with your Scrum Team has raised concerns about progress and money spent. What are the best responses? (Choose the best two answers)',
        options: [
          'Show the Earned Value Analysis (EVA) report',
          'Have a discussion with the Project Manager; share the current impediments and forecast for the Sprint',
          'Promote transparency by sharing the Product Backlog and ensuring the Project Manager has access',
          'Share the last stakeholder briefing document prepared by the Product Owner',
          'Scrum does not have Project Managers, so disregard their concerns'
        ],
        correctAnswer: [1, 2],
        explanation: 'When a Project Manager working with your Scrum Team raises concerns about progress and expenses, it\'s essential to address them effectively. The best responses would include ensuring transparent communication regarding the team\'s progress, identifying any impediments or bottlenecks affecting productivity, and collaborating to find solutions to improve efficiency. Additionally, providing regular updates on budget utilization and highlighting any deviations from the plan can help in addressing financial concerns.'
      },
      {
        id: 'q2_28',
        question: 'The build up of technical debt (shortcomings in the system) can impact the delivery of value to the customer/user.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'The accumulation of technical debt can manifest itself in ways that slow down the delivery of value to the user/customers because of brittle architectures or because Developers needing to share their focus on support work.'
      },
      {
        id: 'q2_29',
        question: 'Which of the following would help a Scrum Team decrease its effectiveness? (Choose all that apply)',
        options: [
          'Having dedicated team members focused on the work of a single product at a time.',
          'Having teams consisting of cross-functional individuals who have the ability to work in any function and any task needed.',
          'Share different initiatives across multiple teams so that individual members can work on other products when they have no active tasks to do in their current team.',
          'Having teams consisting of specialists that are experts in their function.'
        ],
        correctAnswer: [1, 2, 3],
        explanation: 'The selected options would help decrease the effectiveness of the team. On the other side working on one team allows the team members to mature together and synergize and focusing on one product enables the team to inspect and adapt more effectively than working on multiple products at the same time. In most situations, having a single member working full-time on a single team is more effective than having cross-functional individuals. You would also have the risk of context switching as they would change their function (work domain) throughout a Sprint and that requires extra effort from the individual.'
      },
      {
        id: 'q2_30',
        question: 'John a new Product Owner is hired to work on an existing product that has ongoing for five Sprints. He is unsure about all of the responsibilities of a Product Owner. Which of these Product Owner’s activities are defined in Scrum? (Choose the best answer)',
        options: [
          'Interacting with stakeholders and ensuring that the most valuable functionality is always produced first.',
          'Writing User Stories.',
          'Ensuring work is completed within scope and time.',
          'Describing features as Use Cases.'
        ],
        correctAnswer: 0,
        explanation: 'One of the most important responsibilities of a Product Owner is interacting with stakeholders and ensuring that the most valuable functionality is always produced first and also provide clarifications to the Developers when requested.'
      },
      {
        id: 'q2_31',
        question: 'One of your Developers has a medical issue in the middle of the Sprint. As a Team Leader what should you do? (Choose the best answer)',
        options: [
          'Postpone the release.',
          'Ask the rest of the team to work overtime.',
          'Call his functional manager and request a new Developer for your team.',
          'Ask the team how much of the planned work can be done.'
        ],
        correctAnswer: 3,
        explanation: 'It is alright to discuss with the team how much of the planned work they will be able to deliver within the timebox. We wouldn\'t request a new Developer, either temporarily or permanently (swapping people in the team would be likely to throw the team back to the Storming stage, lowering its velocity). The option of asking everyone to work overtime is not consistent with the Agile principle of sustainable Development.'
      },
      {
        id: 'q2_32',
        question: 'You are a manager at an organization that develops and provides products and services for customers. You\'ve observed that the motivation level of a typically proactive developer decreasing. In a 1:1 meeting, he expresses his frustration that the other team members are not consulting with him on technical decisions in his area of expertise and feels his opinions are being ignored and not respected. After gathering enough information, you feel that his opinion may be well-founded. What should you decide to respond? (Choose the best answer)',
        options: [
          'Schedule a meeting with the team to discuss your concerns and explain that they need to respect the team member\'s opinions.',
          'Ask the Scrum Master to teach the other team members about the Scrum value of respect.',
          'Move him to another team that would be more receptive to his opinions and view point.',
          'Ask him whether he has discussed the issue with his other team members and whether he has raised the issue with the Scrum Master.'
        ],
        correctAnswer: 3,
        explanation: 'One of the attributes of Scrum Teams is self-managing. A sign of a self-managing team is the ability to resolve internal conflicts. One of the responsibilities of an Agile leader is to support the teams in self-management and providing an environment where they are able to feel safe to make local decisions whether it is technical or how to best work together.'
      },
      {
        id: 'q2_33',
        question: 'You are a manager at an organization that develops and provides products and services for customers. The Scrum Master, for one of the teams, has asked you to reduce communicating directly with the Scrum Team members and to go through him instead. What is the most appropriate response? (Choose the best answer)',
        options: [
          'It\'s not ok as you are accountable for the outcome of the team\'s work.',
          'It\'s ok but also let him know that there might be certain situations that you may still need to contact the team directly.'
        ],
        correctAnswer: 1,
        explanation: 'The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren\'t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.'
      },
      {
        id: 'q2_34',
        question: 'What is the primary advantage of Agile product development? (Choose the best answer)',
        options: [
          'It ensures that the planned scope is delivered on time.',
          'It makes it easier to maximize team utilization.',
          'Just in time development reduces uncertainty.',
          'It enables a team to regularly inspect their results and adapt their plan in order to deliver maximum value.'
        ],
        correctAnswer: 3,
        explanation: 'That answer is correct because the primary advantage of Agile product development is its iterative and adaptive nature. By following Agile principles and practices, teams can regularly inspect their work and adapt their plans based on feedback and changing requirements. This allows them to deliver maximum value to stakeholders by responding quickly to customer needs and market changes.'
      },
      {
        id: 'q2_35',
        question: 'You are a manager in charge of business transformation for a new Agile initiative in your organization. One of your responsibilities is to create the Agile teams that will be working on various products. As a manager, how do you decide which member will belong to which team? (Choose the best answer)',
        options: [
          'Balance the teams so that each team has an equal amount of skills, experience and seniority.',
          'Allocate the team members into functional teams where each team focuses on a specific area of expertise.',
          'Allocate the team members into groups of similar skill sets to increase transparency on which communication channels to use during development.',
          'Bring the involved members together, discuss the vision and goals for the products, remind teams that they need to balance skills and experience, and let the group self-organize and divide itself into teams.',
          'Group the team members according to how much they have worked together in the past.'
        ],
        correctAnswer: 3,
        explanation: 'Providing the proper guidelines will help promote self-organization, creativity, and problem solving. The decisions on who and how to work together in order to deliver releasable increments is best decided by the team and team members involved with doing the work.'
      },
      {
        id: 'q2_36',
        question: 'The time it takes from idea to delivering the idea and gathering customer feedback is referred to as Lead Time. Is it true or false that Lead Time can be one of the ways of measuring business Agility?',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Lead Time refers to the time it takes from the inception of an idea to delivering it and gathering customer feedback. It is indeed one of the ways to measure business Agility because it reflects how quickly a company can respond to customer needs and market changes. Shorter lead times typically indicate higher Agility, as they demonstrate the organization\'s ability to deliver value to customers rapidly and adapt to changing requirements efficiently.'
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
        question: 'Part of the team’s Definition of Done requires creating or updating technical documentation in order to maintain the product and/or features in the future. The team’s technical writer will be on vacation during the Sprint. What should you do as a Team Leader? (Choose the best answer)',
        options: [
          'Encourage the technical writers from other teams to form a specialized team to organize and plan the work for multiple teams.',
          'Complete all development work first while adding technical documentation to the Product Backlog to be done in a subsequent Sprint.',
          'The Developers will write it as they are still responsible for creating the documentation to make the Increment done in conformance with their Definition of Done.',
          'Wait until the technical writer returns before continuing with related items.'
        ],
        correctAnswer: 2,
        explanation: 'Todos os itens do Product Backlog selecionados para o Sprint são propriedade dos Developers como um todo. Embora membros individuais possam trabalhar em tarefas específicas, os Developers ainda são responsáveis por fazer o trabalho para entregar um Incremento que possa ser enviado. Como Líder de Equipa, tem de os orientar de que é da sua responsabilidade entregá-lo.'
      },
      {
        id: 'q3_2',
        question: 'The primary benefit of an Agile approach is to enable a team to inspect and adapt based on the outcomes of delivering working products.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Produtos complexos requerem experimentação, pois a causa e o efeito só podem ser deduzidos em retrospetiva. Não existe um método único que leve ao sucesso garantido ao abordar problemas adaptativos complexos. Os próximos passos podem ser mais bem decididos quando os resultados de experiências anteriores são determinados.'
      },
      {
        id: 'q3_3',
        question: 'In an organization using Scrum, the manager is still responsible for the quality of the product.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'A responsabilidade pela qualidade deve ser das Equipas Scrum. Um líder serve a equipa, proporcionando-lhes um ambiente onde possam criar produtos de alta qualidade, mas a equipa deve ser responsável por si mesma.'
      },
      {
        id: 'q3_4',
        question: 'A Scrum Team needs to implement something on AWS, but no Developer is familiar with AWS. The plan is to hire a new Developer that will fill that gap. Adding more resources in Scrum will proportionally increase the value delivered.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Ao trabalhar em problemas complexos em ambientes complexos, adicionar mais recursos (pessoas, dinheiro, ferramentas, etc.) não pode garantir um aumento de valor ou sucesso. Neste caso, pode ser útil, mas não há nada que o garanta.'
      },
      {
        id: 'q3_5',
        question: 'In an Agile organization the manager is still responsible for the personal development of the members of a Scrum Team.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'O desenvolvimento pessoal é uma responsabilidade partilhada em toda a organização. Embora cada membro da Equipa Scrum seja responsável pelo seu próprio crescimento, os Scrum Masters normalmente apoiam e facilitam esse desenvolvimento. Os gestores, muitas vezes, embora nem sempre, desempenham um papel na orientação do crescimento profissional de equipas inteiras. Mesmo em organizações ou equipas que abraçam totalmente os princípios Ágeis, os gestores ainda podem ter alguma responsabilidade no apoio ao desenvolvimento individual. No entanto, em tais ambientes, é mais provável que os indivíduos assumam a responsabilidade pelo seu próprio crescimento, muitas vezes sem o envolvimento direto do seu gestor ou líder.'
      },
      {
        id: 'q3_6',
        question: 'What would be good ways of creating Scrum Teams that would support the Scrum Values? (Choose the best answer)',
        options: [
          'Project Managers will allocate individuals to specific teams.',
          'Bring all the Developers or existing teams together and let them propose how to organize into the new structure and self-manage into teams.',
          'Direct managers personally re-assign current reports to new teams.',
          'The operations manager determines the new team structures and assignments.'
        ],
        correctAnswer: 1,
        explanation: 'A abordagem proposta de reunir todos os developers ou equipas existentes para propor como se organizar numa nova estrutura e auto-gerir-se em equipas é uma boa razão para formar equipas, porque promove a apropriação, a colaboração e o compromisso dos indivíduos envolvidos. Ao permitir que os developers ou as equipas tenham uma palavra a dizer sobre como são organizados e geridos, fomenta-se um sentimento de capacitação e responsabilidade.'
      },
      {
        id: 'q3_7',
        question: 'What would you expect from a Scrum Team where the team members keep changing? (Choose all that apply)',
        options: [
          'The team is likely to have knowledge share issues.',
          'Having the right collaboration tools can make a distributed team as productive.',
          'The team is likely to have communication issues.',
          'Velocity will be low.',
          'Cost of delivering the product will be significantly high.',
          'Changing Team members will always result into an increased productivity.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: 'Levará algum tempo até que a equipa se estabilize e se conheçam, para que os problemas de comunicação e partilha de conhecimento sejam resolvidos. No início, a velocidade será baixa; quanto mais tempo passarem juntos, melhor.'
      },
      {
        id: 'q3_8',
        question: 'When an organization starts adopting an Agile approach, managers should shield Scrum Teams from change and uncertainty created by those who do not yet understand Agile approaches.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'A mudança e a incerteza fazem parte da vida. Em vez de resistir a essas influências, um Líder Ágil deve servir as equipas na construção da capacidade de lidar com a mudança e a incerteza. Os Líderes Ágeis devem apoiar as equipas na colaboração com o seu ambiente, para que as pessoas partilhem um objetivo comum na cadeia de valor.'
      },
      {
        id: 'q3_9',
        question: 'What are we trying to achieve by becoming Agile? (Choose the best answer)',
        options: [
          'Accountability for commitments on scope and schedule.',
          'Improved customer satisfaction.',
          'Increasing the output of delivery teams.'
        ],
        correctAnswer: 1,
        explanation: 'O output das equipas de entrega num contexto Ágil refere-se aos resultados tangíveis produzidos pela equipa, tais como funcionalidades concluídas, histórias de utilizador ou incrementos de um produto. As práticas ágeis visam otimizar a produtividade e a eficiência da equipa para garantir que resultados valiosos são entregues aos clientes regularmente.'
      },
      {
        id: 'q3_10',
        question: 'Who should know the LEAST about the progress toward a business objective or a release, and be able to explain the alternatives most clearly? (Choose all that apply)',
        options: [
          'The Scrum Master',
          'The Developers',
          'The Project Manager',
          'The Product Owner'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'O Product Owner é a única pessoa responsável pela gestão do Product Backlog, o que inclui que o Product Backlog seja visível, transparente e claro para todos, e mostre no que a Equipa Scrum irá trabalhar a seguir. Certifique-se de que reparou na palavra "LEAST" na pergunta.'
      },
      {
        id: 'q3_11',
        question: 'Consistent achievement of Sprint Goals is a good indication that a Scrum Team is performing well.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'A concretização consistente dos Objetivos do Sprint mostra que a Equipa Scrum está a trabalhar bem em conjunto, que consegue chegar a acordo sobre o Objetivo do Sprint e que consegue trabalhar em conjunto para atingir esse objetivo.'
      },
      {
        id: 'q3_12',
        question: 'A critical responsibility of an Agile leader is to create an environment where trials, test and failed experiments are encouraged.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Quando as pessoas acreditam que não há problema em tentar novas abordagens e que não serão criticadas se não tiverem sucesso à primeira, é mais provável que tentem coisas novas. A liderança deve encorajar tentativas e testes, não se detendo em experiências que falharam, e incentivando a geração de novas ideias.'
      },
      {
        id: 'q3_13',
        question: 'Managers are no longer required when organizations implement Scrum.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Quando aplicado corretamente, muitas responsabilidades de liderança passam para os papéis na Equipa Scrum. Isto pode levar a uma menor necessidade de gestores. A experiência ensina que o papel do gestor é criar e manter um ambiente onde as Equipas Scrum possam tornar-se e manter-se bem-sucedidas.'
      },
      {
        id: 'q3_14',
        question: 'You are a Technical Team Leader of a team. Your team committed to delivering 30 story points this iteration, but it looks like they will only complete 10. What should you do in this case? (Choose the best answer)',
        options: [
          'Extend the iteration.',
          'Add more resources to the team.',
          'You should be transparent about the 10 points and move back to the Product Backlog the 20.',
          'You should be transparent about the 10 points and move back to the following Sprint Backlog the 20.'
        ],
        correctAnswer: 2,
        explanation: 'A duração do Sprint e os eventos são fixos (timeboxed), a duração não mudará. Também não se deve alterar o plano da iteração ou expandir a equipa. Em vez disso, o trabalho que não for concluído dentro da iteração deve ser devolvido ao Product Backlog, e deixar o Product Owner decidir o que fazer com esses itens.'
      },
      {
        id: 'q3_15',
        question: 'Scrum promotes self-management. Which of these statements would not support self-managing? (Choose the best answer)',
        options: [
          'Being a lightweight framework.',
          'Removing titles for Developers.',
          'Removing the need for documentation.',
          'The Developers deciding what work to do in a Sprint.'
        ],
        correctAnswer: 2,
        explanation: 'Remover a necessidade de documentação não apoiaria a autogestão no Scrum, porque uma documentação clara ajuda as equipas a compreender os requisitos, tarefas e processos, permitindo-lhes tomar decisões informadas e gerir o seu trabalho de forma eficaz. A documentação serve como ponto de referência para os membros da equipa, especialmente em projetos complexos ou ao lidar com alterações na composição da equipa.'
      },
      {
        id: 'q3_16',
        question: 'Having the team members and a complete Product Backlog are the only things needed to start the project.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Embora ter developers e um Product Backlog completo seja crucial para iniciar um projeto em Agile, não são os únicos pré-requisitos. Outros fatores essenciais incluem uma visão e objetivos claros do projeto, papéis e responsabilidades definidos para os developers, acordo sobre a definição de "pronto" (Definition of Done), disponibilidade dos recursos necessários, canais de comunicação e colaboração eficazes, um plano de gestão de riscos e a adesão às práticas Ágeis.'
      },
      {
        id: 'q3_17',
        question: 'A Scrum Master is working with a Developers in different geographical locations. The Developers meet in a variety of meeting rooms and they have much to do logistically (for example, set up conference calls, book the place) before the Daily Scrum. What action should the Scrum Master take in this situation? (Choose the best answer)',
        options: [
          'The Scrum Master should set up a meeting and announce them how it will be addressed',
          'Ask the Developers to alternate who is responsible for meeting setup.',
          'Ask the development manager to solve it as it is an impediment',
          'Allow the Developers to self-manage and determine by themselves what to do. This will make the team more self-managing.'
        ],
        correctAnswer: 3,
        explanation: 'As Equipas Scrum são estruturadas e capacitadas pela organização para organizar e gerir o seu próprio trabalho. A sinergia resultante otimiza a eficiência e eficácia geral das equipas. Elas são autogeridas. Ninguém (nem mesmo o Scrum Master) diz aos Developers como transformar o Product Backlog em Incrementos de funcionalidade potencialmente entregáveis.'
      },
      {
        id: 'q3_18',
        question: 'What are the primary benefits of an Agile approach when compared to a Waterfall approach? (Choose the best two answers)',
        options: [
          'Deliver product incrementally and eventually the entire intended product including the relevant stakeholder feedback.',
          'An improved ability to deliver on-budget, on-time, and on-scope.',
          'There is no difference.',
          'Protect the organization from wasting money through quicker product development practices.',
          'Deliver business value by improving the customer\'s satisfaction with the outcome .'
        ],
        correctAnswer: [0, 4],
        explanation: 'O principal benefício de uma abordagem Ágil é um aumento na entrega de valor de negócio estratégico, o que é feito envolvendo os stakeholders de negócio no processo de desenvolvimento. Ao fazer isso, a equipa compreende o que é mais importante e pode entregar as funcionalidades que proporcionam o maior valor de negócio para a sua organização.'
      },
      {
        id: 'q3_19',
        question: 'It is a good practice to spread team members across several Scrum Teams so that you can maintain high utilization of resources and be able to respond quickly and remain productive when impediments occur.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Distribuir pessoas por várias Equipas Scrum garante virtualmente que as equipas aumentarão o tempo que passam à espera enquanto um membro da equipa está a fazer outra coisa. A utilização de recursos (pessoas) não deve ser o objetivo; o objetivo deve ser entregar valor. Para melhorar o débito e acelerar a entrega, dedique as pessoas a uma única equipa.'
      },
      {
        id: 'q3_20',
        question: 'A software development company does the waterfall software development method. The company realizes that the code development is progressing as expected, however the cost of development has been more than what they had initially planned. The Management is considering adopting an Agile approach and believes adapting to the Agile approach will reduce the cost. Adapting Scrum will definitely make Teams work more efficiently and deliver more value in less time, thus guaranteeing cost savings, so the main benefit of an Agile approach is reducing cost.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Um benefício de uma abordagem Ágil é que permite às equipas construir e entregar um produto e obter feedback para que possam adaptar o produto com base nesse feedback para entregar mais valor. A redução de custos por não construir funcionalidades desnecessárias e a melhoria das práticas com base no feedback podem reduzir os custos. A redução de custos pode tornar-se um benefício secundário, mas não deve ser vista como um benefício principal de usar uma abordagem Ágil.'
      },
      {
        id: 'q3_21',
        question: 'Ross is a senior Developer that has recently joined an existing Scrum Team. The existing team members are unable to get along with Ross and conclude that he is not a culture fit. If necessary, who is responsible for removing the new team member, and why? (Choose the best answer)',
        options: [
          'The HR department, as they are responsible for the hiring process.',
          'The Developers are responsible because it is an internal team issue, and may request help from the Scrum Master or others.',
          'The Product Owner because he/she is responsible for managing the team.',
          'The Team Leader.',
          'The Scrum Master because he/she is responsible for helping the Developers to remove Impediments.'
        ],
        correctAnswer: 1,
        explanation: 'Aqueles que estão mais próximos do problema são os mais indicados para o compreender e resolver. Os Developers são responsáveis por resolver conflitos internos e podem pedir ajuda ao Scrum Master, se necessário. Como se trata de um problema localizado, são eles que devem iniciar as ações para os resultados que desejam.'
      },
      {
        id: 'q3_22',
        question: 'Which of the following sets of characteristics are displayed by high-performing Agile teams? (Choose the best answer)',
        options: [
          'Self-managing, plan-driven, empowered.',
          'Consensus-driven, empowered, low trust enabling more inspection and adaptation.',
          'Consensus-driven, empowered, plan-driven.',
          'Constructive disagreement, empowered, self-managing.'
        ],
        correctAnswer: 3,
        explanation: 'A baixa confiança não é apropriada num ambiente Ágil. Devemos estar focados na entrega de valor. Através do processo de eliminação, podemos determinar a resposta correta.'
      },
      {
        id: 'q3_23',
        question: 'Anthony is a new Product Owner on a newly formed Scrum Team. Anthony has projected a product completion date based on an estimated velocity of 21 completed points per Sprint. After the first 3 Sprints, the Developers have determined that their maximum velocity is 15 points and they are unable to create shippable Increments at the end of each Sprint. What is the best way to proceed as a Team Leader? (Choose the best answer)',
        options: [
          'The Scrum Master would coach the team on improving their estimations and commitment to completing the Sprint Backlog.',
          'The Sprints have failed to produce shippable Increments there for opportunities to inspect and adapt is lost. The Scrum Master would encourage the organization to add more team members in order to increase the team’s capacity.',
          'Extend the Sprint in order to complete the Sprint Backlog items.',
          'Inform Anthony that the projected completion date is not correct. The Developers would estimate the remaining work to produce a shippable Increment and suggest completing it (make it meet the Definition of Done). Based on empirical data, Anthony can adjust the completion date and decide how to continue.'
        ],
        correctAnswer: 3,
        explanation: 'Neste cenário, a data de conclusão projetada com base numa velocidade estimada de 21 pontos concluídos por Sprint já não é viável, uma vez que a velocidade máxima real da equipa é de 15 pontos. O Líder de Equipa deve então facilitar uma discussão com os Developers para estimar o trabalho restante necessário para produzir um Incremento expedível e sugerir a sua conclusão de acordo com a Definição de "Pronto". Utilizando dados empíricos e a velocidade real da equipa, Anthony pode ajustar a data de conclusão e tomar decisões informadas sobre como prosseguir com o projeto.'
      },
      {
        id: 'q3_24',
        question: 'Stella is an Agile Leader who manages five Scrum Teams. She prefers to delegate responsibilities depending on the maturity of her team and team members. Is it a good practice to delegate responsibilities depending upon the team maturity even if it takes more time?',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Muitas responsabilidades tradicionais de gestão e liderança podem ser transferidas para os membros da Equipa Scrum, dependendo da maturidade da equipa. Os Líderes Ágeis começariam a delegar no Scrum Master, no Product Owner e nos Developers.'
      },
      {
        id: 'q3_25',
        question: 'Panagiota is a Developer in an Agile organization. As a team member, she encounters a tricky problem during a development iteration. What does Agile recommend in this case? (Choose the best answer)',
        options: [
          'She should self-manage this issue and fix it.',
          'She should raise the problem with her team members and ask for their help in solving it.',
          'She should ignore it.',
          'She should raise the problem with the Scrum Master.'
        ],
        correctAnswer: 1,
        explanation: 'As equipas ágeis confiam na resolução coletiva de problemas em vez da engenhosidade individual, porque os problemas são resolvidos de forma mais rápida e eficaz quando são apresentados diversos pontos de vista, em vez de os membros da equipa tentarem avançar sozinhos.'
      },
      {
        id: 'q3_26',
        question: 'Jenny, an Agile Team Leader in your organization comes to you for advice. she is having trouble getting her team to take ownership of the project. She keeps finding herself making the needed decisions and directing their work. What do you advise her to do? (Choose the best answer)',
        options: [
          'At the stand-up meetings, assign a different person each day as the decision maker to get them all comfortable in the role.',
          'Implement an incentive plan and officially report any lack of participation to team members’ functional managers.',
          'Meet them and work with the team to align everyone’s expectations. Coach them if needed.',
          'Jenny should explain to them that Agile teams self-select their work and tell them to get on with it.'
        ],
        correctAnswer: 2,
        explanation: 'A chave é orientar a equipa para avançar, ajudá-la a remover os seus impedimentos, fazer perguntas poderosas para liderar a equipa na direção certa e ter competências de escuta empática.'
      },
      {
        id: 'q3_27',
        question: 'Currently, your engineering department is organized in siloed teams that specialize by function (e.g. front-end, back-end, database and testing). What would you consider when moving away from component teams towards feature teams? (Choose the best answer)',
        options: [
          'You cannot begin Scrum without having feature teams. It is easier to measure and compare performance between feature teams. Feature teams should have an equal number of team members.',
          'Moving from component teams to feature teams could reduce, productivity in the initial stages. Feature teams have less communication complexity. Getting the support from the business side makes the transition easier.',
          'Members within feature teams require compatible personalities. Feature teams should have a mix of junior and senior members. Tasks are completed more quickly than component teams.'
        ],
        correctAnswer: 1,
        explanation: 'A fase inicial de formação de uma nova equipa pode causar uma perturbação a curto prazo, uma vez que precisam de tempo para descobrir a melhor forma de trabalhar em conjunto. Como todas as competências e habilidades estão dentro da equipa, a sobrecarga de comunicação é reduzida. Ter um ambiente que apoia os Valores Scrum reduz a complexidade.'
      },
      {
        id: 'q3_28',
        question: 'During the Sprint Review, one of the stakeholders announces that due to recent market changes, there is risk that funding might be reduced for the project. This triggers tensions to rise and arguments to break out between members. As an Agile manager, what would be the best two actions to take? (Choose the best two answers)',
        options: [
          'Encourage the stakeholders and Product Owner to focus on delivering the highest value items for the next Sprint',
          'Be objective and request for a short break for people to calm down.',
          'Inform everyone that the team needs to stay busy until the information is formally announced.',
          'Defend the original budget and request the stakeholders to adhere to the original agreed funding for the product.',
          'Avoid getting involved as it is the Product Owner’s responsibility to manage stakeholder expectations.'
        ],
        correctAnswer: [0, 1],
        explanation: 'Ambas as ações fornecidas são respostas apropriadas para um gestor Ágil que enfrenta tensões e discussões durante uma Revisão de Sprint. Encorajar os stakeholders e o Product Owner a focarem-se na entrega dos itens de maior valor para o próximo Sprint mantém o foco na entrega de valor apesar dos desafios externos. Além disso, ser objetivo e pedir uma pequena pausa para que as pessoas se acalmem demonstra inteligência emocional e competências de resolução de conflitos, promovendo um ambiente de equipa construtivo.'
      },
      {
        id: 'q3_29',
        question: 'Release Stabilization Period is the average amount of time it takes from when an error is detected and when it is fixed.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'O Tempo Médio de Reparação é o tempo médio que decorre desde a deteção de um erro até à sua correção. O Período de Estabilização da Versão é o tempo gasto a corrigir problemas do produto entre o momento em que os developers dizem que está pronto para ser lançado e o momento em que é efetivamente lançado para os clientes.'
      },
      {
        id: 'q3_30',
        question: 'The Agile Manifesto recommends responding to change over following a plan.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Este valor lembra às equipas dentro de uma organização que não só precisam de planear, mas também de reconhecer que os planos iniciais são feitos quando se sabe menos sobre o projeto e que esses planos precisarão de ser atualizados à medida que o trabalho avança.'
      },
      {
        id: 'q3_31',
        question: 'You want to improve your product’s time to market. Which of the following practices might help you achieve this goal? (Choose the best three answers)',
        options: [
          'Prioritizing features based on customer feedback',
          'Implementing automation in the development and deployment process',
          'Increasing the number of the Developers',
          'Relying solely on traditional project management approaches',
          'Adopting iterative development and incremental delivery',
          'Spending more time on detailed upfront planning'
        ],
        correctAnswer: [0, 1, 4],
        explanation: 'Para melhorar o tempo de lançamento do produto, é essencial dar prioridade às funcionalidades com base no feedback dos clientes, pois isso garante que os Developers se concentrem em fornecer valor que ressoe com os utilizadores. A adoção do desenvolvimento iterativo e da entrega incremental permite lançamentos frequentes de software funcional, possibilitando uma resposta mais rápida a alterações ou feedback dos utilizadores. A implementação da automação no processo de desenvolvimento e implantação otimiza tarefas repetitivas, reduzindo o tempo necessário para preparar e lançar novas versões do produto.'
      },
      {
        id: 'q3_32',
        question: 'Which one of the following is benefit of an Agile approach? (Choose the best answer)',
        options: [
          'Improved team structure.',
          'Plan the work based on budget.',
          'Elimination of managers.',
          'Ability to deliver more value.',
          'Cost reduction.'
        ],
        correctAnswer: 3,
        explanation: 'Um benefício direto da Abordagem Ágil é a capacidade de entregar mais valor. Lembre-se, o principal benefício é a entrega de valor. Entregar a tempo, dentro do orçamento e do âmbito são todos benefícios do Scrum ou de uma abordagem Ágil, mas podem nem sempre acontecer. A entrega de valor permanecerá sempre consistente, desde que o Scrum seja implementado corretamente.'
      },
      {
        id: 'q3_33',
        question: 'Which of the following statements supports an Agile way of thinking? (Choose the best answer)',
        options: [
          '"A successful project is defined by on-time delivery, within budget, and within scope."',
          '"The level of unpredictability is a sign that someone has not invested enough time in upfront planning."',
          '"Projects fail because people lack motivation and engagement."',
          '"A sign of a good project manager is the ability to follow the plan."',
          '"Leadership members are the best ones to determine the resulting value of the product."',
          '"Working on complex problems is often unpredictable and unexpected things will occur. The best approach is to learn from them."'
        ],
        correctAnswer: 5,
        explanation: 'Contextos complexos são muitas vezes imprevisíveis, e a melhor abordagem aqui é "Sondar – Sentir – Responder." Em vez de tentar controlar a situação ou insistir num plano de ação, muitas vezes é melhor ser paciente, procurar padrões e incentivar o surgimento de uma solução.'
      },
      {
        id: 'q3_34',
        question: 'Leadership/management attendance at every Sprint Retrospective is a good practice.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'As Retrospectivas do Sprint destinam-se principalmente a que a Equipa Scrum reflita sobre os seus processos, identifique áreas de melhoria e planeie ações concretas para o próximo Sprint. Embora a presença ocasional da liderança/gestão possa fornecer informações valiosas, também pode inibir discussões abertas e francas entre os membros da equipa.'
      },
      {
        id: 'q3_35',
        question: 'Which of the following are tasks for Agile Leaders? (Choose all that apply)',
        options: [
          'Practice transparency through visualisation.',
          'Create a safe and open environment.',
          'Make sure that the budget is enough for the work that has been planned.',
          'Encourage emergent leadership via a safe environment.',
          'Share knowledge through collaboration.'
        ],
        correctAnswer: [0, 1, 3, 4],
        explanation: 'As tarefas de liderança são: Praticar a Transparência através da Visualização, Criar um Ambiente Seguro para a Experimentação, Partilhar Conhecimento através da Colaboração, Incentivar a Liderança Emergente através de um Ambiente Seguro.'
      },
      {
        id: 'q3_36',
        question: 'The Developers on a Scrum Team are having a deep debate about which technical approach to apply for to a particular problem they are trying to solve. The team members are not able to come to an agreement nor compromise. As the manager of the members, how would you recommend the team to proceed? (Choose the best answer)',
        options: [
          'The Scrum Master should decide which approach to implement.',
          'As a manager, you decide which approach to implement.',
          'The Product Owner should decide which approach to implement.',
          'The Developers should run an experiment to test the different approaches.'
        ],
        correctAnswer: 3,
        explanation: 'Produtos complexos requerem experimentação, pois a causa e o efeito só podem ser deduzidos em retrospetiva. Não existe um método único que leve ao sucesso garantido. Os resultados da experimentação validarão o valor ou benefício assumido das diferentes abordagens.'
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
        question: 'As a Team Leader you have security concerns about the work. What are two good ways to address security concerns? (Choose all that apply)',
        options: [
          'Have special Sprints that ensure those concerns.',
          'Add them to the Product Backlog.',
          'Add them to the Definition of Done.',
          'Get help from responsible departments to ensure those concerns.'
      ],
      correctAnswer: [1, 2],
      explanation: 'Concerns related to the performance of an existing function should be added to the Product Backlog. If the concern applies to many items and affects how functional features work, it is a good choice to add it to the Definition of Done. There are no "special" Sprints, such as hardening or integration Sprints.'
    },
    {
      id: 'q4_2',
      question: 'You are a manager at an organization that develops and provides products and services for customers. The Scrum Master and the Developers have come to you asking for advice concerning the lack of availability of their team\'s Product Owner. Due to organizational limitations, the Product Owner has other responsibilities outside of the Scrum Team and cannot dedicate all of his time to the team. The Product Owner is the subject matter expert of the product that the Scrum Team is building and replacing or duplicating his knowledge is very difficult. The Scrum Master has discussed this issue with the Product Owner but the team is still struggling to meet their goals without more guidance from the Product Owner. As a manager, what is the best way for you to help the Scrum Master?',
      options: [
        'Offer to work with him, the Product Owner, and his manager, to find a way to ensure that the Product Owner\'s availability his high enough for the Scrum Team to continuously deliver value.',
        'Work with the resource manager to hire a full time Product Owner.',
        'Add additional team members such as a Business Analyst or Proxy Product Owner to assist the Product Owner and support the team when the Product Owner is not available.',
        'Suggest to allow the Developers make the decisions based on what they think is best and ensure that the decisions are documented.'
      ],
      correctAnswer: 0,
      explanation: 'The value delivered by the Scrum Team is affected by the Product Owner\'s participation and availability. Replacing the Product Owner or delegating his responsibilities may not fix the root cause.'
    },
    {
      id: 'q4_3',
      question: 'You are a manager in an Agile organization where there are multiple products with multiple teams. The organisation is doing redundancies and in the next two months each product should have one team less each, as part of the decisions made by investors. You need a way measure the value that each Scrum Team produces so that you can provide the information to investors and stakeholders about the teams that are not doing that well. How do you go about measuring the value for the various Scrum Teams in your organizations?',
      options: [
        'Speak with the Product Owner of the each product. As the person responsible of maximizing the value of the Scrum Team\'s work, they are best suited to help provide you with the information you seek.',
        'You can compare the story point velocity of each Scrum Team.',
        'Speak with the Product Owners of the teams. As the person responsible for managing the Scrum Teams, they are best suited to help provide you with the information you seek.'
      ],
      correctAnswer: 0,
      explanation: 'The Product Owner is the sole person responsible for managing the Product Backlog to ensure the value of the product resulting from the work of the Developers is maximized. Consulting with them directly will provide the most accurate information on the value produced. The Product Owner will know which team delivers less value, even if it is due to challenges and issues. If there is no other choice, the organization may have to let go of the team that delivers less value. Ideally, the right solution would be to help the team remove impediments to improve their productivity.'
    },
    {
      id: 'q4_4',
      question: 'You manage the product development department in your organization. The Customer Service department is constantly interrupting David, a Developer on a Scrum Team, with customer support tickets. David is the only member that has domain knowledge of one of the products Customer Service is responsible for. The Scrum Team has asked you, as their department manager, for your help. As their department manager, which would be the best approach to take?',
      options: [
        'Explain to the Scrum Team that the customer is the most important stakeholder and let the team find ways to accommodate the unplanned work.',
        'Work with David to help transfer his knowledge to another person outside of the Scrum Team.',
        'Have David work directly with Customer Service to avoid disruptions to the Scrum Team.',
        'Contact the team\'s Product Owner and let them handle the situation.'
      ],
      correctAnswer: 1,
      explanation: 'A manager can best help Agile teams by removing organizational impediments. When a Scrum Team\'s work is disrupted by people outside the team, it is considered an organizational impediment. Helping the team member transfer their knowledge to someone outside the team will minimize or eliminate the current disruptions.'
    },
    {
      id: 'q4_5',
      question: 'What makes adaptation easier?',
      options: [
        'Lack of communication channels',
        'Regular feedback from stakeholders',
        'Open communication',
        'Resistance to change',
        'Adherence to outdated policies',
        'Rigidity in organizational structure'
      ],
      correctAnswer: [1, 2],
      explanation: 'Regular feedback from stakeholders is essential for adaptation because it provides insight into changing needs and priorities. This allows teams to adjust their strategies to align with stakeholder expectations and maximize value. Open and effective communication channels facilitate this process by allowing information to flow freely, which keeps teams informed and agile. Conversely, a lack of communication channels, rigidity, resistance to change, and outdated policies all hinder a team\'s ability to adapt.'
    },
    {
      id: 'q4_6',
      question: 'What is the purpose of the Experiment Loop in EBM?',
      options: [
        'To move from the Current State toward the Next Target Goal through small, measured steps',
        'To inspect and adapt goals based on the organization\'s current state',
        'To determine the Strategic Goal of the organization',
        'To establish Immediate Tactical Goals'
      ],
      correctAnswer: 0,
      explanation: 'The Experiment Loop is a key part of Evidence-Based Management (EBM) designed for continuous improvement. It is a cycle that starts with forming a hypothesis for improvement, which is then tested through small experiments. The results are inspected to see their impact, and based on these insights, the organization adapts its goals or approaches. This process fosters empirical decision-making and allows organizations to move toward their strategic goals.'
    },
    {
      id: 'q4_7',
      question: 'You are the manager in charge of the product development department in your organization. People from other departments are continuously interrupting one of your teams requesting customer support on a product they had completed in the past. Which is the best approach for the team to address the unplanned work and interruptions?',
      options: [
        'Work with the team to transfer knowledge to a different team that\'s more suitable in addressing support requests for the product in question.',
        'Predefine an agreed upon fixed percentage of team capacity that will be allocated for support requests. Any undone requests will be moved to the next Sprint.',
        'Have specific Sprints that are only focused on support requests so not to interrupt the product development Sprints.'
      ],
      correctAnswer: 0,
      explanation: 'To handle unplanned work and interruptions, the team should establish clear boundaries and communication channels. They should work with stakeholders to prioritize requests based on their impact and urgency, ensuring they align with the team\'s Sprint goals. The team could also collaborate with other departments to address the root causes of the interruptions, for instance, by providing additional training or documentation. Creating a transparent process for handling interruptions and empowering the team to escalate significant issues can help minimize disruptions.'
    },
    {
      id: 'q4_8',
      question: 'Which of the following would help a Scrum Team increase its effectiveness?',
      options: [
        'Having dedicated team members focused on the work of a single product at a time.',
        'Share different initiatives across multiple teams so that individual members can work on other products when they have no active tasks to do in their current team.',
        'Having teams consisting of cross-functional individuals who have the ability to work in any function and any task needed.',
        'Having teams consisting of specialists that are experts in their function.'
      ],
      correctAnswer: 0,
      explanation: 'A team working on a single product can mature and synergize more effectively. This focus allows them to inspect and adapt better than if they were working on multiple products simultaneously. Having a team member working full-time on one team is generally more effective than having individuals who are cross-functional. A cross-functional team means the team as a whole has all the necessary skills, not that every individual is an expert in everything.'
    },
    {
      id: 'q4_9',
      question: 'What of the following is an important responsibility of leadership in an Agile organization?',
      options: [
        'Setting the Sprint Goals and defining the team commitments.',
        'Prioritizing work in order to ensure team members are utilized fully.',
        'Ensuring teams have what they need to succeed and helping them to remove impediments blocking their progress.',
        'Hiring resources and setting up teams.',
        'Setting priorities, planning the work and, managing progress.'
      ],
      correctAnswer: 2,
      explanation: 'In an Agile organization, a crucial role of leadership is to support self-organizing teams by providing them with necessary resources and helping to remove any obstacles that hinder their progress. This includes addressing impediments that can range from a lack of tools to organizational barriers. Leaders use their influence to address these issues, allowing the team to focus on delivering value.'
    },
    {
      id: 'q4_10',
      question: 'Managers make good Scrum Masters since they are already used to organizing and running teams.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 0,
      explanation: 'The role of a Scrum Master requires a different skill set and mindset from that of a traditional manager. Scrum Masters act as servant-leaders who facilitate the Scrum process, remove impediments, and foster a collaborative environment. Their focus is on facilitation and coaching rather than traditional management practices. Therefore, being a manager does not automatically make someone a good Scrum Master.'
    },
    {
      id: 'q4_11',
      question: 'You are a Team Leader working on one product in an organization. Several of the Developers notify you that their team will need full-time help of an external technical specialist Julia in the upcoming two Sprints. What key concerns should you take into account?',
      options: [
        'The benefit of the members in the team solving the problem themselves and the ability to produce integrated Increments.',
        'Hiring additional resources to fill the void in skillset.',
        'Maintaining a consistent velocity.',
        'Having enough work for all team members.'
      ],
      correctAnswer: 0,
      explanation: 'When considering bringing in an external specialist, a Team Leader should weigh several factors. These include the impact on the team\'s productivity, as integrating a new person can be disruptive ; the specialist\'s availability and commitment ; the budget implications ; and potential communication or cultural challenges. It is also important to involve the team in the decision-making process.'
    },
    {
      id: 'q4_12',
      question: 'You are the manager in charge of the product development department in your organization. Part of your responsibilities include your department\'s budget and headcount. One of the teams has requested hiring additional team members in order to improve their ability to deliver. The request is well-founded and the team is known for making good decisions. As the department\'s manager, what is the best response?',
      options: [
        'Ask the organization\'s technical recruiter to hire additional team members.',
        'Ask the team to send you potential candidates so you can expedite to the last interview stage in order to accelerate the onboarding process.',
        'Let the team know the budget and headcount boundaries and empower the team to find, interview, and hire new team members with help from the hiring department.'
      ],
      correctAnswer: 2,
      explanation: 'Self-managed teams decide for themselves how to best accomplish their work. A leader should provide the team with guidelines and support, but allow the team members to decide who would be the best fit, within the provided boundaries.'
    },
    {
      id: 'q4_13',
      question: 'Managers make good Product Owners since they are already used to making decisions and directing the teams responsible for product delivery.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 0,
      explanation: 'Product Owners are responsible for optimizing the value their Scrum Teams deliver, but they do not direct the team or make decisions for them. A manager transitioning to a Product Owner role often finds it challenging to focus on articulating needs and letting go of directing people. While a Product Owner has many roles, being a manager is not one of them.'
    },
    {
      id: 'q4_14',
      question: 'The transition from a traditional process focused environment to an Agile culture can be filled with challenges. Which traditional practices can make it challenging for an organization to adopt an Agile culture?',
      options: [
        'Specializing in a specific function or skillset.',
        'Focusing on maximizing utilization of team members.',
        'Measuring and recognizing individual performance.',
        'Committing to fixed scope and schedule.',
        'Imposing technical standards across the entire organization.'
      ],
      correctAnswer: [0, 1, 2, 3, 4],
      explanation: 'Several traditional practices can hinder the adoption of an Agile culture. Specialization can impede the cross-functional collaboration required in Agile teams. Measuring individual performance can conflict with the Agile value of teamwork and collective ownership. Rigidly imposing technical standards can stifle the innovation and adaptability that are central to Agile. Focusing on maximizing team member utilization can lead to burnout, which is contrary to the Agile principle of a sustainable pace. Finally, committing to a fixed scope and schedule makes it difficult to embrace Agile\'s iterative approach and responsiveness to change.'
    },
    {
      id: 'q4_15',
      question: 'A self-managing team has complete freedom to decide how it works.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 0,
      explanation: 'Teams are governed by organizational standards and policies, as well as their own level of maturity. More mature teams may be granted more authority, but every organization has some rules that all teams must follow.'
    },
    {
      id: 'q4_16',
      question: 'Product Owners are interchangeable, without penalty, across Scrum Teams.',
      options: [
        'True',
        'False'
      ],
      correctAnswer: 1,
      explanation: 'The importance of a Product Owner having subject matter expertise and strong relationships with stakeholders cannot be overlooked. Especially in complex value chains, it can take a long time for a Product Owner to become effective.'
    },
    {
      id: 'q4_17',
      question: 'Which of the following are benefits of an Agile approach?',
      options: [
        'The shorter the feedback loop the better.',
        'Ability to deliver more value.',
        'Frequent releases increase predictability.',
        'Elimination of managers.'
      ],
      correctAnswer: [0, 1, 2],
      explanation: 'A direct benefit of the Agile approach is the ability to deliver more value. It enables teams to build a product, get feedback, and adapt based on that feedback, which in turn delivers more value.'
    },
    {
      id: 'q4_18',
      question: 'You are a manager at an organization that develops and provides products and services for customers. The head of product development has asked you to identify which Agile team is performing the best. Which of these statements is true?',
      options: [
        'Standardize the use of Story Points across the Scrum Teams in order to extract performance based on completed Story Points.',
        'You need to look at several trends of different measures such as velocity, defects, and technical debt to get a picture of how the team is performing.',
        'The best performing team is the one that is completing the most User Stories.',
        'Unhealthy team behaviors often result from comparing performance between different teams. Instead, focus on identifying and eliminating impediments that slow down team performance.'
      ],
      correctAnswer: 3,
      explanation: 'An organization\'s responsibility is to create an environment that maximizes the effectiveness of each team, rather than encouraging competition between them. The highest priority should be customer satisfaction through the early and continuous delivery of valuable software.'
    },
    {
      id: 'q4_19',
      question: 'What does a trend line through a release burndown chart indicate?',
      options: [
        'When the remaining work is supposed to be finished',
        'When the project will likely finish, if the team develops with a speed equal to the last Sprint',
        'The budgeted cost of the project',
        'When the remaining work will likely be completed if nothing changes in the Product Backlog or the Scrum Team'
      ],
      correctAnswer: 3,
      explanation: 'A release burndown chart tracks the team\'s progress toward a release date by comparing the remaining effort to the ideal effort. If the line representing the remaining effort is above the ideal effort line, it indicates that the team is behind schedule.'
    },
    {
      id: 'q4_20',
      question: 'You are a manager at an Agile organization. One of your direct reports comes to you with questions regarding some of their work. How should you handle this situation?',
      options: [
        'Instruct the employee that he/she should have courage to take risks and they should try to find answers on their own first.',
        'Send the employee to training in order to increase or expand their skill set.',
        'Instruct the employee to consult with a Scrum Master so that the Scrum Master can remove his/her impediments.',
        'Work to help the employee find the answers to their questions.'
      ],
      correctAnswer: 3,
      explanation: 'As a manager in an Agile organization, it\'s important to help team members find answers to their questions and overcome obstacles. This approach fosters a culture of collaboration, empowerment, and continuous learning. By assisting the employee, you show your commitment to their professional development and success, while also encouraging problem-solving skills and autonomy.'
    },
    {
      id: 'q4_21',
      question: 'How does the Scrum Team show value to the organization?',
      options: [
        'By eliminating technical debt.',
        'Through the continuous reporting the Daily Scrum.',
        'During each Sprint Review, the Product Owner provides value reports to stakeholders in attendance.',
        'By consistent delivery of quality product at the end of each Sprint.'
      ],
      correctAnswer: 3,
      explanation: 'A Scrum Team demonstrates its value to the organization by delivering shippable Increments at the end of each Sprint. These Increments are tangible outcomes that contribute to the organization\'s goals. By consistently delivering valuable and high-quality work in short iterations, the team provides clear evidence of its progress and achievements.'
    },
    {
      id: 'q4_22',
      question: 'You are a manager at an organization that develops and provides products and services for customers. One of the stakeholders feels that the Scrum Team, developing the product, lacks the experience and skills needed to meet expectations. As a manager, which is the most appropriate response?',
      options: [
        'Determine what to do based on a combination of the Scrum Team\'s feedback and your own personal experience.',
        'Have the stakeholder discuss his concerns with the Scrum Master and leave the final decision to the Scrum Team on how to address the concerns and support them as needed.',
        'Work with the other Scrum Teams to reorganize team members to form more balanced teams.',
        'Allocate additional Developers to the Scrum Team in order to fill the skills and experience gap.'
      ],
      correctAnswer: 1,
      explanation: 'It is more effective for the stakeholder to discuss their concerns directly with the team rather than going through a manager. The team can then address the concerns and decide on the best course of action. As a manager in an Agile environment, your role is to support the team by helping them remove any impediments to their progress.'
    },
    {
      id: 'q4_23',
      question: 'Which of the following best describes the role of an Agile leader in relation to the product goal?',
      options: [
        'Agile leaders are only concerned with enforcing deadlines and budget constraints, regardless of the product goal.',
        'Agile leaders provide guidance and support to the team in defining and understanding the product goal.',
        'Agile leaders are focused on individual tasks rather than the overarching product goal.',
        'Agile leaders are solely responsible for setting the product goal without input from the team.'
      ],
      correctAnswer: 1,
      explanation: 'In Agile, the product goal is a key element that guides the team\'s development efforts. Agile leaders, like Scrum Masters, are crucial in helping the team understand this goal. They assist the team in aligning their work with the product vision, remove obstacles, and ensure the team remains focused on delivering value to the customer.'
    },
    {
      id: 'q4_24',
      question: 'When Scrum is implemented correctly, managers are no longer needed.',
      options: [
        'True',
        'False'
      ],
      correctAnswer: 1,
      explanation: 'When Scrum is applied correctly, many leadership responsibilities are transferred to the roles within the Scrum Team. This may reduce the number of managers needed. However, experience shows that the manager\'s role evolves to creating and maintaining an environment where Scrum Teams can be successful.'
    },
    {
      id: 'q4_25',
      question: 'You are an Agile leader. A customer has come to you requesting a new feature for a product your company is developing for them. The customer\'s improvement idea seems to be outside the scope of the original product plan. What is the most appropriate response?',
      options: [
        'Do nothing, let the Scrum Team deal with it.',
        'Begin negotiations with the customer on adding this scope change to the project. You want to ensure that the value you provide to the customer can be increased as it is your responsibility to handle negotiations between the customer and the Scrum Team.',
        'Facilitate a meeting between the Product Owner of the team working on the customer\'s product and the customer. You want to make sure the customer is satisfied with the outcome and you hope to find a satisfactory and mutually beneficial solution to the customer\'s request.',
        'Facilitate a meeting between the Developers working on the product and the customer. Instruct the Developers that as an Agile organization it is part of their duty to ensure that the customer is satisfied. Recommend that the team complete the customer\'s request for the next Sprint.'
      ],
      correctAnswer: 2,
      explanation: 'The Product Owner is the single person responsible for managing the Product Backlog to maximize the value of the product created by the Scrum Team. Connecting the Product Owner with the customer will help them make the best decision for both the customer and the company.'
    },
    {
      id: 'q4_26',
      question: 'Three teams are currently building a single product and pulling work from the same Product Backlog. All three teams have identified that they will need Kareem, a database specialist, to work full time in their team for the next several Sprints. What should you do as a Team Leader to solve this potential problem/dependency?',
      options: [
        'Ask Kareem to work with the HR department to recruit and hire additional database specialists. In the meantime, have the Product Owner move items that do not depend on Kareem to the top of the Product Backlog.',
        'Help the teams to self-manage this issue and help them implement their preferred solution.',
        'Manage the items in the Sprint Backlogs so that Kareem can be utilized evenly for each team.',
        'Assign Kareem to the team with the most urgent tasks first and then move him to the next team and so on until the required support is completed.'
      ],
      correctAnswer: 1,
      explanation: 'A Scrum Master can facilitate conversations with open-ended questions to help team members make the best possible decisions based on the current information. The Scrum Master does not approve or reject team decisions but ensures the team operates within the Scrum framework.'
    },
    {
      id: 'q4_27',
      question: 'Forming teams and keeping them together is a good strategy for increasing utilization rates.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 0,
      explanation: 'While keeping teams together can seem like a way to increase utilization, Agile methodologies prioritize delivering value to customers over maximizing utilization rates. Although stable teams can foster better collaboration and efficiency, the primary goal remains to deliver high-quality products that meet customer needs. Agile teams should focus on continuous improvement and adapting to change rather than simply maximizing how busy they are.'
    },
    {
      id: 'q4_28',
      question: 'Several Sprints into a project, a client is complaining to the Product Owner about the poor performance of the product. As a Scrum Master, how can you help the Product Owner?',
      options: [
        'Note the issue for the next Sprint Retrospective.',
        'Coach the Product Owner on effective ways to communicate this concern to the Developers and encourage the Product Owner to add the performance issue to the Product Backlog.',
        'Notify the team responsible for system performance.',
        'Tell the Product Owner performance is defined by the Developers.'
      ],
      correctAnswer: 1,
      explanation: 'As a Scrum Master, you can help the Product Owner by facilitating a meeting with the client to get detailed feedback on the performance issues. This feedback can then be converted into actionable items for the Developers. You can also work with the Developers to prioritize fixing the most critical performance issues and help the Product Owner communicate the plan to stakeholders. Encouraging a culture of continuous improvement where client feedback is valued is also key.'
    },
    {
      id: 'q4_29',
      question: 'Eight months ago your company started development of a new platform consisting of several components and systems. You are a Team Leader on a team building the "core" application of the platform; your application connects with all other systems. The team works in monthly Sprints, and the team is expected to deliver all functionality in three Sprints. Recently the team\'s progress was slowed down because of changes to interfaces of other components that you integrate with, as well as unavailability of the program\'s testing infrastructure. The program manager is extremely upset and angry when they find out that the team will need two more Sprints. The Project Managers of the other components confirm their adherence to the expected date. As a Team Leader, what could you do to help the Product Owner?',
      options: [
        'You inform the program manager that there is a way. You remove all items from the Product Backlog for which development is forecasted to be beyond the expected date. These are likely to be low value anyhow.',
        'You suggest working with the program manager and the project managers of the other systems on the ordering and the value of your open Product Backlog items to redefine the possible delivery date.',
        'You calculate how many additional Developers it would take to increase velocity in order to make the original date. You inform the program manager of the additional budget for these Developers. This would then allow making the expected date.',
        'You shorten your Sprints to be ready sooner.'
      ],
      correctAnswer: 1,
      explanation: 'When facing delays, a Team Leader should support the Product Owner by ensuring transparent communication about the challenges. Collaborating with stakeholders, such as the program manager and other project managers, helps create a shared understanding of dependencies and allows for collective problem-solving. It\'s also important to adjust expectations with the Product Owner based on the new reality and prioritize critical tasks to ensure essential functionality is delivered.'
    },
    {
      id: 'q4_30',
      question: 'You are a manager at an organization that develops and provides products and services for customers. A Scrum Master has approached you asking for your help. Over the course of several Sprints, his Scrum Team is been distracted by unplanned support requests from other teams causing the team to regularly fail in meeting their Sprint Goals and not delivering Increments. As a manager, what should you decide?',
      options: [
        'Work with the Scrum Team and the other teams to find ways to re-assign the interrupting work to people outside of the Scrum Team.',
        'Have the team be more flexible with the Sprint Goals and include buffer in their Sprint Backlogs for support tickets.',
        'Add additional Sprints to the project to compensate for the interruptions.',
        'Allocate additional people to the team to compensate for the interruptions.',
        'Extend the Sprint time-box to compensate for the interruptions.'
      ],
      correctAnswer: 0,
      explanation: 'By working with the Scrum Team and other teams, you can explore reassigning the disruptive work to individuals outside the Scrum Team. This helps to protect the Scrum Team\'s ability to focus on their Sprint Goals and ensures their capacity is not diminished by unrelated tasks. It is important to involve all relevant parties in this process.'
    },
    {
      id: 'q4_31',
      question: 'Re-work, when it results from feedback given by customers or stakeholders, is both expected and beneficial when adopting an Agile approach.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 1,
      explanation: 'Acknowledging that not every outcome can be predicted when working on complex products is a fundamental requirement of an Agile approach. Scrum\'s structure of frequent inspection and adaptation provides the opportunity to change course before going too far in a direction that might not deliver the intended value.'
    },
    {
      id: 'q4_32',
      question: 'The Product Owner is responsible for getting all stakeholders to agree on what provides the most value.',
      options: [
        'False',
        'True'
      ],
      correctAnswer: 0,
      explanation: 'The Product Owner is responsible for collecting input from stakeholders, but it is not their job to ensure all stakeholders agree. Their role is to listen to the input and then make an informed decision about what will be most valuable for the user or customer.'
    },
    {
      id: 'q4_33',
      question: 'Currently, your organization has a performance review process that rewards individuals based on a measure of their yearly performance. This results in some team members receiving larger bonuses than others. Some team members are unhappy as they feel the way bonuses are currently distributed is unfair as everyone contributes to their team\'s overall success. As their manager, what would be the best approach?',
      options: [
        'Bring the team members together and let them propose how to best distribute the bonuses and rewards.',
        'Explain to the team members that rewarding high-performers will motivate others to improve their own performance.'
      ],
      correctAnswer: 0,
      explanation: 'Self-organized and self-managing teams are capable of choosing how to best accomplish their work. They would be the best equipped to determine how to distribute bonuses and rewards, allowing them to take ownership of the decision.'
    },
    {
      id: 'q4_34',
      question: 'Which of the following is the primary focus of teams using an Agile approach?',
      options: [
        'Increasing customer satisfaction.',
        'Maximizing productivity.',
        'Delivering all predefined requirements.',
        'Commitment towards scope and schedule.',
        'Improving team member utilization.'
      ],
      correctAnswer: 0,
      explanation: 'The main focus of Agile teams is client satisfaction. Agile methods emphasize delivering value to the customer continuously and frequently through iterative development. This customer-centric approach ensures the final product meets the client\'s needs and provides maximum value.'
    },
    {
      id: 'q4_35',
      question: 'You have been assigned a role to lead a new company wide initiative that includes multiple product lines and multiple teams. How would you help the teams get started?',
      options: [
        'Define the reporting lines in order to know who to go to when you have questions.',
        'Work with the teams to define commitments on what will delivered and on what dates.',
        'Help the team leads plan resources in order to manage membership changes throughout the projects.',
        'Meet with the teams and explain the objective of the initiative, the specific users and their goals, and how success will be measured. Work together on the level of transparency needed.',
        'Have the teams start and be available when they have questions or need support.'
      ],
      correctAnswer: 3,
      explanation: 'As a leader, your role is to provide direction to the team and, as a servant-leader, to offer help when it is needed. Transparency is key to helping everyone, both inside and outside the team, stay aligned with the team\'s direction.'
    },
    {
      id: 'q4_36',
      question: 'You are a manager at an organization that develops and provides products and services for customers. In the past, your organization used 1:1 meetings with individual members, daily status reports, and project status meetings to understand the overall progress of the project and team \'health\'. How can Scrum provide you the same information without needing the extra meetings and status reports?',
      options: [
        'Pay attention to the improvement items that come from the Sprint Retrospectives and stay informed about the items in the Product Backlog (PBIs).',
        'The Scrum Master can provide this information as he/she is responsible for managing the team and tracking the project status.',
        'Attend Sprint Retrospectives to gain insights into how the team is working together and provide feedback on what needs to be improved.',
        'The Product Owner can provide this information as he/she is responsible for managing the team and tracking the project status.'
      ],
      correctAnswer: 0,
      explanation: 'Transparency is one of the pillars of empiricism, meaning that important aspects of the process must be visible to those responsible for the outcome. The Product Backlog offers the most insight into the project\'s progress, while Retrospectives provide information about improvements to the team\'s internal processes.'
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
        question: 'What is the primary goal for Agile Teams?',
        options: [
          'Increase Time To Market (T2M).',
          'Reduce development costs.',
          'Improve the Ability To Innovate (A2I).',
          'Improve customer happiness.',
          'Decrease Technical Debt.'
        ],
        correctAnswer: 3,
        explanation: 'The most important objective for Agile Teams is to deliver valuable and high-quality software increments to the customer frequently and consistently, ensuring customer satisfaction and adapting to changing requirements throughout the development process.'
      },
      {
        id: 'q5_2',
        question: 'What is the fundamental outcome of the adaptive development approach, Agile?',
        options: [
          'Value maximisation',
          'Delivering on time and under the budget',
          'Risk minimization',
          '100% utilization of the available resources'
        ],
        correctAnswer: 0,
        explanation: 'Value maximization is considered the fundamental outcome of Agile\'s adaptive development approach because Agile focuses on delivering the highest possible value to the customer continuously and incrementally. By prioritizing customer satisfaction and responding to change, Agile teams aim to maximize the value delivered with each iteration or increment of work.'
      },
      {
        id: 'q5_3',
        question: 'What information should be gathered before initiating the development of a new product?',
        options: [
          'Clear understanding of customer needs and market demands.',
          'Knowing how reporting will be done.',
          'Comprehensive analysis of competitors and industry trends.',
          'Knowing a one-year upfront plan that the team has to adhere to.',
          'Knowing the Story Point target per Sprint.',
          'Identification of potential technical challenges and resource requirements.'
        ],
        correctAnswer: [0, 2, 5],
        explanation: 'The correct answers focus on gathering essential information directly related to the success of the new product. Understanding customer needs helps tailor the product, analyzing competitors informs strategic decisions, and identifying technical challenges helps in resource allocation. The other options, like rigid one-year plans, reporting methods, or Story Point targets, are considered less pertinent to the initial phase of product development success compared to understanding the market and technical landscape.'
      },
      {
        id: 'q5_4',
        question: 'What questions can be posed to assess the risk level in project delivery?',
        options: [
          'How often do team members take breaks during work hours?',
          'How long is the Sprint?',
          'How stable and complex is the technology?',
          'How is the relationship between Scrum Team members?',
          'How complex are the requirements?'
        ],
        correctAnswer: [1, 2, 3, 4],
        explanation: 'The complexity of requirements or technology, as well as poor team relationships, can introduce risks. The stability and complexity of the technology can also affect the project\'s overall risk. Shorter Sprints can be used to create more learning cycles and limit the risk of cost and effort to a smaller timeframe. How often team members take breaks is not related to project risk.'
      },
      {
        id: 'q5_5',
        question: 'As a senior manager, a Scrum Team approaches you with a request to hire two additional developers, citing that it would enhance the team\'s capacity to deliver value promptly. You possess the necessary budget and have confidence in the team\'s judgment. What steps would you take in response to this request?',
        options: [
          'Conduct a detailed analysis of the team\'s historical performance and productivity metrics before making any decision on hiring, leading to unnecessary delays.',
          'Hire the additional developers immediately without assessing the team\'s current workload and capacity, risking overstaffing and resource misallocation.',
          'Request the Scrum Team to provide a comprehensive business case justifying the need for additional developers, adding unnecessary bureaucratic hurdles to the process.',
          'Reject the request outright without further consideration, assuming that the current team size is sufficient to handle the workload adequately.',
          'Initiate a lengthy approval process involving multiple stakeholders, delaying the hiring decision and potentially hindering the team\'s progress.',
          'Trust the judgment of the Scrum Team and proceed with hiring the two additional developers to enhance productivity and value delivery.'
        ],
        correctAnswer: 5,
        explanation: 'Trusting the Scrum Team\'s judgment aligns with the Agile principle of empowering self-organizing teams. The team is in the best position to assess their needs for delivering value. By acting on their request promptly, the organization shows trust, supports the team\'s autonomy, and promotes a culture of collaboration and accountability.'
      },
      {
        id: 'q5_6',
        question: 'When using an Agile approach, company leaders and the team developing the product have the final say on whether a product release delivers value or not.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'The market, including customers and users, ultimately determines if a product release is valuable. The opinions of leaders and developers can be incorrect; the only way to truly know if something is valuable is to present it to real users.'
      },
      {
        id: 'q5_7',
        question: 'What are the characteristics of distributed Scrum Teams, where five developers work in different time zones?',
        options: [
          'Distributed Scrum Teams should have rigid and inflexible schedules to ensure uniformity across time zones.',
          'Team members should work independently without the need for communication or collaboration.',
          'Team members in different time zones should be excluded from certain activities to avoid complications.',
          'Agile ceremonies such as Daily Stand-ups and Sprint Reviews may require adjustments to accommodate team members\' schedules in different time zones.',
          'Effective communication channels are established to ensure timely collaboration and information exchange among team members in different time zones.',
          'Synchronization of work across time zones is not necessary for distributed Scrum Teams.'
        ],
        correctAnswer: [3, 4],
        explanation: 'For distributed Scrum Teams, effective communication channels are essential to ensure seamless collaboration across different time zones. It is also necessary to adjust Agile ceremonies, like Daily Stand-ups, to accommodate everyone\'s schedules. Actions like excluding team members or imposing rigid schedules can damage team cohesion.'
      },
      {
        id: 'q5_8',
        question: 'What is the Key Value measure that assesses the duration between when an organization receives feedback or new information and its subsequent response to that feedback?',
        options: [
          'Customer Cycle Time',
          'Lead Time for Changes',
          'Time-to-Learn',
          'Mean Time to Repair',
          'Time to Restore Service',
          'Time to Pivot'
        ],
        correctAnswer: 5,
        explanation: 'Time to Pivot measures business Agility by tracking the time between receiving feedback and responding to it. An example is the time it takes for a company to react after a competitor releases a market-winning feature.'
      },
      {
        id: 'q5_9',
        question: 'What impact is expected on the original Scrum Team\'s velocity with the addition of three new Scrum Teams, considering that the existing team has been working together for several Sprints and achieving an average velocity of 30?',
        options: [
          'The velocity of the original Scrum Team is expected to increase once the new teams become mature enough.',
          'Initially, the average velocity of the original Scrum Team will decrease.',
          'The addition of new teams will lead to a significant decrease in the original Scrum Team\'s velocity.',
          'The original Scrum Team\'s velocity will remain unaffected.',
          'Initially, the addition of new teams will result in a decrease in the original Scrum Team\'s velocity.',
          'The velocity of the original Scrum Team will steadily increase.'
        ],
        correctAnswer: [0, 1],
        explanation: 'When new teams are added, the original team\'s velocity is likely to decrease at first because they will need to spend time mentoring and training the new members. However, once the new teams are up to speed, the original team\'s velocity is expected to increase as the workload is distributed, potentially increasing overall productivity.'
      },
      {
        id: 'q5_10',
        question: 'Scrum emphasizes value delivery. Which of the following factors does NOT directly influence the team\'s ability to deliver value?',
        options: [
          'The average velocity of the Scrum Teams, calculated based on Product Backlog items that have met the definition of done.',
          'User happiness.',
          'A reliable indicator is whether the team consistently achieves its Sprint Goals.',
          'Technical debt.'
        ],
        correctAnswer: 0,
        explanation: 'Velocity is not directly correlated with value; it primarily measures speed. Completing more Product Backlog Items does not guarantee the delivery of more value. On the other hand, consistently achieving Sprint Goals, user satisfaction, and managing technical debt are all factors that influence a team\'s ability to deliver value.'
      },
      {
        id: 'q5_11',
        question: 'How can Sam, as the Scrum Master of a newly established Scrum Team, support their effectiveness during their first Sprint?',
        options: [
          'Have the Scrum Team members discuss the process for turning Product Backlog items into increments.',
          'Have the direct manager of each Developer introduce each member and his/her responsibilities.',
          'Introduce each other and let them share their skills and work experience with each other.',
          'Ensure the Definition of Done is transparent and understood from everyone.',
          'Have the Product Owner discuss the product or project, its history, goals, and context, as well as answer questions.',
          'Make sure that all Scrum Team members have compatible personalities.'
        ],
        correctAnswer: [0, 2, 3, 4],
        explanation: 'To support a new team\'s effectiveness, a Scrum Master should facilitate introductions to build cohesion, ensure the Definition of Done is clear to set expectations, have the team discuss their process for creating increments, and have the Product Owner provide context on the project\'s goals. These actions help align the team and create a foundation for a productive first Sprint.'
      },
      {
        id: 'q5_12',
        question: 'When making an investment decision between two products, consider the following scenario: Product A boasts low Current Value but exhibits high Unrealized Value potential. Conversely, Product B presents high Current Value but features low Unrealized Value. Which product warrants a greater investment?',
        options: [
          'None of them',
          'The Product B',
          'Both of them',
          'The Product A'
        ],
        correctAnswer: 3,
        explanation: 'A product might have a low Current Value (CV) if it is in an early stage of development, but it could possess a high Unrealized Value (UV), indicating significant market potential. In this situation, investing in Product A to improve its CV is justified by the potential returns. Product B, with its high CV and low UV, is more like a "cash cow" that is profitable but nearing the end of its investment cycle.'
      },
      {
        id: 'q5_13',
        question: 'How should multiple Scrum Teams, working from the same Product Backlog, select the Product Backlog items their teams plan to work on?',
        options: [
          'The Scrum Team with the highest productivity will select the items first.',
          'The Product Owner will present the work and the Developers will select the items they will work on.',
          'Each Scrum Team would select an equal number of items.',
          'The Product Owner creates separate Product Backlogs for each team.',
          'The Product Owner assigns the work to each team.'
        ],
        correctAnswer: 1,
        explanation: 'During Sprint Planning, the Product Owner presents the work items from the single Product Backlog. The Developers from all teams then collaborate to understand the items and, based on their capacity, select the work for the upcoming Sprint. This ensures transparency and alignment across the teams.'
      },
      {
        id: 'q5_14',
        question: 'The director of engineering in your organization always stresses the importance of meeting deadlines in order for the engineering department to be seen as a reliable source for the product management department. The director has calculated that the team’s velocity needs to increase an additional 15% to meet the commitment he made to management for the release date of the product. He asks Steven, the team’s Scrum Master, to increase his team’s velocity. Which would be the best two responses for Steven to take?',
        options: [
          'He informs the director of organizational impediments he is aware of that prevent the team from being more productive. He suggests collaborating with him on how to remove these impediments.',
          'He tells the director that this is not his responsibility in Scrum. He tells the director to work with the Product Owner to check whether the estimates on the Product Backlog are being respected during implementation.',
          'He explains how a team uses the velocity of a Sprint primarily to forecast work for the next Sprint, not to perfectly predict future productivity. He refers the director to the Product Owner for all information concerning the progress of development.',
          'He helps the director understand that it typically takes a few Sprints for a team to gradually increase the velocity up to the level expected. Meanwhile he presents this to the team as a challenge and a company goal, leaving it however up to them to figure out exactly how to achieve this.',
          'He educates his director how it is part of a team’s self-management to improve velocity. He invites the director to the next Sprint Retrospective to brainstorm on how they can improve.'
        ],
        correctAnswer: [0, 2],
        explanation: 'The Scrum Master serves the organization by helping stakeholders understand Scrum and by making changes that increase the team\'s productivity. In this case, Steven should inform the director about any organizational impediments that are hindering the team\'s productivity and suggest working together to remove them. He should also clarify that a team\'s velocity is primarily a tool for forecasting the next Sprint\'s work, not for making long-term predictions about productivity.'
      },
      {
        id: 'q5_15',
        question: 'During a Product Backlog refinement meeting, the Product Owner introduces a business objective that will be worked on for the next several Sprints. The Product Owner envisions several key features necessary to be delivered in order to meet the business objective. As the features will be using sensitive user data it will be subjected to external security audits. These non-functional security requirements were not applicable to previous Increments. What are two good ways the Developers can handle these high-security concerns?',
        options: [
          'They should be planned in parallel Sprints so not to disrupt the Developers during feature development. After security concerns have been finalized, they will be applied to the work that is already completed before new feature development can continue.',
          'They should be handled in a parallel Sprint by a separate security team so that security can be resolved through application enhancements without impacting the functional development.',
          'They are added to the Product Backlog and addressed throughout the next Sprints, combined with creating the business functionality in those Sprints, no matter how small the business functionality.',
          'A complete list of security-related Product Backlog items needs to be created before starting a new Sprint.',
          'During the Sprint Retrospective, the Developers assess how to add these expectations to their Definition of Done so every future Increment will meet these security requirements. If needed they can work with external specialists to better understand the requirements.'
        ],
        correctAnswer: [2, 4],
        explanation: 'Two effective ways for the Developers to handle new, high-security requirements are to incorporate them into the team\'s Definition of Done and to address them incrementally alongside business functionality in upcoming Sprints. The first approach ensures that security standards are consistently met in all future work. The second approach maintains a balance between delivering business value and addressing critical non-functional requirements. Both actions represent a proactive and collaborative method for integrating security concerns into the project.'
      },
      {
        id: 'q5_16',
        question: 'During the Sprint, the Developers of the Scrum Team realize that they may not achieve the Sprint Goal with the current work plan. After discussing the situation, they decide on an alternative approach to reach the Sprint Goal by adjusting the planned work. Which Scrum Values are demonstrated in this scenario?',
        options: [
          'Transparency, Respect',
          'Focus, Transparency',
          'Courage, Focus',
          'Inspection, Adaption',
          'Courage, Commitment'
        ],
        correctAnswer: 4,
        explanation: 'The Scrum Team demonstrates courage by acknowledging they might not meet the Sprint Goal with their original plan and being willing to address the problem directly. They also show commitment by staying dedicated to the Sprint Goal and collaborating to find an alternative solution to achieve it.'
      },
      {
        id: 'q5_17',
        question: 'In Sprint Planning, the Product Owner and Developers encounter difficulty in reaching a consensus on the highest priority Product Backlog items, leading to uncertainty regarding the forecasted number of items for the upcoming Sprint. Despite this challenge, both parties manage to establish a shared Sprint Goal. In this scenario, what actions should the Scrum Master advocate for?',
        options: [
          'Scrum is not functioning effectively. Conduct comprehensive training for the entire team before initiating a new Sprint.',
          'During the next Sprint Retrospective discuss why this happened and what changes will make it less likely to recur.',
          'The Product Backlog refinement did not suffice to generate Product Backlog items that could be clearly understood and forecast for a Sprint. Encourage everyone to take the necessary time to thoroughly analyze the Product Backlog, and then reconvene for further discussion.',
          'Extend Sprint Planning until the Developers have a thorough understanding of a sufficient number of Product Backlog items to make a comprehensive forecast, then start the Sprint.',
          'Forecast the Product Backlog item that is most likely to align with the Sprint Goal and generate the Sprint Backlog. Conclude Sprint Planning and initiate development activities. Throughout the Sprint, persist in analyzing, decomposing, and augmenting additional functionalities as needed.'
        ],
        correctAnswer: [1, 4],
        explanation: 'This situation points to an issue with Product Backlog refinement. The appropriate actions are to discuss the root cause in the next Sprint Retrospective to prevent it from happening again, which promotes continuous improvement. Additionally, encouraging the team to take the necessary time to analyze the backlog ensures that they can make well-informed decisions during Sprint Planning.'
      },
      {
        id: 'q5_18',
        question: 'In Agile methodology, it is both anticipated and advantageous to frequently adjust plans in response to feedback from customers or stakeholders.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Adaptability is a central principle of Agile methodology. Agile processes are designed to be responsive to changing requirements and feedback. By adjusting plans based on real-time input, teams can ensure they deliver the most valuable results to their customers.'
      },
      {
        id: 'q5_19',
        question: 'Which of the following statements best describes Product Backlog items that are selected at the Sprint Planning to be included in the current Sprint?',
        options: [
          'They are stated as tasks and mapped to User Stories.',
          'They are stated as use cases and must have test cases identified for acceptance testing.',
          'Developers decide the order of the items.',
          'They are User Stories such that they can be assigned to one person.',
          'They are items that have been refined during Product Backlog refinement and are deemed ready for inclusion in the Sprint based on the team\'s capacity and Sprint Goal.'
        ],
        correctAnswer: 4,
        explanation: 'According to the Scrum Guide, items selected for a Sprint must be refined and ready for development. The refinement process ensures items are clear, detailed, and estimated, which allows the team to plan their work effectively and maximize their efficiency in achieving the Sprint Goal.'
      },
      {
        id: 'q5_20',
        question: 'Which of the following is not correct about the Product Owner accountability?',
        options: [
          'Answers questions about the items in the Sprint Backlog',
          'Is responsible for maximizing the value of the product',
          'Explains the Product Backlog items',
          'The Product Owner should be cross-functional'
        ],
        correctAnswer: 3,
        explanation: 'It is the entire Scrum Team that is cross-functional, not the Product Owner alone. The Product Owner\'s primary responsibility is to maximize the value of the product being developed.'
      },
      {
        id: 'q5_21',
        question: 'If a Scrum Team does not finish all the items by the end of the Sprint, what should happen to unfinished items in the Sprint Backlog at the end of the Sprint?',
        options: [
          'The Definition of Done is adapted so that the items can be considered done under the new definition.',
          'The Sprint is temporarily extended. The Sprint ends when all items are finished.',
          'The items are resized and put back in the Product Backlog.',
          'They are put back in the Product Backlog with the original estimates.'
        ],
        correctAnswer: 2,
        explanation: 'Unfinished items from a Sprint are re-estimated and moved back to the Product Backlog. This keeps the Product Backlog current and allows the Product Owner to re-evaluate the priority of the unfinished items. This practice maintains transparency and helps prevent wasted effort on items that may no longer be a priority.'
      },
      {
        id: 'q5_22',
        question: 'A Scrum Team with eight Developers has started working on items selected during Sprint Planning. However, halfway through the Sprint, they realize they underestimated the workload and might not finish all Sprint Backlog items by the Sprint\'s end. What is the most appropriate course of action?',
        options: [
          'Move some of the items to another Scrum Team that has spare capacity.',
          'As soon as possible, work with the Product Owner to remove some items from the Sprint Backlog.',
          'Continue working on the most important items and share with the Product Owner what was done and not done at the Sprint Review.',
          'Modify the Definition of Done until all of the work is able to be finished by the end of the Sprint.'
        ],
        correctAnswer: 1,
        explanation: 'The best course of action is to collaborate with the Product Owner to remove some items from the Sprint Backlog. This ensures the team can focus on the highest-priority tasks, maintain transparency, and still deliver a valuable product Increment by the end of the Sprint.'
      },
      {
        id: 'q5_23',
        question: 'While Developers are working during the Sprint there are conversations regarding functional requirements only and nothing about non-functional ones. What should you recommend, as a Team Leader, to the Developers to do with non-functional requirements?',
        options: [
          'Assign them to the technical leads on the team.',
          'They will be addressed in the Integration Sprints.',
          'Add them to a separate non-functional requirements list.',
          'Ensure they are addressed in every Increment.'
        ],
        correctAnswer: 3,
        explanation: 'Non-functional requirements should be handled alongside functional development work. They can be included as acceptance criteria, as separate items, or as part of the Definition of Done. Ignoring them can lead to technical debt in the future.'
      },
      {
        id: 'q5_24',
        question: 'In Scrum, why is the term "forecast" used when planning?',
        options: [
          'To highlight that planning involves predicting future outcomes based on current knowledge.',
          'To indicate that the plan is set in stone and cannot be changed.',
          'To imply that the plan is infallible and will not be affected by any external factors.',
          'To suggest that the team has full control over every aspect of the project.',
          'To emphasize that the team is making a binding commitment to deliver all planned work.'
        ],
        correctAnswer: 0,
        explanation: 'The term "forecast" is used in Scrum to signify that a plan is based on the team\'s best understanding at a specific point in time. It acknowledges that there are uncertainties and that the plan will likely need to be adapted as new information becomes available, which aligns with the Agile principle of responding to change.'
      },
      {
        id: 'q5_25',
        question: 'Releasing a small increment that provides value, inspecting the results, and planning the next steps is the correct approach when operating under conditions of uncertainty.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'This "inspect and adapt" cycle is a core principle of Agile and Scrum. By releasing small increments, teams can get frequent feedback, which helps to validate their assumptions and make adjustments as needed. This iterative approach is essential for navigating the uncertainty inherent in complex projects.'
      },
      {
        id: 'q5_26',
        question: 'Toby, the Product Owner of your team has noticed several Developers from the Scrum Team are working together on backlog items. He expresses concern that this "pair programming" will negatively impact the amount of work being done. What do you do as a Scrum Master?',
        options: [
          'Teach the Product Owner that the amount of work being done should not be the primary measure of progress.',
          'Toby should raise this with the director.',
          'Suggest the Product Owner find a suitable moment to show interest and ask the developers why they use this approach.',
          'Make a note to possibly address this during the Sprint Retrospective.',
          'Teach the Product Owner that the Scrum Team decides how best to do their work.',
          'Raise this as soon as possible.'
        ],
        correctAnswer: [0, 2, 4],
        explanation: 'As a Scrum Master, it is important to educate the Product Owner that progress should not be measured solely by the volume of work completed. The Scrum Team has the autonomy to decide how to perform their work, which includes practices like pair programming. To foster understanding and trust, the Product Owner should be encouraged to have an open conversation with the developers about their methods. This issue should be addressed in the Sprint Retrospective, not just noted as a possibility.'
      },
      {
        id: 'q5_27',
        question: 'James, serving as the Scrum Master for his team, has been diligently coaching them on understanding Sprint Goals. Which statement is misleading in regards to the Sprint Goal?',
        options: [
          'The Product Owner respects the Developers\' opinion on whether they can achieve it.',
          'The Scrum Team discusses openly about alternative ways to reach it.',
          'If it doesn\'t seem achievable, the Developers have the courage to tell the Product Owner.',
          'It is only a forecast and changes during the Sprint as more is learned.',
          'It helps increase focus.',
          'The Developers commit to it.'
        ],
        correctAnswer: 3,
        explanation: 'The Sprint Goal is a commitment made by the Developers and is intended to remain stable throughout the Sprint to provide focus and direction. Unlike the Sprint Backlog, it is not a forecast that changes as more is learned.'
      },
      {
        id: 'q5_28',
        question: 'During Sprint Planning, the Scrum Team successfully outlined a Sprint Goal. However, they encountered difficulty in gaining a clear understanding of the necessary items to achieve this goal throughout the Sprint. Consequently, the Developers lacked confidence in their ability to forecast the quantity of work they could accomplish within the Sprint. What are the most appropriate actions to take?',
        options: [
          'Discuss other Product Backlog items and have the team select only those that conform to the Definition of Ready. Once the Developers commit to the selected items, define the Sprint Goal.',
          'Temporarily extend the Sprint time-box so that the Scrum Team\'s velocity is not impacted.',
          'In the upcoming Sprint Retrospective, discuss why this happened and what can be done to make it less likely to happen again.',
          'Have the Scrum Team forecast the most likely items to meet the Sprint Goal and create a Sprint Backlog based on enough information to start development work. During development, the team continuously analyzes and adapts the Sprint Backlog to meet the goal.',
          'Extend the Sprint Planning until all Developers have sufficient information to commit to the Sprint\'s scope.'
        ],
        correctAnswer: [2, 3],
        explanation: 'The situation indicates a problem with the clarity of the Product Backlog items. The team should forecast the work they can confidently start and then continue to analyze and adapt the Sprint Backlog as they proceed. It is also crucial to discuss the root cause of the issue in the next Sprint Retrospective to improve the process for future Sprints.'
      },
      {
        id: 'q5_29',
        question: 'Which of the following statements below is NOT a good reason to keep an Agile team together?',
        options: [
          'To improve focus.',
          'To improve collaboration.',
          'To increase utilization of the Developers.',
          'To improve the ability to forecast.'
        ],
        correctAnswer: 2,
        explanation: 'Keeping an Agile team together simply to increase developer utilization is not a good reason because it contradicts Agile principles. Agile focuses on delivering value, collaboration, and maintaining a sustainable pace, not on maximizing individual utilization, which can lead to burnout and lower quality work.'
      },
      {
        id: 'q5_30',
        question: 'Which of the following helps in addressing complex problems?',
        options: [
          'Probe-Sense-Respond over Act-Sense-Respond.',
          'Focusing on best practices.',
          'Sense-Analyze-Respond over Probe-Sense-Respond.',
          'Serving and leading over command-and-control management.',
          'Having safe environments for experimentation.',
          'Having experts for providing solutions.'
        ],
        correctAnswer: [0, 3, 4],
        explanation: 'To address complex problems effectively, it is beneficial to use a "Probe-Sense-Respond" approach, which favors exploration and learning over immediate action. Additionally, a leadership style based on serving the team rather than commanding them fosters collaboration and empowerment. Creating a safe environment for experimentation is also vital, as it allows teams to innovate and learn from both their successes and failures.'
      },
      {
        id: 'q5_31',
        question: 'Which of the following helps a team in applying Scrum?',
        options: [
          'Having clear shared goals and commitments.',
          'Having a Product Owner that is able to shield the Developers from the Stakeholders.',
          'The Scrum Team understanding that empiricism helps in addressing complex work.',
          'The Scrum Team is self-managing.',
          'Understanding that having a physical Scrum Board is mandatory for transparency.',
          'The Technical Project Managers are involved in forming teams and selecting the technology.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: 'Several factors contribute to a team\'s effectiveness in applying Scrum. Understanding that empiricism (transparency, inspection, and adaptation) is essential for handling complex work is crucial. The team\'s ability to self-manage also enhances productivity by fostering autonomy. Finally, having clear, shared goals and commitments provides the team with direction and alignment.'
      },
      {
        id: 'q5_32',
        question: 'When the Scrum Team fully embraces and embodies the Scrum Values in their daily work, the foundational pillars of transparency, inspection, and adaptation become vibrant and effective. This enhances something fundamental to all Scrum implementations. What is it?',
        options: [
          'Trust',
          'Agility',
          'Empiricism',
          'Value',
          'Efficiency',
          'Predictability'
        ],
        correctAnswer: 0,
        explanation: 'Trust is the fundamental aspect that is enhanced when a Scrum Team embodies the Scrum Values and actively uses transparency, inspection, and adaptation. Trust is crucial for fostering collaboration, openness, and confidence among team members and stakeholders, which enables the successful delivery of value.'
      },
      {
        id: 'q5_33',
        question: 'During the Sprint Retrospective, as the team discusses the quality issues hindering the delivery of a releasable Increment, the Developers emphasize their accomplishment of a high velocity. In this scenario, what are the two most advisable actions for Steven, their Scrum Master, to undertake?',
        options: [
          'Stress the value of working software over measured velocity.',
          'Acknowledge the hard work but remind the Developers that they need to improve in order to do even more in the next Sprint.',
          'Agree and acknowledge the hard work of Developers, so they will be motivated to do even more in the next Sprint.',
          'Help the Developers focus on creating high-value Increments that meet the Definition of Done, even if the measured velocity drops in the next Sprint.'
        ],
        correctAnswer: [0, 3],
        explanation: 'In this situation, the Scrum Master should take actions that reinforce the importance of delivering valuable, high-quality increments. It is advisable for Steven to guide the team to focus on creating increments that meet the Definition of Done, even if it results in a lower velocity for the next Sprint. He should also emphasize the importance of working software over simply achieving a high velocity metric.'
      },
      {
        id: 'q5_34',
        question: 'What factors might have contributed to the stakeholders\' surprise and dissatisfaction when reviewing the first release, which consists of increments from the past 7 Sprints?',
        options: [
          'The Product Owner had not kept the stakeholders updated on the progress of the product.',
          'The Head of Product had not been validating the Product Backlog.',
          'The Scrum Master had not ensured that the project is adequately transparent.',
          'The Scrum Team and stakeholders had not been using the Sprint Reviews to inspect outcomes and determine future adaptations.',
          'The stakeholders were not attending the Sprint Reviews.'
        ],
        correctAnswer: [0, 2, 3, 4],
        explanation: 'Stakeholder dissatisfaction can arise from a lack of communication and transparency. If the Product Owner did not keep stakeholders informed, if the Scrum Master failed to ensure transparency, or if stakeholders did not attend Sprint Reviews, it could lead to a misalignment of expectations. Sprint Reviews are a critical opportunity for inspection and adaptation, and a failure to use them effectively can contribute to such issues.'
      },
      {
        id: 'q5_35',
        question: 'What is the optimal approach for collecting progress updates from multiple Agile Teams working on various products, given your role as CEO?',
        options: [
          'Sending out a company-wide email asking for updates.',
          'Conducting one-on-one meetings with each team member to gather information.',
          'Reviewing the teams\' progress solely based on the completion of assigned tasks.',
          'Ask each team to present the progress toward the Product Goals on a monthly basis.',
          'Relying solely on project management software dashboards for updates.',
          'Not collecting progress updates and trusting each team to manage themselves independently.'
        ],
        correctAnswer: 3,
        explanation: 'Requesting detailed status reports in individual meetings is the recommended approach because it facilitates direct communication between the CEO and each Agile team. This ensures accurate and comprehensive updates, allowing the CEO to address concerns and provide guidance effectively. It also promotes accountability within the teams.'
      },
      {
        id: 'q5_36',
        question: 'What type of organizational structure is best for forming Scrum Teams?',
        options: [
          'Hierarchical structure',
          'Matrix structure',
          'Network structure',
          'Cross-functional structure',
          'Functional structure',
          'Divisional structure'
        ],
        correctAnswer: 3,
        explanation: 'A cross-functional structure is the most suitable for Scrum Teams as it gathers individuals with a variety of skills to collaborate effectively. This structure fosters collaboration, adaptability, and autonomy, allowing teams to deliver value incrementally and respond to changes efficiently, which is a core tenet of Scrum. Other structures like hierarchical or functional can create silos and hinder the self-organization necessary for Scrum.'
      }
    ]
  },
  {
    id: 'palebm-mock-1',
    title: 'PAL EBM Mock Exam #1',
    description: 'Practice exam for the Professional Agile Leadership - Evidence-Based Management certification.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q1_1',
        question: 'An organization manages a portfolio of products across multiple industries. The organization is also trying to evaluate the effort and risk of launching a new product in a new market. The product has less competition and is wondering if it should pursue these untapped opportunities. The company wants to know if it should make further investments. Which KVA should the organization evaluate?',
        options: [
          'Current Value',
          'Time to Market',
          'Unrealized Value',
          'Ability to Innovate'
        ],
        correctAnswer: 2,
        explanation: 'Unrealized Value suggests the potential future value that could be realized if the organization could meet the needs of all potential customers or users. The goal of looking at Unrealized Value is for the organization to maximize the value that it realizes from a product or service over time. When customers, users, or clients experience a gap between their current experience and the experience that they would like to have, the difference between the two represents an opportunity; this opportunity is measured by Unrealized Value. Questions that organizations need to continually re-evaluate for unrealized value are: Can any additional value be created by our organization in this market or other markets? Is it worth the effort and risk to pursue these untapped opportunities? Should further investments be made to capture additional Unrealized Value?'
      },
      {
        id: 'q1_2',
        question: 'Your team has been tracking the Time to Market metric and noticed it has been steadily decreasing, which is positive. However, customer satisfaction has not improved correspondingly. What approach should you take?',
        options: [
          'Continue to reduce Time to Market as it is the most important metric.',
          'Conduct customer feedback sessions to understand their needs and refine the Product Backlog to better align with customer expectations.',
          'Increase the team size to further speed up development.',
          'Focus on reducing costs to improve profitability.'
        ],
        correctAnswer: 1,
        explanation: 'While a decreasing Time to Market is generally positive, it is crucial to ensure that the product being delivered meets customer needs and expectations. If customer satisfaction has not improved, it indicates that there might be a disconnect between what is being delivered and what customers actually value.'
      },
      {
        id: 'q1_3',
        question: 'Which of the following statements about EBM (Evidence-Based Management) are true?',
        options: [
          'Based on the best available evidence, EBM (Evidence-based management) helps organizations improve their ability to make decisions on ways to improve.',
          'Evidence-based management improves the quality of managerial decision-making through the integration of current best evidence with practical experience and human values.',
          'EBM (Evidence Based management) does not need the measures of current conditions nor does it need the measure of experimental impacts.',
          'EBM (Evidence-based management) enables organizations to systematically improve their performance over time and refine their goals based on better information.'
        ],
        correctAnswer: [0, 1, 3],
        explanation: 'Using intentional experimentation and evidence (measures), EBM enables organizations to systematically improve their performance over time and refine their goals based on better information. EBM helps organizations consider the best available evidence (to help them make decisions on ways to improve). EBM emphasizes using data, evidence, and experimentation to inform decision-making, leading to improved organizational performance.'
      },
      {
        id: 'q1_4',
        question: 'True or False, A benefit of using an agile approach is managing business risk more effectively.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Unmanaged risk can reduce the long-term ability of an organization to deliver value to its customers. An Agile approach helps manage business risk more effectively by: Incremental Delivery: Delivering working increments early and regularly allows stakeholders to review progress and ensure alignment with business goals. Adaptability to Change: Agile accommodates changes in requirements, reducing the risk of delivering an outdated or irrelevant product. Continuous Feedback: Frequent interactions with customers and stakeholders provide opportunities to detect and address potential risks early. Transparency: Agile ceremonies, such as Sprint Reviews and Daily Scrums, make progress and challenges visible, enabling proactive risk mitigation.'
      },
      {
        id: 'q1_5',
        question: 'Which are the three types of goals described in the Evidence-Based Management framework?',
        options: [
          'The Strategic Goal.',
          'Nexus Goals',
          'The Intermediate Goal.',
          'Tactical Goals.',
          'Sprint Goals.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: 'EBM focuses on three levels of goals: Strategic Goals, Intermediate Goals, and Immediate Tactical Goals.'
      },
      {
        id: 'q1_6',
        question: 'What should be the Product Owner\'s approach if the Unrealized Value (UV) metric indicates a high potential value in an untapped market segment?',
        options: [
          'Continue focusing on the current market segment to maintain stability.',
          'Prioritize exploring the new market segment by adjusting the Product Backlog.',
          'Increase the team\'s velocity to tackle both current and potential markets.',
          'Allocate additional resources to support the exploration of the new segment without changing current priorities.'
        ],
        correctAnswer: 1,
        explanation: 'Unrealized Value signifies the potential for future growth and success. A high UV in a new market segment suggests a significant opportunity. Product Backlog prioritization allows the Product Owner to adapt to this new information. By adding user stories or features that target the untapped segment, the team can explore this potential and potentially capture that value.'
      },
      {
        id: 'q1_7',
        question: 'Unrealized Value is a gap that can be measured by looking at the difference between: (choose the best option)',
        options: [
          'Current product/service market size when compared to the total market size.',
          'Actual user\'s experience when compared to the user\'s desired experience.',
          'Product gap when compared to the roadmap.',
          'All of the above.'
        ],
        correctAnswer: 1,
        explanation: 'In EBM, we refer to this as Unrealized Value, which is the satisfaction gap between a beneficiary’s desired outcome and their current experience. When customers, users, or clients experience a gap between their current experience and the experience that they would like to have, the difference between the two represents an opportunity; this opportunity is measured by Unrealized Value.'
      },
      {
        id: 'q1_8',
        question: 'True or False, In order to stay aligned with the organizational strategy, goals should be achievable within the budget cycle.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'When dealing with complex problems, an organization does not know if the goals we set are achievable or not. It provides them with an objective on which they can base their experiments. Goals can change based on what the organization learns. Being within a budget does not necessarily guarantee alignment with business strategy.'
      },
      {
        id: 'q1_9',
        question: 'Organizations run experiments that are intended to advance them toward their current Intermediate Goal. As they run these experiments and gather results, they use the evidence to: (choose the best two options)',
        options: [
          'Evaluate their existing strategic, intermediate, and immediate actionable goals and determine their next steps to advance toward these.',
          'Create a work plan for the entire release.',
          'Validate or reject a hypothesis.',
          'Create reliable estimates.'
        ],
        correctAnswer: [0, 2],
        explanation: 'As they run these experiments and gather results, they use the evidence they obtain to evaluate their existing strategic, intermediate and immediate actionable goals and determine their next steps to advance toward these. Based on the results, hypotheses are also validated or rejected.'
      },
      {
        id: 'q1_10',
        question: 'What are the key characteristics of an effective strategic goal?',
        options: [
          'A strategic goal should be measurable.',
          'A strategic goal is usually focused on achieving a highly desirable but unrealized outcome.',
          'A strategic goal should encourage organizational alignment.',
          'A strategic goal should be transparent.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'A strategic goal should have clear metrics or criteria to evaluate progress and determine when the goal has been achieved. Measurability ensures that organizations can track performance and make data-driven decisions.'
      },
      {
        id: 'q1_11',
        question: 'Which Key Value Area would the following Key Value Measures (KVM) help: Defect Trends, Installed Version Index, Technical Debt, Active Product (Code) Branches?',
        options: [
          'Current Value',
          'The experiment loop',
          'Unrealized Value',
          'Time-to-Market',
          'Ability to Innovate'
        ],
        correctAnswer: 4,
        explanation: 'The effectiveness of an organization to deliver new capabilities that might better meet customer needs is called the Ability to Innovate. Defect Trends, Installed Version Index, Technical Debt, and Active Product (Code) Branches come under A2I.'
      },
      {
        id: 'q1_12',
        question: 'Which of the following might NOT help a team increase its frequency of delivery?',
        options: [
          'Automating the delivery pipeline.',
          'Product Backlog refinements.',
          'Reducing cross-team dependencies.',
          'Synchronizing release schedules across teams.'
        ],
        correctAnswer: 3,
        explanation: 'While using a common release schedule could increase team synchronization, it is the role of the Product Owner to set common goals and help the teams to deliver value. Having the same release schedule might be a good recommendation but it does not guarantee increased value or frequent delivery (and thus time to market). Synchronization often requires waiting for multiple teams to be ready, which can slow down the delivery process.'
      },
      {
        id: 'q1_13',
        question: 'What benefits can an organization gain from short iterations?',
        options: [
          'Validate hypotheses faster.',
          'Minimize and control risk better.',
          'Get feedback from stakeholders faster.',
          'Understand customers’ needs better.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 4,
        explanation: 'Short iterations in Agile development offer several benefits to organizations: Validate hypotheses faster: Short iterations allow for quicker testing of assumptions and hypotheses about the product, helping to validate or invalidate them early in the development process. Minimize and control risk better: By working in short iterations, teams can identify and address risks early, reducing the likelihood of major issues or failures later in the project. Get feedback from stakeholders faster: Short iterations enable organizations to gather feedback from stakeholders more frequently, ensuring that the product aligns with their needs and expectations. Understand customer\'s needs better: Regular interactions with stakeholders and continuous delivery of increments of the product help in gaining a deeper understanding of customer needs and preferences.'
      },
      {
        id: 'q1_14',
        question: 'Which statement describes the best way to learn from experiments?',
        options: [
          'Running one experiment on a product that is open-ended is the best way to gather the most sufficient and accurate data.',
          'Running multiple experiments on the same product at the same time is the best way to reduce the cost of testing new ideas.',
          'Running multiple experiments on the same product at the same time is the best way to reduce the time and complexity of testing new ideas.',
          'Running one experiment on the product at a time is the best way to understand how the results observed affect desired outcomes.'
        ],
        correctAnswer: 3,
        explanation: 'Running one experiment on the product at a time is the best way to understand how the results observed affect desired outcomes. This approach allows for a clear understanding of the specific impact of each experiment on the outcome of interest.'
      },
      {
        id: 'q1_15',
        question: 'Your company is considering investing in a large agile transformation. What should you measure to know if your initiative is successful?',
        options: [
          'The number of on-time, on-budget, and on-scope projects.',
          'Average team velocity.',
          'The number of Scrum Teams.',
          'Customer outcomes.',
          'All of the above.'
        ],
        correctAnswer: 3,
        explanation: 'Customer outcomes are the most important measure of an agile transformation\'s success because they are a direct reflection of the value that the organization is delivering to its customers.'
      },
      {
        id: 'q1_16',
        question: 'Under what circumstances does an organization need an empirical approach to solving a problem?',
        options: [
          'When the market is changing rapidly.',
          'When the technical risk is high.',
          'When working with new and unproven technology.',
          'When the business risk is high.',
          'All of the above.'
        ],
        correctAnswer: 4,
        explanation: 'An organization needs an empirical approach to handle different types of Risks in the product development process. The main categories of risk are technical, market, commercial, and organizational risks.'
      },
      {
        id: 'q1_17',
        question: 'An organization has been working on a Product for years. It has a large market share, no near competitors, and very satisfied customers. It does not warrant much new investment and is a classic cash cow product that is very profitable but nearing the end of its product investment cycle. How would you describe the KVA for such a product?',
        options: [
          'High Unrealized Value.',
          'High Current Value.',
          'Low Current Value.',
          'Low Unrealized Value.'
        ],
        correctAnswer: [1, 3],
        explanation: 'A product with a very high CV, large market share, no near competitors, and very satisfied customers may not warrant much new investment; this is the classic cash cow product that is very profitable but nearing the end of its product investment cycle with low UV.'
      },
      {
        id: 'q1_18',
        question: 'True or False, Reducing the number of features in a product release can dramatically improve Time-To-Market.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Reducing the number of features in a product release can dramatically improve T2M; the smallest release possible is one that delivers at least some incremental improvement in value to some subset of the customers/users of the product.'
      },
      {
        id: 'q1_19',
        question: 'Which of the following statements is true: (choose the best option)',
        options: [
          'The more time spent defining and reviewing project requirements helps to increase the chances of success.',
          'Empirical approaches are best suited for simple problems.',
          'Spending more time identifying and mitigating risk helps to increase the chance of success.',
          'Delivering a solution and gathering feedback provides valuable insights for what to do next.'
        ],
        correctAnswer: 3,
        explanation: 'The most important stakeholders to satisfy are the end-users. Gathering feedback is an important step in understanding their needs and what should be done next. It highlights the importance of learning and adapting based on real-world data and user insights.'
      },
      {
        id: 'q1_20',
        question: 'The effectiveness of an organization in delivering new capabilities that might better meet customer needs can be analyzed by looking at: (Choose the best option)',
        options: [
          'Ability to innovate',
          'Current Value',
          'Time to market',
          'Unrealized Value'
        ],
        correctAnswer: 0,
        explanation: 'The Ability to Innovate expresses the ability of an organization to deliver new capabilities that might better meet customer needs. The goal of looking at the A2I is to maximize the organization’s ability to deliver new capabilities and innovative solutions.'
      },
      {
        id: 'q1_21',
        question: 'True or False, Each Scrum Team should ensure that their Product Goals and Sprint Goals are in support of the organization\'s Strategic Goals, Intermediate Goals, and Immediate Tactical Goals.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'The goals defined in the EBM guide are at an organizational level. Each Scrum Team should ensure that their Product Goal and Sprint Goal are in support of the organization\'s Strategic Goals, Intermediate Goals, and Immediate Tactical Goals.'
      },
      {
        id: 'q1_22',
        question: 'How does an organization know that a product built using Scrum is successful? (choose the best option)',
        options: [
          'By measuring that velocity has increased since the last release.',
          'By measuring the actual time spent on development versus the time estimated for development.',
          'By releasing frequently, and measuring the value customers/users experience.',
          'By the Product Owner and stakeholders accepting the Increment at the Sprint Review.'
        ],
        correctAnswer: 2,
        explanation: 'Scrum Teams deliver products iteratively and incrementally, maximizing opportunities for feedback. If a product is not released, the opportunity to capture user and market feedback is lost.'
      },
      {
        id: 'q1_23',
        question: 'Scrum addresses which of the following four risks in software development?',
        options: [
          'The stability and complexity of the technology.',
          'The skills and working relationships of the people on the teams.',
          'The timescale of the planned work.',
          'The definition of incentive and bonus strategies by HR for all team members.',
          'The clear definitions of stages and gateways in the overall governance model.',
          'The complexity and unpredictability of the requirements.'
        ],
        correctAnswer: [0, 1, 2, 5],
        explanation: 'Scrum addresses risks related to the skills and working relationships of the people on the teams by promoting cross-functional, self-organizing teams. It addresses risks related to the timescale of the planned work by breaking down work into small, manageable chunks and regularly reassessing priorities. It addresses risks related to the complexity and unpredictability of the requirements by encouraging ongoing collaboration between the scrum team and stakeholders and by regularly reassessing and adjusting the project plan. It addresses the stability and complexity of the technology by employing an iterative, incremental approach to optimize predictability and control risk.'
      },
      {
        id: 'q1_24',
        question: 'A product has been in the market for several years and has a high Customer Satisfaction Index. However, recent metrics show a decline in the Customer Usage Index, indicating that users are not engaging with the product as much as before. What should the Product Owner investigate first to address this issue using EBM principles?',
        options: [
          'Assess whether recent changes in the product have negatively impacted user engagement.',
          'Increase marketing efforts to bring in new users.',
          'Focus on adding new features to attract more user engagement.',
          'Conduct a competitor analysis to understand market trends.'
        ],
        correctAnswer: 0,
        explanation: 'The Product Owner should first investigate the most direct and immediate factors that could be affecting user engagement. If recent changes or updates to the product have caused user dissatisfaction or usability issues, identifying and resolving these issues will likely help improve the Customer Usage Index.'
      },
      {
        id: 'q1_25',
        question: 'A company has a product that belongs to the healthcare industry. In 2020, the compliance and regulations standards in this industry rapidly changed resulting into product features changes. The company wants to analyze how fast it can develop and release these features to its existing clients. Which KVA should the company analyze?',
        options: [
          'Current Value',
          'Unrealized Value',
          'Time-to-Market (T2M)',
          'Ability to Innovate'
        ],
        correctAnswer: 2,
        explanation: 'Time-to-market (T2M) expresses the organization’s ability to quickly deliver new capabilities, services, or products. The goal of looking at Time-to-Market is to minimize the amount of time it takes for the organization to deliver value.'
      },
      {
        id: 'q1_26',
        question: 'How would you know if a product is delivering value?',
        options: [
          'Decrease in the time spent writing code.',
          'High company impact - the product generates profit for the organization.',
          'The high velocity of the Developers - they get more PBI done now in comparison with a month ago (for the same period of time).',
          'The customer base is growing.',
          'Zero defects go to production.',
          'High customer satisfaction score - increase in Current Value (CV).'
        ],
        correctAnswer: [1, 3, 5],
        explanation: 'High company impact can be measured by looking at financial metrics such as revenue, profit, and return on investment. High customer satisfaction score can be measured by conducting surveys, interviews, or focus groups with customers to gather feedback on the product. A growing customer base can be measured by looking at metrics such as customer acquisition rate, customer retention rate, and overall customer count.'
      },
      {
        id: 'q1_27',
        question: 'You are the Product Owner for a product with multiple stakeholders and during a meeting, you find that the stakeholders are struggling to agree on the intended users and the main vision of the product. As a Product Owner, what is the best way to assist the stakeholders in reaching a consensus?',
        options: [
          'Collaborate with the stakeholders to draft the requirements before forming the Scrum Team.',
          'Partner with the key stakeholders to develop the Product Backlog items and hold a vote.',
          'Conduct experiments and gather market insights through incremental iterations. Share the experiment results with the stakeholders.',
          'Request that the Developers start working on the infrastructure and architecture while you work with the stakeholders to define the requirements.'
        ],
        correctAnswer: 2,
        explanation: 'This approach allows the stakeholders to see the data and feedback from real users, which can help to build consensus and make decisions about the product\'s target users and primary vision. It also allows the stakeholders to see the progress made, and to adjust the vision as needed.'
      },
      {
        id: 'q1_28',
        question: 'What are the best actions for a Product Owner to take when they have uncertainties regarding the needs of the end user?',
        options: [
          'Conduct small experiments to validate the end-user needs.',
          'Engage in direct conversations with the end-users.',
          'Release small increments to quickly gather feedback from the market.',
          'Utilize Persona Canvases to gain a deeper understanding of the end-user requirements.',
          'Brainstorm with the team and prioritize ideas with the highest potential for delivering value.'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'Releasing small increments to quickly gather feedback from the market is a good approach, as it can help validate the product\'s value proposition and what users are looking for. Engaging in direct conversations with the end-user is a great way to find out more about them. Doing frequent releases and running small experiments to validate needs is the best way to go.'
      },
      {
        id: 'q1_29',
        question: 'As a Product Owner, what actions would you take if you discover that end users are not utilizing some of the key features of your product?',
        options: [
          'Engage in conversation with the end-users to comprehend their desired outcomes.',
          'Hold a meeting with the stakeholders to examine what is missing from the key features so that the end-users can start utilizing them and obtain the intended value.',
          'Conduct experiments to gain a deeper understanding of the end-user needs.',
          'Inspect the reasons why the end-users are not using some of the key features.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: 'Engaging in conversation with end-users can help you understand why they are not using the main features. Conducting experiments can help gather data and insights to better understand the end user\'s needs and preferences. Inspecting the reasons why end-users are not using some of the key features can be done by gathering data on how they interact with the product.'
      },
      {
        id: 'q1_30',
        question: 'Which of the following would help you evaluate how much value is being delivered?',
        options: [
          'The number of Story Points delivered by the Developers.',
          'How frequently your product is used by your customers.',
          'The number of Product Backlog items in a release.',
          'The cycle-time cost of the product release.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 1,
        explanation: 'This option focuses on the actual usage and adoption of the product by customers, which is a key indicator of value delivery. By assessing how frequently customers engage with the product, you can gain insights into how much value they are receiving from it.'
      },
      {
        id: 'q1_31',
        question: 'True or False, As low-value features and systemic impediments accumulate, more budget and time is consumed maintaining the product or overcoming impediments, reducing A2I (Ability to Innovate).',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'As low-value features and systemic impediments accumulate, more budget and time are consumed maintaining the product or overcoming impediments, reducing its available capacity to innovate. In addition, anything that prevents users or customers from benefiting from innovation, such as hard-to-assemble/install products or new versions of products, will also reduce A2I.'
      },
      {
        id: 'q1_32',
        question: 'True or False, Typically a strategic goal is big, far away, has many uncertainties along the journey, and needs the use of empiricism.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'As the EBM guide states "A Strategic Goal, which is something important that the organization would like to achieve. This goal is so big and far away, with many uncertainties along the journey that the organization must use empiricism. Because the Strategic Goal is aspirational and the path to it is uncertain, the organization needs a series of practical targets, like Intermediate Goals, achievements of which will indicate that the organization is on the path to its Strategic Goal. The path to the Intermediate Goal is often still somewhat uncertain, but not completely unknown.”'
      },
      {
        id: 'q1_33',
        question: 'A company is trying to evaluate how happy its existing investors and stakeholders are. They are also trying to see if their happiness is improving or declining. Which KVA should they analyze?',
        options: [
          'Time to Market',
          'Current Value',
          'Unrealized Value',
          'Ability to Innovate'
        ],
        correctAnswer: 1,
        explanation: 'Current Value (CV) reveals the value that the product delivers to customers, as of today. The goal of looking at a CV is to maximize the value that an organization delivers to customers and stakeholders at the present time. Current Value considers only what exists right now, not the value that might exist in the future. Questions that organizations need to continually re-evaluate for current value are: How happy are users and customers today? Is their happiness improving or declining? How happy are your employees today? Is their happiness improving or declining? How happy are your investors and other stakeholders today? Is their happiness improving or declining?'
      },
      {
        id: 'q1_34',
        question: 'Which of the following can potentially help reduce time to market? (Choose all that apply)',
        options: [
          'Improving pipeline automation.',
          'Reducing the number of features in a release.',
          'Removing internal communication bottlenecks.',
          'Removing technical debt.',
          'Shorter sprint cycles.'
        ],
        correctAnswer: [0, 1, 2, 3, 4],
        explanation: 'Reducing time to market (TTM) is crucial for gaining a competitive edge. Strategies that can help include: improving pipeline automation (CI/CD), reducing the number of features in a release (like an MVP), removing internal communication bottlenecks, removing technical debt to improve performance, and using shorter sprint cycles for more frequent feedback.'
      },
      {
        id: 'q1_35',
        question: 'A Scrum Team (Lifeline) completed 80 story points of work in two weeks. Another Team (Pacemakers) completed 40 story points of work in one week. Which team delivered more value?',
        options: [
          'Team Lifeline, since they finished more units of work.',
          'Team Pacemakers since they finished the work sooner.',
          'The amount of work completed is a measure of effort, not the delivered value.',
          'Team Lifeline and Team Pacemakers delivered equal value.'
        ],
        correctAnswer: 2,
        explanation: 'The value of the work is measured by the value experienced by the customer. Story points are a measure of effort and complexity, not a direct measure of value delivered. Velocity is a measure of the amount of work that a team can do. This is not the same as measuring the value or impact of this work. Since story points measure effort and not value, we cannot conclude that one team delivered more value based solely on the story points completed.'
      },
      {
        id: 'q1_36',
        question: 'As a Product Owner, which of the following would you focus on to ensure value is being delivered by the product?(Choose all that apply)',
        options: [
          'The ease with which the product can be absorbed and used by its customers.',
          'Feedback from the product\'s users.',
          'The increased velocity of the Scrum Team.',
          'The number of features delivered.',
          'How much of the product is being used.',
          'The level of accuracy between the done Increment and the original requirements.'
        ],
        correctAnswer: [0, 1, 4],
        explanation: 'To ensure value is being delivered, a Product Owner should focus on: the ease of use of the product, direct feedback from users, and how much of the product is actually being used. These factors directly relate to the user\'s experience and the value they derive from the product. Metrics like velocity or the number of features delivered are internal measures of output, not necessarily of value.'
      },
      {
        id: 'q1_37',
        question: 'Which of the following are examples of Key Value Measures for Unrealized Value (UV)? (choose the best two options)',
        options: [
          'Customer Usage Index.',
          'Product Cost Ratio.',
          'Potential Market Share.',
          'Innovation Rate.',
          'Customer or user satisfaction gap.'
        ],
        correctAnswer: [2, 4],
        explanation: 'Unrealized Value (UV) reveals the potential future value that could be realized if the organization was able to perfectly meet the needs of all potential customers. The best two options for Key Value Measures for Unrealized Value (UV) are Potential Market Share (the relative percentage of the market not controlled by the product) and Customer or user satisfaction gap (the difference between a customer’s desired experience and their current experience). The other options are incorrect as they are associated with different Key Value Areas: Customer Usage Index and Product Cost Ratio are measures of Current Value (CV), and Innovation Rate is associated with the Ability to Innovate (A2I).'
      },
      {
        id: 'q1_38',
        question: 'Which of the following are examples of Key Value Measures for Time-to-Market (T2M)? (choose the best three options)',
        options: [
          'Mean Time to Repair',
          'Product Cost Ratio',
          'Release Frequency',
          'Innovation Rate',
          'Cycle Time & Lead Time'
        ],
        correctAnswer: [0, 2, 4],
        explanation: 'Key Value Measures for Time-to-Market (T2M) include Build and Integration frequency, Release Frequency, Release Stabilization Period, Mean Time to Repair, Customer Cycle Time, Lead Time, and more. Mean Time to Repair reveals the efficiency of an organization in fixing errors. Release Frequency reflects the time needed to satisfy the customer with new products. Customer Cycle Time and Lead Time reflect an organization’s ability to reach its customer and the time from idea to customer benefit, respectively. Product Cost Ratio is part of Current Value (CV), and Innovation Rate is part of Ability to Innovate (A2I).'
      },
      {
        id: 'q1_39',
        question: 'A team can have a high velocity however the increment can result in less or no value for the customer and on the other hand another team can make a small tweak to the product (less work) which could produce high value for the customer. Which of the following is NOT a good reason to keep a team together for an extended period? (Choose the best option)',
        options: [
          'To Improve team collaboration.',
          'To Improve utilization.',
          'To improve the exchange of expertise among the developers.',
          'To make forecasting more consistent.',
          'To improve a team\'s focus.'
        ],
        correctAnswer: 1,
        explanation: 'High utilization is not always a result when teams are kept together. Better reasons for keeping a team together include improving collaboration, making forecasting more consistent, improving focus, and increasing knowledge sharing.'
      },
      {
        id: 'q1_40',
        question: 'Your executive team thinks that your product has the potential to acquire a larger market share. The sales head is urging you to decrease the price of the product to draw in more customers. However, the Director of Finance is worried that a lower price will negatively affect the product\'s profitability. To decide whether to lower the price as suggested by the Sales Leader, what sources of data should you take into account? (choose the best four answers)',
        options: [
          'Customer satisfaction.',
          'Channel sales strategy.',
          'Competitor pricing.',
          'Market Share.',
          'Company earnings targets.',
          'Unmet customer\'s needs.'
        ],
        correctAnswer: [0, 2, 3, 5],
        explanation: 'You should first focus on whether your product delivers value to customers and if there are unmet needs that competitors are addressing more effectively. Key data sources to consider are customer satisfaction, competitor pricing, current market share, and any unmet customer needs. If a product already has a high market share (low Unrealized Value) and high customer satisfaction (high Current Value), it might be better to maintain it and explore new markets. Channel sales strategy and company earnings targets are less relevant to this specific pricing decision.'
      }
    ]
  },
    {
    id: 'palebm-mock-2',
    title: 'PAL EBM Mock Exam #2',
    description: 'Practice exam for the Professional Agile Leadership - Evidence-Based Management certification.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q2_1',
        question: 'An organization has one single product it has been working on for years. The product is making profits; however, the sales manager advises Charles, the Product Owner, to reduce the price to attract more customers. The Financial Director argues that this may harm the company\'s revenue. What sources should Charles use to decide the product\'s pricing strategy? (Choose the best two options)',
        options: [
          'Lead time',
          'Market share',
          'Innovation rate',
          'Competitor\'s pricing'
        ],
        correctAnswer: [1, 3],
        explanation: ''
      },
      {
        id: 'q2_2',
        question: 'Which of the following measures might help you determine whether your product is delivering value to your customers? (choose the best option)',
        options: [
          'The number of "must-do" Product Backlog items delivered in a release.',
          'The average cost of your product release.',
          'The on-schedule performance of the Scrum Team.',
          'How often do your customers use your product.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q2_3',
        question: 'In order to make investment decisions, the Product Owner is likely to look at the Total Cost of Ownership (TCO) of the product being built. What costs will a Product Owner take into account? (choose the best option)',
        options: [
          'The money spent on the development of the product is often a fixed cost per Sprint multiplied by the number of Sprints required.',
          'All investments are required to conceive, develop, operate, and maintain the product.',
          'The accumulated cost over the earned value of the product.',
          'The seeding money that is spent on building the proof of concept before approving the development of the actual product.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_4',
        question: 'Which option can improve the "Time-to-market" (choose the best option).',
        options: [
          'Remove impediments to faster delivery.',
          'Add more people.',
          'Work extra time.',
          'Remove low-performing team members.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_5',
        question: 'You are a new Product Owner brought in to fix an existing product. The product is integral to the organization\'s long-term vision. When examining the issues you were able to learn that: The last three releases have had no positive impact on product value. The costs to build and maintain a release is high compared to the revenue it generates. ie Product Cost Ratio. The time from which the team starts working on a release to having it shipped to users is long. ie Time-to-Market. As the Product Owner, which strategy would you pursue? (choose the best option)',
        options: [
          'Suggest canceling the product and focusing on other opportunities as the Unrealized Value is low.',
          'Focus on identifying and delivering high-value features that will gain more customers and increase revenue.',
          'Improve the team\'s Ability to Innovate by identifying and eliminating the waste that is creating the high-cost ratios and long release cycles.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_6',
        question: 'By adopting the Experimenter stance, the Product Owner is likely to improve the following: (choose all that apply)',
        options: [
          'Time to Learn.',
          'Ability to Innovate.',
          'Time to Market.',
          'Customer Satisfaction Score.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: ''
      },
      {
        id: 'q2_7',
        question: 'Unrealized Value can be defined as: (Choose the best option)',
        options: [
          'The satisfaction gap between a beneficiary’s desired outcome and their current experience.',
          'The satisfaction gap between a beneficiary’s current experience and the roadmap planned.',
          'The monitory gap between a beneficiary’s desired outcome and their current experience.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_8',
        question: 'Hitech, a software company has recently acquired a lot of new clients. While the existing client products and services are not impacted, the company\'s human resource department has reached out to management with concerns about the increase in employee work hours. Which KVA should Hitech evaluate to understand how happy or stressed the employees currently are and whether it’s increasing or decreasing? (Choose the best option)',
        options: [
          'Current Value',
          'Unrealized Value',
          'Time to Market',
          'Ability to Innovate'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_9',
        question: 'Which KVA should be analyzed by an organization to check if any additional value can be created in the existing market it participates in or other markets? (Choose the best option)',
        options: [
          'Current Value',
          'Unrealized Value',
          'Ability to Innovate',
          'Time-to-Market'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_10',
        question: 'Product A generates a significant amount of revenue and has a high current value but a low unrealized value. Product B is a new product with a lot of potential but currently has a low current value and high unrealized value. Given this information and considering a long-term perspective, which option do you think would be the best to pursue?(choose the best option)',
        options: [
          'Allocate more of your investment towards Product B as it has greater potential.',
          'Divide your investment equally between both products.',
          'Allocate more of your investment towards Product A as you do not want to risk losing customers.',
          'All of the above'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_11',
        question: 'As a Product Owner of a big financial company, you\'re familiar with how multiple products are interconnected, which requires a lot of coordination when it comes to releasing updates. This is due to the fact that modifications to one product will have an impact on the others, resulting in difficulties maintaining consistency and increasing complexity. In light of this, what would be the most effective way to alleviate these challenges? (choose the best option)',
        options: [
          'Develop products with maximum independence, allowing each to determine its own release schedule while maintaining coordination.',
          'Establish a centralized, coordinated Development Plan across products for consistency.',
          'Assign a Project Lead to oversee all products.',
          'Ensure that the PMO manages cross-product dependencies.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_12',
        question: 'A team works on 4 different products, splitting their time between them because none of the products has enough work to warrant a dedicated team. What strategy on how they use their time would potentially deliver the most value to customers over time? (choose the best option)',
        options: [
          'Work a little on each product all the time, releasing when needed.',
          'Either strategy will deliver the same value.',
          'Focus on one product at a time, release it, then move to the next product.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_13',
        question: 'Your product is the market leader in your segment. Your team is continuously releasing new features. The rate at which you are releasing features is higher than the rate that the customers can adopt the features. Customers complain that while they are still getting used to a release, a new release will appear. Your Developers have also made you aware that technical debt is accumulating with each release. As a Product Owner, which would be the best approach? (choose the best option)',
        options: [
          'Slow down the release cycles so customers have more time to catch up.',
          'Add customer support staff to help customers with their upgrade challenges.',
          'Start focusing on how to improve the system in order to make releasing better and less risky, even if it means releasing fewer features.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_14',
        question: 'A discrepancy in user satisfaction occurs when there is a difference between (choose the best two answers)',
        options: [
          'The user\'s desired outcome.',
          'The market share of the product.',
          'The user\'s actual experience.',
          'The total market size.'
        ],
        correctAnswer: [0, 2],
        explanation: ''
      },
      {
        id: 'q2_15',
        question: 'What would be the most compelling reason to decrease investment in a product? (choose the best option)',
        options: [
          'When the Unrealized Value is very low.',
          'When the Current Value is very low.',
          'When the Current Value is very high.',
          'When the Unrealized value is very high.',
          'None of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_16',
        question: 'What are the various types of organizational metrics among the following options? (Choose the best three options)',
        options: [
          'Activities',
          'Outputs',
          'Increments',
          'Outcomes',
          'Customer satisfaction'
        ],
        correctAnswer: [0, 1, 3],
        explanation: ''
      },
      {
        id: 'q2_17',
        question: 'What are two effective ways for Scrum to support funding and investment decision-making? (choose the best two options)',
        options: [
          'Early and frequent releases to customers and users.',
          'Frequent evaluation of the delivered increments to determine the Delivered Value-to-Investment ratio.',
          'Setting a predetermined budget guarantees the completion of the project within the designated time frame, scope, and budget constraints.',
          'Only allocating funding necessary for the day-to-day operational costs of the Scrum Teams.'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q2_18',
        question: 'You have a highly successful product, very happy customers (very low satisfaction gaps), and command an enviable market share. What should you do to protect and increase your organization’s success? (choose the best option)',
        options: [
          'Implement new features that will increase customer lock-in to protect market share.',
          'Redesign the interface to improve the feature\'s ease of use and re-release it.',
          'Use profits from the product to look for new markets with larger satisfaction gaps.',
          'Use profits from the product to buy competitor organizations to increase your market share.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_19',
        question: 'Which Key Value Measures can be used to identify areas for improvement in an organization\'s agility in adapting to market changes? (choose all that apply)',
        options: [
          'Release Frequency',
          'Customer Cycle time',
          'Velocity',
          'Customer or User Satisfaction Gap',
          'Revenue per employee'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q2_20',
        question: 'A Product Owner has decided to remove a product feature that\'s currently on production. Which measure could have led to this decision? (choose the best option)',
        options: [
          'Long Cycle Times.',
          'Too much time spent context-switching.',
          'Low Customer Usage Index.',
          'Increasing Defect Trend.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_21',
        question: 'Think Wheels, a truck company has recently acquired two new clients. These clients have significantly increased the work of the employees. The CEO of the company is still determining if the existing number of truck drivers/employees will be able to accommodate the new work. He wants to look at the existing work to analyze the gaps. He also wants to make sure that the existing clients are not impacted. Which KVA should Think wheels evaluate to understand how happy or stressed the employees currently are, and whether the existing clients are impacted? (choose the best option)',
        options: [
          'Current Value',
          'Ability to Innovate',
          'Time to Market',
          'Unrealized Value'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_22',
        question: 'An organization is building a new product and is in the early stages. The product is being used to test the market. The product does have a great market potential. How would you define the KVA for such a product? (Choose the best two options)',
        options: [
          'Low Current Value',
          'Low Unrealized Value',
          'High Current Value',
          'High Unrealized Value'
        ],
        correctAnswer: [0, 3],
        explanation: ''
      },
      {
        id: 'q2_23',
        question: 'An organization has been implementing Scrum for years. Under what circumstances does the organization really need an empirical approach to solving a problem? (Choose the best option)',
        options: [
          'When working with new and unproven technology.',
          'When business risk is high.',
          'When the market is changing rapidly.',
          'When the technical risk is high.',
          'All of the above'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q2_24',
        question: 'Which Key-Value Area is most effective at measuring market potential? (Choose the best option)',
        options: [
          'Time-to-Market.',
          'Current Value.',
          'Unrealized Value.',
          'None of the above.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q2_25',
        question: 'An organization has a large number of products and is unsure about how to allocate funding across the products. Which of the following is the best way for them to proceed?',
        options: [
          'Let the Finance Director decide.',
          'Allocate funding equally across all products.',
          'Allocate funding evenly based on the revenue share for each product.',
          'Fund small incremental changes for each product, measure outcomes, and repeat.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q2_26',
        question: 'What questions would an organization pose to evaluate Current Value? (choose all that apply)',
        options: [
          'How happy are users and customers today? Is their happiness improving or declining?',
          'How happy are your employees? Is their happiness improving or declining?',
          'How fast can the organization learn from new experiments and information?',
          'How happy are your investors and other stakeholders? Is their happiness improving or declining?',
          'What prevents customers or users from benefiting from that innovation?',
          'Can any additional value be created by our organization in this market or other markets?'
        ],
        correctAnswer: [0, 1, 3],
        explanation: ''
      },
      {
        id: 'q2_27',
        question: 'Your organization\'s portfolio consists of several products. Management has decided to place the lead revenue-generating product into maintenance mode, taper off its investment, and seek other opportunities for future growth. What may have led to this? (choose the best option)',
        options: [
          'The organization has decided to reduce operational overhead and to focus on products that generate better Product cost Ratios.',
          'The product has been losing customers, revenues are down, and the Unrealized Value is low (even though the Current Value is high).',
          'The innovation rate for the product is low.',
          'Your organization has stopped using Scrum.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_28',
        question: 'You are a Product Owner who has been building a product for a specific user group in mind. As your product\'s customer base grows, you begin to notice that different user groups have been using the product in different ways. Which of the following would be the best action to take? (choose the best option)',
        options: [
          'Keep focused on delivering the features agreed upon by the steering committee and don\'t take any action.',
          'Make sure each release includes features that satisfy all user groups.',
          'Design separate marketing strategies for each group to attract more users and increase revenue.',
          'Evaluate the possibility of delivering greater business value by developing separate products for each user group.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q2_29',
        question: 'Senior Management has sought your opinion on which product to allocate funds to, both products targeting different markets. Given the following details: Product A generates both revenue and profit for the company and is the main contributor. Also, Product A has pleased customers (high Current Value) and low Unrealized Value. Product B is relatively new and has a low Current Value and high Unrealized Value. Product Owners of both products are seeking substantial extra funding to enhance their products. Which funding recommendation would you give to management? (choose the best option)',
        options: [
          'Invest funding in Product B as it holds more future potential for the company.',
          'Allocate funding based on the proportion of product revenues.',
          'Divide funding equally between both products.',
          'Invest funding in Product A because the company\'s success is dependent on its continued success.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_30',
        question: 'True or False, The Net Promoter Score can be obtained by asking customers a single question: “How likely is it that you would recommend our product to a friend or a colleague?”.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_31',
        question: 'They want to help the organization make better investment decisions (better than the ones made in the past). What can these executives do to help their organization make effective portfolio investment decisions? (Choose the best option)',
        options: [
          'Carefully plan each project and work with the teams to maximize team efficiency.',
          'Create organizational goals that are clear and measurable.',
          'Define the initiatives and investments that the organization should pursue.',
          'All of the above.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_32',
        question: 'An organization is planning to have a large product release several months from now. Because the release will contain many product changes (new features, enhancements, and fixes), a large amount of effort will be needed from the team. During beta testing of the latest increment, you learn that one of the anticipated features does not meet the needs of the users and is rarely used. Which of the following is the best response? (Choose the best option)',
        options: [
          'Add a more valuable feature to the release.',
          'Push the release to a later date until you are able to improve the feature.',
          'Disregard the feedback as beta testing is not a good reflection of the broader market.',
          'Remove the feature from the increment and release the other features and changes earlier.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q2_33',
        question: 'Over a million customers use Samsung phones in the USA. Samsung recently implemented and released a particular feature that they believed would be widely adopted by the users. After gathering enough data from the test, it is concluded that the feature functions as intended however the usage rate was surprisingly low. What should Samsung do next? (Choose the two best options)',
        options: [
          'Enlarge the sample size by extending the length of the original experiment.',
          'Fix the issue / Enhance the product based on the interview conducted. Devise a new experiment to learn whether the issue was causing the problem.',
          'Interview the users and observe the usage to understand why the feature is not being used.',
          'Remove the feature from the product and move on to the next highest priority feature.',
          'Deem the new feature unsuccessful and proceed to implement the next feature.'
        ],
        correctAnswer: [1, 2],
        explanation: ''
      },
      {
        id: 'q2_34',
        question: 'A product improvement experiment is more effective when you know the following: (Choose the best option)',
        options: [
          'The experiment\'s target audience.',
          'What will be done to reduce the customer satisfaction gap that the experiment is targeting.',
          'The customer satisfaction gap that the experiment is targeting.',
          'How success will be measured.',
          'All of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q2_35',
        question: 'Agile approaches help organizations rapidly respond to market changes.Which measurements would be helpful in identifying the improvement areas with respect to an organization\'s ability to respond to change? (Choose the best three options)',
        options: [
          'Release frequency',
          'On product index',
          'Innovation rate.',
          'Revenue per employee',
          'Customer Cycle time',
          'Technical Debt'
        ],
        correctAnswer: [0, 2, 4],
        explanation: ''
      },
      {
        id: 'q2_36',
        question: 'What are the advantages of releasing a product frequently? (choose the best option)',
        options: [
          'They enable teams to inspect and adapt more frequently.',
          'They help teams better understand and meet customer needs.',
          'They help teams to learn how to correct and eliminate errors.',
          'Smaller, more frequent releases are less risky.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q2_37',
        question: 'EBM-PM (Portfolio Management) seeks to reduce risk by investing in small increments, and then monitoring the results of these at frequent intervals.',
        options: [
          'False.',
          'True.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q2_38',
        question: 'An organization has many customers on different versions of the same product. Most of the employees in the organization spend time and effort in maintaining all of the product variations. This leaves them with little time to invest in product improvements. Which of the following would best help the organization analyze it’s effectiveness to deliver new value? (Choose the best option)',
        options: [
          'Velocity.',
          'Cycle Time.',
          'Revenue per Employee.',
          'Innovation Rate.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q2_39',
        question: 'Proto-personas are: (Choose the best option)',
        options: [
          'Proto-personas are the best guesses as to who is using (or will use) the product and why.',
          'A portray of a perfect customer.',
          'Models of actual/real people using the system for whom the problem is being solved.',
          'Market research data of the customers using the product.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q2_40',
        question: 'What are the key value areas, EBM examines: (Choose all that apply)',
        options: [
          'The responsiveness of the organization in delivering value.',
          'The effectiveness of the organization in delivering value.',
          'The current state of the organization relative to the organizational goals.',
          'Goals of the organization.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: ''
      }
    ]
  },
  {
    id: 'palebm-mock-3',
  title: 'PAL EBM Mock Exam #3',
  description: 'Practice exam for the Professional Agile Leadership - Evidence-Based Management certification.',
  timeLimit: 60,
  passingScore: 85,
  questions: [
    {
        id: 'q3_1',
        question: 'What does the Customer Usage Index measure? (Choose the best two options)',
        options: [
          'Whether actual usage meets expectations on how long users should be taking with a feature.',
          'The difference between a customer or user’s desired experience and their current experience.',
          'Usage, by feature, to help infer the degree to which customers find the product useful.',
          'The experience that the customer would like to have.',
          'Sentiment analysis to help gauge customer engagement and happiness with the product.'
        ],
        correctAnswer: [0, 2],
        explanation: ''
      },
      {
        id: 'q3_2',
        question: 'As the Product Owner, you have a product with a low Current Value and three unsuccessful releases in improving it, but a high Unrealized Value. The product also has a high-cost ratio, which limits your ability to deliver new features and has a long time-to-market. In light of these factors, what strategy would you implement to guarantee the product\'s long-term success? (choose the best option)',
        options: [
          'Given the product\'s inability to improve customer satisfaction, it may be better to discontinue the product and direct focus toward alternative opportunities.',
          'With limited capacity, concentrate on identifying and delivering features that hold high value in an attempt to attract customers and increase revenue.',
          'Identify and eliminate sources of waste to improve the Product Cost Ratio and Time to Market, creating a solid foundation for future innovation.',
          'All of the above options.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_3',
        question: 'You are the product owner of a team developing a complex medical device. The team is unsure of the final product\'s appearance. How would you proceed? (choose the best option)',
        options: [
          'Create research spikes.',
          'Set a goal and try the most promising experiments in short iterations and learn from them as you go.',
          'Take a few weeks to do an in-depth risk analysis and define what your product should look like.',
          'Ask the customer for more detailed information.',
          'Create a project roadmap and follow it as closely as possible.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_4',
        question: 'Select ways that the Product Owner can ensure the product will deliver value to users and customers. (choose the best three options)',
        options: [
          'The readiness with which the product has been absorbed by users and used by them.',
          'The product design and quantity of requirements included in the launch',
          'What percentage of the requirements developed, in fact, is being used by users.',
          'Speak directly to the user to receive feedback on the released product.',
          'Reduction in the number of change requests issued by customers.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: ''
      },
      {
        id: 'q3_5',
        question: 'How can organizations benefit from creating and running experiments? (choose the best option)',
        options: [
          'Experiments can help organizations test how effective an improvement is.',
          'Experiments can help organizations test whether features are delivering value.',
          'Experiments can help organizations determine the feasibility of a goal.',
          'Experiments can help organizations validate assumptions.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q3_6',
        question: 'As a Product Owner, you have various types of stakeholders who provide feedback and ideas for the product. At a recent meeting, the Sales Manager insisted that a new feature be added in order to reach untapped new customers. The CFO contends that this new feature is not cost-effective and suggests focusing on other features to improve the satisfaction of existing customers. You find merit in both stakeholder perspectives. How should you proceed in this situation? (choose the best option)',
        options: [
          'Agree with the Sales Manager\'s proposal by implementing the requested features as it will help to boost the sales team\'s revenue.',
          'Gather the opinions of all stakeholders, then make a decision on which request to pursue based on this information.',
          'Implement the CFO\'s request to prevent customer churn.',
          'Implement a small part of the Sales Manager\'s proposal in order to gather more information to better understand its potential.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_7',
        question: 'As the Product Owner of a small company, you\'ve observed a drop in the Scrum Team\'s retention rate. Exit interviews indicate that the Developers are feeling frustrated by constant interruptions and pointless meetings, and they feel that their work lacks significance. Given the high cost of training new Developers for a small organization like yours, what other factors should you consider when trying to improve retention rates? (choose the best option)',
        options: [
          'The Innovation Rate, which is the ratio of new work to total work.',
          'The On-Product Index, which measures the proportion of work related to the product to total work.',
          'Employee Net Promoter Scores, which measures the overall job satisfaction and company satisfaction of the developers.',
          'All of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_8',
        question: 'You release your product to customers once every month, which is better than any competitor. Most of the features you deliver are simply minor changes or corrections to existing features, but customer satisfaction remains low. What Key Value Area should be your primary focus to improve the competitiveness of your product? (choose the two best options)',
        options: [
          'Time to Market.',
          'Current Value.',
          'Ability to Innovate.',
          'Unrealized Value.'
        ],
        correctAnswer: [2, 3],
        explanation: ''
      },
      {
        id: 'q3_9',
        question: 'As a Product Owner, you\'ve noticed a decline in users of your product according to a recent report. A stakeholder with expertise in the field informs you that in order to acquire new customers, more features need to be released. However, based on the data you\'ve gathered, you\'ve determined that the loss of customers is caused by market changes rather than a lack of features. The stakeholder is concerned that if you don\'t add more features in the next release, you\'ll miss a window of opportunity and lose important customers. Given this information, what are the two most appropriate steps for a Product Owner to take? (choose the best two options)',
        options: [
          'Acknowledge the stakeholder\'s perspective but decline to add more features in the next release.',
          'Partner with other stakeholders to gather more ideas and conduct a vote on which to pursue.',
          'Acknowledge the stakeholder’s perspective and increase features in the next release.',
          'Run a small experiment, in collaboration with the stakeholder, to validate their feedback.'
        ],
        correctAnswer: [0, 3],
        explanation: ''
      },
      {
        id: 'q3_10',
        question: 'A new competitor has arrived in your market and has been quickly gaining traction. They can release much faster than you and they can create better customer engagement and satisfaction rates with with each release. What is the best first response? (choose the best option)',
        options: [
          'Enhance your next product release with new features to retain current clients and attract new ones.',
          'Reduce your product price to make it more appealing.',
          'Improve your time-to-market and ability to innovate in order to respond faster.',
          'Shift your product to a market with less competition.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_11',
        question: 'As an experienced Product Owner, your organization has asked you for your advice on investment strategies for two products. Given the following information: - Product B generates more revenue than Product A - Product B has higher user satisfaction rates than Product A - Product A has bigger potential market opportunities than Product B Which of the following strategies would you advise? (choose the best option)',
        options: [
          'For both products, continually measure the impact of new investments or marketing.',
          'Invest in Product A to boost its market share, customer satisfaction, and revenue.',
          'Increase marketing for Product B to grow its market share.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_12',
        question: 'A new competitor has joined the market and has quickly gained market share, which leads to a loss of sales. After investigating, you have found out that the new competitor can release to the market faster than you three times. What is the best first response? (choose one best option)',
        options: [
          'Add new features you think can attract new customers to the next release.',
          'Launch the promotion campaign and reduce the product\'s price to attract more customers.',
          'Improve your Time-to-Market to compete with the competitor',
          'All of the above.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_13',
        question: 'In order to justify the price increase of a product, your primary objective should be to (choose the best option)',
        options: [
          'Enhance the product by adding more features to make it more appealing.',
          'Improve the value experienced by the customer.',
          'Reduce the number of features to make the product easier to use.',
          'Lower the price temporarily before raising it higher than the original.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_14',
        question: 'Which two measures can help a Product Owner evaluate how much impact is being delivered? (choose the best two options)',
        options: [
          'How many items the team is delivering per Sprint?',
          'How much of the scope has been delivered versus what was planned?',
          'How many Story Points are completed per Sprint?',
          'How satisfied the customers are?',
          'How frequently your deliveries are being used?'
        ],
        correctAnswer: [3, 4],
        explanation: ''
      },
      {
        id: 'q3_15',
        question: 'You started measuring product feature usage in your last release. You are surprised to learn that a sizable percentage of the features you thought were very important are never or rarely used. Which of the following actions could you take to further evaluate this unexpected result? (choose all that apply)',
        options: [
          'Spend more time talking with your users to understand their needs.',
          'Evaluate whether the rarely used features are solving the intended problems.',
          'Run experiments to increase your understanding of what customers find valuable.',
          'Turn off the features that are never used and seek more user feedback.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: ''
      },
      {
        id: 'q3_16',
        question: 'As the Product Owner of a product that tracks the usage rate of its features by customers, you have encountered an influential stakeholder who is skeptical of the usage data and insists that a particular feature is essential, despite data showing low usage rates. The stakeholder considers monitoring feature usage to be a pointless endeavor. You have verified that the data is correct and consider it to be useful for you and your team. What is your next move? (choose the best option)',
        options: [
          'Stop measuring feature usage to please the stakeholders.',
          'Keep measuring usage but don\'t make it public, use it for decision-making.',
          'Keep measuring and openly share the data for transparency, and use it for decision-making.',
          'All of the above.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_17',
        question: 'As a Product Owner, you\'ve gathered a lot of ideas and suggestions. Based on the limited budget and time, you will not be able to pursue all of them. Which would be the best approach? (choose the best option)',
        options: [
          'Rank proposals based on their unrealized value and fully finance as many as possible.',
          'Fund small experiments to validate proposed ideas and assumptions, then evaluate outcomes.',
          'Direct resources to proposals that are expected to yield the highest revenue in the coming year.',
          'Invest in all proposals but at lower levels and observe their performance.',
          'Distribute the budget evenly across all items in order to accurately compare the ROI among items.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_18',
        question: 'Management has asked you for advice on which product to fund. Each product focuses on different markets. Given the following information: - Product A has very high user satisfaction scores and high market share. - Product B has low user satisfaction scores, and a low market share, but is in a growing market in which no other competitor has a significant market share. Which product would you suggest funding? (choose the best option)',
        options: [
          'Product A',
          'Product B'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_19',
        question: 'You deliver a new feature that you think will improve customer satisfaction. When you measure the results, you not only find that it had no impact on customer satisfaction, it was hardly used. What is your next step? (choose the best option)',
        options: [
          'Redesign the feature to improve its effectiveness and re-release it.',
          'Redesign the interface to improve the feature\'s ease of use and re-release it.',
          'Drop the feature from the product and focus on the next most important feature.',
          'Investigate why the feature was not used by interviewing users and watching usage.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_20',
        question: 'Which of the following best describes the Key Value Area of Current Value (CV)? (choose the best option)',
        options: [
          'It expresses the organization\'s ability to quickly deliver new capabilities, services, or products.',
          'It expresses the ability of a product development organization to deliver new capabilities that might better meet customer needs.',
          'It reveals the value that the product delivers to customers, today.',
          'It suggests the potential future value that could be realized if the organization could perfectly meet the needs of all potential customers.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_21',
        question: 'An experiment will help you to: (choose the best option)',
        options: [
          'Create reliable estimations.',
          'Validate or reject a hypothesis.',
          'Understand how users use the product.',
          'Create a work plan for a product release.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_22',
        question: 'You cannot get your stakeholders to agree on which features might provide the most value. How should you resolve this disagreement? (choose the best option)',
        options: [
          'Organize an activity where stakeholders can vote and "buy a feature".',
          'Find someone who has higher authority than the stakeholders to make a decision.',
          'Deliver a small part of a feature to customers and gather insights.',
          'All of the above.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_23',
        question: 'An organization is currently having difficulties delivering new releases of their products in a timely manner. When asked, the teams say that they need to share team members across different teams and products in order for a team to get their work done. At least one team needs help from a member of another team at any point in time. Which of the following would be the most appropriate response? (choose the best option)',
        options: [
          'Reduce the number of products in order to help improve focus and reduce dependencies between teams.',
          'Create project plans for each of the products to include how to coordinate between teams and team members.',
          'Work with HR to hire more people to increase the capacity of the teams.',
          'All of the above',
          'None of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_24',
        question: 'Sam the Product Owner, decided to release continuously new features. He supposed that more frequent releases increase the quality of the value. What could be the potential problems with his release strategy? (Choose all that apply).',
        options: [
          'The end-users are confused and getting annoyed with the constant releases.',
          'The Developers notify that technical debt is accumulating.',
          'The stakeholders are unhappy because the budget is consumed too quickly.',
          'There is no problem with Sam’s release strategy.'
        ],
        correctAnswer: [0, 1, 2],
        explanation: ''
      },
      {
        id: 'q3_25',
        question: 'ABC company\'s best-selling app has started to have its user base eroded by new competing apps that have newer and more popular features. An important stakeholder believes that ABC\'s app user base can be restored by adding several customer requests to the product backlog that would be prioritized over other planned product initiatives. This set of requested features would take over a year to implement and release and delay other items in the backlog. What should ABC do? (choose the best option)',
        options: [
          'Implement and measure the result of a single feature in a shortened one-month release cycle.',
          'Implement selected suggestions from each stakeholder so as not to upset any of your stakeholders.',
          'Postpone previously planned initiatives and start working on the backlog of customer requests as soon as possible.',
          'Reach out to the customers to learn more about their needs and decide what to do next based on the information.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_26',
        question: 'True or False, Interacting directly with the product\'s customers is an effective way for the Product Owner to assess value.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_27',
        question: 'What is the desired outcome of using the Evidence-Based Management (EBM) approach? (choose the best option)',
        options: [
          'Measuring team progress against the predefined project plan.',
          'Identifying low-performing teams and deciding on training strategies.',
          'Improving velocity and predictability of the developers.',
          'Continuously improve product viability and business value by ways of measuring delivered value and the ability to deliver value.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_28',
        question: 'What things might a Product Owner focus on to ensure the product is useful and delivers value? (Choose all that apply)',
        options: [
          'How much of the functionality of the product is being utilized?',
          'How swiftly and easily the product can be consumed and used by the customers.',
          'Minimizing changes to project scope.',
          'The size of the product in "lines of code".',
          'Direct customer feedback.'
        ],
        correctAnswer: [0, 1, 4],
        explanation: ''
      },
      {
        id: 'q3_29',
        question: 'Your organization is new to Scrum. Management would like to understand what measures are helpful in determining if value is being delivered. As a Product Owner, which two metrics would be appropriate? (choose the best two options)',
        options: [
          'Velocity.',
          'Scope.',
          'Productivity.',
          'Customer satisfaction.',
          'Time-to-Market.'
        ],
        correctAnswer: [3, 4],
        explanation: ''
      },
      {
        id: 'q3_30',
        question: 'What can help you improve product viability and business value? (choose the best option)',
        options: [
          'Using Evidence-Based Management.',
          'Improving the predictability of the Scrum Team’s velocity.',
          'Ensuring no changes are made after project plan approval.',
          'Tracking team member utilization.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_31',
        question: 'There are two products - Product A produces high revenue. - Product B is a new product. Using those two data points, the information provided, and taking a long-term view, which of the options below should you pursue? (choose the best option)',
        options: [
          'Invest in both products equally.',
          'Weight your investment toward Product A; as it is the lead revenue generator and you do not want to risk losing customers.',
          'Weight your investment toward Product B; since it has more future potential.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_32',
        question: 'Which of the following actions can provide you with insights into your product\'s potential value? (choose all that apply)',
        options: [
          'Monitoring feature usage of customers.',
          'Measuring the satisfaction of your customers.',
          'Learning about feature requests from customers.',
          'Evaluating your competitors\' products.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: ''
      },
      {
        id: 'q3_33',
        question: 'Evidence-based management is … (choose the best option)',
        options: [
          'A management framework to ensure the delivery of maximum value.',
          'Mandatory practice for Product Owners using Scrum.',
          'Mandatory practice for Scrum Masters to apply for a Scrum Team.',
          'A framework organizations can use to help them measure, manage, and increase the value they derive from their product delivery.',
          'Methodology organizations can use to help them increase the value of their product.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_34',
        question: 'You have 20 teams working on a single release that will deliver 30 different features to your customers. It is estimated that this release will be finished in 4-5 months. How can you improve your Time to Market? (choose the best option)',
        options: [
          'As soon as a feature is ready, deliver it in its own smaller release.',
          'Automate parts of the development and testing process to reduce waste.',
          'Add more developers to increase the overall development capacity.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_35',
        question: 'True or False, A product with a High Current Value and low Unrealized Value. Some say you should maintain the product, but gradually reduce the investment then start seeking another opportunity for future growth.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_36',
        question: 'What is an important characteristic of goals in Evidence-Based Management? (Choose the best option)',
        options: [
          'They should be long-term and fixed.',
          'They should be flexible and subject to regular review.',
          'They should be defined by the Scrum Master.',
          'They should not be influenced by external feedback.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q3_37',
        question: 'How does "Lead Time for Changes" contribute to the "Time to Market" Key Value Area? (Choose the best option)',
        options: [
          'It measures the time taken to implement changes, thereby reflecting the team\'s agility.',
          'It tracks the satisfaction level of the scrum team.',
          'It measures the potential future value of changes.',
          'It evaluates the profitability of the product.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q3_38',
        question: 'A company is facing issues with its releases. The Release dates are always delayed by a few months due to the bugs found. These bugs are always discovered during the last few months of the release. To improve the product’s time to market, the team should: (choose the best option)',
        options: [
          'Co-locate team members.',
          'Reduce the number of features.',
          'Commit team members to only one team, at a time.',
          'All of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q3_39',
        question: 'Value stream mapping is a useful technique to: (choose the best option)',
        options: [
          'Understand customer requirements.',
          'Understand how to break down work and assign it to teams.',
          'Identify sources of waste and non-value-added work in a process.',
          'Enable a Portfolio view of your “Epics.”.',
          'Understand how to break down epics into smaller user stories.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q3_40',
        question: 'Synchronizing release schedules across multiple teams will: (choose the best option)',
        options: [
          'Reduce dependency.',
          'Always deliver the increment on time.',
          'Increase productivity.',
          'None of the above'
        ],
        correctAnswer: 3,
        explanation: ''
      }
    ]
  },
  {
    id: 'palebm-mock-4',
    title: 'PAL EBM Mock Exam #4',
    description: 'Practice exam for the Professional Agile Leadership - Evidence-Based Management certification.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q4_1',
        question: 'An organization has one single product it has been working on for years. The product is making profits; however, the sales manager advises Charles, the Product Owner, to reduce the price to attract more customers. The Financial Director argues that this may harm the company\'s revenue. What sources should Charles use to decide the product\'s pricing strategy? (Choose the best two options)',
        options: [
          'Lead time',
          'Market share',
          'Innovation rate',
          'Competitor\'s pricing'
        ],
        correctAnswer: [1, 3],
        explanation: ''
      },
      {
        id: 'q4_2',
        question: 'Which of the following measures might help you determine whether your product is delivering value to your customers? (choose the best option)',
        options: [
          'The number of "must-do" Product Backlog items delivered in a release.',
          'The average cost of your product release.',
          'The on-schedule performance of the Scrum Team.',
          'How often do your customers use your product.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q4_3',
        question: 'In order to make investment decisions, the Product Owner is likely to look at the Total Cost of Ownership (TCO) of the product being built. What costs will a Product Owner take into account? (choose the best option)',
        options: [
          'The money spent on the development of the product is often a fixed cost per Sprint multiplied by the number of Sprints required.',
          'All investments are required to conceive, develop, operate, and maintain the product.',
          'The accumulated cost over the earned value of the product.',
          'The seeding money that is spent on building the proof of concept before approving the development of the actual product.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_4',
        question: 'Which option can improve the "Time-to-market" (choose the best option).',
        options: [
          'Remove impediments to faster delivery.',
          'Add more people.',
          'Work extra time.',
          'Remove low-performing team members.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_5',
        question: 'You are a new Product Owner brought in to fix an existing product. The product is integral to the organization\'s long-term vision. When examining the issues you were able to learn that: The last three releases have had no positive impact on product value. The costs to build and maintain a release is high compared to the revenue it generates. ie Product Cost Ratio. The time from which the team starts working on a release to having it shipped to users is long. ie Time-to-Market. As the Product Owner, which strategy would you pursue? (choose the best option)',
        options: [
          'Suggest canceling the product and focusing on other opportunities as the Unrealized Value is low.',
          'Focus on identifying and delivering high-value features that will gain more customers and increase revenue.',
          'Improve the team\'s Ability to Innovate by identifying and eliminating the waste that is creating the high-cost ratios and long release cycles.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_6',
        question: 'By adopting the Experimenter stance, the Product Owner is likely to improve the following: (choose all that apply)',
        options: [
          'Time to Learn.',
          'Ability to Innovate.',
          'Time to Market.',
          'Customer Satisfaction Score.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: ''
      },
      {
        id: 'q4_7',
        question: 'Unrealized Value can be defined as: (Choose the best option)',
        options: [
          'The satisfaction gap between a beneficiary’s desired outcome and their current experience.',
          'The satisfaction gap between a beneficiary’s current experience and the roadmap planned.',
          'The monitory gap between a beneficiary’s desired outcome and their current experience.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_8',
        question: 'Hitech, a software company has recently acquired a lot of new clients. While the existing client products and services are not impacted, the company\'s human resource department has reached out to management with concerns about the increase in employee work hours. Which KVA should Hitech evaluate to understand how happy or stressed the employees currently are and whether it’s increasing or decreasing? (Choose the best option)',
        options: [
          'Current Value',
          'Unrealized Value',
          'Time to Market',
          'Ability to Innovate'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_9',
        question: 'Which KVA should be analyzed by an organization to check if any additional value can be created in the existing market it participates in or other markets? (Choose the best option)',
        options: [
          'Current Value',
          'Unrealized Value',
          'Ability to Innovate',
          'Time-to-Market'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_10',
        question: 'Product A generates a significant amount of revenue and has a high current value but a low unrealized value. Product B is a new product with a lot of potential but currently has a low current value and high unrealized value. Given this information and considering a long-term perspective, which option do you think would be the best to pursue?(choose the best option)',
        options: [
          'Allocate more of your investment towards Product B as it has greater potential.',
          'Divide your investment equally between both products.',
          'Allocate more of your investment towards Product A as you do not want to risk losing customers.',
          'All of the above'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_11',
        question: 'As a Product Owner of a big financial company, you\'re familiar with how multiple products are interconnected, which requires a lot of coordination when it comes to releasing updates. This is due to the fact that modifications to one product will have an impact on the others, resulting in difficulties maintaining consistency and increasing complexity. In light of this, what would be the most effective way to alleviate these challenges? (choose the best option)',
        options: [
          'Develop products with maximum independence, allowing each to determine its own release schedule while maintaining coordination.',
          'Establish a centralized, coordinated Development Plan across products for consistency.',
          'Assign a Project Lead to oversee all products.',
          'Ensure that the PMO manages cross-product dependencies.',
          'All of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_12',
        question: 'A team works on 4 different products, splitting their time between them because none of the products has enough work to warrant a dedicated team. What strategy on how they use their time would potentially deliver the most value to customers over time? (choose the best option)',
        options: [
          'Work a little on each product all the time, releasing when needed.',
          'Either strategy will deliver the same value.',
          'Focus on one product at a time, release it, then move to the next product.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_13',
        question: 'Your product is the market leader in your segment. Your team is continuously releasing new features. The rate at which you are releasing features is higher than the rate that the customers can adopt the features. Customers complain that while they are still getting used to a release, a new release will appear. Your Developers have also made you aware that technical debt is accumulating with each release. As a Product Owner, which would be the best approach? (choose the best option)',
        options: [
          'Slow down the release cycles so customers have more time to catch up.',
          'Add customer support staff to help customers with their upgrade challenges.',
          'Start focusing on how to improve the system in order to make releasing better and less risky, even if it means releasing fewer features.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_14',
        question: 'A discrepancy in user satisfaction occurs when there is a difference between (choose the best two answers)',
        options: [
          'The user\'s desired outcome.',
          'The market share of the product.',
          'The user\'s actual experience.',
          'The total market size.'
        ],
        correctAnswer: [0, 2],
        explanation: ''
      },
      {
        id: 'q4_15',
        question: 'What would be the most compelling reason to decrease investment in a product? (choose the best option)',
        options: [
          'When the Unrealized Value is very low.',
          'When the Current Value is very low.',
          'When the Current Value is very high.',
          'When the Unrealized value is very high.',
          'None of the above.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_16',
        question: 'What are the various types of organizational metrics among the following options? (Choose the best three options)',
        options: [
          'Activities',
          'Outputs',
          'Increments',
          'Outcomes',
          'Customer satisfaction'
        ],
        correctAnswer: [0, 1, 3],
        explanation: ''
      },
      {
        id: 'q4_17',
        question: 'What are two effective ways for Scrum to support funding and investment decision-making? (choose the best two options)',
        options: [
          'Early and frequent releases to customers and users.',
          'Frequent evaluation of the delivered increments to determine the Delivered Value-to-Investment ratio.',
          'Setting a predetermined budget guarantees the completion of the project within the designated time frame, scope, and budget constraints.',
          'Only allocating funding necessary for the day-to-day operational costs of the Scrum Teams.'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q4_18',
        question: 'You have a highly successful product, very happy customers (very low satisfaction gaps), and command an enviable market share. What should you do to protect and increase your organization’s success? (choose the best option)',
        options: [
          'Implement new features that will increase customer lock-in to protect market share.',
          'Redesign the interface to improve the feature\'s ease of use and re-release it.',
          'Use profits from the product to look for new markets with larger satisfaction gaps.',
          'Use profits from the product to buy competitor organizations to increase your market share.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_19',
        question: 'Which Key Value Measures can be used to identify areas for improvement in an organization\'s agility in adapting to market changes? (choose all that apply)',
        options: [
          'Release Frequency',
          'Customer Cycle time',
          'Velocity',
          'Customer or User Satisfaction Gap',
          'Revenue per employee'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q4_20',
        question: 'A Product Owner has decided to remove a product feature that\'s currently on production. Which measure could have led to this decision? (choose the best option)',
        options: [
          'Long Cycle Times.',
          'Too much time spent context-switching.',
          'Low Customer Usage Index.',
          'Increasing Defect Trend.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_21',
        question: 'Think Wheels, a truck company has recently acquired two new clients. These clients have significantly increased the work of the employees. The CEO of the company is still determining if the existing number of truck drivers/employees will be able to accommodate the new work. He wants to look at the existing work to analyze the gaps. He also wants to make sure that the existing clients are not impacted. Which KVA should Think wheels evaluate to understand how happy or stressed the employees currently are, and whether the existing clients are impacted? (choose the best option)',
        options: [
          'Current Value',
          'Ability to Innovate',
          'Time to Market',
          'Unrealized Value'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_22',
        question: 'An organization is building a new product and is in the early stages. The product is being used to test the market. The product does have a great market potential. How would you define the KVA for such a product? (Choose the best two options)',
        options: [
          'Low Current Value',
          'Low Unrealized Value',
          'High Current Value',
          'High Unrealized Value'
        ],
        correctAnswer: [0, 3],
        explanation: ''
      },
      {
        id: 'q4_23',
        question: 'An organization has been implementing Scrum for years. Under what circumstances does the organization really need an empirical approach to solving a problem? (Choose the best option)',
        options: [
          'When working with new and unproven technology.',
          'When business risk is high.',
          'When the market is changing rapidly.',
          'When the technical risk is high.',
          'All of the above'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q4_24',
        question: 'Which Key-Value Area is most effective at measuring market potential? (Choose the best option)',
        options: [
          'Time-to-Market.',
          'Current Value.',
          'Unrealized Value.',
          'None of the above.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q4_25',
        question: 'An organization has a large number of products and is unsure about how to allocate funding across the products. Which of the following is the best way for them to proceed?',
        options: [
          'Let the Finance Director decide.',
          'Allocate funding equally across all products.',
          'Allocate funding evenly based on the revenue share for each product.',
          'Fund small incremental changes for each product, measure outcomes, and repeat.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q4_26',
        question: 'What questions would an organization pose to evaluate Current Value? (choose all that apply)',
        options: [
          'How happy are users and customers today? Is their happiness improving or declining?',
          'How happy are your employees? Is their happiness improving or declining?',
          'How fast can the organization learn from new experiments and information?',
          'How happy are your investors and other stakeholders? Is their happiness improving or declining?',
          'What prevents customers or users from benefiting from that innovation?',
          'Can any additional value be created by our organization in this market or other markets?'
        ],
        correctAnswer: [0, 1, 3],
        explanation: ''
      },
      {
        id: 'q4_27',
        question: 'Your organization\'s portfolio consists of several products. Management has decided to place the lead revenue-generating product into maintenance mode, taper off its investment, and seek other opportunities for future growth. What may have led to this? (choose the best option)',
        options: [
          'The organization has decided to reduce operational overhead and to focus on products that generate better Product cost Ratios.',
          'The product has been losing customers, revenues are down, and the Unrealized Value is low (even though the Current Value is high).',
          'The innovation rate for the product is low.',
          'Your organization has stopped using Scrum.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_28',
        question: 'You are a Product Owner who has been building a product for a specific user group in mind. As your product\'s customer base grows, you begin to notice that different user groups have been using the product in different ways. Which of the following would be the best action to take? (choose the best option)',
        options: [
          'Keep focused on delivering the features agreed upon by the steering committee and don\'t take any action.',
          'Make sure each release includes features that satisfy all user groups.',
          'Design separate marketing strategies for each group to attract more users and increase revenue.',
          'Evaluate the possibility of delivering greater business value by developing separate products for each user group.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q4_29',
        question: 'Senior Management has sought your opinion on which product to allocate funds to, both products targeting different markets. Given the following details: Product A generates both revenue and profit for the company and is the main contributor. Also, Product A has pleased customers (high Current Value) and low Unrealized Value. Product B is relatively new and has a low Current Value and high Unrealized Value. Product Owners of both products are seeking substantial extra funding to enhance their products. Which funding recommendation would you give to management? (choose the best option)',
        options: [
          'Invest funding in Product B as it holds more future potential for the company.',
          'Allocate funding based on the proportion of product revenues.',
          'Divide funding equally between both products.',
          'Invest funding in Product A because the company\'s success is dependent on its continued success.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_30',
        question: 'True or False, The Net Promoter Score can be obtained by asking customers a single question: “How likely is it that you would recommend our product to a friend or a colleague?”.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_31',
        question: 'They want to help the organization make better investment decisions (better than the ones made in the past). What can these executives do to help their organization make effective portfolio investment decisions? (Choose the best option)',
        options: [
          'Carefully plan each project and work with the teams to maximize team efficiency.',
          'Create organizational goals that are clear and measurable.',
          'Define the initiatives and investments that the organization should pursue.',
          'All of the above.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_32',
        question: 'An organization is planning to have a large product release several months from now. Because the release will contain many product changes (new features, enhancements, and fixes), a large amount of effort will be needed from the team. During beta testing of the latest increment, you learn that one of the anticipated features does not meet the needs of the users and is rarely used. Which of the following is the best response? (Choose the best option)',
        options: [
          'Add a more valuable feature to the release.',
          'Push the release to a later date until you are able to improve the feature.',
          'Disregard the feedback as beta testing is not a good reflection of the broader market.',
          'Remove the feature from the increment and release the other features and changes earlier.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q4_33',
        question: 'Over a million customers use Samsung phones in the USA. Samsung recently implemented and released a particular feature that they believed would be widely adopted by the users. After gathering enough data from the test, it is concluded that the feature functions as intended however the usage rate was surprisingly low. What should Samsung do next? (Choose the two best options)',
        options: [
          'Enlarge the sample size by extending the length of the original experiment.',
          'Fix the issue / Enhance the product based on the interview conducted. Devise a new experiment to learn whether the issue was causing the problem.',
          'Interview the users and observe the usage to understand why the feature is not being used.',
          'Remove the feature from the product and move on to the next highest priority feature.',
          'Deem the new feature unsuccessful and proceed to implement the next feature.'
        ],
        correctAnswer: [1, 2],
        explanation: ''
      },
      {
        id: 'q4_34',
        question: 'A product improvement experiment is more effective when you know the following: (Choose the best option)',
        options: [
          'The experiment\'s target audience.',
          'What will be done to reduce the customer satisfaction gap that the experiment is targeting.',
          'The customer satisfaction gap that the experiment is targeting.',
          'How success will be measured.',
          'All of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q4_35',
        question: 'Agile approaches help organizations rapidly respond to market changes.Which measurements would be helpful in identifying the improvement areas with respect to an organization\'s ability to respond to change? (Choose the best three options)',
        options: [
          'Release frequency',
          'On product index',
          'Innovation rate.',
          'Revenue per employee',
          'Customer Cycle time',
          'Technical Debt'
        ],
        correctAnswer: [0, 2, 4],
        explanation: ''
      },
      {
        id: 'q4_36',
        question: 'What are the advantages of releasing a product frequently? (choose the best option)',
        options: [
          'They enable teams to inspect and adapt more frequently.',
          'They help teams better understand and meet customer needs.',
          'They help teams to learn how to correct and eliminate errors.',
          'Smaller, more frequent releases are less risky.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q4_37',
        question: 'EBM-PM (Portfolio Management) seeks to reduce risk by investing in small increments, and then monitoring the results of these at frequent intervals.',
        options: [
          'False.',
          'True.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q4_38',
        question: 'An organization has many customers on different versions of the same product. Most of the employees in the organization spend time and effort in maintaining all of the product variations. This leaves them with little time to invest in product improvements. Which of the following would best help the organization analyze it’s effectiveness to deliver new value? (Choose the best option)',
        options: [
          'Velocity.',
          'Cycle Time.',
          'Revenue per Employee.',
          'Innovation Rate.',
          'All of the above.',
          'None of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q4_39',
        question: 'Proto-personas are: (Choose the best option)',
        options: [
          'Proto-personas are the best guesses as to who is using (or will use) the product and why.',
          'A portray of a perfect customer.',
          'Models of actual/real people using the system for whom the problem is being solved.',
          'Market research data of the customers using the product.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q4_40',
        question: 'What are the key value areas, EBM examines: (Choose all that apply)',
        options: [
          'The responsiveness of the organization in delivering value.',
          'The effectiveness of the organization in delivering value.',
          'The current state of the organization relative to the organizational goals.',
          'Goals of the organization.'
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: 'Organizations should focus on the following Key-Value Areas (KVA) categories: \n 1. Current Value - Measures that quantify the value that the product delivers today. \n 2. Time-to-Market - Measures that quantify how quickly the organization can deliver and learn from the feedback they gather from experiments. \n 3. Ability to innovate - Measures that quantify the effectiveness of an organization in delivering new capabilities \n Current value: This metric measures the current value in the marketplace of the product or service being delivered. Considering CV helps an organization understand the value that their customers or users experience today. It provides insights into the financial impact and value generated by the product, helping stakeholders assess its overall performance and success. The purpose of looking at CV measures is to understand the value that an organization delivers to customers and stakeholders at the present time; it considers only what exists right now, not the value that might exist in the future. \n Ability to innovate: This metric reflects the organization\'s capacity to innovate and introduce new ideas, features, or improvements. It measures the organization\'s ability to adapt to market demands, customer needs, and technological advancements, which are crucial for long-term success and competitiveness. Improving A2I helps an organization become more effective in ensuring that the work that it does improves the value that its products or services deliver to customers or users. \n Time to Market: This metric measures the time it takes for a product or feature to be developed, tested, and released to the market. It indicates the organization\'s efficiency in delivering value to customers promptly. A shorter time to market enables the organization to respond to market changes quickly and gain a competitive advantage. Without actively managing Time-to-Market, the ability to sustainably deliver value in the future is unknown. The other options are incorrect because: Velocity: While velocity is a valuable metric within Scrum, it is primarily used to measure the amount of work a Scrum team can complete within a given time frame. Velocity does not directly capture organizational value as it focuses on team-level productivity rather than the overall impact on the organization. There are no EBM metrics in Scrum: This statement is incorrect. Evidence-Based Management (EBM) is an approach in Scrum that emphasizes using data and evidence to inform decision-making and maximize value. EBM metrics are designed to capture different aspects of organizational value and help guide improvements.'
      }
    ]
  },
  {
    id: 'palebm-mock-5',
    title: 'PAL EBM Mock Exam #5',
    description: 'Practice exam for the Professional Agile Leadership - Evidence-Based Management certification.',
    timeLimit: 60,
    passingScore: 85,
    questions: [
      {
        id: 'q5_1',
        question: 'What type of indicator does value become if it is measured infrequently?',
        options: [
          'Leading indicator',
          'Lagging indicator'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_2',
        question: 'You want to improve your team\'s Ability to Innovate. Which of the following actions might help?',
        options: [
          'Improve the cross-functional skills of your team.',
          'Establish "No Meetings” days to help increase focus.',
          'Reduce the number of product variants.',
          'Co-locating the team members.',
          'All of the above.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q5_3',
        question: 'Which of the following strategies might help in improving your team\'s Time to Market?',
        options: [
          'Ensure everyone on the team has no scheduling issues in order to maximize their utilization.',
          'Eliminate the need to wait for experts by improving the cross-functional skills of the team members.',
          'Increase the velocity of your team by adding developers.',
          'Increase the amount of time spent per day working on a product by planning offshore work to "Follow the Clock”.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_4',
        question: 'Which KVA categories should the Product Owner consider to measure and track the creation and delivery of value to the marketplace?',
        options: [
          'Employee Satisfaction',
          'Current Value',
          'Ability to Innovate',
          'Capability Building',
          'Time-to-Market'
        ],
        correctAnswer: [1, 2, 4],
        explanation: ''
      },
      {
        id: 'q5_5',
        question: 'You have many customers on older releases who express frustration that they cannot adopt your latest releases as fast as you release them. At the same time, you are in a competitive market and you feel that you need to stay ahead of competitors. With every new release, you are spread more thin because you also have to fix defects and make enhancements to older releases. What should you do in response?',
        options: [
          'Slow down the release cycles so customers have more time to catch up.',
          'Add customer support staff to help customers with their upgrade challenges.',
          'Pause the addition of new features and focus on making the upgrade process easier and less risky.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q5_6',
        question: 'How can the success of the project be evaluated?',
        options: [
          'Improved KPIs through frequent releases.',
          'Increased customer satisfaction.',
          'Reduction in Production cost.',
          'Decrease in lines of code.',
          'Increased velocity.'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q5_7',
        question: 'What measures can product owners use to track the true value being delivered?',
        options: [
          'Code Quality',
          'Customer Satisfaction',
          'Test Automation',
          'Cycle Time'
        ],
        correctAnswer: [1, 3],
        explanation: ''
      },
      {
        id: 'q5_8',
        question: 'Your product is used by businesses of various sizes. A very large company, that is interested in your product, would like a set of features implemented if they were to purchase your product. As a customer, this company would significantly increase your revenue. They also tell you that the features would improve your product and would win more customers. The requested features will be expensive and require extensive redesign. Also, you have not heard any similar feedback from any other customers or leads. What is the most appropriate action?',
        options: [
          'Perform market research to evaluate the demand for the features within the broader market.',
          'Implement the features in line with the request as they are an influential customer.',
          'Create experiments to better understand their needs and possible alternatives.',
          'Devise workarounds that will satisfy their request without needing a product redesign.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q5_9',
        question: 'Which of the following is considered an Experiment Loop?',
        options: [
          'Forming a hypothesis for improvement.',
          'Running your experiments.',
          'Inspecting your results.',
          'Measure Customer or user satisfaction.',
          'Increasing Innovation Rate.'
        ],
        correctAnswer: [0, 1, 2],
        explanation: ''
      },
      {
        id: 'q5_10',
        question: 'What factor should be considered when deciding to release an increment?',
        options: [
          'The cost and benefits of upgrading.',
          'The risks associated with releasing.',
          'Customers’ ability to absorb the new release.',
          'All of the above.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q5_11',
        question: 'Which of the following are examples of Key Value Measures for the Ability to Innovate (A2I)?',
        options: [
          'On-Product Index.',
          'Product Cost Ratio.',
          'Production Incident Count.',
          'Innovation Rate.',
          'Customer Cycle Time & Lead Time.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: ''
      },
      {
        id: 'q5_12',
        question: 'What measures can help to determine the product\'s success?',
        options: [
          'The product\'s impact on cost.',
          'How much of the planned scope is delivered by the end of the Sprint?',
          'The Scrum Team\'s velocity.',
          'The product\'s impact on customer satisfaction.',
          'The product\'s impact on revenue.',
          'The frequency of membership changes within the Scrum Team.'
        ],
        correctAnswer: [0, 3, 4],
        explanation: ''
      },
      {
        id: 'q5_13',
        question: 'What is the relation between risk and the value delivered by a Product?',
        options: [
          'Risk is part of delivering value.',
          'Higher risk will increase the delivery of value.',
          'Less value produces more risk.',
          'Higher risk can reduce the delivery of value.',
          'Risk is factored into value.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q5_14',
        question: 'How can Scrum help Product owners in making funding and investment decisions?',
        options: [
          'By releasing to the customers and users early and often.',
          'By frequently inspecting the outcomes of the delivered Sprint Increments to understand how much value is being produced per investment spent.',
          'Setting a fixed budget will ensure that the project is delivered on time, within scope, and on budget.',
          'The only financial decision required is the funding necessary for the operational costs of the Scrum Teams.'
        ],
        correctAnswer: [0, 1],
        explanation: ''
      },
      {
        id: 'q5_15',
        question: 'What is the experiments loop?',
        options: [
          'Release, A/B testing, Inspect, Adapt',
          'Experiment, Measure, Evaluate, Inspect, Adapt',
          'Plan, do, check, act',
          'Define Hypothesis, Experiment & Measure, Inspect, Adapt',
          'Release, Inspect, Adapt'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q5_16',
        question: 'The Business Model Canvas is divided into nine areas. Which of the following are areas that are linked to revenue?',
        options: [
          'Cost Structure.',
          'Customer Segments.',
          'Channels.',
          'Key Partners.',
          'Revenue Streams.'
        ],
        correctAnswer: [1, 2, 4],
        explanation: ''
      },
      {
        id: 'q5_17',
        question: 'Recently, you introduced a new feature that you believed would be popular among customers. However, even though the feature is functioning correctly, the usage rate is lower than expected. As a product owner, what should you do?',
        options: [
          'Enlarge the sample size by extending the length of the original experiment.',
          'Deem the new feature unsuccessful and proceed to implement the next feature.',
          'Devise a new experiment to learn whether usability issues are causing the problem.',
          'Completely remove the features that were least used.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q5_18',
        question: 'During the Sprint Review, a couple of the features have not been received well by the end users. One of the stakeholders feels that the product is not at the stage where it\'s useful to measure data yet. The Product Owner has validated that the measures are accurate, a good representation of user satisfaction, and valuable to help you and your team. What should the Product Owner do?',
        options: [
          'Stop measuring user data until the product has matured enough.',
          'Continue measuring and sharing the outcomes to provide transparency and openness, and continue to use the data to help with decision-making.',
          'Continue measuring user data but only share it when needed in order to avoid conflict with stakeholders.',
          'None of the above options.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_19',
        question: 'You want to know the potential value that your product could, but does not yet, deliver. Which of the following is the most helpful?',
        options: [
          'Interviewing users who tried your product but did not buy.',
          'Competitor research and their market shares.',
          'Testimonials about why your customers choose your product.',
          'Ask your customers what they like about the product.',
          'All of the above.',
          'None of the above'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q5_20',
        question: 'What would be the best way to have multiple teams get started on a multi-product initiative?',
        options: [
          'Have them start with what they have as they\'ll self-organize and eventually figure out what to do.',
          'Let the teams know what time of reporting the business will be needing.',
          'Explain to them the goal of the initiative, and how success will be measured, and together agree with how they will provide transparency.',
          'Ensure that all features are assigned to the most suitable teams before getting started.'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q5_21',
        question: 'What are the important factors that should be considered in the release decision?',
        options: [
          'Key Stakeholder\'s approval.',
          'The work remaining to achieve the Sprint Goal.',
          'The risk of the product\'s value may be outside the marketplace expectation.',
          'The costs and benefits of the enhancement.',
          'The number of prior increments integrated with the current Increment',
          'The customers are constrained by the new release.'
        ],
        correctAnswer: [2, 3, 5],
        explanation: ''
      },
      {
        id: 'q5_22',
        question: 'The CEO and the CTO of the company have approached you with two competing features that they suggest you add to the Product. As you did not get a chance to validate the value that the features might bring to the Product, you decided to take on the Experimenter stance. What would best describe the Experimenter?',
        options: [
          'Specify the work needed to be done with a great level of detail, so that the Developers know exactly how to implement it.',
          'Conduct an experiment to validate the features against the market and use the results when deciding how to move forward.',
          'Make use of data. As you are already aware of market value, it is easy to evaluate which feature will generate the most value.',
          'Listen to the stakeholders\' arguments and apply a suitable style: negate their concerns, minimize them, tap them, or interrupt them in the middle. They have to understand that you are the Product Owner and the decision is ultimately yours to make.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_23',
        question: 'Which metrics provide the most precise information to the Product Owner that the product is delivering value and fulfilling its purpose?',
        options: [
          'Implemented Scope.',
          'The velocity of the Team.',
          'Measurement of usage, by feature.',
          'On-time release trends.',
          'Customer satisfaction.'
        ],
        correctAnswer: [2, 4],
        explanation: ''
      },
      {
        id: 'q5_24',
        question: 'Product A has a budget that is twice that of Product B. Both serve the same set of customers. Does Product A create more value for the customers than Product B?',
        options: [
          'Yes, because with more funding it can address a broader set of customer needs.',
          'We do not know unless we actually measure customer experience.',
          'No; Product B may better meet the needs of customers by focusing more narrowly.'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_25',
        question: 'Your product has several internal stakeholders. You\'ve gathered the following feedback related to product direction: - The CEO thinks the feature is too expensive and suggests staying focused on the market you\'re currently serving. - The CMO tells you that there\'s a new market opportunity and believes that in order to reach it, the product will need a new feature. - The Developers estimate that this new feature will require a high level of effort. As the Product Owner, you have full ownership of final product decisions. How should you proceed?',
        options: [
          'Follow the CEO\'s suggestion as he/she is ultimately responsible for the success of the organization.',
          'Gather additional feedback and the needs of the other stakeholders.',
          'Follow the CMO\'s suggestion as he/she is the expert in understanding market opportunities.',
          'Focus on the current market as you do not want to risk losing customers.',
          'Develop an experiment that will help the business to better understand the new market, market opportunities, and its potential.'
        ],
        correctAnswer: 4,
        explanation: ''
      },
      {
        id: 'q5_26',
        question: 'What are some signs that an investor or shareholder can look for to determine if a product is delivering value and fulfilling its purpose?',
        options: [
          'The average selling price as compared to close competitors.',
          'Revenue per Employee.',
          'The weekly velocity of the Developers.',
          'Market Share.',
          'Product profitability.'
        ],
        correctAnswer: [0, 3, 4],
        explanation: ''
      },
      {
        id: 'q5_27',
        question: 'Which Key Value Area (KVA) suggests the potential future value that could be realized if the organization could perfectly meet the needs of all potential customers?',
        options: [
          'Current Value (CV)',
          'Unrealized Value (UV)',
          'Ability to Innovate (A2I)',
          'Time-to-market (T2M)'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_28',
        question: 'Which goal minimizes the time it takes for the organization to deliver value? Without actively managing this goal, the ability to sustainably deliver value to the future is unknown.',
        options: [
          'Current Value Goal',
          'Time to Market Goal',
          'Unrealized Value goal',
          'Ability to Innovate'
        ],
        correctAnswer: 1,
        explanation: ''
      },
      {
        id: 'q5_29',
        question: 'The ability of a product development organization to deliver new capabilities that might meet customer needs can be expressed through which measure?',
        options: [
          'Unrealized Value (UV)',
          'Time to Market (T2M).',
          'Ability to Innovate (A2I)',
          'Current Value (CV)'
        ],
        correctAnswer: 2,
        explanation: ''
      },
      {
        id: 'q5_30',
        question: 'Which of the following are examples of Key Value Measures for Current Value (CV)?',
        options: [
          'Revenue per Employee',
          'Product Cost Ratio',
          'Release Frequency',
          'Innovation Rate',
          'Customer Satisfaction'
        ],
        correctAnswer: [0, 1, 4],
        explanation: ''
      },
      {
        id: 'q5_31',
        question: 'What activities can lead to improvement in current value (CV)?',
        options: [
          'Improving usability',
          'Improving customer or user outcomes',
          'Improving delivery pipeline',
          'Removing technical debt',
          'Creating a happier workplace'
        ],
        correctAnswer: [0, 1, 4],
        explanation: ''
      },
      {
        id: 'q5_32',
        question: 'What activities can impede a team from being able to deliver new capabilities and value as part of the Ability to Innovate (A2I)?',
        options: [
          'Spending too much time remedying poor product quality.',
          'Sprint ceremonies & back-to-back sprints.',
          'Maintaining variations of a product due to lack of operational excellence.',
          'Lack of decentralized decision-making.',
          'Complex requirements or user stories.'
        ],
        correctAnswer: [0, 2, 3],
        explanation: ''
      },
      {
        id: 'q5_33',
        question: 'The best statement that describes the Key Value Area of Current Value (CV) is?',
        options: [
          'It seeks to quantify the organization’s ability to deliver new capabilities, products, or services quickly.',
          'It seeks to quantify the ability to deliver new capabilities that may more closely match the needs of the customer.',
          'It seeks to quantify the potential future value the organization could realize by meeting the needs of all potential customers perfectly.',
          'It seeks to quantify the value that the product is delivering to customers at this point.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q5_34',
        question: 'Your company\'s product has been through multiple releases. It is not meeting revenue expectations. What measure will help you understand the problem?',
        options: [
          'Measuring Lead Time.',
          'Measuring Innovation Rate.',
          'Measuring Release Frequency.',
          'Measuring Usage Index.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q5_35',
        question: 'What are the two best options for enhancing Time-to-Market?',
        options: [
          'Removing activities that do not add value to the product development and delivery process.',
          'Working overtime.',
          'Longer Sprints.',
          'Reducing the number of features in a product release.',
          'Increasing the number of features in a product release.'
        ],
        correctAnswer: [0, 3],
        explanation: ''
      },
      {
        id: 'q5_36',
        question: 'As the Product Owner at a small company with only one product, you have the authority to make decisions regarding pricing, marketing, and investments in new features or capabilities. The product has a high Current Value (high customer satisfaction) and high Unrealized Value (low market share). Given this information, what initial action would you take to increase the business performance of the product?',
        options: [
          'Improve the product\'s marketing to draw in more customers.',
          'Introduce an identical product to the market with a different name.',
          'Increase the product\'s feature count to attract more customers.',
          'Reduce the product\'s price to attract more customers.'
        ],
        correctAnswer: 0,
        explanation: ''
      },
      {
        id: 'q5_37',
        question: 'Your main revenue-generating product in the portfolio has a high Current Value (high customer satisfaction) and low Unrealized Value (less market potential). This product has also experienced a decrease in customers and revenue in recent years. Given these factors, what initial action would you take to address this situation?',
        options: [
          'Boost marketing efforts for the product.',
          'Invest more in the product to generate greater interest and recapture former customers.',
          'Lower the price of the product to attract new customers.',
          'Keep the product as is, but start decreasing investment and seek for other future growth opportunities.'
        ],
        correctAnswer: 3,
        explanation: ''
      },
      {
        id: 'q5_38',
        question: 'What can a Product Owner achieve through experimentation?',
        options: [
          'Understanding Product-Market fit and if a viable business can be created around a Product.',
          'Reducing waste.',
          'Making decisions on investment strategies and funding.',
          'Eliminating all uncertainty and risks to the future success of a Product.'
        ],
        correctAnswer: [0, 1, 2],
        explanation: ''
      },
      {
        id: 'q5_39',
        question: 'Your company\'s product is losing market share due to a competitor launching a product with enhanced features more quickly. As a Product Owner, what actions would you take to address this issue?',
        options: [
          'Reduce the cost of your product to retain customers.',
          'Improve your Ability To Innovate (A2I).',
          'Improve your Time-To-Market (T2M).',
          'Collaborate with the marketing team to implement the latest, cutting-edge marketing strategies to gain new customers.'
        ],
        correctAnswer: [1, 2],
        explanation: ''
      },
      {
        id: 'q5_40',
        question: 'Team A has an average velocity of 30. Team B has an average velocity of 42. Which team is delivering more value?',
        options: [
          'Team A',
          'Team B',
          'We do not know; velocity is not a measure of value.'
        ],
        correctAnswer: 2,
        explanation: ''
      }
    ]
  },
  {
    id: 'psm-ii-mock-1',
  title: 'PSM II Mock Exam #1',
  description: 'Professional Scrum Master Level II practice exam #1 covering advanced Scrum Master concepts.',
  timeLimit: 90,
  passingScore: 85,
  questions: [
    {
        id: 'q1_1',
        question: 'A Scrum Master teaches those who are interested in the Developers\' progress that progress in Scrum comes from inspecting an Increment at the Sprint Review.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 1,
        explanation: 'Inspecting the Increment is the primary measure of Scrum Team\'s progress, the Product Owner usually knows more about this, considering that has a view on how much value is delivered and discussed in the Sprint Review.'
      },
      {
        id: 'q1_2',
        question: 'In a newly formed team, the members are new and Harry, the Scrum Master, is finding it hard to ensure that everyone trusts each other. Which Scrum Value is impacted by trust? (Choose the best answer)',
        options: [
          'None of the options',
          'Commitment',
          'Respect',
          'Courage',
          'All options',
          'Openness and Focus'
        ],
        correctAnswer: 4,
        explanation: 'Without trust, team members will have difficulties acting and behaving in ways that reflect the Scrum Values and how they effectively apply empiricism.'
      },
      {
        id: 'q1_3',
        question: 'Scrum is used in a way to ensure transparency. Team members work together while participating in various events to improve communications. Which of the following may improve communications in Scrum? (Choose all that apply)',
        options: [
          'Daily Scrum',
          'Sprint Review',
          'Release Planning',
          'Integration Sprints',
          'Sprint Retrospectives'
        ],
        correctAnswer: [0, 1, 4],
        explanation: 'Please be careful as it is called Daily Scrum and not Standup. All Scrum events improve communications.'
      },
      {
        id: 'q1_4',
        question: 'A Scrum Master has been training/coaching the Product Owner to find ways to maximize the value delivered. Which stakeholders are the most important for the Product Owner to satisfy? (Choose the best answer)',
        options: [
          'The company founder',
          'The board of directors',
          'The Head of Product',
          'The Product\'s users'
        ],
        correctAnswer: 3,
        explanation: 'The highest priority is to satisfy the end users.'
      },
      {
        id: 'q1_5',
        question: 'An organization has hired Steven to be the Scrum Master of three new teams that will work on the initial release of a new product using Scrum. Steven advises the group on how to get started with Scrum. What are the first two things Steven should recommend? (Choose the best two answers)',
        options: [
          'Three Product Owners, one for each Scrum Team',
          'One Product Backlog to represent all of the known work needed to be done for the Product',
          'Each Scrum Team has its Product Backlog with items only their team will be working on',
          'Having one Product Owner be accountable for maximizing value flow throughout the development process and providing transparency on the overall progress'
        ],
        correctAnswer: [1, 3],
        explanation: 'The Scrum Master serves the organization in several ways. These ways include; Leading and coaching the organization in its Scrum adoption; Planning Scrum implementations within the organization; Helping employees and stakeholders understand and enact Scrum and empirical product development.'
      },
      {
        id: 'q1_6',
        question: 'According to Scrum Theory, how should a group of fifty Developers be divided into multiple teams? (Choose the best answer)',
        options: [
          'Allow the team leads to divide and select teams',
          'The teams will rotate their members every Sprint for the spread of knowledge',
          'By understanding the product, the Product Vision and the Scrum Framework, the group divides itself into teams',
          'Create a skills matrix for identifying their levels and years of experience to assign people into teams'
        ],
        correctAnswer: 2,
        explanation: 'The Scrum teams need to be self-managing. The Scrum Master should coach them when needed or requested.'
      },
      {
        id: 'q1_7',
        question: 'Which of the following can impact the outcome of the Sprint? (Choose all that may apply)',
        options: [
          'The complexity and stability of the technology',
          'The working relationship and skills of the people in the Scrum Team',
          'Number of QA engineers in the team',
          'Availability of the Architect'
        ],
        correctAnswer: [0, 1],
        explanation: 'The knowledge of the team, as well as its skills and behavior, will impact not only how effective the team is but also the outcomes of what it can produce. The Scrum Team should be cross-functional so they do not depend on Architects or team leads.'
      },
      {
        id: 'q1_8',
        question: 'Harry, the Scrum Master, is approached by one of the Developers who mentioned that they are not completing regression tests for all of the work they are performing to the level defined in the Definition of Done. They discussed this with the Product Owner and decided to remove regression testing from the Definition of Done. Which two actions are the most appropriate for Harry to take? (Choose the best two answers)',
        options: [
          'Accept the decision for the reason that a mutual agreement has been made between the Developers and the Product Owner',
          'Ask the Developers and the Product Owner if they are still able to produce potentially shippable product Increments by altering the Definition of Done',
          'Reject the decision. The long-term maintainability of the product will be negatively impacted by modifying the Definition of Done',
          'Ask the Developers and the Product Owner what problem they are trying to solve by altering the Definition of Done and removing the regression testing from it. Ask coaching questions like "in what ways will this decision impact transparency and quality?"'
        ],
        correctAnswer: [1, 3],
        explanation: 'The Scrum Master asks coaching questions to help the team members make the best possible decisions according to what is known at the time. He does not approve or reject team decisions but ensures the team stays within the boundaries of the Scrum framework.'
      },
      {
        id: 'q1_9',
        question: 'A new Scrum team has just been formed and the Product Owner is not certain whether he should extend the Sprint or not. There are no functional items been delivered and the rest of them are not properly tested. What could be a reason for a Product Owner to delay the start of a new Sprint after the conclusion of the previous Sprint? (Choose the best answer)',
        options: [
          'The QA team has not finished testing the previous Increment before declaring it ready to ship',
          'The Stakeholders were disappointed with the Increment produced in the previous Sprint',
          'The Product Owner needs additional time to identify the next initiatives',
          'There is no acceptable reason. A new Sprint starts immediately after the conclusion of the previous Sprint',
          'There is not enough work in the Product Backlog to work on in the upcoming Sprint'
        ],
        correctAnswer: 3,
        explanation: 'The new Sprint should start immediately after the end of the previous one, there is nothing stated in the Scrum Guide for this.'
      },
      {
        id: 'q1_10',
        question: 'At the beginning of a Sprint, the Developers don\'t have the tools and infrastructure needed to complete the current Sprint Backlog Items. What two things are the LEAST appropriate for the Scrum Master to do?',
        options: [
          'Talk with the Product Owner in order to accept partially done Increments',
          'Help the Developers get tools and improve infrastructure while Definition of Done is adapted accordingly',
          'The Increment for the current Sprint will focus on delivering infrastructure and tool acquisition',
          'Improve communication between the Product Owner and Developers in order to establish a plausible Sprint Goal and a proper Definition of Done'
        ],
        correctAnswer: [0, 2],
        explanation: 'Infrastructure and tools are not prepared upfront because it requires a complete understanding of the whole project and product, which is usually not the case, so we need to hold on to the adaptation pillar. The required infrastructure and tools depend on the product we are going to create, so this will be prepared gradually throughout the project. Make sure you have noticed the "least appropriate" in the question.'
      },
      {
        id: 'q1_11',
        question: 'An organization has just hired you as a new Scrum Master to help them transform their teams from their current traditional process to Scrum. The teams are currently structured to specialize in a single function, which is also known as component teams where a team would only address a single layer (i.e. front-end, back-end, testing, etc.). You\'ve introduced the concept of cross-functional teams where all the skills needed to produce business functionality, from end to end, are inside of a single team. What should you keep in mind when transitioning from siloed teams to cross-functional teams? (Choose the best two answers)',
        options: [
          'It is easier to compare the performance between cross-functional teams in order to decide which teams to assign tasks to and which teams need additional coaching',
          'Newly formed teams will need time to stabilize before reaching their peak performance. During the initial stages of forming, performance will suffer and productivity may be low. However, there are still chances that the delivery of business value will increase',
          'Without featured teams, you can\'t do Scrum. Postpone Scrum adoption until the teams are reorganized in featured teams',
          'People from different layers and components will need time to become accustomed to working and delivering unified functionality together as one Scrum Team thus productivity may suffer'
        ],
        correctAnswer: [1, 3],
        explanation: 'Forming a team takes time. Members often go through recognizable stages as they change from being in a group of individuals to a team with common goals. Forming, Storming, Norming, and Performing model describes these stages by Bruce Tuckman. Once you understand it, you can help your new team become effective more quickly.'
      },
      {
        id: 'q1_12',
        question: 'John, a Product Owner from one of the Scrum teams, has been attending the Daily Scrum. During the Daily Scrum, the Developers have been reporting their daily work to John so that he is aware of their Sprint progress and what each member is working on. What is the best action for the Scrum Master to take? (Choose the best answer)',
        options: [
          'Allow John to participate in the Daily Scrum as he is responsible for the product\'s success',
          'Facilitate the Daily Scrums to avoid any conflicts between the Developers and John',
          'Coach John and the Developers on the purpose of the Scrum Events and let them figure out what to do in this situation',
          'Ask John to stop attending the Daily Scrum'
        ],
        correctAnswer: 2,
        explanation: 'Because the Developers are the ones doing the work, they are best suited to inspect and adapt the progress toward the Sprint Goal. It is the Scrum Master\'s responsibility to teach the Scrum team the value and objective of each Scrum event for them to optimize the benefits of each event. Because the Daily Scrum is owned by the Developers, it is up to them on how they should run it.'
      },
      {
        id: 'q1_13',
        question: 'At the end of the eighth Sprint, the internal sponsors are not happy with the progress of the product being built. The current state of the product is not as expected as it will require additional Sprints and more budget than originally anticipated at the start of the project. What factors may have led to this? (Choose the best three answers)',
        options: [
          'The Product Owner has not been engaging with sponsors frequently enough and has not been kept aware of the project\'s overall progress',
          'The Stakeholders have not been using the Daily Scrum effectively to track the progress of the Developers',
          'The Scrum Master has not ensured transparency',
          'The project plan proposed to the sponsors at the start of the project was followed stringently',
          'The sponsors haven\'t been using the Sprint Reviews to actively engage, inspect and evaluate the progress'
        ],
        correctAnswer: [0, 2, 4],
        explanation: 'To manage the stakeholders\' expectations, there must be open communication throughout the project cycle while working together. Although the Scrum Guide does not directly state that the Scrum Master is responsible for ensuring transparency, it is implicit. The Scrum Master is responsible for the process in which Scrum is adopted and enacted. Scrum is founded on empiricism, and the Scrum Master helps those inside and outside the team operate in an empirical environment that includes transparency (one of the three pillars of empiricism).'
      },
      {
        id: 'q1_14',
        question: 'A Scrum team has six members in total: four who work full-time in the office and two who work part-time at home. The team is arguing that synchronizing each day is too difficult and has suggested that the Daily Scrum should be held every other day instead. What three main issues would arise if the Daily Scrum was held less frequently? (Choose the best three answers)',
        options: [
          'The Scrum Master would lose the ability to update the Burndown chart adequately',
          'Opportunities to inspect and adapt the Sprint Backlog would be reduced',
          'The Product Owner would not accurately inspect the utilization of the individual team members',
          'Impediments would be raised and resolved slower',
          'Less information regarding progress would be shared as this would cause the Sprint plan to become inaccurate and reduce transparency over progress towards the Sprint Goal'
        ],
        correctAnswer: [1, 3, 4],
        explanation: 'The Daily Scrum is an internal meeting for developers to review progress toward the Sprint Goal and how the work in the Sprint Backlog is progressing. The Daily Scrum increases the chances of the Developers meeting the Sprint Goal.'
      },
      {
        id: 'q1_15',
        question: 'A Scrum team has been working on the same product for twelve Sprints. What would likely be the immediate impact on the original Scrum team if two new Scrum teams are to be added to the same product? (Choose the best answer)',
        options: [
          'Its productivity is likely to increase',
          'Its productivity is likely to stay the same',
          'Its productivity is likely to decrease'
        ],
        correctAnswer: 2,
        explanation: 'The productivity of the original Scrum team would likely decrease as they would need to take time to assist and support the new Scrum teams in order for them to perform optimally.'
      },
      {
        id: 'q1_16',
        question: 'Each product that we build using Scrum should have a Product Goal to make sure that the teams are focused. What is true about the Product Goal? (Choose all that apply)',
        options: [
          'The Scrum Team has the right to determine the Product Goal',
          'The Scrum Master serves the Product Owner by finding techniques for effective Product Goal definition',
          'The Product Owner is accountable for developing and explicit communicating the Product Goal',
          'The Developers should focus on their Sprint Backlog and not the Product Goal'
        ],
        correctAnswer: [1, 2],
        explanation: 'As stated in the Scrum Guide, the Product Owner is accountable for developing and explicit communicating the Product Goal. The Scrum Master serves the Product Owner by finding techniques for effective Product Goal definition. Sprint Backlog should be built in a way towards the Product Goal.'
      },
      {
        id: 'q1_17',
        question: 'The Product Owner\'s primary concern is the flow of value reflected in the ordering of the Product Backlog.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'The Product Owner is also known as the value maximizer. He is responsible for maximizing the value of the work the Developers do. This is done through the ordering of the Product Backlog.'
      },
      {
        id: 'q1_18',
        question: 'A Scrum Master is a true leader who serves the Scrum team and the organization. Which three activities describe what a Scrum Master manages as reflected by the Scrum Guide? (Choose the best three answers)',
        options: [
          'Reporting on the performance of the Sprint',
          'Managing the process in which Scrum is applied',
          'Managing the capacity and utilization of each Developer',
          'Causing the removal of impediments to the Scrum Team\'s progress that limits their progress and productivity',
          'The way Scrum is understood and enacted within the organization',
          'Managing the Product Backlog items and working in the Sprint Backlog'
        ],
        correctAnswer: [1, 3, 4],
        explanation: 'The Scrum Master must understand the principles and values behind agility, act in ways that reflect the values of Scrum and create an environment for others to embrace these values. The Scrum Master is responsible for ensuring that the team\'s process stays within the boundaries of the Scrum framework along with helping and supporting the team with continuous improvement.'
      },
      {
        id: 'q1_19',
        question: 'A company has recently moved to new facilities as they have hired 38 more Developers. Where should the Daily Scrum be held? (Choose the best answer)',
        options: [
          'In the same location where the Developers are seated',
          'Wherever the Developers decide is most suitable',
          'Wherever the Scrum Master decides is best',
          'In front of the Scrum board',
          'In a room where the management can attend'
        ],
        correctAnswer: 1,
        explanation: 'Because the Daily Scrum is owned and managed by the Developers, it is up to them to decide on the most effective place and time to hold the Daily Scrum.'
      },
      {
        id: 'q1_20',
        question: 'During the Product Backlog refinement, the Technical leader is not present, and the team is not sure how to implement the new module. Who is responsible for the work during the Sprint? (Choose the best answer)',
        options: [
          'The Scrum Master',
          'The Developers',
          'The engineering director',
          'The Technical Architects',
          'The Team Leads'
        ],
        correctAnswer: 1,
        explanation: 'The Developers are responsible for making decisions during the Sprint Backlog. The Product Owner needs to make sure that their work meets the stakeholders\' objectives.'
      },
      {
        id: 'q1_21',
        question: 'Tom is a Scrum Master asked to assist in creating five new Scrum teams that will be working to build a highly anticipated product. He talks with them about the importance of being able to integrate their Increments by the end of their Sprints. This includes the first Sprints. The product is very important to both the end-users and the organization. Of the choices raised by future team members, what would Tom encourage? (Choose the best answer)',
        options: [
          'Each Scrum Team delivers functionality at the end of each Sprint. New Product Backlog items will then be added to the next Sprint Backlog to integrate their functionality with the other teams to create a unified Increment.',
          'All Scrum Teams agree on a mutual understanding of "Done" that defines all work necessary to deliver a potentially shippable Increment that includes all previous Increments delivered for the product.',
          'Wait until enough of the infrastructure and architecture is in place before starting the first Sprints. This will increase the success of delivering integrated Increments in the first Sprint.',
          'Each Scrum Team delivers Increments in its own code branch. After UAT is performed at the Sprint Review, the code branch is isolated until enough Increments are considered acceptable. All code branches will then be merged during the release phase.'
        ],
        correctAnswer: 1,
        explanation: 'When a Product Backlog item or an Increment is described as "Done", everyone must understand what "Done" means. If multiple Scrum Teams are working on the system or product release, the Developers on all the Scrum Teams must mutually define the Definition of Done to have a shared understanding of what it means for work to be complete. Each Increment is additive to all prior Increments and thoroughly tested, ensuring that all Increments work together.'
      },
      {
        id: 'q1_22',
        question: 'A Scrum team has been formed and the Technical leader has left on holiday while being in the middle of a Sprint. During his absence, who is responsible for managing the tasks of the Sprint? (Choose the best answer)',
        options: [
          'The Project Manager',
          'The Product Owner',
          'The Scrum Master',
          'None of the options',
          'All options',
          'The Developers'
        ],
        correctAnswer: 5,
        explanation: 'During a sprint, the Developers are responsible for managing and tracking the progress of their work. As nobody owns a specific task, all Developers should be responsible for all items in the Sprint Backlog.'
      },
      {
        id: 'q1_23',
        question: 'Stakeholders are only allowed to meet with the Scrum team at the Sprint Review.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Improving communications with the stakeholders is a crucial activity in Scrum, as working with them frequently ensures the team focuses on building the right things Although it is required to have stakeholders at Sprint Review, they can also engage with the Scrum team during Product Backlog refinement, Sprint Planning, or during the Sprint if the Scrum team requires it.'
      },
      {
        id: 'q1_24',
        question: 'What would be the best two ways to identify that a Scrum team is self-managed? (Choose the best two answers)',
        options: [
          'The Developers are cross-functional and understand what has to be done to complete the tasks assigned to them in the Sprint Planning',
          'Management can see who is working on which tasks',
          'Creativity thrives and new possibilities are explored',
          'The Developers are able to resolve internal conflicts between members in order to continue working'
        ],
        correctAnswer: [2, 3],
        explanation: 'In self-managed teams creativity thrives, conflicts can be resolved, and new possibilities are explored. Remember, the whole Scrum team is cross-functional, not the Developers.'
      },
      {
        id: 'q1_25',
        question: 'Harry is a Scrum Master of a Scrum team that is new to Scrum. Halfway through the Sprint, the Product Owner mentions to Harry that he is concerned the Developers will not be able to complete the entire Sprint Backlog by the end of the Sprint. What should Harry do in this situation? (Choose the best answer)',
        options: [
          'Coach the Product Owner that with complex software development, you can\'t promise the entire scope that was forecast during Sprint Planning. As more is learned during the Sprint work may emerge that affects the Sprint Backlog.',
          'Add more Developers to the Scrum Team to meet the Product Owner\'s expectations',
          'Motivate the Developers to meet their commitment to the Product Owner',
          'Advise the Product Owner that the Developers own the Sprint Backlog and it is up to them to meet their commitments. No one tells the Developers how to turn the Product Backlog into Increments of potentially releasable functionality.'
        ],
        correctAnswer: 0,
        explanation: 'Scrum is founded on empirical process control theory or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. The Sprint Backlog is a forecast by the Developers about what functionality will be in the next Increment and the work needed to deliver that functionality into a \'Done\' Increment.'
      },
      {
        id: 'q1_26',
        question: 'Three Scrum teams are trying to determine the most appropriate length for their Sprint. Which factors are best considered when defining the Sprint length? (Choose the best answer)',
        options: [
          'Having a consistent Sprint length across all Scrum Teams',
          'The level of expertise over the technology to be used, the ability to release an Increment to the end-users and the risk of being disconnected from the stakeholders',
          'How often the team size changes'
        ],
        correctAnswer: 1,
        explanation: 'The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum team\'s current Definition of Done. Many factors should be considered when deciding the right Sprint length.'
      },
      {
        id: 'q1_27',
        question: 'A Product Owner has been working for many years for 6 Scrum teams. What would the Product Owner do during an active Sprint? (Choose the best answer)',
        options: [
          'Participate in the Daily Scrum',
          'Update the Burndown chart',
          'Prioritize the Sprint Backlog',
          'Engage with the Stakeholders and answer questions from the Developers'
        ],
        correctAnswer: 3,
        explanation: 'One of the most important responsibilities of a Product Owner is to interact with the stakeholders. This ensures that the most valuable functionality is always being produced first and provides clarifications to the Developers when requested.'
      },
      {
        id: 'q1_28',
        question: 'What would be the main benefits of self-management? (Choose the best answer)',
        options: [
          'Increased capacity, accuracy of estimates, output',
          'Increased creativity, self-accountability, commitment',
          'Increased rule compliance, self-accountability, output',
          'Increased rule compliance, self-accountability, commitment'
        ],
        correctAnswer: 1,
        explanation: 'Self-managed teams enable teams to tackle complex challenges creatively, be accountable for their work, and commit to each other and the team\'s goals.'
      },
      {
        id: 'q1_29',
        question: 'Three Scrum teams are currently building a single product and pulling work from the same Product Backlog. All three teams have identified that they will need Meryl, a database specialist, to work full time in their team for the next several Sprints. What should Harry, the Scrum Master, do to solve this potential problem? (Choose the best answer)',
        options: [
          'Assign Meryl to the team with the most urgent tasks first and then move him to the next team and so on until the required support is completed',
          'Manage the items in the Sprint Backlogs so that Meryl can be utilized evenly for each team',
          'Ask Meryl to work with the HR department to recruit and hire additional database specialists. In the meantime, have the Product Owner move items that do not depend on Meryl to the top of the Product Backlog.',
          'Coach the Scrum Teams to self-manage this issue and help them implement their preferred solution'
        ],
        correctAnswer: 3,
        explanation: 'If requested, the Scrum Master can even facilitate conversations through open-ended questions to help the team members make the best possible decisions according to what is known at the time. He/she does not approve or reject team decisions but ensures the team stays within the boundaries of the Scrum framework.'
      },
      {
        id: 'q1_30',
        question: 'Project Managers are working close to the customers, so they know well what they need, so a Product Owner is essentially the same thing as a traditional Project Manager.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'The Product Owner is closer to the Developers and the Product whereas the Project Manager is closer to the end-user. A Project Manager is a specialist who manages specific projects in a company.'
      }
    ]
  },
  {
    "id": "psm-ii-mock-2",
  "title": "PSM II Mock Exam #2",
  "description": "Professional Scrum Master Level II practice exam #2 covering advanced Scrum Master concepts.",
  "timeLimit": 90,
  "passingScore": 85,
  "questions": [
    {
        "id": "q2_1",
        "question": "Harry, a Scrum Master, is approached by the Developers complaining that one of the senior engineers is using too much time during the Daily Scrums to share technical solutions. Which are the best two actions for Harry to take? (Choose the best two answers)",
        "options": [
          "Speak with the person privately and coach him on the purpose of the Daily Scrum",
          "Suggest that the team members timebox the amount of time each person can speak at the Daily Scrum to a maximum of two minutes",
          "Suggest using a token to limit who is allowed to speak during the Daily Scrum",
          "Contact the team member's direct manager to resolve the issue",
          "Coach the Developers to help them find a solution to the problem and take ownership of the solution as a group"
        ],
        "correctAnswer": [0, 4],
        "explanation": "The Scrum Master helps the Scrum team focus on creating high-value Increments that meet the Definition of Done in a variety of ways, including coaching team members in self-management and cross-functionality. Improving the Scrum team's progress by removing impediments and ensuring that all Scrum events take place and are positive, productive, and on time."
      },
      {
        "id": "q2_2",
        "question": "Harry is a Scrum Master who was hired to assist an organization that is new to Scrum in understanding and implementing Scrum effectively. Which of the following three activities would be acceptable? (Choose the best three answers)",
        "options": [
          "Schedule formal trainings",
          "Educate stakeholders and clients about Scrum",
          "Extend Retrospectives to include formal training",
          "Arrange 1:1 coaching sessions to discuss any identified concerns Harry may have",
          "Require that all teams in the organization start using Scrum as soon as possible",
          "Penalize any Scrum Team members who are not staying within the Scrum Framework"
        ],
        "correctAnswer": [0, 1, 3],
        "explanation": "The Scrum Master serves the organization in several ways by Leading and coaching the organization in its Scrum adoption; Planning Scrum implementations within the organization; Helping employees and stakeholders understand and enact Scrum and empirical product development."
      },
      {
        "id": "q2_3",
        "question": "A Scrum team has been working on a product for several iterations and has an average velocity of 55 units of work per Sprint (work that meets the Definition of Done). A second team will be added to work on the same product. What might be the impact on the original team? (Choose the best answer)",
        "options": [
          "Their velocity will most likely drop and be less than 55",
          "Their velocity will most likely rise and be more than 55",
          "Their velocity will most likely not be affected and will remain at 55"
        ],
        "correctAnswer": 0,
        "explanation": "Similar to membership changes within a single Scrum team, adding or removing additional Scrum teams working on the same product will impact productivity in the short term. When adding more teams, they often go through distinct stages as they transition from a collection of strangers to a unified group with common goals. These stages are described by Bruce Tuckman's Forming, Storming, Norming, and Performing model."
      },
      {
        "id": "q2_4",
        "question": "What would be two boundaries, defined in Scrum, that give guidance for teams to effectively self-manage? (Choose the best two answers)",
        "options": [
          "Clearly defined functional teams within the Scrum Team to define handoff phases during development",
          "Having a mixture of different levels of skills and experience to promote domain knowledge sharing",
          "Creating an integrated and potentially shippable Increment by the end of each Sprint",
          "Timeboxing the events in Scrum to allow for regular inspections and adaptation creating opportunities to adjust course in any given path"
        ],
        "correctAnswer": [2, 3],
        "explanation": "For self-managed teams, timeboxing encourages regularity and focus. Having shippable Increments allows teams to collaboratively make decisions on what needs to be done next."
      },
      {
        "id": "q2_5",
        "question": "Doing your best and helping other Scrum team members demonstrates which of the following? (Choose the best answer)",
        "options": [
          "Value of Commitment",
          "Maximizing utilization",
          "High Performance",
          "Increased Profit",
          "Increased Revenue"
        ],
        "correctAnswer": 0,
        "explanation": "People personally commit to achieving the goals of the Scrum team by doing their best and helping others, as stated in the Scrum Guide."
      },
      {
        "id": "q2_6",
        "question": "What would be the responsibilities of a self-managing team? (Choose the best answer)",
        "options": [
          "Deciding on the value of the product features and value estimations",
          "Update stakeholders on the daily progress and keep the Burn-down chart updated",
          "Writing User Stories and reordering the Product Backlog",
          "Select the Product Backlog items for the Sprint and do the work planned in the Sprint Backlog"
        ],
        "correctAnswer": 3,
        "explanation": "A self-managed team is a team that is able to self-manage and decide how best to accomplish their work without depending on others."
      },
      {
        "id": "q2_7",
        "question": "Which three statements best describe the purpose of having a Definition of Done? (Choose the best three answers)",
        "options": [
          "It creates transparency and provides a common understanding of the done state of the Increment at the Sprint Review",
          "It provides guidance to the Developers when they are forecasting their Sprint Backlog during the Sprint Planning",
          "It helps the Developers defer any pending work to subsequent Sprints",
          "It helps the Scrum Team decide how much time is needed before the Sprint can end",
          "As the Developers are doing the work, it provides guidance on the remaining work needed to create the potentially shippable Increment by the end of the Sprint",
          "It is a checklist to monitor the progress of the Developers on a task"
        ],
        "correctAnswer": [0, 1, 4],
        "explanation": "Everyone must understand what 'Done' means when a Product Backlog item or an Increment is described as 'Done. To ensure transparency and to assess when work on the product increment is complete, Scrum team members must have a shared understanding of what it means for work to be complete. This Definition of Done provides the team guidance on what it takes to make the Increment shippable."
      },
      {
        "id": "q2_8",
        "question": "Select the three pillars of empirical process control. (Choose the best answer)",
        "options": [
          "Inspection, Transparency, Adaptation",
          "Planning, Inspection, Adaptation",
          "Respect for people, Kaizen, Eliminating Waste",
          "Planning, Demonstration, Retrospective"
        ],
        "correctAnswer": 0,
        "explanation": "These three pillars uphold every implementation of the empirical process control. Without them, Scrum cannot be implemented as intended."
      },
      {
        "id": "q2_9",
        "question": "Successful use of Scrum depends on how well people behave and act in ways that reflect the Scrum Values. What can the value of openness affect? (Choose the best answer)",
        "options": [
          "Collaboration efforts",
          "Time to Market",
          "Team member happiness and trust from stakeholders",
          "None of the options",
          "Level of product quality",
          "All options"
        ],
        "correctAnswer": 5,
        "explanation": "The Scrum team and its stakeholders agree to be open about all the work and the challenges with performing the work."
      },
      {
        "id": "q2_10",
        "question": "The Definition of Done will assist the Scrum team in forecasting the amount of work from the Product Backlog that is deemed feasible to meet the \"Done\" by the end of the Sprint during Sprint Planning. Which two items best describe the meaning of \"Done\"? (Choose the best two answers)",
        "options": [
          "All the work needed to prepare the Increment for User Acceptance Testing",
          "All the work performed as defined in the Definition of Done",
          "Having an Increment of working software that is potentially releasable to the end users",
          "All the work needed to prepare the Increment for Integration Testing",
          "All the work completed within the current skills and expertise in the Scrum Team"
        ],
        "correctAnswer": [1, 2],
        "explanation": "When a Product Backlog item or an Increment is described as 'Done', everyone must understand what 'Done' means. To ensure transparency, members must have a shared understanding of what it means for work to be complete, though this may vary significantly depending on the Scrum team. The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum team's current Definition of Done."
      },
      {
        "id": "q2_11",
        "question": "When multiple Scrum teams are working from the same Product Backlog, also known as scaled Scrum, they must still work in conformance with the Scrum guide.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 1,
        "explanation": "Scrum is a Framework with built-in flexibility to support multiple Scrum teams working on a single product."
      },
      {
        "id": "q2_12",
        "question": "Paul is a Product Owner for multiple products. Based on the average velocity of a previous product release, Paul had estimated a new product to take 10 Sprints to complete. Over the first 3 Sprints, the Developers reported an average velocity of 40 completed units per Sprint, while not fully completing the required integration tests. The Developers estimate that integration testing would require additional effort to make the Increments shippable and they are unsure if the required velocity is achievable. What is the most effective way to recover? (Choose the best answer)",
        "options": [
          "The Scrum Master will manage the Sprint Backlog and assign work to the Developers to ensure that each one is used to its full potential. Unused budget can be allocated for additional Sprints if needed",
          "The Scrum Master sets the open work aside to be performed in one or more Release Sprints. They remind Paul that he needs to find funding for enough Release Sprints to complete the remaining work.",
          "The Developers inform Paul that the progress he has perceived to date is not correct. The Increment is not releasable. They give Paul their estimate of the effort it would take to get the previous work \"done\" and suggest doing that work first before proceeding with new features. The team also reestimates the effort to make the remaining Product Backlog items \"done\", including all integration efforts. In the end, it is Paul's call to continue the project or to cancel",
          "In the next Sprints, the Developers strive to make the selected work as close to the Definition of Done as possible and at the minimum 90% completed. Any undone work is divided into new Product Backlog Items that will be deferred to the last Sprint in order to maintain stable velocity"
        ],
        "correctAnswer": 2,
        "explanation": "Scrum is based on empirical process control and asserts that knowledge is gained through experience and decision-making based on that knowledge. Scrum uses an iterative, incremental approach to optimize predictability and control risk. At the end of every Sprint, an Increment of 'done' work must be available in order to inspect and adapt accordingly."
      },
      {
        "id": "q2_13",
        "question": "Developers of a Scrum Team argue that there are items in the Product Backlog that are either not well understood or incomplete. Who is responsible for ensuring the Product Backlog items are understood to the level needed? (Choose the best answer)",
        "options": [
          "The Scrum Master",
          "The Developers",
          "The Product Owner",
          "The Business Analyst"
        ],
        "correctAnswer": 2,
        "explanation": "The Product Owner is accountable for managing the Product Backlog."
      },
      {
        "id": "q2_14",
        "question": "Nicole is a Product Owner for 5 different teams working on a product. She has been very busy and was planning on taking some time off, so she won't be available for a while. Which of the following is a possible delegated responsibility? (Choose the best answer)",
        "options": [
          "Representing Stakeholders to the Scrum Team",
          "Writing User Stories",
          "Ordering the Product Backlog",
          "Attending the Sprint Review"
        ],
        "correctAnswer": 2,
        "explanation": "The Developers may need to order the Product Backlog as they would know the most about technical limitations, risks, or dependencies of Product Backlog Items. There are other responsibilities like representing stakeholders to the Scrum team, attending Sprint Review, but ordering the Product Backlog is more likely to be delegated."
      },
      {
        "id": "q2_15",
        "question": "Developers have been complaining about Chris to Steven, the Scrum Master. Chris is the most knowledgeable about the system they're constructing. He frequently criticizes team members' design and architectural decisions, making them feel bad. What are two good ways for Steven to address this problem? (Choose the best two answers)",
        "options": [
          "Steven observes whether this topic is raised at the Sprint Retrospective. If not, he then checks with the team on how comfortable they are with the way the design and architecture are being handled",
          "Steven shares his concerns with Chris and the impact on the other team members and that he should be a team player",
          "Steven takes the time between Sprints to organize a team building session to build a stronger relationship",
          "Steven tells the concerned members that Chris' opinions should be respected as he has the most experience and understands what is best for long term sustainability",
          "Steven suggests helping them in self-management and if requested, Steve could facilitate a session with the entire team to assist in the resolution of the problem"
        ],
        "correctAnswer": [0, 4],
        "explanation": "Team members should be able to try and resolve it by themselves before trying to use another way to resolve them. Remember the Scrum Master should cause the removal of impediments and not actually remove the impediments for them. Conflicts are a natural occurrence and the Scrum Master coaches the Developers on the value of resolving conflicts."
      },
      {
        "id": "q2_16",
        "question": "Which of the following is the best way to form teams in Scrum?",
        "options": [
          "Work with the leadership team to allocate members according to skills, seniority and experience to ensure that all Scrum Teams are balanced fairly",
          "The Product Owner will create a skills matrix according to what is needed for the project and work with the technical leads to allocate resources to the team",
          "Allow the Developers to self-manage into teams by setting boundaries for them"
        ],
        "correctAnswer": 2,
        "explanation": "When the values of commitment, courage, focus, openness and respect are embodied and lived by the Scrum team, the Scrum pillars of transparency, inspection, and adaptation come to life and build trust for everyone and self-managed teams will be enabled to choose how best to accomplish their work. Developers should be able to self-manage themselves and form teams with respect to the boundaries that they have been given."
      },
      {
        "id": "q2_17",
        "question": "An organization has 15 Scrum teams with 15 Scrum Masters and 15 Product Owners, so each team has a Product Owner and a Scrum Master. A Scrum team must have a Product Owner and a Scrum Master to work effectively when working on a single product. (Choose the best answer)",
        "options": [
          "True. Both must be full-time members of the Scrum Team",
          "False. If a Product Owner is unavailable, he/she can be replaced by a Business Analyst",
          "False. A Scrum Master is only necessary when requested or needed",
          "True. Their participation and availability will impact the outcomes produced by the Scrum Team"
        ],
        "correctAnswer": 3,
        "explanation": "A Product Owner or a Scrum Master can be dedicated to one team OR participate as a member on more than one team. How much time they spend with each team will directly impact the effectiveness of the team."
      },
      {
        "id": "q2_18",
        "question": "John, the Scrum Master, notices that one of the Developers is not attending the Daily Scrum. The Scrum team thinks this is fine because they are all in the same area and already have constant communication throughout the day. Which is the best action for John to take? (Choose the best answer)",
        "options": [
          "Ask the Scrum Team, what value will result from having all team members present at the Daily Scrum and what are the risks if members don't attend",
          "The Daily Scrum is owned by the Developers and it is their responsibility to decide which team members must participate",
          "Start running the Daily Scrum and require all members to be in attendance",
          "Talk to the Developer privately and tell him that he needs to be a team player"
        ],
        "correctAnswer": 0,
        "explanation": "The Scrum Master is in charge of ensuring that the Scrum team understands the Scrum events' purpose and value. Because the Daily Scrum is owned by the Developers, they will decide how to best run the event. If necessary, the Scrum Master will coach the team to ensure that decisions are made within the Scrum Framework's parameters."
      },
      {
        "id": "q2_19",
        "question": "A Scrum Team has 11 members. Meryl is the Scrum Master and John is the Product Owner. John is really busy and most of the time he is not joining the Sprint Planning and Product Backlog refinement. Developers can't understand why the Sprint is valuable. Why? (Choose all that apply)",
        "options": [
          "Because the size of the team is too big",
          "Because the entire Scrum Team was not present to collaborate and define a Sprint Goal that explains why the Sprint is valuable to stakeholders",
          "Because the Scrum Master didn't explain to the Developers how valuable the Sprint is",
          "Because John was not present to suggest how the product's value and utility could be increased in the Sprint with the upcoming work"
        ],
        "correctAnswer": [1, 3],
        "explanation": "The Product Owner proposes how the product's value and utility could be increased in the current Sprint. The whole Scrum team then collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders. The Sprint Goal must be finalized before the end of Sprint Planning."
      },
      {
        "id": "q2_20",
        "question": "In Scrum, how would budgeting and financial forecasting be performed? (Choose the best two answers)",
        "options": [
          "A single release can be funded by a series of Sprints, each of which produces shippable Increments",
          "Budgeting is unnecessary because the only funding required is for the Scrum Team's operational costs",
          "Frequently inspect the outcomes of the delivered Sprint Increments to understand how much value is being produced per investment spent",
          "Fixed budgets are not allowed in Scrum"
        ],
        "correctAnswer": [0, 2],
        "explanation": "The cost of developing, delivering, and sustaining products can impact how the flow of value is managed throughout the life of a product. Each Sprint is an opportunity to inspect the investment (financial, time, effort, etc.) against the returned value (customer satisfaction, revenue, etc.) of the work that has been delivered. The team can then decide on what it should do next to maximize the value of the investment."
      },
      {
        "id": "q2_21",
        "question": "Peter, a Project Manager, has raised concerns about your Scrum team's productivity and progress towards the objectives. Which is the best way to respond to Peter's concerns? (Choose the best answer)",
        "options": [
          "Show the Profit and Loss (P&L) report",
          "Share the current impediments",
          "Share the Product Backlog as well as the release date projections with Peter and make sure he has access",
          "Share the last stakeholder status report prepared by the Scrum Master"
        ],
        "correctAnswer": 2,
        "explanation": "One of the key pillars that support the empirical process control is Transparency. Transparency will help manage stakeholder's expectations and allow the teams to effectively adapt if and when needed."
      },
      {
        "id": "q2_22",
        "question": "A Scrum team has requested a hardening Sprint to integrate the work produced in previous Sprints and tests before releasing. What three scenarios have likely been occurred? (Choose the best three answers)",
        "options": [
          "The team's Definition of Done is weak or incomplete causing a build-up of technical debt",
          "The team's Definition of Done is not being adhered to during every Sprint",
          "The Developers are having difficulties with the ability to regularly release during a Sprint",
          "Hardening Sprints are supported by the Scrum Framework so this is acceptable",
          "Scrum has been customized suitably to make the previous work releasable"
        ],
        "correctAnswer": [0, 1, 2],
        "explanation": "At the end of a Sprint, the new Increment must be 'Done', which means it must be in useable condition and meet the Scrum team's Definition of Done."
      },
      {
        "id": "q2_23",
        "question": "Why is it important that there is only one Product Owner per product? (Choose the best answer)",
        "options": [
          "The Scrum Master knows who will be his back-up whenever he is unavailable, it saves the organization time and money and the Developers know who to request tasks from",
          "It is clear who is accountable for the ultimate success of the product, the Developers always know who determines priorities and it helps avoid barriers for effective communication and rapid decision-making",
          "It isn't important as multiple Product Owners can easily share a single Product Backlog"
        ],
        "correctAnswer": 1,
        "explanation": "When working on a single product with multiple teams, only one Product Owner is required. Having one Product Owner creates the transparency required for proper empiricism."
      },
      {
        "id": "q2_24",
        "question": "What would likely happen if management only changed the organization's current terminology to fit Scrum without the proper understanding and support of Scrum as defined in the Scrum Guide? (Choose the best answer)",
        "options": [
          "None of the options",
          "The organization may not realize the real benefits of Scrum as there would be no real change on the way the teams work",
          "Organizations may feel less stressed as the behaviors would remain familiar to management",
          "All options",
          "Very little change will happen as management do not understand the vocabulary in Scrum and the way it should be implemented"
        ],
        "correctAnswer": 3,
        "explanation": "The defined terminology in Scrum was selected, designed, and defined specifically for supporting the Scrum Framework. Understanding the differences between traditional methods and the Scrum Framework will help move teams in the right direction in Scrum adoption."
      },
      {
        "id": "q2_25",
        "question": "What is management's role in Scrum? (Choose the best answer)",
        "options": [
          "Monitoring the velocity of the Developers",
          "To provide the necessary environment and support as outlined in the Scrum Guide by providing insights and resources that aid Scrum Teams in their progress",
          "Identifying and removing people that are performing poorly",
          "Monitoring skill levels of the Developers"
        ],
        "correctAnswer": 1,
        "explanation": "Getting support from the business side helps facilitate the changes that foster empiricism, self-management, bottom-up intelligence, and intelligent software release."
      },
      {
        "id": "q2_26",
        "question": "Merly, the Product Owner, has been giving positive recognition to individual Developers who have moved their work to \"Done\" during the Daily Scrum. She wants to ensure the team is adhering to the ideal guideline on the burndown chart. What would be two valid actions for Alice, the Scrum Master, to take? (Choose the best two answers)",
        "options": [
          "Nothing. Alice is optional at the Daily Scrum and it is the responsibility of the Developers to decide how to best run it",
          "Alice coaches the Scrum Team on the Daily Scrum's purpose",
          "Alice talks with Merly about concerns of how her behavior might impact the team members",
          "Alice instructs Merly on how to update the Burndown chart properly, as it provides accurate information on the team's performance"
        ],
        "correctAnswer": [1, 2],
        "explanation": "As defined in the Scrum Guide, the Scrum Master is responsible for promoting and supporting Scrum. The Scrum Masters accomplish this by assisting everyone in comprehending Scrum theory, practices, rules, and values. The Scrum Master assists the Scrum team in determining which interactions are beneficial and which aren't. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum team."
      },
      {
        "id": "q2_27",
        "question": "In order to start the first Sprint, Scrum only requires a Product Owner with enough ideas, Developers to execute on those ideas, and a Scrum Master to guide the process.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 1,
        "explanation": "In complex domains, you are only able to know the outcomes in hindsight. Empiricism, from which Scrum was founded on, asserts that knowledge comes from experience and making decisions based on what is known. New knowledge will emerge as work is being done. Typically, as Scrum says \"The Product Goal is in the Product Backlog\", which means you need only the basics to start implementing Scrum."
      },
      {
        "id": "q2_28",
        "question": "During the implementation of a Sprint Backlog item, there is a disagreement among team members about what work is required to make the item 'done.' Some argue that it is included in the Definition of Done, while others argue that it is not. Steven, the Scrum Master, notices a debate forming and members taking sides. What is the best course of action for Steven? (Choose the best answer)",
        "options": [
          "Coach all members on the Scrum Team to self-manage and help them resolve the conflict, refine the Definition of Done and become effective again. Tell the team that conflicts are a natural occurence and coach them on the value of resolving conflicts",
          "Bring the Developers together and interpret the Definition of Done for them so that there are no future conflicts on interpretation",
          "Immediately end the discussion before it becomes worse. Make the decision on what work is needed to make the item \"done\" and teach the team about the importance of avoiding conflicts",
          "Bring in the Product Owner and have him or her decide how much work is needed to get the item to meet the Definition of Done. It is the Product Owner's responsibility to manage the Developers"
        ],
        "correctAnswer": 0,
        "explanation": "The Scrum Master serves the Scrum team. The Scrum Master helps the Scrum team understand which of their interactions are helpful and which are not. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum team."
      },
      {
        "id": "q2_29",
        "question": "Over the course of several Sprints, the relationship between the Product Owner and the Developers has suffered. The Developers are not happy with the Product Owner for constantly changing the upcoming items of the product. The Product Owner is not happy as well with the Developers for changing the work that needs to be done during the Sprint. What should Steven, the Scrum Master, do? (Choose the best answer)",
        "options": [
          "Explain to the Developers that the Product Owner is accountable for the flow of value and needs to be followed in order to maximize the value delivered",
          "The Scrum Master's responsibility is to ensure the Developers have a stable velocity. Any changes that negatively impact the team's velocity will be rejected by the Scrum Master",
          "Organize a team-building session between Sprints to help rebuild the relationship",
          "During the Sprint Retrospective, ask the Product Owner and the Developers to address the issues. Have the team discuss why the changes occur and what impact they have on the value of the product"
        ],
        "correctAnswer": 3,
        "explanation": "Conflicts are a natural occurrence and the Scrum Master coaches the Developers on the value of resolving conflicts. Leaving conflicts unresolved can impact the Scrum Values of openness and respect diminishing trust. Lower trust levels will impact the Scrum team's effectiveness and can cause impediments in the future. It is the responsibility of the Scrum Master to cause the removal of impediments that hinder the team through conflict resolution and facilitation."
      },
      {
        "id": "q2_30",
        "question": "What Product Owner activities occur between the end of the current Sprint and the beginning of the next Sprint? (Choose the best answer)",
        "options": [
          "Product Backlog Refinement",
          "No activities happen in between. When the current Sprint ends, the new Sprint begins",
          "Participate as a team member at the Sprint Retrospective",
          "Updating Stakeholders on project progress"
        ],
        "correctAnswer": 1,
        "explanation": "The new Sprint needs to start immediately after the end of the previous one. There shouldn't be any Release Sprint or anything similar"
        }
      ]
    },
  {
      "id": "psm-ii-mock-3",
    "title": "PSM II Mock Exam #3",
    "description": "Professional Scrum Master Level II practice exam #3 based on provided content.",
    "timeLimit": 90,
    "passingScore": 85,
    "questions": [
      {
        "id": "q3_1",
        "question": "What is the first event of the Sprint? (choose 1)",
        "options": [
          "Sprint Retrospective",
          "Backlog Refinement",
          "Sprint Review",
          "Daily Scrum",
          "Sprint Planning"
        ],
        "correctAnswer": 4,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_2",
        "question": "Developing new or revising existing technical documentation is a requirement of the team's Definition of Done. This is done to ensure that the product and/or its features can be maintained in the future. During the Sprint, the team's technical writer will be on holiday. What action should you take? (choose 1)",
        "options": [
          "The Scrum Team is still accountable to meeting the Definition of Done, the Developers should write the documentation, they are best placed to do so as the developers of the product.",
          "Delay the documentation for the technical writer’s return and create a backlog of work to be handled in one technical writing sprint.",
          "Tell the developers to form a specialist team of technical writers to work on documentation for this product and any others in the company."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_3",
        "question": "As a Scrum Master, which of the following would you do to make the Scrum Team more productive during the first Sprint? (choose all that apply)",
        "options": [
          "Suggest the team splits into a hierarchy of Developers with Senior Developers and Junior Developers.",
          "Allow the Developers to identify and discuss the procedure for converting the Product Backlog Items into a possibly releasable increment.",
          "Make certain that the Definition of Done is known and understood.",
          "Allow the Product Owner to answer questions about the product, its history, goals, and context.",
          "Check that the Scrum Team members get along with each other.",
          "Introduce the Scrum Team members to one another and provide a brief background on their talents and work history."
        ],
        "correctAnswer": [1, 2, 3, 5],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_4",
        "question": "The Developers have realized that it does not possess the necessary tools and infrastructure to complete each of the items chosen from the Product Backlog. What action would you recommend as the Scrum Master? (choose 1)",
        "options": [
          "Stop the Sprint and have the Developers work on the infrastructure before continuing.",
          "Encourage the Product Owner to accept partially done Increments and complete the work in the Hardening Sprint.",
          "Coach the Developers to improve its skills, tools and infrastructure over time and establish a Definition of “Done” that is actually possible to achieve given the current circumstances."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_5",
        "question": "During a Daily Scrum 2 developers disagree on a task and get into a heated argument, what are the best things a Scrum Master should do? (choose the 2 best answers)",
        "options": [
          "Try to move the team members away from each other to avoid further conflict as soon as possible to be productive.",
          "Don't handle problems for the team. Instead, assist them in identifying and resolving issues on their own.",
          "Talk with each team member to understand why they have differences. Report them to their managers if they cannot solve their differences.",
          "Help create the environment and space to discuss conflicts, find agreements in a productive and positive way. Remind the other members of the Scrum Team that conflicting ideas are natural, but making it personal does not help.",
          "Wait till the Sprint Retrospective and show the importance of not wasting time in conflict, concentrating on work, and improving performance."
        ],
        "correctAnswer": [1, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_6",
        "question": "You join an established Scrum team as the new Scrum Master, you notice that the Product Owner has not been attending the Sprint Retrospectives. Through some investigation, you realise that the Developers don’t want to invite him fearing that he might make the Sprint Retrospective ineffective and even provide destructive criticism. As the new Scrum Master what should you do? (choose the best answer)",
        "options": [
          "Work with the Developers to explore the problem and find a safe way to introduce the Product Owner to the Sprint Retrospective to enable greater transparency.",
          "Facilitate a discussion in the Scrum Team and allow them to decide what is best to do.",
          "Respect the Developer's wishes as a self-managing team.",
          "Speak to the Product Owner and see what he thinks. Do what they suggest is best."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_7",
        "question": "You are a Scrum Master of a 9 member Scrum Team; you haven't joined the Daily Scrum for some time because you thought it was running well. However, you join today and notice it took 20 minutes. The Developers often go over 15 minutes and they propose dividing the Scrum Team into two cohesive groups with their own Daily Scrum. What is your response? (choose 1)",
        "options": [
          "You say that it is common and reasonable to extend the Daily Scrum. The 15 minute rule is just a guideline.",
          "You offer to join the Daily Scrum and teach them to keep the Daily Scrum within a 15-minute timebox.",
          "You agree. If the Daily Scrum becomes too long, the team should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same Product and Product Backlog."
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_8",
        "question": "Once born, who in the Scrum team can update or change an increment? (choose 1)",
        "options": [
          "The Product Owner",
          "Release Management",
          "The Scrum Master",
          "The Developers",
          "Senior Developers"
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_9",
        "question": "The product owner has used the Scrum team’s velocity to estimate delivery in 3 months. This is the reported delivery date to customers and stakeholders that desperately need the new functionality. However, at the last Sprint Review, it has been discovered that the current increment did not work! At the Sprint Retrospective, some developers admitted they have not been adhering to all elements of the Definition of Done. What is the most effective way to recover by the deadline? (choose 1)",
        "options": [
          "The team needs to restore transparency by adding the undone work to the Product Backlog. The Developers must figure out a way to deliver in the upcoming Sprints a greater velocity than they have previously been able to do. The Scrum Master monitors progress and if needed initiates a restart with a more reliable team or cancels the project.",
          "The Developers set the technical debt work aside to be performed in one or more hardening Sprints. They ask for more resource from other scrum teams to assist.",
          "In the next Sprints, the Developers keep making sure that all of the selected scope per Sprint is as done as possible, at least at the past level of 85%. In every Sprint the undone work of the previous Sprint is estimated and added to the Sprint Backlog. The developers think they can complete all forecasted work.",
          "The Developers inform the Product Owner that the progress she has perceived to date is not correct. The Increment is not releasable. They give a new estimate of the effort it would take to get the past work done, and suggest doing that work first before proceeding with new features. The Developers also re-estimate the effort to complete the remaining backlog, including all testing. In the end, it is Product Owner's call to continue the product or to cancel."
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_10",
        "question": "It's important that product development teams be cross-functional and comprised of people with a wide range of expertise to succeed. When implementing Scrum, what are the benefits of maintaining the existing component teams (for example, design, database, backend, and frontend)? (choose 1)",
        "options": [
          "Because their productivity is already predictable, they can deliver more valuable Increments than a newly formed team",
          "Component teams would have all the skills needed to deliver an increment of value",
          "There is less communication overhead than working in feature teams",
          "Because they have been working together for some time, there will be less initial disruption than a newly formed team. As they begin working, they will discover what works best and how to move towards cross-functional teams"
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_11",
        "question": "After discussions you as the Scrum Master have convinced them that they need to have the Daily Scrum every day, but this still does not solve the problem of the trouble in hosting these meetings. As the Scrum Master what should you do? (choose the best answer)",
        "options": [
          "Cause the removal of this impediment by informing management and challenge the distributed nature of the team",
          "Mandate the use of tools used elsewhere in the organisation that have helped other teams who are in different locations",
          "Bring up the topic for discussion and allow the Developers to determine for themselves what to do as a self­ managing team.",
          "Tell the Developers to alternate who attends.",
          "You as the Scrum Master are responsible for setting up the meetings.",
          "Divide the Developers into subteams per location."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_12",
        "question": "Which of these answers is a good sign the team is self-managing. (choose the 2 best answers)",
        "options": [
          "Management is able to know which members are working on which items.",
          "The Developers are cross-functional and know what they need to do to complete all tasks committed to in Sprint Planning",
          "Creativity thrives and new possibilities are explored.",
          "The Developers are able to resolve internal conflicts between members in order to continue working."
        ],
        "correctAnswer": [2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_13",
        "question": "At the moment, the engineering branch of your company is organized in siloed teams that specialize according to function (for example, design, front-end, back-end, database, and testing). What factors do you think are important to consider while transitioning from component teams to feature teams? (choose 2)",
        "options": [
          "Feature teams will require time to become productive as people from the different layers and components become accustomed to working and delivering unified functionality together as one Scrum Team.",
          "It is impossible to do Scrum without feature teams. Do not try to adopt Scrum until teams are reorganized into feature teams.",
          "Productivity, in terms of lines of code or story points, will probably suffer during the transition, although even then delivery of business value is still likely to increase.",
          "With feature teams, it is easier to calculate and compare the productivity per team. Incentives on productivity are likely to speed up the transition to feature teams and, therefore the adoption of Scrum."
        ],
        "correctAnswer": [0, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_14",
        "question": "The Sprint Review often overruns resulting in many stakeholders needing to leave before the end of the meeting and missing key information. The stakeholders request to have a follow-up meeting the next day. As a Scrum Master how would you handle this situation? (choose 2)",
        "options": [
          "Coach the Developers with time management techniques and how to present the most valuable functionalities first.",
          "Split the Sprint Review into 2 parts and continue the Sprint Review the next day.",
          "Coach the stakeholders to understand Scrum and that all events are timeboxed and should not be extended.",
          "Coach the Product Owner to send an email to the stakeholders with a list of items that have been \"Done\" and what has not been \"Done\" before the Sprint Review to save time.",
          "Schedule the Sprint Review an hour earlier than usual so that the event can be extended if necessary."
        ],
        "correctAnswer": [0, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_15",
        "question": "Who plans the work during the Sprint? (choose 1)",
        "options": [
          "The Product Owner",
          "The Scrum Master",
          "The Senior Developers",
          "The Developers"
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_16",
        "question": "The Product Owner Josh regularly joins the Daily Scrum and tries to bring some encouragement by cheering and congratulating with cakes each time a Developer moves an item into the done pile. What should a Scrum Master do? (choose 1)",
        "options": [
          "Coach the team about the purpose of the Daily Scrum and that working software is the primary measure of success.",
          "Congratulate the Product Owner for promoting teamwork.",
          "Take advantage of the chance to boost positivity by encouraging this behaviour of celebration for Done items.",
          "Take no action. The Developers seem to be happy with this."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_17",
        "question": "A Scrum Team decides to implement a semi-frequent \"hardening and release sprint.\" What should a Scrum Master suggest? (choose all that apply)",
        "options": [
          "Hardening Sprints are supported by the Scrum framework so this is acceptable.",
          "Investigating if the team is adhering to the Definition of Done every Sprint.",
          "If a Sprint is needed to make the product stable then there is development debt to take care of.",
          "The team should review the Definition of Done as it does not look like it is stringent enough to ensure a stable increment for release.",
          "Having a specific Sprint for hardening is a good idea, Scrum can be adapted to suit different situations."
        ],
        "correctAnswer": [1, 2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_18",
        "question": "A key and very senior stakeholder directly asks a particular developer to add a piece of functionality to the sprint backlog now as an urgent task, is it disrespectful to refuse to add the functionality immediately? (choose 1)",
        "options": [
          "No",
          "Yes"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_19",
        "question": "3 Scrum teams are working in a Nexus on the same Product. At the Sprint Review, each team tells the Product Owner that their increments are ready for release but they show their Increments independently in different environments. Would this be cause for concern? (choose 1)",
        "options": [
          "No",
          "Yes"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_20",
        "question": "At the Sprint Retrospective the Scrum Team are addressing the quality difficulties that prevented completing an appropriate Increment at Sprint end. However, the Developments did indicate that they were able to accomplish a high velocity. Which two of these responses would you think their Scrum Master is best to take? (choose 2)",
        "options": [
          "Agree and acknowledge the team’s hard work, so they will be motivated to do even more in the next Sprint.",
          "Stress the value of working software over measured velocity",
          "Facilitate a discussion on how to improve the quality to a level high enough for the Increment to be releasable, even if the measured velocity drops in the next Sprint.",
          "Acknowledge the hard work but remind the Developers that they need to improve in order to do even more in the next Sprint."
        ],
        "correctAnswer": [1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_21",
        "question": "How do Timeboxes help a self-managing team? (choose the 2 best answers)",
        "options": [
          "Developers can determine on their own how much overtime they should work to meet the timebox deadline.",
          "Timeboxes encourage people to create the best possible result in the given time.",
          "Timeboxes help everyone focus on the same problem at the same time.",
          "Timeboxes shield the Developers from interruptions by the stakeholders and Product Owner."
        ],
        "correctAnswer": [1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_22",
        "question": "You are finding that Daily Scrums always take more than 15 minutes due to one of the more experienced developers going into a lot of depth about his work and issues the team is facing. What should you do? (choose 2)",
        "options": [
          "You remind the Developers that the Daily Scrum should take a maximum of 15 minutes and coach the Developers on how to be more efficient with their updates and that they can meet outside of the Daily Scrum to discuss what needs to be discussed.",
          "You start using a timer and assign a timebox to each person to speak at the Daily Scrum and make sure that everyone has the opportunity to speak.",
          "You ask the experienced developer how he sees his impact on the Daily Scrum, effectively coaching him into work better as an equal team member.",
          "You suggest passing a token around, where the person holding the token Is the only one allowed to speak and the rest will be listening to that person.",
          "Contact the team member's Line Manager and raise his ability to be concise as an issue."
        ],
        "correctAnswer": [0, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_23",
        "question": "Why might it benefit Empiricism to have shorter Sprints rather than longer Sprints? (choose all that apply):",
        "options": [
          "Shorter Sprints allow more time working and reduces the amount of time in meetings",
          "Shorter feedback loops reduce the risk of deviating",
          "Shorter Sprints allow for more opportunities to inspect and adapt",
          "Shorter Sprints mean more chances to adapt to changes in the environment",
          "Shorter Sprints minimizes further deviation by frequent inspecting and adapting"
        ],
        "correctAnswer": [1, 2, 3, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_24",
        "question": "How often should the Scrum Team members change? (choose 1)",
        "options": [
          "Never, as knowledge can be lost.",
          "Frequently in order to be Agile",
          "As needed, whilst taking into account a short-term reduction in productivity.",
          "As needed, as long as it doesn’t impact productivity."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_25",
        "question": "How should a Scrum Master divide a group of 50 people into multiple scrum teams? (choose 1)",
        "options": [
          "Create teams based on the functional layer they are working on.",
          "Create teams based on the health of the working relationship of the team members.",
          "Ask the developers to divide themselves into teams."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_26",
        "question": "You have a choice of ways and locations to hold the Daily Scrum, how do you decide what option is best? (choose 1)",
        "options": [
          "It should be held in a room where management cannot overhear.",
          "It should be held wherever you can get on that particular day.",
          "It should be held around the Scrum board.",
          "It should be held in a secluded area of the office so not to disturb others.",
          "It should be held wherever the Developers think is best."
        ],
        "correctAnswer": 4,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_27",
        "question": "At Sprint Planning, three Developers get into an argument about the Sprint Plan. After an hour of raised tempers personal insults are exchanged. What should the Scrum Master do? (choose 1)",
        "options": [
          "Conduct a session to help the Scrum Team resolve the conflict and create Sprint Plan. Remind the other members of the Scrum Team that conflicting ideas are to be expected, but they are accountable as professionals and should not make it personal.",
          "Take the people involved aside. Ask them to resolve the situation outside of the Scrum Team, if required through their managers.",
          "Defuse the conflict. By suggesting techniques to better plan work.",
          "End the discussion. Speak to the Product Owner and see if certain developers need to be removed from the team."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_28",
        "question": "During the Sprint Retrospective, the Product Owner raised a concern that the Developers only just met the Sprint Goal for the last Sprint. Developers think that the cause of the problem might be that some of them were working on other projects at the same time and that delayed the work. Which Scrum value were they not following? (choose 1)",
        "options": [
          "Focus",
          "Openness",
          "Courage",
          "Respect",
          "Commitment"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_29",
        "question": "You are a Scrum master for a Nexus team. Some of the developers in 2 Scrum Teams come to you with a risk that will soon become an impediment. The next Sprints will require a lot of commitment from Stacey, an external specialist who is not a member of the Scrum Team and cannot dedicate all her time to this product. What would you do? (choose the best 3 answers)",
        "options": [
          "Create a team with Stacy and identify people from the Scrum Teams to temporarily work in Stacey’s domain to learn to better serve the existing teams.",
          "Ask Stacy to help with hiring and training additional people, and for now, work with the Product Owner and Scrum Teams to re-prioritize the work so that tasks not depending on Stacey can be done first.",
          "Have the Developers work with the Product Owner to re-order the Product Backlog so Stacy can serve one team each Sprint.",
          "Investigate whether additional techniques or frameworks for scaling Scrum would be appropriate for these Scrum Teams.",
          "Developers with an interest in Stacey’s domain could volunteer to learn from Stacey and take on this work in their respective Scrum Teams."
        ],
        "correctAnswer": [2, 3, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q3_30",
        "question": "The Developers have realized that it does not possess the necessary tools and infrastructure to complete each of the items chosen from the Product Backlog. What action would you recommend as the Scrum Master? (choose 1)",
        "options": [
          "Encourage the Product Owner to accept partially done Increments and complete the work in the Hardening Sprint.",
          "Stop the Sprint and have the Developers work on the infrastructure before continuing.",
          "Coach the Developers to improve its skills, tools and infrastructure over time and establish a Definition of “Done” that is actually possible to achieve given the current circumstances."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      }
    ]
  },
  {
      "id": "psm-ii-mock-4",
    "title": "PSM II Mock Exam #4",
    "description": "Professional Scrum Master Level II practice exam #4 based on provided content.",
    "timeLimit": 90,
    "passingScore": 85,
    "questions": [
      {
        "id": "q4_1",
        "question": "How does Scrum apply Empiricism? (choose 3)",
        "options": [
          "All the artifacts are immutable, they do not change for clarity.",
          "During each Scrum Event, decisions are made on one or more artifacts.",
          "Scrum is based on Lean thinking, which is empiricism.",
          "The accountabilities are inspected and adapted in every event.",
          "One or more artifacts are inspected in each event.",
          "Scrum Artifacts help with transparency."
        ],
        "correctAnswer": [1, 4, 5],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_2",
        "question": "You are one of 3 Scrum teams working on a product and your Sprints are one month long. Changes have been made to the company’s technical infrastructure that will cause extended testing for your increment. You are unable to deliver the increment in time for the other Scrum Teams that rely on your contribution to their increment. Also, the CEO is extremely unsatisfied with your team’s velocity on in this sprint. As a Scrum Master is the best thing to do? (choose 1)",
        "options": [
          "You lengthen your Sprints to accommodate the delays.",
          "You suggest working with the other scrum teams on the ordering and the value of your open Product Backlog items to redefine the possible delivery date.",
          "You calculate how many additional developers it would take to increase velocity to make the original date. You inform the program manager of the additional budget for these developers.",
          "You remove all items from the Product Backlog for which development is forecast to be beyond the expected date."
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_3",
        "question": "The Product Owner is concerned about the slow progress of releases and thinks the Definition of Done should be reduced to speed up progress. As the Scrum Master what would you advise? (choose 4)",
        "options": [
          "Ask the Developers and the Product Owner what problem they are trying to solve by reducing the Definition of Done. In what ways will this decision impact transparency and quality?",
          "Advise seeking the stakeholder’s permission by informing them that reducing the Definition of Done will lead to more frequent releases and greater velocity.",
          "Reducing the Definition of Done will introduce technical debt such as unknown errors as functionality is added. The product might become more difficult to stabilize as work progresses. Development for future releases is likely to be slowed down in unpredictable ways.",
          "Accept the decision as a mutual agreement has been made between the Developers and the Product Owner.",
          "Releasing the version with a reduced Definition of Done creates false assumptions about the actual state of the system and is risky. Fixes may need to be added post-release impacting user experience, reputation and development progress.",
          "Ask the Developers and the Product Owner if they are still able to produce releasable Increments by altering the Definition of Done."
        ],
        "correctAnswer": [0, 2, 4, 5],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_4",
        "question": "After a recent Sprint Review some of the stakeholders felt that the information presented was too fast and they didn’t get chance to go into the depth that they felt they needed to. The meeting had to finish because it ended at the end of the business day. The stakeholders ask the Scrum Master to hold a follow up Sprint Review and extend the future Sprint Reviews. What should the Scrum Master do? (choose 2)",
        "options": [
          "Invite the stakeholders to a Sprint Review Part 2 meeting.",
          "Coach the Developers with time management techniques and how to present the key information the Stakeholders need.",
          "Schedule the next Sprint Review an hour earlier so that the event can be extended if necessary.",
          "Coach the stakeholders to understand Scrum and that all events are timeboxed and should not be extended, however they will discuss the timebox of the Sprint Review in the Sprint Retrospective and see if it can be extended for future Sprints. In the meantime help the Scrum Team to interact more with the stakeholders throughout the Sprint."
        ],
        "correctAnswer": [1, 3],
       "explanation": "The Scrum guide says the Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. As the Sprint should never be longer than a month, we can deduce that the maximum a Sprint Review should be is 4hrs. It is always best if the Scrum team can learn to manage time better and present key information in the time allotted. However, the Sprint Review is there to make improvements for future Sprints, so this situation should certainly be discussed. If the Sprint Review is too short and then it makes sense to make future ones longer, so long as they aren't so long that they break the Scrum Guide guidelines. "
      },
      {
        "id": "q4_5",
        "question": "How many Increments should there be per sprint… (choose 1)",
        "options": [
          "Just one",
          "It depends on the Sprint Goal",
          "At least one"
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_6",
        "question": "In Scaled Scrum should Scrum teams working on the same Increment have the same Start and End date? (choose 1)",
        "options": [
          "Yes",
          "No"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_7",
        "question": "What is Scrum Based on? (choose 2)",
        "options": [
          "A Hybrid Model",
          "Lean thinking",
          "Empiricisum",
          "A Defined Process",
          "A Complex Process"
        ],
        "correctAnswer": [1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_8",
        "question": "Which two items best describe what ‘done’ means? (choose 2)",
        "options": [
          "Having an Increment of working software that is potentially releasable to the end users.",
          "All the work needed to prepare the Increment for testing.",
          "All the work completed within the current skills of the Developers.",
          "All the work performed as defined in the Definition of Done."
        ],
        "correctAnswer": [0, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_9",
        "question": "One of the developers is disruptive and constantly disagrees with the team, this developer is slowing the decision-making progress and has started disregarding the team’s decisions and making his own decisions. What should you do as the Scrum Master? (choose the best 2 answers)",
        "options": [
          "At the Sprint Retrospective, you wait to see if this topic is raised. If it does not happen, you raise it checking how everyone feels with the way team decisions are made.",
          "In a private conversation, you express your concern over his disagreements and tell him to comply with the team's decisions.",
          "You raise this issue with the human resources department.",
          "You facilitate an out-of-work team-building event.",
          "To anyone expressing this concern you suggest raising this with the entire team. You offer to help facilitate the conversation but not to resolve the concern yourself."
        ],
        "correctAnswer": [0, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_10",
        "question": "What is the maximum time allowed between the conclusion of one Sprint to the start of the next? (choose 1)",
        "options": [
          "Enough time to test the Increment",
          "There is no time between Sprints",
          "Enough time for the Product Backlog Refinement to get it ready for Sprint Planning"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_11",
        "question": "Which Scrum Artifacts have commitments and when are they inspected? (Choose 3)",
        "options": [
          "For the Increment, its commitment is the Definition of Done, inspected at the Sprint Review",
          "For the Sprint Goal, its commitment is the Definition of Done, inspected at the Daily Scrum.",
          "For the Sprint Backlog, its commitment is the Product Goal, inspected at the backlog refinement session.",
          "For the Product Backlog, its commitment is the Product Goal, inspected at Sprint Planning and the Sprint Review.",
          "For the Sprint Backlog, its commitment is the Sprint Goal, inspected at the Daily Scrum.",
          "For the Sprint, its commitments are the Scrum Values and Empirical Pillars."
        ],
        "correctAnswer": [0, 3, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_12",
        "question": "A highly respected and influential Developer often takes up a lot of time in the Daily Scrum by going off on tangents on things not so relative to the Sprint Goal. The Daily Scrum rarely finishes within 15 minutes. The other Developers dare not interrupt this Developer or ask him to stick to the topics in hand because the Developer is highly integral to the development of the product. As the Scrum Master has accountability to ensure the timebox is kept to 15 minutes, what should you do? (choose the best 2 answers)",
        "options": [
          "You suggest privately asking them what they believe the key outcomes for the Daily Scrum are. Effectively coaching them to help create focus during the Daily Scrum.",
          "You contact the Developer’s Manager and raise this as an impediment to the Manager, and ask that they resolve this matter.",
          "You suggest coaching the Developers to help them find a way to solve the problem, bringing this up in the Sprint Retrospective at the latest and ask the team to find a solution.",
          "You suggest passing a baton around. The person holding the baton can speak for 3 minutes only."
        ],
        "correctAnswer": [0, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_13",
        "question": "You have senior stakeholders that are very busy people. You invite them to the sprint reviews but they often do not attend. How does this affect empiricism and what might be the consequences? (choose 3)",
        "options": [
          "Decisions on the increment and how to adapt cannot be made",
          "There are no tangible consequences",
          "Product Backlog prioritization decisions are made on limited information",
          "Key Stakeholders' feedback loop is too long risking high deviation",
          "Members who cannot attend the Sprint Review will have problems making product decisions"
        ],
        "correctAnswer": [2, 3, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_14",
        "question": "When multiple Scrum teams are working from the same Product Backlog, how should the work be distributed between teams? (choose 1)",
        "options": [
          "The Scrum Team with the highest capacity will choose what to work on first.",
          "The Developers from each team pull in work from a shared Product Backlog in agreement with the Product Owner and the other teams.",
          "The Product Owner separates the Product Backlog items based on knowing the strengths of each team."
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_15",
        "question": "You are a Scrum Master of a team that has members working in different time zones around the world. Organizing the Scrum events is time-consuming and requires a lot of effort to set up and run. The Developers suggest only having the Daily Scrum every two days. Which responses would be most appropriate from yourself? (choose 3)",
        "options": [
          "Point out that having less frequent Daily Scrums means less frequent opportunities to inspect and adapt introducing risk of undesired deviation from the Sprint Goal. The Sprint plan might become inaccurate with reduced transparency over progress toward the Sprint Goal.",
          "Coach the team on why having a Daily Scrum every day is an important opportunity to update the Sprint plan and how it helps the team self-organize work toward achieving the Sprint Goal.",
          "Hold a vote and ensure that there is a consensus before reducing the Daily Scrum to every other day.",
          "Help the team understand that lowering the frequency of communication will only increase the feeling of disconnect between the team members.",
          "Acknowledge and support their decision."
        ],
        "correctAnswer": [0, 1, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_16",
        "question": "Which of the below statements is true about the Sprint Goal? (choose all that apply)",
        "options": [
          "It is the Scrum Team that crafts the Sprint Goal at Sprint planning, based on an objective the Product Owner would like achieved in that Sprint.",
          "Sprint Goals give Developers flexibility and creativity on how to turn Product Backlog items into an increment of value.",
          "The use of Sprint Goals is optional because the Product Goal exists to guide development.",
          "Sprint Goals often change during the Sprint as new insights emerge during working."
        ],
        "correctAnswer": [0, 1],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_17",
        "question": "One of the new developers feels left out of discussions and that his opinions are not considered. He brings this up at the Sprint Retrospective. What values are being displayed here? (choose 3)",
        "options": [
          "Focus",
          "Commitment",
          "Respect",
          "Openness",
          "Courage"
        ],
        "correctAnswer": [2, 3, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_18",
        "question": "The pillars of Empirical Process Control are: (choose 1)",
        "options": [
          "Courage, Openness, Commitment, Respect, and Focus.",
          "Transparency, Iteration, Adaption.",
          "Transparency, Inspection, and Adaptation.",
          "Transparency, Investigation, and Adaption.",
          "Transformation, Inspection, and Adaptation."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_19",
        "question": "The Product Owner wants to know what each Developer is working on every day and insists that the developers send a report to her daily based on the information from the Daily Scrum. As the Scrum Master what should you do? (choose 1)",
        "options": [
          "Coach the Product Owner and Developers on the purpose of Scrum Artifacts and Events and facilitate a discussion about their concerns and help them to find a solution to the root cause of the problem.",
          "Suggest the Product Owner look at the Sprint Backlog and burndown chart to report daily progress to the stakeholders.",
          "Request that the Product Owner no longer attends the Daily Scrum.",
          "Do nothing. The Product Owner needs to continue to track progress."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_20",
        "question": "You need to put together four Scrum Teams with a Nexus team that will be developing a web application. The stakeholders expects one Increment at the end of the first Sprint. What would be your main advice as the Scrum Master of this team? (choose 3)",
        "options": [
          "It would be good to use only one Product Backlog for all the teams",
          "Teach them that it is their responsibility to form Scrum Teams with the skills and knowledge to create an Increment by the end of every Sprint.",
          "Each development team will have a Development Lead to coordinate the development work between the Scrum Teams",
          "It would be better to use the first Sprint to coordinate work and prepare the environments, and set things up. Increments can be delivered from the second Sprint onwards.",
          "Each Scrum Team should deliver done increments from its own sprint. Each increment is shown in a separate environment at the Sprint Review, then the code is isolated for future stabilization.",
          "All Scrum Teams agree on a shared Definition of Done describing all the work needed to deliver an integrated increment for Sprint Review."
        ],
        "correctAnswer": [0, 1, 5],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_21",
        "question": "How would you define Empiricism? (choose 2)",
        "options": [
          "Knowledge comes from theorising",
          "Making decisions based on what is observed",
          "Knowledge comes from experience",
          "Making decisions based on predictions"
        ],
        "correctAnswer": [1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_22",
        "question": "When it comes to completing all the items in the Sprint Backlog, all the Product Backlog Items added to the Sprint Backlog must be done by the end of the Sprint? (choose 1)",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_23",
        "question": "By the end of the Sprint, a Product Backlog item in the Sprint Backlog does not meet the team's Definition of Done. What two things should happen with the item? (choose 2)",
        "options": [
          "It will be inspected at the Sprint Review and if it is acceptable by the stakeholders then include it in the Increment.",
          "Do not include the item in the Increment for the Sprint.",
          "Review the item, add the done part to the Increment. Estimate the remaining work and add that to the Product Backlog.",
          "Estimate the remaining work needed to make it \"done\" and add it to the Product Backlog for the Product Owner to decide what to do with it."
        ],
        "correctAnswer": [1, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_24",
        "question": "A Scrum Team has been working together for 10 Sprints and the Developers have become quite mature as a team, working well together and have a good understanding of the product. A new Product Owner is appointed and doesn’t know much about the product or the company. What activities would you recommend that the Product Owner focuses on? (choose the best 2 answers.)",
        "options": [
          "You inform the Product Owner that the Developers need to be updated on changing business priorities daily. This is why there is a Daily Scrum meeting.",
          "You advise the Product Owner to rely on the others in the Scrum Team and the stakeholders for amending the Product Backlog for now, but work closely with them to get up to speed as soon as possible. This is because they are the most knowledgeable about the market and the product for now.",
          "Tell the Product Owner to focus on the requirements and make sure there are no ambiguities or potential misunderstandings in the Product Backlog. Capture requirements in an analysis stage which would be considered the main output of an analysis Sprint.",
          "Advise the Product Owner to start building great relationships with the stakeholders and set up ongoing interaction with them. This will help the Product Owner maximise the value of the product in an environment of changing organizational or market expectations."
        ],
        "correctAnswer": [1, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_25",
        "question": "Should the Definition of Done include testing? Choose the best answer",
        "options": [
          "Yes testing is mandatory to ensure the increment is ready to be released.",
          "It’s not mandatory, it’s up to the organisation and the Scrum team to decide on the Definition of Done."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_26",
        "question": "What is the best description of the Definition of Done? (choose 3)",
        "options": [
          "At Sprint Planning it guides the Developers when creating a forecast for items.",
          "It serves as a checklist to inspect whether the Developers have performed all their tasks by the Sprint end.",
          "It creates transparency of the state of the Increment for inspection at the Sprint Review.",
          "It helps the Developers identify the work remaining for an Increment to be ready for release.",
          "It serves to track how much of a Product Backlog item is completed during the Sprint."
        ],
        "correctAnswer": [0, 2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_27",
        "question": "Two Scrum teams are working on the same product. In the coming Sprints some of the Developers have realised that both teams are going to need the help of Chris, an external specialist who is the only person with the knowledge and authority to build the database environment. However, Chris is notoriously busy and has already said he can only spare enough of his time for one Scrum team per Sprint. What should the Scrum Master do? (choose 1)",
        "options": [
          "Facilitate a discussion with all Developers from both teams on how they want to deal with this issue, and help them implement their preferred solution.",
          "Ask Chris to help with recruiting additional database specialists. In the meantime, have the Product Owner prioritise the items that do not depend on Chris.",
          "Manage the items in the Sprint Backlogs so that Chris can be utilized evenly for each team.",
          "Assign Chris to the team with the most urgent tasks first and then move him to the next team until the required support is completed."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_28",
        "question": "What questions should be answered during the Daily Scrum? (choose 1)",
        "options": [
          "What did I do yesterday and what do I plan to do today?",
          "None of these questions.",
          "Both of these questions.",
          "Do I see any impediment that prevents the Developers or me from meeting the Sprint Goal?"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_29",
        "question": "You are a Scrum Master for three Scrum Teams who are all working on the same Product. Management wants to measure the velocity of all three teams so that they know which teams are working well and which teams may benefit from more assistance. What are your best responses? (choose 2)",
        "options": [
          "Standardizing velocity across teams is a good way to understand which teams are producing the most value.",
          "There is no direct relationship between velocity and value. Value of the increment to the stakeholders is measured in other ways.",
          "Velocity is the amount of business functionality that a particular Scrum Team creates in a Sprint. It is unique to that team and used to forecast work in Sprint Planning.",
          "Providing incentives based on velocity can increase the Scrum Team’s motivation to produce more value."
        ],
        "correctAnswer": [1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q4_30",
        "question": "You join a team as the Scrum Master and notice it is currently one single team of 15 developers and a Product Owner, what should you do? (choose 1)",
        "options": [
          "Insist the team splits and decide who works with who",
          "Suggest the team split into teams of 10 or fewer, facilitate the discussion on how to split the teams up",
          "Ask the department head to split the teams into less than 10 members per team"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      }
    ]
  },
  {
      "id": "psm-ii-mock-5",
    "title": "PSM Mock Exam #5",
    "description": "Professional Scrum Master practice exam #5 (Questions 1-30) based on provided content.",
    "timeLimit": 90,
    "passingScore": 85,
    "questions": [
      {
        "id": "q5_1",
        "question": "What things are best considered when deciding on the Sprint length? (choose 1)",
        "options": [
          "How often team membership changes and the size of the team.",
          "Having consistent Sprint length across all Scrum Teams in the Nexus.",
          "The level of expertise over the technology to be used, ability to release an Increment to the end users, and the risk of being disconnected from the stakeholders."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_2",
        "question": "During the Sprint, the Developers realizes they might not be able to finish all of the items in the Sprint Backlog. As the Scrum Master what would you suggest? (choose 1)",
        "options": [
          "The Sprint length holds and the Developers continuously learn what is actually possible to do within the Sprint timebox.",
          "Continue Sprinting until the work is complete and redefine a new Sprint based on the results of the current Sprint.",
          "The Developers cancel the Sprint because they will not be able to meet the Sprint Goal."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_3",
        "question": "Anne is a Product Owner who needs to inform the board when the next release of a product is likely. With the Developers she considers the items in the Product Backlog needed to develop the Increment for the next release. Based on the team’s velocity she predicts the next release will be possible in 3 Sprints time. However the Developers admit to skipping some integration tests and believe that extra tests should be added to the Definition of Done before release. They believe it will take a further 10% of Sprint time to include these additional tests and believe that the release in 3 Sprints is still possible. What is the most effective way to recover? (choose 1)",
        "options": [
          "The undone work of the previous Sprints is estimated and added to the Sprint Backlog. For the next 3 Sprints this development dept is considered and added to the Sprint Backlogs, through considering past velocity taking this approach seems achievable to have the release ready in 3 Sprints time. Anne reassures the board.",
          "Transparency needs to be restored by adding the undone work to the Product Backlog. The Developers must figure out a way to deliver in the upcoming Sprints their current velocity plus 3 more units of work to catch up on development debt. It is the Scrum Master's duty to assess whether such repair is possible. If not, then Anne will have to restart the project potentially with a different team and will have to inform the board and the stakeholders.",
          "The Developers set the open work aside to be performed in one or more “catch-up” Sprints. They inform Anne that they need more time, It is Anne’s responsibility to inform users and stakeholders of the impact on the release date.",
          "The Developers inform Anne that the progress she has perceived to date is not correct. The Increment is not releasable. They give Anne their estimate of the effort it would take to get the past work done, and suggest doing that work first before proceeding with new features. The Developers also re-estimate the effort to complete the remaining backlog, including all integration tests. In the end, it is Anne’s call to continue the project or to cancel."
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_4",
        "question": "What is likely to happen if an organization only changed their current project terminology to fit Scrum without the proper understanding of Scrum as defined in the Scrum Guide? (choose all that apply)",
        "options": [
          "The organization may not realize the real benefits of Scrum as there would be no real change on the way the teams work.",
          "Confusion will arise between those that understand Scrum and those that don’t.",
          "Organizations may feel less stressed as the behaviours would remain familiar to management.",
          "Very little change will happen as Scrum is more than a set of terminology."
        ],
        "correctAnswer": [0, 1, 2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_5",
        "question": "As the Scrum Master what advice would you give to the Product Owner when ordering the Product Backlog? (choose 1)",
        "options": [
          "Delegate the work to the Assistant Product Owner. Delay the Sprint in order for the Product Owner to have enough time to prioritize the Product Backlog.",
          "As the Developers are closest to the work and doing the work, have them order the work instead of the Product Owner.",
          "Have the Product Owner order the items based on size, having the Developers work on the smallest items first for quick velocity.",
          "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize the flow of value."
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_6",
        "question": "What is the relationship between technical debt and delivery? (choose all that apply.)",
        "options": [
          "The more technical debt there is, the more difficult it is to maintain and add to the product.",
          "Technical debt should be a concern of the Scrum Team.",
          "A Product with a lot of technical debt may be unstable.",
          "Developers are responsible for making technical debt transparent and sharing the true product status and risk with the Scrum Team.",
          "Technical debt is allowed within certain limits."
        ],
        "correctAnswer": [0, 1, 2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_7",
        "question": "What should you advise a Developer to do if he/she is approached by a key stakeholder and pressures the Developer to add a “very important” item to the current Sprint? (choose 1)",
        "options": [
          "Inform the Product Owner so he/she can work with the person.",
          "Add the item to the bottom of the Sprint Backlog.",
          "Add the item to the top of the next Sprint Backlog.",
          "Replace an item in the current Sprint of equal size."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_8",
        "question": "What should the Developers do if whilst working they realize mid-sprint that development is more complex than they forecasted and they have chosen too much work to do after starting the Sprint? (choose 1)",
        "options": [
          "Work with the Product Owner to remove some work or Product Backlog items as soon as possible, whilst considering the impact on the Sprint Goal.",
          "Add additional team members to handle the extra work.",
          "Continue working and update the Product Owner at the Sprint Review.",
          "Modify the Definition of “Done” to ensure all Product Backlog items can be done by the end of the Sprint."
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_9",
        "question": "A sensitive data breach has occurred with the live product, this is a disaster for the product, the company and the users. Immediate changes have to be made including adding more security tests and functionality to the Definition of Done. What should the team do? (choose 2)",
        "options": [
          "A complete list of security-related Product Backlog items needs to be created before starting a new Sprint.",
          "Increments should be fixed in parallel Sprints so as not to disrupt the release of new features. After the security concerns have been fixed, they will be applied to the work that is already in progress for new features.",
          "During the Sprint Retrospective, the Developers assess how to add these additions to their Definition of Done so every future Increment will meet these security requirements.",
          "The additional security requirements are added to the Product Backlog and addressed by the Product Owner to prioritize."
        ],
        "correctAnswer": [2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_10",
        "question": "The Product Owner is under pressure to release key features in 2 sprints time, ahead of competitors in the market and capitalising on this window of opportunity. The Developers do not think this is possible due to past reliance on external teams in the company that have been unreliable in the past. As the Scrum Master what do you suggest? (choose 1)",
        "options": [
          "You reduce the length of your Sprints to deliver sooner.",
          "You determine how many extra developers would be required to increase velocity to meet the original deadline.",
          "You propose working with the other team’s Developers to reduce dependencies and discuss reliability for this crucial release date.",
          "You deprioritize any items from the Product Backlog which are projected to take longer than expected.",
          "Nothing, you can only estimate one Sprint at a time."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_11",
        "question": "There is a new addition to the Developers, her name is Hilda. She is very creative and whilst developing she added new features to the increment that were not on the Product Backlog. This is discovered on the day of the Sprint Review. What should be done about these new features? (choose 2)",
        "options": [
          "If possible, the Developers should remove the feature from the Increment before the Sprint Review",
          "Discuss the Scrum Framework and reasons for the Product Backlog in the Sprint Retrospective",
          "Developers report the problem to the Scrum Master, to take actions against Hilda",
          "Hilda should ask the Product Owner to add this feature to the Product Backlog because it is already part of the Increment"
        ],
        "correctAnswer": [0, 1],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_12",
        "question": "A Scrum Team just released the first iteration of the Product, great news, it has been a success. The board want to speed up development and have allocated more budget to bring in 2 new Scrum Teams to work on the product. What would be the biggest concern for the current Developers? (choose 1)",
        "options": [
          "Who will be a part of each team?",
          "Who will be the Scrum Master?",
          "How to reduce dependencies between teams?",
          "Which team will work on the front end and which team will work on the backend?"
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_13",
        "question": "What is the relationship between velocity and technical debt? (choose 2)",
        "options": [
          "They are not related. Technical debt does not affect velocity.",
          "The Velocity measures the amount of technical debt to be fixed.",
          "Allowing technical debt for a few Sprints artificially increases the velocity.",
          "Estimating the technical debt and using the past velocity will help to predict when the project can be delivered.",
          "When the Developers run into technical debt, the velocity will likely drop in the future."
        ],
        "correctAnswer": [2, 4],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_14",
        "question": "Which Product Backlog items can be considered ready for a Sprint? (choose 1)",
        "options": [
          "Any Product Backlog Item",
          "It is up to the Product Owner",
          "Product Backlog items that are estimated",
          "Product Backlog items that are estimated, with a value and description",
          "Product Backlog items that meet the Definition of Ready",
          "Product Backlog items that can be done within one Sprint"
        ],
        "correctAnswer": 5,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_15",
        "question": "Can the Sprint Backlog items be changed mid-sprint? (choose 1)",
        "options": [
          "No",
          "Yes"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_16",
        "question": "The Product Owner is under great pressure to release certain functionalities as soon as possible. To accelerate development, the Product Owner removes certain testing aspects temporarily from the Definition of Done. However, the Product Owner adds the missing testing to the Product Backlog to be done in the future. The Developers warn that this will increase technical debt. (choose the best 2 answer)",
        "options": [
          "This approach is fine if you also schedule in a Technical Debt fixing Sprint after the release.",
          "Unknown issues will grow as work develops and functionality is added to the reduced Definition of Done. Stabilization of the system becomes increasingly challenging. Work on the current release and future releases will be slowed in unanticipated ways.",
          "As long as the increment isn’t released before the testing is done this is acceptable to get the increment to Sprint Review. The Definition of Done can be reduced temporarily.",
          "Releasing with a reduced Definition of Done leads to incorrect assumptions about the product’s current condition. This is likely to cause unanticipated difficulties in future increments caused by not meeting the Definition of Done.",
          "The Product Backlog item must include a precise calculation and estimation of the technical debt resulting from reduced testing so that the overall amount of additional work can be forecasted and planned for."
        ],
        "correctAnswer": [1, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_17",
        "question": "A Project Manager would like to use Scrum for a new project and comes to you for advice. After explaining the Scrum Framework he expresses his intention to skip the Daily Scrums favouring weekly meetups as his employees already meet every day. What would you advise? (choose 1)",
        "options": [
          "The Daily Scrum is necessary to update the Scrum board with the team's progress.",
          "If the team members meet in other meetings, it is actually fine to skip the Daily Scrum",
          "The Daily Scrum will keep the senior managers up to date.",
          "Daily Scrums eliminate the need for other meetings.",
          "During the Daily Scrum, the team members will discuss important technical solutions."
        ],
        "correctAnswer": 3,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_18",
        "question": "How much time should be spent refining the Product Backlog? (choose 2)",
        "options": [
          "The Scrum Team decides how and when refinement is done. The Product Backlog items can be updated at any time by the Product Owner or at the Product Owner’s discretion.",
          "No more than 10% of the capacity of the Scrum Team.",
          "Up to 10% of the capacity of the Developers in a typical Sprint, but as much as 90% in early Sprints.",
          "As much as the Scrum Team agrees is necessary to create enough ready Product Backlog Items.",
          "At least one Product Backlog refinement session should take place each sprint."
        ],
        "correctAnswer": [0, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_19",
        "question": "Your Scrum team has been working on a Product for 6 months. The product passes usability test and delivers an increment at the end of each Sprint, however it has not yet been released to real users. The stakeholders are putting a lot of pressure to release next month. The Product Owner does not think this is viable because the their is still a lot of work required before he has confidence in a release. He has a delivery date of 6 months and has been working towards that. What guidance or assistance can you provide by the Scrum Framework? (choose 3 answers.)",
        "options": [
          "Encourage the Product Owner to interact with the Stakeholders to validate how much the current product satisfies their needs and the minimal things to add to release it.",
          "Challenge the Product Owner to validate if all the pending work is needed to release and how the number of features in a product release can be reduced.",
          "Suggest the Product Owner meet with the team and rescope the scheduled work. Find out what can be released in one month to match the stakeholder's demands.",
          "Inform the Product Owner that the whole organization must respect his judgments. Maintain the present product vision and six-month timeline.",
          "Advise adding more teams to work on the product."
        ],
        "correctAnswer": [0, 1, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_20",
        "question": "What can you do to ensure the Developers understand the Product Backlog items discussed at Sprint Planning? (choose 1)",
        "options": [
          "Request a business analysts to help explain the high-priority items in the Product Backlog.",
          "Request the Developers use some time during each Sprint to be involved in Backlog Refinement, helping the Product Owner decompose the items that are prioritised.",
          "Having a separate group of Developers to dedicate full time to helping the Product Owner add new items based on their development expectations."
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_21",
        "question": "If the Technical Debt builds up, false assumptions about the present status of the Product and the Increment examined at Sprint Review might be made. (choose 1)",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_22",
        "question": "Are stakeholders only allowed to meet with the Scrum team at the Sprint Review? (choose 1)",
        "options": [
          "No",
          "Yes"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_23",
        "question": "Considering the Product Owner, which of the following will be a risk for the success of the Product Owner? (choose 1)",
        "options": [
          "Frequent interactions with the Stakeholders.",
          "Having to clarify Product Backlog Items although expectations are written.",
          "Sharing responsibilities with another Product Owner when overloaded.",
          "Repeating the Product vision and goals to the team often.",
          "Autonomy on Product Backlog management."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_24",
        "question": "At the eleventh Sprint Review, the stakeholders are very disappointed. They say the product so far will not meet their needs and is going to cost more than they budgeted for. What might have led to this? (choose the best 3 answers)",
        "options": [
          "Changes to the project plan were not adequately documented and shared. The change request procedure was not diligently followed.",
          "The Scrum Master has not ensured transparency.",
          "The Product Owner has not been interacting frequently with the stakeholders and kept them aware of the progress of the project.",
          "The stakeholders have not been using the Sprint Reviews to actively engage, and inspect and evaluate progress.",
          "The stakeholders were not allowed to enter the development area, and were not present at the Daily Scrums."
        ],
        "correctAnswer": [1, 2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_25",
        "question": "At the Sprint Retrospective, you decide on 3 highly impactful changes to make. What should you do? (choose 2)",
        "options": [
          "Address them as soon as possible",
          "Add to the next Sprint Backlog",
          "Add them to the Product Backlog",
          "Record them in the Retrospective decision log",
          "Ask the Scrum Master when and how to implement them"
        ],
        "correctAnswer": [0, 2],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_26",
        "question": "It takes a few Sprints before a major stakeholder begins utilizing the product. The unsatisfied stakeholder contacts the Product Owner to express concerns about the unsatisfactory performance. The Product Owner seeks guidance from the Scrum Master. What would you recommend? (choose 1)",
        "options": [
          "Explain to the Product Owner that it’s up to the Developers to decide on acceptable performance standards as they own the Definition of Done.",
          "Wait until the next Sprint Retrospective as it is the most opportune time to modify the Definition of Done.",
          "Encourage the Product Owner to bring the performance concerns to the Developers and work with them on how to improve performance, and ultimately have a stronger Definition of Done.",
          "Bring the concern to the testers and ask them to include performance testing."
        ],
        "correctAnswer": 2,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_27",
        "question": "The Product Owner decides to release the current Increment to production. The stakeholders ask to stop “Sprinting” to react more quickly to the user feedback that is expected after this release. As the Scrum Master, what would you advise? (choose the best 2 answers)",
        "options": [
          "Stop sprinting and let the Developers work on new customer requests as they arise.",
          "Continue sprinting but allow customer feedback to change the Sprint Goal within the Sprint.",
          "Continue sprinting but shorten the Sprint length to allow for shorter feedback loops.",
          "Continue sprinting and include the customer feedback in the Product Backlog."
        ],
        "correctAnswer": [2, 3],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_28",
        "question": "During the Sprint Review, the topic of budget was brought up and the project's budget may be cut owing to recent market developments. This causes the atmosphere to become tense, which in turn leads to disputes breaking out between people. What are the two most important things for the Scrum Master to do? (choose 2 best answers.)",
        "options": [
          "Encourage the stakeholders and Product Owner to focus on delivering the highest-value items for the next Sprint.",
          "Be objective and request for a short break for people to calm down.",
          "Inform everyone that the team needs to stay busy until it is confirmed the team and Product is not needed anymore.",
          "Avoid getting involved as it is the Product Owner’s responsibility to manage stakeholder expectations.",
          "Defend the original budget and request the stakeholders adhere to the original agreed funding for the product."
        ],
        "correctAnswer": [0, 1],
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_29",
        "question": "When multiple Scrum Teams are working on the same Product it’s important that they all work on the same Product Backlog? (choose 1)",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 1,
        "explanation": "No explanation provided in the source text."
      },
      {
        "id": "q5_30",
        "question": "If the Product Owner asks your opinion as the Scrum Master as to who the most important stakeholder is, how would you respond? (choose 1)",
        "options": [
          "The Product’s users",
          "The Product budget holder",
          "Any stakeholder on the board of directors",
          "The company owner"
        ],
        "correctAnswer": 0,
        "explanation": "No explanation provided in the source text."
      }
    ]
  },
  {
    "id": "psm-ii-mock-6",
  "title": "PSM II Mock Exam #6",
  "description": "Professional Scrum Master Level II practice exam #6 based on provided content.",
  "timeLimit": 90,
  "passingScore": 85,
  "questions": [
    {
        "id": "q6_1",
        "question": "How is a cross-functional Scrum team defined? (Choose the best two answers)",
        "options": [
          "A group of full-stack Developers shared across multiple teams.",
          "Cross-skilled Developers can do all the work necessary to deliver a shippable Increment at the end of the Sprint.",
          "A team of skilled Developers that can effectively multi-task on multiple Product Backlog items at the same time.",
          "Cross-functional teams operate independently without relying on external dependencies.",
          "A team that consists of engineers, testers, business analysts, technical architects and functional managers."
        ],
        "correctAnswer": [1, 3],
        "explanation": "A cross-functional Scrum team is defined as a group of individuals within the Scrum Team who possess all the skills and expertise necessary to deliver a potentially shippable product increment at the end of each Sprint. These teams are not limited by specialized roles or hierarchies and are instead composed of professionals with diverse skills relevant to the project or product. This inclusivity ensures that the team can effectively collaborate and adapt to changing requirements, thereby maximizing its ability to deliver value."
      },
      {
        "id": "q6_2",
        "question": "What potential issues may arise if the director of a department also takes on the role of a Developer within one of the Scrum Teams developing a product? (Choose the best two answers)",
        "options": [
          "Reduced transparency and openness within the team, as team members may hesitate to raise concerns or provide honest feedback to someone in a position of authority.",
          "Increased risk of micromanagement and stifled creativity, as the director may impose their ideas and decisions on the team, limiting autonomy and innovation.",
          "Difficulty in providing unbiased feedback and evaluation to team members due to the director's dual role and hierarchical position.",
          "Confusion and blurred lines of accountability, as the director may struggle to balance their responsibilities as a leader and as a team member, leading to ambiguity in decision-making processes and role expectations.",
          "Potential disruption to team dynamics and collaboration, as the director's authority may overshadow the contributions and perspectives of other team members.",
          "Lack of impartiality and potential conflicts of interest, as the director may prioritize departmental interests over the team's goals."
        ],
        "correctAnswer": [3, 4],
        "explanation": "The correct answers highlight potential issues that may arise from the director of a department also functioning as a Developer within a Scrum Team. When a director assumes a dual role, there is a risk of disrupting team dynamics and collaboration. The director's authoritative position may overshadow the contributions of other team members, hindering open communication and shared decision-making. Additionally, there may be confusion regarding accountability and role expectations, as the director juggles responsibilities as both a leader and a team member. While other concerns are valid in a hierarchical structure, they may not directly relate to the specific challenges posed by the director's dual role within a Scrum Team."
      },
      {
        "id": "q6_3",
        "question": "A six-member Scrum team is developing a new application to support their organization's payroll processes. Darren is a new Developer, and in the Increment, he added a new feature that was not on the Product Backlog. He did it because one of the business stakeholders approached him directly, and it only took him 30 minutes to implement the requirements. Other Developers discovered this just before the Sprint Review. What should the Developers do? (Choose the best three answers)",
        "options": [
          "Educate Darren about the importance of following the agreed-upon process and not adding features outside of the Product Backlog without proper evaluation and approval.",
          "The Developers should inform the Scrum Master about the request and remove Darren from the Team.",
          "Darren should ask the Product Owner to add this feature to the Product Backlog because it is already part of the Increment.",
          "They should discuss the issue in the Sprint Retrospective.",
          "The Developers should retain the feature in the Increment but should not present it to the stakeholders.",
          "Discuss the situation with the Product Owner to determine whether the new feature aligns with the product vision and goals."
        ],
        "correctAnswer": [0, 3, 5],
        "explanation": "In this scenario, where a new feature was added to the Increment without being on the Product Backlog, it's essential for the team to take appropriate action. Firstly, discussing the situation with the Product Owner is crucial, as they are responsible for managing the Product Backlog and ensuring alignment with the product vision. Additionally, educating Darren about the proper Scrum process is important to prevent similar incidents in the future. Discussing the issue in the Sprint Retrospective allows the team to reflect and improve its processes."
      },
      {
        "id": "q6_4",
        "question": "What would be two boundaries, defined in Scrum, that give guidance for teams to effectively self-manage? (Choose the best two answers)",
        "options": [
          "Creating an integrated and potentially shippable Increment by the end of each Sprint.",
          "Having a mixture of different levels of skills and experience to promote domain knowledge sharing.",
          "Clearly defined functional teams within the Scrum team to define handoff phases during development.",
          "Timeboxing the events in Scrum to allow for regular inspection and adaptation, creating opportunities to adjust course in any given path."
        ],
        "correctAnswer": [0, 3],
        "explanation": "Timeboxing the events in Scrum ensures that each phase has a predefined duration, fostering discipline and prioritization. It also facilitates regular inspection and adaptation. Creating an integrated and potentially shippable Increment by the end of each Sprint sets a clear boundary for the team's deliverables, motivating them to prioritize essential tasks and deliver tangible value. These boundaries provide structure for teams to self-manage effectively."
      },
      {
        "id": "q6_5",
        "question": "What is the recommended size for a Scrum team? (Choose the best answer)",
        "options": [
          "Typically 10 or fewer members",
          "Minimal 5",
          "3 to 9",
          "7 plus or minus 2"
        ],
        "correctAnswer": 0,
        "explanation": "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people. In general, we have found that smaller teams communicate better and are more productive. If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product."
      },
      {
        "id": "q6_6",
        "question": "How can a Scrum Master support the team when a new Product Owner replaces the outgoing one, and the team lacks confidence in the newcomer's ability to fulfill the role effectively? (Choose the best two answers)",
        "options": [
          "Organize team-building activities and collaborative sessions to help the new Product Owner integrate smoothly and foster a positive relationship with the team.",
          "Facilitate open communication between the team and the new Product Owner to express concerns, provide support, and build trust gradually.",
          "Provide extensive training and guidance to the new Product Owner, assuming they will quickly adapt and gain the team's trust.",
          "Encourage the team to challenge the new Product Owner's decisions openly and frequently to test their competence.",
          "Keep the team's concerns about the new Product Owner's abilities to yourself and hope for the best without taking any action."
        ],
        "correctAnswer": [0, 1],
        "explanation": "The most effective approaches for the Scrum Master involve fostering open communication and organizing collaborative activities to support the team during the transition to a new Product Owner. This helps build trust gradually and address any uncertainties about the new Product Owner's abilities."
      },
      {
        "id": "q6_7",
        "question": "Who is accountable for knowing the most about the progress towards a business objective or a release and also being able to clearly explain the alternatives? (Choose the best answer)",
        "options": [
          "The Scrum Master",
          "The Development manager",
          "The Product Owner",
          "The Developers",
          "The Release Manager"
        ],
        "correctAnswer": 2,
        "explanation": "The Product Owner is accountable for knowing the most about the progress towards a business objective or a release. This stems from their responsibility to prioritize the Product Backlog based on business value and guide the team in making decisions that align with the overall objectives and maximize the value delivered to stakeholders."
      },
      {
        "id": "q6_8",
        "question": "What must the Developers do during the first Sprint? (Choose the best answer)",
        "options": [
          "Create a potentially shippable product Increment that includes at least one piece of functionality.",
          "Only design and develop the architecture and infrastructure.",
          "Create a project plan in order to map the functional development to Sprint dates.",
          "Analyze and estimate the requirements for the subsequent Sprints."
        ],
        "correctAnswer": 0,
        "explanation": "During the first Sprint, the Developers must collaborate with the Product Owner to understand the selected Product Backlog items and define a Sprint Goal. They then create a plan for delivering the Increment (Sprint Backlog) and commit to adhering to the Definition of Done to ensure the Increment meets quality standards."
      },
      {
        "id": "q6_9",
        "question": "Which statement best describes the concept of empirical process control in Scrum? (Choose the best answer)",
        "options": [
          "Scrum Teams prioritize following rigid processes and procedures over adapting to change.",
          "Scrum Teams continuously inspect and adapt their processes and work based on empirical evidence.",
          "Scrum Teams rely on predetermined plans and predictions to guide their work.",
          "Scrum Teams delegate decision-making authority to external stakeholders.",
          "Scrum Teams follow a fixed set of rules and guidelines without flexibility."
        ],
        "correctAnswer": 1,
        "explanation": "Empirical process control in Scrum emphasizes continuous inspection and adaptation based on real-world data and experience. This approach allows Scrum Teams to make informed decisions and adjustments to optimize their processes and achieve better outcomes. The other options do not align with these principles."
      },
      {
        "id": "q6_10",
        "question": "As a Scrum Master, you encounter conflicts among team members, hindering collaboration and productivity. How would you navigate these conflicts? (Choose the best answer)",
        "options": [
          "Encourage team members to avoid discussing conflicts and focus solely on work, risking unresolved tension and reduced team cohesion.",
          "Facilitate open and honest communication to address conflicts and find mutually agreeable solutions, fostering a culture of trust and collaboration within the team.",
          "Assign blame and consequences to the parties involved in the conflict, creating a hostile work environment and further exacerbating the conflict.",
          "Intervene directly and impose solutions without involving the team, undermining their autonomy and potentially creating resentment among team members.",
          "Ignore conflicts and hope they resolve themselves over time, risking escalating tensions and negatively impacting team morale and performance."
        ],
        "correctAnswer": 1,
        "explanation": "Facilitating open and honest communication is the most appropriate approach. This creates a safe space for team members to express their concerns, fosters a culture of trust and collaboration, and allows them to address conflicts constructively to find mutually agreeable solutions. Other options can escalate tensions and hinder team performance."
      },
      {
        "id": "q6_11",
        "question": "According to the latest Scrum Guide, every Scrum Team should include Developers who possess the necessary competencies and skills to deliver a \"Done\" Increment in a Sprint.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0,
        "explanation": "According to the latest version of the Scrum Guide, each Scrum Team should consist of Developers with the required skills and competencies to deliver a potentially releasable product Increment at the end of each Sprint. This ensures the team is self-sufficient and capable of completing all aspects of the work without dependencies on individuals outside the team."
      },
      {
        "id": "q6_12",
        "question": "Professional development is crucial for the growth and success of individuals and teams. How can a Scrum Master support the professional development of team members? (Choose the best answer)",
        "options": [
          "Support continuous learning and skill development through training, mentoring, and coaching, empowering team members to reach their full potential and contribute effectively to the team.",
          "Discourage team members from pursuing additional training or certifications, stunting their professional growth and limiting their value to the team.",
          "Encourage team members to focus solely on their current responsibilities without pursuing further development, limiting their potential and adaptability.",
          "Provide limited opportunities for learning and growth to team members, hindering their career advancement and skill development.",
          "Limit access to resources and opportunities for career advancement within the organization, stifling motivation and engagement among team members."
        ],
        "correctAnswer": 0,
        "explanation": "Supporting continuous learning through training, mentoring, and coaching is the most suitable approach. This empowers team members to reach their full potential, which not only enhances individual growth but also strengthens the team's capabilities and performance. Other options limit opportunities and stifle motivation."
      },
      {
        "id": "q6_13",
        "question": "Which of the following best describes a Product Owner? (Choose the best answer)",
        "options": [
          "Value optimizer.",
          "Go-between for the Developers and stakeholders.",
          "Team leader.",
          "The Product Owner is responsible for estimating the items."
        ],
        "correctAnswer": 0,
        "explanation": "The Product Owner is a key role in Scrum responsible for maximizing the value of the product and the work of the Developers. They manage the Product Backlog, represent stakeholder interests, and ensure the team delivers the most valuable features with each iteration."
      },
      {
        "id": "q6_14",
        "question": "Which statement best describes the responsibility of the Product Owner? (Choose the best two answers)",
        "options": [
          "To optimize the value of the work being done by the Developers.",
          "To provide clarity on Product Backlog items.",
          "To act as a go-between for stakeholders.",
          "To manage the Developers.",
          "To ensure that the work meets the commitments of the stakeholders."
        ],
        "correctAnswer": [0, 1],
        "explanation": "The Product Owner is responsible for maximizing the value of the work done by the Developers. This includes managing the Product Backlog and ensuring it is transparent, visible, and understood. This clarity on Product Backlog items is a key part of their role."
      },
      {
        "id": "q6_15",
        "question": "Who must ensure that the work done for a Product Backlog item conforms to the Definition of Done? (Choose the best answer)",
        "options": [
          "The Scrum team.",
          "The Product Owner.",
          "The Scrum Master.",
          "The Developers.",
          "The test team."
        ],
        "correctAnswer": 3,
        "explanation": "While the whole Scrum Team must create a Definition of Done, the Developers are the ones who do the work. Therefore, they are responsible for making sure the produced work meets the agreed-upon standards and conforms to the Definition of Done."
      },
      {
        "id": "q6_16",
        "question": "What primary responsibilities do the Developers hold in Scrum? (Choose all that apply)",
        "options": [
          "Organizing the work required to meet the Sprint Goal and resolving internal team conflicts.",
          "Doing the actions required to fulfil the Sprint Goal.",
          "Delivers items that meet the Definition of Done.",
          "Writing User Stories and ordering the Product Backlog.",
          "Reporting productivity and selecting the Sprint timebox."
        ],
        "correctAnswer": [0, 1, 2],
        "explanation": "Developers are responsible for converting Product Backlog items into a shippable increment. This includes organizing the work, executing the tasks to meet the Sprint Goal, and ensuring the work conforms to the Definition of Done. They are self-organizing in these efforts."
      },
      {
        "id": "q6_17",
        "question": "Which statement is correct regarding the length of the Sprints? (Choose the best two answers)",
        "options": [
          "The Sprint length depends on the forecasted development effort (amount of items selected) during Sprint Planning.",
          "If the duration of the Sprint extends beyond a certain point, it could lead to an increase in complexity, and a higher level of risk for the project or product.",
          "The Sprint Length is defined by the Scrum Master.",
          "The length of all Sprints must be no more than one month and it is optimal to have a consistent Sprint length.",
          "The Sprint length is calculated by aggregating the time required to design, code and test."
        ],
        "correctAnswer": [1, 3],
        "explanation": "Sprints are time-boxed to one month or less. Longer Sprints can increase complexity and risk. A consistent Sprint length provides a steady rhythm. A new Sprint starts immediately after the previous one concludes."
      },
      {
        "id": "q6_18",
        "question": "Which of these tools is mandatory for the Product Owner to use? (Choose the best answer)",
        "options": [
          "Project Gantt chart.",
          "The Product Owner has the discretion to select appropriate tools, provided they align with the guidelines outlined in the Scrum Guide.",
          "Release burnup chart.",
          "Burndown chart.",
          "Version control and Jira."
        ],
        "correctAnswer": 1,
        "explanation": "While various tools like burnup and burndown charts can be helpful, none are mandatory in Scrum. The Product Owner can choose any tool or method that best suits their needs for decision-making and managing the Product Backlog."
      },
      {
        "id": "q6_19",
        "question": "Scrum has an accountability called “Project Manager.”",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "Scrum does not have a role called \"Project Manager.\" It operates with three distinct accountabilities: Scrum Master, Product Owner, and Developers. The absence of a Project Manager is intentional to promote self-organization and collaboration."
      },
      {
        "id": "q6_20",
        "question": "When could the Developers cancel the Sprint? (Choose the best answer)",
        "options": [
          "When the Sprint Backlog is determined to be unachievable.",
          "When the availability of the Product Owner is less than expected.",
          "When the requirements for the work to be done become unclear or not understood.",
          "When too many impediments occur.",
          "They can't. Only the Product Owner can cancel the Sprint."
        ],
        "correctAnswer": 4,
        "explanation": "According to Scrum principles, only the Product Owner has the authority to cancel a Sprint. This is a significant decision made if the Sprint Goal becomes obsolete or unfeasible, and requires consultation with stakeholders."
      },
      {
        "id": "q6_21",
        "question": "A high performing Scrum team will have frequent Release Sprints.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "In Scrum, there are no special Sprints designated as Release Sprints. Every Sprint is structured to produce a potentially shippable product Increment. The Developers are accountable for creating a usable Increment each Sprint that adheres to the Definition of Done."
      },
      {
        "id": "q6_22",
        "question": "How would you facilitate continuous improvement within a mature Scrum team that has been working together for several years? (Choose the best three answers)",
        "options": [
          "Provide additional training and certification opportunities to team members to enhance their professional development.",
          "Introduce new tools and techniques gradually to prevent disruption to the team's workflow.",
          "Rotate team members across different roles to encourage skill development and cross-functional collaboration.",
          "Encourage team members to experiment with different approaches and share their learnings with the rest of the team.",
          "Conduct retrospective meetings less frequently to avoid monotony."
        ],
        "correctAnswer": [1, 2, 3],
        "explanation": "Rotating team members, gradually introducing new tools, and encouraging experimentation are effective ways to stimulate continuous improvement. These options focus on promoting collaboration, skill development, and ongoing learning within the team, which are essential for a mature Scrum environment."
      },
      {
        "id": "q6_23",
        "question": "Who manages the progress of work during a Sprint? (Choose the best answer)",
        "options": [
          "The Scrum Master knows the specific senior Developers that have the responsibility to manage the progress of work.",
          "The Developers",
          "The Team Leader",
          "The stakeholders",
          "The Product Owner"
        ],
        "correctAnswer": 1,
        "explanation": "During a Sprint, the progress of work is managed collectively by the Developers. This collective responsibility fosters self-management, empowering them to organize their work, collaborate effectively, and make decisions autonomously to achieve the Sprint Goal."
      },
      {
        "id": "q6_24",
        "question": "As a Scrum Master, how would you support a team that is experiencing burnout or morale issues due to sustained high pressure and workload? (Choose the best two answers)",
        "options": [
          "Ignore the issue and focus solely on meeting project deadlines and deliverables.",
          "Foster a supportive and inclusive team culture by promoting work-life balance, organizing team-building activities, and offering emotional support and encouragement.",
          "Encourage team members to work longer hours to catch up on missed deadlines.",
          "Provide financial incentives and bonuses to motivate team members to work harder.",
          "Implement strategies for workload management, such as adjusting sprint goals and timelines to reduce stress."
        ],
        "correctAnswer": [1, 4],
        "explanation": "Implementing strategies for workload management (like adjusting sprint goals) and fostering a supportive team culture are crucial for alleviating burnout. These proactive approaches demonstrate responsiveness to the team's needs and promote a healthier work environment. Ignoring the issue or encouraging longer hours can lead to further stress."
      },
      {
        "id": "q6_25",
        "question": "James made racist comments directed at John, prompting John to report the incident to HR. Despite James' high level of skill as a developer, the Software Manager advocated for dismissing the incident and retaining James on the team. Is this statement true or false?",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 1,
        "explanation": "This statement is false. Regardless of James's skills, making racist comments is unacceptable behavior. Ignoring such an incident creates a hostile work environment, undermines company values, and is not aligned with proper HR protocols, potentially leading to legal and ethical ramifications."
      },
      {
        "id": "q6_26",
        "question": "You are a Scrum Master and were asked to conduct an interview by management for a new team member. Which characteristics would you look for in the candidate? (Choose the best answer)",
        "options": [
          "Eagerness to take on leadership roles and drive decision-making processes within the team.",
          "Proven track record of delivering projects on time and within budget.",
          "Flexibility and adaptability to embrace changing requirements and priorities.",
          "Strong collaboration and communication skills, with the ability to work effectively in a team environment.",
          "Extensive experience in a specific technology or domain relevant to the project."
        ],
        "correctAnswer": 3,
        "explanation": "Strong collaboration and communication skills are essential for a new team member in a Scrum environment. The ability to work effectively with others, communicate openly, and contribute to a positive team dynamic are crucial for the success of the self-organizing team."
      },
      {
        "id": "q6_27",
        "question": "Cross-functional teams possess expertise on specific system components and areas like design, database management, back-end development, and front-end development, allowing them to focus on specific aspects of a project effectively.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 1,
        "explanation": "This statement describes component teams, not cross-functional teams. Cross-functional teams are composed of individuals with diverse skills who work together towards a common goal, rather than being specialized in one area. They can independently deliver complete increments of work."
      },
      {
        "id": "q6_28",
        "question": "Which statement best describes Scrum? (Choose the best answer)",
        "options": [
          "A clearly defined and predictable process that follows the principles of Computer Science.",
          "A clearly defined methodology that determines the software development processes",
          "A manual methodology for defining best practices for software development.",
          "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems."
        ],
        "correctAnswer": 3,
        "explanation": "Scrum is a lightweight framework designed to address complex problems by promoting adaptability and iterative development, as outlined in the Scrum Guide. It provides a structure for teams to work collaboratively, respond to change, and deliver value quickly and effectively."
      },
      {
        "id": "q6_29",
        "question": "In a scenario where Toby, a diligent Product Owner overseeing the development of a cutting-edge e-commerce platform, actively engages with the Developers to refine the Product Backlog, what fundamental truths should be acknowledged about this crucial aspect of the Scrum framework? (Choose all that apply)",
        "options": [
          "Product Backlog refinement involves collaboration between the Product Owner and the Developers",
          "Product Backlog refinement focuses only on adding new items to the Product Backlog",
          "Product Backlog refinement is the sole responsibility of the Product Owner",
          "Product Backlog refinement is an ongoing process.",
          "Product Backlog refinement occurs only at the beginning of the Sprint",
          "Product Backlog refinement ensures that Product Backlog items are clear and actionable"
        ],
        "correctAnswer": [0, 3, 5],
        "explanation": "Product Backlog refinement is an essential, continuous activity in Scrum. It is a collaborative effort between the Product Owner and Developers to ensure backlog items are clear, actionable, and aligned with the product vision. This ongoing process helps the team understand upcoming work and adapt to changes."
      },
      {
        "id": "q6_30",
        "question": "James made racist comments directed at John, prompting John to report the incident to HR. Despite James' high level of skill as a developer, the Software Manager advocated for dismissing the incident and retaining James on the team. Is this decision true or false?",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "This decision is false from an ethical and professional standpoint. Regardless of James's skills, making racist comments is unacceptable. Ignoring it creates a hostile work environment, undermines company values, and is not aligned with proper HR protocols, which could lead to legal ramifications."
      }
    ]
  },
  {
      "id": "psm-ii-mock-7",
    "title": "PSM II Mock Exam #7",
    "description": "Professional Scrum Master Level II practice exam #7 based on provided content.",
    "timeLimit": 90,
    "passingScore": 85,
    "questions": [
      {
        "id": "q7_1",
        "question": "A Scrum Master has been coaching the Product Owner to find ways to maximize the value delivered. Which stakeholders are the most important for the Product Owner to satisfy? (Choose the best answer)",
        "options": [
          "The company founder",
          "The Product’s users",
          "The board of directors",
          "The Head of Product"
        ],
        "correctAnswer": 1,
        "explanation": "The most important stakeholders for the Product Owner to satisfy are typically the customers or end-users of the product. Their satisfaction is crucial because they are the ultimate beneficiaries of the value delivered by the product. Additionally, satisfying the needs of customers often aligns with achieving the overall business objectives and maximizing the value of the product."
      },
      {
        "id": "q7_2",
        "question": "Stakeholders are only allowed to meet with the Scrum team at the Sprint Review.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 1,
        "explanation": "Improving communications with the stakeholders is a crucial activity in Scrum, as working with them frequently ensures the team focuses on building the right things Although it is required to have stakeholders at Sprint Review, they can also engage with the Scrum team during Product Backlog refinement, Sprint Planning, or during the Sprint if the Scrum team requires it."
      },
      {
        "id": "q7_3",
        "question": "Each product that we build using Scrum should have a Product Goal to make sure that the teams are focused. What is true about the Product Goal? (Choose all that apply)",
        "options": [
          "The Product Owner is accountable for developing and explicitly communicating the Product Goal.",
          "The Scrum team has the right to determine the Product Goal.",
          "The Scrum Master serves the Product Owner by finding techniques for effective Product Goal definition",
          "The Developers should focus on their Sprint Backlog and not the Product Goal."
        ],
        "correctAnswer": [0, 2],
        "explanation": "As stated in the Scrum Guide, the Product Owner is accountable for developing and explicitly communicating the Product Goal. The Scrum Master serves the Product Owner by finding techniques for effective Product Goal definition. Sprint Backlog should be built in a way towards the Product Goal."
      },
      {
        "id": "q7_4",
        "question": "The Product Owner’s primary concern is the flow of value reflected in the ordering of the Product Backlog.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0,
        "explanation": "The Product Owner is also known as the value maximizer. The Product Owner is responsible for maximizing the value of the product by ordering the Product Backlog items based on their value and ensuring transparency on the overall progress of the project."
      },
      {
        "id": "q7_5",
        "question": "A Scrum team has been working on the same product for twelve Sprints. What would likely be the immediate impact on the original Scrum team if two new Scrum teams are to be added to the same product? (Choose the best answer)",
        "options": [
          "Its productivity is likely to stay the same.",
          "Its productivity is likely to increase.",
          "Its productivity is likely to decrease."
        ],
        "correctAnswer": 2,
        "explanation": "The addition of two new Scrum teams could increase communication overhead and shift team dynamics as the original team adjusts to working with new members. While new teams bring fresh perspectives, there may be initial challenges in coordinating tasks and aligning priorities, potentially leading to a temporary decrease in productivity."
      },
      {
        "id": "q7_6",
        "question": "During the Product Backlog refinement, the Technical leader is not present, and the team is not sure how to implement the new module. Who is responsible for the work during the Sprint? (Choose the best answer)",
        "options": [
          "The engineering director.",
          "The Developers.",
          "The Technical Architects.",
          "The Team Leads.",
          "The Scrum Master."
        ],
        "correctAnswer": 1,
        "explanation": "The Developers are responsible for making decisions during the Sprint. They should collaborate to find solutions, leveraging their collective expertise and seeking guidance from the Technical Leader asynchronously if necessary to ensure the Sprint's goals are met."
      },
      {
        "id": "q7_7",
        "question": "A Scrum Master is a true leader who serves the Scrum team and the organization. Which three activities describe what a Scrum Master manages as reflected by the Scrum Guide? (Choose the best three answers)",
        "options": [
          "Causing the removal of impediments to the Scrum team’s progress that limits their progress and productivity.",
          "The way Scrum is understood and enacted within the organization.",
          "Managing the capacity and utilization of each Developer.",
          "Reporting on the performance of the Sprint.",
          "Managing the process in which Scrum is applied.",
          "Managing the Product Backlog items and working in the Sprint Backlog."
        ],
        "correctAnswer": [0, 1, 4],
        "explanation": "The Scrum Master is responsible for ensuring the team's process stays within the Scrum framework, helps remove impediments, and ensures Scrum is understood and enacted correctly within the organization. They act as a servant-leader, fostering an environment for continuous improvement."
      },
      {
        "id": "q7_8",
        "question": "What are typical Product Owner activities during Sprint 0? (Choose the best answer)",
        "options": [
          "There is no such thing as Sprint 0.",
          "To allocate enough resources before starting Sprint 1.",
          "To create User Stories based on the requirements document.",
          "To create a project plan based on the defined timeline.",
          "Ensuring there is enough work to do for at least three Sprints."
        ],
        "correctAnswer": 0,
        "explanation": "Scrum does not have a concept of 'Sprint 0'. Development starts with Sprint 1. Any period before that is considered preparation where the Product Owner defines the vision, engages stakeholders, and refines the initial Product Backlog."
      },
      {
        "id": "q7_9",
        "question": "Paul, a Product Owner from one of the Scrum teams, has been attending the Daily Scrum. During the Daily Scrum, the Developers have been reporting their daily work to Paul so that he is aware of their Sprint progress and what each member is working on. What is the best action for the Scrum Master to take? (Choose the best answer)",
        "options": [
          "Facilitate the Daily Scrums to avoid any conflicts between the Developers and Paul.",
          "Coach Paul and the Developers on the purpose of the Scrum events and let them figure out what to do in this situation.",
          "Allow Paul to participate in the Daily Scrum as he is responsible for the product's success.",
          "Ask Paul to stop attending the Daily Scrum."
        ],
        "correctAnswer": 1,
        "explanation": "The Scrum Master’s responsibility is to teach the Scrum team the value and objective of each event. Since the Daily Scrum is for the Developers to inspect and adapt their progress, the best action is to coach both the Product Owner and Developers on its purpose and allow them to self-manage the situation."
      },
      {
        "id": "q7_10",
        "question": "At the end of the eighth Sprint, the internal sponsors are not happy with the progress of the product being built. The current state of the product is not as expected as it will require additional Sprints and more budget than originally anticipated at the start of the project. What factors may have led to this? (Choose the best three answers)",
        "options": [
          "The scope changes have not been tracked adequately and the change request process has not been followed properly.",
          "The project plan proposed to the sponsors at the start of the project was followed stringently.",
          "The Scrum Master has not ensured transparency.",
          "The sponsors haven’t been using the Sprint Reviews to actively engage, inspect and evaluate the progress.",
          "The Product Owner has not been engaging with sponsors frequently enough and has not been kept aware of the project's overall progress.",
          "The stakeholders have not been using the Daily Scrum effectively to track the progress of the Developers."
        ],
        "correctAnswer": [2, 3, 4],
        "explanation": "Managing stakeholders' expectations requires open communication. A lack of transparency, infrequent engagement between the Product Owner and sponsors, and sponsors not using Sprint Reviews to inspect progress are key factors that can lead to misaligned expectations and dissatisfaction."
      },
      {
        "id": "q7_11",
        "question": "According to Scrum Theory, how should a group of fifty Developers be divided into multiple teams? (Choose the best answer)",
        "options": [
          "Allow the team leads to divide and select teams.",
          "The teams will rotate their members every Sprint for the spread of knowledge.",
          "Create a skills matrix for identifying their levels and years of experience to assign people into teams.",
          "By understanding the product, the product vision and the Scrum framework, the group divides itself into teams."
        ],
        "correctAnswer": 3,
        "explanation": "Scrum teams should autonomously manage their formation. With guidelines and coaching from the Scrum Master, the developers should divide themselves into multiple teams of about ten members each to ensure effective communication and collaboration."
      },
      {
        "id": "q7_12",
        "question": "A Product Owner has been working for many years for 6 Scrum teams. What would the Product Owner do during an active Sprint? (Choose the best answer)",
        "options": [
          "Prioritize the Sprint Backlog.",
          "Engage with the stakeholders and answer questions from the Developers.",
          "Update the burndown chart.",
          "Participate in the Daily Scrum."
        ],
        "correctAnswer": 1,
        "explanation": "A key responsibility of the Product Owner during a Sprint is to interact with stakeholders to ensure the team is working on the most valuable items and to provide clarifications to the Developers when needed."
      },
      {
        "id": "q7_13",
        "question": "Which of the following can impact the outcome of the Sprint? (Choose the best two answers)",
        "options": [
          "The number of meetings scheduled outside of the Sprint events.",
          "The number of coffee breaks taken by the team during the Sprint.",
          "The personal preferences of the Scrum Master regarding Sprint goals.",
          "Technical challenges or impediments encountered by the team while working on Sprint backlog items.",
          "The weather conditions during the Sprint.",
          "Changes in requirements or priorities communicated to the team during the Sprint."
        ],
        "correctAnswer": [3, 5],
        "explanation": "Changes in requirements during a Sprint can alter existing priorities, while technical challenges can delay progress. Both can significantly impact the Sprint's outcome. Other factors listed are generally less relevant to the work being done."
      },
      {
        "id": "q7_14",
        "question": "What would be the main benefits of self-management? (Choose the best answer)",
        "options": [
          "Increased capacity, accuracy of estimates, output.",
          "Increased creativity, self-accountability, commitment.",
          "Increased rule compliance, self-accountability, output.",
          "Increased rule compliance, self-accountability, commitment."
        ],
        "correctAnswer": 1,
        "explanation": "Self-management empowers team members, leading to greater ownership, accountability, and commitment. This autonomy fosters a sense of pride in their work, boosting creativity, motivation, and morale, which in turn leads to better outcomes."
      },
      {
        "id": "q7_15",
        "question": "Diversity and inclusion are essential aspects of fostering a positive and productive work environment. How can a Scrum Master contribute to promoting diversity and inclusion within the Scrum team? (Choose the best answer)",
        "options": [
          "Foster an environment where everyone's perspectives and contributions are valued and respected, creating a sense of belonging and empowerment among team members.",
          "Encourage team members to conform to a single way of thinking and working, stifling creativity and innovation within the team.",
          "Exclude team members from certain activities based on their background or identity, perpetuating discrimination and marginalization within the team.",
          "Implement policies that prioritize hiring individuals from specific demographic groups, potentially leading to tokenism and reinforcing existing biases.",
          "Allow discrimination and bias to go unaddressed within the team, undermining trust and collaboration among team members."
        ],
        "correctAnswer": 0,
        "explanation": "A Scrum Master promotes diversity and inclusion by fostering an environment where all perspectives are valued. This creates a sense of belonging and empowerment, which promotes collaboration, innovation, and creativity. The other options perpetuate discrimination or stifle creativity."
      },
      {
        "id": "q7_16",
        "question": "Scrum is used in a way to ensure transparency. Team members work together while participating in various events to improve communications. Which of the following may improve communications in Scrum? (Choose all that apply)",
        "options": [
          "Release Planning",
          "Sprint Retrospective",
          "Daily Scrum",
          "Sprint Review",
          "Integration Sprints"
        ],
        "correctAnswer": [1, 2, 3],
        "explanation": "Daily Scrums, Sprint Reviews, and Sprint Retrospectives are all formal Scrum events designed to improve communication by providing opportunities for inspection, adaptation, and collaboration among team members and stakeholders."
      },
      {
        "id": "q7_17",
        "question": "An organization has just hired you as a new Scrum Master to help them transform their teams from their current traditional process to Scrum. The teams are currently structured to specialize in a single function (component teams). You've introduced the concept of cross-functional teams. What should you keep in mind when transitioning from siloed teams to cross-functional teams? (Choose the best two answers)",
        "options": [
          "Newly formed teams will need time to stabilize before reaching their peak performance. During the initial stages of forming, performance will suffer and productivity may be low. However, there are still chances that the delivery of business value will increase.",
          "Without featured teams, you cannot do a Scrum. Postpone Scrum adoption until the teams are reorganized in featured teams.",
          "People from different layers and components will need time to become accustomed to working and delivering unified functionality together as one Scrum team thus productivity may suffer.",
          "It is easier to compare the performance between cross-functional teams in order to decide which teams to assign tasks to and which teams need additional coaching."
        ],
        "correctAnswer": [0, 2],
        "explanation": "Forming a new team takes time. According to Tuckman's model (Forming, Storming, Norming, Performing), newly formed teams will experience a dip in productivity as they learn to work together. It's important to allow for this stabilization period."
      },
      {
        "id": "q7_18",
        "question": "A team is working in bi-weekly Sprints. Given the dynamic nature of the project and evolving stakeholder needs, how often should the Scrum Master decide to measure customer satisfaction? (Choose the best two answers)",
        "options": [
          "It is unnecessary to measure customer satisfaction in a Scrum project, as long as the team is following the Scrum framework.",
          "Customer satisfaction should be measured at regular intervals, such as after each Sprint Review or release, to gather timely feedback.",
          "Customer satisfaction assessments should only occur at the end of the project for a comprehensive overview.",
          "The Scrum Master should solely rely on anecdotal feedback from team members to assess customer satisfaction.",
          "The Scrum Master should facilitate regular discussions with stakeholders to gauge their satisfaction throughout the project."
        ],
        "correctAnswer": [1, 4],
        "explanation": "Regular measurement of customer satisfaction is crucial. Gathering feedback at intervals like the Sprint Review and facilitating ongoing discussions with stakeholders allows the team to identify areas for improvement and make timely adjustments, ensuring alignment with stakeholder expectations."
      },
      {
        "id": "q7_19",
        "question": "At the beginning of a Sprint, the Developers don't have the tools and infrastructure needed to complete the current Sprint Backlog Items. What two things are the LEAST appropriate for the Scrum Master to do? (Choose the best two answers)",
        "options": [
          "The Increment for the current Sprint will focus on delivering infrastructure and tool acquisition.",
          "Improve communication between the Product Owner and Developers in order to establish a plausible Sprint Goal and a proper Definition of Done.",
          "Help the Developers get tools and improve infrastructure while Definition of Done is adapted accordingly.",
          "Talk with the Product Owner in order to accept partially done Increments."
        ],
        "correctAnswer": [0, 3],
        "explanation": "Accepting partially done Increments and focusing a Sprint solely on acquiring tools are least appropriate because Scrum requires a valuable, usable Increment each Sprint. Infrastructure and tools should be acquired gradually. The focus should be on delivering value, not just setup."
      },
      {
        "id": "q7_20",
        "question": "The Scrum Master is responsible for the process in which Scrum is adopted and enacted.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0,
        "explanation": "The Scrum Master is responsible for ensuring that Scrum is understood, implemented correctly, and continuously improved within the organization, making them accountable for the Scrum process adoption and execution."
      },
      {
        "id": "q7_21",
        "question": "In a newly formed team, the members are new and Harry, the Scrum Master, is finding it hard to ensure that everyone trusts each other. Which Scrum Value is impacted by trust? (Choose all that apply)",
        "options": [
          "Courage",
          "Being Agile.",
          "Openness & Focus",
          "Commitment",
          "Inspection, Adaptation.",
          "Respect"
        ],
        "correctAnswer": [0, 2, 3, 5],
        "explanation": "Without trust, team members will have difficulties acting and behaving in ways that reflect all the Scrum Values: Courage, Openness, Focus, Commitment, and Respect. 'Being Agile' and 'Inspection, Adaptation' are principles/pillars, not Scrum Values."
      },
      {
        "id": "q7_22",
        "question": "If burndown charts are used to visualize progress, what does a trendline through a release burndown chart indicate? (Choose the best answer)",
        "options": [
          "The evolution of the return of investment on the project.",
          "When the project will be over if the Product Owner removes work that is equal in effort to any new work that is added.",
          "When the work remaining is projected to be completed if nothing changes on the Product Backlog or Developers'.",
          "When all work will be completed so the Scrum team can start working on a new Product Backlog."
        ],
        "correctAnswer": 2,
        "explanation": "The trendline on a burndown chart is based on the team’s average velocity and projects when the remaining work will be completed, assuming the team's velocity and the backlog remain constant. It's a forecasting tool for the Developers to self-manage."
      },
      {
        "id": "q7_23",
        "question": "A Scrum team has been formed and the Technical leader has left on holiday while being in the middle of a Sprint. During his absence, who is responsible for managing the tasks of the Sprint? (Choose the best answer)",
        "options": [
          "The Product Owner.",
          "The Project Manager.",
          "The Developers.",
          "The Team Leader",
          "The Scrum Master."
        ],
        "correctAnswer": 2,
        "explanation": "In Scrum, the team is self-organizing. In the absence of a technical leader, the Developers should collectively manage the Sprint's tasks, distributing responsibilities and collaborating to ensure the Sprint progresses smoothly and its goals are met."
      },
      {
        "id": "q7_24",
        "question": "Steven is a Scrum Master of a Scrum team that is new to Scrum. Halfway through the Sprint, the Product Owner mentions to Steven that he is concerned the Developers will not be able to complete the entire Sprint Backlog by the end of the Sprint. What should Steven do in this situation? (Choose the best answer)",
        "options": [
          "Motivate the Developers to meet their commitment to the Product Owner.",
          "Add more Developers to the Scrum team to meet the Product Owner’s expectations.",
          "Coach the Product Owner that with complex software development, you cannot promise the entire scope that was forecast during Sprint Planning. As more is learned during the Sprint, work may emerge that affects the Sprint Backlog.",
          "Advise the Product Owner that the Developers own the Sprint Backlog and it is up to them to meet their commitments. No one tells the Developers how to turn the Product Backlog into Increments of potentially releasable functionality."
        ],
        "correctAnswer": 2,
        "explanation": "This approach aligns with Scrum's principles of flexibility and adaptability. It coaches the Product Owner on the nature of complex development, where the Sprint Backlog is a forecast, not a rigid commitment. This fosters transparency and realistic expectations."
      },
      {
        "id": "q7_25",
        "question": "How can a second Product Owner support the first one when an organization has multiple Scrum teams working on the same product? (Choose the best three answers)",
        "options": [
          "They should independently manage a separate Product Backlog without coordination with the first Product Owner.",
          "They can assist in managing the Product Backlog, ensuring that it reflects the overall vision and goals of the product.",
          "The second Product Owner can collaborate closely with the first one to share insights and align priorities across the teams.",
          "The second Product Owner should compete with the first one to assert control over the product development process.",
          "The second Product Owner can facilitate communication and coordination among the Scrum teams to ensure consistency and alignment in product development efforts.",
          "The second Product Owner can bypass the first one and make unilateral decisions regarding the product direction and priorities."
        ],
        "correctAnswer": [1, 2, 4],
        "explanation": "A second Product Owner can enhance collaboration by assisting with Product Backlog management, aligning priorities across teams, and facilitating communication. It is crucial to avoid competition or unilateral decision-making, as this can lead to confusion and inefficiency."
      },
      {
        "id": "q7_26",
        "question": "A Scrum team has six members in total: four who work full-time in the office and two who work part-time at home. The team is arguing that synchronization each day is too difficult and has suggested that the Daily Scrum should be held every other day instead. What three main issues would arise if the Daily Scrum was held less frequently? (Choose the best three answers)",
        "options": [
          "Impediments would be raised and resolved slower.",
          "The Product Owner would not accurately inspect the utilization of the individual team members.",
          "Opportunities to inspect and adapt the Sprint Backlog would be reduced.",
          "Less information regarding progress would be shared as this would cause the Sprint plan to become inaccurate and reduce transparency over progress toward the Sprint Goal.",
          "The Scrum Master would lose the ability to update the burndown chart adequately."
        ],
        "correctAnswer": [0, 2, 3],
        "explanation": "Holding the Daily Scrum less frequently reduces communication, leading to slower issue resolution, fewer opportunities to adapt the plan, and decreased transparency. This can result in reduced adaptability and a higher risk of not meeting the Sprint Goal."
      },
      {
        "id": "q7_27",
        "question": "A company has recently moved to new facilities as they have hired 38 more Developers. Where should the Daily Scrum be held? (Choose the best answer)",
        "options": [
          "Wherever the Developers decide is most suitable.",
          "In the same location where the Developers are seated.",
          "Wherever the Scrum Master decides is best.",
          "In front of the Scrum board.",
          "In a room where the management can attend."
        ],
        "correctAnswer": 0,
        "explanation": "The Daily Scrum is an event for the Developers. They are a self-managing team and are therefore responsible for deciding the most effective location and logistics for their daily meeting to ensure it is productive and valuable."
      },
      {
        "id": "q7_28",
        "question": "A new Scrum team has just been formed and the Product Owner is not certain whether he should extend the Sprint or not. There are no functional items being delivered and the rest of them are not properly tested. What could be a reason for a Product Owner to delay the start of a new Sprint after the conclusion of the previous Sprint? (Choose the best answer)",
        "options": [
          "The QA team has not finished testing the previous Increment before declaring it ready to ship.",
          "There’s not enough work in the Product Backlog to work on in the upcoming Sprint.",
          "The Product Owner needs additional time to identify the next initiatives.",
          "There is no acceptable reason. A new Sprint starts immediately after the conclusion of the previous Sprint.",
          "The stakeholders were disappointed with the Increment produced in the previous Sprint."
        ],
        "correctAnswer": 3,
        "explanation": "The Scrum Guide states that a new Sprint starts immediately after the conclusion of the previous one. This maintains momentum and a consistent rhythm, promoting continuous improvement and adaptability. There is no provision for a delay between Sprints."
      },
      {
        "id": "q7_29",
        "question": "Three Scrum teams are currently building a single product and pulling work from the same Product Backlog. All three teams have identified that they will need Kareem, a database specialist, to work full time in their team for the next several Sprints. What should Steven, the Scrum Master, do to solve this potential problem? (Choose the best answer)",
        "options": [
          "Ask Kareem to work with the HR department to recruit and hire additional database specialists. In the meantime, have the Product Owner move items that do not depend on Kareem to the top of the Product Backlog.",
          "Manage the items in the Sprint Backlogs so that Kareem can be utilized evenly for each team.",
          "Coach the Scrum teams to self-manage this issue and help them implement their preferred solution.",
          "Assign Kareem to the team with the most urgent tasks first and then move him to the next team and so on until the required support is completed."
        ],
        "correctAnswer": 2,
        "explanation": "The Scrum Master's role is to coach the teams to be self-managing. He/she can facilitate conversations and ask coaching questions to help the team members arrive at the best possible decision, but should not solve the problem for them."
      },
      {
        "id": "q7_30",
        "question": "Steven, the Scrum Master, is approached by one of the Developers who mentioned that they are not completing regression tests for all of the work they are performing to the level defined in the Definition of Done. They discussed this with the Product Owner and decided to remove regression testing from the Definition of Done. Which two actions are the most appropriate for Steven to take? (Choose the best two answers)",
        "options": [
          "Ask the Developers and the Product Owner if they are still able to produce potentially shippable product Increments by altering the Definition of Done.",
          "Reject the decision. The long-term maintainability of the product will be negatively impacted by modifying the Definition of Done.",
          "Accept the decision for the reason that a mutual agreement has been made between the Developers and the Product Owner.",
          "Ask the Developers and the Product Owner what problem they are trying to solve by altering the Definition of Done and removing the regression testing from it. Ask coaching questions like \"in what ways will this decision impact transparency and quality?\""
        ],
        "correctAnswer": [0, 3],
        "explanation": "The Scrum Master should ask coaching questions to help the team understand the impact of their decision on transparency and quality. He does not approve or reject decisions but ensures the team stays within the Scrum framework and considers the consequences of their actions."
      },
      {
        "id": "q7_31",
        "question": "Three Scrum teams are trying to determine the most appropriate length for their Sprint. Which factors are best considered when defining the Sprint length? (Choose the best answer)",
        "options": [
          "The level of expertise over the technology to be used, the ability to release an Increment to the end users, and the risk of being disconnected from the stakeholders.",
          "Having a consistent Sprint length across all Scrum teams.",
          "How often the team size changes."
        ],
        "correctAnswer": 0,
        "explanation": "The purpose of each Sprint is to deliver a potentially releasable Increment. Therefore, factors like technical expertise, the ability to release, and the need for stakeholder feedback are crucial in determining the optimal Sprint length. Most companies use 2-week Sprints."
      },
      {
        "id": "q7_32",
        "question": "What are the typical Scrum Master activities during a Sprint? (Choose the best two answers)",
        "options": [
          "To set deadlines for completing Sprint tasks.",
          "To cause the removal of impediments to the Scrum team’s progress.",
          "To coach the Scrum Team on Scrum principles and practices.",
          "To manage the Product Backlog and prioritizing user stories.",
          "To avoid conflicts and escalate to the line managers if conflicts occur.",
          "To monitor the progress of the Developers and assign tasks."
        ],
        "correctAnswer": [1, 2],
        "explanation": "During a Sprint, the Scrum Master focuses on facilitating the Scrum process, ensuring adherence to its principles, helping remove impediments, and empowering the team to self-organize and make decisions collaboratively."
      },
      {
        "id": "q7_33",
        "question": "A Scrum Master teaches those who are interested in the Developers' progress that progress in Scrum comes from inspecting an Increment during the Sprint Review.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 1,
        "explanation": "Inspecting the Increment is the primary measure of a Scrum Team's progress. The Product Owner typically has the best view on the value delivered, which is discussed and demonstrated during the Sprint Review."
      },
      {
        "id": "q7_34",
        "question": "During Sprint Planning, there's a heated debate among team members regarding the prioritization of user stories. Some argue for focusing solely on delivering features that directly impact revenue, while others advocate for addressing technical debt to ensure long-term sustainability. As the Scrum Master, how would you address this situation, considering Scrum values? (Choose the best answer)",
        "options": [
          "Suggest delaying Sprint Planning until the team reaches a consensus, potentially impacting Sprint goals and delivery timelines.",
          "Delegate the decision-making process to the Product Owner, undermining the collaborative spirit of the Scrum team.",
          "Dictate the prioritization based on personal preferences, disregarding team input.",
          "Ignore the conflict and proceed with the Sprint Planning, risking unresolved tension and compromised team morale.",
          "Facilitate a discussion to understand each team member's perspective and encourage collaboration to find a solution that balances short-term revenue goals with long-term sustainability."
        ],
        "correctAnswer": 4,
        "explanation": "Facilitating a discussion aligns with the Scrum value of Commitment by promoting teamwork to address conflicting priorities. It encourages open communication and respects diverse viewpoints, fostering a solution-oriented approach that balances both short-term and long-term goals."
      },
      {
        "id": "q7_35",
        "question": "An organization has hired Steven to be the Scrum Master of three new teams that will work on the initial release of a new product using Scrum. Steven advises the group on how to get started with Scrum. What are the first two things Steven should recommend? (Choose the best two answers)",
        "options": [
          "Three Product Owners, one for each Scrum team.",
          "One Product Backlog to represent all of the known work needed to be done for the product.",
          "Having one Product Owner be accountable for maximizing value flow throughout the development process and providing transparency on the overall progress.",
          "Each Scrum team has its Product Backlog with items only their team will be working on."
        ],
        "correctAnswer": [1, 2],
        "explanation": "The Scrum Master serves the organization by leading and coaching its Scrum adoption. This includes planning implementations and helping stakeholders understand empirical product development. A single Product Backlog and a single Product Owner for one product are fundamental to this process."
      }
    ]
  },
  {
      "id": "psm-ii-mock-8",
    "title": "PSM II Mock Exam #8",
    "description": "Professional Scrum Master Level II practice exam #8 based on provided content.",
    "timeLimit": 90,
    "passingScore": 85,
    "questions": [
      {
        "id": "q8_1",
        "question": "Why is it important that there is only one Product Owner per product? (Choose the best answer)",
        "options": [
          "The Scrum Master knows who will be his back-up whenever he is unavailable, it saves the organization time and money, and the Developers know who to request tasks from.",
          "It is clear who is accountable for the ultimate success of the product, the Developers always know who determines priorities, and it helps avoid barriers for effective communication and rapid decision-making.",
          "It isn't important as multiple Product Owners can easily share a single Product Backlog."
        ],
        "correctAnswer": 1,
        "explanation": "When working on a single product with multiple teams, only one Product Owner is required. A product is a living artifact that represents customer needs. Having one Product Owner creates the transparency required for proper empiricism."
      },
      {
        "id": "q8_2",
        "question": "As a Scrum Master, what actions would you take upon receiving notification from the finance department that the project has depleted its funding, necessitating the cessation of Developer work starting next month? (Choose the best two answers)",
        "options": [
          "Collaborate with the Product Owner and stakeholders to reassess project priorities and identify essential work that can be completed within the remaining budget.",
          "Ignore the notification and continue with the current scope of work, hoping that funding will magically appear.",
          "Suggest downsizing the team or laying off Developers to reduce costs and prolong the project timeline.",
          "Blame the finance department for the budget shortfall and seek to shift responsibility elsewhere.",
          "Encourage the Developers to work overtime to expedite project completion before the funding runs out.",
          "Initiate discussions with the finance department and management to explore options for securing additional funding or reallocating resources to sustain the project."
        ],
        "correctAnswer": [0, 5],
        "explanation": "The correct answers focus on proactive and collaborative approaches to address the funding issue. Collaborating with the Product Owner and stakeholders allows the team to reprioritize work and focus on essential tasks that can be completed within the remaining budget. Initiating discussions with the finance department demonstrates proactive efforts to explore options for securing additional funding or reallocating resources to sustain the project."
      },
      {
        "id": "q8_3",
        "question": "Who is responsible for ensuring that Product Backlog items are sufficiently understood and complete when developers of a Scrum team argue that certain items lack clarity or are incomplete? (Choose the best answer)",
        "options": [
          "The Scrum Master.",
          "The Business Analyst.",
          "The Product Owner.",
          "The Developers."
        ],
        "correctAnswer": 2,
        "explanation": "The responsibility for ensuring that Product Backlog items are well understood to the necessary extent lies primarily with the Product Owner. It is the Product Owner's role to work closely with stakeholders to clarify requirements, prioritize backlog items, and ensure that they are sufficiently detailed and understood by the development team. However, the development team also shares responsibility by actively seeking clarification when needed."
      },
      {
        "id": "q8_4",
        "question": "What is management’s role in Scrum? (Choose the best answer)",
        "options": [
          "Management is solely responsible for setting Sprint goals and priorities without input from the Scrum Team, focusing solely on meeting organizational objectives.",
          "Identifying and removing people that are performing poorly.",
          "Monitoring skill levels of the Developers.",
          "To provide the necessary environment and support as outlined in the Scrum Guide by providing insights and resources that aid Scrum teams in their progress.",
          "Monitoring the velocity of the Developers."
        ],
        "correctAnswer": 3,
        "explanation": "In Scrum, management's role shifts from traditional command-and-control to one of support and empowerment. They are responsible for creating an environment where Scrum teams can thrive by providing resources, removing impediments, and supporting the team's self-organization."
      },
      {
        "id": "q8_5",
        "question": "Doing your best and helping other Scrum team members demonstrates which of the following? (Choose the best answer)",
        "options": [
          "Increased Profit",
          "Value of Commitment",
          "High Performance",
          "Maximizing utilization",
          "Increased Revenue"
        ],
        "correctAnswer": 1,
        "explanation": "In the Scrum framework, commitment refers to the dedication of each team member to achieve the Sprint's goals and deliver value. By exerting their best efforts and supporting teammates, individuals show their commitment to the team's success."
      },
      {
        "id": "q8_6",
        "question": "Kush, a Scrum Master, is approached by the Developers complaining that one of the senior engineers is using too much time during the Daily Scrums to share technical solutions. Which are the best two actions for Steven to take? (Choose the best two answers)",
        "options": [
          "Suggest using a token to limit who is allowed to speak during the Daily Scrum.",
          "Contact the team member’s direct manager to resolve the issue",
          "Coach the developers to help them find a solution to the problem and take ownership of the solution as a group.",
          "Speak with the person privately and coach him on the purpose of the Daily Scrum.",
          "Suggest that the team members timebox the amount of time each person can speak at the Daily Scrum to a maximum of two minutes."
        ],
        "correctAnswer": [2, 3],
        "explanation": "The Scrum Master helps the Scrum team focus on creating high-value Increments. This includes coaching team members in self-management and ensuring Scrum events are productive. Speaking privately to the individual and coaching the team to solve the problem themselves are the most appropriate actions."
      },
      {
        "id": "q8_7",
        "question": "Toby is a Scrum Master who was hired to assist an organization that is new to Scrum in understanding and implementing Scrum effectively. Which of the following three activities would be acceptable? (Choose the best three answers)",
        "options": [
          "Educate stakeholders and clients about Scrum.",
          "Scheduling formal trainings.",
          "Requiring all teams in the organization to start using Scrum as soon as possible.",
          "Extending Retrospectives to include formal training.",
          "Penalizing any Scrum team members not staying within the Scrum Framework.",
          "Arranging one-on-one coaching sessions to discuss any identified concerns."
        ],
        "correctAnswer": [0, 1, 5],
        "explanation": "Acceptable activities for a Scrum Master in this scenario include arranging one-on-one coaching sessions, scheduling formal trainings, and educating stakeholders and clients about Scrum principles to ensure alignment and understanding across the organization."
      },
      {
        "id": "q8_8",
        "question": "As a Scrum Master, how would you respond to upper management's discovery that 80% of the work is being delivered by only 2 out of the 7 Developers on the team? (Choose the best two answers)",
        "options": [
          "Advocate for measures to redistribute workload and foster collaboration among team members to ensure a more equitable distribution of work.",
          "Facilitate discussions within the team to identify the root causes of the uneven workload distribution and work collaboratively to address them.",
          "Implement a performance-based incentive system to motivate the Developers to increase their productivity.",
          "Shift the workload further onto the two most productive Developers to maintain the current pace of delivery.",
          "Suggest terminating the employment of the less productive Developers.",
          "Ignore the issue, as it may resolve itself over time."
        ],
        "correctAnswer": [0, 1],
        "explanation": "The correct answers focus on addressing the underlying causes of the workload imbalance and promoting collaboration. Advocating for workload redistribution and facilitating team discussions to identify root causes are effective approaches. Ignoring the issue or resorting to punitive measures can damage team morale."
      },
      {
        "id": "q8_9",
        "question": "Who is accountable for engaging with stakeholders? (Choose the best answer)",
        "options": [
          "The Developers",
          "The Team Leader",
          "The Project Manager",
          "The Product Owner",
          "The Business Analyst"
        ],
        "correctAnswer": 3,
        "explanation": "The Product Owner is responsible for engaging with stakeholders. This involves gathering feedback, understanding their needs, communicating the product vision, and ensuring their input is considered in the Product Backlog."
      },
      {
        "id": "q8_10",
        "question": "What would likely happen if management only changed the organization’s current terminology to fit Scrum without the proper understanding and support of Scrum as defined in the Scrum Guide? (Choose all that apply)",
        "options": [
          "Everyone would feel positive to change, as the risk would be reduced.",
          "Very little change will happen as management do not understand the vocabulary in Scrum and the way it should be implemented.",
          "Organizations may feel less stressed as the behaviors would remain familiar to management.",
          "Everyone will be very excited to start with the new change.",
          "The organization may not realize the real benefits of Scrum as there would be no real change on the way the teams work."
        ],
        "correctAnswer": [1, 2, 4],
        "explanation": "The defined terminology in Scrum was selected and defined specifically for supporting the Scrum Framework. Simply changing titles without understanding the underlying principles will result in little real change, familiar (but ineffective) behaviors, and a failure to realize the benefits of Scrum."
      },
      {
        "id": "q8_11",
        "question": "Developers have been complaining about Chris to Steven, the Scrum Master. Chris is the most knowledgeable about the system they're constructing. He frequently criticizes team members' design and architectural decisions, making them feel bad. What are two good ways for Steven to address this problem? (Choose the best two answers)",
        "options": [
          "Steven observes whether this topic is raised at the Sprint Retrospective. If not, he then checks with the team on how comfortable they are with the way the design and architecture are being handled.",
          "Steven takes the time between Sprints to organize a team building session to build a stronger relationship.",
          "Steven shares his concerns with Chris and the impact on the other team members and that he should be a team player.",
          "Steven suggests helping them in self-management, and if requested, Steven could facilitate a session with the entire team to assist in the resolution of the problem.",
          "Steven tells the concerned members that Chris’ opinions should be respected as he has the most experience and understands what is best for long term sustainability."
        ],
        "correctAnswer": [0, 3],
        "explanation": "The Scrum Master should cause the removal of impediments, not necessarily remove them himself. Conflicts are natural, and the Scrum Master should coach the team on resolving them. Observing the team's interactions and facilitating a discussion if requested are appropriate, empowering actions."
      },
      {
        "id": "q8_12",
        "question": "Over the course of several Sprints, the relationship between the Product Owner and the Developers has suffered. The Developers are not happy with the Product Owner for constantly changing the upcoming items of the product. The Product Owner is not happy as well with the Developers for changing the work that needs to be done during the Sprint. What should Steven, the Scrum Master, do? (Choose the best answer)",
        "options": [
          "The Scrum Master’s responsibility is to ensure the Developers have a stable velocity. Any changes that negatively impact the team’s velocity will be rejected by the Scrum Master.",
          "Explain to the Developers that the Product Owner is accountable for the flow of value and needs to be followed in order to maximize the value delivered.",
          "Organize a team-building session between Sprints to help rebuild the relationship.",
          "During the Sprint Retrospective, ask the Product Owner and the Developers to address the issues. Have the team discuss why the changes occur and what impact they have on the value of the product."
        ],
        "correctAnswer": 3,
        "explanation": "The Sprint Retrospective is the dedicated event for the Scrum Team to inspect itself and create a plan for improvements. Facilitating a discussion there allows the team to address the conflict, understand the impacts of their actions, and collaboratively find a solution."
      },
      {
        "id": "q8_13",
        "question": "A Scrum team has 11 members. Deepak is the Scrum Master and Socrates is the Product Owner. Socrates is really busy and most of the time he is not joining the Sprint Planning and Product Backlog refinement. Developers can't understand why the Sprint is valuable. Why? (Choose all that apply)",
        "options": [
          "Because the entire Scrum team was not present to collaborate and define a Sprint Goal that explains why the Sprint is valuable to stakeholders.",
          "Because the Scrum Master didn't explain to the Developers how valuable the Sprint is.",
          "Because Socrates was not present to suggest how the product's value and utility could be increased in the Sprint with the upcoming work.",
          "Because the size of the team is too big."
        ],
        "correctAnswer": [0, 2],
        "explanation": "The Product Owner proposes how the product's value can be increased in the Sprint. The entire Scrum Team, including the Product Owner, then collaborates to define a Sprint Goal. Without the Product Owner's input and full team collaboration, the purpose and value of the Sprint can become unclear."
      },
      {
        "id": "q8_14",
        "question": "Kashif is a Scrum Master coaching his team about Sprint Goals. Which statement is misleading regarding Sprint Goals? (Choose the best three answers)",
        "options": [
          "If it doesn't seem achievable, the Developers have the courage to tell the Product Owner.",
          "The Product Owner respects the Developers' opinion on whether they can achieve it.",
          "Sprint Goals are not stable throughout the Sprint.",
          "It is only a forecast and changes during the Sprint as more is learned.",
          "The Scrum team discusses openly alternative ways to reach it.",
          "Sprint Goals should be vague and open-ended to allow for flexibility and exploration during the Sprint."
        ],
        "correctAnswer": [2, 3, 5],
        "explanation": "Sprint Goals are a commitment and should be stable during the Sprint to provide focus; they are not just a forecast that changes frequently. They should also be specific and measurable, not vague. The other statements reflect healthy team dynamics around the Sprint Goal."
      },
      {
        "id": "q8_15",
        "question": "In order to start the first Sprint, Scrum only requires a Product Owner with enough ideas, Developers to execute on those ideas, and a Scrum Master to guide the process.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0,
        "explanation": "In complex domains, knowledge comes from experience (empiricism). New knowledge emerges as work is done. It is not necessary to have a fully defined Product Goal or plan to start. The basics—a Product Owner with ideas, a team to execute, and a Scrum Master to guide—are sufficient to begin."
      },
      {
        "id": "q8_16",
        "question": "A Scrum team has been working on a product for several iterations and has an average velocity of 55 units of work per Sprint. A second team will be added to work on the same product. What might be the impact on the original team? (Choose the best answer)",
        "options": [
          "Their velocity will most likely rise and be more than 55.",
          "Their velocity will most likely not be affected and will remain at 55.",
          "Their velocity will most likely drop and be less than 55."
        ],
        "correctAnswer": 2,
        "explanation": "Adding a new team will likely cause a short-term drop in the original team's productivity. This is due to the overhead of onboarding, increased coordination, and the time it takes for the new larger group to go through the stages of team formation (Forming, Storming, Norming, Performing)."
      },
      {
        "id": "q8_17",
        "question": "During the implementation of a Sprint Backlog item, there is a disagreement among team members about what work is required to make the item 'done.' Toby, the Scrum Master, notices a debate forming. What is the best course of action for Toby? (Choose the best answer)",
        "options": [
          "Coach all members on the Scrum team to self-manage and help them resolve the conflict, refine the Definition of Done, and become effective again. Tell the team that conflicts are a natural occurrence and coach them on the value of resolving conflicts.",
          "Bring in the Product Owner and have him or her decide how much work is needed to get the item to meet the Definition of Done. It is the Product Owner’s responsibility to manage the Developers.",
          "Immediately end the discussion before it becomes worse. Make the decision on what work is needed to make the item ‘done’ and teach the team about the importance of avoiding conflicts.",
          "Bring the Developers together and interpret the Definition of Done for them so that there are no future conflicts on interpretation."
        ],
        "correctAnswer": 0,
        "explanation": "The Scrum Master's role is to foster a supportive and collaborative environment and help the team become more effective. Coaching the team to self-manage the conflict and use it as an opportunity to refine their shared understanding (the Definition of Done) is the most appropriate action."
      },
      {
        "id": "q8_18",
        "question": "Peter, a Project Manager, has raised concerns about your Scrum team’s productivity and progress towards the objectives. Which is the best way to respond to Peter’s concerns? (Choose the best answer)",
        "options": [
          "Show the Profit & Loss (P&L) report.",
          "Share the Product Backlog as well as the release date projections with Peter and make sure he has access.",
          "Share the last stakeholder status report prepared by the Scrum Master.",
          "Share the current impediments."
        ],
        "correctAnswer": 1,
        "explanation": "Transparency is a key pillar of Scrum. Sharing the Product Backlog and any release forecasts provides a clear and transparent view of the team's progress and plans, which helps manage stakeholder expectations effectively."
      },
      {
        "id": "q8_19",
        "question": "Which three statements best describe the purpose of having a Definition of Done? (Choose the best three answers)",
        "options": [
          "It creates transparency and provides a common understanding of the ‘done’ state of the Increment at the Sprint Review.",
          "As the Developers are doing the work, it provides guidance on the remaining work needed to create the potentially shippable Increment by the end of the Sprint.",
          "It helps the Developers defer any pending work to subsequent Sprints.",
          "It helps the Scrum team decide how much time is needed before the Sprint can end.",
          "It provides guidance to the Developers when they are forecasting their Sprint Backlog during the Sprint Planning.",
          "It is a checklist to monitor the progress of the Developers on a task."
        ],
        "correctAnswer": [0, 1, 4],
        "explanation": "The Definition of Done is a shared understanding of what it means for work to be complete. It creates transparency for the Sprint Review, guides the Developers during the Sprint on what is needed to create a shippable Increment, and helps them forecast what they can achieve during Sprint Planning."
      },
      {
        "id": "q8_20",
        "question": "Despoina, the Product Owner, has been giving positive recognition to individual Developers who have moved their work to \"Done\" during the Daily Scrum. She wants to ensure the team is adhering to the ideal guideline on the burndown chart. What would be two valid actions for Ali, the Scrum Master, to take? (Choose the best two answers)",
        "options": [
          "Nothing. Ali is optional at the Daily Scrum and it is the responsibility of the Developers to decide how to best run it.",
          "Ali coaches the Scrum Team on the Daily Scrum's purpose.",
          "Ali instructs Despoina on how to update the burndown chart properly, as it provides accurate information on the team's performance.",
          "Ali talks with Despoina about concerns of how her behavior might impact the team members."
        ],
        "correctAnswer": [1, 3],
        "explanation": "The Scrum Master is responsible for ensuring Scrum is understood and enacted. Coaching the team on the purpose of the Daily Scrum (which is for the Developers to plan, not a status report) and talking to the Product Owner about how her behavior might be affecting team dynamics are both appropriate actions to maximize the value of the event."
      },
      {
        "id": "q8_21",
        "question": "Successful use of Scrum depends on how well people behave and act in ways that reflect the Scrum Values. What can the value of openness affect? (Choose all that apply)",
        "options": [
          "Level of product quality.",
          "Time to market.",
          "Collaboration efforts.",
          "Team member happiness & trust from stakeholders.",
          "Market conditions."
        ],
        "correctAnswer": [0, 1, 2, 3],
        "explanation": "The value of openness, where the team and stakeholders agree to be open about all work and challenges, can affect collaboration, trust, quality, and time to market. It fosters an environment where issues are surfaced and addressed quickly. Market conditions are an external factor, not directly affected by this value."
      },
      {
        "id": "q8_22",
        "question": "A Product Backlog item in the Sprint Backlog does not meet the team's Definition of Done by the end of the Sprint. What should be done with the item? (Choose the best two answers)",
        "options": [
          "Split the item and add the completed work estimation to the current Sprint so that velocity is not impacted, and add the 'undone' work to the next Sprint.",
          "Do not include the item in the Increment for the Sprint.",
          "Estimate the remaining work needed to make it ‘done’ and add it to the Product Backlog for the Product Owner to decide what to do with it.",
          "It will be inspected during the Sprint Review, and if the stakeholders approve, it will be included in the Increment."
        ],
        "correctAnswer": [1, 2],
        "explanation": "An Increment must be 'Done' to be included in the Sprint Review. If an item is not 'Done', it cannot be part of the Increment. The unfinished work should be re-estimated and returned to the Product Backlog for the Product Owner to re-prioritize."
      },
      {
        "id": "q8_23",
        "question": "What is the most effective approach for forming teams in Scrum? (Choose the best two answers)",
        "options": [
          "Developers self-manage and form teams within defined boundaries.",
          "Organizational boundaries are considered when forming the teams.",
          "The Product Owner creates a skills matrix and allocates resources to teams.",
          "The leadership team allocates members to teams based on skills, seniority, and experience."
        ],
        "correctAnswer": [0, 1],
        "explanation": "The most effective approach is to allow teams to self-organize within organizational boundaries and guidelines. This fosters accountability and commitment. While considering organizational realities is necessary, a top-down allocation by leadership or a single Product Owner is less effective than allowing the team to self-manage its formation."
      },
      {
        "id": "q8_24",
        "question": "What are the three pillars of empirical process control? (Choose the best answer)",
        "options": [
          "Respect for people, Kaizen, Eliminating Waste",
          "Inspection, Transparency, Adaptation",
          "Planning, Inspection, Adaptation",
          "Planning, Demonstration, Retrospective"
        ],
        "correctAnswer": 1,
        "explanation": "Inspection, Transparency, and Adaptation are the three pillars of empirical process control that form the foundation of the Scrum framework. They foster an environment of continuous improvement and enable teams to respond effectively to change."
      },
      {
        "id": "q8_25",
        "question": "Kashif is a Scrum Master coaching his team about Sprint Goals. Which statement is misleading regarding Sprint Goals? (Choose the best three answers)",
        "options": [
          "Sprint Goals should be vague and open-ended to allow for flexibility and exploration during the Sprint.",
          "Sprint Goals are static and cannot be adjusted or revised throughout the Sprint.",
          "It is only a forecast and changes during the Sprint as more is learned.",
          "If it doesn't seem achievable, the Developers have the courage to tell the Product Owner.",
          "The Product Owner respects the Developers' opinion on whether they can achieve it.",
          "The Scrum team discusses openly alternative ways to reach it."
        ],
        "correctAnswer": [0, 1, 2],
        "explanation": "Sprint Goals should be specific and measurable to provide clear direction. While they are based on a forecast, they are a stable commitment for the duration of the Sprint and should not change frequently, although the plan to achieve them (the Sprint Backlog) can emerge."
      },
      {
        "id": "q8_26",
        "question": "Steven is a Scrum Master asked to assist in creating five new Scrum teams that will be working to build a highly anticipated product. He talks with them about the importance of being able to integrate their Increments by the end of their Sprints. This includes the first Sprints. The product is very important to both the end-users and the organization. Of the choices raised by future team members, what would Steven encourage? (Choose the best answer)",
        "options": [
          "Wait until enough of the infrastructure and architecture is in place before starting the first Sprints. This will increase the success of delivering integrated Increments in Sprint 1.",
          "Each Scrum team delivers functionality at the end of each Sprint. New Product Backlog items will then be added to the next Sprint Backlog to integrate their functionality with the other teams to create a unified Increment.",
          "All Scrum teams agree on a mutual understanding of ‘done’ that defines all work necessary to deliver a potentially shippable Increment that includes all previous Increments delivered for the product.",
          "Each Scrum team delivers Increments in its own code branch. After UAT is performed at the Sprint Review, the code branch is isolated until enough Increments are considered acceptable. All code branches will then be merged during the release phase."
        ],
        "correctAnswer": 2,
        "explanation": "When multiple Scrum Teams work on one product, they must mutually define and comply with the same Definition of Done. This ensures that all work is integrated into a single, potentially shippable Increment at the end of the Sprint, which is crucial for transparency and progress."
      },
      {
        "id": "q8_27",
        "question": "An organization has 15 Scrum teams with 15 Scrum Masters and 15 Product Owners, so each team has a Product Owner and a Scrum Master. A Scrum team must have a Product Owner and a Scrum Master to work effectively when working on a single product. Which one of the following is correct? (Choose the best answer)",
        "options": [
          "True. Both must be full-time members of the Scrum team.",
          "True. Their participation and availability will impact the outcomes produced by the Scrum team.",
          "False. If a Product Owner is unavailable, he/she can be replaced by a Business Analyst.",
          "False. A Scrum Master is only necessary when requested or needed."
        ],
        "correctAnswer": 1,
        "explanation": "A Product Owner or Scrum Master can be part of more than one team. However, their availability and level of participation will directly impact the effectiveness of each team they serve. Consistent engagement is key to good outcomes."
      },
      {
        "id": "q8_28",
        "question": "The Scrum Master is no longer needed when teams become self-managed, because they have the autonomy required to deliver.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "Even when teams are self-managing, the Scrum Master's role remains crucial. They continue to facilitate events, remove impediments, coach the team on continuous improvement, and support the broader organization's understanding and adoption of Scrum."
      },
      {
        "id": "q8_29",
        "question": "You have been hired as a Scrum Master for a company that has been doing business for over fifty years. They have started an initiative to digitize their legacy systems. Your team is responsible for building the back-office platform and integrating all other components. The Scrum teams work in two-week Sprints and are expected to deliver all functionality in six Sprints. During development, the requirements change in the other components and have been slowing down your team’s progress. Because of these changes, your team has estimated that they will not be able to deliver all expected work within the original timeframe. The program manager is upset. As a Scrum Master, what could you do to help the Product Owner? (Choose the best answer)",
        "options": [
          "You shorten your team’s Sprints in order to be ready sooner.",
          "To redefine the possible delivery date, you suggest working with the product owner and the teams to discuss the issue. They might need to re-adjust your team's open Product Backlog items based on the Product Owner's input.",
          "You remove all items from the Product Backlog for which development has forecasted to be beyond the expected date. These are likely to be low value anyhow.",
          "You suggest adding additional Developers to the team in order to increase velocity and meet the original date."
        ],
        "correctAnswer": 1,
        "explanation": "This situation calls for collaboration and transparency. The Scrum Master should facilitate a discussion involving the Product Owner and the teams to address the impact of the changes. This allows for a re-evaluation of priorities and a realistic adjustment of the delivery date, ensuring alignment with the project's goals."
      },
      {
        "id": "q8_30",
        "question": "Paul is a Product Owner for multiple products. Based on the average velocity of a previous release, Paul estimated a new product to take 10 Sprints. Over the first 3 Sprints, the Developers reported an average velocity of 40 (instead of the expected 45) and did not fully complete integration tests. They are unsure if the required velocity is achievable. What is the most effective way to recover? (Choose the best answer)",
        "options": [
          "The Scrum Master sets the open work aside to be performed in one or more release Sprints. They remind Paul that he needs to find funding for enough Release Sprints to complete the remaining work.",
          "The Developers inform Paul that the progress he has perceived to date is not correct. The Increment is not releasable. They give Paul their estimate of the effort it would take to get the previous work ‘done’, and suggest doing that work first before proceeding with new features. The team also re-estimates the effort to make the remaining Product Backlog items ‘done’, including all integration efforts. In the end, it is Paul’s call to continue the project or to cancel.",
          "The Scrum Master will manage the Sprint Backlog and assign work to the Developers to ensure that each one is used to its full potential.",
          "In the next Sprints, the Developers strive to make the selected work as close to the Definition of Done as possible. Any undone work is divided into new Product Backlog Items that will be deferred to the last Sprint."
        ],
        "correctAnswer": 1,
        "explanation": "Scrum is based on empiricism. The most effective approach is to be transparent about the actual state of the product. The Developers should inform the Product Owner that the Increment is not releasable, provide an estimate for the undone work, and re-estimate the remaining backlog. This allows the Product Owner to make an informed decision based on real data."
      },
      {
        "id": "q8_31",
        "question": "A Scrum team has requested a hardening Sprint to integrate the work produced in previous Sprints and tests before releasing. What three scenarios have likely been occurred? (Choose the best three answers)",
        "options": [
          "The Developers are having difficulties with the ability to regularly release during a Sprint.",
          "Hardening Sprints are supported by the Scrum framework so this is acceptable.",
          "The team’s Definition of Done is not being adhered to during every Sprint.",
          "Scrum has been customized suitably to make the previous work releasable.",
          "The team’s Definition of Done is weak or incomplete causing a build-up of technical debt."
        ],
        "correctAnswer": [0, 2, 4],
        "explanation": "A 'hardening Sprint' is an anti-pattern indicating that the team is not producing a 'Done', usable Increment at the end of each Sprint. This is typically due to a weak Definition of Done, a failure to adhere to it, or an inability to regularly integrate and release, all of which lead to technical debt."
      },
      {
        "id": "q8_32",
        "question": "Steven, the Scrum Master, notices that one of the Developers is not attending the Daily Scrum. The Scrum team thinks this is fine because they are all in the same area and already have constant communication throughout the day. Which is the best action for Steven to take? (Choose the best answer)",
        "options": [
          "The Daily Scrum is owned by the Developers and it is their responsibility to decide which team members must participate.",
          "Talk to the Developer privately and tell him that he needs to be a team player.",
          "Start running the Daily Scrum and require all members to be in attendance.",
          "Ask the Scrum team, what value will result from having all team members present at the Daily Scrum and what are the risks if members don't attend."
        ],
        "correctAnswer": 3,
        "explanation": "The Scrum Master should ensure the team understands the purpose and value of Scrum events. By asking powerful questions about the value and risks, the Scrum Master coaches the team to make their own informed decision while adhering to the principles of the Scrum framework."
      },
      {
        "id": "q8_33",
        "question": "What are the key characteristics of a self-managing Scrum team? (Choose the best two answer)",
        "options": [
          "Reliance on external oversight and micromanagement.",
          "Willingness to resolve conflicts internally and collaboratively.",
          "Prioritization of individual goals over team objectives.",
          "Proactive ownership of work and mutual accountability among team members.",
          "Strict adherence to hierarchical structures and managerial directives."
        ],
        "correctAnswer": [1, 3],
        "explanation": "Self-managing teams are characterized by their ability to resolve internal conflicts and foster mutual accountability. They take ownership of their work and hold each other responsible for delivering results, which fosters trust, collaboration, and a positive team dynamic."
      },
      {
        "id": "q8_34",
        "question": "Project Managers are working close to the customers, so they know well what they need, so a Product Owner is essentially the same thing as a traditional Project Manager.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": 0,
        "explanation": "While both roles interact with customers, they are distinct. A Product Owner is focused on maximizing product value by managing the Product Backlog. A traditional Project Manager is typically responsible for the entire project lifecycle, including managing resources, schedules, and budgets."
      },
      {
        "id": "q8_35",
        "question": "How should budgeting and financial forecasting be conducted in Scrum? (Choose the best two answers)",
        "options": [
          "Frequently inspect the outcomes of delivered Sprint Increments to understand the value produced per investment.",
          "Budgeting is unnecessary as only operational costs for Scrum teams are required.",
          "Fixed budgets are allowed in Scrum.",
          "Fund a single release through a series of Sprints, each producing shippable Increments."
        ],
        "correctAnswer": [0, 3],
        "explanation": "In Scrum, budgeting is iterative. By frequently inspecting the value delivered in each Sprint Increment, stakeholders can make informed decisions about future investment. Funding can be done on a per-release basis, which is comprised of a series of Sprints, allowing for flexibility and adaptation."
      }
    ]
  },
  {
    "id": "psm-ii-mock-9",
  "title": "PSM II Mock Exam #9",
  "description": "Professional Scrum Master Level II practice exam #9 based on provided content.",
  "timeLimit": 90,
  "passingScore": 85,
  "questions": [
    {
        "id": "q9_1",
        "question": "Steven is a Scrum Master for three different teams building a single product from the same Product Backlog. Developers from each team have approached Steven, complaining that their teams need Nicole, an external specialist, to commit full time for their next Sprint. Which three acceptable solutions would Steven consider? (Choose the best three answers)",
        "options": [
          "Create a team with Nicole and members from the other teams to work in Nicole’s domain temporarily to serve the other existing teams.",
          "Have the Developers re-order the Product Backlog (with the Product Owner's consent) so that Nicole can serve one team full-time during a Sprint.",
          "Investigate whether applying additional techniques or frameworks for scaling Scrum would be appropriate for this product team in the future, since you have multiple Scrum teams working on the same product, with dependencies between the teams.",
          "Ask Nicole for a plan to hire and train additional people in her domain, and in the meantime work with the Product Owner and the Developers to re-prioritize the work so that tasks not depending on Nicole can be done first.",
          "Developers with an interest in Nicole’s domain could volunteer to take on this work in their respective teams.",
          "For Sprints that require Nicole’s expertise for more than one team, combine the teams into one and separate them again when they no longer need to share her services."
        ],
        "correctAnswer": [1, 2, 4],
        "explanation": "Scrum Teams are cross-functional and self-managing. When specific expertise is needed, Developers may volunteer to handle related tasks, though this might initially affect productivity. The team should evaluate the impact on Sprint goals and the Scrum Master should assess if external help is a recurring need, weighing the benefits against the risk of impeding the team's self-reliance."
      },
      {
        "id": "q9_2",
        "question": "Your company has notified the stakeholders that they will be delivering the first release of a new product within ten Sprints. On the seventh Sprint, the Scrum team discovers that they will not be able to include all of the expected features within the first release. The Product Owner believes if they remove some items from the Definition of Done they will be able to accelerate the development process. The Developers object to this idea as it will lead to technical debt. As a Scrum Master, what would be the best two ways to explain to the Product Owner the impact of technical debt? (Choose the best two answers)",
        "options": [
          "Releasing the version upon a reduced Definition of Done creates false assumptions about the actual state of the system. This will create many interruptions during the development of the next release as fixes will need to be done to the previous release caused from a reduction of quality.",
          "The amount of technical debt will need to be analyzed in order to understand the impact on subsequent releases in order to allocate additional Sprints at the end of the project.",
          "Reducing the Definition of Done will introduce unknown errors as development progresses and functionality is added. The system can become more difficult to stabilize as work progresses. Development for the actual release as well as future releases will be slowed down in unpredictable ways.",
          "As long as there is still technical debt in the current release, feature development for the next release cannot be started. The Product Owner must first agree to this impact before allowing changes to the Definition of Done."
        ],
        "correctAnswer": [0, 2],
        "explanation": "The Definition of Done helps the Scrum team have a shared understanding of what it means for work to be complete, to ensure transparency. It also ensures that the work that is done is in usable condition and meets the Developers quality standards for future sustainability."
      },
      {
        "id": "q9_3",
        "question": "What are the two most effective methods for recognizing that a Scrum team is self-managing? (Choose the best two answers)",
        "options": [
          "Management can see who is working on which tasks.",
          "Impose strict rules and regulations on team members and leave little room for autonomy and decision-making.",
          "The Developers are able to resolve internal conflicts between members in order to continue working.",
          "Creativity thrives and new possibilities are explored.",
          "The developers are cross-functional and understand what has to be done to complete the tasks assigned to them in the Sprint Planning."
        ],
        "correctAnswer": [2, 3],
        "explanation": "Self-managing teams show autonomy to innovate and handle interpersonal issues independently. Transparency (who is working on what) and being cross-functional are important but don't directly indicate self-management. Imposing strict rules contradicts the principle of self-management."
      },
      {
        "id": "q9_4",
        "question": "Scrum addresses which of the following risks in software development? (Choose all that apply)",
        "options": [
          "Over-reliance on traditional project management methodologies.",
          "Heavy documentation and bureaucratic processes that slow down development.",
          "Lack of transparency and visibility into the development process.",
          "Uncertainty in requirements due to evolving customer needs.",
          "Inadequate collaboration and communication among team members.",
          "Inflexible development processes that hinder adaptation to changing requirements."
        ],
        "correctAnswer": [2, 3, 4, 5],
        "explanation": "Scrum mitigates risks by being adaptive and flexible. It enhances transparency, fosters collaboration, and promotes iterative development to handle requirement uncertainty. Scrum moves away from traditional, rigid, and document-heavy methodologies."
      },
      {
        "id": "q9_5",
        "question": "Which two behaviors would reflect the service of a Scrum Master to the Scrum team? (Choose the best two answers)",
        "options": [
          "Ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.",
          "Staying away from internal conflicts between Developers and maximizing their autonomy and freedom.",
          "Coaching the team members in self-management and cross-functionality.",
          "Resolving every impediment for the Developers."
        ],
        "correctAnswer": [0, 2],
        "explanation": "A Scrum Master serves the team by coaching them in self-management and cross-functionality, ensuring Scrum events are effective, and removing impediments to their progress."
      },
      {
        "id": "q9_6",
        "question": "At the fifth Sprint Retrospective, the Product Owner mentions that he is surprised about the amount of technical debt that has built up in the system and that the product is not able to support an adequate number of users. Peter, the Product Owner, is upset that the product will need several more Sprints to address the scalability issues in order to meet his expectations. What factors may have led to this? (Choose all that apply)",
        "options": [
          "The Scrum team has not used the past Sprint Retrospectives effectively to inspect and adapt.",
          "The Developers and the Product Owner are not having conversations around technical debt.",
          "Insufficient collaboration between Product Owner and Developers.",
          "The Developers have not been paying enough attention to technical quality.",
          "The Scrum Master has ensured that the Scrum Values have been upheld."
        ],
        "correctAnswer": [0, 1, 2, 3],
        "explanation": "Accumulated technical debt and scalability issues often stem from a lack of attention to technical quality, insufficient collaboration and communication between the Product Owner and Developers, and ineffective Sprint Retrospectives where these issues were not addressed."
      },
      {
        "id": "q9_7",
        "question": "After several Sprints, a key stakeholder starts using the product. The stakeholders are surprised by the slow performance and complain to the Product Owner. The Product Owner comes to the Scrum Master asking for advice. What is the best course of action for a Scrum Master? (Choose the best answer)",
        "options": [
          "Encourage the Product Owner to bring any performance issues to the Developers' attention and collaborate with them on how to improve performance and, as a result, have a stronger Definition of Done.",
          "Wait until the next Sprint Retrospective to change the Definition of Done because that is when it is most appropriate.",
          "Bring the concern to the testers and ask them to include performance testing.",
          "Explain to the Product Owner that it’s up to the Developers to decide on acceptable performance standards as they own the Definition of Done."
        ],
        "correctAnswer": [0],
        "explanation": "The primary goal is to satisfy the customer. Performance issues should be addressed collaboratively between the Product Owner and Developers. The Developers can and should expand their Definition of Done to include more stringent criteria, such as performance standards, to ensure higher quality."
      },
      {
        "id": "q9_8",
        "question": "What might be a valid reason for abnormally cancelling a Sprint? (Choose the best answer)",
        "options": [
          "When the work becomes too difficult for the Developers.",
          "When the Sprint Goal becomes obsolete.",
          "When the sales department discovers features that add more value than the current work being done.",
          "When the Developers discover that it cannot meet their Sprint commitments."
        ],
        "correctAnswer": [1],
        "explanation": "A Sprint can be cancelled if the Sprint Goal becomes obsolete. This might happen due to significant changes in business priorities, market conditions, or other external factors that render the Sprint's objective irrelevant."
      },
      {
        "id": "q9_9",
        "question": "A new Developer has just joined an existing team that has been together for several Sprints. During the Sprint, the individual has been trying to share his ideas and viewpoints but is continuously ignored by the rest of the Developers, so he raised this on the Sprint Retrospective. Which four Scrum Values has the Scrum team been neglecting? (Choose all that apply)",
        "options": [
          "Commitment",
          "Courage",
          "Respect",
          "Transparency",
          "Focus",
          "Openness"
        ],
        "correctAnswer": [0, 1, 2, 5],
        "explanation": "Ignoring a team member's input shows a lack of Respect for them as an individual and a lack of Openness to new ideas. It also shows a failure in the team's Commitment to supporting each other. It took Courage for the new developer to bring up this sensitive issue."
      },
      {
        "id": "q9_10",
        "question": "Who is responsible for determining when it is most appropriate to update the Sprint Backlog? (Choose the best answer)",
        "options": [
          "The Product Owner.",
          "The Scrum team.",
          "The Developers.",
          "The Scrum Master."
        ],
        "correctAnswer": [2],
        "explanation": "The Developers are responsible for managing the Sprint Backlog. They update it throughout the Sprint as they learn more about the work needed to achieve the Sprint Goal."
      },
      {
        "id": "q9_11",
        "question": "Which two scenarios would best represent a self-managing Scrum team? (Choose the best two answers)",
        "options": [
          "Management works with the Scrum Master to optimize the Developer’s progress during the Sprint.",
          "Developers collaboratively select and re-plan their work throughout the Sprint.",
          "Developers invite external people to the Sprint Planning to help them create a complete and detailed Sprint Backlog.",
          "Developers create their own Sprint Backlog, which includes all tasks necessary to meet the Definition of Done.",
          "The Developers are strictly focused on the work within their functional accountability and are always handing off the work to other accountabilities in a timely matter."
        ],
        "correctAnswer": [1, 3],
        "explanation": "A self-managing team takes ownership of its work. This is demonstrated when Developers collaboratively decide what to work on and adjust their plan during the Sprint, and when they create their own Sprint Backlog, ensuring it includes everything needed to deliver a 'Done' increment."
      },
      {
        "id": "q9_12",
        "question": "Steven is a Scrum Master on a new Scrum team. What would be the best way for him to determine if the Product Owner is interacting enough with the Developers during the Sprint? (Choose the best answer)",
        "options": [
          "Check whether the Increment presented at the Sprint Review meets the Product Owner’s expectations.",
          "Observe whether the Product Owner has provided enough information at the Sprint Planning to make his/ her presence optional during the Sprint. The level of autonomy within the Developers can be the result of having the right presence from the Product Owner.",
          "The Product Owner must be present at all times when the Developers are working. Scrum forbids the Product Owner from being unavailable.",
          "Check whether the Product Owner is actively engaged at the Daily Scrums."
        ],
        "correctAnswer": [0],
        "explanation": "The Sprint Review is a key feedback loop. If the resulting Increment meets the Product Owner's expectations, it's a strong indicator of sufficient collaboration and communication throughout the Sprint. While continuous engagement is valuable, Scrum does not mandate the PO's constant presence, and the Daily Scrum is primarily for the Developers."
      },
      {
        "id": "q9_13",
        "question": "Which approach would you recommend to ensure that the Product Backlog items discussed at Sprint Planning are well understood, actionable, and easier to forecast? (Choose the best answer)",
        "options": [
          "Having the Product Owner collaborate with stakeholders between the end of the previous Sprint and the start of the next to prepare the Product Backlog items so that the Developers are not interrupted.",
          "Before Sprint Planning, having a separate group of business analysts and functional testers analyze high-ordered Product Backlog items.",
          "Having the Developers use some time during each Sprint to help the Product Owner analyze, estimate, and design items at the top of the Product Backlog that is projected to be worked on in the upcoming Sprint.",
          "During a Sprint, the Scrum team's business analysts create upcoming Product Backlog items and add them to the forecast for the next Sprint."
        ],
        "correctAnswer": [2],
        "explanation": "Product Backlog refinement is an ongoing activity where the Product Owner and Developers collaborate. Involving the Developers during the Sprint to analyze and estimate upcoming items ensures a shared understanding and makes Sprint Planning more effective."
      },
      {
        "id": "q9_14",
        "question": "A new Product Owner has joined an existing Scrum team that has been working together for eight Sprints. The Developers have grown to have a good understanding of the functionality and business for the product they have been building. The Product Owner, being new to the company, is unsure about his responsibilities. Explain three acceptable ways of assisting the Product Owner as a Scrum Master. (Choose the best three answers)",
        "options": [
          "When the items on the Product Backlog are handed over to the Developers, you tell the Product Owner to make sure there are no ambiguities or possible misunderstandings. This is best done by capturing the functional requirements during an analysis phase, resulting in documents that are considered as the working product of such analysis Sprints.",
          "You advise the Product Owner to start building a good relationship with the stakeholders of the product. Ongoing interaction with them is important to regularly align with changing organizational or market expectations. The Product Owner is also expected to invite the right stakeholders to the Sprint Review meeting.",
          "You advise the Product Owner to formulate the Product Backlog with the help of the Developers and stakeholders, as they are the most knowledgeable. The Product Owner will quickly catch up by asking questions and working with them.",
          "You offer mentorship and guidance to the new Product Owner, helping them understand their role, responsibilities, and how to effectively collaborate with the team.",
          "You inform the Product Owner that, in today’s highly competitive markets, it is important that the Developers are updated on changing business priorities on a daily basis. The Daily Scrum allows the Developers to adapt to the changes in scope without delay."
        ],
        "correctAnswer": [1, 2, 3],
        "explanation": "A Scrum Master should coach the new Product Owner by offering mentorship, advising them to collaborate closely with the knowledgeable Developers and stakeholders to formulate the Product Backlog, and guiding them to build strong relationships with stakeholders for continuous feedback and alignment."
      },
      {
        "id": "q9_15",
        "question": "During the eighth Sprint Review, stakeholders express dissatisfaction with the product, citing discrepancies between their expectations and the delivered outcome, as well as unanticipated costs. What factors could have led to this situation? (Choose the best two answers)",
        "options": [
          "The requirements that have been consistently ambiguous and subject to frequent changes throughout the project.",
          "The Scrum Master has not been attending the Daily Standup. The Product Owner has not been using the Gantt chart correctly. The stakeholders have not been invited to the Sprint Retrospectives.",
          "The project's transparency has not been ensured by the Scrum Master. The project's progress has not been communicated to the stakeholders by the Product Owner. The Sprint Reviews have not been attended by the stakeholders.",
          "The Scrum Master has not been reporting on the progress of the Scrum team. The Product Owner has not been managing the tasks of the Developers effectively. The Developers have not been improving their velocity."
        ],
        "correctAnswer": [0, 2],
        "explanation": "Stakeholder dissatisfaction often arises from a lack of transparency and involvement. If stakeholders don't attend Sprint Reviews, if progress isn't communicated effectively, and if requirements are ambiguous or constantly changing without proper alignment, a gap between expectations and reality is likely to form."
      },
      {
        "id": "q9_16",
        "question": "Which of the following four software development risks is addressed by Scrum? (Choose all that apply)",
        "options": [
          "The complexity and unpredictability of the requirements.",
          "The timescale of the planned work.",
          "The definition of incentive and bonus strategies by HR for all team members.",
          "The stability and complexity of the technology.",
          "The skills and working relationships of the people on the teams.",
          "The clear definitions of stages and gateways in the overall governance model."
        ],
        "correctAnswer": [0, 1, 3, 4],
        "explanation": "Scrum's iterative and incremental approach is designed to control risk in complex environments. It addresses the unpredictability of requirements, technology, and team dynamics, and helps manage risk related to project timescales."
      },
      {
        "id": "q9_17",
        "question": "In what two ways is velocity and technical debt related? (Choose the best two answers)",
        "options": [
          "The Developers can artificially increase velocity by allowing technical debt to be incurred.",
          "They are not related because technical debt is non-functional and velocity is calculated based on end user functionality.",
          "As the Developers are working on new Product Backlog items, they may unexpectedly run into technical debt that will result in the team’s velocity dropping.",
          "Adding estimates to technical debt will allow the Developers to maintain constant velocity, therefore, ensuring predictability."
        ],
        "correctAnswer": [0, 2],
        "explanation": "Technical debt represents the implied cost of rework. Taking shortcuts can artificially inflate velocity in the short term, but as this debt accumulates, it will make future development slower and more unpredictable, eventually causing velocity to drop."
      },
      {
        "id": "q9_18",
        "question": "During the Sprint Retrospective, the team discusses quality issues preventing the delivery of a releasable Increment at the Sprint's end. Despite this, the Developers mention achieving a high velocity. What are the two most effective responses for Steven, their Scrum Master? (Choose the best two answers)",
        "options": [
          "Acknowledge the hard work but remind the Developers that they need to improve in order to do even more in the next Sprint.",
          "Help the Developers focus on creating high-value Increments that meet the Definition of Done, even if the measured velocity drops in the next Sprint.",
          "Agree and acknowledge the hard work of the Developers, so they will be motivated to do even more in the next Sprint.",
          "Stress the value of working software over measured velocity."
        ],
        "correctAnswer": [1, 3],
        "explanation": "The primary measure of progress is working software. A high velocity is meaningless if the result is not a 'Done', high-quality, valuable Increment. The Scrum Master should coach the team to focus on quality and value over raw output metrics."
      },
      {
        "id": "q9_19",
        "question": "Steven, a Scrum Master, has been hired by an organization that is new to Scrum. He has been invited to meet the IT and product management team to kick off the project. During the meeting, the Product Owner asks how many Sprints will be needed to address the entire architecture and infrastructure before working on the features for the new product. What are the two best responses for Steven to explain how much work is handled in Scrum? (Choose the best two answers)",
        "options": [
          "Steven should explain that product management should not worry about technical solutions. He should inform them that the Developers will work with the IT department when needed and should keep the Product Owner updated on additional time required for each Sprint. The additional effort will be added to the top of the Sprint Backlog before Sprint Planning.",
          "Steven should coach the Product Owner and the Developers to add this work to the Product Backlog to ensure transparency. He should also have the Developers estimate the work and do this in early Sprints while also creating some business functionality in the early Sprints.",
          "Steven should confirm that architecture and infrastructure are needed before starting on business functionality even though the estimated budget will be difficult to estimate. He should suggest that the first Sprint will be dedicated to building the technical foundation in order to get an accurate estimation for any additional budget and time required.",
          "Steven should explain that it is more effective when architecture and infrastructure emerge alongside the development of business functionality. The additional advantage is that business value is created more quickly and earlier."
        ],
        "correctAnswer": [1, 3],
        "explanation": "In Scrum, architecture is not built in a separate, upfront phase. It should emerge incrementally. Technical work, like infrastructure setup, should be made transparent by adding it to the Product Backlog and should be done alongside the development of business functionality to deliver value earlier and mitigate risk."
      },
      {
        "id": "q9_20",
        "question": "An organization has 7 different Scrum teams working on a product. A key concern when multiple Scrum teams are working for the same Product Backlog is minimizing dependencies between teams.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": [0],
        "explanation": "Minimizing dependencies between teams is crucial for reducing complexity and increasing agility. It allows teams to work more autonomously and reduces the risk of delays caused by one team waiting on another."
      },
      {
        "id": "q9_21",
        "question": "Your organization requires all Increments to pass user acceptance testing (UAT) before it is allowed to be released to production. Is it a good idea to postpone UAT until the end of the project to prevent the Developers from being disrupted during the Sprints? (Choose the best answer)",
        "options": [
          "No, because the state of the Product Increment won’t be transparent and the communications won't be good enough.",
          "Yes, because the Scrum Team is a self-managing team and should not be disrupted during development.",
          "It depends on the team’s Definition of Done.",
          "Yes, because UAT is done in a hardening Sprint before the release Sprint."
        ],
        "correctAnswer": [0],
        "explanation": "Delaying feedback activities like UAT violates the core Scrum principle of transparency. It hides the true state of the Increment and prevents the team from inspecting and adapting based on user feedback, which increases risk."
      },
      {
        "id": "q9_22",
        "question": "Technical Debt can lead to false assumptions about the current state of the system and the Increment reviewed at the end of the Sprint.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": [1],
        "explanation": "Technical debt, which is often invisible on the surface, can create a false sense of progress. An Increment may appear to work, but underlying quality issues (the debt) mean it is not truly 'Done' and will require future rework, thus misrepresenting the actual state of the product."
      },
      {
        "id": "q9_23",
        "question": "During the Sprint Review, the Product Owner decides to release the current Increment to production. The stakeholders suggest temporarily delaying the next Sprint in order to implement any further changes more quickly depending on a meeting with the customers, after the release. The Product Owner prefers to continue with the next Sprint and make progress towards the next release. Steven, the Scrum Master, begins facilitating the discussion. What would be two acceptable outcomes of the discussion? (Choose the best two answers)",
        "options": [
          "Continue with the Sprints and keep collaborating with the customers and potentially add Product Backlog items if needed.",
          "Continue with the Sprints but shorten the Sprint timeboxes to allow Developers respond to the new customer's requests faster.",
          "Delay the next Sprint to allow Developers to work on new customer requests.",
          "Continue with the Sprints but allow the Sprint Goal within the Sprint to change according to the customer feedback."
        ],
        "correctAnswer": [0, 1],
        "explanation": "A new Sprint starts immediately after the previous one ends to maintain momentum. Delaying Sprints is wasteful. To increase responsiveness to feedback, the team can shorten the Sprint length. New customer requests should be added to the Product Backlog for prioritization, not by interrupting the Sprint flow."
      },
      {
        "id": "q9_24",
        "question": "How often should the customer satisfaction be measured? (Choose the best answer)",
        "options": [
          "Daily",
          "Quarterly",
          "As often as possible",
          "Annually"
        ],
        "correctAnswer": [2],
        "explanation": "Frequent feedback is essential for continuous improvement and ensuring the product aligns with customer needs. Measuring satisfaction after each delivery or Sprint allows the team to adapt quickly."
      },
      {
        "id": "q9_25",
        "question": "Ryan, who is a Scrum Master on one of the Scrum teams, has approached you asking for advice. Their Daily Scrum takes longer than 15 minutes and the team has suggested dividing themselves into two separate teams in order to stay within the time box. As another Scrum Master, what would be the best response? (Choose the best answer)",
        "options": [
          "Unsure – dividing a team into two separate teams cannot be decided based on this information. You offer to observe.",
          "Agree – this is an appropriate solution to the problem.",
          "Disagree – as the problem may not be that the team is too big.",
          "Agree – You agree that dividing the team into two separate teams is a good strategy to allow the teams to learn how to run Daily Scrums quickly and effectively. Once they've learned to limit the Daily Scrum to 15 minutes, you can merge the teams again."
        ],
        "correctAnswer": [0],
        "explanation": "The Daily Scrum exceeding its timebox is a symptom, not the root cause. The reason could be team size, but it could also be inefficient meeting facilitation, problem-solving during the event, or other issues. The best first step is to observe and gather more information before proposing a solution like splitting the team."
      },
      {
        "id": "q9_26",
        "question": "Steven is a Scrum Master and leads three Scrum teams that are all working on the same product and using the same Product Backlog. Management wants to standardize how velocity is calculated across all three teams in order to identify which teams are high performing and which teams need more support. What would be the best two responses Steven could provide to management? (Choose the best two answers)",
        "options": [
          "Providing incentives based on velocity can increase the Scrum team’s motivation to produce more value.",
          "The amount of business functionality that a Scrum team creates in a Sprint is known as velocity. It's specific to that team and is used to inform Sprint Planning.",
          "It's a good idea to standardize velocity across teams to see which ones are producing the most value.",
          "There is no direct relationship between velocity and value."
        ],
        "correctAnswer": [1, 3],
        "explanation": "Velocity is a team-specific metric used for forecasting, not for comparing teams. Different teams estimate work differently, so their velocities are not comparable. Furthermore, velocity measures output, not outcome or value. A team could have a high velocity but deliver little value."
      },
      {
        "id": "q9_27",
        "question": "At Sprint Planning, the Developers cannot forecast the number of Product Backlog items due to unclear requirements. However, the Product Owner clearly defines the business objective for the Sprint. Which two actions would you support? (Choose the best two answers)",
        "options": [
          "Allow the Developers as much time as they need to review the Product Backlog items before reconvening with the Product Owner when they're confident enough to make a Sprint forecast.",
          "If everyone agrees, the Sprint Planning can be extended until the Developers forecast enough Product Backlog items before starting the implementation. They should be able to do it because they self-manage their work.",
          "The Developers forecast the most likely Product Backlog items to meet the business objective and create a Sprint Backlog based on an initial design and plan that is likely. Once the timebox for the Sprint Planning meeting is over, they start the implementation and continue to analyze, decompose, and create additional functionality during the Sprint.",
          "They'll talk about why this happened in the upcoming Sprint Retrospective and what changes they'll make to make it less likely to happen again."
        ],
        "correctAnswer": [2, 3],
        "explanation": "Scrum events are timeboxed. The team should make the best plan possible within the Sprint Planning timebox, even with uncertainty. The Sprint Backlog is emergent; the team can start with an initial plan and refine it during the Sprint. The issue of unclear requirements should be a topic for the Sprint Retrospective to improve the process for future Sprints."
      },
      {
        "id": "q9_28",
        "question": "Select two ways in which Scrum uses timeboxing to promote self-management? (Choose the best two answers)",
        "options": [
          "Timeboxes helps everybody concentrate on the same problem at the same time.",
          "Timeboxes enables everybody to determine the need for overtime as a percentage of the timebox.",
          "Timeboxes encourage those closest to the problem to make the best possible decisions within the time frame given the current situation.",
          "Timeboxes can help teams plan how many additional Sprints are needed for User Acceptance testing.",
          "Timeboxes ensure that the Developers commit to completing the items in the Sprint Backlog by the end of the Sprint."
        ],
        "correctAnswer": [0, 2],
        "explanation": "Timeboxing creates focus by dedicating a specific period to an activity. It also promotes self-management by providing a constraint within which the team must make decisions and manage their own work to achieve the goal of the event."
      },
      {
        "id": "q9_29",
        "question": "Which two statements are most accurate regarding scaling Scrum for large projects involving multiple Scrum teams? (Choose the best two answers)",
        "options": [
          "A person focusing on the Sprint Backlog of a single Scrum team is often more productive than that same person working on multiple Scrum teams at the same time.",
          "Team members must work full time on a single Scrum team.",
          "To be successful with Scrum on a large scale, you must customize the core Scrum framework.",
          "A well-structured Product Backlog can minimize and often eliminate Developers working on multiple Scrum teams during a Sprint."
        ],
        "correctAnswer": [0, 3],
        "explanation": "Context switching is inefficient; focusing on one team and one backlog improves productivity. A well-structured Product Backlog helps minimize dependencies between teams, which allows developers to focus on their team's work without being split across multiple teams."
      },
      {
        "id": "q9_30",
        "question": "You have a Scrum team that has been working together for over a year. There are eleven Developers in the team who rarely collaborate and work within their functional boundaries. There are no Sprint Goals and most of the items in the Sprint Backlog are unrelated. The Scrum team has concluded that it is not possible to create Sprint Goals based on the items in the Product Backlog. What might explain why the Scrum team is finding it difficult to craft Sprint Goals? (Choose all that apply)",
        "options": [
          "Scrum might not be the best framework for this team.",
          "There are too many Developers.",
          "The Sprints are too long.",
          "The Product Owner is not empowered to make decisions about items in the Product Backlog nor how they are ordered.",
          "The Product Owner doesn’t set objectives that he/she wants to achieve with upcoming Sprints."
        ],
        "correctAnswer": [0, 3, 4],
        "explanation": "Sprint Goals provide coherence. If a Product Owner does not have clear objectives or is not empowered to order the backlog to create a coherent set of items for a Sprint, crafting a Sprint Goal becomes difficult. If the work is inherently a collection of unrelated maintenance tasks, Scrum, which is designed for complex product development, may not be the most suitable framework."
      },
      {
        "id": "q9_31",
        "question": "The Definition of Done will assist the Scrum team in forecasting the amount of work from the Product Backlog that is deemed feasible to meet the \"Done\" by the end of the Sprint during Sprint Planning. Which two items best describe the meaning of \"Done\"? (Choose the best two answers)",
        "options": [
          "All the work completed within the current skills and expertise in the Scrum team.",
          "All the work needed to prepare the Increment for User Acceptance Testing.",
          "Having an Increment of working software that is potentially releasable to the end users.",
          "All the work performed as defined in the Definition of Done.",
          "All the work needed to prepare the Increment for Integration Testing."
        ],
        "correctAnswer": [2, 3],
        "explanation": "The Definition of Done is the team's shared understanding of all the work required to create a potentially releasable Increment. It ensures that what is delivered at the end of the Sprint is of high quality and could be shipped to users."
      },
      {
        "id": "q9_32",
        "question": "During the Sprint Review of a scaled development effort, Developers of each Scrum team should demonstrate their individual Increment in a separate branch of the code.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": [1],
        "explanation": "When multiple teams work on one product, they should produce a single, integrated Increment. Demonstrating separate pieces of un-integrated work does not provide a transparent view of the actual state of the product."
      },
      {
        "id": "q9_33",
        "question": "Collaboration issues and technical dependencies between multiple Scrum teams working on the same product can be fully resolved solely by using the correct version control tools.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": [0],
        "explanation": "Tools can support collaboration, but they cannot solve human interaction and dependency issues on their own. Effective collaboration, communication, and process are more important than any specific tool for resolving such complex problems."
      },
      {
        "id": "q9_34",
        "question": "An organization is using Scrum to build five new products. What would be the best two options for the number of Product Owners the organization should have? (Choose the best two answers)",
        "options": [
          "There is one Product Owner responsible for all five products. In order to scale his/her accountability, he/she can delegate some of the individual Product Owner responsibilities to others within each product but would still remain accountable for the value of the work produced.",
          "Enough Product Owners to delegate as much work needed to maximize utilization of all Developers.",
          "There is one Product Owner for each product (so five in total). Each Product Owner may delegate, share and align work within their individual Product Backlog.",
          "There is one Product Owner responsible for all five products. This person is not allowed to delegate any of the Product Owner responsibilities as he/she is accountable for the success of each product."
        ],
        "correctAnswer": [0, 2],
        "explanation": "Each product should have one Product Owner who is accountable for maximizing its value. For multiple products, the organization could have one PO per product. Alternatively, one person could be the PO for multiple products, but they would need to delegate some responsibilities (while retaining accountability) to effectively manage the work."
      },
      {
        "id": "q9_35",
        "question": "Steven is a Scrum Master of a Scrum team that has members working in different cities and time zones. Organizing the Scrum events is time-consuming and requires a lot of effort. The Developers propose to only hold the Daily Scrum on Mondays. Which two responses would be most appropriate for Steven? (Choose the best two answers)",
        "options": [
          "Acknowledge and support their decision.",
          "Help the Developers understand that lowering the frequency of communication will only increase the feeling of disconnect between the team members.",
          "Ensure that there is an overall consensus by having the Developers vote.",
          "Coach the team on why having a Daily Scrum every day is an important opportunity to update the Sprint plan and how this helps the team self-manage work toward achieving the Sprint Goal."
        ],
        "correctAnswer": [1, 3],
        "explanation": "The Daily Scrum is a key event for inspection and adaptation. The Scrum Master should coach the team on its purpose and importance for self-management and achieving the Sprint Goal, especially for a distributed team where frequent communication is vital to stay aligned and connected."
      }
    ]
  },
  {
    "id": "psm-ii-mock-10",
  "title": "PSM II Mock Exam #10",
  "description": "Professional Scrum Master Level II practice exam #10 based on provided content.",
  "timeLimit": 90,
  "passingScore": 85,
  "questions": [
    {
      "id": "q10_1",
        "question": "Which of the following statements are true about the Scrum Master accountability?",
        "options": [
          "At the Sprint Review, the Scrum Master demonstrates the completed Increment and answers any questions from the stakeholders.",
          "The Scrum Master helps those outside the Scrum team understand which interactions are helpful and teaches the Developers to keep the Scrum events within the timebox.",
          "The Scrum Master is responsible for updating the Scrum board and ensuring team members avoid conflicts.",
          "The Scrum Master assigns tasks to Developers and ensures they are completed within the committed timebox."
        ],
        "correctAnswer": [1],
        "explanation": "The Scrum Master is crucial for facilitating effective communication and ensuring Scrum events are efficient and stay within their timeboxes. They coach the team and stakeholders on helpful interactions and educate Developers on the importance of adhering to timeboxes to maximize value. "
      },
      {
        "id": "q10_2",
        "question": "What is the most appropriate action for the Scrum Master to take if the Product Owner is having difficulties managing the Product Backlog?",
        "options": [
          "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize the flow of value.",
          "Have the Product Owner sort the items by size, with the Developers starting with the smallest.",
          "Delegate the work to the Assistant Product Owner.",
          "Delay the Sprint in order for the Product Owner to have enough time to prioritize the Product Backlog.",
          "Instead of the Product Owner, have the Developers order the work"
        ],
        "correctAnswer": [0],
        "explanation": "When a Product Owner struggles with the Product Backlog, the Scrum Master should provide coaching and support. This includes helping the Product Owner understand backlog management techniques, facilitating collaboration with the Developers, and promoting a culture of continuous improvement to enhance backlog effectiveness. "
      },
      {
        "id": "q10_3",
        "question": "As a Scrum Master, what objectives would you aim for when five new Scrum teams are tasked with working on a single product?",
        "options": [
          "There should be five Product Backlogs and one Product Owner to manage them.",
          "There should be five Product Backlogs and five Product Owners.",
          "There should be five Product Owners, one for each Scrum team.",
          "The product has one Product Backlog and one Product Owner."
        ],
        "correctAnswer": [3],
        "explanation": "Having a single Product Owner and one Product Backlog for a single product is essential for maintaining a cohesive development process. This structure ensures a clear and consistent product vision, prevents conflicting priorities, and allows for unified prioritization, which helps align all teams on the most important work."
      },
      {
        "id": "q10_4",
        "question": "How should a Scrum Master divide a group of 100 Developers into multiple Scrum teams?",
        "options": [
          "The Scrum Master should do it depending on their skills so he can create cross-functional teams.",
          "Form teams based solely on seniority or hierarchy within the organization to maintain existing power structures and reporting lines.",
          "Allow the Developers to divide the group into multiple Scrum teams, each comprising around 7-9 Developers, to ensure effective communication and collaboration.",
          "Divide the group into two Scrum teams of 50 Developers each to maintain consistency and minimize the complexity of team interactions.",
          "Ask the Developers to divide themselves into teams.",
          "Have the resource manager assign the people to teams."
        ],
        "correctAnswer": [2, 4],
        "explanation": "A Scrum Master should encourage the Developers to self-organize into teams, as this promotes ownership and accountability. It is also beneficial to guide them toward forming smaller teams of about 7-9 members to keep communication efficient and enhance agility."
      },
      {
        "id": "q10_5",
        "question": "When technical debt accumulates, the system becomes more unstable as development progresses and code is added, slowing down future work.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": [0],
        "explanation": "Technical debt refers to any shortcomings in the code. It is an unavoidable by-product of software development that must be managed. If neglected, it will compound over time and negatively impact the team's ability to deliver value."
      },
      {
        "id": "q10_6",
        "question": "Your organization has formed a new Scrum team and has assigned you as the Scrum Master. In what ways would you help the team start?",
        "options": [
          "Have the Scrum team members introduce their background experience to each other, ask the Product Owner to discuss the product and answer potential questions, and ensure the team understands the importance of a Definition of “Done.”",
          "Ensure the Scrum team members have compatible personalities, have the tech leads clarify the expectations and responsibilities of each accountability, and propose a performance rewards system."
        ],
        "correctAnswer": [0],
        "explanation": "Scrum teams need all the necessary skills and competencies to complete the work. This includes understanding the product's goals and history and ensuring everyone on the team has a shared understanding of what 'done' means."
      },
      {
        "id": "q10_7",
        "question": "Ann has recently started working with a Scrum team as a Product Owner. She doesn't know how to estimate the items in the Product Backlog. What guideline should the Scrum Master provide if she asks how estimations should be made in Scrum?",
        "options": [
          "Estimates must be in relative units.",
          "Estimates must follow the Fibonacci Sequence.",
          "Estimates are made by the Product Owner.",
          "The Developers are responsible for estimates.",
          "Estimates must be made in Story Points."
        ],
        "correctAnswer": [3],
        "explanation": "While the Product Owner facilitates the estimation process, the Developers are the ones ultimately responsible for providing estimates. This is because they have the technical knowledge and expertise required. The Scrum Master should also emphasize that estimates are forecasts, not fixed commitments."
      },
      {
        "id": "q10_8",
        "question": "During the Sprint Review, one of the stakeholders announces that due to recent market changes, there is a risk that funding might be reduced for the project. This triggers tensions rising and arguments to break out between members. As a Scrum Master, what would be the best actions to take?",
        "options": [
          "Inform everyone that the team needs to stay busy until the information is formally announced.",
          "Avoid getting involved as it is the Product Owner’s responsibility to manage stakeholder expectations.",
          "Be objective and request for a short break for people to calm down.",
          "Encourage the stakeholders and Product Owner to focus on delivering the highest value items for the next Sprint.",
          "Defend the original budget and request the stakeholders to adhere to the original agreed funding for the product."
        ],
        "correctAnswer": [2, 3],
        "explanation": "In a tense situation, the Scrum Master should remain objective and suggest a short break to allow everyone to regain composure. It is also important to redirect the focus toward identifying and delivering the most valuable work in the next Sprint, which aligns with Scrum's emphasis on value delivery."
      },
      {
        "id": "q10_9",
        "question": "Your organization's director of engineering emphasizes the importance of meeting deadlines in order for the engineering department to be seen as a reliable source for the product management department. The director has calculated that the team's velocity needs to increase by 15% in order to meet the product's release date commitment he made to management. He requests that Steven, the team's Scrum Master, should increase the velocity of his team. Which of the two options would be the best for Steven?",
        "options": [
          "He helps the director understand that it typically takes a few Sprints for a team to gradually increase the velocity up to the level expected. Meanwhile he presents this to the team as a challenge and a company goal, leaving it however up to them to figure out exactly how to achieve this.",
          "He informs the director of any organizational impediments to the team's productivity that he is aware of. He suggests collaborating with him on how to help them remove these impediments.",
          "He tells the director that this is not his responsibility in Scrum. He tells the director to work with the Product Owner to check whether the estimates on the Product Backlog are being respected during implementation.",
          "He educates his director on how it is part of a team’s self-management to improve velocity. He invites the director to the next Sprint Retrospective to brainstorm on how they can improve.",
          "He explains how a team uses a Sprint's velocity to forecast work for the next Sprint rather than to predict future productivity perfectly. He prompts the director to the Product Owner for all information on the development progress."
        ],
        "correctAnswer": [1, 4],
        "explanation": "Velocity is a planning tool for the team to forecast work in a Sprint, not a performance metric. The Scrum Master should inform the director of any impediments affecting the team and suggest collaborating to remove them."
      },
      {
        "id": "q10_10",
        "question": "You are the Scrum Master for four Scrum teams that are working on the same product. Several Developers have informed you that in the next two Sprints, their teams will require full-time assistance from an external technical specialist Nicole. What key concerns should the Scrum Master take into account?",
        "options": [
          "Hiring additional resources to fill the void in skillset.",
          "The ability to produce integrated Increments and the benefit of teams solving the problem themselves.",
          "The potential disruption to team dynamics and productivity caused by integrating an external specialist.",
          "Having enough work for all team members.",
          "Maintaining a consistent velocity.",
          "The cost implications of hiring an external specialist."
        ],
        "correctAnswer": [1],
        "explanation": "When considering an external specialist, the Scrum Master should prioritize the team's ability to produce an integrated Increment, which is a core tenet of Scrum. Additionally, it's important to weigh the long-term benefits of the team developing problem-solving skills themselves against the short-term help of an expert, as over-reliance can hinder team growth and autonomy."
      },
      {
        "id": "q10_11",
        "question": "During Sprint Planning, the Developers were not able to confidently forecast a Sprint Backlog. However, the Scrum team was able to create a Sprint Goal for the upcoming Sprint. What action should the Scrum Master take?",
        "options": [
          "Forecast the most likely Product Backlog items to meet the goal, and discuss why this happened and what changes will make it less likely to happen again in the upcoming Sprint Retrospective.",
          "Extend the Sprint Planning timebox until the Developers can forecast enough items to begin the Sprint. ",
          "Postpone the Sprint in order for the Product Owner to refine the Product Backlog to the level needed.",
          "Request assistance from the technical architect."
        ],
        "correctAnswer": [0],
        "explanation": "During Sprint Planning, the Scrum Team should forecast the most probable Product Backlog items needed to achieve the Sprint Goal. It is also important for the team to discuss any forecasting difficulties in the subsequent Sprint Retrospective to identify impediments and determine adjustments that can be made to improve future Sprints."
      },
      {
        "id": "q10_12",
        "question": "During the Sprint, a key team member encounters personal issues that affect their ability to complete assigned tasks on time. As a result, the team's progress is jeopardized, and Sprint goals are at risk. How should the Scrum Master support the team in this situation?",
        "options": [
          "Criticize the team member for not fulfilling their responsibilities.",
          "Reassign the affected tasks to other team members to ensure timely completion.",
          "Ignore the personal issues and focus solely on meeting Sprint deadlines.",
          "Encourage the team member to prioritize personal matters over Sprint commitments.",
          "Collaborate with the team to find solutions and adjust Sprint goals if necessary."
        ],
        "correctAnswer": [4],
        "explanation": "When a team member is facing personal issues, the Scrum Master should work with the team to find solutions, which could include redistributing tasks or adjusting Sprint goals. This approach fosters teamwork, supports the individual's well-being, and ensures that the Sprint goals can still be achieved despite unforeseen challenges."
      },
      {
        "id": "q10_13",
        "question": "In what ways does the Scrum Master keep the Developers working at their highest level of productivity?",
        "options": [
          "By helping the Developers with user acceptance tests and tracking defects.",
          "By keeping the Scrum board and burn-down chart updated daily.",
          "By causing the removal of impediments to the Scrum team’s progress and helping the Scrum team focus on creating high-value Increments that meet the Definition of Done.",
          "By ensuring that each member takes turns speaking at the Daily Scrum and ending the event on time."
        ],
        "correctAnswer": [2],
        "explanation": "The Scrum Master acts as a coach, guiding the team toward self-management and cross-functionality. They help the team focus on creating high-value Increments that meet the Definition of Done and address any impediments that hinder the team's progress. They also ensure that all Scrum events are conducted efficiently and within their designated timeboxes."
      },
      {
        "id": "q10_14",
        "question": "Developers discover that they don't have the tools and infrastructure needed to make each selected Product Backlog item Done. What is the most appropriate action for the Scrum Master to take?",
        "options": [
          "Stop the Sprint and have the Developers work on the infrastructure before continuing.",
          "If the Developers require access to tools they don't have, escalate the issue to relevant stakeholders or other responsible parties.",
          "Encourage the Product Owner to accept partially done Increments and complete the work in the Hardening Sprint.",
          "Coach the Developers to improve their skills, tools and infrastructure over time and establish a Definition of Done that is actually possible to achieve given the current circumstances."
        ],
        "correctAnswer": [1, 3],
        "explanation": "The Scrum Master's role is to facilitate communication among the Developers about necessary tools and infrastructure. They should then work with the team to find solutions, which may involve escalating the issue to stakeholders to get the needed resources. The Scrum Master's main goal is to remove obstacles that impede the team's progress and ensure they have what they need to deliver a high-quality product increment."
      },
      {
        "id": "q10_15",
        "question": "During Sprint Planning, the Scrum Team estimates the effort required for each Product Backlog item. However, there is disagreement among team members about the complexity of a particular item, leading to delays in finalizing the Sprint Backlog. How should the Scrum Master address this situation?",
        "options": [
          "Suggest splitting the item into smaller, more manageable tasks to reduce complexity.",
          "Exclude the item from the Sprint Backlog until the disagreement is resolved.",
          "Facilitate a discussion to reach a consensus among team members on the complexity of the item.",
          "Assign the task of estimating the item's complexity to the Product Owner for a final decision.",
          "Allow the Developers to proceed with their individual estimates without consensus. "
        ],
        "correctAnswer": [2],
        "explanation": "The Scrum Master's role is to facilitate collaboration and consensus during Sprint Planning. By promoting open communication, the Scrum Master can guide the team to a shared understanding and agreement on an item's complexity."
      },
      {
        "id": "q10_16",
        "question": "In order to have their Daily Scrum, a Scrum team with remote Developers typically spend time setting up meeting rooms and conference calling equipment and tools before the Daily Scrum. What should the Scrum Master do in this case?",
        "options": [
          "Inform management and ask them to solve it.",
          "Allow the Scrum team to self-manage and decide for itself what to do.",
          "Ask the Developers to alternate who is responsible for meeting setup.",
          "Set up the meeting and inform the developers of the procedure."
        ],
        "correctAnswer": [1],
        "explanation": "As a self-managing team, the Developers should decide for themselves how to best handle their own communication logistics. The Scrum Master should only intervene if requested or if they observe a potential problem. The Scrum Master's role has evolved to coach the team in self-management so they can resolve issues autonomously, rather than solving problems for them."
      },
      {
        "id": "q10_17",
        "question": "How would you handle the situation as a Scrum Master if Nicola, from HR, informs you that one of the Developers in your team has confided in her about a personal issue that could impact their performance?",
        "options": [
          "Arrange a private conversation with the Developer to discuss the issue further and offer support or resources if needed. This demonstrates empathy and addresses the Developer's concerns directly, fostering trust and openness within the team.",
          "Ignore the issue and focus solely on work-related matters. This approach disregards the well-being of the team member and may lead to further decline in performance or morale.",
          "Pressure the Developer to disclose details of their personal issue to the rest of the team.",
          "Inform the entire team about the Developer's personal problem during a team meeting. This breaches confidentiality and may cause embarrassment or discomfort for the Developer, leading to distrust within the team.",
          "Encourage the Developer to seek professional help or support services if the personal issue is affecting their work performance significantly. As a Scrum Master, you should prioritize the well-being of team members and provide guidance on accessing appropriate resources for assistance."
        ],
        "correctAnswer": [0, 4],
        "explanation": "A Scrum Master should approach this situation with empathy and professionalism, prioritizing the team member's well-being.The correct actions are to arrange a private conversation to offer support and to encourage the developer to seek professional help if needed, which maintains confidentiality and fosters a positive team environment."
      },
      {
        "id": "q10_18",
        "question": "The Developers have suggested moving the Daily Scrum to every other day instead of every day. What is the most appropriate action for the Scrum Master to take?",
        "options": [
          "Learn why the developers want this, coach the team on the importance of the Daily Scrum, and collaborate with them to improve the Daily Scrum's outcome.",
          "Have the Developers vote on which days the Daily Scrum should occur.",
          "Support the self-managing team’s decision."
        ],
        "correctAnswer": [0],
        "explanation": "The Scrum Master is responsible for promoting Scrum as defined in the Scrum Guide. If the team wants to change a core event like the Daily Scrum, the Scrum Master should first understand their reasons, then coach them on the event's importance and facilitate improvements to make it more valuable, rather than simply accepting a change that deviates from the framework."
      },
      {
        "id": "q10_19",
        "question": "Konstantinos is a Scrum Master for a 13-member team, and he is trying to make sure that everyone on the team understands the Sprint Goal's purpose. Which of the following statements about the Sprint Goal is true?",
        "options": [
          "Sprint Goals are defined when the completed work is reviewed at the end of a Sprint.",
          "Sprint Goals are not achievable when the team has more than 10 members.",
          "During Sprint Planning, the entire Scrum team works together to create a Sprint Goal based on a business objective that the Product Owner wants to achieve during that Sprint.",
          "Sprint Goals can change as new insights emerge during the Sprint.",
          "Sprint Goals allow developers to be more flexible and creative when it comes to implementing functionality during the Sprint."
        ],
        "correctAnswer": [2, 4],
        "explanation": "The Sprint Goal is an objective created during the Sprint Planning meeting. It provides guidance to the Developers on why the Increment is being built and gives them flexibility regarding the functionality they implement to achieve that goal."
      },
      {
        "id": "q10_20",
        "question": "Several Sprints into a project, a client is complaining to the Product Owner about the poor performance of the product. As a Scrum Master, how can you help the Product Owner?",
        "options": [
          "Encourage the Product Owner to ignore the client's complaints and focus solely on the team's progress.",
          "Recommend that the Product Owner escalate the issue to higher management without attempting to address the client's concerns directly.",
          "Coach the Product Owner on effective ways to communicate this concern to the Developers and encourage the Product Owner to add the performance issue to the Product Backlog.",
          "Suggest shifting the blame onto the Development Team for the product's poor performance.",
          "Advise the Product Owner to withhold information from the client to avoid further complaints."
        ],
        "correctAnswer": [2],
        "explanation": "The Scrum Master's role is to coach the Product Owner on how to effectively communicate client concerns to the Developers. They should also facilitate getting client feedback into the product backlog and collaborate with the Developers to identify and address the root causes of any performance issues."
      },
      {
        "id": "q10_21",
        "question": "What is a good way for a Scrum team to ensure that security concerns are addressed and are transparent?",
        "options": [
          "Have the Scrum team create Product Backlog items for each concern and/or add security concerns to the Definition of Done.",
          "Create a separate backlog for security items and only work on the items when a specialist is available.",
          "Delegate the work to an external team.",
          "Add Security Sprints to resolve security concerns when needed."
        ],
        "correctAnswer": [0],
        "explanation": "To ensure security concerns are transparently addressed, a Scrum team should integrate security practices into their process. This can be done by adding security-related tasks to the Product Backlog and incorporating security testing into their Definition of Done."
      },
      {
        "id": "q10_22",
        "question": "On a project where multiple Scrum teams are working from the same Product Backlog, how should the work be distributed between teams?",
        "options": [
          "The Developers pull in work from a shared Product Backlog in agreement with the Product Owner and the other teams.",
          "Each Scrum team must have an equal amount of User Stories per Sprint.",
          "The Scrum team with the highest capacity will pull items from the Product Backlog first.",
          "The Product Owner separates the Product Backlog items for each team."
        ],
        "correctAnswer": [0],
        "explanation": "In Scrum, teams have the autonomy to pull work from a shared Product Backlog according to their capacity and Sprint Goals. The number of items selected is determined solely by the Developers during Sprint Planning."
      },
      {
        "id": "q10_23",
        "question": "In scaled Scrum, when multiple teams work from the same Product Backlog, do they still need to adhere to the Scrum Guide?",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": [1],
        "explanation": "Adherence to the Scrum Guide is crucial in scaled Scrum to maintain consistency and alignment across all teams. The guide provides the fundamental principles and practices that facilitate collaboration, coordination, and the integration of work, which are essential for the successful implementation of Scrum at any scale."
      },
      {
        "id": "q10_24",
        "question": "A Scrum Master is keeping a list of open impediments since the Developers haven't been able to resolve them. The list is growing and the Scrum Master has been able to assist with only a small portion of the impediments. Which would be the LEAST helpful technique in this situation?",
        "options": [
          "Consulting with the Developers.",
          "Prioritize the tasks on the list and complete them in that order.",
          "Notify management of the impediments and their consequences.",
          "Arrange a triage meeting with all project managers to help resolve them."
        ],
        "correctAnswer": [3],
        "explanation": "Scrum emphasizes self-organization, and involving project managers, who are not part of the Scrum framework, would be the least helpful approach. Instead, the Scrum Master should focus on facilitating the team's internal problem-solving abilities."
      },
      {
        "id": "q10_25",
        "question": "Five new Scrum teams are being formed by a company to work on a single product. Several future team members inquire about the Scrum Master's role in coordinating work among the various Scrum teams. What should the Scrum Master do next?",
        "options": [
          "At the end of Sprint Planning, collect all Sprint tasks and create a consolidated plan for the entire Sprint.",
          "Visit the five Scrum teams daily to ensure alignment and that all Sprint Backlogs remain synchronized.",
          "Advise the teams to minimize dependencies by working on separate development branches and integrating at the end of four Sprint cycles.",
          "Teach them that it is their responsibility to form the teams such that each team will have the necessary skills, knowledge, and competencies to create an integrated Increment by the end of every Sprint.",
          "Teach the Product Owner to collaborate with the technical leads to order the Product Backlog in such a way that there is no technical or development overlap during a Sprint."
        ],
        "correctAnswer": [3],
        "explanation": "In Scrum, teams are self-organizing and responsible for coordinating their own work. The Scrum Master's role is to empower the teams by teaching them it is their responsibility to form teams with the necessary skills to deliver integrated Increments at the end of each Sprint."
      },
      {
        "id": "q10_26",
        "question": "What action should a Scrum Master take if the Developers have decided that Retrospectives are no longer necessary?",
        "options": [
          "Suggest reducing the frequency of the Retrospectives.",
          "Start facilitating more productive and useful Retrospectives, in order to teach them the importance.",
          "Comply with the team’s decision.",
          "Extend the Sprint timebox in order to fit the Retrospectives."
        ],
        "correctAnswer": [1],
        "explanation": "Since Retrospectives are essential for continuous improvement in Scrum, the Scrum Master should not simply eliminate them. Instead, the Scrum Master should educate the team on the importance of this event and facilitate more effective Retrospectives to demonstrate their value in fostering transparency, open communication, and a culture of learning."
      },
      {
        "id": "q10_27",
        "question": "Steven is employed as a Scrum Master by the engineering department. The Director of Engineering considers using Scrum for a new project but wonders about the value of having all of the Developers attend the Daily Scrum. He is concerned that employees are already required to attend numerous company meetings.What are two outcomes of the Daily Scrum that Steven should explain on why the Daily Scrum is important?",
        "options": [
          "The Daily Scrum serves for the Developers to report to Steven, as a Scrum Master, all updates on the assigned tasks in the Sprint Backlog. He can then use the team’s updates to plan their work for the next day, making sure that every team member is assigned the right tasks.",
          "Through the short, daily alignment of the Daily Scrum the Developers grow and improve a shared understanding of the most important work to be undertaken in the next 24 hours to achieve the best possible progress toward the Sprint Goal. This daily opportunity to inspect and adapt will enable the Developers to best tackle any unforeseen circumstances that might otherwise disrupt the team’s progress.",
          "During the Daily Scrum, the Developers will inform Steven of problems that are hindering their progress, and for which they have no means to resolve. They will inform Steven as a Scrum Master, so he can cause the removal of the impediments and help the team be more productive.",
          "During the Daily Scrum, the Developers needs to update the Scrum board with their current status and progress, at a task level. This is crucial to ensure that the Director of Engineering knows the team’s actual progress and control the work being done.",
          "The Developers will produce a daily status report indicating how much time was spent working on individual tasks since the last Daily Scrum. The reports will help in discussing how the Sprint went at the Sprint Review meeting. It will provide detailed insights into the accuracy of estimates versus actual time spent, which can be used to create better estimates at the next Sprint Planning."
        ],
        "correctAnswer": [1, 2],
        "explanation": "The Daily Scrum is a key event for Developers to inspect their progress toward the Sprint Goal and adapt their plan for the day. It promotes a shared understanding of the immediate work, enhances collaboration, and provides a platform to identify impediments, which the Scrum Master can then help remove."
      },
      {
        "id": "q10_28",
        "question": "What can the Scrum Master do to ensure that the Developers and Product Owners communicate effectively?",
        "options": [
          "Translate the Developers' technologies so that the Product Owner can make decisions.",
          "Teach the Product Owner to talk in terms of technology and technical requirements.",
          "Ensure all communication goes through the Scrum Master first.",
          "Observe the communications between them and coach them if needed or if requested."
        ],
        "correctAnswer": [3],
        "explanation": "A Scrum Master's role is to foster an environment of collaboration and transparency, not to be a go-between. By observing interactions and providing coaching where necessary, the Scrum Master can help the Product Owner and Developers improve their direct communication and understand each other's perspectives."
      },
      {
        "id": "q10_29",
        "question": "A Developer has notified the Scrum Master of a potential data security risk. What action should the Scrum Master take?",
        "options": [
          "Notify the test team.",
          "Add a Product Backlog item to address the security issue.",
          "Wait until the Sprint Retrospective to add security to the Definition of Done.",
          "Ask the Developer to share the issue with the team as soon as possible."
        ],
        "correctAnswer": [3],
        "explanation": "The Scrum Master should coach the team to address issues collaboratively. The most appropriate first step is to encourage the Developer to share the concern with the entire team promptly. This fosters open communication and allows for collective problem-solving."
      },
      {
        "id": "q10_30",
        "question": "Ten Scrum teams have been formed to work on the same Product where many things need to be considered. When multiple Scrum teams are working on the same Product, they must have the same Sprint start dates.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": [0],
        "explanation": "While it is not mandatory for multiple Scrum teams to have the same Sprint start dates, the focus should be on their ability to integrate their work into a shippable Increment at the end of their respective Sprints."
      },
      {
        "id": "q10_31",
        "question": "If multiple Scrum teams are working on the same product, all Scrum teams must mutually define a Definition of Ready (DoR). The DoR is a checklist that the Product Owner must fulfill before a Product Backlog item can be presented at Sprint Planning. This protects the Developers from interruptions and disruptions during the Sprint.",
        "options": [
          "False",
          "True"
        ],
        "correctAnswer": [0],
        "explanation": "This statement is false. The Definition of Ready (DoR) is not a mandatory part of the Scrum framework, unlike the Definition of Done. While some teams find it useful, it is optional. The Product Owner is responsible for ensuring Product Backlog items are sufficiently refined for Sprint Planning."
      },
      {
        "id": "q10_32",
        "question": "After several Sprints, the Developers notice a recurring issue causing delays in delivering the Increment. Despite attempts to address the problem, it persists, leading to frustration and decreased productivity. What action should the Scrum Master take to address this issue?",
        "options": [
          "Investigate the root cause of the issue collaboratively with the Development Team and identify potential solutions.",
          "Ignore the issue and hope it resolves itself over time without intervention.",
          "Implement rigid processes and procedures to enforce compliance and prevent future delays.",
          "Blame individual team members for the delays and impose consequences for non-compliance.",
          "Delegate responsibility for addressing the issue to external stakeholders or management."
        ],
        "correctAnswer": [0],
        "explanation": "The Scrum Master should facilitate a collaborative problem-solving session with the Developers to identify the root cause of the recurring issue and explore potential solutions. This approach promotes transparency, ownership, and collective responsibility for improving processes."
      },
      {
        "id": "q10_33",
        "question": "During a Product Backlog refinement meeting, the Product Owner introduces a business objective that will be worked on for the next Sprints. To achieve the business goal, the Product Owner sees a set of critical features that must be supplied. Because the features will be using sensitive user data, they will be subjected to external security audits. These non-functional security requirements were not applicable to previous Increments. What are two effective methods for developers to address these high-security concerns?",
        "options": [
          "During the Sprint Retrospective, the Developers assess how to add these expectations to their Definition of Done so every future Increment will meet these security requirements. If needed, they can work with external specialists to better understand the requirements.",
          "To avoid disrupting Developers during feature development, they should be planned in parallel Sprints. After security concerns have been resolved, they will be applied to previously completed work before new features can be developed.",
          "They are added to the Product Backlog and addressed throughout the next Sprints, combined with creating the business functionality in those Sprints, no matter how small the business functionality.",
          "A complete list of security-related Product Backlog items needs to be created before starting a new Sprint.",
          "They should be handled by a separate security team in a parallel Sprint so that security issues can be resolved through application enhancements without affecting functional development."
        ],
        "correctAnswer": [0, 2],
        "explanation": "When new security requirements emerge, they should be added to the Product Backlog to be prioritized and addressed in upcoming Sprints alongside business functionality. Additionally, during the Sprint Retrospective, the team should discuss how to incorporate these new expectations into their Definition of Done to ensure all future Increments meet the required security standards."
      },
      {
        "id": "q10_34",
        "question": "You are the Scrum Master of a team. After a few Sprints, you notice that the Product Owner is not collaborating with the Developers effectively. What action would you take?",
        "options": [
          "Take over the responsibilities of the Product Owner yourself as the Scrum Master to ensure tasks are completed on time.",
          "Provide coaching and guidance to both the Product Owner and the Developers on the principles of Scrum and the roles and responsibilities of each team member, emphasizing the value of collaboration and shared ownership of the product.",
          "Ignore the issue and hoping it resolves itself without any intervention.",
          "Facilitate a meeting between the Product Owner and the Developers to discuss the importance of collaboration and to identify any barriers or challenges hindering effective communication and teamwork.",
          "Blame either the Product Owner or the Developers for the lack of collaboration without attempting to understand the underlying reasons or facilitate a constructive dialogue between the parties involved."
        ],
        "correctAnswer": [1, 3],
        "explanation": "If collaboration is ineffective, the Scrum Master should take action by facilitating a meeting between the Product Owner and Developers to address communication barriers. This promotes open dialogue and helps the team resolve issues collectively. Providing coaching on Scrum principles and roles is also a proactive approach to building a stronger foundation for teamwork. "
      },
      {
        "id": "q10_35",
        "question": "How should a Scrum Master coordinate the work when Developers from more than one Scrum team are working on one product?",
        "options": [
          "Teach them that it is their responsibility to work with the other teams to integrate and create a shippable increment at the end of each Sprint.",
          "Merge the teams and work from a single Sprint Backlog.",
          "Have the Product Owner work with the tech leads of each team to parse the Product Backlog and minimize overlap in User Stories.",
          "Identify and manage the dependencies among Scrum teams."
        ],
        "correctAnswer": [0],
        "explanation": "The Scrum Master should promote communication and collaboration between teams to ensure they are aligned on goals and priorities. This can be done by facilitating meetings like the Scrum of Scrums, where team representatives can discuss progress and impediments. The Scrum Master also helps address cross-team dependencies and promotes a culture of transparency and shared responsibility. "
      }
    ]
  }
];
