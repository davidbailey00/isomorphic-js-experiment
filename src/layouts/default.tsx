import React from 'react';

interface DefaultLayoutProps {
  title: String;
  children: React.ReactNode;
}

function DefaultLayout({ title, children }: DefaultLayoutProps) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <script src="/dist/bundle.js" />
      </body>
    </>
  );
}

export default DefaultLayout;
