import React, { Component } from 'react';
import './index.css';

import logo from '../../LandingPage/logo.svg';
import hamburger from './hamburger.png';
import back_arrow from './back_arrow.png';
import share from './share.png';


class TitleBar extends Component {
  renderIcons() {
    if(this.props.article) {
      return (<div>
        <div className={"TitleBarHamburger"}
             onClick={this.props.reset_action.bind(this)} >
          <img className={"TitleBarHamburgerImage"}
               src={back_arrow} />
        </div>
      </div>);

      /* 
         <div className={"TitleBarShare"}>
         <img className={"TitleBarHamburgerImage"} src={share} />
         </div>
      */
    } else {
      return (<div></div>);
      /*
        <div className={"TitleBarHamburger"}>
          <img className={"TitleBarHamburgerImage"} src={hamburger} />
        </div>
      */
    }
  }
  render() {
    return (
      <div className={"TitleBar"}>
        <div className={"TitleBarLogo"}>
          <img className={"TitleBarLogoIcon"} src={logo}/>
        </div>
        { this.renderIcons() }
      </div>
    );
  }
}

export default TitleBar;