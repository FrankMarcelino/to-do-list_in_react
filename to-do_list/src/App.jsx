import { useState } from "react";
import ItemsContainer from "./ItemsContainer";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["item 1", "item 2", "item 3"]);
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <h2>Adição de tarefas</h2>
      <ItemsContainer taskList={taskList} />
    </div>
  );
}

export default App;
