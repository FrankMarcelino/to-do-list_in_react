import TaaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="items-container">
      {taskList.map((task) => (
        <TaaskItem task={task} removeFromList={removeFromList} />
      ))}
    </div>
  );
};

export default ItemsContainer;
