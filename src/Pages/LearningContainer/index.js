import React, { Component } from 'react';
import style from './index.module.scss';

import Builds from "../../Components/Builds";
import ReadingList from "../../Components/ReadingList";
import NumberedList from "../../Components/NumberedList";

import AppTitleBar from "../../Components/AppTitleBar";
import SocialMedia from "../../Components/SocialMedia";
import AppContentTitleBar from "../../Components/AppContentTitleBar";
import ReadingListContent from "../../Components/ReadingListContent";
import SpecialArticle from "../../Components/SpecialArticle";

import blog from '../../assets/menu/blog.svg'
import books from '../../assets/menu/books.svg'
import calendar from '../../assets/menu/calendar.svg'
import lightbulb from '../../assets/menu/lightbulb.svg'
import plants from '../../assets/menu/plants.svg'
import projects from '../../assets/menu/projects.svg'

import audio_alignment from '../../assets/one_day_build/audio_alignment.png';

class LearningContainer extends Component {
  back() {
    this.props.back(this.props.extension);
  }

  render() {
      return (
        <div className={style.page}>
        <AppContentTitleBar logo={plants}
                            onClick={this.back.bind(this)} />
          <SpecialArticle article={this.props.article}/>
          <div className={style.social_media}>
            <div className={style.social_media_container}>
              <SocialMedia />
            </div>
          </div>
        </div>
      );
  }
}

export default LearningContainer;