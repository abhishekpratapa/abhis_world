import React, { Component } from 'react';
import style from './index.module.scss';

import right_arrow from '../../../../../assets/right_arrow.svg';

import MenuTypes from '../MenuTypes';

import BlogLogo from '../../../../../logos/BlogLogo';
import BooksLogo from '../../../../../logos/BooksLogo';
import LightBulbLogo from '../../../../../logos/LightBulbLogo';
import LeafLogo from '../../../../../logos/LeafLogo';
import OneDayBuildsLogo from '../../../../../logos/OneDayBuildsLogo';
import ProjectLogo from '../../../../../logos/ProjectLogo';

class MenuItem extends Component {
  renderLogos() {
    if(this.props.type == MenuTypes.CALENDAR) {
      return (
        <div className={style.imageSrc}>
          <OneDayBuildsLogo />
        </div>
      );
    }else if(this.props.type == MenuTypes.PROJECTS) {
      return (
        <div className={style.imageSrc}>
          <ProjectLogo />
        </div>
      );
    }else if(this.props.type == MenuTypes.BLOG) {
      return (
        <div className={style.imageSrc}>
          <BlogLogo />
        </div>
      );
    }else if(this.props.type == MenuTypes.LIGHTBULB) {
      return (
        <div className={style.imageSrc}>
          <LightBulbLogo />
        </div>
      );
    }else if(this.props.type == MenuTypes.BOOKS) {
      return (
        <div className={style.imageSrc}>
          <BooksLogo />
        </div>
      );
    }else if(this.props.type == MenuTypes.PLANTS) {
      return (
        <div className={style.imageSrc}>
          <LeafLogo />
        </div>
      );
    }
  }
  render() {
    return (
      <div className={style.page} onClick={this.props.onClick.bind(this, this.props.type)}>
        <div className={style.image}>
          <div className={style.imageContainer}>
            <div className={style.imageContent}>
              { this.renderLogos() }
            </div>
          </div>
        </div>
        <div className={style.text}>
          {this.props.text}
        </div>
        <div className={style.arrow}>
          <img src={right_arrow} />
        </div>
      </div>
    );
  }
}

export default MenuItem;