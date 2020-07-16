import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ProjectsPage from '../Pages/Projects';
import ProjectsContainer from '../Pages/ProjectsContainer';

import {
  ProjectsArticles
} from '../data/registry';

class Projects extends React.Component {
  backMenu() {
    this.props.history.push("/menu");
  }
  
  addRoutes(path) {
    return ProjectsArticles.map((x) => 
      <Route path={`${path}/${x.extension()}`}
             key={`${path}/${x.extension()}`}
             component={(props) =>  <ProjectsContainer {...props}
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
                 component={(props) => <ProjectsPage {...props} backMenu={this.backMenu.bind(this)}
                                                                articles={ProjectsArticles}/>} />
          {this.addRoutes(path)}
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Projects;