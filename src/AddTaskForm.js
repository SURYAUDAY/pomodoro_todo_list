// AddTaskForm.js
import React, { useState } from "react";
import "tabler-react/dist/Tabler.css";
import { Form, Button } from "tabler-react";

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
      <h2 style={{ marginBottom: "10px", fontFamily: "poppins sans-serif" }}>
        Add ToDo-Task
      </h2>
      <Form.Input
        name="username"
        label="Task name"
        placeholder="Enter Task name"
        value={taskName}
        onChange={handleTaskNameChange}
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",

          marginBottom: 10,
        }}
      />
      <br />
      <Form.Input
        name="minutes"
        label="Enter minutes"
        placeholder="Enter minutes"
        type="number"
        value={taskMinutes}
        onChange={handleTaskMinutesChange}
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          marginTop: "-15px",
          marginBottom: 10,
        }}
      />
      <br />
      <Form.Input
        name="seconds"
        label="Enter seconds"
        placeholder="Enter seconds"
        type="number"
        value={taskSeconds}
        onChange={handleTaskSecondsChange}
        style={{
          backgroundColor: "bisque",
          padding: 10,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",

          marginBottom: 10,
        }}
      />
      <br />
      <Button
        color="success"
        onClick={handleAddTask}
        style={{
          padding: 10,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          marginBottom: 10,
        }}
      >
        Start Task
      </Button>
    </div>
  );
};

export default AddTaskForm;
