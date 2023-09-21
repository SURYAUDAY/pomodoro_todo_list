// PomodoroTimer.js
import React, { useState, useEffect } from "react";

const PomodoroTimer = ({ taskName }) => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      // Timer completed, implement your logic here
      console.log(`Pomodoro timer completed for task: ${taskName}`);
      setIsRunning(false);
      setSeconds(1500); // Reset the timer to 25 minutes for the next Pomodoro
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, taskName]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleStopTimer = () => {
    setIsRunning(false);
    setSeconds(1500); // Reset the timer to 25 minutes when stopped
  };

  return (
    <div className="pomodoro-timer">
      <h2>Pomodoro Timer</h2>
      <div>
        Time Remaining: {Math.floor(seconds / 60)}:
        {(seconds % 60).toString().padStart(2, "0")} minutes
      </div>
      {isRunning ? (
        <button onClick={handleStopTimer}>Stop Timer</button>
      ) : (
        <button onClick={handleStartTimer}>Start Timer</button>
      )}
    </div>
  );
};

export default PomodoroTimer;
