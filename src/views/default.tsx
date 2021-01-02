import { h } from 'preact';
import Timer from '../components/timer';

export interface DefaultViewProps {
  name: string;
}

function DefautView({ name }: DefaultViewProps) {
  return (
    <main>
      <h1>Hello, {name}!</h1>
      <p>Rendered with Express</p>

      <Timer />
    </main>
  );
}

export default DefautView;
