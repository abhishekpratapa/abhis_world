import React from 'react';

import {
  LearningTopicTemplate
} from '../../ArticleTemplates';

export default class TheBeginning extends LearningTopicTemplate {
  extension() {
    return "the_beginning";
  }

  title() {
    return "The Beginning";
  }

  content() {
    return (
      <div>
        Hello. You're really cool
      </div>
    )
  }
}