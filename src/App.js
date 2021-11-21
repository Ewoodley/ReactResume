import Background from "./Background/Background";
import Title from "./Title/Title";
import Grid from "./Grid/Grid";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Title />
        <Grid />
      </div>
    );
  }
}

export default App;
