import { h, hydrate } from 'preact';

import DefaultPage from './pages/default';

const root = document.getElementById('__root');
if (root) {
  hydrate(<DefaultPage />, root);
} else {
  throw new Error('root element was not found');
}
