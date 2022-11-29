import React, { useContext } from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";
import { BoardContext } from "../../context/BoardContext";

export default function Links() {
  const { projects } = useContext(BoardContext);

  return (
    <ul className="links">
      {projects.map((project, index) => {
        return (
          <li key={index}>
            <BoardIcon />
            {project.title}
          </li>
        );
      })}
    </ul>
  );
}
