import TaaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <TaaskItem task={task} removeFromList={removeFromList} />
      ))}
    </div>
  );
};

export default ItemsContainer;
