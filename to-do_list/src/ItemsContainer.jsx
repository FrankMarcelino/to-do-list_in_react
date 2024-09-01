import TaaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="items-container">
      {taskList.map((task, index) => (
        <TaaskItem
          task={task}
          removeFromList={removeFromList}
          key={`task-item-${index}`}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
