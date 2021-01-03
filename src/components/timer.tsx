import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import bem from '../util/bem';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const b = bem('Timer');
  return (
    <div className={b()}>
      <h2 className={b.header()}>Timer</h2>
      <p className={b.paragraph('blue', 'bold')}>Count: {time} seconds</p>
    </div>
  );
}

export default Timer;
