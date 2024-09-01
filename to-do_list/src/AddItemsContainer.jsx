const AddItemsContainer = ({ addToList }) => {
  let newTask = "";
  return (
    <div className="add-items-container">
      <input
        type="text"
        placeholder="digite sua tarefa"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (newTask != "") {
              addToList(newTask);
              document.querySelector("input").value = "";
            }
          }
        }}
        onChange={(event) => {
          newTask = event.target.value;
        }}
      />
      <button
        onClick={() => {
          if (newTask != "") {
            addToList(newTask);
            document.querySelector("input").value = "";
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
