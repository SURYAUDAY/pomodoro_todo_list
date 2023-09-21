// Task.js
import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./Task.css"; // Import the CSS file

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer, setShowTimer] = useState(true);
  const [timerActive, setTimerActive] = useState(true);
  const [workDuration] = useState(task.time);
  const [timeRemaining, setTimeRemaining] = useState(task.time);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          return prevTime;
        });
      }, 1000);
    }

    return () => clearInterval(timerInterval);
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
        <button
          onClick={() => onTaskComplete(task.id)}
          disabled={task.completed}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          Complete
        </button>
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
          onClick={handleToggleTimer}
          disabled={task.completed}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          {timerActive ? "Pause" : "Resume"}
        </button>
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
