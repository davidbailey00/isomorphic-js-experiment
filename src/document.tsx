import { h } from 'preact';

interface DocumentProps {
  lang?: string;
  title: string;
  rootHTML: string;
}

function Document({ lang = 'en', title, rootHTML }: DocumentProps) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <div id="__root" dangerouslySetInnerHTML={{ __html: rootHTML }} />
        <script src="/dist/bundle.js" />
      </body>
    </html>
  );
}

export default Document;
