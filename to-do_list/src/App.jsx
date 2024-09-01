import { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import AddItemsContainer from "./AddItemsContainer";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
    "lavar o carro",
    "estudar",
    "treinar",
  ]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas Para Hoje</h1>
      <AddItemsContainer addToList={setTaskList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
