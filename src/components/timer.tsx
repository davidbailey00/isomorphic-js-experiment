import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Timer</h2>
      <p>Count: {time} seconds</p>
    </>
  );
}

export default Timer;
