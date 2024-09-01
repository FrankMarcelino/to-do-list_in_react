import ItemsContainer from "./ItemsContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ItemsContainer taskList={["item 1", "item 2", "item 3"]} />
    </div>
  );
}

export default App;
