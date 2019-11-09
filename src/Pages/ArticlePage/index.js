import React, { Component } from 'react';
import './index.css';

import TitleBar from '../BlogPage/TitleBar';
import SocialMedia from '../LandingPage/SocialMedia';
import Article from './Article';

/* TODO: in DESKTOP render `Blog` as title */
class ArticlePage extends Component {
  render() {
    var ArticlePageClassName= (this.props.currentPage == 2)? "ArticlePage ArticlePageActive": "ArticlePage";
    return (
      <div className={ArticlePageClassName}>
        <TitleBar article={true}
                  reset_action={this.props.reset_action.bind(this)} />
        <div className={"ArticlePageWriting"}>
          <div className={"ArticlePageWritingContent"}>
            <Article identifier={this.props.identifier}
                     article={this.props.article}/>
          </div>
        </div>
        <div className={"ArticlePageBottom"}>
          <div className={"ArticlePageBottomContainer"}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;