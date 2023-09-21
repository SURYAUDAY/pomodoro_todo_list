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
      <h2>ToDo-List</h2>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Enter task"
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          marginLeft: 10,
          marginBottom: 10,
        }}
      />
      <br />
      <input
        type="number"
        value={taskMinutes}
        onChange={handleTaskMinutesChange}
        placeholder="minutes"
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          marginLeft: 10,
          marginBottom: 10,
        }}
      />
      <br />
      <input
        type="number"
        value={taskSeconds}
        onChange={handleTaskSecondsChange}
        placeholder="seconds"
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          marginLeft: 10,
          marginBottom: 10,
        }}
      />
      <br />
      <button
        onClick={handleAddTask}
        style={{
          marginLeft: 10,
          padding: 10,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          marginBottom: 10,
        }}
      >
        Start Task
      </button>
    </div>
  );
};

export default AddTaskForm;
