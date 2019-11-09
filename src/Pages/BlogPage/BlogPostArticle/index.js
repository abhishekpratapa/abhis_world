import React, { Component } from 'react';
import './index.css';

import BlogPostType from './BlogPostType';

import { ArticleType } from "../../../Articles/ArticleTemplate"

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}

/*Props:
  - article_type
  - article_date
  - article_title
*/
class BlogPostArticle extends Component {
  renderDate() {
    const now = new Date();
    var difference = now - this.props.article_date;
    if ( difference < 86400000 ) {
      return "TODAY";
    } else if (difference < 172800000) {
      return "YESTERDAY";
    } else {
      return getFormattedDate(this.props.article_date);
    }
  }

  renderCreative() {
    if (this.props.article_type.includes(ArticleType.CREATIVE)) {
      return (<BlogPostType type="creative"/>);
    }
  }

  renderTech() {
    if (this.props.article_type.includes(ArticleType.TECH)) {
      return (<BlogPostType type="tech"/>);
    }
  }

  renderLearning() {
    if (this.props.article_type.includes(ArticleType.LEARNING)) {
      return (<BlogPostType type="learning"/>);
    }
  }

  renderExistential() {
    if (this.props.article_type.includes(ArticleType.EXISTENTIAL)) {
      return (<BlogPostType type="existential"/>);
    }
  }

  renderPersonal() {
    if (this.props.article_type.includes(ArticleType.PERSONAL)) {
      return (<BlogPostType type="personal"/>);
    }
  }

  render() {
    return (
      <div className={"BlogPostArticle"}
           onClick={this.props.article_action.bind(this, this.props.article_identifier)}>
        <div className={"BlogPostArticleContainer"}>
          <div className={"BlogPostArticleTitle"}>
            { this.props.article_title }
          </div>
          <div  className={"BlogPostArticleDate"}>
            { this.renderDate() }
          </div>
        </div>
        <div className={"BlogPostTypeContainer"}>
          {/* Buttons to indicate type */}
          {this.renderCreative()}
          {this.renderTech()}
          {this.renderLearning()}
          {this.renderExistential()}
          {this.renderPersonal()}
        </div>
      </div>
    );
  }
}

export default BlogPostArticle;