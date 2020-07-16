import React, { Component } from 'react';
import style from './index.module.scss';

import facebook  from "./assets/facebook.svg";
import twitter  from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";

class SocialMediaButtons extends Component {
  gotoTwitter() {
    window.location.href = "https://twitter.com/AbhishekPratapa"
  }
  
  gotoYoutube() {
    window.location.href = "https://www.youtube.com/channel/UCIIQd3vnOh2PyaQ-zXsWDTw"
  }

  gotoMessenger() {
    window.location.href = "https://m.me/SinigmaSystems"
  }

  renderType() {
    if (this.props.type === "twitter") {
      return (
        <img src={twitter}
             alt={"Twitter Icon"}
             onClick={ this.gotoTwitter.bind(this) }/>
      );
    } else if (this.props.type === "youtube") {
      return (
        <img src={youtube}
             alt={"Youtube Icon"}
             onClick={ this.gotoYoutube.bind(this) }/>
      );
    } else {
      return (
        <img src={facebook}
             alt={"Facebook Icon"}
             onClick={ this.gotoMessenger.bind(this) }/>
      );
    }
  }

  render() {
    return (
      <div className={style.social_media_buttons}>
        { this.renderType() }
      </div>
    );
  }
}

export default SocialMediaButtons;
  