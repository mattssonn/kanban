import React, { useContext } from "react";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import { BoardContext } from "../../context/BoardContext";
import upLogo from "../../assets/icon-chevron-up.svg";
import downLogo from "../../assets/icon-chevron-down.svg";

export default function Navbar({ setShowAddTicket, setIsOpen, isOpen }) {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="navbar">
      <div className="navbar-icon">
        <IconLogo />
        <h2>Kanban</h2>
      </div>
      <div className="navbar-board">
        <h2>{currentProject.title}</h2>
        <img
          src={isOpen ? downLogo : upLogo}
          alt=""
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
      </div>
      <div className="navbar-add-ticket">
        <button
          onClick={() => {
            setShowAddTicket((prev) => !prev);
          }}
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}
