import React from "react";
import { ComponentProps } from "../common";

/**
 * The container component properties.
 */
interface ContainerProps {
  inline?: boolean;
}

/**
 * The container component.
 */
export default class Container extends React.Component<
  ComponentProps<ContainerProps>
> {
  public render() {
    return (
      <>
        {!this.props.component.properties?.inline ?? false ? (
          <div className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </div>
        ) : (
          <span className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </span>
        )}
      </>
    );
  }
}
