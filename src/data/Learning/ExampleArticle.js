import React from 'react';

import {
  LearningTopicArticleTemplate
} from '../ArticleTemplates';

import TheBeginning from "./ExampleSubArticles/TheBeginning";

export default class ExampleArticle extends LearningTopicArticleTemplate {
  extension() {
    return "example_article";
  }

  title() {
    return "How a Computer Works";
  }

  subtopic() {
    return [
      new TheBeginning()
    ];
  }
}