import { Component } from 'react';
import style from './index.module.scss';

// https://codepen.io/kenjiSpecial/pen/wavooR
class Particles extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.wrap}>
          {
            Array.from(Array(600).keys()).map(() => 
              <div className={style.c}>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Particles;
