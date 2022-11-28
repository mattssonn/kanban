import "./App.scss";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="navbar">navbar</div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Board />
      </div>
    </div>
  );
}

export default App;
