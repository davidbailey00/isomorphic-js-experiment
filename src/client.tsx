import { h, hydrate } from 'preact';

import DefaultPage from './pages/default';

const root = document.getElementById('__root')!;
hydrate(<DefaultPage />, root);
