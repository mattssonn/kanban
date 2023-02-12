import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { BoardContext } from "../../context/BoardContext";
import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject, changeCurrentBoard } = useContext(BoardContext);

  function dragEnd(result) {
    if (!result.destination) return;
    const { destination, source } = result;

    if (source.draggableId !== destination.draggableId) {
      const sourceColumn = currentProject.board[source.droppableId];
      const destinationColumn = currentProject.board[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);

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
            <div key={id} id={index}>
              <Droppable key={id} droppableId={id}>
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
                      {provided.placeholder}
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
