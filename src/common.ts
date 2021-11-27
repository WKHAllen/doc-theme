/**
 * A component in the document.
 */
export interface DocumentComponent<T> {
  type: string;
  properties?: T;
  classes?: string[];
  content?: string;
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
