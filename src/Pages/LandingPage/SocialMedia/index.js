import React, { Component } from 'react';
import './index.css';

import SocialMediaButtons from "./SocialMediaButtons";

class SocialMedia extends Component {
  render() {
    return (
      <div className={"SocialMedia"}>
        <SocialMediaButtons type="twitter" />
        <SocialMediaButtons type="facebook" />
        <SocialMediaButtons type="youtube"/>
      </div>
    );
  }
}

export default SocialMedia;
  