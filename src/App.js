import React, { Component } from 'react';
import './App.css';

import LandingPage from './Pages/LandingPage';
import LandingTransition from './Transitions/LandingTransition';
import BlogPage from './Pages/BlogPage';
import ArticlePage from './Pages/ArticlePage';

import Articles from "./registry";

import {
  withRouter
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  article_action(identifier) {
    this.props.history.push(process.env.PUBLIC_URL + '/' + identifier);
  }

  reset_action() {
    this.props.history.push(process.env.PUBLIC_URL + '/blog');
  }

  render() {
    return (
      <div className="App">
        <BlogPage currentPage={this.props.currentPage}
                  article_action={this.article_action.bind(this)}
                  articles={Articles} />
        <LandingPage currentPage={this.props.currentPage}
                     reset_action={this.reset_action.bind(this)}/>
        <LandingTransition currentPage={this.props.currentPage}/>
        <ArticlePage currentPage={this.props.currentPage}
                     reset_action={this.reset_action.bind(this)}
                     identifier={this.props.identifier}
                     article={Articles}/>
      </div>
    );
  }
}

export default withRouter(App);
