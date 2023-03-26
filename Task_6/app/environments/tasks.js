'use strict';

let tasksDB = [
  {
    id: '21',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '22',
    name: 'Create website interface',
    description:
      'Create website layout/user interface by using standard HTML/CSS practices',
    createdAt: new Date('2023-02-15T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '10',
    name: 'Integrate data',
    description: 'Integrate data from various back-end services and databases',
    createdAt: new Date('2023-03-19T12:10:00'),
    assignee: 'Andrei',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '913',
        text: 'Hurry up',
        createdAt: new Date('2023-01-20T12:10:00'),
        author: 'Julia',
      },
    ],
  },
  {
    id: '23',
    name: 'Gather specifications',
    description:
      'Gather and refine specifications and requirements based on technical needs',
    createdAt: new Date('2023-02-20T11:00:00'),
    assignee: 'Andrei',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '1',
    name: 'Create documentation',
    description: 'Create and maintain software documentation',
    createdAt: new Date('2023-03-02T23:59:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '24',
    name: 'Be responsible for the site',
    description:
      'Be responsible for maintaining, expanding, and scaling the site',
    createdAt: new Date('2023-02-25T12:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Low',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '25',
    name: 'Stay plugged into new technologies',
    description:
      'Stay plugged into emerging technologies/industry trends and apply them into operations and activities',
    createdAt: new Date('2023-03-01T10:30:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '914',
        text: 'Do not forget',
        createdAt: new Date('2023-03-02T10:30:00'),
        author: 'Julia',
      },
    ],
  },
  {
    id: '11',
    name: 'Friend with designer',
    description: 'Cooperate with web designers to match visual design intent',
    createdAt: new Date('2023-01-25T22:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '26',
    name: 'Optimization the code',
    description: "Optimization the code you've already wrote.",
    createdAt: new Date('2023-03-02T08:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '27',
    name: 'Adding new features',
    description: "Adding new features to the web you've designed.",
    createdAt: new Date('2023-03-03T10:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '28',
    name: 'Replacing older technology',
    description:
      "Replacing older technology with new technology that you've used to build the website.",
    createdAt: new Date('2023-03-04T18:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '2',
    name: 'Debugging',
    description:
      'In hardware development, the debugging process looks for hardware components that are not installed or configured correctly.',
    createdAt: new Date('2023-03-03T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '914',
        text: 'Do not forget',
        createdAt: new Date('2023-01-04T12:10:00'),
        author: 'Julia',
      },
    ],
  },
  {
    id: '3',
    name: 'Being up-to-date',
    description:
      "Being up-to-date with latest technologies that you've interested to build is also plays makor role being a good web developer.",
    createdAt: new Date('2023-03-04T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '4',
    name: 'Testing all possible cases.',
    description:
      'Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases.',
    createdAt: new Date('2023-01-05T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '29',
    name: 'Liaising with colleagues',
    description:
      'Liaising with colleagues about who will produce which parts of the website.',
    createdAt: new Date('2023-03-05T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '12',
    name: 'Writing testing code',
    description:
      'Writing testing code to confirm your project meets the specification.',
    createdAt: new Date('2023-02-31T19:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-03-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '30',
    name: 'Writing html templates',
    description:
      'Writing html templates to display information to the site user.',
    createdAt: new Date('2023-03-06T10:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '5',
    name: 'Сommitting to a source repository',
    description:
      ' Writing code for front or back -end logic and committing to a source repository.',
    createdAt: new Date('2023-01-07T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '13',
    name: 'Presentation of the website',
    description: 'Presentation of the website to the customer or bosses.',
    createdAt: new Date('2023-03-01T09:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-03-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '14',
    name: 'Find best hosting',
    description: 'Arranging suitable hosting for the website.',
    createdAt: new Date('2023-03-02T21:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '916',
        text: 'Do not forget',
        createdAt: new Date('2023-02-02T21:10:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '6',
    name: 'Do not stress',
    description:
      'Do not stress too much on programming syntax. You will forget most of it anyway.',
    createdAt: new Date('2023-01-08T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '15',
    name: 'Master a good debugger',
    description:
      'Master a good debugger. Think of it like solving a detective novel!',
    createdAt: new Date('2023-03-02T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '16',
    name: 'Test your code',
    description:
      'Do not forget to unit test your code. Your code is always buggy.',
    createdAt: new Date('2023-03-03T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '7',
    name: 'Efficient code is always good?',
    description:
      'Do not think highly efficient code is always good. Sometimes, development cost outweighs it.',
    createdAt: new Date('2023-01-10T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '17',
    name: 'Start using an IDE and learn most of the shortcuts',
    description:
      'Start using an IDE and learn most of the shortcuts. Learning curve might be high. But once it becomes muscle memory, your productivity will be through the roof.',
    createdAt: new Date('2023-02-03T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Low',
    isPrivate: true,
    comments: [
      {
        id: '922',
        text: 'This will help you',
        createdAt: new Date('2023-02-05T09:10:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '8',
    name: 'Answered client emails',
    description:
      'Answered client emails and sat in on technical meetings with clients.',
    createdAt: new Date('2023-01-11T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '18',
    name: 'Revised some code',
    description:
      'Revised some code on a server responsible for downloading XML feeds and rsyncing those feeds to multiple servers (using PHP.)',
    createdAt: new Date('2023-02-04T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Low',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '9',
    name: 'Created workflow diagrams',
    description:
      'Created workflow diagrams for a client depicting the their site’s current and planned functionality.',
    createdAt: new Date('2023-01-15T12:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '19',
    name: 'Implemented a PHP script',
    description: 'Implemented a PHP script to scrub invalid email accounts',
    createdAt: new Date('2023-02-04T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: true,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '20',
    name: 'Modified some SQL queries',
    description:
      'Modified some SQL queries for an existing site (changing the order of the records, etc.) and added opt-out functionality for customer emails.',
    createdAt: new Date('2023-02-05T09:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '31',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '32',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '33',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '34',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '35',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '36',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '37',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '38',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '39',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '40',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '41',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '42',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '43',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '44',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '45',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '46',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '47',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '48',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '49',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '50',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '51',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '52',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '53',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '54',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '55',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '56',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '57',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '58',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-02T21:10:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '59',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
  {
    id: '60',
    name: 'Write well efficient code',
    description:
      'Write well designed, testable, efficient code by using best software development practices',
    createdAt: new Date('2023-02-11T15:00:00'),
    assignee: 'Julia',
    status: 'In progress',
    priority: 'Hight',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Just do it!',
        createdAt: new Date('2023-02-11T15:00:00'),
        author: 'Maksim',
      },
    ],
  },
];
