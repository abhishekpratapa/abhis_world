import React, { Component } from 'react';
import style from './index.module.scss';

import mythical_man_month from '../../assets/reading/mythical_man_month.png'

class ReadingListContent extends Component {
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
          {this.renderImage()}
          <div className={style.text}>
            { this.props.article.content() }
          </div>
        </div>
      </div>
    );
  }
}

export default ReadingListContent;