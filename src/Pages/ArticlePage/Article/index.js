import React, { Component } from 'react';
import './index.css';

import BlogPostType from '../../BlogPage/BlogPostArticle/BlogPostType';
import { ArticleType } from '../../../Articles/ArticleTemplate';

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}


class Article extends Component {
  renderTitle() {
    var title = ""
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      title = current_article.title()
    }

    return (
      <div className={"ArticleTitle"}>
        { title }
      </div>
    );
  }

  renderDate() {
    var date = "";
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      var now = new Date();
      var difference = now - current_article.date();
      if ( difference < 86400000 ) {
        date = "TODAY";
      } else if (difference < 172800000) {
        date = "YESTERDAY";
      } else {
        date = getFormattedDate(current_article.date());
      }
    }

    return (
      <div>
        <div className={"ArticleDate"}>
          { date }
        </div>
      </div>
    );
  }

  
  renderCreative() {
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      if (current_article.type().includes(ArticleType.CREATIVE)) {
        return (<BlogPostType type="creative"/>);
      }
    }
  }

  renderTech() {
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      if (current_article.type().includes(ArticleType.TECH)) {
        return (<BlogPostType type="tech"/>);
      }
    }
  }

  renderLearning() {
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      if (current_article.type().includes(ArticleType.LEARNING)) {
        return (<BlogPostType type="learning"/>);
      }
    }
  }

  renderExistential() {
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      if (current_article.type().includes(ArticleType.EXISTENTIAL)) {
        return (<BlogPostType type="existential"/>);
      }
    }
  }

  renderPersonal() {
    const current_article = this.getCurrentArticle();
    if(current_article != undefined) {
      if (current_article.type().includes(ArticleType.PERSONAL)) {
        return (<BlogPostType type="personal"/>);
      }
    }
  }

  renderTypes() {
    return (
      <div className={"ArticleTypesContainer"}>
        <div className={"ArticleTypes"}>
          { this.renderCreative() }
          { this.renderTech() }
          { this.renderLearning() }
          { this.renderExistential() }
          { this.renderPersonal() }
        </div>
      </div>
    )
  }

  renderContent() {
    const current_article = this.getCurrentArticle();
    var article_content = ""
    if(current_article != undefined) {
      article_content = current_article.content();
    }
    return (
      <div className={"ArticleContent"}>
        { article_content }
      </div>
    );

    // <p className={"ArticleContentParagraph"}>
    //    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat massa urna, vel fermentum odio scelerisque et. Aenean ullamcorper purus id molestie rhoncus. Phasellus ut sem massa. Aliquam ullamcorper mattis faucibus. Mauris blandit elementum consequat. Suspendisse eu quam tincidunt, finibus felis et, condimentum magna. Nullam in ligula est. Fusce ut convallis velit. Cras non venenatis ipsum.
    // </p>
    // <p className={"ArticleContentParagraph"}>
    //    Ut aliquet purus et lobortis dapibus. Integer eu tellus vehicula, tempus arcu quis, efficitur augue. Quisque laoreet vitae nulla nec pretium. Vestibulum faucibus, risus vitae tempor imperdiet, velit urna volutpat diam, tincidunt placerat lorem sem eu felis. Pellentesque et ipsum massa. Sed accumsan nisi at felis congue bibendum. Nullam blandit ultrices ante, vitae posuere justo pellentesque tempus. Etiam eu dignissim nunc, eget pretium ipsum. Nulla consequat facilisis condimentum. Aenean sollicitudin eget lorem ut rutrum. Nunc eget quam porttitor, rhoncus sapien at, volutpat tellus. Donec aliquet, tellus a semper porta, enim leo eleifend magna, ac vestibulum diam quam nec justo. Etiam feugiat nibh est, vitae lobortis justo maximus vel.
    // </p>
  }

  getCurrentArticle() {
    for (var x = 0; x < this.props.article.length; x++) {
      if (this.props.article[x].identifier() == this.props.identifier) {
        return this.props.article[x];
      }
    }
    return undefined;
  }

  render() {
    return (
      <div className={"Article"}>
        { this.renderTitle() }
        { this.renderDate() }
        { this.renderTypes() }
        { this.renderContent() }
      </div>
    );
  }
}

export default Article;


