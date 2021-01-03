import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { css } from 'goober';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, [time, setTime]);

  const classes = {
    header: css`
      font-family: sans-serif;
      color: red;
    `,
  };

  return (
    <>
      <h2 className={classes.header}>Timer</h2>
      <p>Count: {time} seconds</p>
    </>
  );
}

export default Timer;
