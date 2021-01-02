import express from 'express';

import { h } from 'preact';
import render from 'preact-render-to-string';

import Document from './document';
import DefaultPage from './pages/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {
  const rootHTML = render(<DefaultPage />);
  res.send(
    '<!DOCTYPE html>' +
      render(<Document title="Hello, world!" rootHTML={rootHTML} />),
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
