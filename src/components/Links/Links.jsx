import React from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";

export default function Links() {
  return (
    <ul className="links">
      <li>
        <BoardIcon />
        Place board
      </li>
      <li className="active">
        <BoardIcon />
        Abc project
      </li>
    </ul>
  );
}
