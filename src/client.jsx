import { h, hydrate } from 'preact';

const views = {
  DefaultView: () => import('./views/default'),
};

const viewRoot = document.getElementById('__viewRoot');
const importView = views[viewRoot.getAttribute('data-view')];

importView().then(({ default: View }) => {
  const viewProps = JSON.parse(
    document.getElementById('__viewProps').innerHTML,
  );

  hydrate(<View {...viewProps} />, viewRoot);
});
