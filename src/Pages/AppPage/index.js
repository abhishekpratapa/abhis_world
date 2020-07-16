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

class AppPage extends Component {
  render() {
    return (
      <div className={style.page}>
        {/*
        <AppTitleBar logo={books}
                     text={"READING LIST"} /> 
        */ }

        { /* <ReadingList /> */ }

        { /* 
        <AppTitleBar logo={calendar}
                     text={"ONE DAY BUILDS"} />
        */}

        {/*
        <AppTitleBar logo={projects}
                     text={"PROJECTS"} />
        */}

        { /*

        <AppTitleBar logo={plants}
                     text={"LEARNING"} />
        */ }

        { /* <Builds learning={true}/> */ }

        { /* <Builds /> */ }

        { /* <AppTitleBar logo={lightbulb}
                     text={"IDEAS"} /> */}

        { /* <AppTitleBar logo={plants}
                          text={"How does a Computer Work"} /> */ }

        { /* <NumberedList /> */ }

        { /*
          <AppTitleBar logo={projects}
                     text={"PROJECTS"} />
          */
        }

        <AppTitleBar logo={calendar}
                     text={"ONE DAY BUILDS"} />

        <Builds />

        <div className={style.social_media}>
          <div className={style.social_media_container}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default AppPage;