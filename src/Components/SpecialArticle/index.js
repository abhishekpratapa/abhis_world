import React, { Component } from 'react';
import style from './index.module.scss';

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}


class SpecialArticle extends Component {
  renderDate() {
    var date = (<div>
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;</div>);
    const current_article = this.props.article;
    if(current_article != undefined) {
      if(current_article.date != undefined) {
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
    }

    return date;
  }

  renderImage() {
    if(this.props.article.image) {
      return (
        <div className={style.image}>
          <img className={style.imageContent}
               src={this.props.article.image()} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.content}>
          <div className={style.title}>
           { this.props.article.title() }
          </div>
          <div className={style.subtitle_content}>
            <div className={style.subtitle}>
              {this.renderDate()}
            </div>
          </div>
          {this.renderImage()}
          <div className={style.text}>
            { this.props.article.content() }
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialArticle;
  