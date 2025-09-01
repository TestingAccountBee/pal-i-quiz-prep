const exam = {
  id: "psm-i-mock-3",
  title: "PSM I Mock Exam #3",
  description: "Professional Scrum Master Level I practice exam #3 based on provided content.",
  timeLimit: 60,
  passingScore: 85,
  questions: [
  {
    id: "q3_1",
    question: "It's up to the self-managing team to decide which Scrum artifacts are needed in the project.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Self-managing is not unlimited; e.g., you should follow the Scrum framework. While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices."
  {
    id: "q3_2",
    question: "At least one high-priority process improvement item exists in each Sprint Backlog.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "False. This is an old rule from Scrum Guide 2017 and removed in Scrum Guide 2020. \"The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.\", Scrum Guide 2020.",  },
  {
    id: "q3_3",
    question: "When is the Sprint over?",
    options: [
      "When the timeboxed duration is over",
      "When the Product Owner announces the end of the Sprint",
      "When the Scrum Master announces the end of the Sprint",
      "When the Sprint Backlog tasks are done"
    ],
    correctAnswer: 0,
    explanation: "It's a simple question: you need to know what timeboxing means, and that Sprints are timeboxed. Other than the normal ends of Sprints, the Product Owner also has the authority to cancel a Sprint.",  },
  {
    id: "q3_4",
    question: "Scrum is a technique for developing complex products.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Scrum is \"considered\" a framework, not a methodology, process, techniques, etc. It can be used to develop new products or maintain/sustain existing ones.",  },
  {
    id: "q3_5",
    question: "On average, items on the Product Backlog tend to be _____",
    options: [
      "Smaller than those on the Sprint Backlog",
      "The same size as those on the Sprint Backlog",
      "Larger than those on the Sprint Backlog"
    ],
    correctAnswer: 2,
    explanation: "When you first add items to the Product Backlog, they may be very large. As items move to the top of the backlog, they are refined and broken down into smaller, clearer items that can fit into one Sprint. Since items on the Sprint Backlog come from the top of the Product Backlog, they are, on average, smaller than items on the Product Backlog as a whole.",  },
  {
    id: "q3_6",
    question: "A Sprint initiates with a Sprint Planning.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "Sprint Planning initiates the Sprint by laying out the work to be performed for the Sprint.",  },
  {
    id: "q3_7",
    question: "How much time does the Product Owner spend on Product Backlog Refinement?",
    options: [
      "As much as needed",
      "Usually not more than 5% of their time",
      "Not more than 30% of their time",
      "Usually not more than 20% of their time"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner spends as much time as needed on Product Backlog Refinement.",  },
  {
    id: "q3_8",
    question: "How often should the composition of the team change?",
    options: [
      "Every Sprint, to encourage creativity and openness",
      "Never, because it reduces productivity",
      "As needed, without need to be concerned about changes in productivity",
      "As needed, considering that it will have a short-term reduction in productivity"
    ],
    correctAnswer: [
      2,
      3
    ],
    explanation: "The composition of the team should not change during the Sprint. However, it can change as needed between Sprints, with the understanding that it may cause a short-term reduction in productivity.",  },
  {
    id: "q3_9",
    question: "Which three of the following are pillars of Scrum?",
    options: [
      "Collaboration",
      "Inspection",
      "Adaptation",
      "Sustainable pace",
      "Value optimization",
      "Transparency"
    ],
    correctAnswer: [
      1,
      2,
      5
    ],
    explanation: "The pillars are transparency, inspection, and adaptation. Do not confuse these with the Scrum values (commitment, courage, focus, openness, and respect).",  },
  {
    id: "q3_10",
    question: "When does a Scrum Master cancel a Sprint?",
    options: [
      "When there's an unsolved technical dependency",
      "When the Sprint Goal becomes obsolete",
      "When not enough resources are available for the project",
      "The Scrum Master doesn't have the authority to cancel the Sprint."
    ],
    correctAnswer: 3,
    explanation: "According to the Scrum Guide, only the Product Owner has the authority to cancel a Sprint if the Sprint Goal becomes obsolete.",  },
  {
    id: "q3_11",
    question: "What does a burn-down chart measure?",
    options: [
      "The amount of business value delivered to the customer",
      "Work that is done based on the Definition of Done",
      "Cost of the project across time",
      "Work remaining across time"
    ],
    correctAnswer: 3,
    explanation: "A burn-down chart shows the amount of work remaining in a backlog over time. Time is on the horizontal axis and work remaining is on the vertical axis. It can be used for both Sprint Backlogs and Product Backlogs.",  },
  {
    id: "q3_12",
    question: "What do we do with Done items when the Sprint is canceled?",
    options: [
      "They should be moved to the next Sprint Backlog.",
      "They should be moved back to the Product Backlog, and will be taken care of in future Sprints.",
      "They will be reviewed and added to the Increment."
    ],
    correctAnswer: 2,
    explanation: "Items that are \"Done\" meet the Definition of Done and are part of a potentially shippable Increment. There is no reason to move them back to the Product Backlog.",  },
  {
    id: "q3_13",
    question: "Which two statements describe what happens when organizations change the Scrum terminology while implementing it?",
    options: [
      "They will get better results adopting Scrum this way.",
      "Management may feel less enthusiastic about the change.",
      "It's necessary to tailor Scrum to suit the project.",
      "The change might not be obvious to everyone, and therefore very little change actually happens."
    ],
    correctAnswer: [
      1,
      3
    ],
    explanation: "Scrum is a simple framework. It is recommended not to change the terminology as it can cause confusion and hinder the adoption process.",  },
  {
    id: "q3_14",
    question: "Which two of the following are required by Scrum?",
    options: [
      "Answering the three standard questions during Daily Scrums",
      "Definition of Done",
      "Having full-time developers",
      "User Stories",
      "Sprint Retrospectives"
    ],
    correctAnswer: [
      1,
      4
    ],
    explanation: "The Definition of Done and Sprint Retrospectives are required elements of Scrum. While common, the three standard questions in Daily Scrums, full-time developers, and User Stories are not explicitly required by the framework.",  },
  {
    id: "q3_15",
    question: "Which three of the following are timeboxed?",
    options: [
      "Release Retrospective",
      "Daily Scrum",
      "Sprint testing",
      "Sprint Retrospective",
      "Sprint Zero",
      "Sprint"
    ],
    correctAnswer: [
      1,
      3,
      5
    ],
    explanation: "Scrum has 5 timeboxed events: Sprint, Sprint Planning, Daily Scrum, Sprint Review and Sprint Retrospective.",  },
  {
    id: "q3_16",
    question: "Which two statements explain when a Product Backlog item is considered complete?",
    options: [
      "When the customer approves its completeness",
      "When no work is left based on the Definition of Done",
      "When user acceptance tests are passed",
      "When it's usable"
    ],
    correctAnswer: [
      1,
      3
    ],
    explanation: "A Product Backlog item is Done when it satisfies the Definition of Done. Being \"usable\" is equivalent to being \"potentially shippable\" or \"Done\".",  },
  {
    id: "q3_17",
    question: "Which two statements are correct about Daily Scrums?",
    options: [
      "Developers must answer the 3 standard questions during the meeting.",
      "It's timeboxed for 2 minutes per developer.",
      "Only the Developers participate in the meeting.",
      "It's held at the same time and place every day."
    ],
    correctAnswer: [
      2,
      3
    ],
    explanation: "The Daily Scrum is a 15-minute event for the Developers. It is held at the same time and place each day to reduce complexity.",  },
  {
    id: "q3_18",
    question: "The Product Owner should have a complete Product Backlog before the first Sprint can start.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog is never complete. It's always evolving in adaptive development.",  },
  {
    id: "q3_19",
    question: "Which of the following has the most to do with capturing and using lessons learned?",
    options: [
      "Sprint Planning",
      "Product Backlog Refinement",
      "Sprint Retrospective",
      "Sprint Review"
    ],
    correctAnswer: 2,
    explanation: "The Sprint Retrospective is about discussing how work was done and finding ways to improve, which is fundamentally about lessons learned.",  },
  {
    id: "q3_20",
    question: "Which of the following is required by Scrum?",
    options: [
      "Burn-down charts",
      "Sprint Retrospectives",
      "User Stories",
      "Story Points"
    ],
    correctAnswer: 1,
    explanation: "The Sprint Retrospective is a mandatory Scrum event. Burn-down charts, user stories, and story points are common practices but not explicitly required.",  },
  {
    id: "q3_21",
    question: "Scrum Teams are allowed to use burn-up charts instead of burn-down charts.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Team can adopt various practices to forecast progress, including burn-downs, burn-ups, or cumulative flows. These do not replace the importance of empiricism.",  },
  {
    id: "q3_22",
    question: "How many people are there in a Scrum Team with optimal size?",
    options: [
      "10 or less.",
      "4 to 12",
      "3 to 11",
      "3 to 10"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Team should be small enough to remain nimble but large enough to complete significant work, typically 10 or fewer people. Smaller teams generally communicate better and are more productive.",  },
  {
    id: "q3_23",
    question: "Who's responsible for quality?",
    options: [
      "Team leaders",
      "The Developers",
      "Testers",
      "The Scrum Team"
    ],
    correctAnswer: 3,
    explanation: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",  },
  {
    id: "q3_24",
    question: "Who is responsible for setting the timeboxed duration of Sprints?",
    options: [
      "Stakeholders",
      "The Scrum Team",
      "The Project Manager",
      "The Business Analyst",
      "The Developers"
    ],
    correctAnswer: 1,
    explanation: "The timeboxed duration of Sprints is set by the whole Scrum Team, including the Product Owner, Scrum Master, and Developers, based on factors like work complexity and predictability.",  },
  {
    id: "q3_25",
    question: "The Product Owner can also be a Developer",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "Scrum doesn't prohibit a person from having multiple accountabilities. What's important is that the Product Owner effectively performs their responsibilities.",  },
  {
    id: "q3_26",
    question: "A 2x increase in the number of Developers will double productivity.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Adding more developers often leads to a short-term decrease in productivity due to onboarding. Even in the long-term, the increase is usually not linear due to increased communication overhead. This is related to Brooks's Law.",  },
  {
    id: "q3_27",
    question: "Scrum is a methodology for developing complex products.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Scrum is considered a framework, not a methodology. It can be used for developing new products or sustaining existing ones.",  },
  {
    id: "q3_28",
    question: "Which three Scrum values are demonstrated by focusing on the most valuable items first?",
    options: [
      "Cross-functionality",
      "Courage",
      "Earned Value",
      "Focus",
      "Respect"
    ],
    correctAnswer: [
      1,
      3,
      4
    ],
    explanation: "The Scrum values are commitment, courage, focus, openness, and respect.",  },
  {
    id: "q3_29",
    question: "Which of the following is true about the Sprint Events?",
    options: [
      "The Sprint Retrospective concludes the Sprint.",
      "The Sprint Review concludes the Sprint.",
      "A Sprint may initiate with a Sprint Planning.",
      "All events must be held at the same time and place to reduce complexity."
    ],
    correctAnswer: 0,
    explanation: "The Sprint Retrospective is the final event in a Sprint. Sprint Planning initiates the Sprint, it is not optional. Holding all events at the same time and place is a recommendation to reduce complexity, not a strict rule.",  },
  {
    id: "q3_30",
    question: "Which two statements are correct about the number of Product Owners when there are three products being developed using Scrum?",
    options: [
      "There can be a single Product Owner for all products.",
      "There can be a different Product Owner for each product.",
      "There should be only one Product Owner.",
      "Each product should have a separate Product Owner."
    ],
    correctAnswer: [
      0,
      1
    ],
    explanation: "There is no strict rule dictating the number of Product Owners for multiple products. The decision can be based on the organization's specific needs.",  },
  {
    id: "q3_31",
    question: "Which two of the following can be reasons for the Scrum Master to attend the Daily Scrum?",
    options: [
      "Coach the Developers on keeping it within 15 minutes.",
      "To tell Developers what to do.",
      "It's not necessary for he/she to be in the meeting.",
      "To make sure that every Developer answers the three questions.",
      "To get a report on progress of the Sprint."
    ],
    correctAnswer: [
      0,
      2
    ],
    explanation: "The Scrum Master ensures the Daily Scrum happens and stays within its 15-minute timebox, but their attendance is not mandatory as the event is for the Developers.",  },
  {
    id: "q3_32",
    question: "Which element should NOT be an attribute of Product Backlog items?",
    options: [
      "Description",
      "Size",
      "Order",
      "Owner"
    ],
    correctAnswer: 3,
    explanation: "The entire Scrum Team is accountable for the work; individual items do not have a single \"owner\".",  },
  {
    id: "q3_33",
    question: "How does the Product Owner determine the number of items for the Sprint Backlog?",
    options: [
      "Based on velocity",
      "He or she doesn't do it!",
      "Based on a combination of velocity and team capacity",
      "Based on what is needed for the next release"
    ],
    correctAnswer: 1,
    explanation: "The Developers select items from the Product Backlog to include in the current Sprint.",  },
  {
    id: "q3_34",
    question: "What's the role of a Product Owner during Sprint Retrospectives?",
    options: [
      "They should not participate in this meeting",
      "Participating as a Scrum Team member",
      "Capturing requirements for the Product Backlog",
      "Summarizing and report the results of the meeting to stakeholders"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is a member of the Scrum Team and participates in the Sprint Retrospective to help inspect the last Sprint and identify improvements.",  },
  {
    id: "q3_35",
    question: "Sprint Planning is not a place for refining Product Backlog items.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Team may refine items during Sprint Planning to increase understanding and confidence.",  },
  {
    id: "q3_36",
    question: "In scaled Scrum, each Scrum Team demonstrates their individual Increment.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "The Increment must be a result of the collectible effort of all Scrum Teams working on the product.",  },
  {
    id: "q3_37",
    question: "All of the following are possible inputs to Sprint Planning, EXCEPT:",
    options: [
      "Sprint Goal",
      "Product Backlog Refinement",
      "Velocity",
      "Increment",
      "Definition of Done"
    ],
    correctAnswer: 0,
    explanation: "The Sprint Goal is an output of Sprint Planning, defined by the whole Scrum Team during the event.",  },
  {
    id: "q3_38",
    question: "Which of the following is NOT mandatory in Scrum?",
    options: [
      "Planning Poker",
      "Timeboxing the Events",
      "Definition of Done",
      "Sprint Planning"
    ],
    correctAnswer: 0,
    explanation: "While Planning Poker is a popular technique, Scrum does not prescribe any specific estimation method. Timeboxing, Definition of Done, and Sprint Planning are all essential elements of the framework.",  },
  {
    id: "q3_39",
    question: "Which two of the following are correct about the whole Scrum Team role?",
    options: [
      "Owns the Product Backlog",
      "Is responsible for setting the timeboxed duration of Sprints",
      "May add new work to the Sprint Backlog during the Sprint",
      "Is responsible for composing the Sprint Goal",
      "Prioritizes tasks in the Sprint Backlog"
    ],
    correctAnswer: [
      1,
      3
    ],
    explanation: "The entire Scrum Team collaboratively sets the Sprint duration and defines the Sprint Goal. The Product Owner owns the Product Backlog, and the Developers prioritize tasks within the Sprint Backlog.",  },
  {
    id: "q3_40",
    question: "Which two of the following should be considered in setting the timeboxed duration of Sprints?",
    options: [
      "It cannot be longer than one month.",
      "It's better to have shorter Sprints when the project is riskier.",
      "It should be shorter when there are more Developers.",
      "It shouldn't be longer than 6 weeks.",
      "It should be longer in bigger projects."
    ],
    correctAnswer: [
      0,
      1
    ],
    explanation: "Sprints have a maximum duration of one month. Shorter Sprints are beneficial for riskier projects as they allow for quicker feedback and adaptation.",  },
  {
    id: "q3_41",
    question: "Product Backlog refinement is the act of breaking down and further defining Sprint Backlog items into smaller more precise items.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Product Backlog refinement is for Product Backlog items, not Sprint Backlog items.",  },
  {
    id: "q3_42",
    question: "Which of the following is NOT correct about the Scrum Master?",
    options: [
      "Manages the Product Backlog",
      "Helps the organization to implement Scrum",
      "Is a true leader who serves the Scrum Team and the larger organization",
      "Causes the removal of impediments"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner is responsible for managing the Product Backlog. The Scrum Master is a leader who helps the organization adopt Scrum and facilitates the removal of impediments.",  },
  {
    id: "q3_43",
    question: "Which two of the following are pillars of Scrum?",
    options: [
      "Value optimization",
      "Adaptation",
      "Creativity",
      "Sustainable pace",
      "Transparency"
    ],
    correctAnswer: [
      1,
      4
    ],
    explanation: "The pillars of Scrum are transparency, inspection, and adaptation, which support clear communication, regular evaluation, and continuous improvement.",  },
  {
    id: "q3_44",
    question: "Who is responsible for engaging the stakeholders?",
    options: [
      "The Project Manager",
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team"
    ],
    correctAnswer: 4,
    explanation: "The entire Scrum Team is responsible for product-related activities, including stakeholder collaboration.",  },
  {
    id: "q3_45",
    question: "When is the Sprint over?",
    options: [
      "When the Product Owner cancels the Sprint",
      "When the Sprint Backlog tasks are done",
      "When all Sprint Backlog items are done",
      "When the Scrum Master announces the end of the Sprint",
      "When the timeboxed duration is over"
    ],
    correctAnswer: [
      0,
      4
    ],
    explanation: "A Sprint ends either when its timebox expires or when the Product Owner cancels it. If work is completed early, the team can pull more work from the Product Backlog.",  },
  {
    id: "q3_46",
    question: "What are the three classical questions of Daily Scrums, if you decide to go through them?",
    options: [
      "Are we able to deliver all Sprint Backlog items by the end of the Sprint?",
      "What problems did I have yesterday?",
      "What impediments are in my way or in the way of the team?",
      "What is the progress of the Sprint?",
      "What work did I do yesterday to help the team achieve its goal?",
      "What work am I going to do today to help the team achieve its goal?"
    ],
    correctAnswer: [
      2,
      4,
      5
    ],
    explanation: "These three questions are a common, though not mandatory, way to structure the Daily Scrum. They are no longer in the 2020 Scrum Guide but are good to know.",  },
  {
    id: "q3_47",
    question: "When multiple teams are working on the same product, one person can be a Developer on more than one Scrum Team.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "No Scrum accountability is necessarily a full-time job for one team. A person with special expertise may serve multiple teams if it's not needed on a full-time basis for any single team.",  },
  {
    id: "q3_48",
    question: "Which two of the following may be done in the Sprint Retrospective event?",
    options: [
      "Discuss the next Sprint goal",
      "Refine the Product Backlog",
      "Discuss the composition of the team",
      "Calculate Velocity",
      "Discuss the Definition of Done"
    ],
    correctAnswer: [
      2,
      4
    ],
    explanation: "In the Sprint Retrospective, the Scrum Team discusses the team's composition, dynamics, processes, tools, and their Definition of Done.",  },
  {
    id: "q3_49",
    question: "Which two statements are correct about a Product Backlog item that is undone at the end of the Sprint?",
    options: [
      "Demonstrate it in the Sprint Review meeting, if the item is presentable in its current state.",
      "The Sprint will be extended until we complete the item.",
      "Do not include it in the Increment.",
      "Move it back to the Product Backlog.",
      "Consider the complete part of the item in velocity calculation and then create a new item in the Product Backlog for the remaining work."
    ],
    correctAnswer: [
      2,
      3
    ],
    explanation: "If a Product Backlog item is not \"Done\" at the end of the Sprint, it is not included in the Increment and is moved back to the Product Backlog for future consideration. No partial credit is given in velocity calculations.",  },
  {
    id: "q3_50",
    question: "What happens if we forecast that some of the work defined in the Sprint Backlog won't be done by the end of the Sprint?",
    options: [
      "Extend the duration of the Sprint, to be able to deliver everything.",
      "Continue to the next Sprint without a Sprint Review meeting and finish those items in the next Sprint.",
      "Review the work with the Product Owner to see if any adjustments are required, and keep working.",
      "Work overtime and try to complete all items."
    ],
    correctAnswer: 2,
    explanation: "If the Sprint Backlog is at risk, the team should consult the Product Owner to see if adjustments or reprioritization is needed. Sprints are not extended, and working overtime is discouraged in favor of a sustainable pace.",  },
  {
    id: "q3_51",
    question: "Which of the following are true?",
    options: [
      "The Developers are always accountable for instilling quality by adhering to a Definition of Done",
      "The fundamental unit of Scrum is a small team of people, a Scrum Team.",
      "The Product Owner is responsible for the sizing Product Backlog items.",
      "Sprints are the heartbeat of Scrum, where ideas are turned into value."
    ],
    correctAnswer: [
      0,
      1,
      3
    ],
    explanation: "The Developers who will be doing the work are responsible for sizing Product Backlog items, although the Product Owner can provide input.",  },
  {
    id: "q3_52",
    question: "Which two statements are correct about Product Backlog Refinement?",
    options: [
      "Multiple teams may participate in it.",
      "It can take as much time as needed.",
      "Normally, it shouldn't take more than 10% of the Scrum Team's time.",
      "Normally, it doesn't take more than 10% of the Development Team's time.",
      "The Scrum Master should facilitate it.",
      "Normally, it doesn't take more than 10% of the Product Owner's time."
    ],
    correctAnswer: [
      0,
      1
    ],
    explanation: "The Product Backlog is refined as needed during the Sprint, and there are no restrictions on how many teams can participate.",  },
  {
    id: "q3_53",
    question: "Which three statements are correct when four teams are working on a product?",
    options: [
      "There can be multiple Scrum Masters.",
      "There can be multiple Definitions of Done.",
      "There can be multiple Product Backlogs.",
      "Each Scrum Team maintains its individual Sprint Backlog.",
      "There is only one Sprint Backlog each Sprint.",
      "There is only one Definition of Done."
    ],
    correctAnswer: [
      0,
      1,
      3
    ],
    explanation: "For one product, there is only one Product Backlog. However, you can have multiple Scrum Masters and each team has its own Sprint Backlog. While the product must have a single Definition of Done, each team can have a more stringent version for their own work.",  },
  {
    id: "q3_54",
    question: "When the Scrum Team becomes mature enough in using Scrum, they won't need a Scrum Master anymore.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "A Scrum Master is always needed.",  },
  {
    id: "q3_55",
    question: "The Product Backlog is baselined before the first Sprint",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "Scrum.org interprets \"baseline\" as keeping something fixed. In Scrum, there are no baselines as the framework is adaptive.",  },
  {
    id: "q3_56",
    question: "How much time does the Scrum Team spend on Product Backlog Refinement?",
    options: [
      "Usually not more than 5% of their time",
      "Usually not more than 10% of their time",
      "Usually not more than 20% of their time",
      "As much as needed"
    ],
    correctAnswer: 3,
    explanation: "The Product Backlog is refined as needed during the Sprint.",  },
  {
    id: "q3_57",
    question: "What's the main responsibility of a tester in Scrum?",
    options: [
      "Tracking quality metrics",
      "Finding bugs",
      "Writing the test scripts as soon as the programmers start working on the code",
      "There are no testers in Scrum"
    ],
    correctAnswer: 3,
    explanation: "There are no specific roles like \"tester\" in Scrum. Developers are responsible for all aspects of creating a Done Increment, including testing. There can be developers who are experts in testing.",  },
  {
    id: "q3_58",
    question: "It's generally better to have shorter Sprints when the project is riskier.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "Shorter Sprints provide more opportunities for adaptation and thus reduce risks.",  },
  {
    id: "q3_59",
    question: "What's the timeboxed duration of Daily Scrums when there are 6 developers in the team and Sprints are two weeks long?",
    options: [
      "2 minutes per Developer + 2 minutes",
      "2 minutes per Developer",
      "As much as needed to answer the three standard questions",
      "15 minutes"
    ],
    correctAnswer: 3,
    explanation: "The timeboxed duration of Daily Scrums is always 15 minutes, regardless of the number of Developers or the Sprint length.",  },
  {
    id: "q3_60",
    question: "Which two statements best describe the Product Backlog?",
    options: [
      "It changes as we learn more about the product.",
      "Contains all tasks identified by the Developers.",
      "It's used to create the project plan.",
      "The Product Owner is accountable for it."
    ],
    correctAnswer: [
      0,
      3
    ],
    explanation: "Tasks are part of the Sprint Backlog, not the Product Backlog. The Product Backlog is the single source of work and is continuously evolving.",  },
  {
    id: "q3_61",
    question: "Which two of the following are NOT allowed in Scrum?",
    options: [
      "Using Story Points",
      "Sprint 0",
      "Refactoring",
      "Integration Sprints",
      "Using User Stories"
    ],
    correctAnswer: [
      1,
      3
    ],
    explanation: "Sprint 0 and Integration Sprints are not aligned with the core principles of Scrum, which emphasize delivering a valuable Increment each Sprint.",  },
  {
    id: "q3_62",
    question: "Which Scrum value is manifested when we continuously show the correct performance on a burn-down chart that everyone can see?",
    options: [
      "Adaptation",
      "Simplicity",
      "Openness",
      "Transparency",
      "Communication"
    ],
    correctAnswer: 2,
    explanation: "Making information radiators like burndown charts visible to everyone is an example of the Scrum value of Openness, as it makes progress and challenges transparent to all.",  },
  {
    id: "q3_63",
    question: "The first Sprint can start as soon as the Product Backlog is complete.",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog is never complete; it is a living artifact that evolves throughout the project.",  },
  {
    id: "q3_64",
    question: "Which of the following is mandatory in Scrum?",
    options: [
      "Story Points",
      "Pair-Programming",
      "Product Goal",
      "User Stories"
    ],
    correctAnswer: 2,
    explanation: "The Product Goal is a mandatory element in Scrum. Practices like Story Points, Pair-Programming, and User Stories are commonly used but not required by the framework.",  },
  {
    id: "q3_65",
    question: "What's the timeboxed duration of Sprint Retrospective events?",
    options: [
      "Four hours and longer as needed.",
      "3 hours in a one-month Sprint, usually shorter for shorter Sprints.",
      "As long as the Scrum Master defines.",
      "Four hours for a monthly Sprint. For shorter Sprints, it is usually shorter.",
      "One day."
    ],
    correctAnswer: 1,
    explanation: "The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint and is usually shorter for shorter Sprints.",  },
  {
    id: "q3_66",
    question: "Which two of the following actions may a Scrum Master take in starting up an initiative to develop a new product?",
    options: [
      "Ask the Developers to introduce themselves to each other and tell about their skills and background.",
      "Ensure that a bonus system is in place for the top performance of individuals.",
      "Ask the Product Owner to explain the product, its business need, history, goals, and context.",
      "Ask the team to work together and prepare a complete Product Backlog.",
      "Ensure that there's a clear understanding of the whole scope of the project."
    ],
    correctAnswer: [
      0,
      2
    ],
    explanation: "When starting a new product, the Scrum Master facilitates team introductions and ensures there is a clear understanding of the product, its context, and goals.",  },
  {
    id: "q3_67",
    question: "How do changes in the product environment impact the Product Backlog?",
    options: [
      "The old baselined Product Backlog would be saved, and a new one would be created for the rest of the product.",
      "There's no effect on the Product Backlog.",
      "It evolves to reflect the changes",
      "The Product Backlog should be kept high-level enough to tolerate such changes."
    ],
    correctAnswer: 2,
    explanation: "The Product Backlog is a dynamic artifact that evolves to reflect new information, insights, and requirements as they emerge, ensuring it remains relevant and aligned with the product's vision.",  },
  {
    id: "q3_68",
    question: "Which two of the following may happen when the team becomes mature enough during the product development?",
    options: [
      "They may improve their Definition of Done.",
      "They may not need a Scrum Master anymore.",
      "They may not need Sprint Retrospectives anymore.",
      "Their velocity may increase."
    ],
    correctAnswer: [
      0,
      3
    ],
    explanation: "A mature Scrum Team may improve their Definition of Done and see an increase in velocity. However, the Scrum Master and Sprint Retrospectives remain valuable for continuous improvement.",  },
  {
    id: "q3_69",
    question: "When is it time to integrate the resulting work of the Developers?",
    options: [
      "At the end of each Sprint",
      "Frequently, during the Sprint",
      "At the end of the project",
      "Before each release"
    ],
    correctAnswer: 1,
    explanation: "Continuous integration during the Sprint is encouraged to identify issues early and ensure the Increment remains in a releasable state.",  },
  {
    id: "q3_70",
    question: "The Developers are ready to start the first Sprint, but the Product Backlog is not ready yet. What should the Product Owner do?",
    options: [
      "Ask the Developers to help you refine the Product Backlog instead of starting the first Sprint.",
      "Let the Sprint begin, but only with the goal of completing the Product Backlog.",
      "Let the team start the first Sprint, and continue refining the Product Backlog.",
      "Postpone the Sprint."
    ],
    correctAnswer: 2,
    explanation: "The Product Backlog is a living artifact and does not need to be fully complete to start a Sprint. The team can start the first Sprint and continue to refine the backlog as they progress.",  },
  {
    id: "q3_71",
    question: "Which two of the following may change during the Sprint?",
    options: [
      "Sprint Backlog",
      "Product Backlog",
      "Minimum level of quality",
      "Sprint Goal"
    ],
    correctAnswer: [
      0,
      1
    ],
    explanation: "Both the Sprint Backlog and Product Backlog are emergent and can change during the Sprint. The Sprint Goal and the expected level of quality, however, should not change.",  },
  {
    id: "q3_72",
    question: "You are the Scrum Master for a Scrum Team that got caught in an internal disagreement about which agile practices to apply. Which of the following techniques could you use to serve the team?",
    options: [
      "Consult with an external agile coach",
      "Facilitate involving the whole Scrum team in making a decision",
      "Use coaching techniques, such as conflict resolution and active listening",
      "Consult with the organization's Human Resources department"
    ],
    correctAnswer: [
      1,
      2
    ],
    explanation: "The Scrum Master should coach the self-managing team to resolve their own disagreements. This is done by facilitating decision-making and using coaching techniques, rather than immediately escalating to external sources.",  },
  {
    id: "q3_73",
    question: "Which of the following are time-boxed Scrum events?",
    options: [
      "Hardening Sprint",
      "Sprint 0",
      "Sprint Planning",
      "Release Planning",
      "Product Backlog Refinement session",
      "Daily Scrum",
      "Sprint Retrospective"
    ],
    correctAnswer: [
      2,
      5,
      6
    ],
    explanation: "Sprint Planning, Daily Scrum, and Sprint Retrospective are all time-boxed events in Scrum. \"Hardening Sprints\", \"Sprint 0\", and \"Release Planning\" are not official Scrum events. Product Backlog Refinement is an ongoing activity, not a formal, time-boxed event.",  },
  {
    id: "q3_74",
    question: "You are the Scrum Master of a Scrum Team and management suggested having a tester on your Scrum Team. What are the two things that you would tell management?",
    options: [
      "Scrum has no \"tester\" role",
      "Configuring quality tools and tracking quality metrics",
      "Performing exploratory testing to detect defects",
      "Performing quality assurance activities such as process assessments",
      "The Developers perform testing activities."
    ],
    correctAnswer: [
      0,
      4
    ],
    explanation: "Scrum teams are cross-functional, and there are no sub-teams or specific roles like \"tester.\" The Developers as a whole are accountable for quality and perform all necessary activities, including testing, to meet the Definition of Done.",  },
  {
    id: "q3_75",
    question: "Which three of the following are true about the Scrum Master?",
    options: [
      "The Scrum Master assigns tasks to Developers",
      "The Scrum Master is responsible for updating the Sprint Burndown",
      "The Scrum Master helps those outside the team interact with the Scrum Team",
      "The Scrum Master teaches the Scrum Team to use timeboxes",
      "Helps the Product Owner to establish empirical product planning for a complex environment"
    ],
    correctAnswer: [
      2,
      3,
      4
    ],
    explanation: "A Scrum Master is a leader and coach who helps the organization adopt Scrum, teaches the team about timeboxes, and helps the Product Owner with empirical planning. They do not assign tasks or act as a secretary for the team.",  },
  {
    id: "q3_76",
    question: "Which three following are true about Scrum?",
    options: [
      "The Scrum Master is Scrum's way of having a project manager for a self- managed context",
      "Scrum is founded on empiricism and lean thinking.",
      "Scrum is a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.",
      "Scrum is a methodology and you can adapt to your needs as you wish.",
      "Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum."
    ],
    correctAnswer: [
      1,
      2,
      4
    ],
    explanation: "Scrum is a framework founded on empiricism and lean thinking. Changing its core design or leaving out elements limits its benefits. It is not a methodology to be adapted at will.",  },
  {
    id: "q3_77",
    question: "Which of the following are true regarding the Definition of Done?",
    options: [
      "Each Product Backlog item contains a Definition of Done containing the criteria it needs to meet to be accepted",
      "Guides the Developers on how many Product Backlog items to select for the Sprint",
      "Is committed to by the Increment",
      "Defines the criteria for a Sprint to be Done",
      "Increases transparency"
    ],
    correctAnswer: [
      1,
      2,
      4
    ],
    explanation: "The Definition of Done provides a shared understanding of what \"Done\" means, which increases transparency and helps the Developers forecast work for the Sprint. The Increment is a commitment to this definition. It defines when a Product Backlog Item is complete, not when a Sprint is complete.",  },
  {
    id: "q3_78",
    question: "Which of the following may change during the Sprint?",
    options: [
      "Sprint Goal",
      "Sprint Backlog",
      "Minimum level of quality"
    ],
    correctAnswer: 1,
    explanation: "The Sprint Backlog is emergent and can be modified throughout the Sprint as more is learned. The Sprint Goal and the minimum level of quality should not change during the Sprint.",  },
  {
    id: "q3_79",
    question: "Which of the following are the responsibilities of the Developers of a Scrum Team?",
    options: [
      "Report their progress to management",
      "Estimate the size of Product Backlog items",
      "Do the work planned in the Sprint Backlog",
      "Select Product Backlog items for the Sprint",
      "Order the Product Backlog"
    ],
    correctAnswer: [
      1,
      2,
      3
    ],
    explanation: "Developers are responsible for sizing items, selecting them for the Sprint, and doing the work. The Product Owner is accountable for ordering the Product Backlog, and the team does not report progress to management.",  },
  {
    id: "q3_80",
    question: "Which of the following are aspects of Scrum that promote self-management?",
    options: [
      "By being a lightweight framework",
      "By the Developers selecting items from the Product Backlog to include in the current Sprint.",
      "By removing title for Scrum Team members",
      "By having the Scrum Master protect the Scrum Team from interruptions."
    ],
    correctAnswer: [
      0,
      1,
      2
    ],
    explanation: "Scrum's lightweight nature, empowering developers to select their work, and removing titles all promote self-management. A Scrum Master should teach the team to handle interruptions themselves rather than acting as a gatekeeper.",  }
]
};

export default exam;
