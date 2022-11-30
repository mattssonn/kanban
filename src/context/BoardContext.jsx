import React, { createContext } from "react";
import { useState } from "react";
import { projectsData } from "./data";
import { v4 as uuidv4 } from "uuid";

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];

  const changeBoard = (index) => {
    setProjectIndex(index);
  };

  const addNewProject = (title) => {
    if (!title) return;

    const project = {
      title: title,
      id: uuidv4(),
      board: [
        {
          name: "Todo",
          tickets: [],
        },
        {
          name: "Doing",
          tickets: [],
        },
        {
          name: "Done",
          tickets: [],
        },
      ],
    };
    setProjects([...projects, project]);
    setProjectIndex(projects.length);
  };

  const value = {
    projects,
    currentProject,
    changeBoard,
    addNewProject,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardContextProvider;
