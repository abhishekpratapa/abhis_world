import React, { Component } from 'react';
import style from './index.module.scss';
import ReadingListElement from './ReadingListElement';

class ReadingList extends Component {
  renderList() {
    return this.props.articles.map((x)=>
      <ReadingListElement onClick={this.props.onSelection.bind(this)}
                          article={x}/>
    );
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.content}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default ReadingList;