import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Createticket from "./components/Createticket/Createticket";
import Dropdown from "./components/Dropdown/Dropdown";
import Links from "./components/Links/Links";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id="dark">
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
    </ThemeContext.Provider>
  );
}

export default App;
