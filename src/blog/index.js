import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Blog extends React.Component {
  render(){
    console.log(this.props);
    const path = this.props.match.path;
    return (
      <Router>
        <Switch>
          <Route path={`${path}/first_blog`}>
            My First Blog
          </Route>
          <Route exact path={`${path}/`}>
            Blog Home
          </Route>
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Blog;