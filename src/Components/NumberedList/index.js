import React, { Component } from 'react';
import style from './index.module.scss';
import NumberedListElement from './NumberedListElement';

class NumberedList extends Component {
  renderedNumberedList() {
    return this.props.articles.map((x, index) =>
      <NumberedListElement index={index + 1}
                           onClick={this.props.onSelection.bind(this)}
                           text={x.title()}
                           identifier={x.extension()}/>
    );
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.content}>
          {this.renderedNumberedList()}
        </div>
      </div>
    );
  }
}

export default NumberedList;