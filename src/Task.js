import React, { useState } from "react";
import Timer from "./Timer";
import "./Task.css";

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer] = useState(true);
  const [timerActive, setTimerActive] = useState(false);
  const [workDuration, setWorkDuration] = useState(task.time);
  const [timeRemaining] = useState(task.time);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  const handleDeleteTask = () => {
    onTaskDelete(task.id);
  };

  const handleToggleTimer = () => {
    if (timeRemaining > 0) {
      setTimerActive((prevTimerActive) => !prevTimerActive);
      if (!timerActive) {
        setWorkDuration(timeRemaining);
      }
    }
  };

  const handlePauseTimer = () => {
    setTimerActive(false);
  };

  const handleTimerComplete = () => {
    setIsTimerCompleted(true);
    setTimerActive(false);
    setWorkDuration(task.time);
    onTaskComplete(task.id);
  };

  return (
    <div className="task-container">
      <div className="task-info">
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: "Red",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Task name: {task.name}
        </span>
      </div>
      <div className="task-buttons">
        {timeRemaining > 0 && (
          <button
            onClick={timerActive ? handlePauseTimer : handleToggleTimer}
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "black",
              marginBottom: "10px",
            }}
          >
            {timerActive ? "Pause Pomodoro Timer" : "Start Pomodoro Timer"}
          </button>
        )}
        <button
          onClick={handleDeleteTask}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
            marginBottom: "10px",
          }}
        >
          Delete
        </button>
      </div>
      {showTimer && (
        <Timer
          workDuration={workDuration}
          onTimerComplete={handleTimerComplete}
          timeRemaining={timeRemaining}
          isCompleted={isTimerCompleted}
          timerActive={timerActive}
        />
      )}
    </div>
  );
};

export default Task;
