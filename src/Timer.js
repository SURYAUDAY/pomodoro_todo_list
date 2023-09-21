// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({
  workDuration,
  onTimerComplete,
  timeRemaining,
  isCompleted,
}) => {
  const [timer, setTimer] = useState(workDuration);

  useEffect(() => {
    if (timer > 0 && !isCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0 && !isCompleted) {
      onTimerComplete();
    }
  }, [timer, isCompleted, onTimerComplete]);

  const formattedTime = () => {
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Time Remaining: {formattedTime()}</h2>
    </div>
  );
};

export default Timer;
