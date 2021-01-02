import React from 'react';

import DefaultLayout from '../layouts/default';

function DefaultPage() {
  return (
    <DefaultLayout title="Hello, world!">
      <h1>Hello, world!</h1>
      <p>Rendered with Express</p>
    </DefaultLayout>
  );
}

export default DefaultPage;
