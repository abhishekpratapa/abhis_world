import React, { Component } from 'react';
import style from './index.module.scss';
import ListElement from './ListElement';

class List extends Component {
  renderedList() {
    return this.props.articles.map((x, index) =>
      <ListElement index={index + 1}
                   onClick={this.props.onSelection.bind(this)}
                   text={x.title()}
                   identifier={x.extension()}
                   number={x.subtopic().length}/>
    );
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.content}>
          {this.renderedList()}
        </div>
      </div>
    );
  }
}

export default List;