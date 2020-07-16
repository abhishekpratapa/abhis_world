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

class LearningPage extends Component {
  back() {
    window.location.href = "/learning";
  }

  selection(identifier) {
    const path = this.props.match.path;
    this.props.history.push(`${path}/${identifier}`);
  }

  render() {
    console.log(this.props)
    return (
      <div className={style.page}>
        <AppTitleBar logo={plants}
                     text={this.props.title}
                     back={this.back.bind(this)} />
        <NumberedList onSelection={this.selection.bind(this)}
                      articles={this.props.articles} />
        <div className={style.social_media}>
          <div className={style.social_media_container}>
            <SocialMedia />
          </div>
        </div>
      </div>);
  }
}

export default LearningPage;