import React from 'react';
import { hydrate } from 'react-dom';

import DefaultPage from './pages/default';

hydrate(<DefaultPage />, document.documentElement);
