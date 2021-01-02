import { h, hydrate, FunctionComponent } from 'preact';

import DefaultView from './views/default';

const views: { [key: string]: FunctionComponent<object> } = {
  DefaultView,
};

const root = document.getElementById('__view')!;

const View = views[root.getAttribute('data-view')!];
const viewProps = JSON.parse(document.getElementById('__viewProps')!.innerHTML);

hydrate(<View {...viewProps} />, root);
