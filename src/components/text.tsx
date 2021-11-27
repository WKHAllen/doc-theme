import React from "react";
import { ComponentProps } from "../common";

/**
 * The text component properties.
 */
interface TextProps {}

/**
 * The text component.
 */
export default class Text extends React.Component<ComponentProps<TextProps>> {
  public render() {
    return (
      <p className={this.props.component.classes?.join(" ")}>
        {this.props.renderContent(this.props.component)}
      </p>
    );
  }
}
