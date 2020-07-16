import React, { Component } from 'react';
import style from './index.module.scss';

import SocialMediaButtons from "./SocialMediaButtons";

class SocialMedia extends Component {
  render() {
    return (
      <div className={style.social_media}>
        <SocialMediaButtons type="twitter" />
        <SocialMediaButtons type="facebook" />
        <SocialMediaButtons type="youtube"/>
      </div>
    );
  }
}

export default SocialMedia;
  