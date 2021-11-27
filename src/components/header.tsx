import React from "react";
import { ComponentProps } from "../common";

/**
 * The header component properties.
 */
interface HeaderProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * The header component.
 */
export default class Header extends React.Component<
  ComponentProps<HeaderProps>
> {
  public render() {
    switch (this.props.component.properties?.size ?? 1) {
      case 1:
        return (
          <h1 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h1>
        );
      case 2:
        return (
          <h2 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h2>
        );
      case 3:
        return (
          <h3 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h3>
        );
      case 4:
        return (
          <h4 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h4>
        );
      case 5:
        return (
          <h5 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h5>
        );
      case 6:
        return (
          <h6 className={this.props.component.classes?.join(" ")}>
            {this.props.renderContent(this.props.component)}
          </h6>
        );
    }
  }
}
