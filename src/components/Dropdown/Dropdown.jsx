import React from "react";
import Links from "../Links/Links";
import "./Dropdown.scss";
import CrossIcon from "../../assets/icon-cross.svg";

export default function Dropdown({ dropdown, toggleDropdown }) {
  return (
    <div className={`dropdown ${dropdown ? "active-dropdown" : ""}`}>
      <div className="dropdown-box">
        <button
          className="dropdown-close-btn"
          onClick={() => {
            toggleDropdown(false);
          }}
        >
          <img src={CrossIcon} alt="" />
        </button>
        <Links />
      </div>
    </div>
  );
}
