import React from 'react';

import {
  IdeaArticleTemplate
} from '../ArticleTemplates';

export default class ExampleArticle extends IdeaArticleTemplate {
  extension() {
    return "example_article";
  }

  title() {
    return "Example Article";
  }

  date() {
    return new Date("December 15 2019 12:18");
  }

  content() {
    return (
      <div>
      	Idea Content
      </div>
    )
  }
}