import React from "react";
import { ComponentProps } from "../common";

/**
 * The image component properties.
 */
interface ImageProps {
  source: string;
  width?: number;
  height?: number;
}

/**
 * The image component.
 */
export default class Image extends React.Component<ComponentProps<ImageProps>> {
  public render() {
    return (
      <>
        <img
          src={this.props.component.properties?.source}
          alt={this.props.component.content}
          width={this.props.component.properties?.width}
          height={this.props.component.properties?.height}
          className={this.props.component.classes?.join(" ")}
        />
      </>
    );
  }
}
