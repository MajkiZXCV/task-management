import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask, setEditingTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask} // Przekazanie funkcji do edytowania
        />
      ))}
    </ul>
  );
};

export default TaskList;
