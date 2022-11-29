import React, { createContext } from "react";
import { useState } from "react";
import { projectsData } from "./data";

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [currentProject, setcurrentProject] = useState(projects[0]);

  const value = {
    projects,
    currentProject,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardContextProvider;
