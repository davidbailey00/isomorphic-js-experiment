import { h, FunctionComponent } from 'preact';
import { render as preactRender } from 'preact-render-to-string';
import Document, { DocumentProps } from './document';

interface RenderData<ViewProps> {
  View: FunctionComponent<ViewProps>;
  viewProps: ViewProps;
  documentProps: DocumentProps;
}

function render<ViewProps>({
  View,
  viewProps,
  documentProps,
}: RenderData<ViewProps>) {
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
