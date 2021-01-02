import { h, hydrate, FunctionComponent } from 'preact';

import DefaultView from './views/default';

const views: { [key: string]: FunctionComponent<object> } = {
  DefaultView,
};

const viewRoot = document.getElementById('__viewRoot')!;

const View = views[viewRoot.getAttribute('data-view')!];
const viewProps = JSON.parse(document.getElementById('__viewProps')!.innerHTML);

hydrate(<View {...viewProps} />, viewRoot);
