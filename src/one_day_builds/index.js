import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import OneDayBuildsPage from '../Pages/OneDayBuilds';
import OneDayBuildsContainer from '../Pages/OneDayBuildsContainer';

import {
  OneDayBuildArticles
} from '../data/registry';

class OneDayBuilds extends React.Component {
  backMenu() {
    this.props.history.push("/menu");
  }

  addRoutes(path) {
    return OneDayBuildArticles.map((x) => 
      <Route path={`${path}/${x.extension()}`}
             key={`${path}/${x.extension()}`}
             component={(props) =>  <OneDayBuildsContainer {...props}
                                                           path={path}
                                                           article={x} /> } />
    );
  }
  
  render() {
    const path = this.props.match.path;
    return (
      <Router>
        <Switch>
          <Route exact path={`${path}/`}
                 component={(props) => <OneDayBuildsPage {...props}
                                                         backMenu={this.backMenu.bind(this)}
                                                         articles={OneDayBuildArticles}/>} />
                                                         
          {this.addRoutes(path)}
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default OneDayBuilds;