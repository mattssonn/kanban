import "./App.scss";
import Board from "./components/Board/Board";
import Dropdown from "./components/Dropdown/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Ticket from "./components/Ticket/Ticket";
import { useState } from "react";

function App() {
  // state for dropdown
  const [isOpen, setisOpen] = useState();

  return (
    <div className="App">
      <Navbar toggleDropdown={setisOpen} />
      <main>
        <Sidebar />
        <Board />
      </main>
      <Dropdown dropdown={isOpen} />
    </div>
  );
}

export default App;
