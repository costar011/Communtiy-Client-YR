import React from "react";
import { Route } from "react-router-dom";
import MM00_v from "./screens/MM00_v";
import FreeBoard from "./screens/FreeBoard";
import DocsBoard from "./screens/DocsBoard";
import GallaryBoard from "./screens/GallaryBoard";
import Hedaer from "./screens/Header";
import Write from "./screens/Write";
import Detail from "./screens/Detail";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Hedaer} />
        <Route exact path="/" component={MM00_v} />

        <Route exact path="/freeboard" component={FreeBoard} />
        <Route exact path="/docsboard" component={DocsBoard} />
        <Route exact path="/gallaryboard" component={GallaryBoard} />
        <Route exact path="/write/:boardType" component={Write} />
        <Route exact path="/detail/:id" component={Detail} />
      </div>
    );
  }
}

export default App;
