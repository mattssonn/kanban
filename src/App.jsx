import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Createticket from "./components/Createticket/Createticket";
import Dropdown from "./components/Dropdown/Dropdown";
import Links from "./components/Links/Links";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  document.documentElement.classList.toggle("light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar
          setShowAddTicket={setShowAddTicket}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <main>
          <Sidebar />
          <Board />
        </main>
        {/* <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}

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
