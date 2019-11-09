import React, { Component } from 'react';
import './index.css';

import TitleBar from './TitleBar';
import SocialMedia from '../LandingPage/SocialMedia';

import BlogPostArticle from './BlogPostArticle';

/* TODO: in DESKTOP render `Blog` as title */
class BlogPage extends Component {
  renderArticles() {
    return this.props.articles.map((x) => {
      return (
        <BlogPostArticle article_title={x.title()}
                         article_type={x.type()}
                         article_date={x.date()}
                         article_identifier={x.identifier()}
                         article_action={this.props.article_action.bind(this)} />
      );
    }, this);
  }

  render() {
    var BlogPageClassName = (this.props.currentPage == 1)? "BlogPage_Animated": (this.props.currentPage == 0)? "BlogPage" : "BlogPageHidden";
    return (
      <div className={BlogPageClassName}>
        <TitleBar />
        <div className={"BlogPageWriting"}>
          <div className={"BlogPageWritingContent"}>
            { this.renderArticles() }
          </div>
        </div>
        <div className={"BlogPageBottom"}>
          <div className={"BlogPageBottomContainer"}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;