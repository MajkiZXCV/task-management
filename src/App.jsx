// App.js
import React, { useState, useEffect } from 'react';
import DatePicker from './components/DatePicker';
import Filters from './components/Filters';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null); // Nowy stan dla edytowanego zadania

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null); // Zakończ edycję po zapisaniu
  };

  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const isSameDate = taskDate.toDateString() === selectedDate.toDateString();

    if (filter === 'completed') return task.completed && isSameDate;
    if (filter === 'incomplete') return !task.completed && isSameDate;
    if (filter === '★★★') return task.priority === 3 && isSameDate;
    if (filter === '★★') return task.priority === 2 && isSameDate;
    if (filter === '★') return task.priority === 1 && isSameDate;
    return isSameDate;
  });

  return (
    <div className="container">
      <h1>Task Management</h1>
      <DatePicker setSelectedDate={setSelectedDate} />
      <TaskForm
        addTask={addTask}
        selectedDate={selectedDate}
        editingTask={editingTask} // Przekazanie aktualnie edytowanego zadania
        editTask={editTask} // Funkcja do edycji zadań
      />
      <Filters setFilter={setFilter} filter={filter} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask} // Funkcja do ustawiania edytowanego zadania
      />
    </div>
  );
};

export default App;