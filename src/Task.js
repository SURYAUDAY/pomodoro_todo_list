/* // Task.js
import React, { useState } from "react";
import Timer from "./Timer";

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer, setShowTimer] = useState(false);

  const handleTimerComplete = () => {
    setShowTimer(false);
    onTaskComplete(task.id);
  };

  const totalSeconds = task.time; // Assuming task.time is in seconds

  return (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
          <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
            Time: {Math.floor(totalSeconds / 60)} min {totalSeconds % 60} sec
          </span>
        </div>
        <div>
          <button
            onClick={() => onTaskComplete(task.id)}
            disabled={task.completed}
          >
            Complete
          </button>
          <button onClick={() => onTaskDelete(task.id)}>Delete</button>
          <button onClick={() => setShowTimer(true)}>
            Start Pomodoro Timer
          </button>
        </div>
      </div>
      {showTimer && (
        <Timer
          workDuration={totalSeconds}
          onTimerComplete={handleTimerComplete}
        />
      )}
    </div>
  );
};

export default Task;
 */

// Task.js
import React, { useState } from "react";
import Timer from "./Timer";
import "./Task.css"; // Import the CSS file

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer, setShowTimer] = useState(false);

  const handleTimerComplete = () => {
    setShowTimer(false);
    onTaskComplete(task.id);
  };

  const totalSeconds = task.time; // Assuming task.time is in seconds

  return (
    <div className="task-container">
      <div className="task-info">
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.name}
        </span>
        <span className="task-time">
          Time: {Math.floor(totalSeconds / 60)} min {totalSeconds % 60} sec
        </span>
      </div>
      <div className="task-buttons">
        {/*  <button
          onClick={() => onTaskComplete(task.id)}
          disabled={task.completed}
        >
          Complete
        </button> */}
        <button
          onClick={() => onTaskDelete(task.id)}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          Delete
        </button>
        <button
          onClick={() => setShowTimer(true)}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          Start Pomodoro Timer
        </button>
      </div>
      {showTimer && (
        <Timer
          workDuration={totalSeconds}
          onTimerComplete={handleTimerComplete}
        />
      )}
    </div>
  );
};

export default Task;
