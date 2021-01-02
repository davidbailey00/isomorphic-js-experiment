import { h } from 'preact';
import serialize from 'serialize-javascript';

type DocumentProps = {
  lang?: string;
  title: string;
  rootHTML: string;
  initialProps: object;
};

function Document({
  lang = 'en',
  title,
  rootHTML,
  initialProps,
}: DocumentProps) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <div id="__root" dangerouslySetInnerHTML={{ __html: rootHTML }} />
        <script
          id="__initialProps"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: serialize(initialProps, { isJSON: true }),
          }}
        />
        <script src="/dist/bundle.js" />
      </body>
    </html>
  );
}

export default Document;
