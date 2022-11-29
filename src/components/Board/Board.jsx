import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { BoardContext } from "../../context/BoardContext";
import { useContext } from "react";

// const subTasks = [
//   {
//     task: "Tjeena",
//   },
//   {
//     task: "Tjabaa",
//   },
// ];

// const testTicket = {
//   title: "Firstone",
//   description: "Description",
//   tasks: subTasks,
// };

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

{
  /* <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Todo"></div>
          <h4 className="heading-s">Todo</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Doing"></div>
          <h4 className="heading-s">Doing</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Done"></div>
          <h4 className="heading-s">Done</h4>
        </div>
        <Ticket data={testTicket} />
      </div> */
}
