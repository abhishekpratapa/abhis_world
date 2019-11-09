import React, { Component } from 'react';
import './index.css';

import facebook  from "./assets/facebook.png";
import twitter  from "./assets/twitter.png";
import youtube from "./assets/youtube.png";

class SocialMediaButtons extends Component {
  gotoTwitter() {
    window.location.href="https://twitter.com/AbhishekPratapa"
  }
  
  gotoYoutube() {
    window.location.href="https://www.youtube.com/channel/UCIIQd3vnOh2PyaQ-zXsWDTw"
  }

  gotoMessenger() {
    window.location.href="https://m.me/SinigmaSystems"
  }

  renderType() {
    if (this.props.type == "twitter") {
      return (<img src={twitter} onClick={ this.gotoTwitter.bind(this) }/>);
    } else if (this.props.type == "youtube") {
      return (<img src={youtube} onClick={ this.gotoYoutube.bind(this) }/>);
    } else {
      return (<img src={facebook} onClick={ this.gotoMessenger.bind(this) }/>);
    }
  }

  render() {
    return (
      <div className={"SocialMediaButtons"}>
        { this.renderType() }
      </div>
    );
  }
}

export default SocialMediaButtons;
  