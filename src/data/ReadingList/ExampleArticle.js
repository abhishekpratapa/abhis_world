import React from 'react';

import {
  ReadingListArticleTemplate
} from '../ArticleTemplates';

import src from './assets/mythical_man_month.png';

export default class ExampleArticle extends ReadingListArticleTemplate {
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
        Reading Content
      </div>
    )
  }
}