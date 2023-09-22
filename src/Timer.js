// Timer.js
import React, { useState, useEffect } from "react";
import { Header } from "tabler-react";

const Timer = ({
  workDuration,
  onTimerComplete,
  timeRemaining,
  isCompleted,
  timerActive,
}) => {
  const [timer, setTimer] = useState(workDuration);

  useEffect(() => {
    if (timer > 0 && timerActive) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0 && !isCompleted) {
      onTimerComplete();
    }
  }, [timer, timerActive, isCompleted, onTimerComplete]);

  const formattedTime = () => {
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h3
        className={timerActive ? "format" : ""}
        style={{ fontFamily: "digital-clock-font" }}
      >
        Time Remaining: {formattedTime()}
      </h3>
    </div>
  );
};

export default Timer;
