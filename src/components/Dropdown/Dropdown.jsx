import React from "react";
import Links from "../Links/Links";
import "./Dropdown.scss";

export default function Dropdown({ dropdown, toggleDropdown }) {
  return (
    <div
      onClick={() => {
        toggleDropdown(!dropdown);
      }}
      className={`dropdown ${dropdown ? "active-dropdown" : ""}`}
    >
      <div className="dropdown-box">
        <Links />
      </div>
    </div>
  );
}
