import React from "react";
import "./App.css";
import { document as doc } from "./document.json";

export interface DocumentComponent {}

interface Document {
  name: string;
  theme: string;
  content: DocumentComponent[];
}

interface AppState {
  doc: Document;
}

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

  public render() {
    return <></>;
  }
}
