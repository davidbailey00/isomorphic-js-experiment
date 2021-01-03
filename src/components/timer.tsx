import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import bem from '../util/bem';
const timer = bem('Timer');

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={timer()}>
      <h2 className={timer.header()}>Timer</h2>
      <p className={timer.paragraph('blue', 'bold')}>
        Count: <span className={timer.paragraph.clock()}>{time}</span> seconds
      </p>
    </div>
  );
}

export default Timer;
