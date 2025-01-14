const TaskItem = ({ task, toggleComplete, deleteTask, setEditingTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.time} {task.name} ({task.category})</span>
      <div className="actions">
        <span className="priority">
          {'★'.repeat(task.priority)}
        </span>
        <button onClick={() => toggleComplete(task.id)} title="Complete">
          {task.completed ? '✅' : '☑️'}
        </button>
        <button onClick={() => deleteTask(task.id)} title="Delete">
          🗑️
        </button>
        <button onClick={() => setEditingTask(task)} title="Edit">✏️</button> {/* Nowy przycisk */}
      </div>
    </li>
  );
};

export default TaskItem;