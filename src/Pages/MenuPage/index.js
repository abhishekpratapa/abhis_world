import React, { Component } from 'react';
import style from './index.module.scss';

import SocialMedia from "../../Components/SocialMedia";
import TitleBar from "../../Components/TitleBar";

import Menu from "./Modules/Menu"
import MenuTypes from './Modules/Menu/MenuTypes';

class MenuPage extends Component {
  menu_click(type) {
    if(type == MenuTypes.CALENDAR){
      this.props.history.push('/one_day_builds');
    } else if(type == MenuTypes.PROJECTS){
      this.props.history.push('/projects');
    } else if(type == MenuTypes.LIGHTBULB){
      this.props.history.push('/ideas');
    } else if(type == MenuTypes.BOOKS){
      this.props.history.push('/reading_list');
    } else if(type == MenuTypes.PLANTS){
      this.props.history.push('/learning');
    }
  }

  render() {
    return (
      <div className={style.page}>
        <TitleBar />
        <Menu selected={this.menu_click.bind(this)}/>
        <div className={style.social_media}>
          <div className={style.social_media_container}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuPage;