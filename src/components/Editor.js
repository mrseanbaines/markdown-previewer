import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { inputText } from '../store/actions';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(e) {
    this.props.inputText(e.target.value);
  }

  render() {
    return (
      <textarea
        id="editor"
        className="box"
        value={this.props.input}
        onChange={this.handleTextInput}
      >
      </textarea>
    );
  }
}

const mapStateToProps = state => ({
  input: state.input
});

const mapDispatchToProps = { inputText };

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
