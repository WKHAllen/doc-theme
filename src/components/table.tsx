import React from "react";
import { ComponentProps, DocumentComponent } from "../common";

/**
 * The table component properties.
 */
interface TableProps {
  headers?: DocumentComponent<any, any>[];
}

/**
 * The table component children.
 */
type TableChildren = DocumentComponent<any, any>[][];

/**
 * The table component.
 */
export default class Table extends React.Component<
  ComponentProps<TableProps, TableChildren>
> {
  public render() {
    return (
      <>
        <table className={this.props.component.classes?.join(" ")}>
          {this.props.component.properties?.headers &&
          this.props.component.properties.headers.length > 0 ? (
            <tr>
              {this.props.component.properties.headers.map((header) => (
                <th>{this.props.renderComponent(header)}</th>
              ))}
            </tr>
          ) : (
            ""
          )}
          {this.props.component.content?.map((row) => (
            <tr>
              {row.map((item) => (
                <td>{this.props.renderComponent(item)}</td>
              ))}
            </tr>
          ))}
        </table>
      </>
    );
  }
}
