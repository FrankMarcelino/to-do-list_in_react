import { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import AddItemsContainer from "./AddItemsContainer";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const removeFromList = (task) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(task);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  const addToList = (task) => {
    setTaskList([...taskList, task]);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas Para Hoje</h1>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
