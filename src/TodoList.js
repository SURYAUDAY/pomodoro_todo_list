// TodoList.js
import React, { useState } from "react";
import Task from "./Task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: Math.random().toString(36).substr(2, 9),
        name: newTask,
        time: { minutes: 25, seconds: 0 }, // Default timer values
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task name"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
