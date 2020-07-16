import React, { Component } from 'react';
import style from './index.module.scss';

import BuildsItem from './BuildsItem';

class Builds extends Component {
  renderLearning() {
    if(this.props.learning) {
      return (
        <div className={style.learning_text}>
          How does...
        </div>
      );
    }
  }

  renderBuildItem() {
    return this.props.articles.map((x) =>
      <BuildsItem onSelection={this.props.onSelection.bind(this)}
                  identifier={x.extension()}
                  article={x}/>
    );
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.content}>
          {this.renderLearning()}
          <div className={style.contentFlex}>
            {this.renderBuildItem()}
          </div>
        </div>
      </div>
    );
  }
}

export default Builds;