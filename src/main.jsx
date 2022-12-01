import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import BoardContext from "./context/BoardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BoardContext>
    <App />
  </BoardContext>
);
