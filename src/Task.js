import React, { useState } from "react";
import Timer from "./Timer";
import "./Task.css";
import "tabler-react/dist/Tabler.css";
import { Button } from "tabler-react";

const Task = ({ task, onTaskComplete, onTaskDelete }) => {
  const [showTimer] = useState(true);
  const [timerActive, setTimerActive] = useState(false);
  const [workDuration, setWorkDuration] = useState(task.time);
  const [timeRemaining] = useState(task.time);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [isDeleteButtonActive, setIsDeleteButtonActive] = useState(false);

  const handleDeleteTask = () => {
    onTaskDelete(task.id);
  };

  const handleToggleTimer = () => {
    if (timeRemaining > 0 && !isTimerCompleted) {
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
    setIsDeleteButtonActive(true);
  };

  return (
    <>
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

          <p
            style={{
              color: "red",
              display: "inline",
              fontWeight: "bold",
              marginLeft: "-240px",
              position: "absolute",
              marginTop: "-123px",
              textDecoration: task.completed ? "line-through" : "none",
              textDecorationThickness: "3px",
            }}
          >
            {task.name}
          </p>
        </div>
        <div className="task-buttons">
          {timeRemaining > 0 && !isTimerCompleted && (
            <Button
              color="success"
              onClick={timerActive ? handlePauseTimer : handleToggleTimer}
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                backgroundColor: "black",
                marginBottom: "20px",
              }}
            >
              {timerActive ? "Pause Pomodoro Timer" : "Start Pomodoro Timer"}
            </Button>
          )}
          <Button
            color="danger"
            onClick={handleDeleteTask}
            disabled={!isDeleteButtonActive}
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "black",
              marginBottom: "20px",
            }}
          >
            Delete
          </Button>
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
    </>
  );
};

export default Task;
