import { h } from 'preact';
import serialize from 'serialize-javascript';

function Document({ lang = 'en', title, viewName, viewHTML, viewProps }) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="/dist/styles.css" />
        <script type="module" src="/dist/client.js" />
      </head>
      <body>
        <div
          id="__viewRoot"
          data-view={viewName}
          dangerouslySetInnerHTML={{ __html: viewHTML }}
        />
        <script
          id="__viewProps"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: serialize(viewProps, { isJSON: true }),
          }}
        />
      </body>
    </html>
  );
}

export default Document;
