import React from 'react';

interface DefaultLayoutProps {
  title: String;
  children: React.ReactNode;
}

function DefaultLayout({ title, children }: DefaultLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default DefaultLayout;
