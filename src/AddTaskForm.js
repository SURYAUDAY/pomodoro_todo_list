// AddTaskForm.js
import React, { useState } from "react";
import "tabler-react/dist/Tabler.css";
import { Form, Button } from "tabler-react";
import "tabler-react/dist/Tabler.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Task.css";

const AddTaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState("");
  //const [setUpdated] = useState(taskName);
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
      //setUpdated(taskName);
    } else {
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
      </Stack>;
    }
  };

  return (
    <>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          border: "0.2px solid black",
          padding: "15px",
          width: "350px",
          backgroundImage: 'url("../asset/svg.png")',
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
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
          Add Task
        </Button>
        <img
          src="../asset/rick2.png"
          alt="watching at timer"
          style={{
            marginLeft: "320px",
            marginTop: "-389px",
            position: "fixed",
            width: "400px",
          }}
        />
        {
          <p
            style={{
              marginLeft: "560px",
              marginTop: "-327px",
              position: "fixed",
              display: "inline",
            }}
          >
            Do your <br />
            task right now!!!
          </p>
        }
      </div>
    </>
  );
};

export default AddTaskForm;
