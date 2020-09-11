import React from "react";
import { Route } from "react-router-dom";
import Hedaer from "./screens/Header";
import MH0 from "./screens/MH0";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Hedaer} />
        <Route exact path="/" component={MH0} />
      </div>
    );
  }
}

export default App;
