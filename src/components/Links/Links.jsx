import React, { useContext, useState } from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";
import { BoardContext } from "../../context/BoardContext";

export default function Links() {
  const { projects, currentProject, changeBoard, addNewProject } =
    useContext(BoardContext);
  const [value, setValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <ul className="links">
      {projects.map((project, index) => {
        return (
          <li
            key={index}
            className={currentProject.id === project.id ? "active" : ""}
            onClick={() => changeBoard(index)}
          >
            <BoardIcon />
            {project.title}
          </li>
        );
      })}
      <li onClick={toggleIsOpen} className="new-project">
        <BoardIcon /> +Create new Board
      </li>
      {isOpen && (
        <div className="new-project-input">
          <input
            type="text"
            value={value}
            placeholder="Project Name..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              addNewProject(value);
              toggleIsOpen();
            }}
          >
            Add project
          </button>
        </div>
      )}
    </ul>
  );
}
