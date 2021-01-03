import { h } from 'preact';
import Timer from '../components/timer';

export interface DefaultViewProps {
  name: string;
  path: string;
}

function DefaultView({ name, path }: DefaultViewProps) {
  return (
    <main>
      <h1>Hello, {name}!</h1>
      <p>Rendered with Express. Path: {path}</p>

      <Timer />
    </main>
  );
}

export default DefaultView;
