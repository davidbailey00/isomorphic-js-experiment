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
}

function Document<ViewProps>({
  lang = 'en',
  title,
  viewName,
  viewHTML,
  viewProps,
}: FullDocumentProps<ViewProps>) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `.c.timer .header { font-family: sans-serif; color: red }`,
          }}
        />
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
        <script type="module" src="/dist/client.js" />
      </body>
    </html>
  );
}

export default Document;
