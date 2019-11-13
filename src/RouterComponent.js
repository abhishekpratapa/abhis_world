import React, { Component } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import App from './App';

import Articles from "./registry";

class RouterComponent extends Component {

  renderArticleRoutes() {
    var self = this;
    return Articles.map((x) => {
      var identifier = x.identifier();
      var route_path = process.env.PUBLIC_URL + "/" + x.identifier();

      return (
        <Route path={route_path} >
          <App currentPage={2}
               identifier={identifier}/>
        </Route>
      );
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={ process.env.PUBLIC_URL + "/blog" } >
            <App currentPage={1} />
          </Route>
          {
            this.renderArticleRoutes()
          }
          <Route path={ process.env.PUBLIC_URL + "/"} >
            <App currentPage={0}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterComponent;