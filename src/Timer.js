// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({ workDuration, breakDuration, onTimerComplete }) => {
  const [seconds, setSeconds] = useState(workDuration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (seconds === 0) {
      setIsActive(false);
      onTimerComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, onTimerComplete]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>
        <p>Time Remaining: {formatTime()}</p>
        <button
          onClick={toggleTimer}
          style={{
            padding: 10,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "black",
          }}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
