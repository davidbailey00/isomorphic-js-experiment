import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import DefaultPage from './pages/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html><html>${renderToString(<DefaultPage />)}</html>`);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
