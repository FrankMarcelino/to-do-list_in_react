import { useState } from "react";
import ItemsContainer from "./ItemsContainer";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["item 1", "item 2", "item 3"]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <h2>Adição de tarefas</h2>
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
