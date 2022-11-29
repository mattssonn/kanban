import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Links from "../Links/Links";
import "./Sidebar.scss";
export default function Sidebar() {
  const { projects } = useContext(BoardContext);
  return (
    <div className="sidebar">
      <p>All boards ( {projects.length} ) </p>
      <Links />
    </div>
  );
}
