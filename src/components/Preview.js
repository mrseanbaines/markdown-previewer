import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

class Preview extends Component {
  render() {
    return (
      <div id="preview">{this.props.input}</div>
    );
  }
}

const mapStateToProps = state => ({
  input: state.input
});

export default connect(mapStateToProps)(Preview);
