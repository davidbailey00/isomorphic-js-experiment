import { h, hydrate } from 'preact';

import DefaultView, { DefaultViewProps } from './views/default';

const root = document.getElementById('__view')!;
const viewProps: DefaultViewProps = JSON.parse(
  document.getElementById('__viewProps')!.innerHTML,
);

hydrate(<DefaultView {...viewProps} />, root);
