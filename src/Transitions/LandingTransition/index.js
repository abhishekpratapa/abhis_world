import React, { Component } from 'react';
import './index.css';

import logo from '../../Pages/LandingPage/logo.svg';

import SocialMedia from "../../Pages/LandingPage/SocialMedia";

class LandingTransition extends Component { 
  render() {
    var LandingTransitionClassName = (this.props.currentPage == 0)? "LandingTransition" : "LandingTransition LandingTransitionAnimated";
    var LandingTransitionIconClassName = (this.props.currentPage == 0)? "LandingTransitionIcon" : "LandingTransitionIconAfter";
    var LandingTransitionIconImageClassName = (this.props.currentPage == 0)? "LandingTransitionIconImage" : "LandingTransitionIconImageAfter";
    var LandingTransitionSocialMediaContainerClassName = (this.props.currentPage == 0)? "LandingTransitionSocialMediaContainer" : "LandingTransitionSocialMediaContainerAfter";
    return (
      <div className={LandingTransitionClassName}>
        <div className={LandingTransitionIconClassName}>
          <img src={logo} className={LandingTransitionIconImageClassName} />
        </div>
        <div className={LandingTransitionSocialMediaContainerClassName}>
          <SocialMedia />
        </div>
      </div>
    );
  }
}

export default LandingTransition;