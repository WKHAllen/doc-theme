/**
 * A component in the document.
 */
export interface DocumentComponent<P = {}, C = string> {
  type: string;
  properties?: P;
  classes?: string[];
  content?: C;
  children?: DocumentComponent<any>[];
}

/**
 * The document.
 */
export interface Document {
  name: string;
  theme: string;
  content: DocumentComponent<any>[];
}

/**
 * The standard component properties.
 */
export interface ComponentProps<P = {}, C = string> {
  component: DocumentComponent<P, C>;
  renderComponent: (component: DocumentComponent<P>) => JSX.Element;
  renderComponents: (components: DocumentComponent<any>[]) => JSX.Element;
  renderChildren: (components: DocumentComponent<any>[]) => JSX.Element;
  renderContent: (component: DocumentComponent<P>) => JSX.Element;
}
