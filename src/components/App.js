import React, { Component } from 'react';
import strings from '../strings/loco';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{strings.h1}</h1>
        <h1>{strings.h2}</h1>
        <p>{strings.p}</p>
      </div>
    );
  }
}

export default App;
