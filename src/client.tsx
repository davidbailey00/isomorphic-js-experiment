import { h, hydrate } from 'preact';

import DefaultView from './views/default';

const root = document.getElementById('__root')!;
const initialProps = JSON.parse(
  document.getElementById('__initialProps')!.innerHTML,
);

hydrate(<DefaultView {...initialProps} />, root);
