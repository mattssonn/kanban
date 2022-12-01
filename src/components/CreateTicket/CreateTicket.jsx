import React, { useState, useContext } from "react";
import "./Createticket.scss";
import { BoardContext } from "../../context/BoardContext";
import { v4 as uuidv4 } from "uuid";

export default function Createticket() {
  const { createTicket } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTask, setSubtask] = useState("");

  return (
    <div className="create-ticket">
      <h3 className="heading-l">Add New Title {title}</h3>
      <div>
        <label htmlFor="" className="body-m">
          Title
        </label>
        <input
          placeholder="e.g take a coffebreak"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="" className="body-m">
          Description
        </label>
        <input
          placeholder="e.g eat pasta carbonara and drink wine "
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="" className="body-m">
          Subtask
        </label>
        <input
          placeholder="e.g do a backflip"
          type="text"
          value={subTask}
          onChange={(e) => setSubtask(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          createTicket({
            id: uuidv4(),
            title: title,
            description: description,
            tasks: [subTask],
          });
          setTitle("");
          setDescription("");
          setSubtask("");
        }}
      >
        Create Task
      </button>
    </div>
  );
}
