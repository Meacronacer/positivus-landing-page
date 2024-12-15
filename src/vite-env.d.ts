declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}
/// <reference types="vite/client" />