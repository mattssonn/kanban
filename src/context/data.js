import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    title: "Place Board",
    id: 1,
    board: [
      {
        name: "Todo",
        tickets: [
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      {
        name: "Doing",
        tickets: [
          {
            id: uuidv4(),
            title: "Portal for modals",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      {
        name: "Done",
        tickets: [
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
    ],
  },
  {
    title: "Jira Board",
    id: 2,
    board: {
      stage1: {
        name: "Todo",
        tickets: [
          {
            id: uuidv4(),
            title: "Test Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      stage2: {
        name: "Doing",
        tickets: [
          {
            id: uuidv4(),
            title: "Portal for modals",
            description: "This is one of the longest descriptions ever",
            tasks: ["Types and modal refs, get cookies to work with auth"],
          },
        ],
      },
      stage3: {
        name: "Done",
        tickets: [
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
    },
  },
];
