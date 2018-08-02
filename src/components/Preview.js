import React, { Component } from 'react';
import marked from 'marked';

// Redux
import { connect } from 'react-redux';

class Preview extends Component {
  renderMarkdown() {
    return {__html: marked(this.props.input)};
  }

  render() {
    return (
      <div
        id="preview"
        className="box"
        dangerouslySetInnerHTML={this.renderMarkdown()}
      >
      </div>
    );
  }
}

const mapStateToProps = state => ({
  input: state.input
});

export default connect(mapStateToProps)(Preview);
