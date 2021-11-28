import React from "react";
import { Document, DocumentComponent } from "./common";
import { document as doc } from "./document.json";

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
  public renderComponent<P = {}, C = string>(
    component: DocumentComponent<P, C>
  ) {
    const Component = require(`./components/${component.type}`).default;
    return (
      <Component
        component={component}
        renderComponent={(c: DocumentComponent<P, C>) =>
          this.renderComponent(c)
        }
        renderComponents={(c: DocumentComponent<any, any>[]) =>
          this.renderComponents(c)
        }
        renderChildren={(c: DocumentComponent<any, any>[]) =>
          this.renderComponents(c)
        }
        renderContent={(c: DocumentComponent<P, C>) => this.renderContent(c)}
      ></Component>
    );
  }

  /**
   * Render multiple components.
   *
   * @param components The components to render.
   * @returns The resulting rendered components.
   */
  public renderComponents(components: DocumentComponent<any, any>[]) {
    return (
      <>{components.map((component) => this.renderComponent(component))}</>
    );
  }

  /**
   * Render a component's content and properties.
   *
   * @param component The component to render.
   * @returns The resulting rendered component.
   */
  public renderContent<P, C>(component: DocumentComponent<P, C>) {
    return (
      <>
        {component.content ?? ""}
        {component.children ? this.renderComponents(component.children) : ""}
      </>
    );
  }

  public render() {
    return (
      <>
        {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
          !require(`./themes/${doc.theme}.css`) || ""
        ) : (
          <link
            rel="stylesheet"
            type="text/css"
            href={`/themes/${this.state.doc.theme}.css`}
          />
        )}
        {this.renderComponents(this.state.doc.content)}
      </>
    );
  }
}
