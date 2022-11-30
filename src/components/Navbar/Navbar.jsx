import React, { useContext } from "react";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import { BoardContext } from "../../context/BoardContext";

function Navbar({ toggleDropdown }) {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="navbar">
      <div className="navbar-icon">
        <IconLogo />
        <h2>Kanban</h2>
      </div>
      <div className="navbar-boarder">
        <h3>{currentProject.title}</h3>
      </div>
      <div className="navbar-add-ticket">
        <button
          onClick={() => {
            toggleDropdown((prev) => !prev);
          }}
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default Navbar;
