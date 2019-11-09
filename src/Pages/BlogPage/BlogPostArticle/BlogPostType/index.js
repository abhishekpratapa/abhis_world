import React, { Component } from 'react';
import './index.css';

class BlogPostType extends Component {
  classType() {
    if (this.props.type == "creative") {
      return "BlogPostTypeCreative"
    } else if (this.props.type == "tech") {
      return "BlogPostTypeTech"
    } else if (this.props.type == "learning") {
      return "BlogPostTypeLearning"
    } else if (this.props.type == "existential") {
      return "BlogPostTypeExistential"
    } else {
      return "BlogPostTypePersonal"
    }
  }
  render() {
    return (
      <div className={`BlogPostType ${this.classType()}`}>
      </div>
    );
  }
}

export default BlogPostType;