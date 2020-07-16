import React from 'react';

import {
  BuildArticleTemplate
} from '../ArticleTemplates';

import src from './assets/example.jpg';

export default class ExampleArticle extends BuildArticleTemplate {
  extension() {
    return "example_article";
  }

  title() {
    return "Projects Article";
  }

  date() {
    return new Date("November 10 2019 12:18");
  }

  image() {
    return src;
  }

  content() {
    return (
      <div>
        Article Content
      </div>
    )
  }
}