import express from 'express';
import render from './render';

import DefaultView from '../views/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist/client'));

app.get('/', async (req, res) => {
  const viewProps = { name: 'world', path: req.path };
  const documentProps = { title: 'Hello, world!' };

  res.send(render({ View: DefaultView, viewProps, documentProps }));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
