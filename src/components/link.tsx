import React from "react";
import { ComponentProps } from "../common";

/**
 * The link component properties.
 */
interface LinkProps {
  destination: string;
  newTab?: boolean;
}

/**
 * The link component.
 */
export default class Link extends React.Component<ComponentProps<LinkProps>> {
  public render() {
    return (
      <>
        <a
          className={this.props.component.classes?.join(" ")}
          href={this.props.component.properties?.destination}
          target={
            this.props.component.properties?.newTab ?? false
              ? "_blank"
              : "_self"
          }
          rel="noopener noreferrer"
        >
          {this.props.renderContent(this.props.component)}
        </a>
      </>
    );
  }
}
