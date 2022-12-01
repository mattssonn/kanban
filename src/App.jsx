import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Createticket from "./components/Createticket/Createticket";
import Dropdown from "./components/Dropdown/Dropdown";
import Links from "./components/Links/Links";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  //state for dropdown
  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar
        setShowAddTicket={setShowAddTicket}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <main>
        <Sidebar />
        <Board />
      </main>
      <Dropdown dropdown={showAddTicket} toggleDropdown={setShowAddTicket}>
        <Createticket />
      </Dropdown>

      <Dropdown dropdown={isOpen} toggleDropdown={setIsOpen}>
        <Links />
      </Dropdown>
    </div>
  );
}

export default App;
