import React, { useContext } from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";
import { BoardContext } from "../../context/BoardContext";

export default function Links() {
  const { projects, currentProject, changeBoard } = useContext(BoardContext);

  console.log(projects);
  return (
    <ul className="links">
      {projects.map((project, index) => {
        return (
          <li
            key={index}
            className={currentProject.id === project.id ? "active" : ""}
            onClick={() => {
              changeBoard(index);
            }}
          >
            <BoardIcon />
            {project.title}
          </li>
        );
      })}
    </ul>
  );
}
