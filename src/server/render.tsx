import { h, FunctionComponent } from 'preact';
import { render as preactRender } from 'preact-render-to-string';
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
  const docHTML = preactRender(
    <Document {...documentProps} viewHTML={viewHTML} viewProps={viewProps} />,
  );

  return '<!DOCTYPE html>' + docHTML;
}

export default render;
