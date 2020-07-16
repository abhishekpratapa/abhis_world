import React from 'react';
import style from './index.module.scss';

import blog from '../../assets/blog.svg';

class BlogLogo extends React.Component {
  render() {
    return (
      <div className={style.component}>
        <div className={style.svg_container}>
          <svg className={style.svg_image} width="37px" height="39px" viewBox="0 0 37 39" version="1.1">
            <title>Group 48</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-16.000000, -293.000000)" stroke="#CCCCCC">
                    <g id="Group-48" transform="translate(17.000000, 294.000000)">
                        <g id="Group-44" transform="translate(1.000000, 2.000000)">
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
                        <g id="Group-4">
                            <rect id="Rectangle" x="0" y="0" width="30" height="37" rx="5"></rect>
                            <g id="Group-2" transform="translate(5.000000, 8.000000)" stroke-linecap="round" stroke-linejoin="round">
                                <path className={style.stroke_line} d="M0.476190476,0.477272727 L19.5238095,0.477272727" id="Line-2"></path>
                                <path className={style.stroke_line} d="M0.476190476,7.15909091 L19.5238095,7.15909091" id="Line-2"></path>
                                <path className={style.stroke_line} d="M0.476190476,13.8409091 L19.5238095,13.8409091" id="Line-2"></path>
                                <path className={style.stroke_line} d="M0.476190476,20.5227273 L12.8571429,20.5227273" id="Line-2"></path>
                            </g>
                            <g id="Group-3" transform="translate(27.136218, 21.753910) rotate(30.000000) translate(-27.136218, -21.753910) translate(24.136218, 8.753910)">
                                <path className={style.stroke_line} d="M5.85365854,2.92105263 C5.85365854,1.30779981 4.54327244,0 2.92682927,0 C1.3103861,0 0,1.30779981 0,2.92105263" id="Oval"></path>
                                <polygon className={style.stroke_line} id="Triangle" transform="translate(2.926829, 22.394737) scale(1, -1) translate(-2.926829, -22.394737) " points="2.92682927 19.4736842 5.85365854 25.3157895 0 25.3157895"></polygon>
                                <polygon className={style.stroke_line} id="Triangle" transform="translate(2.926829, 24.342105) scale(1, -1) translate(-2.926829, -24.342105) " points="2.92682927 23.3684211 3.90243902 25.3157895 1.95121951 25.3157895"></polygon>
                                <rect className={style.stroke_line} id="Rectangle" x="0" y="2.92105263" width="5.85365854" height="16.5526316"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        </div>
        <div className={style.logo_container}>
          <img src={blog} />
        </div>
      </div>
    );
  }
}

export default BlogLogo;
