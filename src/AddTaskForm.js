// AddTaskForm.js
import React, { useState } from "react";

const AddTaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [taskMinutes, setTaskMinutes] = useState("");
  const [taskSeconds, setTaskSeconds] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskMinutesChange = (event) => {
    setTaskMinutes(event.target.value);
  };

  const handleTaskSecondsChange = (event) => {
    setTaskSeconds(event.target.value);
  };

  const handleAddTask = () => {
    if (
      taskName.trim() !== "" &&
      taskMinutes.trim() !== "" &&
      !isNaN(taskMinutes) &&
      taskSeconds.trim() !== "" &&
      !isNaN(taskSeconds)
    ) {
      const totalSeconds = parseInt(taskMinutes) * 60 + parseInt(taskSeconds);
      onTaskAdd(taskName, totalSeconds);
      setTaskName("");
      setTaskMinutes("");
      setTaskSeconds("");
    } else {
      alert(
        "Please enter a valid task name and task time (minutes and seconds)."
      );
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Task name"
      />
      <input
        type="number"
        value={taskMinutes}
        onChange={handleTaskMinutesChange}
        placeholder="Task time (minutes)"
      />
      <input
        type="number"
        value={taskSeconds}
        onChange={handleTaskSecondsChange}
        placeholder="Task time (seconds)"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
