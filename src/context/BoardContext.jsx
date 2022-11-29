import React, { createContext } from "react";
import { useState } from "react";
import { projectsData } from "./data";

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];

  const changeBoard = (index) => {
    setProjectIndex(index);
  };

  const value = {
    projects,
    currentProject,
    changeBoard,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardContextProvider;
