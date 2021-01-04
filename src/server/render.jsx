import { h } from 'preact';
import { render as preactRender } from 'preact-render-to-string';
import Document from './document';

function render({ View, viewProps, documentProps }) {
  const viewHTML = preactRender(<View {...viewProps} />);
  const documentHTML = preactRender(
    <Document
      {...documentProps}
      viewName={View.name}
      viewHTML={viewHTML}
      viewProps={viewProps}
    />,
  );

  return '<!DOCTYPE html>' + documentHTML;
}

export default render;
