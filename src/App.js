import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddTaskForm onTaskAdd={handleTaskAdd} />
        <TaskList
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
