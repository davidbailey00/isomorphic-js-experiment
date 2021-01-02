import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Document from './document';
import DefaultPage from './pages/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {
  const rootHTML = ReactDOMServer.renderToString(<DefaultPage />);
  res.send(
    '<!DOCTYPE html>' +
      ReactDOMServer.renderToStaticMarkup(
        <Document title="Hello, world!" rootHTML={rootHTML} />,
      ),
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
