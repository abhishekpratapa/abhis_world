import React, { Component } from 'react';
import './index.css';

import logo from './logo.svg';

import EnterButton from "./EnterButton";
import SocialMedia from "./SocialMedia";

class LandingPage extends Component {
  render() {
    var LandingPageClassName = (this.props.currentPage == 0)? "Landing_Page":"Landing_Page_Animated";
    var LandingPageLogoContainerClassName = (this.props.currentPage == 0)? "LandingPageLogoContainer":"LandingPageLogoContainer LandingPageLogoContainer_Animated";
    var LandingPageSocialMediaContainerClassName = (this.props.currentPage == 0)? "LandingPageSocialMediaContainer":"LandingPageSocialMediaContainer LandingPageSocialMediaContainer_Animated";

    return (
      <div className={LandingPageClassName}>
        {/* This is the middle_container */}
        <div className={"LandingPageContainer"}>
          {/* This is the title */}
          <div className={"LandingPageTitle"}>
            Abhi's World
          </div>

          {/* This is the logo */}
          <div className={LandingPageLogoContainerClassName}>
            <img src={logo} />
          </div>

          {/* This is the enter button */}
          <div className={"LandingPageEnterButtonContainer"}>
            <EnterButton  updatePage={this.props.updatePage.bind(this)} />
          </div>

          {/* This is the social actions button */}
          <div className={LandingPageSocialMediaContainerClassName}>
            <SocialMedia/>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;