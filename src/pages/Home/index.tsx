import { Component } from 'react';
import style from './index.module.scss';

import Particles from '../../components/Particles';

class Home extends Component {
  render() {
    return (
      <div className={style.HomePage}>
        <Particles />
      </div>
    )
  }
}

export default Home;
