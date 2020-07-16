import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Ideas from './ideas';
import Learning from './learning';
import OneDayBuilds from './one_day_builds';
import Projects from './projects';
import ReadingList from './reading_list';

import LandingPage from './Pages/LandingPage';
import MenuPage from './Pages/MenuPage';

import {
  BuildArticleTemplate,
  IdeaArticleTemplate,
  LearningTopicArticleTemplate,
  LearningTopicTemplate,
  ReadingListArticleTemplate
} from './data/ArticleTemplates';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path={"/ideas"}
                 component={(props) =>  <Ideas {...props}/>} />
          <Route path={"/learning"}
                 component={(props) => <Learning {...props}/>} />
          <Route path={"/one_day_builds"}
                 component={(props) =>  <OneDayBuilds {...props}/>} />
          <Route path={"/projects"}
                 component={(props) =>  <Projects {...props}/>} />
          <Route path={"/reading_list"}
                 component={(props) =>  <ReadingList {...props}/>} />
          <Route path={"/menu"}
                 component={(props) =>  <MenuPage {...props} />} />
          <Route exact path={"/"}
                 component={(props) => <LandingPage {...props} /> } />
          <Route path={"/"}>
            <div>
              404 Error
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;