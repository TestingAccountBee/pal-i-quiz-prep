const exam = {
  id: 'psm-i-mock-5',
  title: 'PSM I Mock Exam #5',
  description: 'Professional Scrum Master Level I practice exam #5 based on provided content.',
  timeLimit: 60,
  passingScore: 85,
  questions: [
    {
      id: 'q5_1',
      question: 'True or False: On big projects, it is good to have at least two Product Owners.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'If teams become too large, split into multiple Scrum Teams that share one Product Goal, one Product Backlog, and one Product Owner.'
    },
    {
      id: 'q5_2',
      question: 'Which of the following is LEAST likely to be used by a Scrum Team?',
      options: ['WBS, Gantt Chart', 'Digital camera, task board', 'Large screen, Planning Poker cards', 'Wiki, online forum'],
      correctAnswer: 0,
      explanation: 'WBS and Gantt charts are typical of predictive planning rather than adaptive (Agile) approaches.'
    },
    {
      id: 'q5_3',
      question: 'Who must participate in the Daily Scrum?',
      options: ['The Developers.', 'The Scrum Master.', 'The Product Owner.', 'The Scrum Team.'],
      correctAnswer: 0,
      explanation: 'The Daily Scrum is for the Developers to inspect progress and adapt the plan.'
    },
    {
      id: 'q5_4',
      question: 'Scrum is not a definitive method or technique.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'Scrum is a framework, not a process or technique.'
    },
    {
      id: 'q5_5',
      question: 'The Daily Scrum is a 15-minute time-boxed event independent of the Scrum Team’s size and Sprint’s length.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'The Daily Scrum is always timeboxed to 15 minutes.'
    },
    {
      id: 'q5_6',
      question: 'What provides guidance to the Developers on why it is building the Increment?',
      options: ['The Product Owner.', 'The Sprint Goal', 'The Scrum Master.', 'The Sprint Backlog', 'The Project Goal.'],
      correctAnswer: 1,
      explanation: 'The Sprint Goal is the “why” for the Sprint.'
    },
    {
      id: 'q5_7',
      question: 'Scrum allows additional events that are not defined in Scrum.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'Additional events may be used if they honor Scrum’s foundations (empiricism and lean thinking).'
    },
    {
      id: 'q5_8',
      question: 'Scrum is founded on?',
      options: ['Empiricism and lean thinking', 'Only Empiricism', 'PDCA', 'Scientific method', 'Kanban'],
      correctAnswer: 0,
      explanation: 'Scrum’s foundations are empiricism and lean thinking.'
    },
    {
      id: 'q5_9',
      question: 'It is a good habit to have a special technical Sprint containing only tasks (technical debt) without new functionality.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Every Sprint should deliver at least some business functionality.'
    },
    {
      id: 'q5_10',
      question: 'How is the Product Backlog ordered?',
      options: ['The less defined items are at the top.', 'Clear and more detailed items at the top.', 'Smaller items on the bottom.', 'The recently added items are at the bottom.'],
      correctAnswer: 1,
      explanation: 'Higher-ordered items are usually clearer and more detailed.'
    },
    {
      id: 'q5_11',
      question: 'What is a proper role of a PMO in a company that uses Scrum?',
      options: ['There’s no place for a PMO in such an organization.', 'Define a standard Definition of Done for the organization.', 'The PMO will be responsible for making higher-level decisions in the project.'],
      correctAnswer: 1,
      explanation: 'A PMO can define organizational standards such as a minimum Definition of Done.'
    },
    {
      id: 'q5_12',
      question: 'The Product Backlog is the single source of work undertaken by the Scrum Team.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'All product work originates from the Product Backlog.'
    },
    {
      id: 'q5_13',
      question: 'Which of the following may change during the Sprint?',
      options: ['Sprint Goal', 'Sprint Backlog', 'Minimum level of quality'],
      correctAnswer: 1,
      explanation: 'The Sprint Backlog is emergent; the Sprint Goal and quality bar should not change.'
    },
    {
      id: 'q5_14',
      question: 'There are no testers in Scrum.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 0,
      explanation: 'There are no extra roles or titles; testing specialists are Developers.'
    },
    {
      id: 'q5_15',
      question: 'Who is accountable for explaining the Product Backlog items?',
      options: ['The Developers must figure them out themselves.', 'The Business Analyst', 'The Product Owner', 'The Scrum Master', 'The user’s representative'],
      correctAnswer: 2,
      explanation: 'The Product Owner ensures the Product Backlog is transparent and understood.'
    },
    {
      id: 'q5_16',
      question: 'Who ensures that all Scrum events take place and are positive, productive, and kept within the timebox?',
      options: ['The Product Owner', 'The Scrum Master', 'The Team Leader', 'The Most Senior Developer', 'The Scrum Team', 'The Solution Architect', 'The Project Manager'],
      correctAnswer: 1,
      explanation: 'This is the Scrum Master’s accountability.'
    },
    {
      id: 'q5_17',
      question: 'The Developers should have a Team Leader to improve communications and collaboration.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Scrum does not introduce titles such as “team leader.”'
    },
    {
      id: 'q5_18',
      question: 'When should the product be released?',
      options: ['When needed', 'When the Increment is usable', 'When the increment is free of defects', 'At the end of each Sprint'],
      correctAnswer: 0,
      explanation: 'Scrum does not prescribe release timing; release when valuable.'
    },
    {
      id: 'q5_19',
      question: 'The Product Backlog is an emergent, ordered list of what is needed to improve the product. Which is TRUE?',
      options: ['Provides just enough information for design.', 'The Product Owner is accountable for it.', 'Contains only small and clear items.', 'It’s used to create the project plan.'],
      correctAnswer: 1,
      explanation: 'The Product Owner is accountable for the Product Backlog.'
    },
    {
      id: 'q5_20',
      question: 'The Daily Scrum should always take precisely 15 minutes.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'It may be shorter; spending longer than needed is waste.'
    },
    {
      id: 'q5_21',
      question: 'How often should the members of the Scrum Team be modified?',
      options: ['Depends on the competencies needed', 'As needed', 'Never', 'As needed, but consider a short-term productivity dip'],
      correctAnswer: 3,
      explanation: 'Change team composition when needed, understanding there may be a short-term dip.'
    },
    {
      id: 'q5_22',
      question: 'Three Scrum Teams work on the same product. Must they have the same Sprint start date?',
      options: ['Yes, always.', 'No. Teams can determine how to synchronize and may have different start dates.'],
      correctAnswer: 1,
      explanation: 'There is no rule requiring the same Sprint start date.'
    },
    {
      id: 'q5_23',
      question: 'As Product Owner, which activity would you engage in during a Sprint?',
      options: ['Answer questions from the Developers about the Sprint Backlog.', 'Lead all the Scrum Events.', 'Manage the Sprint Backlog.', 'Produce progress reports for management.'],
      correctAnswer: 0,
      explanation: 'The PO should be available to provide just-in-time clarification.'
    },
    {
      id: 'q5_24',
      question: 'What is the role of management, external to the Scrum Team, at the Daily Scrum?',
      options: ['Management is represented by the Product Owner', 'The Scrum Master speaks on its behalf', 'Present updates at the start of each Daily Scrum', 'Management has no role at the Daily Scrum'],
      correctAnswer: 3,
      explanation: 'The Daily Scrum is a 15-minute event for the Developers.'
    },
    {
      id: 'q5_25',
      question: 'The Product Owner will attend her first Sprint Retrospective. What should she do?',
      options: ['Capture product requirements', 'Do not participate', 'Participate as a Scrum Team member', 'Take notes and report to stakeholders'],
      correctAnswer: 2,
      explanation: 'The Sprint Retrospective is for the whole Scrum Team.'
    },
    {
      id: 'q5_26',
      question: 'During a Sprint, who is responsible for ensuring everyone on the Scrum Team does their job?',
      options: ['The Project Manager', 'The Product Owner', 'The Scrum Master', 'The Scrum Team', 'The Developers'],
      correctAnswer: 3,
      explanation: 'The Scrum Team is self-managing.'
    },
    {
      id: 'q5_27',
      question: 'With multiple Scrum Teams on the same product, what is a key concern?',
      options: ['Ensuring each team’s Product Backlog is consistent', 'Meeting the Release Burndown', 'Ensuring no one is idle', 'Minimizing dependencies between teams', 'Having all PBIs ready'],
      correctAnswer: 3,
      explanation: 'Minimizing cross-team dependencies is critical at scale.'
    },
    {
      id: 'q5_28',
      question: 'By the end of each Sprint, at least one Increment must have been released to customers or users.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Scrum does not require a release each Sprint.'
    },
    {
      id: 'q5_29',
      question: 'The Product Owner must ensure the Developers select enough PBIs in Sprint Planning to satisfy stakeholders.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Developers select the work; the PO provides ordering and context.'
    },
    {
      id: 'q5_30',
      question: 'Developers don’t fully understand a PBI and can’t deliver. What should they do?',
      options: ['Add a specialist to the team', 'Leave the work for later', 'Complete whatever they can and discuss later', 'Discuss with the Product Owner to clarify'],
      correctAnswer: 3,
      explanation: 'Scope can be clarified and renegotiated with the Product Owner.'
    },
    {
      id: 'q5_31',
      question: 'Who determines how many PBIs the Developers select for a Sprint?',
      options: ['The Scrum Master', 'The Scrum Team', 'The Developers', 'The Product Owner'],
      correctAnswer: 2,
      explanation: 'Those who do the work select the work.'
    },
    {
      id: 'q5_32',
      question: 'Which is a valid situation for the Developers to cancel a Sprint?',
      options: ['They cannot. Only the Product Owner can cancel.', 'When the Product Owner is unavailable', 'When the scope is not clear', 'When the Sprint Goal becomes obsolete', 'When there are technical impediments'],
      correctAnswer: 0,
      explanation: 'Only the Product Owner can cancel a Sprint.'
    },
    {
      id: 'q5_33',
      question: 'When is the best moment to change the Definition of Done?',
      options: ['Before a new Sprint', 'During a Sprint Review', 'During a Sprint Retrospective', 'During a Sprint Planning'],
      correctAnswer: 2,
      explanation: 'The Retrospective focuses on quality and effectiveness (including DoD).'
    },
    {
      id: 'q5_34',
      question: 'In Scrum, how much time is allowed after a Sprint to prepare for the next Sprint?',
      options: ['At most one week.', 'Enough time to have the Product Backlog ready', 'Enough time to resolve technical debt', 'None. A new Sprint starts immediately', 'All of the above depending on situation'],
      correctAnswer: 3,
      explanation: 'A new Sprint starts immediately after the previous one ends.'
    },
    {
      id: 'q5_35',
      question: 'Scrum has a role called “Product Manager”.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'The accountabilities are Product Owner, Scrum Master, and Developers.'
    },
    {
      id: 'q5_36',
      question: 'Who creates the Definition of Done?',
      options: ['The Scrum Team', 'The Scrum Master', 'The Product Owner', 'The Developers'],
      correctAnswer: 0,
      explanation: 'If there is no organizational standard, the Scrum Team defines the DoD.'
    },
    {
      id: 'q5_37',
      question: 'Management does not trust the Scrum Team. Which Scrum value is most affected?',
      options: ['Focus', 'Respect', 'Openness', 'Courage', 'Commitment', 'All of the above'],
      correctAnswer: 1,
      explanation: 'Lack of trust often reflects lack of respect for the team’s capabilities.'
    },
    {
      id: 'q5_38',
      question: 'When is a Product Backlog item considered complete?',
      options: ['When the Sprint is over', 'When approved by the sponsor', 'When it passes all acceptance criteria', 'When it meets the Definition of Done'],
      correctAnswer: 3,
      explanation: 'A PBI becomes an Increment when it meets the DoD.'
    },
    {
      id: 'q5_39',
      question: 'Who owns the Sprint Backlog?',
      options: ['The Product Owner.', 'The Scrum Master', 'The Scrum Team', 'The Developers'],
      correctAnswer: 3,
      explanation: 'It is a plan by and for the Developers.'
    },
    {
      id: 'q5_40',
      question: 'Which of the following is true about the Developers?',
      options: ['Ensure PBIs conform to the Definition of Done', 'Order the Product Backlog', 'Lead and coach the organization in Scrum adoption', 'Have the authority to cancel the Sprint'],
      correctAnswer: 0,
      explanation: 'Developers instill quality by adhering to the DoD.'
    },
    {
      id: 'q5_41',
      question: 'When is a Sprint over?',
      options: ['When stakeholders decide', 'When all selected PBIs meet DoD', 'On the last Friday of the month', 'When the timebox expires'],
      correctAnswer: 3,
      explanation: 'Sprints are timeboxed.'
    },
    {
      id: 'q5_42',
      question: 'When must the Sprint Retrospective be held:',
      options: ['At the end of the last Sprint in a release', 'At the beginning of each Sprint', 'Whenever there are enough issues', 'At the end of each Sprint'],
      correctAnswer: 3,
      explanation: 'The Sprint Retrospective concludes the Sprint.'
    },
    {
      id: 'q5_43',
      question: 'What is the timebox for the Sprint Review of a one-month Sprint?',
      options: ['2 hours', '1 day', '4 hours', 'As long as needed'],
      correctAnswer: 2,
      explanation: 'Maximum of 4 hours for a one-month Sprint.'
    },
    {
      id: 'q5_44',
      question: 'Who should be the first person to talk in the Daily Scrum?',
      options: ['The person who has the token', 'The Scrum Master', 'The Product Owner', 'The most Senior Developer', 'Whoever the Developers decide'],
      correctAnswer: 4,
      explanation: 'Developers choose any structure that keeps focus on the Sprint Goal.'
    },
    {
      id: 'q5_45',
      question: 'Which of the following is a valid result at the end of a Sprint?',
      options: ['An Increment that meets the Definition of Done', 'An Increment with minor known defects', 'A workable product missing some verification', 'A report if requested'],
      correctAnswer: 0,
      explanation: 'The Scrum Team is accountable for a valuable, usable Increment that meets the DoD.'
    },
    {
      id: 'q5_46',
      question: 'Estimating size of Product Backlog items — who should do it?',
      options: ['The Product Owner estimates; Developers review', 'Use story points for small and t-shirt sizes for large', 'The Developers who will be doing the work', 'Scrum follows “No Estimates”', 'Estimates must be relative'],
      correctAnswer: 2,
      explanation: 'Those doing the work provide the estimates.'
    },
    {
      id: 'q5_47',
      question: 'As Scrum Master, which is your responsibility?',
      options: ['Process conformance checks always', 'Decide promotions', 'Remove all impediments', 'Take notes in events', 'Properly adopting and using the Scrum framework.'],
      correctAnswer: 4,
      explanation: 'Enable proper understanding and use of Scrum (teach, facilitate, and serve).'
    },
    {
      id: 'q5_48',
      question: 'Multiple Scrum Teams on the same product: should all increments be integrated every Sprint?',
      options: ['Yes, the Increment is done only when integrated, valuable, and usable', 'Yes, but only for teams with known dependencies', 'No, each team worries only about its part', 'Not necessarily; use hardening Sprints'],
      correctAnswer: 0,
      explanation: 'In scaled Scrum, the Increment must be integrated, valuable, and usable each Sprint.'
    },
    {
      id: 'q5_49',
      question: 'Preferred approach for Scrum Teams to develop valuable Increments:',
      options: ['Each team owns a set of components', 'Each team works on components where most expert', 'Each team develops a complete functionality'],
      correctAnswer: 2,
      explanation: 'Feature-oriented teams reduce dependencies.'
    },
    {
      id: 'q5_50',
      question: 'With multiple Scrum Teams on one product, which best describes the Definition of Done?',
      options: ['They must mutually define and comply with the same DoD', 'Each team has its own; reconcile later in hardening Sprints', 'Each team uses its own but transparent', 'A common DoD is defined by the Scrum Masters'],
      correctAnswer: 0,
      explanation: 'A shared DoD applies to the integrated Increment; teams may add stricter internal criteria.'
    },
    {
      id: 'q5_51',
      question: 'Which topics should be discussed in the Sprint Review?',
      options: ['The Definition of Done', 'How the last Sprint went regarding processes and tools', 'The outcome of the Sprint and future adaptations', 'All of the above'],
      correctAnswer: 2,
      explanation: 'The Sprint Review inspects the Sprint’s outcome and collaborates on next steps.'
    },
    {
      id: 'q5_52',
      question: 'Which phrase best describes the Product Owner?',
      options: ['The bridge between Developers and the customers', 'Value Optimizer', 'Team Boss', 'Requirements Engineer'],
      correctAnswer: 1,
      explanation: 'The Product Owner is accountable for maximizing value.'
    },
    {
      id: 'q5_53',
      question: 'An appropriate service a Scrum Master can provide for the Daily Scrum:',
      options: ['Manage turns', 'Ensure each person answers 3 questions in detail', 'Update Developers on management expectations', 'Teach Developers to finish within the 15-minute timebox', 'Update the Scrum Board', 'All of the above'],
      correctAnswer: 3,
      explanation: 'Teach intent and timebox; the Developers run the event.'
    },
    {
      id: 'q5_54',
      question: 'Which is an expected characteristic of a Scrum Team?',
      options: ['The members have all the skills necessary to create value each Sprint.', 'At least one representative from major departments.', 'Contains between 3 and 9 members.'],
      correctAnswer: 0,
      explanation: 'Scrum Teams are cross-functional and self-managing; typically 10 or fewer people.'
    },
    {
      id: 'q5_55',
      question: 'Developers are not collocated and must handle logistics for Daily Scrum. What should you do?',
      options: ['Allow the Developers to self-manage and deal with the issue', 'Rotate responsibility for setup', 'Handle it for them', 'Raise it to management'],
      correctAnswer: 0,
      explanation: 'Promote self-management; intervene only when beyond the team’s ability.'
    },
    {
      id: 'q5_56',
      question: 'When must the Product Owner participate at the Daily Scrum?',
      options: ['When there are business updates', 'When invited by the Scrum Master', 'When Developers need scope clarification', 'When actively working on Sprint Backlog items (as a Developer)'],
      correctAnswer: 3,
      explanation: 'The Daily Scrum is for Developers; the PO participates when acting as a Developer.'
    },
    {
      id: 'q5_57',
      question: 'When should the Sprint Backlog be updated?',
      options: ['Whenever the Product Owner identifies new work', 'Whenever the Scrum Master is available', 'As soon as possible after the update is identified', 'During Daily Scrums'],
      correctAnswer: 2,
      explanation: 'Adapt immediately when new information is learned.'
    },
    {
      id: 'q5_58',
      question: 'Forming ~30 people into Scrum Teams: good first question to suggest?',
      options: ['Who will be team leaders?', 'How will we ensure all teams have the right amount of expertise?', 'For each technology, who are the experts per team?', 'What is the right senior/junior mix per team?'],
      correctAnswer: 1,
      explanation: 'Teams must be cross-functional and self-managing.'
    },
    {
      id: 'q5_59',
      question: 'Which statement best describes the Sprint Backlog resulting from Sprint Planning?',
      options: ['Contains tasks lasting at most one day', 'Contains PBIs selected by the Product Owner', 'Contains all work to be delivered', 'It is the Scrum Team’s plan for the Sprint', 'Every task has a designated owner'],
      correctAnswer: 3,
      explanation: 'Sprint Planning produces the first version of the Sprint Backlog — the plan for the Sprint.'
    },
    {
      id: 'q5_60',
      question: 'Most impactful improvements identified in the Sprint Retrospective are registered where?',
      options: ['Next Sprint Backlog', 'Issue Tracker', 'Product Backlog', 'Process Improvement Backlog'],
      correctAnswer: 2,
      explanation: 'The Product Backlog is the single source of work for the Scrum Team.'
    },
    {
      id: 'q5_61',
      question: 'When should the Product Owner cancel a Sprint?',
      options: ['When Developers determine the Product Goal is unattainable', 'When the Sprint Goal becomes obsolete', 'When the CEO has a new opportunity', 'When it’s clear not all Sprint Backlog can be Done'],
      correctAnswer: 1,
      explanation: 'A Sprint may be canceled if the Sprint Goal becomes obsolete.'
    },
    {
      id: 'q5_62',
      question: 'If there is far more work than estimated for an item and it cannot be finished, the Sprint is canceled.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'Do not cancel the Sprint; renegotiate scope with the Product Owner.'
    },
    {
      id: 'q5_63',
      question: 'When does a single Developer become accountable for the value of a selected PBI?',
      options: ['Whenever he/she can pull more work', 'During the Daily Scrum', 'During Sprint Planning', 'Never. The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.'],
      correctAnswer: 3,
      explanation: 'Value creation is the Scrum Team’s accountability.'
    },
    {
      id: 'q5_64',
      question: 'How much work is required of Developers to complete each selected PBI?',
      options: ['Executable with at least 80% code coverage', 'As much as required to meet the Definition of Done', 'Whatever possible; finish between Sprints if ≤ 2 days', 'A prototype is fine'],
      correctAnswer: 1,
      explanation: 'A PBI is complete only when it meets the DoD.'
    },
    {
      id: 'q5_65',
      question: 'When must an Increment be released?',
      options: ['Whenever the Scrum Team judges that a release is valuable', 'Whenever it is created', 'Whenever there are no identified defects', 'At the end of each Sprint'],
      correctAnswer: 0,
      explanation: 'Scrum does not prescribe a release cadence.'
    },
    {
      id: 'q5_66',
      question: 'A Developer has continuing conflicts harming effectiveness. If necessary, who removes the Developer from the team?',
      options: ['Human Resources', 'The Product Owner', 'The Scrum Team', 'The Scrum Master'],
      correctAnswer: 2,
      explanation: 'The team is self-managing; the Scrum Master can coach and step in if needed.'
    },
    {
      id: 'q5_67',
      question: 'An indicator of a high-performing Scrum Team is that each Increment is completed by running a release Sprint.',
      options: ['TRUE', 'FALSE'],
      correctAnswer: 1,
      explanation: 'There is no such thing as a “release Sprint.”'
    },
    {
      id: 'q5_68',
      question: 'Who is responsible to inspect progress toward the Sprint Goal?',
      options: ['The Product Owner', 'The Developers', 'The Scrum Master', 'The Project Manager'],
      correctAnswer: 1,
      explanation: 'The Sprint Goal is part of the Sprint Backlog, which is by and for the Developers.'
    },
    {
      id: 'q5_69',
      question: 'What is the role of management in Scrum?',
      options: ['Support the Scrum Team and provide resources to help them be more efficient', 'Ensure each Developer is busy', 'Monitor Developers’ productivity', 'Ensure each Developer maintains acceptable efficiency and quality'],
      correctAnswer: 0,
      explanation: 'Management supports bottom-up intelligence with resources and insights.'
    },
    {
      id: 'q5_70',
      question: 'Who decides the order of the Product Backlog?',
      options: ['The Scrum Team', 'The Developers', 'The Project Manager', 'The Scrum Master', 'The Product Owner'],
      correctAnswer: 4,
      explanation: 'The Product Owner orders the Product Backlog.'
    },
    {
      id: 'q5_71',
      question: 'Which best describes the Product Backlog?',
      options: ['A detailed list of all work to be done', 'Baselined and subject to change control', 'Emergent'],
      correctAnswer: 2,
      explanation: 'The Product Backlog continuously evolves as more is learned.'
    },
    {
      id: 'q5_72',
      question: 'Developers selected too much work for the Sprint. What should they do?',
      options: ['Simplify the Definition of Done', 'Negotiate with other teams to send them excess work', 'Do the best possible and discuss in the Retrospective', 'As soon as possible, discuss with the Product Owner removing some work'],
      correctAnswer: 3,
      explanation: 'The Sprint scope can be renegotiated with the PO without endangering the Sprint Goal.'
    },
    {
      id: 'q5_73',
      question: 'What happens to undone work at the end of the Sprint?',
      options: ['The team has 2 days to finish leftovers.', 'The Sprint length stays the same and the team uses the opportunity to learn and adapt', 'The Sprint is extended and discussed in the Retrospective'],
      correctAnswer: 1,
      explanation: 'The Sprint ends when the timebox ends; carry over learning and adapt.'
    },
    {
      id: 'q5_74',
      question: 'What provides the Scrum Team with a target and overarching direction for the Sprint?',
      options: ['The Product Goal', 'The Sprint Backlog', 'The Sprint Goal', 'The Release Plan'],
      correctAnswer: 2,
      explanation: 'The Sprint Goal is the single objective for the Sprint.'
    },
    {
      id: 'q5_75',
      question: 'Which statement best describes Scrum?',
      options: ['A predictive process aligned to Extreme Management', 'A complete methodology for complex delivery', 'A framework that helps people, teams and organizations generate value through adaptive solutions for complex problems', 'A cookbook of best practices'],
      correctAnswer: 2,
      explanation: 'Scrum is a lightweight framework for complex problems.'
    },
    {
      id: 'q5_76',
      question: 'Why is the Sprint Goal useful for the Developers?',
      options: ['It sets a target for Sprint 0', 'They are not as valuable as the Product Goal', 'It drives them to get all PBIs done', 'It gives them a shared and specific target'],
      correctAnswer: 3,
      explanation: 'It provides focus and coherence to the Sprint’s work.'
    },
    {
      id: 'q5_77',
      question: 'When should a Sprint Goal be created?',
      options: ['Having a Sprint Goal is not mandatory', 'Created in the previous Sprint during refinement', 'During Sprint Planning', 'Established before Sprint Planning', 'At any time during the Sprint'],
      correctAnswer: 2,
      explanation: 'The Sprint Goal is created during Sprint Planning.'
    },
    {
      id: 'q5_78',
      question: 'Choosing Sprint length — which factor should be considered?',
      options: ['The organization’s release schedule', 'Match the same length as other teams', 'Availability of team members', 'The need for feedback to learn by doing and measuring results'],
      correctAnswer: 3,
      explanation: 'More uncertainty → shorter cycles for feedback and adaptation.'
    },
    {
      id: 'q5_79',
      question: 'If burn-down charts are used to visualize progress, what do they track?',
      options: ['Work remaining across time', 'Productivity of each team member', 'How risk changes through time', 'Accumulated value delivered'],
      correctAnswer: 0,
      explanation: 'A burndown shows remaining work over time.'
    },
    {
      id: 'q5_80',
      question: 'Which of the following indicates a Scrum Team is cross-functional?',
      options: ['The Scrum Team has all the skills necessary to create value each Sprint', 'Each member is T-shaped', 'Members are good friends', 'Each member has all skills necessary to create value each Sprint'],
      correctAnswer: 0,
      explanation: 'Cross-functional means the team collectively has all skills needed to create value each Sprint.'
    }
  ]
};
export default exam;
