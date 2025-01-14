import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, selectedDate, editingTask, editTask }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState(3);

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setCategory(editingTask.category);
      setPriority(editingTask.priority);
    } else {
      setTaskName('');
      setCategory('');
      setPriority(3);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!taskName || !category) {
      alert('Please fill in all fields!');
      return;
    }

    if (editingTask) {
      editTask({
        ...editingTask,
        name: taskName,
        category: category,
        priority: priority
      });
    } else {
      const newTask = {
        id: Date.now(),
        name: taskName,
        category: category,
        completed: false,
        priority: priority,
        date: selectedDate.toDateString(),
        time: new Date().toLocaleTimeString()
      };
      addTask(newTask);
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      >
        <option value={1}>★</option>
        <option value={2}>★★</option>
        <option value={3}>★★★</option>
      </select>
      <button onClick={handleSubmit}>{editingTask ? 'Save Task' : 'Add Task'}</button>
    </div>
  );
};

export default TaskForm;