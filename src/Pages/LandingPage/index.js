import React, { Component } from 'react';
import style from './index.module.scss';

import EnterButton from "../../Components/EnterButton";
import SocialMedia from "../../Components/SocialMedia";

import logo from '../../assets/logo.svg';

import Main from '../../logos/Main';

class LandingPage extends Component {
  enter_page() {
    this.props.history.push('/menu');
  }

  render() {
    console.log(this.props);
    return (
      <div className={style.page}>
        {/* This is the middle_container */}
        <div className={style.centered_modal}>
          {/* This is the title */}
          <div className={style.title}>
            Abhi's World
          </div>

          {/* This is the logo */}
          <div className={style.logo}>
            <Main />
          </div>

          {/* This is the enter button */}
          <div className={style.button}>
            <EnterButton onClick={this.enter_page.bind(this)}/>
          </div>

          {/* This is the social actions button */}
          <div className={style.social_media}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;