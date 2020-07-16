import React, { Component } from 'react';
import style from './index.module.scss';

import right_arrow from '../../../assets/right_arrow.svg';

class ReadingListElement extends Component {
  render() {
    return (
      <div className={style.page}
           onClick={this.props.onClick.bind(this, this.props.article.extension())}>
        <div className={style.text}>
          {this.props.article.title()}
        </div>
        <div className={style.right_arrow}>
          <img src={right_arrow} />
        </div>
      </div>
    );
  }
}

export default ReadingListElement;