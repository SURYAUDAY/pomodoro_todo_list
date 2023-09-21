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
/* import React, { useState } from "react";
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
        {  <button
          onClick={() => onTaskComplete(task.id)}
          disabled={task.completed}
        >
          Complete
        </button> }
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
 */

// Task.js
/* import React, { useState } from "react";
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
        <button
          onClick={() => onTaskComplete(task.id)}
          disabled={task.completed}
        >
          Complete
        </button>
        <button onClick={() => onTaskDelete(task.id)}>Delete</button>
        <button
          onClick={() => setShowTimer(true)}
          disabled={task.completed || showTimer}
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

export default Task; */

// Task.js
import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./Task.css"; // Import the CSS file

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer, setShowTimer] = useState(true);
  const [timerActive, setTimerActive] = useState(true);
  const [workDuration, setWorkDuration] = useState(task.time);
  const [timeRemaining, setTimeRemaining] = useState(task.time);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  useEffect(() => {
    if (timerActive && timeRemaining > 0) {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [timerActive, timeRemaining]);

  const handleTimerComplete = () => {
    setIsTimerCompleted(true);
    setTimerActive(false);
    onTaskComplete(task.id);
  };

  const handleToggleTimer = () => {
    setTimerActive((prevTimerActive) => !prevTimerActive);
  };

  return (
    <div className="task-container">
      <div className="task-info">
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.name}
        </span>
        {/* <span className="task-time">
          Time: {Math.floor(timeRemaining / 60)} min {timeRemaining % 60} sec
        </span> */}
      </div>
      <div className="task-buttons">
        {
          <button
            onClick={() => onTaskComplete(task.id)}
            disabled={task.completed}
            style={{ display: "none" }}
          >
            Complete
          </button>
        }
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
        {
          <button
            onClick={handleToggleTimer}
            disabled={task.completed}
            style={{ display: "none" }}
          >
            {timerActive ? "Pause" : "Resume"}
          </button>
        }
      </div>
      {showTimer && (
        <Timer
          workDuration={workDuration}
          onTimerComplete={handleTimerComplete}
          timeRemaining={timeRemaining}
          isCompleted={isTimerCompleted}
        />
      )}
    </div>
  );
};

export default Task;
