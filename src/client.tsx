import { h, hydrate } from 'preact';

import View, { ViewProps } from './views/default';

const root = document.getElementById('__root')!;
const initialProps: ViewProps = JSON.parse(
  document.getElementById('__initialProps')!.innerHTML,
);

hydrate(<View {...initialProps} />, root);
