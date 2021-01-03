import { h, FunctionComponent } from 'preact';
import { render as preactRender } from 'preact-render-to-string';
import { extractCss } from 'goober';
import Document, { DocumentProps } from './document';

interface RenderOptions<ViewProps> {
  View: FunctionComponent<ViewProps>;
  viewProps: ViewProps;
  documentProps: DocumentProps;
}

function render<ViewProps>({
  View,
  viewProps,
  documentProps,
}: RenderOptions<ViewProps>) {
  const viewHTML = preactRender(<View {...viewProps} />);
  const gooberCSS = extractCss();
  const docHTML = preactRender(
    <Document
      {...documentProps}
      viewName={View.name}
      viewHTML={viewHTML}
      viewProps={viewProps}
      gooberCSS={gooberCSS}
    />,
  );

  return '<!DOCTYPE html>' + docHTML;
}

export default render;
