import React, { Component } from 'react';
import './index.css';

class EnterButton extends Component {
  render() {
    return (
      <button className={"EnterButton"}
              onClick={this.props.reset_action.bind(this)}>
        ENTER
      </button>
    );
  }
}

export default EnterButton;