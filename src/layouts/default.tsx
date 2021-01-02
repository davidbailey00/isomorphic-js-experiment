import { h, ComponentChildren } from 'preact';

interface DefaultLayoutProps {
  children: ComponentChildren;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div>{children}</div>;
}

export default DefaultLayout;
