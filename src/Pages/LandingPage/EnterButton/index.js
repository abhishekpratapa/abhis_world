import React, { Component } from 'react';
import './index.css';

class EnterButton extends Component {
  render() {
    return (
      <button className={"EnterButton"}
              onClick={this.props.updatePage.bind(this, 1)}>
        ENTER
      </button>
    );
  }
}

export default EnterButton;