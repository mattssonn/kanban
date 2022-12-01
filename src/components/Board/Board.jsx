import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { BoardContext } from "../../context/BoardContext";
import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject } = useContext(BoardContext);
  return (
    <div className="board">
      {currentProject.board.map((column, index) => {
        return (
          <div className="board-column" key={index}>
            <div className="board-title">
              <div className={`board-title-icon Todo ${column.name}`}></div>
              <h4 className="heading-s">{column.name}</h4>
            </div>
            {column.tickets.map((ticket) => {
              return <Ticket data={ticket} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
