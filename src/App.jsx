import "./App.scss";
import Board from "./components/Board/Board";
import Dropdown from "./components/Dropdown/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Ticket from "./components/Ticket/Ticket";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import { useState } from "react";

function App() {
  // state for dropdown
  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setisOpen] = useState();

  return (
    <div className="App">
      {/* <Navbar setShowAddTicket={setShowAddTicket} />
      <main>
        <Sidebar />
        <Board />
      </main>
      <Dropdown dropdown={showAddTicket} toggleDropdown={setShowAddTicket} /> */}

      <Navbar toggleDropdown={setShowAddTicket} />
      <main>
        <Sidebar />
        <Board />
      </main>
      <Dropdown dropdown={showAddTicket} toggleDropdown={setShowAddTicket}>
        <CreateTicket />
      </Dropdown>

      <Dropdown dropdown={isOpen} toggleDropdown={setIsOpen}>
        <Links />
      </Dropdown>
    </div>
  );
}

export default App;
