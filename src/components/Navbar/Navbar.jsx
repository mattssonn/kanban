import React, { useContext } from "react";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import { BoardContext } from "../../context/BoardContext";
import UpLogo from "../../assets/icon-chevron-up.svg";

function Navbar({ setShowAddTicket }) {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="navbar">
      <div className="navbar-icon">
        <IconLogo />
        <h2>Kanban</h2>
      </div>
      <div className="navbar-boarder">
        <h3
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {currentProject.title}
        </h3>
        <img src={UpLogo} alt="" />
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

export default Navbar;
