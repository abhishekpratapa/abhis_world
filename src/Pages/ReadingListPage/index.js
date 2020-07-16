import React, { Component } from 'react';
import style from './index.module.scss';

import SocialMedia from "../../Components/SocialMedia";
import AppTitleBar from "../../Components/AppTitleBar";

import Builds from "../../Components/Builds";
import ReadingList from "../../Components/ReadingList";
import NumberedList from "../../Components/NumberedList";

import blog from '../../assets/menu/blog.svg'
import books from '../../assets/menu/books.svg'
import calendar from '../../assets/menu/calendar.svg'
import lightbulb from '../../assets/menu/lightbulb.svg'
import plants from '../../assets/menu/plants.svg'
import projects from '../../assets/menu/projects.svg'

class ReadingListPage extends Component {
  selection(identifier) {
    const path = this.props.match.path;
    this.props.history.push(`${path}${identifier}`);
  }

  render() {
    return (
      <div className={style.page}>
        <AppTitleBar logo={books}
                     text={"READING LIST"}
                     back={this.props.backMenu.bind(this)} /> 

        <ReadingList onSelection={this.selection.bind(this)}
                     articles={this.props.articles}/>

        <div className={style.social_media}>
          <div className={style.social_media_container}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default ReadingListPage;