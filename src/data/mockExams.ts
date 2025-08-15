import { Exam } from '@/types/exam';

// Mock data for PAL I certification exams
export const mockExams: Exam[] = [
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
        question: 'What outcome would you expect for a newly formed team that has limited experience in Scrum and members in different countries: 3 in England, 4 in the United States, and 2 in Vietnam?',
        options: [
          'Having the right collaboration tools can make a distributed team as productive as a co-located team.',
          'The cost of delivering the product will be significantly lower than if all team members were together in Vietnam.',
          'The team will likely have communication and knowledge sharing challenges that will require help to resolve.',
          'Having team members in multiple locations can increase productivity because the number of hours utilized per day will be increased.'
        ],
        correctAnswer: 2,
        explanation: 'One of the Agile principles states that the most efficient and effective method of conveying information to and within Developers is face-to-face conversation. Having remote team members adds complexity to collaboration and communication efforts. Facilitating conversations with the members on this issue will allow the team to give feedback and decide on how best to resolve the issue.'
      },
      {
        id: 'q2_2',
        question: 'Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Team Leader how to coordinate their work with the other teams. What should the Team Leader do?',
        options: [
          'Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.',
          'Teach the Product Owner to work with the lead developers on ordering Product Backlog in a way to avoid too much technical and development overlap during a Sprint',
          'Visit the five teams each day to inspect that their Sprint Backlogs are aligned',
          'Teach them that it is their responsibility to work with the other teams to create an integrated Increment and as a Team Leader you can help them if needed.'
        ],
        correctAnswer: 3,
        explanation: 'In Scrum, collaboration and integration among teams are crucial for delivering a coherent and integrated product increment. The Team Leader should teach the developers that it is their responsibility to work collaboratively with the other teams to ensure that the product increment is integrated smoothly.'
      },
      {
        id: 'q2_3',
        question: 'Scrum Teams should normalize their estimations, so that management can measure and compare their performance.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Scrum Teams should not normalize their estimations solely for the purpose of allowing management to measure and compare their performance. Estimations in Scrum are meant to be relative and based on the team\'s understanding of the work, rather than serving as a metric for performance evaluation.'
      },
      {
        id: 'q2_4',
        question: 'As a manager of the product development department, what would be the best approach for understanding the status of different teams working on different products?',
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
        question: 'A Product Owner\'s responsibilities are best described by which of the following statements?',
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
        explanation: 'One of the primary benefits of an Agile approach is indeed to make it easier to meet short time-to-market schedules. Agile methodologies, such as Scrum, emphasize iterative and incremental development, allowing teams to deliver small increments of value to customers quickly and frequently.'
      },
      {
        id: 'q2_7',
        question: 'People with project management backgrounds are best suited as Scrum Masters because they have existing experience with managing projects, tasks, and schedules.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'While individuals with project management backgrounds may possess valuable skills and experience that can benefit them in the role of Scrum Master, it is not necessarily true that they are inherently best suited for the position. Scrum Masters require a unique set of skills and attributes that go beyond traditional project management.'
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
        correctAnswer: 0,
        explanation: 'Facilitating a discussion during the retrospective about the importance of active participation in the Daily Scrum and its impact on team collaboration and progress is crucial as it allows the team to collectively address the issue in a constructive manner. Additionally, having private conversations with the two developers to understand their perspective is essential for identifying any underlying concerns or obstacles they may be facing that are hindering their participation. (Note: This is a multiple correct answer question with options A and E both being correct)'
      },
      {
        id: 'q2_9',
        question: 'Scrum is only effective when the team is small and the project is limited in scope. Traditional processes are better suited for larger and more complex projects.',
        options: [
          'False',
          'True'
        ],
        correctAnswer: 0,
        explanation: 'Agile approaches, such as Scrum, focuses on achieving outcomes. Traditional approaches, such as waterfall, mainly focuses on the process. One is not better than the other and not comparable. Which approach you use is not dependent on the number of people but rather the objective you want to achieve.'
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
        correctAnswer: 0,
        explanation: 'The Evidence-Based Management framework of Scrum encompasses three key value areas: Time to Market, Current Value, and Unrealized Value. Time to Market focuses on the efficiency of delivering products or features to the market, emphasizing rapid delivery to gain a competitive edge. (Note: This is a multiple correct answer question with options A, B, and E all being correct)'
      },
      {
        id: 'q2_12',
        question: 'Which is not a measurement of a team\'s level of effectiveness in delivering value to the customer?',
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
        question: 'The Developers are requesting to extend the Sprint an extra 2 days in order to complete the items in the Sprint Backlog. They are worried that management will be upset if they are not able to finish all of the items before the end of the Sprint. As a Product Owner, what should you do?',
        options: [
          'Temporarily extend the Sprint in order to complete all of the items.',
          'Ask the Developers to commit to what was agreed at Sprint Planning and find a solution for the problem.',
          'Do not extend the Sprint and keep original time-box. Work with the stakeholders to explain why transparency and openness are important in an empirical environment.',
          'Ask the Developers to work longer hours to meet the Sprint Goal.',
          'Reduce the testing effort or leave some items incomplete in order to maximize the work in progress.'
        ],
        correctAnswer: 2,
        explanation: 'Time-boxes helps everyone focus on the same problem at the same time and encourages the people who are closest to the problem to create the best possible result in the time allotted, give the current context. The Sprint Backlog is a forecast of functionality that will be developed during the Sprint if completed would achieve the Sprint Goal.'
      },
      {
        id: 'q2_14',
        question: 'During a meeting at the outset of a new software development initiative utilizing Scrum, a stakeholder expresses skepticism about the methodology, stating that they do not "believe" in Scrum. They argue that traditional project management, with its fixed deadlines and budgets, mitigates business risk more effectively. They perceive Scrum as lacking these elements, making it a high-risk approach they are unwilling to embrace. What is the best response?',
        options: [
          'Explain that in complex product development, discoveries are made along the way. No guarantees can be given. Risk is inherent to building software.',
          'Provide a vague explanation of Scrum principles without addressing the stakeholder\'s specific concerns about risk management and adherence to deadlines and budgets.',
          'Explain that those traditional approaches always went over budget, time while delivering low value, unmaintainable products.',
          'Explain that Scrum limits risk by frequent inspection and adaptation mechanism, and in every Sprint, a product Increment is created by the Scrum Team, and by doing so, we become able to respond to change and address risk when it occurs.',
          'Dismiss the stakeholder\'s concerns and insist that Scrum is the only viable approach, disregarding their perspective on traditional project management.'
        ],
        correctAnswer: 3,
        explanation: 'It\'s essential to highlight that while Scrum indeed operates differently from traditional project management, it offers distinct advantages in managing complexity, fostering adaptability, and delivering value incrementally. Assure the stakeholder that Scrum provides mechanisms for managing risk through its iterative approach, frequent inspections, and opportunities for course correction.'
      },
      {
        id: 'q2_15',
        question: 'The primary benefit of an Agile approach is to make it easier to deliver on-time and within-budget.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'The primary benefit of an Agile approach is not solely about delivering on-time and within-budget, although those are important outcomes. Agile emphasizes adaptability, flexibility, and responsiveness to change, which allows teams to deliver value incrementally and iteratively while responding to evolving customer needs and market dynamics.'
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
        correctAnswer: 0,
        explanation: 'Scrum Teams should release early and often, regardless of whether their releases are synchronized or not. Synchronizing release schedules does not guarantee improved productivity. Decreasing dependencies between teams, automating the delivery pipeline, and a healthy Product Backlog will improve autonomy and localized decision making. (Note: This is a multiple correct answer question with options A, B, and D all being correct)'
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
        correctAnswer: 0,
        explanation: 'To be a cross-functional team, the team has a combined set of skills and competencies to create a product increment. Individuals may have specializations but accountability belongs to the Scrum Team as a whole. Having a cross-functional team will reduce external dependencies and complexity as decisions can be made locally. (Note: This is a multiple correct answer question with options A, B, D, and E all being correct)'
      },
      {
        id: 'q2_18',
        question: 'Which of the following can be used as a measurement of business Agility?',
        options: [
          'The number of Scrum Teams working on the same product. Increasing the number of teams working on a product will produce more value.',
          'The time it takes to go from having an idea to the point where a customer experiences the benefit of that idea, and customer feedback has been gathered.',
          'How much budget was used compared to how much was allocated. Agile teams will deliver projects more quickly with less budget than a traditional team.',
          'The number of change requests during an active Sprint. Reducing the changes to the scope of work helps the team focus on delivering Increments.'
        ],
        correctAnswer: 1,
        explanation: 'Lead Time is a measure of the time it takes to go from having an idea to the point where a customer experiences the benefit of that idea, and customer acceptance feedback has been gathered. This means that Lead Time is a way to measure business Agility.'
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
        question: 'Which one of the following statements is correct about the Product Owner?',
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
        question: 'You are a manager at an organization that develops and provides products and services for customers. Your organization has 4 Scrum Teams. Over the past several Sprints it has come to your observation that one of the teams is only averaging 15-20 story points per Sprint whereas the other teams are averaging 30-40 story points. Is this something to be worried about?',
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
        correctAnswer: 0,
        explanation: 'Advocating for a transparent discussion during the Sprint Review emphasizes the importance of stakeholders understanding the product\'s current state and the risks associated with an early release. This fosters open communication and allows stakeholders to make informed decisions. Secondly, collaborating with the Product Owner to prioritize backlog items critical for ensuring product readiness demonstrates a commitment to delivering value while mitigating risk. (Note: This is a multiple correct answer question with options A and B both being correct)'
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
        correctAnswer: 0,
        explanation: 'The cornerstone of Scrum is the Scrum Team, comprising a Scrum Master, a Product Owner, and Developers, without sub-teams or hierarchies. Scrum Teams are characterized by cross-functionality, where each member possesses the skills necessary to deliver value every Sprint, and self-management, allowing them to autonomously determine task allocation and execution. (Note: This is a multiple correct answer question with options A, B, D, and E all being correct)'
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
        question: 'The primary objective of a product is to provide value for its users/customers. Who is accountable for the value provided by the product?',
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
        correctAnswer: 1,
        explanation: 'When a Project Manager working with your Scrum Team raises concerns about progress and expenses, it\'s essential to address them effectively. The best responses would include ensuring transparent communication regarding the team\'s progress, identifying any impediments or bottlenecks affecting productivity, and collaborating to find solutions to improve efficiency. (Note: This is a multiple correct answer question with options B and C both being correct)'
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
        correctAnswer: 1,
        explanation: 'The selected options would help decrease the effectiveness of the team. On the other side working on one team allows the team members to mature together and synergize and focusing on one product enables the team to inspect and adapt more effectively than working on multiple products at the same time. (Note: This is a multiple correct answer question with options B, C, and D all being correct)'
      },
      {
        id: 'q2_30',
        question: 'John a new Product Owner is hired to work on an existing product that has ongoing for five Sprints. He is unsure about all of the responsibilities of a Product Owner. Which of these Product Owner\'s activities are defined in Scrum?',
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
        question: 'One of your Developers has a medical issue in the middle of the Sprint. As a Team Leader what should you do?',
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
        question: 'You are a manager at an organization that develops and provides products and services for customers. You\'ve observed that the motivation level of a typically proactive developer decreasing. In a 1:1 meeting, he expresses his frustration that the other team members are not consulting with him on technical decisions in his area of expertise and feels his opinions are being ignored and not respected. After gathering enough information, you feel that his opinion may be well-founded. What should you decide to respond?',
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
        question: 'You are a manager at an organization that develops and provides products and services for customers. The Scrum Master, for one of the teams, has asked you to reduce communicating directly with the Scrum Team members and to go through him instead. What is the most appropriate response?',
        options: [
          'It\'s not ok as you are accountable for the outcome of the team\'s work.',
          'It\'s ok but also let him know that there might be certain situations that you may still need to contact the team directly.'
        ],
        correctAnswer: 1,
        explanation: 'The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren\'t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.'
      },
      {
        id: 'q2_34',
        question: 'What is the primary advantage of Agile product development?',
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
        question: 'You are a manager in charge of business transformation for a new Agile initiative in your organization. One of your responsibilities is to create the Agile teams that will be working on various products. As a manager, how do you decide which member will belong to which team?',
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
