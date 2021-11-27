import React from "react";
import { ComponentProps } from "../common";

/**
 * The container component properties.
 */
type ContainerProps = ComponentProps<{}>;

/**
 * The container component.
 */
export default class Container extends React.Component<ContainerProps> {
  public render() {
    return (
      <div className={this.props.component.classes?.join(" ")}>
        {this.props.renderContent(this.props.component)}
      </div>
    );
  }
}
