import React from 'react';
import style from './index.module.scss';

import lightbulb from '../../assets/lightbulb.svg';

class LightBulbLogo extends React.Component {
  render() {
    return (
      <div className={style.component}>
        <div className={style.svg_container}>
          <svg className={style.svg_image} width="33px" height="38px" viewBox="0 0 33 38" version="1.1">
    <title>Group 53</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-49.000000, -426.000000)" stroke="#CCCCCC">
            <g id="Group-53" transform="translate(50.000000, 427.000000)">
                <g id="Group-44" transform="translate(0.000000, 1.000000)">
                    <g id="Group-42" transform="translate(0.000000, 1.000000)">
                        <circle className={style.stroke_line} id="Oval" cx="15.5" cy="15.5" r="15.5"></circle>
                    </g>
                    <g id="Group-43" transform="translate(6.000000, 7.000000)">
                        <circle className={style.stroke_line} id="Oval" cx="9.5" cy="9.5" r="9.5"></circle>
                    </g>
                    <g id="Group-40" transform="translate(1.000000, 1.000000)" stroke-linecap="square">
                        <path className={style.stroke_line} d="M0.5,0.5 L29.5,31.5" id="Line-13"></path>
                    </g>
                    <g id="Group-41" stroke-linecap="square">
                        <path className={style.stroke_line} d="M1,1 L30,32" id="Line-13" transform="translate(15.500000, 16.500000) scale(-1, 1) translate(-15.500000, -16.500000) "></path>
                    </g>
                </g>
                <g id="Group-8" transform="translate(4.000000, 0.000000)">
                    <g id="Group-52" transform="translate(5.000000, 26.000000)">
                        <circle className={style.stroke_line} id="Oval" cx="6" cy="6" r="4"></circle>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="0" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="1" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="2" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="3" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="4" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="5" width="12" height="1" rx="0.5"></rect>
                        <rect className={style.stroke_line} id="Rectangle" x="0" y="6" width="12" height="1" rx="0.5"></rect>
                    </g>
                    <path className={style.stroke_line} d="M11.3793103,30.982988 C12.5410426,30.982988 14.4099671,31.3055277 15.385799,29.141769 C15.9953182,27.7902532 16.1666613,24.3130918 16.5517738,22.8335062 C16.7707951,21.9920359 16.9340178,20.4713424 18.3584681,18.9637673 C20.473205,16.7256236 22,14.0876599 22,10.8779772 C22,4.8702363 17.0751322,0 11,0 C4.92486775,0 0,4.8702363 0,10.8779772 C0,13.8506392 1.13631318,16.6896903 3.16002791,18.5082704 C4.40940034,19.6309996 4.86903877,20.0187436 5.79289092,21.9920359 C6.53811496,23.5837893 6.41783849,27.48161 7.23186324,29.141769 C8.27440194,31.2679699 10.2732003,30.982988 11.3793103,30.982988 Z" id="Oval"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
        </div>
        <div className={style.logo_container}>
          <img src={lightbulb} />
        </div>
      </div>
    );
  }
}

export default LightBulbLogo;
