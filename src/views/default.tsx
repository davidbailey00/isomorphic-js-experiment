import { h } from 'preact';
import Timer from '../components/timer';

type DefaultViewProps = {
  name: string;
};

function DefautView({ name }: DefaultViewProps) {
  return (
    <main>
      <h1>Hello, {name}!</h1>
      <p>Rendered with Express</p>

      <Timer />
    </main>
  );
}

export async function getInitialProps(): Promise<DefaultViewProps> {
  console.log('this runs on the server!');
  return { name: 'world' };
}

export type ViewProps = DefaultViewProps;
export default DefautView;
