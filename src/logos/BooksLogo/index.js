import React from 'react';
import style from './index.module.scss';

import books from '../../assets/books.svg';

class BooksLogo extends React.Component {
  render() {
    return (
      <div className={style.component}>
        <div className={style.svg_container}>
          <svg className={style.svg_image} width="38px" height="33px" viewBox="0 0 38 33" version="1.1">
    <title>Group 47</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-46.000000, -520.000000)">
            <g id="Group-47" transform="translate(46.000000, 518.000000)">
                <g id="Group-28">
                    <rect className={style.stroke_line} id="Rectangle" x="0" y="0" width="38" height="38"></rect>
                    <g id="Group-23" transform="translate(1.000000, 3.000000)" stroke="#CCCCCC" stroke-linejoin="round">
                        <g id="Group-9" transform="translate(0.000000, 0.056818)">
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 13.1892775 18.6508306 5.32720853 36.5869227 9.97944758 18.6508306 18.8682217"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 7.94789819 18.9382636 0.0858292231 18.9382636 5.32720853 0.031824177 13.1892775"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="-1.0658141e-14 8.00893305 18.6190064 -2.13162821e-14 36.5869227 5.32720853 18.2775493 13.4976504"></polygon>
                        </g>
                        <g id="Group-9" transform="translate(0.000000, 12.056818)">
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 13.1892775 18.6508306 5.32720853 36.5869227 9.97944758 18.6508306 18.8682217"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 7.94789819 18.9382636 0.0858292231 18.9382636 5.32720853 0.031824177 13.1892775"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="-1.0658141e-14 8.00893305 18.6190064 -2.13162821e-14 36.5869227 5.32720853 18.2775493 13.4976504"></polygon>
                        </g>
                        <g id="Group-9" transform="translate(0.000000, 6.056818)">
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 13.1892775 18.6508306 5.32720853 36.5869227 9.97944758 18.6508306 18.8682217"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="0.031824177 7.94789819 18.9382636 0.0858292231 18.9382636 5.32720853 0.031824177 13.1892775"></polygon>
                            <polygon className={style.stroke_line} id="Rectangle" points="-1.0658141e-14 8.00893305 18.6190064 -2.13162821e-14 36.5869227 5.32720853 18.2775493 13.4976504"></polygon>
                        </g>
                    </g>
                </g>
                <g id="Group-44" transform="translate(4.000000, 2.000000)" stroke="#CCCCCC">
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
            </g>
        </g>
    </g>
</svg>
        </div>
        <div className={style.logo_container}>
          <img src={books} />
        </div>
      </div>
    );
  }
}

export default BooksLogo;
