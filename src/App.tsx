import React from "react";
import { Document, DocumentComponent } from "./common";
import { document as doc } from "./document.json";
require(`./themes/${doc.theme}.css`);

/**
 * The state of the app component.
 */
interface AppState {
  doc: Document;
}

/**
 * The app component.
 */
export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      doc,
    };
  }

  public componentDidMount() {
    document.title = this.state.doc.name;
  }

  /**
   * Render a single component.
   *
   * @param component The component to render.
   * @returns The resulting rendered component.
   */
  public renderComponent<T>(component: DocumentComponent<T>) {
    const Component = require(`./components/${component.type}`).default;
    return (
      <Component
        component={component}
        renderChildren={(c: DocumentComponent<any>[]) =>
          this.renderComponents(c)
        }
        renderContent={(c: DocumentComponent<T>) =>
          this.renderContent(component)
        }
      ></Component>
    );
  }

  /**
   * Render multiple components.
   *
   * @param components The components to render.
   * @returns The resulting rendered components.
   */
  public renderComponents(components: DocumentComponent<any>[]) {
    return (
      <>{components.map((component) => this.renderComponent(component))}</>
    );
  }

  /**
   * Render a component's content and properties.
   * @param component The component to render.
   * @returns The resulting rendered component.
   */
  public renderContent<T>(component: DocumentComponent<T>) {
    return (
      <>
        {component.content ?? ""}
        {component.children ? this.renderComponents(component.children) : ""}
      </>
    );
  }

  public render() {
    return <>{this.renderComponents(this.state.doc.content)}</>;
  }
}
