import express from 'express';

import { h } from 'preact';
import render from 'preact-render-to-string';

import Document from './document';
import DefaultView, { getInitialProps } from './views/default';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/', async function (_req, res) {
  const initialProps = await getInitialProps();
  const rootHTML = render(<DefaultView {...initialProps} />);

  res.send(
    '<!DOCTYPE html>' +
      render(
        <Document
          title="Hello, world!"
          rootHTML={rootHTML}
          initialProps={initialProps}
        />,
      ),
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
