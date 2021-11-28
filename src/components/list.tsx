import React from "react";
import { ComponentProps } from "../common";

/**
 * The list component properties.
 */
interface ListProps {
  ordered?: boolean;
}

/**
 * The list component.
 */
export default class List extends React.Component<ComponentProps<ListProps>> {
  public render() {
    return (
      <>
        {!this.props.component.properties?.ordered ?? false ? (
          <ul className={this.props.component.classes?.join(" ")}>
            {this.props.component.children?.map((child, i) => (
              <li key={i}>{this.props.renderComponent(child)}</li>
            ))}
          </ul>
        ) : (
          <ol className={this.props.component.classes?.join(" ")}>
            {this.props.component.children?.map((child, i) => (
              <li key={i}>{this.props.renderComponent(child)}</li>
            ))}
          </ol>
        )}
      </>
    );
  }
}
