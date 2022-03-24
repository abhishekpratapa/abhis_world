import { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import style from './App.module.scss';

import Home from './pages/Home';
import Error from './pages/404';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    )
  }
}

export default App;
