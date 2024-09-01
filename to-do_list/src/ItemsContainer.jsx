const ItemsContainer = ({ taskList }) => {
  return (
    <div>
      {taskList.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default ItemsContainer;
