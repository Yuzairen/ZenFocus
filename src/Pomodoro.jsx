import React, { useState, useEffect, useRef } from 'react';

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            clearInterval(timerRef.current);
            alert("Time's up! Take a break.");
            return 5 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <div className="pomo-timer">
      <h2>Pomodoro Timer</h2>
      <div className="pomo-clock">{formatTime(timeLeft)}</div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleStartPause} style={{ marginRight: '1rem' }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Pomodoro;
