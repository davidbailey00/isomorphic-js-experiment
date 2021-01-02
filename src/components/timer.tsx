import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h2>Timer</h2>
      <p>Count: {time} seconds</p>
    </div>
  );
}

export default Timer;
