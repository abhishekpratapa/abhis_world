import React, { Component } from 'react';
import style from './index.module.scss';

import MenuItem from './MenuItem';
import MenuTypes from './MenuTypes';

class Menu extends Component {
  render() {
     return (
      <div className={style.page}>
        <div className={style.content}>
          <MenuItem type={MenuTypes.CALENDAR}
                    text={"ONE DAY BUILDS"}
                    onClick={this.props.selected.bind(this)}/>
          <MenuItem type={MenuTypes.PROJECTS}
                    text={"PROJECTS"}
                    onClick={this.props.selected.bind(this)}/>
          {/*
          <MenuItem type={MenuTypes.BLOG}
                    text={"BLOG"}
                    onClick={this.props.selected.bind(this)}/> */}
          <MenuItem type={MenuTypes.LIGHTBULB}
                    text={"IDEAS"}
                    onClick={this.props.selected.bind(this)}/>
          <MenuItem type={MenuTypes.BOOKS}
                    text={"READING LIST"}
                    onClick={this.props.selected.bind(this)}/>
          <MenuItem type={MenuTypes.PLANTS}
                    text={"LEARN"}
                    onClick={this.props.selected.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Menu;