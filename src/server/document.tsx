import { h } from 'preact';
import serialize from 'serialize-javascript';

export interface DocumentProps {
  lang?: string;
  title: string;
}

interface FullDocumentProps<ViewProps> extends DocumentProps {
  viewName: string;
  viewHTML: string;
  viewProps: ViewProps;
  gooberCSS: string;
}

function Document<ViewProps>({
  lang = 'en',
  title,
  viewName,
  viewHTML,
  viewProps,
  gooberCSS,
}: FullDocumentProps<ViewProps>) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <style id="_goober">{gooberCSS}</style>
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
        <script type="module" src="/dist/bundle.js" />
      </body>
    </html>
  );
}

export default Document;
