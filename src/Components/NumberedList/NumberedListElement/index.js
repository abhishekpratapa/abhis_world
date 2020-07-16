import React, { Component } from 'react';
import style from './index.module.scss';

import right_arrow from '../../../assets/right_arrow.svg';

class NumberedListElement extends Component {
  render() {
    return (
      <div className={style.page}
           onClick={this.props.onClick.bind(this, this.props.identifier)}>
        <div className={style.number}>
          {this.props.index}) 
        </div>
        <div className={style.text}>
          {this.props.text}
        </div>
        <div className={style.right_arrow}>
          <img src={right_arrow} />
        </div>
      </div>
    );
  }
}

export default NumberedListElement;