import "./App.scss";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";
import Ticket from "./components/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      <div className="navbar">navbar</div>

      <main>
        <Sidebar />
        <Board />
      </main>
      <Ticket />
    </div>
  );
}

export default App;
