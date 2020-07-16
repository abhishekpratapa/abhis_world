import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import IdeasPage from '../Pages/Ideas';
import IdeasContainer from '../Pages/IdeasContainer';

import { IdeaArticles } from '../data/registry';

class Ideas extends React.Component {
  backMenu() {
    this.props.history.push("/menu");
  }


  addRoutes(path) {
    return IdeaArticles.map((x) => 
      <Route path={`${path}/${x.extension()}`}
             key={`${path}/${x.extension()}`}
             component={(props) =>  <IdeasContainer {...props}
                                                    path={path}
                                                    article={x} /> } />
    );
  }

  render(){
    const path = this.props.match.path;
    return (
      <Router>
        <Switch>
          <Route exact path={`${path}/`}
                 component={(props) => <IdeasPage {...props} backMenu={this.backMenu.bind(this)} 
                                                             articles={IdeaArticles}/>} />
          
          {this.addRoutes(path)}
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Ideas;