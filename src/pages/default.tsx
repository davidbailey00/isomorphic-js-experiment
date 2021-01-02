import { h } from 'preact';

import DefaultLayout from '../layouts/default';
import Timer from '../components/timer';

function DefaultPage() {
  return (
    <DefaultLayout>
      <h1>Hello, world!</h1>
      <p>Rendered with Express</p>

      <Timer />
    </DefaultLayout>
  );
}

export default DefaultPage;
