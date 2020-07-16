import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ReadingListPage from '../Pages/ReadingListPage';
import ReadingListContainerPage from '../Pages/ReadingListContainerPage';

import { ReadingListArticles } from '../data/registry';

class ReadingList extends React.Component {
  backMenu() {
    this.props.history.push("/menu");
  }

  addRoutes(path) {
    return ReadingListArticles.map((x) => 
      <Route path={`${path}/${x.extension()}`}
             key={`${path}/${x.extension()}`}
             component={(props) =>  <ReadingListContainerPage {...props}
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
                 component={(props) => <ReadingListPage {...props} backMenu={this.backMenu.bind(this)}
                                                                   articles={ReadingListArticles} />}/>
          {this.addRoutes(path)}
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default ReadingList;