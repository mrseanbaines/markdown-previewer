import React, { Component } from 'react';

// Components
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;
