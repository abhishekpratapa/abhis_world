import React from 'react';

import { ArticleType, ArticleTemplate } from "./ArticleTemplate"

export default class TestArticle extends ArticleTemplate {
  identifier() {
    return "test_article";
  }

  title() {
    return "Animation";
  }

  date() {
    return new Date("November 9 2019 11:36");
  }

  type() {
    return [
      ArticleType.CREATIVE,
      ArticleType.TECH,
      ArticleType.LEARNING,
      ArticleType.EXISTENTIAL,
      ArticleType.PERSONAL
    ];
  }

  content() {
    return (
      <div>
        Yeay Animation!
        <iframe className={"ArticleHypeAsset"}
                height={400}
                width={600}
                src="/animations/button_animation/button_animation.html" />
      </div>
    );
  }
} 