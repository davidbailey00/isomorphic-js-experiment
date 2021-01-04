import { h } from 'preact';
import Timer from '../components/timer';

function DefaultView({ name, path }) {
  return (
    <main>
      <h1>Hello, {name}!</h1>
      <p>Rendered with Express. Path: {path}</p>

      <Timer />
    </main>
  );
}

export default DefaultView;
