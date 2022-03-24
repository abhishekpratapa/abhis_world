import { Component } from 'react';
import style from './index.module.scss';

import Particles from '../../components/Particles';
import Selected from '../../components/Selected';

interface HomeProps {}
interface HomeState {
  selected: number
}

class Home extends Component {
  state = {
    selected: -1
  }

  render() {
    const opacity = {
      "opacity": 0.0
    }
    if(this.state.selected >= 0) {
      opacity["opacity"] = 1.0
    }
  
    return (
      <div className={style.HomePage}>
        {this.state.selected < 0 && <Particles />}
        <div style={opacity}>
          <Selected selected={(this.state.selected >=0)?this.state.selected:0}/>
        </div>
        <div className={style.Selectors}>
          <div
            onMouseEnter={() => {
              this.setState({selected: 1})
            }}
            onMouseOut={() => {
              this.setState({selected: -1})
            }}>
            FACEBOOK
          </div>
          <div
            onMouseEnter={() => {
              this.setState({selected: 2})
            }}
            onMouseOut={() => {
              this.setState({selected: -1})
            }}>
            GOOGLE
          </div>
          <div
            onMouseEnter={() => {
              this.setState({selected: 3})
            }}
            onMouseOut={() => {
              this.setState({selected: -1})
            }}>
            INSTAGRAM
          </div>
          <div
            onMouseEnter={() => {
              this.setState({selected: 4})
            }}
            onMouseOut={() => {
              this.setState({selected: -1})
            }}>
            TWITTER
          </div>
          <div
            onMouseEnter={() => {
              this.setState({selected: 5})
            }}
            onMouseOut={() => {
              this.setState({selected: -1})
            }}>
            GITHUB
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
