const exam = {
  id: 'psm-i-mock-8',
  title: 'PSM I – Mock Exam #8',
  description: 'Professional Scrum Master I practice exam #8 based on provided questions 1–80.',
  timeLimit: 60,
  passingScore: 85,
  questions: [
        {
               id: 'q9_1',
      question: 'Which events are time-boxed according to the Scrum Guide?\n\n\n\n\nA. Sprint 0. \n\nB. Project Retrospective. \n\nC. Sprint Review. \n\nD. Design Sprint. \n\nE. Stabilization. \n\nF. The Sprint. \n\nG. Daily Scrum. \n\n\n\n\n(choose the best answer)',
      options: [
      'A, C and F are TRUE',
      'B, C and E are FALSE',
      'C, D and G are FALSE',
      'C, F and G are TRUE',
      'D, E and F are TRUE'
      ],
      correctAnswer: [3],
      explanation: 'The Scrum Guide states that all Scrum Events are time-boxed. The Sprint (one month or less), Sprint Planning (maximum eight hours for a one-month sprint; usually shorter for shorter Sprints), Daily Scrum (15-minutes), Sprint Review (maximum four hours for a one-month Sprint; usually shorter for shorter Sprints), and the Sprint Retrospective (maximum three hours for a one-month Sprint; usually shorter for shorter Sprints).'
    },
    {
      id: 'q9_2',
      question: 'The Scrum Team is composed of:\n\n\n\n\nI. The Scrum Master\n\nII. The Developers\n\nIII. The Product Owner\n\nIV. Quality Analyst\n\nV. Team Project Manager\n\nVI. UX Designer\n\n\n\n\n(choose the best answer)',
      options: [
      'I and III are FALSE',
      'I, II and IV are TRUE',
      'I, II, and III are TRUE',
      'None of the above'
      ],
      correctAnswer: [2],
      explanation: 'The Scrum Team consists of the Scrum Master (promotes and supports Scrum), the Product Owner (maximizes the value of the product resulting from the work of the Scrum Team), and the Developers (committed to creating any aspect of a usable Increment each Sprint).'
    },
    {
      id: 'q9_3',
      question: 'True or False: Scrum has a role called "project manager."',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'A Scrum Team comprises only of a Product Owner, Developers, and a Scrum Master.'
    },
    {
      id: 'q9_4',
      question: 'What does it mean to say that an event has a time-box?\n\n(choose the best answer)',
      options: [
      'The event must happen at a set time.',
      'The event can take no more than a maximum amount of time (upper limit).',
      'The event must happen by a given time.',
      'The event must take at least a minimum amount of time (lower limit).',
      'The event might have to finish given a maximum amount of time.'
      ],
      correctAnswer: [1],
      explanation: 'Time-boxed events are events that have a maximum duration (upper limit).'
    },
    {
      id: 'q9_5',
      question: 'A project stakeholder asks the Developers to add a "very important" item to a Sprint already in progress. What should the Developers do?\n\n(choose the best answer)',
      options: [
      'Automatically, schedule the item to the next Sprint.',
      'Since it is "very important" and agile is about "welcoming change", add the item to the current.',
      'Sprint without any adjustments.',
      'Inform the Product Owner so he/she can work with the stakeholder.',
      'Add the item to the current Sprint and drop an item of equal size.'
      ],
      correctAnswer: [3],
      explanation: 'During the Sprint, the scope may be clarified and renegotiated with the Product Owner as more is learned. Further, the Sprint Backlog is a plan by and for the Developers.'
    },
    {
      id: 'q9_6',
      question: 'When does the next Sprint begin?\n\n(choose the best answer)',
      options: [
      'Immediately after the conclusion of the previous Sprint.',
      'When the Product Owner is ready.',
      'Immediately following the next Sprint Planning.',
      'Next week.',
      'When the Project Manager says so.'
      ],
      correctAnswer: [0],
      explanation: 'A new Sprint starts immediately after the conclusion of the previous Sprint.'
    },
    {
      id: 'q9_7',
      question: 'Who creates the Definition of Done?\n\n(choose the best answer)',
      options: [
      'The Scrum Team.',
      'The development organization and/or the Scrum Team.',
      'The Product Owner.',
      'The Scrum Master.'
      ],
      correctAnswer: [1],
      explanation: 'If the Definition of Done for an increment is part of the organization\'s standards, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriately for the product.'
    },
    {
      id: 'q9_8',
      question: 'Which of the following best describes the responsibility of the Scrum Master with regards to the Daily Scrum?\n\n(choose the best answer)',
      options: [
      'Manage turns.',
      'The Scrum Master teaches the Developers to keep the Daily Scrum within the 15-minute time- box.',
      'Make sure that all Developers answer the 3 questions correctly.',
      'Make sure the Developers discuss about the technical stuff.',
      'All answers apply.'
      ],
      correctAnswer: [1],
      explanation: 'The Scrum Master serves the Scrum Team ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.'
    },
    {
      id: 'q9_9',
      question: 'Who is accountable for developing and explicitly communicating the Product Goal?\n\n(choose the best answer)',
      options: [
      'The Project Manager',
      'The Developers',
      'The Scrum Master',
      'The Product Owner',
      'The Product Manager'
      ],
      correctAnswer: [3],
      explanation: 'The Product Owner is accountable for effective Product Backlog management, which includes Developing and explicitly communicating the Product Goal.'
    },
    {
      id: 'q9_10',
      question: 'What is the time-box for the Daily Scrums?\n\n(choose the best answer)',
      options: [
      'Three hours.',
      '15 minutes.',
      'It should be scheduled every day at the same time to avoid complexity.',
      'It depends on the team size.',
      '15 minutes for a one-month sprint (usually shorter for shorter sprints).'
      ],
      correctAnswer: [1],
      explanation: 'The Daily Scrum is a 15-minute event for the Developers of the Scrum Team, independent of the Sprint\'s length.'
    },
    {
      id: 'q9_11',
      question: 'Who must attend the Daily Scrum?\n\n(choose the best answer)',
      options: [
      'The Scrum team.',
      'The Scrum Master, but not the Product Owner.',
      'The Developers.',
      'The Developers and the Scrum Master.',
      'The Product Owner and the Developers.',
      'The Scrum Team and key stakeholders.'
      ],
      correctAnswer: [2],
      explanation: 'The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. It is held simultaneously and placed every working day of the Sprint to reduce complexity. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.'
    },
    {
      id: 'q9_12',
      question: 'The Developers should have all the skills needed to:\n\n(choose the best answer)',
      options: [
      'Deliver the project given the Iron Triangle restrictions.',
      'Do all of the development work and most testing, except for specialized testing, such as security or performance.',
      'Deliver usable Done Increment.',
      'Do all of the development and testing work.'
      ],
      correctAnswer: [2],
      explanation: 'The specific skills needed by the Developers are often broad and will vary with the domain of work. However, Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint.'
    },
    {
      id: 'q9_13',
      question: 'Scrum is:\n\n(choose the best answer)',
      options: [
      'A body of knowledge with the best practices for agile software development.',
      'A defined and predictive process founded on empirical process control theory or empiricism.',
      'A lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.',
      'A complete methodology that defines how to deliver complex products.'
      ],
      correctAnswer: [2],
      explanation: 'Scrum is not a process, technique, or definitive method. Rather, it is a framework to employ various processes and techniques.'
    },
    {
      id: 'q9_14',
      question: 'How much work must the Developers do to a Product Backlog item it selects for a Sprint?\n\n(choose the best answer)',
      options: [
      'Codification and some testing, depending on the context.',
      'The work is necessary to deliver a usable Increment of the Done product at the end of each Sprint, as agreed with the Product Owner during Sprint Planning.',
      'The best they can during the Sprint.',
      'Analysis, design, codification, testing, transition and documentation.'
      ],
      correctAnswer: [1],
      explanation: 'The purpose of each Sprint is to deliver a usable Done Increment.'
    },
    {
      id: 'q9_15',
      question: 'True or False: The Scrum Team must include at least one high-priority process improvement, identified in the Sprint Retrospective in the Sprint Backlog.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint. Thus, such a rule does not exist.'
    },
    {
      id: 'q9_16',
      question: 'True or False: Practices to forecast progress can replace empiricism.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Various practices exist to forecast progress, like burn-downs, burn-ups, or cumulative flows. While proving useful, these do not replace the importance of empiricism. In complex environments, what will happen is unknown. Only what has already happened may be used for forward-looking decision-making.'
    },
    {
      id: 'q9_17',
      question: 'The Sprint Review is ...\n\n(choose the best answer)',
      options: [
      'It is an event to monitor and control the Developers\' activities.',
      'It is a demonstration at the end of the Sprint in which all the stakeholders can check on the work done.',
      'It is held at the end of the Sprint to inspect the outcome of the Sprint and determine future adaptations.'
      ],
      correctAnswer: [2],
      explanation: 'The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.'
    },
    {
      id: 'q9_18',
      question: 'When does a Developer become the sole owner of a Sprint Backlog item?\n\n(choose the best answer)',
      options: [
      'At the second part of the Sprint planning meeting.',
      'During Daily Scrums.',
      'Never. All the Sprint Backlog Items are always "owned" by the entire Scrum Team. They might end up being implemented by an individual Developer, but the entire Scrum Team will keep "owning" the Sprint Backlog work.',
      'Whenever a team member can accommodate more work.',
      'During Pair Negotiation.'
      ],
      correctAnswer: [2],
      explanation: 'The entire Scrum Team collectively owns the Sprint Backlog and its items. Individuals can not claim ownership over a Sprint Backlog Item as it hinders collaboration.'
    },
    {
      id: 'q9_19',
      question: 'Scrum is based upon a specific type of process control. What is its name?\n\n(choose the best answer)',
      options: [
      'Adaptive',
      'Complex',
      'Empiricism',
      'Flexible'
      ],
      correctAnswer: [2],
      explanation: 'Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and making decisions based on observation. Lean thinking reduces waste and focuses on the essentials.'
    },
    {
      id: 'q9_20',
      question: 'The Product Owner is accountable for ...\n\n(choose the best answer)',
      options: [
      'Making sure the project is delivered within the Iron Triangle restrictions.',
      'Protecting the Developers from being distracted by external stakeholders.',
      'Maximizing the value of the product resulting from the work of the Scrum Team.',
      'Managing the Developers.'
      ],
      correctAnswer: [2],
      explanation: 'The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. This includes managing the Product Backlog, setting priorities, and making decisions that will deliver the most valuable features to customers and stakeholders. The Product Owner works closely with the Scrum Team to ensure that the Increment meets the needs of the users and the organization and represents the highest possible value at the end of each Sprint.'
    },
    {
      id: 'q9_21',
      question: 'Which are the three pillars of empiricism?\n\n(choose the best answer)',
      options: [
      'Flow, Talent, Quality',
      'Quality Maintenance, Eliminating Waste, Kaizen.',
      'Collaboration, Kaizen, Eliminating Waste.',
      'Inspection, Transparency, Adaptation.',
      'Plan, Do, Check'
      ],
      correctAnswer: [3],
      explanation: 'Three pillars uphold every implementation of empiricism: transparency, inspection, and adaptation.'
    },
    {
      id: 'q9_22',
      question: 'What is Management\'s role in Scrum?\n\n(choose the best answer)',
      options: [
      'Micromanage the Developers.',
      'Make sure the Developers is producing giving the organization\'s expectations.',
      'Support the Scrum Team, giving them healthy working conditions, insights, and information into high-value product and system capabilities. Further, it should support the Scrum Master regarding empirical product development and increase the effectiveness of Scrum in the organization.'
      ],
      correctAnswer: [2],
      explanation: 'Management has no active role in the actual product development through Scrum. However, management external to the Scrum team is critical in setting the vision and strategy to guide the organization\'s overall direction.'
    },
    {
      id: 'q9_23',
      question: 'True or False: The Sprint\'s purpose is to create a Done, useable product Increment.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [0],
      explanation: 'Sprints are the heartbeat of Scrum, where ideas are turned into value through the development of a Done, usable product Increment.'
    },
    {
      id: 'q9_24',
      question: 'Which of the below are accountabilities on a Scrum Team?\n\n\n\n\nI. Developers.\n\nII. Product Owner.\n\nIII. Users\n\nIV. Scrum Master\n\nV. Quality Manager \n\n\n\n\n(choose the best answer)',
      options: [
      'I, II and III',
      'I,II and IV',
      'II, IV and V',
      'II, III and V',
      'III, IV and V'
      ],
      correctAnswer: [1],
      explanation: 'The Scrum Team consists of a Product Owner, Developers, and a Scrum Master.'
    },
    {
      id: 'q9_25',
      question: 'When might a Sprint be canceled?\n\n(choose the best answer)',
      options: [
      'When the Sprint Goal becomes obsolete.',
      'When the Developers recognize that they won\'t be done with the Sprint Backlog by the end of the Sprint.',
      'When the marketing or sales reps come up with new business opportunities.'
      ],
      correctAnswer: [0],
      explanation: 'A Sprint can be canceled before the Sprint time-box is over. A Sprint will be canceled if the Sprint Goal becomes obsolete. That might occur if the company changes direction or if market or technology conditions change.'
    },
    {
      id: 'q9_26',
      question: 'Who is responsible for creating the Sprint Goal?\n\n(choose the best answer)',
      options: [
      'The Scrum Master',
      'The Product Owner',
      'The whole Scrum Team',
      'The Developers',
      'The key stakeholders'
      ],
      correctAnswer: [2],
      explanation: 'The Sprint Goal is created collaboratively by the entire Scrum Team during the Sprint Planning event. It is a shared understanding of what the team aims to achieve during the Sprint. The Product Owner provides input regarding the priorities and desired outcomes, while the Developers contribute their insights on what is technically feasible and how the work can be accomplished. The Scrum Master facilitates the discussion and ensures that the Sprint Goal aligns with the overall product vision and goals. The involvement of the entire Scrum Team in creating the Sprint Goal promotes transparency, collaboration, and commitment to the Sprint\'s objectives.'
    },
    {
      id: 'q9_27',
      question: 'Why is the Daily Scrum held at the same time and same place?\n\n(choose the best answer)',
      options: [
      'Because the Project Manager requires.',
      'To increase complexity.',
      'Makes it easier to arrange room scheduling.',
      'To reduce complexity.'
      ],
      correctAnswer: [3],
      explanation: 'The Daily Scrum is held at the same time and place each day to reduce complexity.'
    },
    {
      id: 'q9_28',
      question: 'Which of the following four behaviors demonstrate that a team is NOT following the Scrum Guide?\n\n\n\n\nI. Project Stakeholders attend the Daily Scrum to check progress.\n\nII. External stakeholders participate during Sprint Planning, assisting the Developers in turning a Product Backlog item into an Increment via a complete and detailed Sprint Backlog.\n\nIII. The Scrum Team is structured and empowered by the organization to organize and manage its work.\n\nIV. The Developers work given their functional description such as analyst, developer, and tester.\n\nV. Developers individually select their work during the Sprint.\n\nVI. The Developers own the Sprint Backlog. \n\n\n\n\n(choose the best answer)',
      options: [
      'I, II, IV and V',
      'I, II, III and IV',
      'II, III, IV, and VI',
      'III, IV, V and VI',
      'III, IV, V and VI'
      ],
      correctAnswer: [0],
      explanation: 'I- The Daily Scrum is an internal meeting for the Developers to inspect progress toward the Sprint Goal and adjust their plan for the next 24 hours. While passive observation by stakeholders might occasionally happen, actively using the Daily Scrum as a forum for stakeholders to "check progress" undermines the event\'s purpose and can lead to micromanagement—something that is against the principles of self-management in Scrum. II- During Sprint Planning, the entire Scrum Team collaborates on understanding the work of the Sprint. The Developers define the work for the first days of the Sprint. The Sprint Backlog emerges during the Sprint. III- Scrum Team members self-organize. IV- Scrum recognizes no sub-teams within the Scrum Team. V- The Developers collaboratively plan work execution. VI- The Sprint Backlog is owned by the Developers.'
    },
    {
      id: 'q9_29',
      question: 'Which size should the Scrum Team have?\n\n(choose the best answer)',
      options: [
      '3 to 9',
      'Typically, 10 or fewer people',
      'at least, 5',
      '5 plus or minus 2'
      ],
      correctAnswer: [1],
      explanation: 'The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically ten or fewer people. In general, we have found that smaller teams communicate better and are more productive. If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner.'
    },
    {
      id: 'q9_30',
      question: 'Which of the following best describes transparency?\n\n(choose the best answer)',
      options: [
      'The process should be visible and understood by stakeholders and project managers.',
      'The emergent process and work must be visible to those performing the work as well as those receiving the work.',
      'Significant aspects of the process must be visible to stakeholders and project managers.',
      'The whole process should be visible to everyone.'
      ],
      correctAnswer: [1],
      explanation: 'Transparency in Scrum refers to the visibility of the Scrum Team\'s processes, artifacts, and progress. It ensures that everyone involved, both within the team and external stakeholders, has a clear understanding of the work being done, the status of the project, and any impediments or issues that may arise. This transparency fosters collaboration, trust, and effective decision-making. It allows the Scrum Team to inspect and adapt their work and enables stakeholders to provide valuable feedback and make informed decisions based on the available information.'
    },
    {
      id: 'q9_31',
      question: 'Which of the following statements is FALSE?\n\n(choose the best answer)',
      options: [
      'The Sprint Backlog emerges during the Sprint.',
      'At any moment during the Sprint, the Developers might ask the Product Owner for help clarifying or optimizing the Sprint.',
      'The Sprint Backlog is defined during the Sprint Planning meeting and must not be changed during the Sprint.'
      ],
      correctAnswer: [2],
      explanation: 'The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum. The Development Team modifies the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint. This emergence occurs as the Development Team works through the plan and learns more about the work needed to achieve the Sprint Goal.'
    },
    {
      id: 'q9_32',
      question: 'The Product Backlog is ordered by:\n\n(choose the best answer)',
      options: [
      'Technical Dependencies.',
      'Size.',
      'Risk.',
      'The factors deemed appropriate by the Product Owner to maximize value delivery.',
      'Just In Time'
      ],
      correctAnswer: [3],
      explanation: 'It is up to the Product Owner to decide how to order the ProIt is up to the Product Owner to decide how to order the Product Backlog to maximize the value of the product resulting from the work of the Scrum Team.duct Backlog for maximizing the value of the product resulting from the work of the Scrum Team.'
    },
    {
      id: 'q9_33',
      question: 'What are Developers supposed to do when they have trouble working on a Product Backlog Item because they do not understand it?\n\n(choose the best answer)',
      options: [
      'Ask the Scrum Master to remove this restriction.',
      'Do as much of the item as feasible and, in the Sprint Review meeting, produce a lighter perception of what is required.',
      'Delay the item to the next Sprint.',
      'Discuss with the Product Owner to see better understand the work to be done.'
      ],
      correctAnswer: [3],
      explanation: 'The Product Owner is accountable for clearly communicating Product Backlog items. Thus, the Developers should talk to him or her.'
    },
    {
      id: 'q9_34',
      question: 'True or False: In Scrum, one must use User Stories.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Using User Stories to form the Product Backlog items might be useful. However, it is not a technique prescribed by the Scrum Guide.'
    },
    {
      id: 'q9_35',
      question: 'Which of the Scrum events is the most appropriate for capturing and using lessons learned?\n\n(choose the best answer)',
      options: [
      'Sprint Planning',
      'Sprint Review',
      'Product Backlog Refinement',
      'Sprint Retrospective'
      ],
      correctAnswer: [3],
      explanation: 'Sprint Retrospective is essentially about lessons learned because it has to do with discussing how work was done and finding ways to improve it hereafter.'
    },
    {
      id: 'q9_36',
      question: 'True or False: If there are multiple Product Goals, they must be organized into a Product Roadmap.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'The Scrum Guide does not prescribe using a Product Roadmap.'
    },
    {
      id: 'q9_37',
      question: 'True or False: Scrum is a methodology for developing, delivering, and sustaining complex products.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Scrum is considered a framework, not a methodology, process, or technique.'
    },
    {
      id: 'q9_38',
      question: 'Choose the statement that best describes the Product Backlog:\n\n(choose the best answer)',
      options: [
      'The Product Backlog is useful for producing the project plan.',
      'The Product Backlog does not get complete and is easily updated.',
      'The Product Backlog makes all available data that allows Developers to create a product. It is a list of requirements approved by the product manager.',
      'The Product Backlog is full of recognized tasks by the Developers. It contains many user stories.'
      ],
      correctAnswer: [1],
      explanation: 'There is no project plan in Scrum. The Product Backlog is an ordered list of everything known to be needed in the product. It is the single source of requirements for any changes to the product.'
    },
    {
      id: 'q9_39',
      question: 'An organization adopted Scrum. During the adoption process, they changed Scrum terminology to better suit their culture. What are the possible effects of such a change?\n\n\n\n\nI. Organizations must tailor Scrum to suit the project because this methodology is incomplete.\n\nII. Organizations may feel less enthusiastic about the change.\n\nIII. They will improve their outcomes in adopting Scrum this way.\n\nIV. The change might not be evident to everyone, and some advantages may be missed.\n\n(choose the best answer)',
      options: [
      'I and II',
      'II and III',
      'II and IV',
      'III and IV'
      ],
      correctAnswer: [2],
      explanation: 'I. False. Scrum is not a methodology. Further, according to the Scrum Guide, you must complement Scrum, not tailor it, where tailor means changing the rules. II. True. By changing Scrum\'s terminology, its effects might be minimized, causing less impact and, consequently, enthusiasm. III. False. Its effects might be minimized, causing less impact and, consequently, reducing the organization\'s outcomes. IV. True. Changing the terminology might hinder adopting some of Scrum\'s practices and waste the opportunities.'
    },
    {
      id: 'q9_40',
      question: 'True or False: The first Sprint can only be started after the Product Backlog is complete.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'The Product Backlog is never complete. It is always evolving adaptive techniques.'
    },
    {
      id: 'q9_41',
      question: 'True or False: The velocity of Scrum Teams should be normalized so that administrators can measure and compare their performance.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Progress measurements are done internally, not by external managers. Also, comparing the velocity (dependent on the estimates) of two different teams is unreliable.'
    },
    {
      id: 'q9_42',
      question: 'Choose three alternatives that may occur at the Sprint Retrospective meeting:\n\n\n\n\nI. To refine the Product Backlog.\n\nII. To talk about the upcoming Sprint goal.\n\nIII. To talk about what (from the Product Backlog) will be used for the upcoming Sprint.\n\nIV. To talk about how, throughout the Sprints, Product Backlog Refinement is done.\n\nV. To discuss the timeboxed duration of Sprints.\n\nVI. To discuss progress toward the Product Goal.\n\nVII. To discuss the Definition of Done.\n\n(choose the best answer)',
      options: [
      'I, II and III',
      'II, IV, and V',
      'I, III and IV',
      'I, III and VI',
      'IV, V and VII'
      ],
      correctAnswer: [4],
      explanation: 'The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose. The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box.'
    },
    {
      id: 'q9_43',
      question: 'Choose the best option that precisely describes the effects of changes in the project environment of the Product Backlog:\n\n(choose the best answer)',
      options: [
      'There\'s no impact on the Product Backlog.',
      'A new baseline Product Backlog is developed for the project, once the old one is saved.',
      'It gets refined to consider the changes.',
      'The Product Backlog must be maintained in a high standard of tolerance for resisting changes.',
      'The Product Backlog should be kept high-level enough to tolerate such changes, but the items are not affected.'
      ],
      correctAnswer: [2],
      explanation: 'The Product Backlog emerges as more is learned.'
    },
    {
      id: 'q9_44',
      question: 'Which events of the following are formal opportunities for inspecting and adapting (feedback loops) in Scrum?\n\nI. Sprint Review\n\nII. Product Backlog Refinement\n\nIII. Sprint Planning\n\nIV. Release Planning\n\nV. Sprint Retrospective\n\nVI. Daily Scrum\n\n(choose the best answer)',
      options: [
      'II, IV, V, and VI',
      'I, II, III, and IV',
      'I, III, V, and VI',
      'II, III, V, and VI',
      'III, IV, V, and VI'
      ],
      correctAnswer: [2],
      explanation: 'Scrum prescribes four formal events for inspection and adaptation: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.'
    },
    {
      id: 'q9_45',
      question: 'True or False: The Scrum Master can not be a Developer.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'It is not recommended at all, but it is not forbidden. One person can have more than one accountability in Scrum.'
    },
    {
      id: 'q9_46',
      question: 'Choose two alternatives among the statements below that are true about an undone Product Backlog item.\n\n\n\n\nI. Consider the done part of the item in velocity calculation and then create a new item in the Product Backlog for the remaining work.\n\nII. Demonstrate it in the Sprint Review meeting, even if it is not within the terms of acceptance. It is important to get feedback.\n\nIII. Move it back to the Product Backlog.\n\nIV. Do not include it in the Increment.\n\nV. It could be added to the Increment if it does not fail in the user acceptance tests.\n\n\n\n\n(choose the best answer)',
      options: [
      'I and II',
      'I and V',
      'II and III',
      'III and IV',
      'IV and V'
      ],
      correctAnswer: [3],
      explanation: 'Work cannot be considered part of an Increment unless it meets the Definition of Done. If a Product Backlog item does not meet the Definition of Done, it cannot be released or presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.'
    },
    {
      id: 'q9_47',
      question: 'Choose two alternatives among the items below that can be appraised as real outputs of a Sprint.\n\n\n\n\nI. Done features added to the last version of the Increment developed last Sprint.\n\nII. A proposal for the following Sprints\n\nIII. A part of the software that is available to the end-users\n\nIV. New features that are available for integration\n\n(choose the best answer)',
      options: [
      'I and II',
      'I and III',
      'II and III',
      'II and IV',
      'III and IV'
      ],
      correctAnswer: [1],
      explanation: 'The Increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. At the end of a Sprint, the new Increment must be "Done," which means it must be in usable condition and meet the Scrum Team’s definition of "Done". An increment is a body of inspectable, done work that supports empiricism at the end of the Sprint. The increment is a step toward the Product Goal. The Increment must be in usable condition regardless of whether the Scrum Team decides to release it.'
    },
    {
      id: 'q9_48',
      question: 'What is the timeboxed duration of Sprint Planning in a one-month Sprint?\n\n(choose the best answer)',
      options: [
      'Maximum 8 hours',
      'Maximum 6 hours',
      'Minimum 6 hours',
      'Minimum of 8 hours'
      ],
      correctAnswer: [0],
      explanation: 'Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.'
    },
    {
      id: 'q9_49',
      question: 'Which of the following is not allowed in Scrum?\n\n\n\n\nI. Release Planning\n\nII. Using Planning Poker\n\nIII. Integration Sprints\n\nIV. Using User Stories\n\nV. Canceling a Sprint\n\n\n\n\n(choose the best answer)',
      options: [
      'I',
      'II',
      'III',
      'IV',
      'V'
      ],
      correctAnswer: [2],
      explanation: 'I, II, IV. Adopting Release Planning, Planning Poker, and User Stories is OK. It doesn\'t break any of the Scrum rules. III. You can\'t have Integration Sprints, because it would break a key Scrum rule: every Sprint must deliver value. In other words, in practice, this means that for every Sprint, you must deliver a new piece of business functionality, no matter how small. Integration Sprints break this rule because they focus on only integration code. V. If the Sprint Goal becomes obsolete, the Product Owner might cancel the Sprint. This is made explicit in the Scrum Guide.'
    },
    {
      id: 'q9_50',
      question: 'True or False: When there are multiple Scrum Teams working on the same product, their Sprints must start and end on the same day.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'The Sprints of the Scrum Teams do not need to be synchronized. The Scrum Teams self-manage and decide the best scheduling for them.'
    },
    {
      id: 'q9_51',
      question: 'True or False: Adding new Developers to the Scrum Team may make a short-term reduction in productivity.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [0],
      explanation: 'When more Developers are added to the team, there\'s usually a short-term decrease in productivity because other members have to spend time and effort familiarizing the new members with the solution and the environment of the project. After a while, the existence of new members may increase productivity, but even if it does, it\'s usually not a linear increase because, for example, having more people increases communication channels, which consumes some of the capacity.'
    },
    {
      id: 'q9_52',
      question: 'When should the Developers cancel a Sprint?\n\n(choose the best answer)',
      options: [
      'The Developers don\'t have the authority to cancel the Sprint.',
      'When the company changes direction',
      'When the market or technology conditions change',
      'When the Sprint Goal becomes obsolete'
      ],
      correctAnswer: [0],
      explanation: 'A Sprint could be canceled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint.'
    },
    {
      id: 'q9_53',
      question: 'True or False: The Product Backlog items consist of a description, order, and size.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'That is not a rule. The Attributes of Product Backlog items often vary with the domain of work.'
    },
    {
      id: 'q9_54',
      question: 'True or False: Sprint Review is not a formal meeting.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [0],
      explanation: 'Scrum prescribes four formal events for inspection and adaptation: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Be alert: the word formal is used in two distinct ways! First, the four formal events for inspection and adaptation, which means a formal opportunity. A formal meeting means a meeting where people approve something and exchange signatures. In that sense, none of the events are formal meetings. The Sprint Review meeting is informal, not a status meeting, and the Increment presentation is intended to elicit feedback and foster collaboration.'
    },
    {
      id: 'q9_55',
      question: 'Which three of the following are not timeboxed?\n\n\n\n\nI. Sprint Zero\n\nII. Sprint Review\n\nIII. Product Backlog Refinement\n\nIV. Sprint\n\nV. Release Planning\n\nVI. Sprint Planning\n\n(choose the best answer)',
      options: [
      'I, II and III',
      'II, IV and VI',
      'II, V, VI',
      'III, IV and V',
      'I, III and V'
      ],
      correctAnswer: [4],
      explanation: 'The three items that are not timeboxed are I. Sprint Zero, III. Product Backlog Refinement, and V. Release Planning. These activities do not have specific timeboxes defined in Scrum. Sprint Zero is not a recognized Scrum event, Product Backlog Refinement is a continuous activity, and Release Planning can vary in duration based on the complexity of the product and the organization\'s needs. On the other hand, II. Sprint Review and VI. Sprint Planning are timeboxed events in Scrum, and IV. Sprint represents a timeboxed iteration.'
    },
    {
      id: 'q9_56',
      question: 'True or False: The self-managing Scrum Team chooses the Scrum artifacts needed for the project.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.'
    },
    {
      id: 'q9_57',
      question: 'At one team, the performance is shown on a burn-down chart that everyone sees. In this case, The Scrum value demonstrated is:\n\n(choose the best answer)',
      options: [
      'Openness',
      'Cross-functionality',
      'Earned Value',
      'Adaptation'
      ],
      correctAnswer: [0],
      explanation: 'Scrum values are: commitment, courage, focus, openness, and respect.'
    },
    {
      id: 'q9_58',
      question: 'True or False: The Scrum Team might pursue multiple Product Goals.',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'The Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.'
    },
    {
      id: 'q9_59',
      question: 'True or False: If a Product Backlog item is not Ready it can be considered for Sprint Planning',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [0],
      explanation: 'The correct answer is A. True. The Scrum Guide allows Product Backlog items that are not "Ready" to be considered for Sprint Planning. However, the Scrum Team must ensure that during Sprint Planning, they collaboratively define the work needed to make the item "Ready" for implementation. The Product Owner, with input from the Development Team, is responsible for ensuring that the selected items are appropriately prepared and have sufficient detail and clarity before being brought into the Sprint.'
    },
    {
      id: 'q9_60',
      question: 'What\'s the role of a Scrum Master during Sprint Retrospectives?\n\n(choose the best answer)',
      options: [
      'Participating as a Scrum Team member',
      'Answering issues of developers and managing delays',
      'Compiling and summarize the conclusions of the meeting to stakeholders',
      'They should not participate in this meeting'
      ],
      correctAnswer: [0],
      explanation: 'The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box. The Scrum Master participates as a peer team member in the meeting from the accountability over the Scrum process.'
    },
    {
      id: 'q9_61',
      question: 'The Increment commits to the Definition of Done. Which of the following explain what Done means?\n\n\n\n\nI - An Increment that could be released to end-users.\n\nII - The work that the Scrum Team is capable of doing given their skills and expertise. \n\nIII - All work performed meets the Definition of Done. \n\nIV - An Increment that is ready for quality control activities such as testing. \n\nV - An Increment that is ready for the Product Owner to perform acceptance testing. \n\n\n\n\n(choose the best answer)',
      options: [
      'I and III',
      'Only I',
      'I, II, and III',
      'I and IV'
      ],
      correctAnswer: [0],
      explanation: 'II - Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. IV - The Definition of Done must reflect the quality measures required for the product, including all quality control activities; V - The Definition of Done must reflect the quality measures required for the product, including acceptance criteria, if the Scrum Team judges to be necessary.'
    },
    {
      id: 'q9_62',
      question: 'You are the Scrum Master of a Scrum Team from an organization that is known to consider on-time delivery and reliability very seriously. A manager detected that your team is not up to speed and that it should increase velocity by 15%. He came to you, the Scrum Master, expecting you to make it happen. How do you respond?\n\n(choose the best answer)',
      options: [
      'You tell the manager to talk to the Product Owner since she is the person responsible for having accurate forecasts.',
      'You present this challenge as a company goal for the Scrum Team while leaving them responsible to define how to achieve it.',
      'You explain how a Scrum Team uses velocity as a forecast for the work to be done next Sprint but not as a prediction of future productivity. Further, you encourage the manager to communicate with the Product Owner for information about the product development progress.',
      'You teach the manager that the velocity only concerns the Scrum Team but invite him to participate in the Sprint Retrospective to help the team improve.'
      ],
      correctAnswer: [2],
      explanation: 'First, it is expected that management will sant to stay updated regarding progress and, you should ensure management and the Product Owner are aligned regarding this matter. Second, you should explain that velocity shouldn’t be used to measure future productivity because it is not an accurate measure of overall value. Focusing solely on increasing velocity may sacrifice other important aspects of successful product development, such as maintaining sustainable pace, ensuring high-quality deliverables, and fostering a healthy team dynamic. Instead of using velocity as a measure of productivity, it is more beneficial to focus on creating a supportive and empowered environment for the team, fostering open communication, and continuously improving the Scrum processes. This approach allows the team to deliver value consistently while adapting to changing requirements and improving their overall effectiveness.'
    },
    {
      id: 'q9_63',
      question: 'You are the Scrum Master of a Scrum Team. During the Daily Scrum, one Developer is constantly discussing technical topics that are interesting but not relevant for the Daily Scrum. What would you do?\n\n\n\n\nI - Manage turn-taking on the Daily Scrum by passing a token around. Each person only speaks while owning the token, which lasts an allotted amount of time. \n\nII - Coach the Developers to help them find a way to solve the problem and own the solution. \n\nIII - Use a timer to limit the time that each Developer can speak at the Daily Scrum. \n\nIV - In private, ask the Developer what he believes are the key outcomes for the Daily Scrum.  Use the opportunity to coach him and help create focus during the Daily Scrum. \n\nV - Raise the issue as an impediment to the Developer\'s manager and ask her to resolve this matter. \n\n(choose the best answer)',
      options: [
      'I and III',
      'II and IV',
      'I, III, and IV',
      'Il and V'
      ],
      correctAnswer: [1],
      explanation: 'I - This hurts self-management.; III - This hurts self-management; V - This hurts self-management.'
    },
    {
      id: 'q9_64',
      question: 'John is a Product Owner working on a Scrum Team on a new release for his product. John used the velocity of the previous release as the reference to estimate that the new release would take ten Sprints. The average velocity of the previous release was twenty Story Points per Sprint. Development is four Sprints underway, with seven more Sprints to go until the release. Further, the Product Backlog has not changed much.\n\nOver the first three Sprints, the average velocity is fifteen, but not all the delivered functionality was tested as needed. The Developers estimate that the unfinished testing would have required 25% of a Sprint’s time. The Developers believe that the required velocity of twenty-three is within their reach. What is the most effective way to recover?\n\n(choose the best answer)',
      options: [
      'The Developers inform John that the progress that he has perceived to date is not correct, because the delivered functionality is not fully tested. In other words, the Increment is not releasable. They tell John their estimated effort for paying off the technical debt and suggest paying it off before proceeding with new features. The Developers also re-estimate the effort to complete the remaining Product Backlog, including testing activities.',
      'The Developers make sure that, for the next Sprints, the selected Product Backlog items are as done as possible. In case the work for a given Sprint is not done, they add it to the next Sprint\'s Sprint Backlog.',
      'The Developers talk to John and schedule a hardening Sprint to take care of the accumulated technical debt caused by lack of testing. It is John\'s responsibility to inform key stakeholders of the impact on the release date.',
      'The Scrum Team must restore transparency by updating the Product Backlog with the undone work. Further, to compensate for the flaws in the past Sprints, the Developers must figure out how to improve their velocity in future Sprints. If needed, the Scrum Master must step in to improve the development process. In case the situation gets out of hand, the Scrum Master assigns a new Scrum Team or cancels the project.'
      ],
      correctAnswer: [0],
      explanation: 'In case the work for a given Sprint is not Done, it is moved back to the Product Backlog. The most effective way to recover in this situation is for the Developers to communicate to John that the delivered functionality is not fully tested and the Increment is not releasable. They should estimate the effort required to pay off the technical debt and suggest addressing it before proceeding with new features. The Developers should also re-estimate the effort needed to complete the remaining Product Backlog, taking into account testing activities. This approach ensures that the necessary testing is performed and the Increment is of high quality before moving forward. Finally, remember that, each Sprint, the Scrum Team should aim to get all the selected Product Backlog items to Done, and should have at least one Increment, fully conforming to the Definition of Done, developed.'
    },
    {
      id: 'q9_65',
      question: 'A Scrum Team is having a hard time scheduling the Daily Scrums because not all Developers work full time and some regularly work from home. To solve this issue, a Developer suggested having Daily Scrums twice a week, when everyone is in the office.\n\nWhat would be three key concerns if the frequency of the Daily Scrum is reduced?\n\nI - The opportunities to inspect progress toward the Sprint Goal and adapt the Sprint Backlog are reduced. Re-aligning is bound to become even more difficult. \n\nII - It becomes challenging for the Scrum Master to update the Burndown chart daily, which hinders the Scrum Master from fulfilling his/her duty of tracking the Sprint’s progress. \n\nIII - The plan for the Sprint might become inaccurate and transparency over progress toward the Sprint Goal is reduced. \n\nIV - It becomes challenging for the Product Owner to accurately report progress about the state of the forecasted work to the stakeholders. \n\nV - Impediments are raised and resolved more slowly. \n\n\n\n\n(choose the best answer)',
      options: [
      'I and III',
      'I, III, and V',
      'III and V',
      'I, II, III, and V',
      'II and IV'
      ],
      correctAnswer: [1],
      explanation: 'II - It is not the Scrum Master’s duty to track the Sprint’s progress; IV - It is not the Product Owner’s duty to report progress of the Sprint to stakeholders.'
    },
    {
      id: 'q9_66',
      question: 'Which of the following statements are correct regarding large-scale product development with Scrum?\n\n\n\n\nI- A well-ordered Product Backlog can minimize or even often eliminate having Developers work on multiple Scrum Teams simultaneously. \n\nII - Scrum Team members must be working full-time on a team. \n\nIII - A person working on multiple Scrum Teams at once is often less productive than working on a single Scrum Team. \n\nIV - It is necessary to change the core Scrum framework for successfully employing Scrum at scale. \n\n\n\n\n(choose the best answer)',
      options: [
      'I and III',
      'Only III',
      'I, III, and IV',
      'I, II, III, and IV'
      ],
      correctAnswer: [0],
      explanation: 'II - Scrum does not mandate having full time members; IV - Scaled Scrum is still Scrum. Nexus does not change the core design or ideas of Scrum, or leave out elements, or negate the rules of Scrum. Doing so covers up problems and limits the benefits of Scrum, potentially even rendering it useless.'
    },
    {
      id: 'q9_67',
      question: 'At the sixth Sprint Retrospective, the Product Owner is very disappointed. He claims that the technical debt has increased and that the product is not up to his expectations. Consequently, he claims that the product will need extra Sprints to meet security requirements. Which of the following could be true about this Scrum Team? \n\n\n\n\nI - The Sprint Retrospectives have not been used effectively by the Scrum Team. \n\nII - The Developers have not instilled the necessary quality into the product. \n\nIII - The Developers are fulfilling their accountability and they cannot be held responsible for the product having poor quality. \n\nIV - The Scrum Master has not ensured that the Scrum Team is being transparent. \n\n\n\n\n(choose the best answer)',
      options: [
      'III and IV',
      'I, II and IV',
      'I and IV',
      'II, III, and IV'
      ],
      correctAnswer: [1],
      explanation: 'III - The Developers are responsible for instilling quality by adhering to the Definition of Done. Further, having an appropriate Definition of Done is an accountability shared by the whole Scrum Team.'
    },
    {
      id: 'q9_68',
      question: 'You are the Scrum Master of a Scrum Team. Your team is conducting a Sprint Planning. The timebox of the event is almost expiring and the Product Owner and Developers have not been able to get into an agreement about the highest order Product Backlog items. Because of this situation, the Developers are having a hard time forecasting which Product Backlog items they could get Done by the end of the Sprint. However, at the beginning of the event, the Product Owner successfully point the Scrum Team to the business objective that she was hoping to achieve this Sprint. Which of the following action would you support?\n\n(choose the best answer)',
      options: [
      'They discuss in the upcoming Sprint Review why this happened and what changes will make it less likely to recur.',
      'The team should interrupt the Sprint Planning so that everybody takes as much time as they need to study the Product Backlog items first. Whenever they are ready, they meet again to wrap up Sprint Planning before the Sprint can start.',
      'If everybody agrees, they should continue with the Sprint Planning past its timebox until they are able to define the Sprint Backlog.',
      'The Developers forecast the Product Backlog items that are most likely to meet the business objective and define the Sprint Backlog. Once the timebox of Sprint Planning elapses, the event is done, and the Scrum Team starts working on the Product Backlog. During the Sprint, they continue to refine additional functionality as needed.'
      ],
      correctAnswer: [3],
      explanation: 'A Sprint, or any of the contained events, cannot be interrupted. Further, there are no intervals between Sprints.In this case, The Developers should forecast the Product Backlog items that are most likely to meet the business objective and define the Sprint Backlog within the timebox of the Sprint Planning event. Once the timebox expires, the event is done, and the Scrum Team starts working on the defined Sprint Backlog. Additional refinement and adjustments can be made during the Sprint as needed. It\'s important to adhere to the timebox to maintain the cadence and rhythm of the Scrum events. Later, the Scrum Team might discuss the causes of these issues during the Sprint Retrospective.'
    },
    {
      id: 'q9_69',
      question: 'You are the Scrum Master of a Scrum Team. During Sprint Planning, the Developers selected five Product Backlog items for the current Sprint. However, at the end of the Sprint, they were not able to meet the Definition of Done for two of the selected Product Backlog items. Given this, they ask you what should they do with these incomplete Product Backlog items? What would you suggest they do?\n\n\n\n\nI - The items are not included in the Increment for this Sprint. \n\nII - The items are put on the Product Backlog for the Product Owner to decide what to do with it.\n\nIII - The items must be reviewed during Sprint Review. Further, the done part of each of these items should be considered for the team’s velocity. Finally, new Product Backlog items must be created for the remaining work. \n\nIV - It is up to the stakeholders to decide over accepting undone work or even releasing it. \n\n\n\n\n(choose the best answer)',
      options: [
      'I and II.',
      'I and III.',
      'I, II, III and IV.',
      'I, II, and IV.'
      ],
      correctAnswer: [0],
      explanation: 'III - If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration; IV - It does not depend on the stakeholders. If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.'
    },
    {
      id: 'q9_70',
      question: 'You are working with a product which has performance as a key requirement. The manager of a Scrum Team which has you as the Scrum Master suggests to you that performance testing should only be performed every other Sprint because it is too costly. He wants to know your opinion. What would you say?\n\n(choose the best answer)',
      options: [
      'It depends on what is stated in their Definition of Done.',
      'It is not a good idea, because the Increment will lose transparency, making the feedback longer than needed, and hinder empiricism.',
      'It is a good idea, because we could save money.'
      ],
      correctAnswer: [1],
      explanation: 'Since performance is a key requirement, it must be part of the Definition of Done. It is not a good idea to perform performance testing every other Sprint because it can compromise the transparency of the Increment and hinder the effectiveness of feedback and empiricism. Performance is a critical requirement, and regular testing ensures that the desired performance levels are achieved and maintained throughout the development process. Skipping performance testing in alternate Sprints may lead to delayed detection of performance issues, making it more challenging to address them promptly and impacting the overall quality of the product. Therefore, it is important to prioritize performance testing as an integral part of each Sprint to ensure the desired performance standards are met.'
    },
    {
      id: 'q9_71',
      question: 'True or False: By adopting Scrum you guarantee that adding more people to a team proportionally increases the value delivered',
      options: [
      'TRUE',
      'FALSE'
      ],
      correctAnswer: [1],
      explanation: 'Changing the team’s structure might reduce its productivity in the short term. Further, the more people you have in a team, the more complex is communication.'
    },
    {
      id: 'q9_72',
      question: 'You are a Scrum Master assisting five Scrum Teams that are working on the same product. At this point, you are discussing with them about integrating their work for developing the Increments. Many opinions were shared by the future Scrum Team members. Which of the following would you support?\n\n(choose the best answer)',
      options: [
      'All Scrum Teams agree on a shared Definition of Done that describes all work needed to deliver an Increment that is the integrated sum of the work from all Scrum Teams.',
      'Each Sprint, each Scrum Team works on a separated Increment. During the Sprint Review, they identify the work needed to integrate with the other Scrum Teams. The Product Owner adds the work to the Product Backlog.',
      'On early Sprints, they don\'t need to worry much about integration. Conversely, they should focus on delivering business value.',
      'Each Sprint, each Scrum Team works on a separated Increment focusing on the feature or components that they are responsible for. Later, they scheduled a release Sprint with the Product Owner for performing the necessary integration and stabilization.'
      ],
      correctAnswer: [0],
      explanation: 'All Scrum Teams agree on a shared Definition of Done that describes all work needed to deliver an Increment that is the integrated sum of the work from all Scrum Teams. By having a shared Definition of Done, the Scrum Teams ensure that their individual Increments are compatible and can be seamlessly integrated to create a useful, valuable Increment every Sprint. This approach promotes collaboration, alignment, and transparency among the Scrum Teams, enabling them to work towards a common goal and deliver a cohesive product. It also helps identify any dependencies or integration challenges early on and allows for effective coordination and synchronization of efforts across the Scrum Teams.'
    },
    {
      id: 'q9_73',
      question: 'You are the Scrum Master of a novice Scrum Team. Halfway through the Sprint, the Product Owner is worried and looks for your guidance. He claims that the Developers are not going to be able to meet the forecast that they developed during Sprint Planning. What would you tell him?\n\n(choose the best answer)',
      options: [
      'Teach him that the Scrum Team focuses on achieving the Sprint Goal, not the forecast.',
      'That you will talk to the Developers and motivate them to meet their forecast.',
      'That you will add more Developers to the Scrum Team.'
      ],
      correctAnswer: [0],
      explanation: 'Adding more Developers will not solve the issue. The Product Owner must first understand the difference of the forecast of the Sprint and Sprint Goal.The Scrum Team\'s primary focus should be on working collaboratively to achieve the Sprint Goal, which represents the purpose and objective of the current Sprint. While the forecast made during Sprint Planning provides an estimation of the work that the Developers believe they can complete, it is not a rigid commitment. The Scrum Team should adapt and adjust their approach as needed to maximize value delivery and meet the Sprint Goal. It is important to encourage the Product Owner to engage in a conversation with the Developers to understand the reasons behind the concern and explore potential solutions together.'
    },
    {
      id: 'q9_74',
      question: 'You are the Scrum Master of a Scrum Team. The Product Owner has been using the Daily Scrum to gather information regarding the Sprint progress. He feels that, for the project to succeed, it is vital that he tracks what every Developer is working on every day. What is the best thing for you to do?\n\n(choose the best answer)',
      options: [
      'Coach the Product Owner and the Developers on the purpose of the Daily Scrum and other Scrum events and let them figure out how to deal with this situation.',
      'Start participating on the Daily Scrum and resolve any conflicts between the Product Owner and the Developers.',
      'Nothing. If the Developers agree with the Product Owner\'s management style, he can continue attending the Daily Scrums to track progress.',
      'Talk with the Product Owner and tell him to stop attending the Daily Scrum.'
      ],
      correctAnswer: [0],
      explanation: 'The Daily Scrum is an event for the Developers of the Scrum Team. By letting the Product Owner actively participate in them, the Scrum Master is violating a Scrum rule, which he is accountable for.'
    },
    {
      id: 'q9_75',
      question: 'You are the Scrum Master for four Scrum Teams working on the same product. One of your organization’s managers suggested standardizing the velocity across all teams. According to her, it would be a way to better assess the delivered value and assist in improving the teams’ productivity. What would you respond to?\n\n\n\n\nI - Velocity is the amount of Product Backlog items turned into an Increment of product during a Sprint, tracked by the Developers for use within the Scrum Team. \n\nII - Using velocity as the basis for incentive programs can boost the Scrum Team’s morale. \n\nIII - Standardizing the velocity across the four teams will help compare which teams are productive and create more value. \n\nIV - There is no direct relationship between velocity and value.\n\n\n\n\n(choose the best answer)',
      options: [
      'II and III.',
      'I, II and IV.',
      'I and IV.',
      'III and IV.'
      ],
      correctAnswer: [2],
      explanation: 'II - Using the velocity as the basis for incentive programs can boost the Scrum Team’s morale; III - Velocity is subjective and an easy indicator to be gamed. By using it as the basis for comparing teams, the members of the Scrum Teams will have the sense of broken trust and frustration.'
    },
    {
      id: 'q9_76',
      question: 'During a Sprint Review, a key stakeholder points that the budget for the project was reduced given external factors. Given this, an emotional argument follows. As a Scrum Master, what is your best option?\n\n(choose the best answer)',
      options: [
      'Ask for a short break for people to calm down and be objective.',
      'Encourage the stakeholders to keep getting more work for the Scrum Team, so that they are busy.',
      'Argue that the budget cannot be reduced and that additional funding must be provided.',
      'Let the Product Owner handle the matter, since he is responsible for the Sprint Reviews.'
      ],
      correctAnswer: [0],
      explanation: 'In a situation where emotions are running high and an argument is escalating, it is important to create a space for everyone to regain composure and approach the discussion with a calmer and more objective mindset. Asking for a short break allows time for individuals to gather their thoughts, control their emotions, and promote a more productive and respectful conversation. As the Scrum Master, it is your role to facilitate effective communication and maintain a positive and collaborative atmosphere during Scrum events.'
    },
    {
      id: 'q9_77',
      question: 'You are the Scrum Master of a Scrum Team. After a Sprint Review, the Product Owner comes to talk to you, because he is very worried that the stakeholders are not satisfied with the product. During the Sprint Review, the stakeholders confessed that the product being built is not useful for them. The Product Owner would like you to help him identify what led to this situation. What would you tell him?\n\n\n\n\nI - The frequency of interaction between the Product Owner and the stakeholders is not enough. \n\nII - The project manager is not engaged causing the project plan to be inaccurate. \n\nIII - The stakeholders are not participating in the Daily Scrum \n\nIV - The stakeholders have not been using the Sprint Reviews to actively engage and inspect and evaluate progress. \n\nV - The change request process plan has not been followed properly. \n\n\n\n\n(choose the best answer)',
      options: [
      'I, II, IV, and V.',
      'I and IV.',
      'II and V.',
      'I, II, III, IV, and V.'
      ],
      correctAnswer: [1],
      explanation: 'II - There is no project plan in Scrum. Further, even if it is the case of Scrum being adopted in a project, this would not be a major cause for the problem; III - The Daily Scrum is only for the Developers. V - Scrum does not prescribe a change request process. Further, even if it is the case, this would not be a major cause for the problem.'
    },
    {
      id: 'q9_78',
      question: 'Scrum Teams self-manage. What does that mean?\n\n\n\n\nI - The Developers assign the tasks to be worked on during Sprint Planning and make sure to get all the committed tasks done by the end of the Sprint. \n\nII - Scrum Teams are able to resolve internal conflicts. \n\nIII - The Scrum Master assigns the tasks to the Developers daily.\n\nIV - Scrum Teams are flexible and creative. \n\n\n\n\n(choose the best answer)',
      options: [
      'I, II, III and IV.',
      'II and IV.',
      'I, II, and IV.',
      'I and IV.'
      ],
      correctAnswer: [1],
      explanation: 'I - The Developers commit to the Sprint Goal, not the tasks forecasted during Sprint Planning. Further, throughout the Sprint, they further refine the Sprint Backlog and define what to work on next. III - The Developers decide who does what.'
    },
    {
      id: 'q9_79',
      question: 'You have just been hired as a Scrum Master by an organization new to Scrum. You are going to be the Scrum Master of three new Scrum Teams that will work on a product. The organization assigned three Product Owners but looks for your input. What would you suggest?\n\n\n\n\nI - Each Scrum Team has a Product Backlog. \n\nII - There should only be one Product Backlog for the new product. \n\nIII - Having one Product Owner will improve the clarity of accountability to the teams and to the product management department. \n\nIV - It is fine to have three Product Owners, but they need to assign a chief Product Owner to centralize decision-making. \n\nV - There should only be one Product Owner. \n\n\n\n\n(choose the best answer)',
      options: [
      'I and II.',
      'II and V.',
      'II, III and V.',
      'I and IV.'
      ],
      correctAnswer: [2],
      explanation: 'I - Each Product has one Product Backlog. IV - Each Product has one Product Owner and Scrum does not contain a "chief Product Owner" accountability. --- From what we have studied, we know that II and V would be better worded if it had "must" instead of "should", because they are rules. But, the real assessment is not always very strict with these words and you need to analyze the possible answers. In this case, the best answer is II, III, and V, so go for it. If we had the option of marking only "III", it would be the best option.'
    },
    {
      id: 'q9_80',
      question: 'Which of the following statements reflect Scrum\'s Respect value?\n\n(choose the best answer)',
      options: [
      'Respect the diversity of opinions, backgrounds, experience, and skills of the Developers.',
      'Respect the Product Owner by letting them change the Sprint Goal during the Sprint.',
      'Respect the Scrum Master by letting him assign tasks during the Daily Scrum.',
      'Respect management by reporting progress during the Daily Scrum.',
      'Respect the Product Owner by making sure that the work forecasted during Sprint Planning is Done by the end of the Sprint.'
      ],
      correctAnswer: [0],
      explanation: 'Respecting the diversity and contributions of the Developers is an essential aspect of Scrum. It recognizes that every team member brings unique perspectives, knowledge, and skills to the table, promoting collaboration, inclusivity, and valuing each individual\'s input.'
    },
  ]
};
      export default exam;
