import React, { Component } from 'react';
import './App.css';

import LandingPage from './Pages/LandingPage';
import LandingTransition from './Transitions/LandingTransition';
import BlogPage from './Pages/BlogPage';
import ArticlePage from './Pages/ArticlePage';

import Articles from "./registry";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      identifier:null
    }
  }

  article_action(identifier) {
    this.setState({
      currentPage: 2,
      identifier: identifier
    });
  }

  reset_action() {
    this.setState({
      currentPage: 1
    });
  }

  updatePage(index) {
    this.setState({
      currentPage: index
    });
  }

  render() {
    return (
      <div className="App">
        <BlogPage currentPage={this.state.currentPage}
                  updatePage={this.updatePage.bind(this)}
                  article_action={this.article_action.bind(this)}
                  articles={Articles} />
        <LandingPage currentPage={this.state.currentPage}
                     updatePage={this.updatePage.bind(this)}/>
        <LandingTransition currentPage={this.state.currentPage}/>
        <ArticlePage currentPage={this.state.currentPage}
                     updatePage={this.updatePage.bind(this)}
                     reset_action={this.reset_action.bind(this)}
                     identifier={this.state.identifier}
                     article={Articles}/>
      </div>
    );
  }
}

export default App;
