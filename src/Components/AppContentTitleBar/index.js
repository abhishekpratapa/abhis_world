import React, { Component } from 'react';
import style from './index.module.scss';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.png';
import back_arrow from '../../assets/back_arrow.png';
import share from '../../assets/share.png';


class AppContentTitleBar extends Component {
  renderBack() {
    return (
      <div className={style.back_arrow}
           onClick={this.props.onClick.bind(this)}>
          <img className={style.back_arrow_image}
               src={back_arrow} />
        </div>
    );
  }

  renderShare() {
    return (
      <div className={style.share}>
        <img className={style.share_image}
             src={share} />
      </div>
    );
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.logo}>
          <img className={style.icon}
               src={this.props.logo}/>
        </div>
        { this.renderBack() }
        { this.renderShare() }
      </div>
    );
  }
}

export default AppContentTitleBar;