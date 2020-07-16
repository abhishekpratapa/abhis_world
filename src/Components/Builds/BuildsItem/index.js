import React, { Component } from 'react';
import style from './index.module.scss';

import audio_alignment from "../../../assets/one_day_build/audio_alignment.png";

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}



class BuildsItem extends Component {

  renderDate() {
    var date = "";
    const current_article = this.props.article;
    if(current_article != undefined) {
      var now = new Date();
      var difference = now - current_article.date();
      if ( difference < 86400000 ) {
        date = "TODAY";
      } else if (difference < 172800000) {
        date = "YESTERDAY";
      } else {
        date = getFormattedDate(current_article.date());
      }
    }

    return date;
  }

  render() {
    return (
      <div className={style.page}
           onClick={this.props.onSelection.bind(this, this.props.article.extension())}>
        <div className={style.content}>
          <div className={style.imageContainer}>
            <img className={style.image} 
                 src={this.props.article.image()} />
          </div>
          <div className={style.title}>
            { this.props.article.title() }
          </div>
          <div className={style.date}>
            {this.renderDate()}
          </div>
        </div>
      </div>
    );
  }
}

export default BuildsItem;