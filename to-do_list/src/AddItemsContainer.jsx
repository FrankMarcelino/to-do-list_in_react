const AddItemsContainer = ({ addToList }) => {
  return (
    <div className="add-items-container">
      <input
        type="text"
        placeholder="digite sua tarefa"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            addToList(event.target.value);
            event.target.value = "";
          }
        }}
      />
      <button
        onClick={() => {
          addToList(document.querySelector("input").value);
          document.querySelector("input").value = "";
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
