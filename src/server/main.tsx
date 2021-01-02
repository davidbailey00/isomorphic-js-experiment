import express from 'express';
import render from './render';
import { DocumentProps } from './document';

import DefaultView, { DefaultViewProps } from '../views/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/', async (_req, res) => {
  const viewProps: DefaultViewProps = { name: 'world' };
  const documentProps: DocumentProps = { title: 'Hello, world!' };

  res.send(render({ View: DefaultView, viewProps, documentProps }));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
