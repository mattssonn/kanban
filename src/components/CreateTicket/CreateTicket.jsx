import React, { useState } from "react";
import "./Modal.scss";
import crossIcon from "../../assets/icon-cross.svg";
import { useProject } from "../../context/ProjectContext";
import { v4 as uuidv4 } from "uuid";

export default function CreateTicket({ setIsOpen }) {
  const { addTicket } = useProject();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([""]);

  function validate() {
    let isValid = true;
    if (title == "" && description == "") {
      isValid = false;
    }
    return isValid;
  }

  function createTicket() {
    if (validate()) {
      const ticket = {
        title: title,
        id: uuidv4(),
        description: description,
        tasks: tasks[0] == "" ? [] : tasks,
      };
      addTicket(ticket);
      console.log(ticket);
      setIsOpen((prev) => !prev);
    }
  }

  return (
    <div className="modal">
      <div className="modal-card">
        <div
          className="close-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img src={crossIcon} alt="" />
        </div>
        <h3 className="heading-l">Add New Task</h3>
        <div className="modal-input-group">
          <label htmlFor="title" className="body-m">
            Title
          </label>
          <input
            className="body-l"
            placeholder="e.g Take coffee break"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="modal-input-group">
          <label htmlFor="description" className="body-m">
            Description
          </label>
          <textarea
            className="body-l"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="modal-input-group">
          <label className="body-m">Subtasks</label>
          {tasks.map((task, index) => (
            <div key={index} className="modal-input-row">
              <input
                className="body-l"
                placeholder="e.g Make break"
                type="text"
                name="subtasks"
                value={task}
                onChange={(e) => {
                  tasks[index] = e.target.value;
                  setTasks([...tasks]);
                }}
              />
            </div>
          ))}
          <div className="btn-container">
            <button
              className="btn btn-small btn-white btn-wide"
              onClick={() => {
                setTasks(tasks.concat(""));
              }}
            >
              + Add New Task
            </button>
            <button onClick={createTicket}>Create Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}
