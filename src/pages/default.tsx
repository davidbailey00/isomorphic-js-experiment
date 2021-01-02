import { h } from 'preact';

import Timer from '../components/timer';

function DefaultPage() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <p>Rendered with Express</p>

      <Timer />
    </main>
  );
}

export default DefaultPage;
