import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { BoardContext } from "../../context/BoardContext";
import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject, changeCurrentBoard } = useContext(BoardContext);

  function dragEnd(result) {
    // Safety for dragging out of column
    if (!result.destination) return;
    // Context
    const { destination, source } = result;

    if (source.draggableId !== destination.draggableId) {
      //Columns
      const sourceColumn = currentProject.board[source.droppableId];
      const destinationColumn = currentProject.board[destination.droppableId];
      // Items in each column
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      // Removing item, and adding item to destination
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);
      // Change data to new context information
      changeCurrentBoard({
        ...currentProject.board,
        [destination.droppableId]: {
          ...destinationColumn,
          items: [...destinationItems],
        },
        [source.droppableId]: {
          ...sourceColumn,
          items: [...sourceItems],
        },
      });
    } else {
      const sourceColumn = currentProject.board[source.droppableId];
      const copiedItems = [...sourceColumn.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      changeCurrentBoard({
        ...currentProject.board,
        [source.droppableId]: {
          ...sourceColumn,
          items: [...copiedItems],
        },
      });
    }
  }

  return (
    <div className="board">
      <DragDropContext onDragEnd={(e) => dragEnd(e)}>
        {Object.entries(currentProject.board).map(([id, column], index) => {
          return (
            <div key={index} id={index}>
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
