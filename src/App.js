// App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (taskName, taskTime) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
      time: taskTime,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AddTaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
