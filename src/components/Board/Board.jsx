import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { BoardContext } from "../../context/BoardContext";
import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject } = useContext(BoardContext);
  console.log(Object.entries(currentProject.board));
  return (
    <div className="board">
      <DragDropContext>
        {Object.entries(currentProject.board).map(([id, column], index) => {
          return (
            <div id={index}>
              <Droppable key={index} droppableId={id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      active={snapshot.isDraggingOver.toString()}
                      ref={provided.innerRef}
                      className="board-column"
                    >
                      <div className="board-title">
                        <div
                          className={`board-title-icon Todo ${column.name}`}
                        ></div>
                        <h4 className="heading-s">{column.name}</h4>
                      </div>
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            index={index}
                            key={item.id}
                            draggableId={item.id}
                          >
                            {(provided, snapshot) => {
                              return (
                                <Ticket
                                  provided={provided}
                                  snapshot={snapshot}
                                  data={item}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

{
  /* <div className="board">
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
    </div> */
}
