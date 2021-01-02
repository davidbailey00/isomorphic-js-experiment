import React from 'react';

import DefaultLayout from '../layouts/default';
import Timer from '../components/timer';

function DefaultPage() {
  return (
    <DefaultLayout title="Hello, world!">
      <h1>Hello, world!</h1>
      <p>Rendered with Express</p>

      <Timer />
    </DefaultLayout>
  );
}

export default DefaultPage;
