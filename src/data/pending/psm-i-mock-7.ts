const exam = {
  id: 'psm-i-mock-7',
  title: 'PSM I – Mock Exam #7',
  description: 'Professional Scrum Master I practice exam #7 based on provided questions 1–80.',
  timeLimit: 60,
  passingScore: 85,
  questions: [
    {
      id: 'q7_1',
      question: 'Which events are time-boxed according to the Scrum Guide? (choose the best answer)',
      options: [
        'A, C and F are TRUE',
        'B, C and E are FALSE',
        'C, D and G are FALSE',
        'C, F and G are TRUE',
        'D, E and F are TRUE'
      ],
      correctAnswer: 3,
      explanation: 'Scrum events are time-boxed: the Sprint (≤1 month), Daily Scrum (15 minutes), Sprint Review (≤4 hours for a one-month Sprint). Others listed are not Scrum events.'
    },
    {
      id: 'q7_2',
      question: 'The Scrum Team is composed of: I. The Scrum Master II. The Developers III. The Product Owner IV. Quality Analyst V. Team Project Manager VI. UX Designer (choose the best answer)',
      options: [
        'I and III are FALSE',
        'I, II and IV are TRUE',
        'I, II, and III are TRUE',
        'None of the above'
      ],
      correctAnswer: 2,
      explanation: 'The Scrum Team consists of Scrum Master, Product Owner, and Developers.'
    },
    {
      id: 'q7_3',
      question: 'True or False: Scrum has a role called "project manager."',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Scrum accountabilities are Product Owner, Scrum Master, and Developers.'
    },
    {
      id: 'q7_4',
      question: 'What does it mean to say that an event has a time-box? (choose the best answer)',
      options: [
        'The event must happen at a set time.',
        'The event can take no more than a maximum amount of time (upper limit).',
        'The event must happen by a given time.',
        'The event must take at least a minimum amount of time (lower limit).',
        'The event might have to finish given a maximum amount of time.'
      ],
      correctAnswer: 1,
      explanation: 'Time-boxing sets a maximum duration.'
    },
    {
      id: 'q7_5',
      question: 'A project stakeholder asks the Developers to add a “very important” item to a Sprint already in progress. What should the Developers do? (choose the best answer)',
      options: [
        'Automatically, schedule the item to the next Sprint.',
        'Add it now; agile welcomes change.',
        'Proceed with the Sprint without any adjustments.',
        'Inform the Product Owner so they can work with the stakeholder.',
        'Add the item and drop an item of equal size.'
      ],
      correctAnswer: 3,
      explanation: 'Scope changes are negotiated with the Product Owner; the Sprint Backlog is by and for the Developers.'
    },
    {
      id: 'q7_6',
      question: 'When does the next Sprint begin? (choose the best answer)',
      options: [
        'Immediately after the conclusion of the previous Sprint.',
        'When the Product Owner is ready.',
        'Immediately following the next Sprint Planning.',
        'Next week.',
        'When the Project Manager says so.'
      ],
      correctAnswer: 0,
      explanation: 'A new Sprint starts immediately after the previous one.'
    },
    {
      id: 'q7_7',
      question: 'Who creates the Definition of Done? (choose the best answer)',
      options: [
        'The Scrum Team.',
        'The development organization and/or the Scrum Team.',
        'The Product Owner.',
        'The Scrum Master.'
      ],
      correctAnswer: 1,
      explanation: 'If there’s an organizational standard, all teams follow it at minimum; otherwise the Scrum Team creates it.'
    },
    {
      id: 'q7_8',
      question: 'Which best describes the Scrum Master’s responsibility regarding the Daily Scrum? (choose the best answer)',
      options: [
        'Manage turns.',
        'Teach Developers to keep the Daily Scrum within the 15-minute time-box.',
        'Ensure all answer the 3 questions correctly.',
        'Ensure technical discussion happens.',
        'All answers apply.'
      ],
      correctAnswer: 1,
      explanation: 'The Scrum Master ensures events occur, are positive, productive, and within timebox.'
    },
    {
      id: 'q7_9',
      question: 'Who is accountable for developing and explicitly communicating the Product Goal? (choose the best answer)',
      options: [
        'The Project Manager',
        'The Developers',
        'The Scrum Master',
        'The Product Owner',
        'The Product Manager'
      ],
      correctAnswer: 3,
      explanation: 'Product Goal management is part of Product Backlog management; the Product Owner is accountable.'
    },
    {
      id: 'q7_10',
      question: 'What is the time-box for the Daily Scrum? (choose the best answer)',
      options: [
        'Three hours.',
        '15 minutes.',
        'It should be scheduled at the same time every day.',
        'It depends on team size.',
        '15 minutes for a one-month Sprint (shorter for shorter Sprints).'
      ],
      correctAnswer: 1,
      explanation: 'The Daily Scrum is always 15 minutes.'
    },
    {
      id: 'q7_11',
      question: 'Who must attend the Daily Scrum? (choose the best answer)',
      options: [
        'The Scrum Team.',
        'The Scrum Master, but not the Product Owner.',
        'The Developers.',
        'The Developers and the Scrum Master.',
        'The Product Owner and the Developers.',
        'The Scrum Team and key stakeholders.'
      ],
      correctAnswer: 2,
      explanation: 'Daily Scrum is a 15-minute event for the Developers; PO/SM join only if working as Developers.'
    },
    {
      id: 'q7_12',
      question: 'The Developers should have all the skills needed to: (choose the best answer)',
      options: [
        'Deliver the project given the Iron Triangle restrictions.',
        'Do all development and most testing except specialized testing.',
        'Deliver a usable Done Increment.',
        'Do all development and testing work.'
      ],
      correctAnswer: 2,
      explanation: 'Scrum Teams are cross-functional to create value each Sprint.'
    },
    {
      id: 'q7_13',
      question: 'Scrum is: (choose the best answer)',
      options: [
        'A body of knowledge with best practices for agile software development.',
        'A defined/predictive process founded on empiricism.',
        'A lightweight framework to generate value through adaptive solutions for complex problems.',
        'A complete methodology defining how to deliver complex products.'
      ],
      correctAnswer: 2,
      explanation: 'Scrum is a framework, not a process or methodology.'
    },
    {
      id: 'q7_14',
      question: 'How much work must the Developers do to a Product Backlog item selected for a Sprint? (choose the best answer)',
      options: [
        'Coding and some testing, depending on context.',
        'Whatever is needed to produce a usable Done Increment by Sprint end, as agreed in Sprint Planning.',
        'The best they can during the Sprint.',
        'Analysis, design, coding, testing, transition and documentation.'
      ],
      correctAnswer: 1,
      explanation: 'Each Sprint aims to deliver a usable Done Increment.'
    },
    {
      id: 'q7_15',
      question: 'True or False: The Scrum Team must include at least one high-priority process improvement identified in the Sprint Retrospective in the Sprint Backlog.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Improvements are encouraged and may be added, but it is not a rule.'
    },
    {
      id: 'q7_16',
      question: 'True or False: Practices to forecast progress can replace empiricism.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Forecasting tools are helpful but do not replace inspection of actual results.'
    },
    {
      id: 'q7_17',
      question: 'The Sprint Review is ... (choose the best answer)',
      options: [
        'An event to monitor and control the Developers’ activities.',
        'A demonstration at Sprint end for stakeholders to check work.',
        'Held at Sprint end to inspect the outcome and determine future adaptations.'
      ],
      correctAnswer: 2,
      explanation: 'Sprint Review inspects the Increment and adapts the Product Backlog.'
    },
    {
      id: 'q7_18',
      question: 'When does a Developer become the sole owner of a Sprint Backlog item? (choose the best answer)',
      options: [
        'At part 2 of Sprint Planning.',
        'During Daily Scrums.',
        'Never; Sprint Backlog is owned collectively by the Scrum Team.',
        'Whenever someone can take more work.',
        'During Pair Negotiation.'
      ],
      correctAnswer: 2,
      explanation: 'Ownership is collective; individuals may implement items but the plan is shared.'
    },
    {
      id: 'q7_19',
      question: 'Scrum is based upon a specific type of process control. What is its name? (choose the best answer)',
      options: ['Adaptive', 'Complex', 'Empiricism', 'Flexible'],
      correctAnswer: 2,
      explanation: 'Scrum is founded on empiricism and lean thinking.'
    },
    {
      id: 'q7_20',
      question: 'The Product Owner is accountable for ... (choose the best answer)',
      options: [
        'Delivering within Iron Triangle constraints.',
        'Protecting Developers from stakeholders.',
        'Maximizing the value of the product resulting from the Scrum Team’s work.',
        'Managing the Developers.'
      ],
      correctAnswer: 2,
      explanation: 'The PO maximizes value via Product Backlog management and decisions.'
    },
    {
      id: 'q7_21',
      question: 'Which are the three pillars of empiricism? (choose the best answer)',
      options: [
        'Flow, Talent, Quality',
        'Quality Maintenance, Eliminating Waste, Kaizen',
        'Collaboration, Kaizen, Eliminating Waste',
        'Inspection, Transparency, Adaptation',
        'Plan, Do, Check'
      ],
      correctAnswer: 3,
      explanation: 'Empiricism is upheld by transparency, inspection, and adaptation.'
    },
    {
      id: 'q7_22',
      question: 'What is Management’s role in Scrum? (choose the best answer)',
      options: [
        'Micromanage the Developers.',
        'Ensure Developers meet org expectations.',
        'Support the Scrum Team with conditions, insights, resources; support Scrum Master and empiricism.'
      ],
      correctAnswer: 2,
      explanation: 'Management supports, removes org impediments, and helps increase Scrum effectiveness.'
    },
    {
      id: 'q7_23',
      question: 'True or False: The Sprint’s purpose is to create a Done, usable product Increment.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'Sprints turn ideas into value via a Done, usable Increment.'
    },
    {
      id: 'q7_24',
      question: 'Which are accountabilities on a Scrum Team? I. Developers II. Product Owner III. Users IV. Scrum Master V. Quality Manager (choose the best answer)',
      options: [
        'I, II and III',
        'I, II and IV',
        'II, IV and V',
        'II, III and V',
        'III, IV and V'
      ],
      correctAnswer: 1,
      explanation: 'Scrum Team = Product Owner, Developers, Scrum Master.'
    },
    {
      id: 'q7_25',
      question: 'When might a Sprint be canceled? (choose the best answer)',
      options: [
        'When the Sprint Goal becomes obsolete.',
        'When Developers won’t finish the Sprint Backlog.',
        'When marketing/sales has new opportunities.'
      ],
      correctAnswer: 0,
      explanation: 'Only the Product Owner cancels a Sprint if the Sprint Goal becomes obsolete.'
    },
    {
      id: 'q7_26',
      question: 'Who is responsible for creating the Sprint Goal? (choose the best answer)',
      options: ['The Scrum Master', 'The Product Owner', 'The whole Scrum Team', 'The Developers', 'Key stakeholders'],
      correctAnswer: 2,
      explanation: 'The Scrum Team creates the Sprint Goal collaboratively during Sprint Planning.'
    },
    {
      id: 'q7_27',
      question: 'Why is the Daily Scrum held at the same time and place? (choose the best answer)',
      options: [
        'Because the Project Manager requires it.',
        'To increase complexity.',
        'Easier room scheduling.',
        'To reduce complexity.'
      ],
      correctAnswer: 3,
      explanation: 'Consistency reduces complexity.'
    },
    {
      id: 'q7_28',
      question: 'Which behaviors show a team is NOT following the Scrum Guide? I. Stakeholders attend Daily Scrum to check progress II. External stakeholders help define a complete Sprint Backlog in Sprint Planning III. Scrum Team is structured/empowered to organize/manage its work IV. Developers work by analyst/developer/tester roles V. Developers individually select their work VI. Developers own the Sprint Backlog (choose the best answer)',
      options: [
        'I, II, IV and V',
        'I, II, III and IV',
        'II, III, IV, and VI',
        'III, IV, V and VI',
        'III, IV, V and VI'
      ],
      correctAnswer: 0,
      explanation: 'I and II misuse events; IV introduces sub-teams/roles; V undermines collaborative planning. III and VI are correct Scrum.'
    },
    {
      id: 'q7_29',
      question: 'Which size should the Scrum Team have? (choose the best answer)',
      options: ['3 to 9', 'Typically, 10 or fewer people', 'at least, 5', '5 plus or minus 2'],
      correctAnswer: 1,
      explanation: 'Typically 10 or fewer people; split into multiple teams if too large.'
    },
    {
      id: 'q7_30',
      question: 'Which best describes transparency? (choose the best answer)',
      options: [
        'Visible and understood by stakeholders and project managers.',
        'Emergent process and work visible to those doing and receiving the work.',
        'Significant aspects visible to stakeholders and project managers.',
        'Whole process visible to everyone.'
      ],
      correctAnswer: 1,
      explanation: 'Transparency means visibility for those performing and receiving the work to enable inspection/adaptation.'
    },
    {
      id: 'q7_31',
      question: 'Which statement is FALSE? (choose the best answer)',
      options: [
        'The Sprint Backlog emerges during the Sprint.',
        'During the Sprint, Developers may ask the Product Owner for clarification/optimization.',
        'The Sprint Backlog is defined in Sprint Planning and must not change during the Sprint.'
      ],
      correctAnswer: 2,
      explanation: 'The Sprint Backlog is updated throughout the Sprint as more is learned.'
    },
    {
      id: 'q7_32',
      question: 'The Product Backlog is ordered by: (choose the best answer)',
      options: [
        'Technical Dependencies.',
        'Size.',
        'Risk.',
        'Factors deemed appropriate by the Product Owner to maximize value delivery.',
        'Just In Time'
      ],
      correctAnswer: 3,
      explanation: 'The Product Owner orders the Product Backlog to maximize value.'
    },
    {
      id: 'q7_33',
      question: 'What should Developers do when they don’t understand a Product Backlog item? (choose the best answer)',
      options: [
        'Ask the Scrum Master to remove this restriction.',
        'Do as much as possible and show a lighter version in Sprint Review.',
        'Delay the item to the next Sprint.',
        'Discuss with the Product Owner to better understand the work.'
      ],
      correctAnswer: 3,
      explanation: 'The Product Owner is accountable for clearly communicating Product Backlog items.'
    },
    {
      id: 'q7_34',
      question: 'True or False: In Scrum, one must use User Stories.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'User stories are optional techniques, not required by Scrum.'
    },
    {
      id: 'q7_35',
      question: 'Which Scrum event is most appropriate for capturing and using lessons learned? (choose the best answer)',
      options: ['Sprint Planning', 'Sprint Review', 'Product Backlog Refinement', 'Sprint Retrospective'],
      correctAnswer: 3,
      explanation: 'Sprint Retrospective focuses on how work was done and improvements.'
    },
    {
      id: 'q7_36',
      question: 'True or False: If there are multiple Product Goals, they must be organized into a Product Roadmap.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Roadmaps are not prescribed by the Scrum Guide.'
    },
    {
      id: 'q7_37',
      question: 'True or False: Scrum is a methodology for developing, delivering, and sustaining complex products.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Scrum is a framework.'
    },
    {
      id: 'q7_38',
      question: 'Choose the statement that best describes the Product Backlog: (choose the best answer)',
      options: [
        'Useful for producing the project plan.',
        'It never gets complete and is easily updated.',
        'It provides all data to create a product; a list of requirements approved by the product manager.',
        'It is full of tasks and many user stories.'
      ],
      correctAnswer: 1,
      explanation: 'The Product Backlog is emergent and evolves as more is learned.'
    },
    {
      id: 'q7_39',
      question: 'An organization changed Scrum terminology to fit culture. Possible effects? I. Must tailor Scrum because methodology is incomplete II. Less enthusiasm III. Outcomes improve IV. Change might not be evident and advantages missed (choose the best answer)',
      options: ['I and II', 'II and III', 'II and IV', 'III and IV'],
      correctAnswer: 2,
      explanation: 'Changing terms can reduce impact and hide benefits; Scrum is not a methodology and should not be tailored by changing rules.'
    },
    {
      id: 'q7_40',
      question: 'True or False: The first Sprint can only start after the Product Backlog is complete.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'The Product Backlog is never complete; first Sprint can start with a sufficient initial backlog.'
    },
    {
      id: 'q7_41',
      question: 'True or False: The velocity of Scrum Teams should be normalized so administrators can compare performance.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Velocity is team-internal and not comparable across teams.'
    },
    {
      id: 'q7_42',
      question: 'Choose three that may occur at the Sprint Retrospective: I. Refine Product Backlog II. Talk about upcoming Sprint Goal III. Decide what Product Backlog to use next Sprint IV. Discuss how refinement is done V. Discuss Sprint timebox duration VI. Discuss progress toward Product Goal VII. Discuss Definition of Done (choose the best answer)',
      options: ['I, II and III', 'II, IV, and V', 'I, III and IV', 'I, III and VI', 'IV, V and VII'],
      correctAnswer: 4,
      explanation: 'Retrospective inspects process, timeboxes, and DoD; backlog and next Sprint scope are not Retrospective topics.'
    },
    {
      id: 'q7_43',
      question: 'Effects of changes in the project environment on the Product Backlog: (choose the best answer)',
      options: [
        "There's no impact.",
        'Create a new baseline backlog.',
        'It gets refined to consider changes.',
        'Maintain a high tolerance to resist changes.',
        'Keep it high level; items unaffected.'
      ],
      correctAnswer: 2,
      explanation: 'The Product Backlog evolves through refinement.'
    },
    {
      id: 'q7_44',
      question: 'Which events are formal inspect-and-adapt opportunities? I. Sprint Review II. Product Backlog Refinement III. Sprint Planning IV. Release Planning V. Sprint Retrospective VI. Daily Scrum (choose the best answer)',
      options: ['II, IV, V, and VI', 'I, II, III, and IV', 'I, III, V, and VI', 'II, III, V, and VI', 'III, IV, V, and VI'],
      correctAnswer: 2,
      explanation: 'Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective are formal Scrum events.'
    },
    {
      id: 'q7_45',
      question: 'True or False: The Scrum Master cannot be a Developer.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'One person can hold multiple accountabilities, though it may not be ideal.'
    },
    {
      id: 'q7_46',
      question: 'Choose two truths about an undone Product Backlog item. I. Count done part in velocity and create new item for rest II. Demonstrate it in Sprint Review even if not accepted III. Move it back to Product Backlog IV. Do not include it in the Increment V. Add it to Increment if it passes UAT (choose the best answer)',
      options: ['I and II', 'I and V', 'II and III', 'III and IV', 'IV and V'],
      correctAnswer: 3,
      explanation: 'If not meeting DoD, it is not part of the Increment and returns to Product Backlog.'
    },
    {
      id: 'q7_47',
      question: 'Choose two that are real outputs of a Sprint. I. Done features added to last Increment II. A proposal for following Sprints III. Software available to end-users IV. New features available for integration (choose the best answer)',
      options: ['I and II', 'I and III', 'II and III', 'II and IV', 'III and IV'],
      correctAnswer: 1,
      explanation: 'The Increment adds Done features and may be releasable to users.'
    },
    {
      id: 'q7_48',
      question: 'Timeboxed duration of Sprint Planning in a one-month Sprint? (choose the best answer)',
      options: ['Maximum 8 hours', 'Maximum 6 hours', 'Minimum 6 hours', 'Minimum of 8 hours'],
      correctAnswer: 0,
      explanation: 'Sprint Planning is ≤8 hours for a one-month Sprint.'
    },
    {
      id: 'q7_49',
      question: 'Which is NOT allowed in Scrum? I. Release Planning II. Planning Poker III. Integration Sprints IV. User Stories V. Canceling a Sprint (choose the best answer)',
      options: ['I', 'II', 'III', 'IV', 'V'],
      correctAnswer: 2,
      explanation: 'Integration Sprints violate the rule of creating a valuable Increment every Sprint.'
    },
    {
      id: 'q7_50',
      question: 'True or False: Multiple Scrum Teams working on the same product must start and end Sprints on the same day.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Sprints do not have to be synchronized; teams self-manage.'
    },
    {
      id: 'q7_51',
      question: 'True or False: Adding new Developers to the Scrum Team may reduce productivity short-term.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'Onboarding costs and increased communication can reduce productivity initially.'
    },
    {
      id: 'q7_52',
      question: 'When should the Developers cancel a Sprint? (choose the best answer)',
      options: [
        "Developers don't have authority to cancel.",
        'When the company changes direction',
        'When market/technology conditions change',
        'When the Sprint Goal becomes obsolete'
      ],
      correctAnswer: 0,
      explanation: 'Only the Product Owner cancels a Sprint (e.g., if Sprint Goal is obsolete).'
    },
    {
      id: 'q7_53',
      question: 'True or False: Product Backlog items consist of a description, order, and size.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'PBI attributes vary by domain; no fixed required set.'
    },
    {
      id: 'q7_54',
      question: 'True or False: Sprint Review is not a formal meeting.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'It is a formal Scrum event (formal opportunity), but the meeting itself is informal (not sign-off/approval).'
    },
    {
      id: 'q7_55',
      question: 'Which three are NOT timeboxed? I. Sprint Zero II. Sprint Review III. Product Backlog Refinement IV. Sprint V. Release Planning VI. Sprint Planning (choose the best answer)',
      options: ['I, II and III', 'II, IV and VI', 'II, V, VI', 'III, IV and V', 'I, III and V'],
      correctAnswer: 4,
      explanation: 'Sprint Zero (not a Scrum event), PBR (ongoing), and Release Planning have no Scrum timeboxes.'
    },
    {
      id: 'q7_56',
      question: 'True or False: The self-managing Scrum Team chooses the Scrum artifacts needed for the project.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Scrum exists only in its entirety; artifacts are defined by the framework.'
    },
    {
      id: 'q7_57',
      question: 'A team’s performance is shown on a visible burn-down chart. Which Scrum value is demonstrated? (choose the best answer)',
      options: ['Openness', 'Cross-functionality', 'Earned Value', 'Adaptation'],
      correctAnswer: 0,
      explanation: 'Sharing progress openly demonstrates Openness.'
    },
    {
      id: 'q7_58',
      question: 'True or False: The Scrum Team might pursue multiple Product Goals.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'They pursue one Product Goal at a time (fulfill or abandon before the next).'
    },
    {
      id: 'q7_59',
      question: 'True or False: If a Product Backlog item is not Ready it can be considered for Sprint Planning.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: '“Ready” is a practice, not a rule; items can be selected and clarified during planning.'
    },
    {
      id: 'q7_60',
      question: 'What’s the role of a Scrum Master during Sprint Retrospectives? (choose the best answer)',
      options: [
        'Participating as a Scrum Team member',
        'Answering issues of developers and managing delays',
        'Compiling and summarizing conclusions to stakeholders',
        'They should not participate in this meeting'
      ],
      correctAnswer: 0,
      explanation: 'The Scrum Master participates as a peer, ensuring a positive, productive, timeboxed event.'
    },
    {
      id: 'q7_61',
      question: 'The Increment commits to the Definition of Done. What does Done mean? I - Increment could be released to end-users. II - Work matches team skills/expertise. III - All work meets the DoD. IV - Increment ready for QC testing. V - Increment ready for PO acceptance testing. (choose the best answer)',
      options: ['I and III', 'Only I', 'I, II, and III', 'I and IV'],
      correctAnswer: 0,
      explanation: 'Done means releasable and meeting the DoD. Readiness for testing only is not Done.'
    },
    {
      id: 'q7_62',
      question: 'Manager asks to increase velocity by 15%. Best response? (choose the best answer)',
      options: [
        'Tell manager to talk to PO (forecasts).',
        'Present as a company goal; team figures out how.',
        'Explain velocity is a forecast for planning, not a productivity measure; direct progress questions to the PO.',
        'Teach that velocity is internal and invite manager to the Retrospective to help improve.'
      ],
      correctAnswer: 2,
      explanation: 'Clarify velocity’s purpose and route progress info via the Product Owner.'
    },
    {
      id: 'q7_63',
      question: 'Daily Scrum derails into technical details by one Developer. What do you do? I - Turn-taking token II - Coach Developers to own the solution III - Use a timer per person IV - Privately coach the Developer on Daily Scrum outcomes V - Escalate to manager (choose the best answer)',
      options: ['I and III', 'II and IV', 'I, III, and IV', 'II and V'],
      correctAnswer: 1,
      explanation: 'Coaching preserves self-management; enforcing turn-taking/timers or escalation undermines it.'
    },
    {
      id: 'q7_64',
      question: 'Release underestimation due to untested work; best recovery? (choose the best answer)',
      options: [
        'Developers inform PO that the Increment is not releasable, estimate debt payoff, suggest paying it first, and re-estimate remaining work including testing.',
        'Ensure next Sprints’ items are as done as possible; carry over undone work.',
        'Schedule a hardening Sprint to handle technical debt; PO updates stakeholders on release impact.',
        'Restore transparency by updating PB with undone work and increase velocity; SM may assign a new team or cancel project.'
      ],
      correctAnswer: 0,
      explanation: 'Restore transparency, address technical debt, and re-estimate to include quality activities.'
    },
    {
      id: 'q7_65',
      question: 'Team wants Daily Scrums only twice a week. Three key concerns? I - Fewer inspect/adapt opportunities II - Hard for SM to update burndown III - Plan may become inaccurate; reduced transparency IV - PO can’t report progress accurately V - Impediments raised/resolved more slowly (choose the best answer)',
      options: ['I and III', 'I, III, and V', 'III and V', 'I, II, III, and V', 'II and IV'],
      correctAnswer: 1,
      explanation: 'Reducing frequency harms inspection/adaptation, accuracy/transparency, and slows impediment handling.'
    },
    {
      id: 'q7_66',
      question: 'Large-scale Scrum statements: I- Well-ordered PB can reduce multi-team assignments II - Members must be full-time III - Multi-team assignment reduces productivity IV - Must change core Scrum for scale (choose the best answer)',
      options: ['I and III', 'Only III', 'I, III, and IV', 'I, II, III, and IV'],
      correctAnswer: 0,
      explanation: 'II is not required; IV is wrong—scaled Scrum is still Scrum.'
    },
    {
      id: 'q7_67',
      question: 'PO disappointed about technical debt/security after six Sprints. Which could be true? I - Retrospectives not used effectively II - Developers haven’t instilled quality III - Developers cannot be held responsible IV - SM hasn’t ensured transparency (choose the best answer)',
      options: ['III and IV', 'I, II and IV', 'I and IV', 'II, III, and IV'],
      correctAnswer: 1,
      explanation: 'Developers instill quality via DoD; SM fosters transparency; retrospectives should drive improvements.'
    },
    {
      id: 'q7_68',
      question: 'Sprint Planning timebox nearly over; PO gave business objective but no consensus on highest PBIs. Best action? (choose the best answer)',
      options: [
        'Discuss in next Sprint Review why this happened.',
        'Interrupt planning and resume when ready.',
        'Extend planning beyond timebox.',
        'Developers forecast PBIs most likely to meet the objective, define Sprint Backlog, start the Sprint; refine further during Sprint.'
      ],
      correctAnswer: 3,
      explanation: 'Honor the timebox; create a workable Sprint Backlog aligned to the objective and refine during the Sprint.'
    },
    {
      id: 'q7_69',
      question: 'Two selected PBIs did not meet DoD by Sprint end. What should happen? I - Not included in Increment II - Return to Product Backlog III - Review them and count partial velocity; create new PBIs for remainder IV - Stakeholders decide to accept undone work (choose the best answer)',
      options: ['I and II', 'I and III', 'I, II, III and IV', 'I, II, and IV'],
      correctAnswer: 0,
      explanation: 'Undone work is not in the Increment and returns to the Product Backlog; not shown at Review.'
    },
    {
      id: 'q7_70',
      question: 'Performance is a key requirement; manager suggests performance testing every other Sprint to save cost. Your view? (choose the best answer)',
      options: [
        'It depends on the Definition of Done.',
        'Not a good idea; reduces transparency and delays feedback, hindering empiricism.',
        'Good idea to save money.'
      ],
      correctAnswer: 1,
      explanation: 'Key quality requirements should be part of DoD and validated each Sprint to keep product usable and transparent.'
    },
    {
      id: 'q7_71',
      question: 'True or False: Adopting Scrum guarantees that adding more people proportionally increases value delivered.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Adding people increases complexity and often reduces productivity short-term.'
    },
    {
      id: 'q7_72',
      question: 'Multiple Scrum Teams on one product—how to integrate work? (choose the best answer)',
      options: [
        'All teams agree on a shared DoD that results in an integrated Increment each Sprint.',
        'Each team builds separate Increments; integration needs discovered in Sprint Review and added to PB.',
        'Early Sprints should ignore integration and focus on business value.',
        'Each team builds separate Increments; later schedule a release Sprint for integration/stabilization.'
      ],
      correctAnswer: 0,
      explanation: 'A shared DoD ensures an integrated, usable Increment every Sprint.'
    },
    {
      id: 'q7_73',
      question: 'Mid-Sprint, PO worries Developers won’t meet the forecast. Best reply? (choose the best answer)',
      options: [
        'Teach that the team focuses on achieving the Sprint Goal, not the forecast.',
        'Motivate Developers to meet forecast.',
        'Add more Developers.'
      ],
      correctAnswer: 0,
      explanation: 'Focus is on the Sprint Goal; forecast is a plan that can change.'
    },
    {
      id: 'q7_74',
      question: 'PO uses Daily Scrum to track each Developer’s work daily. Best action? (choose the best answer)',
      options: [
        'Coach PO and Developers on the purpose of the Daily Scrum and other events and let them resolve it.',
        'Join Daily Scrum and resolve conflicts.',
        'Do nothing if Developers agree.',
        'Tell PO to stop attending the Daily Scrum.'
      ],
      correctAnswer: 0,
      explanation: 'Coach on the Daily Scrum’s purpose (for Developers) and let the team self-manage.'
    },
    {
      id: 'q7_75',
      question: 'Manager suggests standardizing velocity across four teams. Which statements are right? I - Velocity is amount of PBIs turned into Increment per Sprint, tracked by Developers for team use II - Using velocity for incentives boosts morale III - Standardizing velocity helps compare productivity and value IV - No direct relationship between velocity and value (choose the best answer)',
      options: ['II and III', 'I, II and IV', 'I and IV', 'III and IV'],
      correctAnswer: 2,
      explanation: 'Velocity is internal and not value; using it for incentives/comparison is harmful.'
    },
    {
      id: 'q7_76',
      question: 'During Sprint Review, budget is reduced; emotions rise. Best Scrum Master option? (choose the best answer)',
      options: [
        'Ask for a short break so people calm down and become objective.',
        'Encourage stakeholders to add more work to keep team busy.',
        'Argue for more budget.',
        'Let the Product Owner handle it alone.'
      ],
      correctAnswer: 0,
      explanation: 'Facilitate a productive environment; a short break can reset tone.'
    },
    {
      id: 'q7_77',
      question: 'Stakeholders say product is not useful; PO asks what led to this. Which apply? I - Insufficient PO–stakeholder interaction II - Project manager not engaged, project plan inaccurate III - Stakeholders not in Daily Scrum IV - Stakeholders not actively engaging in Sprint Reviews V - Change request plan not followed (choose the best answer)',
      options: ['I, II, IV, and V', 'I and IV', 'II and V', 'I, II, III, IV, and V'],
      correctAnswer: 1,
      explanation: 'Key issue is poor stakeholder engagement: insufficient interaction and weak Sprint Review participation.'
    },
    {
      id: 'q7_78',
      question: 'Scrum Teams self-manage. What does that mean? I - Developers assign tasks in Planning and ensure all committed tasks are done II - Teams can resolve internal conflicts III - Scrum Master assigns tasks daily IV - Teams are flexible and creative (choose the best answer)',
      options: ['I, II, III and IV', 'II and IV', 'I, II, and IV', 'I and IV'],
      correctAnswer: 1,
      explanation: 'Developers decide who does what; SM does not assign tasks; teams resolve conflicts and adapt.'
    },
    {
      id: 'q7_79',
      question: 'New to Scrum: 3 teams, org assigned 3 Product Owners. What do you suggest? I - Each team has a Product Backlog II - Only one Product Backlog for the product III - One Product Owner improves clarity IV - Three POs with a chief PO V - Only one Product Owner (choose the best answer)',
      options: ['I and II', 'II and V', 'II, III and V', 'I and IV'],
      correctAnswer: 2,
      explanation: 'One product → one Product Backlog and one Product Owner; single PO clarifies accountability.'
    },
    {
      id: 'q7_80',
      question: "Which statement reflects Scrum's Respect value? (choose the best answer)",
      options: [
        'Respect diversity of opinions, backgrounds, experience, and skills of the Developers.',
        'Respect the Product Owner by allowing change to the Sprint Goal during the Sprint.',
        'Respect the Scrum Master by letting him assign tasks during the Daily Scrum.',
        'Respect management by reporting progress during the Daily Scrum.',
        'Respect the Product Owner by ensuring all forecasted work is Done by Sprint end.'
      ],
      correctAnswer: 0,
      explanation: 'Respect in Scrum includes valuing the diversity and contributions of all team members.'
    }
  ]
};
export default exam;
