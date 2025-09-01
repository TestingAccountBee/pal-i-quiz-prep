const exam = {
  id: 'psm-i-mock-4',
  title: 'PSM I Mock Exam #4',
  description: 'Professional Scrum Master Level I practice exam #4 based on provided content.',
  timeLimit: 60,
  passingScore: 85,
  questions: [
    {
      id: 'q4_81',
      question: 'Which of the following are appropriate topics for the Scrum Team to discuss during a Sprint Retrospective?',
      options: [
        'Team collaboration',
        'Refine the Product Backlog items',
        'The Scrum Team\'s processes and tools',
        'Definition of Done',
        'Refine the top items of the Product Backlog to make sure that they are Ready for the next Sprint',
      ],
      correctAnswer: [0, 2, 3],
      explanation: 'During a Sprint Retrospective, the Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. While the process of "Product Backlog Refinement" might be discussed, the retrospective is not the event for actually refining the items.'
    },
    {
      id: 'q4_82',
      question: 'Which agile aspect refuses what is often considered a “necessary evil” in many industries – long work hours, overtime, or even working nights or weekends?',
      options: [
        'Continuous Delivery.',
        'Small releases.',
        'DevOps.',
        'Sustainable pace.',
      ],
      correctAnswer: 3,
      explanation: 'Sustainable pace is the agile concept that addresses long work hours and overtime. While not explicitly named in the Scrum Guide, it is reinforced through Sprint Planning, where only the Developers determine how many items to pull from the Product Backlog, ensuring they do not overcommit. This practice helps improve the team\'s focus and consistency.'
    },
    {
      id: 'q4_83',
      question: 'What is Scrum?',
      options: [
        'A framework for developing, delivering, and sustaining complex products.',
        'A process that includes the best industry practices for developing software.',
        'A prescriptive process following the principles of Lean Management.',
        'A cookbook for working within complex environments.',
      ],
      correctAnswer: 0,
      explanation: 'Scrum is a framework within which people can address complex adaptive problems while creatively delivering products of the highest possible value. It is not a process or technique itself, but a container within which various processes and techniques can be employed.'
    },
    {
      id: 'q4_84',
      question: 'What does the Cone of Uncertainty present?',
      options: [
        'The dependencies, resources, and estimated effort for a project’s tasks and budget.',
        'How the product\'s knowledge evolves.',
        'The project schedule.',
        'The remaining work for a project.',
      ],
      correctAnswer: 1,
      explanation: 'The Cone of Uncertainty describes how project unknowns decrease over time. At the beginning of a project, estimates have large uncertainty, but as more research and development are done, more is learned, and the uncertainty decreases.'
    },
    {
      id: 'q4_85',
      question: 'True or False: Scrum is both an incremental and iterative agile way of delivering work.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 0,
      explanation: 'Scrum is an agile framework that is both incremental and iterative. Incremental means work is delivered in small, usable pieces, and iterative means the work is continuously improved upon, with each iteration building on the last.'
    },
    {
      id: 'q4_86',
      question: 'What is Scrum founded on?',
      options: [
        'Lean Thinking and Scientific Management',
        'Just In Time Principles and Rapid Application Development',
        'Empiricism and Lean Thinking',
        'Extreme Management and Lean Canvas',
        'Adaptive Learning and Agility',
      ],
      correctAnswer: 2,
      explanation: 'Empiricism asserts that knowledge comes from experience, and Scrum uses this through an iterative, incremental approach to optimize predictability and control risk. Lean Thinking focuses on eliminating waste and delivering value, principles which are incorporated into Scrum.'
    },
    {
      id: 'q4_87',
      question: 'What are the pillars of empiricism?',
      options: [
        'Manage flow, Visualize workflow, Eliminate Waste',
        'Continuous Delivery, Whole Team, Kaizen',
        'Inspection, Planning, Transparency',
        'Eliminate Waste, Quickly Respond to Changes, Transparency',
        'Inspection, Adaptation, Transparency',
      ],
      correctAnswer: [2, 4],
      explanation: 'Empiricism, a theory that knowledge comes from experience, is used in Scrum to control risk and optimize predictability through its three pillars: Inspection, Adaptation, and Transparency.'
    },
    {
      id: 'q4_88',
      question: 'Which Scrum value is manifested when an information radiator such as a burndown, burnup, or cumulative flow chart is made available so that everyone can see it?',
      options: [
        'Adaptation',
        'Simplicity',
        'Openness',
        'Transparency',
        'Communication',
      ],
      correctAnswer: 2,
      explanation: 'Openness is a Scrum value where the team and stakeholders agree to be transparent about work and challenges. An information radiator like a burndown chart is an example of this, as it makes progress and challenges visible to everyone.'
    },
    {
      id: 'q4_89',
      question: 'What statement best describes the Product Owner\'s accountability?',
      options: [
        'Defining the work to be performed by the Developers.',
        'Maximizing the value of the product resulting from the work of the Scrum Team.',
        'Estimating the effort of each Product Backlog item.',
        'Describing each Product Backlog item following the Definition of Ready.',
      ],
      correctAnswer: 1,
      explanation: 'The Product Owner is accountable for maximizing the value of the product by managing the Product Backlog, which is the single source of work for the Scrum Team.'
    },
    {
      id: 'q4_90',
      question: 'What is the role of Management in Scrum?',
      options: [
        'Procurement management, making sure that the Scrum Team follows the contract\'s terms.',
        'Make sure that the project\'s budget is being used as planned.',
        'Monitor the Scrum Team\'s productivity and deliverables\' quality.',
        'Embrace bottom-up intelligence by providing information to the Scrum Team, supporting its empiricism, and trusting it to learn about the problem at hand.',
      ],
      correctAnswer: 3,
      explanation: 'Management\'s role in Scrum is to support the team by providing a conducive environment, which includes providing necessary information, removing impediments, and trusting the team to self-organize and make decisions.'
    },
    {
      id: 'q4_91',
      question: 'Which of the below are accountabilities on a Scrum Team?',
      options: [
        'Product Manager, Scrum Master, Testers, Developers',
        'Project Manager, Product Manager, Development Team',
        'Product Owner, Scrum Master, Developer',
        'Product Owner, Project Manager, Scrum Master',
        'Chicken and Pigs',
      ],
      correctAnswer: [2, 0],
      explanation: 'A Scrum Team consists of three specific accountabilities: a Product Owner, a Scrum Master, and Developers. The Product Owner maximizes product value, the Scrum Master establishes Scrum practices, and the Developers create a usable Increment each Sprint.'
    },
    {
      id: 'q4_92',
      question: 'What is the primary service that the Scrum Master provides to help the Developers maximize their productivity?',
      options: [
        'Update the burndown chart daily.',
        'Ensure that the meetings are executed during the planned schedule and time-box.',
        'Facilitate decisions of the Developers.',
        'Ensure the task management tools (such as Jira) are updated.',
      ],
      correctAnswer: 2,
      explanation: 'The Scrum Master helps maximize the Developers\' productivity by facilitating their decision-making process. This includes helping them remove impediments and coaching them on effective collaboration and self-management.'
    },
    {
      id: 'q4_93',
      question: 'The Developers should have all the skills needed to:',
      options: [
        'Create a product Increment.',
        'Deliver a product Increment, except for specialized quality control that requires specialized skills or resources.',
        'Deliver all the work committed to the Product Owner within the project plan\'s date and cost.',
      ],
      correctAnswer: 0,
      explanation: 'According to the Scrum Guide, Developers should possess all the necessary skills to create a product Increment. They are the people in the Scrum Team committed to creating any aspect of a usable Increment each Sprint, which requires them to have all the needed skills to complete the work.'
    },
    {
      id: 'q4_94',
      question: 'Who has the final say on the Product Backlog ordering?',
      options: [
        'The Developers',
        'The Product Owner',
        'The Scrum Master',
        'The CEO',
        'The Paying Customer',
      ],
      correctAnswer: 1,
      explanation: 'The Product Owner is accountable for managing the Product Backlog, which includes ordering the work to maximize value.'
    },
    {
      id: 'q4_95',
      question: 'True or False: The Scrum Master is a manager.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 0,
      explanation: 'The Scrum Master manages the process through the Scrum framework. However, unlike a traditional manager, they do not manage people or have authority over them.'
    },
    {
      id: 'q4_96',
      question: 'True or False: The only Product Backlog items that the Scrum Team can select during Sprint Planning are the ones considered Ready (i.e., can be done within one Sprint).',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'According to the Scrum Guide, there is no requirement that items selected during Sprint Planning must be considered "Ready." The Developers forecast the functionality to be developed and collaborate with the Product Owner to understand the Sprint Goal\'s scope.'
    },
    {
      id: 'q4_97',
      question: 'True or False: The Product Goal represents the desired end state whenever all the Product Backlog items must be "Done."',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Product Goal describes a long-term objective for the product and serves as a planning target for the Scrum Team. A Product Goal can be achieved without all Product Backlog items being completed, as the understanding of the goal refines over time.'
    },
    {
      id: 'q4_98',
      question: 'Which statement best describes a Product Backlog?',
      options: [
        'Large Product Backlog items are described as Epics and smaller ones as User Stories.',
        'Product Backlog items include test descriptions that prove their completeness when "Done."',
        'An emergent ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.',
      ],
      correctAnswer: 2,
      explanation: 'The Product Backlog is an evolving, ordered list of everything needed for a product and serves as the single source of work for the Scrum Team.'
    },
    {
      id: 'q4_99',
      question: 'True or False: The Product Backlog might commit to a Product Goal.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Product Backlog must have a Product Goal as its commitment. The Product Goal is a future state of the product that serves as a target for the Scrum Team to plan against.'
    },
    {
      id: 'q4_100',
      question: 'True or False: An Increment can only be released after a Sprint is over.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'Scrum does not prescribe when to release the Increment.'
    },
    {
      id: 'q4_101',
      question: 'True or False: If the Definition of Done for an Increment is part of the organization\'s standards, all Scrum Teams must follow it as a minimum.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 0,
      explanation: 'If an organization has standards for the Definition of Done, all Scrum Teams must adhere to it as a minimum requirement. The Definition of Done ensures transparency by providing a shared understanding of the work completed and the quality standards met.'
    },
    {
      id: 'q4_102',
      question: 'True or False: Scrum requires the Increment to be released at the end of every Sprint.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'Scrum does not mandate when to release the Increment.'
    },
    {
      id: 'q4_103',
      question: 'Which of the following best describes the Increment?',
      options: [
        'The Increment cannot be released during the Sprints; the Product Owner must wait for the Sprint to be over to release it.',
        'The Increment is released at the end of every Sprint.',
        'The moment a Product Backlog item meets the Definition of Done, an Increment is born.',
      ],
      correctAnswer: 2,
      explanation: 'An Increment is a concrete step toward the Product Goal and is created the moment a Product Backlog item meets the Definition of Done. It can be released at any time during the Sprint.'
    },
    {
      id: 'q4_104',
      question: 'Who creates the Definition of Done?',
      options: [
        'The Product Owner as he/she is responsible for the product\'s success',
        'The Scrum Team, in a collaborative effort where the result is the common denominator of all members\' definitions',
        'The development organization (or Scrum Team if none is available from the development organization)',
        'The Scrum Master as he/she is accountable for the Scrum Team\'s effectiveness.',
      ],
      correctAnswer: 2,
      explanation: 'The Definition of Done (DoD) is established by the development organization, with input from all Scrum Team members, to define the quality criteria for a complete increment.'
    },
    {
      id: 'q4_105',
      question: 'True or False: The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 0,
      explanation: 'The Sprint Backlog is a plan created by the Scrum Team that includes the work needed to deliver the Increment and achieve the Sprint Goal.'
    },
    {
      id: 'q4_106',
      question: 'True or False: The work planned during Sprint Planning must be decomposed into one day or fewer units.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'This is a recommendation, not a rule.'
    },
    {
      id: 'q4_107',
      question: 'True or False: The Scrum Master defines the Sprint Goal during Sprint Planning.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'During Sprint Planning, the entire Scrum Team collaborates to define a Sprint Goal that communicates the value of the Sprint to stakeholders.'
    },
    {
      id: 'q4_108',
      question: 'What is the time-box for the Sprint Planning for a two weeks Sprint?',
      options: [
        '4 hours.',
        '2 hours.',
        '8 hours or less.',
        'It depends.',
      ],
      correctAnswer: 2,
      explanation: 'Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.'
    },
    {
      id: 'q4_109',
      question: 'During the Sprint, the CEO asks the Developers to add work on something critical not part of the Sprint Backlog. What should the Developer do?',
      options: [
        'Since it is critical, add the item to the current Sprint and drop a less important item of equal size.',
        'Add it to the Product Backlog.',
        'Start working on it.',
        'Let the Product Owner be aware so that he or she handles the requests of the CEO.',
      ],
      correctAnswer: 3,
      explanation: 'If a stakeholder requests new work during a Sprint, Developers should inform the Product Owner, who manages the Product Backlog and prioritizes work.'
    },
    {
      id: 'q4_110',
      question: 'The Sprint Backlog is a plan by and for the Developers. (Which of the following statement is FALSE?)',
      options: [
        'An output of the Sprint Planning is the Sprint Backlog, which consists of all the tasks to be executed during the Sprint.',
        'The Developers may ask the Product Owner for clarifications during the Sprint.',
        'The Sprint Backlog is emergent.',
        'Work can be removed or added through the collaboration between the Developers and the Product Owner.',
      ],
      correctAnswer: 0,
      explanation: 'The Sprint Backlog immediately after Sprint Planning contains some, but not all, of the tasks to be executed. The Sprint Backlog emerges and is updated throughout the Sprint as more is learned.'
    },
    {
      id: 'q4_111',
      question: 'When does a Developer become the owner of a work unit (i.e., work item, task, technical task, or task card)?',
      options: [
        'Whenever the Scrum Master allocates it to him/her.',
        'Never.',
        'During Sprint Planning.',
        'During Daily Scrums.',
      ],
      correctAnswer: 1,
      explanation: 'In Scrum, individual Developers do not own specific work units. The Developers collectively own the work and collaborate to complete the Sprint Backlog items, allowing for flexibility and shared responsibility.'
    },
    {
      id: 'q4_112',
      question: 'The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). (Which of the following sentences is FALSE?)',
      options: [
        'The Sprint Backlog makes all of the work that the Developers identify as necessary to meet the Sprint Goal.',
        'The Developers modify the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint.',
        'The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum.',
        'The Developers commit to the Sprint Backlog.',
      ],
      correctAnswer: 3,
      explanation: 'The Sprint Backlog is a forecast. The Developers commit to the Sprint Goal.'
    },
    {
      id: 'q4_113',
      question: 'True or False: The only valid reason for having a Sprint be canceled is the Sprint Goal becoming obsolete, but only the Scrum Master can make such a decision.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'Only the Product Owner has the authority to cancel the Sprint.'
    },
    {
      id: 'q4_114',
      question: 'When is a Sprint over?',
      options: [
        'When the time-box is over.',
        'Last day of the month.',
        'When the Product Owner accepts the work delivered by the Developers.',
        'When all the work planned for the Sprint is Done.',
      ],
      correctAnswer: 0,
      explanation: 'In Scrum, a Sprint is a fixed, time-boxed period. It ends when the time-box concludes, regardless of the work completed, to ensure predictability for planning and inspection.'
    },
    {
      id: 'q4_115',
      question: 'The length of a Sprint should be:',
      options: [
        'Short enough to handle business risks.',
        'Short enough to synchronize with other business events.',
        'All of these answers are correct.',
        'At most, one month.',
      ],
      correctAnswer: 2,
      explanation: 'A Sprint\'s length should be short enough to manage business risks and align with other business events, while also being no more than one month to allow for frequent feedback and inspection.'
    },
    {
      id: 'q4_116',
      question: 'Consider that the first Sprint has just ended. When does the second Sprint begin?',
      options: [
        'Next Monday.',
        'Immediately.',
        'When the Product Backlog Items are Ready.',
        'Next week.',
      ],
      correctAnswer: 1,
      explanation: 'In Scrum, Sprints follow a continuous cycle. The next Sprint begins immediately after the Sprint Review and Sprint Retrospective of the previous one to maintain rhythm and minimize delays.'
    },
    {
      id: 'q4_117',
      question: 'What is a valid reason for the Scrum Master to be at the Daily Scrum?',
      options: [
        'To update the burndown.',
        'To conduct the meeting, making sure that everybody answers the three questions.',
        'To collect the status from the Developers and, if necessary, report to upper management.',
        'The Scrum Master does not have to be at the Daily Scrum; however, he or she must ensure that the Developers hold it.',
      ],
      correctAnswer: 3,
      explanation: 'The Scrum Master is not required to attend the Daily Scrum but must ensure it takes place. The event is for the Developers to synchronize and plan, and the Scrum Master\'s role is to support the team\'s understanding and effective execution of it.'
    },
    {
      id: 'q4_118',
      question: 'The Scrum Guide says that Daily Scrum is held at the same time and place. Why?',
      options: [
        'Such consistency reduces complexity.',
        'To have it run in the team\'s War Room.',
        'To avoid having people arriving late.',
        'To ease the process of booking rooms since this might be challenging in large-scale organizations.',
      ],
      correctAnswer: 0,
      explanation: 'Holding the Daily Scrum at the same time and place each day is advised to reduce complexity. This consistency helps establish a predictable rhythm and improves communication and collaboration within the team.'
    },
    {
      id: 'q4_119',
      question: 'The timebox for a Daily Scrum for a two-week Sprint is?',
      options: [
        'Seven minutes.',
        '15 minutes.',
        'Four hours.',
        'Three minutes per person.',
        'As long as necessary to answer the three questions.',
      ],
      correctAnswer: 1,
      explanation: 'The timebox for the Daily Scrum is always 15 minutes, regardless of the Sprint length, to keep the meeting focused on daily synchronization rather than lengthy discussions.'
    },
    {
      id: 'q4_120',
      question: 'Who must attend the Daily Scrum?',
      options: [
        'The Developers and the Product Owner.',
        'The Scrum Team.',
        'The Developers.',
        'The Developers and Scrum Master.',
      ],
      correctAnswer: 2,
      explanation: 'The Daily Scrum is an event for the Developers. The Scrum Guide requires their attendance for work synchronization and planning. While the Product Owner and Scrum Master may attend, their presence is optional.'
    },
    {
      id: 'q4_121',
      question: 'How much work must the Developers do to a Product Backlog item it selects for a Sprint?',
      options: [
        'All development work, except for specialized ones that require additional resources such as environments and tools.',
        'Analysis, specification, architecture, design, programming, testing, documentation, and deployment.',
        'As much as negotiated with the Product Owner and in conformance with the Definition of Done.',
        'As much as possible.',
      ],
      correctAnswer: 2,
      explanation: 'Developers collaborate with the Product Owner to select items for the Sprint and are responsible for turning them into an Increment that meets the Definition of Done (DoD), which sets the quality criteria.'
    },
    {
      id: 'q4_122',
      question: 'True or False: The Sprint Review is a formal meeting for demonstrating the Increment.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Sprint Review is a collaborative, informal event for inspecting the Increment and adapting the Product Backlog. It is not a formal presentation or status meeting, but a discussion where stakeholders provide feedback to shape the product\'s future.'
    },
    {
      id: 'q4_123',
      question: 'Which statement best describes the Sprint Review?',
      options: [
        'It is when management verifies the tasks performed by the Developers during a Sprint.',
        'It is when the Scrum Team demonstrates the work done for everyone in the organization.',
        'The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.',
      ],
      correctAnswer: 2,
      explanation: 'The Sprint Review is designed to inspect the Sprint\'s outcome and decide on future adaptations. It involves collaboration between the Scrum Team and stakeholders to gather feedback on the Increment and refine the plan moving forward.'
    },
    {
      id: 'q4_124',
      question: 'The Sprint Review is time-boxed to?',
      options: [
        'Four hours for a monthly Sprint; it is usually shorter for shorter Sprints.',
        'Four hours.',
        'Once a Sprint.',
        'As long as the Product Owner needs.',
        'Three hours for a monthly Sprint; it is usually shorter for shorter Sprints.',
      ],
      correctAnswer: 0,
      explanation: 'The Sprint Review is time-boxed to four hours for a monthly Sprint and is typically shorter for shorter Sprints.'
    },
    {
      id: 'q4_125',
      question: 'The Sprint Retrospective is time-boxed to:',
      options: [
        'Four hours and longer as needed.',
        'Three hours for a monthly Sprint. For shorter Sprints, it is usually shorter.',
        'As long as the Scrum Master defines.',
        'Four hours for a monthly Sprint. For shorter Sprints, it is usually shorter.',
        'One day.',
      ],
      correctAnswer: 1,
      explanation: 'The Sprint Retrospective has a maximum timebox of three hours for a one-month Sprint and is usually shorter for shorter Sprints.'
    },
    {
      id: 'q4_126',
      question: 'True or False: The Scrum Team must choose at least one high-priority process improvement identified during the Sprint Retrospective and place it in the Sprint Backlog.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'While the Scrum Team should identify and discuss process improvements during the Sprint Retrospective, there is no mandate to place them in the next Sprint Backlog.'
    },
    {
      id: 'q4_127',
      question: 'Which statement best describes the Sprint Retrospective?',
      options: [
        'It is an opportunity for the Scrum Team to plan ways to increase quality and effectiveness',
        'It is when the Developers inspect the outcome of a Sprint and figure out what to do next.',
        'It is a mechanism for management to control tasks developed by the Developers during a Sprint.',
      ],
      correctAnswer: 0,
      explanation: 'The Sprint Retrospective allows the Scrum Team to plan ways to enhance quality and effectiveness. During this event, the team reflects on the past Sprint to identify improvements for future Sprints.'
    },
    {
      id: 'q4_128',
      question: 'Who must participate in Sprint Retrospectives?',
      options: [
        'The Scrum Master and The Developers.',
        'The Developers and The Product Owner.',
        'The Scrum Team.',
        'The Developers and The Project Manager.',
        'The Scrum Team and key stakeholders',
      ],
      correctAnswer: 2,
      explanation: 'The Sprint Retrospective is an event for the entire Scrum Team, including the Product Owner, Scrum Master, and Developers, to reflect on the past Sprint and identify improvements.'
    },
    {
      id: 'q4_129',
      question: 'True or False: When multiple teams work together on the same product, each team has its Product Owner. Therefore, it is possible to have multiple Product Owners for the same product.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'For a single product, there should be only one Product Owner to maximize value and maintain a unified vision, even if multiple teams are involved.'
    },
    {
      id: 'q4_130',
      question: 'True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog to reduce complexity.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'When multiple teams collaborate on one product, they should use a single Product Backlog to ensure transparency, alignment, and effective coordination.'
    },
    {
      id: 'q4_131',
      question: 'Who describes the Definition of Done in the case of multiple Scrum Teams working on a single product?',
      options: [
        'It depends on the type of product.',
        'Each Scrum Team defines its own.',
        'All the Scrum Teams must mutually define the Definition of Done.',
      ],
      correctAnswer: 2,
      explanation: 'When multiple Scrum Teams work on a single product, they must collaborate to create a shared Definition of Done to ensure the Increment is consistently integrated and meets quality standards.'
    },
    {
      id: 'q4_132',
      question: 'True or False: Sprint Planning is exclusively restricted to the Scrum Team, and no other stakeholders are allowed to attend.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'While Sprint Planning is a collaborative event for the Scrum Team, other people may be invited to provide advice.'
    },
    {
      id: 'q4_133',
      question: 'Select the correct statement regarding expressing Product Backlog items:',
      options: [
        'Product Backlog items must always be expressed as user stories.',
        'Product Backlog items should never be expressed as user stories.',
        'Product Backlog items can be expressed in any format chosen by the Scrum Team.',
        'Product Backlog items should only be expressed as technical requirements.',
      ],
      correctAnswer: 2,
      explanation: 'The Scrum Guide allows Product Backlog items to be expressed in any format that the Scrum Team finds valuable. While user stories are common, they are not the only option.'
    },
    {
      id: 'q4_134',
      question: 'Two Scrum Teams, Team Alpha and Team Bravo, work on separate products. Team Alpha consists of 7 members and has a velocity of 60, while Team Bravo has 12 members and a velocity of 85. Which team can be considered more efficient?',
      options: [
        'Team Alpha',
        'Team Bravo',
        'The efficiency cannot be determined solely based on the given information.',
      ],
      correctAnswer: 2,
      explanation: 'A team\'s performance cannot be judged by the number of members or velocity alone, as velocity is a measure of output, not efficiency or outcome.'
    },
    {
      id: 'q4_135',
      question: 'The effectiveness of decisions made by Scrum Teams based on Scrum artifacts depends on:',
      options: [
        'The adaptability of the artifacts.',
        'The transparency of the artifacts.',
        'The agility of the artifacts.',
        'The format of the artifacts.',
      ],
      correctAnswer: 1,
      explanation: 'Scrum Teams use artifacts like the Product Backlog and Sprint Backlog to make decisions, and the effectiveness of these decisions hinges on the artifacts\' transparency, which ensures a clear understanding of the work.'
    },
    {
      id: 'q4_136',
      question: 'Which characteristics are most applicable to the accountability of the Product Owner in Scrum?',
      options: [
        'Value maximizer.',
        'Tester within the Scrum Team.',
        'Product domain expert.',
        'Scrum Master role replacement.',
      ],
      correctAnswer: [0, 2],
      explanation: 'The Product Owner is responsible for maximizing the product\'s value and should be an expert in the product\'s domain.'
    },
    {
      id: 'q4_137',
      question: 'What is the primary reason for stakeholders to attend the Sprint Review in Scrum?',
      options: [
        'To tell the Scrum team how to develop the product.',
        'To provide feedback on the Scrum Master\'s performance.',
        'To provide feedback on the Increment developed during the Sprint.',
        'To assess the individual performance of the Developers members.',
      ],
      correctAnswer: 2,
      explanation: 'Stakeholders attend the Sprint Review primarily to provide feedback on the Increment, which helps validate assumptions and adapt the Product Backlog as needed.'
    },
    {
      id: 'q4_138',
      question: 'What is the purpose of the Definition of Done in Scrum?',
      options: [
        'It ensures that all documentation is completed for the Product Increment.',
        'It sets the quality measures required for the Increment to be considered complete and potentially releasable.',
        'It increases the team\'s velocity by defining clear guidelines for work completion.',
        'It provides a shared understanding about the work that has been completed.',
      ],
      correctAnswer: [1, 3],
      explanation: 'The Definition of Done is a shared agreement on the criteria for a Product Increment to be considered complete and releasable, serving as a formal description of the required quality measures and creating transparency for the team.'
    },
    {
      id: 'q4_139',
      question: 'What should the Product Owner do if the Product Backlog is not complete when the Developers are ready to start the first Sprint?',
      options: [
        'Ask the Developers for assistance in refining the Product Backlog and postpone the Sprint.',
        'Proceed with starting the first Sprint, with the objective of completing the Product Backlog.',
        'Start the first Sprint and continue refining the Product Backlog during the Sprint.',
        'Cancel the Sprint until the Product Backlog is fully complete.',
      ],
      correctAnswer: 2,
      explanation: 'The Product Backlog is a living document that evolves, so it\'s acceptable to start the first Sprint even if it\'s not fully refined; refinement can continue throughout the Sprint.'
    },
    {
      id: 'q4_140',
      question: 'What are some likely consequences when the Developers do not have a clear understanding of the Definition of Done?',
      options: [
        'Decrease transparency and confuse the stakeholders’ expectations.',
        'The Product Owner will have less clarity regarding how to order the Product Backlog.',
        'The team may struggle to estimate and plan their work accurately.',
        'The outcome of the Sprint might end up not developing a useful, valuable Increment.',
        'All of the above.',
      ],
      correctAnswer: 4,
      explanation: 'A lack of clarity on the Definition of Done can disrupt the Product Owner\'s ability to order the backlog, reduce transparency, hinder accurate planning, and may result in an Increment that is not valuable or useful.'
    },
    {
      id: 'q4_141',
      question: 'What is the Increment in Scrum?',
      options: [
        'A UML diagram illustrating the future functionalities of the software.',
        'Work that meets the Definition of Done.',
        'A prototype of the user interface for the software.',
        'The total of completed Product Backlog items from the current Sprint and all previous Sprints.',
      ],
      correctAnswer: [1, 3],
      explanation: 'The Increment is the sum of all Product Backlog items completed during the current and all previous Sprints, representing work that meets the Definition of Done.'
    },
    {
      id: 'q4_142',
      question: 'True or False: The duration of a Sprint can exceed one month for large products.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'A Sprint is time-boxed to a maximum of one month to maintain a consistent rhythm for inspection and adaptation, regardless of product size.'
    },
    {
      id: 'q4_143',
      question: 'What is the term for the model of taking small steps, observing the results, and adjusting the next steps based on observation and experience?',
      options: [
        'Agile',
        'Six Sigma',
        'Traditional',
        'Empiricism',
      ],
      correctAnswer: 3,
      explanation: 'Empiricism is the concept of making decisions based on observation and experience. Scrum uses this iterative approach to encourage continuous improvement and effective responses to change.'
    },
    {
      id: 'q4_144',
      question: 'The number of Developers in a Scrum Team has increased from 5 to 15, and the Daily Scrum consistently takes more than 15 minutes. What is the best course of action?',
      options: [
        'Increase the timebox of Daily Scrums to accommodate the larger team.',
        'Split the Developers into smaller teams to maintain effective communication and collaboration.',
        'Continue with longer Daily Scrums, allowing all Developers to speak.',
        'Implement stricter timekeeping and aim to finish the Daily Scrums in 15 minutes, regardless of the team size.',
      ],
      correctAnswer: 1,
      explanation: 'Since the Daily Scrum is time-boxed to 15 minutes, a consistently longer meeting suggests the team may be too large for effective communication. The best solution is to consider reforming into smaller teams, as Scrum is most effective with teams of 10 or fewer people.'
    },
    {
      id: 'q4_145',
      question: 'During Product Backlog refinement, what should be done to make the items ready for Sprint Planning?',
      options: [
        'Assign specific Developers to each item.',
        'Gather all information about the item beforehand.',
        'Add details such as a description, order, and size.',
        'Identify all the tasks.',
      ],
      correctAnswer: 2,
      explanation: 'Product Backlog refinement involves breaking down and defining items by adding details like a description, order, and size, with attributes varying depending on the work domain.'
    },
    {
      id: 'q4_146',
      question: 'When can the Product Backlog be refined?',
      options: [
        'During the Daily Scrum.',
        'At the end of the Sprint Review.',
        'During the Sprint Retrospective.',
        'As needed during the Sprint.',
      ],
      correctAnswer: 3,
      explanation: 'According to the Scrum Guide, the Product Backlog can be refined as needed throughout the Sprint.'
    },
    {
      id: 'q4_147',
      question: 'You are the Scrum Master of a newly formed Scrum Team and have observed that the Product Owner is not collaborating enough with the team. What should you do?',
      options: [
        'Ask upper management to hire an agile coach to train the Product Owner.',
        'Tell the Product Owner that he must spend at least 1 hour per day with the team.',
        'Invite the Product Owner for a conversation and teach him why finding the time to collaborate with the team is important.',
        'Hire an assistant to work with the Product Owner.',
      ],
      correctAnswer: 2,
      explanation: 'A Scrum Master should help everyone understand Scrum practices, including the Product Owner. Discussing the importance of collaboration can improve team dynamics and is more constructive than enforcing time requirements or hiring additional help.'
    },
    {
      id: 'q4_148',
      question: 'True or false: The Product Owner is the only person responsible for managing the Product Backlog.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Product Owner is accountable for managing the Product Backlog but is not necessarily the only one responsible. They collaborate with stakeholders, the Developers, and the Scrum Master and may delegate responsibilities to others.'
    },
    {
      id: 'q4_149',
      question: 'True or false: The Product Owner is the only person accountable for managing the Product Backlog.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 0,
      explanation: 'According to the Scrum Guide, the Product Owner is the single person accountable for managing the Product Backlog.'
    },
    {
      id: 'q4_150',
      question: 'True or false: Product Owner can delegate the responsibility of sizing the Product Backlog to the Scrum Master.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'According to the Scrum Guide, the Developers who will be doing the work are responsible for sizing. The Product Owner may help them understand and select trade-offs.'
    },
    {
      id: 'q4_151',
      question: 'True or false: The Product Owner must attend every Daily Scrum.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Daily Scrum is an event for the Developers. While the Product Owner can attend, it is not mandatory. The main purpose is for the Developers to coordinate their work.'
    },
    {
      id: 'q4_152',
      question: 'What is the accountability of the project manager in Scrum?',
      options: [
        'Facilitate Sprint Planning events.',
        'Manage the budget.',
        'Create the Release Plan.',
        'Scrum does not have a project manager accountability.',
        'Handle the communication with stakeholders.',
      ],
      correctAnswer: 3,
      explanation: 'The Scrum framework does not include a project manager role. The Scrum Team is self-organizing, with accountabilities distributed among the Product Owner, Scrum Master, and Developers, though they may interact with a project manager in the broader organization.'
    },
    {
      id: 'q4_153',
      question: 'When does a Developer become the exclusive owner of a Product Backlog item in Scrum?',
      options: [
        'During Sprint Retrospective.',
        'At the beginning of each Sprint.',
        'During the Sprint Review.',
        'Never. All Product Backlog Items in a Sprint are shared by all the Developers.',
      ],
      correctAnswer: 3,
      explanation: 'Scrum promotes a collaborative environment where Developers collectively own the work in the Sprint Backlog to deliver the Sprint Goal, without individual ownership of items.'
    },
    {
      id: 'q4_154',
      question: 'True or False: The Scrum Master is responsible for managing the Developer\'s work and assigning tasks.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'In Scrum, Developers are self-managing and determine how to accomplish their work. The Scrum Master facilitates and coaches, but does not assign tasks or manage their work.'
    },
    {
      id: 'q4_155',
      question: 'What are the primary accountabilities of the Scrum Master in Scrum?',
      options: [
        'Facilitating Scrum events and ceremonies.',
        'Assigning work to the Developer.',
        'Ensuring the Product Owner\'s satisfaction.',
        'Promoting self-organization within the Developer.',
        'Ensuring the Scrum Team size is limited to 10 or fewer members.',
      ],
      correctAnswer: [0, 3],
      explanation: 'The Scrum Master is accountable for establishing Scrum, removing impediments, and helping everyone understand Scrum theory and practice. They are not responsible for assigning tasks or dictating team size.'
    },
    {
      id: 'q4_156',
      question: 'What are the potential benefits of including specific types of testing in the Definition of Done?',
      options: [
        'Increment would be closer to a release state.',
        'Reduced technical debt in the Increment.',
        'Increased transparency, trust and confidence in the quality of the Increment.',
        'Better alignment between the Developer and the Product Owner.',
        'Simplified reporting for the upper management.',
      ],
      correctAnswer: [0, 1, 2, 3],
      explanation: 'Including specific testing in the Definition of Done makes Increments closer to a releasable state, increases transparency about their quality, and ensures they are more usable and valuable to users.'
    },
    {
      id: 'q4_157',
      question: 'True or False: The Sprint Backlog is expected to remain unchanged and baselined at the end of each Sprint Planning event.',
      options: [
        'TRUE',
        'FALSE',
      ],
      correctAnswer: 1,
      explanation: 'The Sprint Backlog is a dynamic forecast that is expected to evolve as the Developers learn more during the Sprint. It is not a fixed baseline.'
    },
    {
      id: 'q4_158',
      question: 'In a situation where there are 3 Scrum Teams collaborating on the development of a shared product, what action should they take to establish a common understanding of when work is considered complete?',
      options: [
        'Each Scrum Team should work independently and define its own unique Definition of Done without sharing it.',
        'The Scrum Master should take charge of integrating changes made by each team on a daily basis.',
        'The teams should rely on the Product Owner to provide them with common quality guidance.',
        'The Scrum Teams should collaborate and mutually define their shared Definition of Done.',
      ],
      correctAnswer: 3,
      explanation: 'When multiple Scrum Teams work on the same product, they must mutually define a shared Definition of Done to ensure the Increment is consistently integrated and meets quality standards.'
    },
    {
      id: 'q4_159',
      question: 'The Developers have completed the Sprint Planning event, and the Product Owner realizes there is an important Product Backlog item she wants to add to the Sprint Backlog. What is the appropriate action in this situation?',
      options: [
        'The Scrum Master should facilitate a discussion between the Product Owner and the Developer to understand the impact of adding the item and assess the feasibility of including it in the current Sprint.',
        'The Scrum Master should inform the Product Owner that adding the item is not allowed once the Sprint Planning event is completed, and it should be considered for the next Sprint.',
        'The Product Owner should directly add the item to the Sprint Backlog, as she has the authority to make such decisions.',
        'The Developers should add the item to the Sprint Backlog, as they have full autonomy in managing the Sprint Backlog.',
      ],
      correctAnswer: 0,
      explanation: 'While the Developers create the Sprint Backlog, it\'s possible to add an item after Sprint Planning if it doesn\'t jeopardize the Sprint Goal and the Developers have the capacity. This requires a discussion between the Product Owner and the Developers, which the Scrum Master can facilitate.'
    },
    {
      id: 'q4_160',
      question: 'During the Sprint, the Scrum Team finds themselves in a challenging position. As they look at their work progress, they realize that the forecasted Product Backlog items may not all be completed within the Sprint\'s timeline. In this situation, who needs to discuss the issue?',
      options: [
        'The Scrum Team',
        'The Scrum Master',
        'The Stakeholders',
        'The Developers and the Product Owner',
      ],
      correctAnswer: 3,
      explanation: 'If the Sprint forecast is at risk, the Developers and the Product Owner must collaborate to inspect the progress and adapt the plan. The Scrum Master can facilitate, but the core discussion is between those doing the work and the person accountable for product value.'
    }
  ]
};
export default exam;
