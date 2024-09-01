const TaaskItem = ({ task, removeFromList }) => {
  return (
    <div className="task-item">
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Remover</button>
    </div>
  );
};

export default TaaskItem;
