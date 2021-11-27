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
export interface ComponentProps<T> {
  component: DocumentComponent<T>;
  renderChildren: (components: DocumentComponent<any>[]) => JSX.Element;
  renderContent: (component: DocumentComponent<T>) => JSX.Element;
}
