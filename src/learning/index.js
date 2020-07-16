import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import LearningPage from '../Pages/Learning';
import LearningContainer from '../Pages/LearningPage';
import LearningRender from '../Pages/LearningContainer';

import {
  LearningArticles
} from '../data/registry';

class Learning extends React.Component {
  backMenu() {
    this.props.history.push("/menu");
  }

  backArticle(extension) {
    window.location.href = "learning/" + extension
  }

  addSubRoutes(path, topic) {
    return topic.subtopic().map((x) => {
      return (<Route path={`${path}/${topic.extension()}/${x.extension()}`}
                     key={`${path}/${topic.extension()}/${x.extension()}`}
                     component={(props) =>  <LearningRender {...props}
                                              article={x}
                                              back={this.backArticle.bind(this)}
                                              extension={topic.extension()}
                                              title={x.title()} />}/>);
    });
  }

  addRoutes(path) {
    return LearningArticles.map((x) => {
      var routes = this.addSubRoutes(path, x);
      routes.push((<Route path={`${path}/${x.extension()}`}
                     key={`${path}/${x.extension()}`}
                     component={(props) =>  <LearningContainer {...props}
                                              articles={x.subtopic()}
                                              title={x.title()} />}/>));
      console.log(routes);
      return routes;
    });
  }

  render() {
    const path = this.props.match.path;
    return (
      <Router>
        <Switch>
          <Route exact path={`${path}/`}
                 component={(props) => <LearningPage {...props}
                                         backMenu={this.backMenu.bind(this)}
                                         articles={LearningArticles}/>}/>
          {this.addRoutes(path)}
          <Route path={`${path}/`}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Learning;