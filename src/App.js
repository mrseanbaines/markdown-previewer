import React, { Component } from 'react';
import defaultMarkdown from './default-markdown.md';

// Components
import Editor from './components/Editor';
import Preview from './components/Preview';

// Redux
import { connect } from 'react-redux';
import { setDefaultMarkdown } from './store/actions';

class App extends Component {
  componentWillMount() {
    fetch(defaultMarkdown)
      .then((response) => response.text())
      .then((response) => this.props.setDefaultMarkdown(response));
  }

  render() {
    return (
      <div className="container">
        <Editor />
        <Preview />
      </div>
    );
  }
}

const mapDispatchToProps = { setDefaultMarkdown };

export default connect(null, mapDispatchToProps)(App);
