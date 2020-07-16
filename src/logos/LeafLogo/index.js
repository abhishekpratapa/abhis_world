import React from 'react';
import style from './index.module.scss';

import leaf from '../../assets/leaf.svg';

class LeafLogo extends React.Component {
  render() {
    return (
      <div className={style.component}>
        <div className={style.svg_container}>
          <svg className={style.svg_image} width="40px" height="40px" viewBox="0 0 40 40" version="1.1">
    <title>Group 47</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-31.000000, -653.000000)">
            <g id="Group-47" transform="translate(32.000000, 654.000000)">
                <g id="Group-29">
                    <rect className={style.stroke_line} id="Rectangle" x="0" y="0" width="38" height="38"></rect>
                    <g id="Group-16" stroke="#CCCCCC">
                        <path className={style.stroke_line} d="M1.42108547e-14,1.95399252e-14 C7.94555779,0.991394002 13.2361662,2.88942355 15.8718253,5.69408865 C18.4394673,8.42637529 19.0964031,11.8989668 17.8426327,16.1118632 C18.7356355,17.4181868 19.4515369,18.7407228 19.9906925,20.0800133 C20.2885694,20.8199548 20.5546753,21.6201053 20.7890104,22.4804648 C21.1699501,21.7039563 21.6023381,21.0138518 22.0853139,20.4101321 C22.384231,20.0364857 22.738178,19.6513631 23.1471548,19.2547644 C22.3429933,16.1162126 22.9380117,13.5088652 24.9308664,11.4319445 C27.1011134,9.1701486 31.4574912,7.63950042 38,6.84 C37.5607342,12.5670116 36.2920121,16.6046364 34.1938337,18.9528744 C32.0956552,21.3011123 29.9649661,22.3097009 27.8017665,21.9786399 C27.8944374,20.4460249 28.0785843,19.1987582 28.3542072,18.2368397 C28.5074337,17.7020819 28.7498832,17.0233714 29.0815557,16.2007083 C27.5096681,17.7103847 26.3025354,19.1139237 25.46,20.4101321 C24.7257255,21.5397851 23.804759,22.8870759 23.1695152,24.5533947 C22.8797129,25.3135802 22.4560337,26.9071177 21.8984774,29.3340073 C22.0844333,31.7075151 22.131496,34.342466 22.04,37.24 C21.7290158,37.7466667 21.2349168,38 20.557703,38 C19.8804891,38 19.3612548,37.7466667 19,37.24 C18.7814913,30.5958483 18.1186854,25.5758912 17.0115823,22.1801288 C15.9366537,18.8830536 13.5947282,14.5156559 9.98580574,9.07793586 L9.65833659,8.82115829 C10.6942783,11.1691066 11.3796144,12.9394783 11.7143449,14.1322734 C12.0490754,15.3250685 12.2727128,16.8717003 12.3852572,18.7721687 C9.7581567,19.1826898 7.17053878,17.9320231 4.62240338,15.0201685 C2.07426798,12.1083138 0.533466851,7.10159099 1.42108547e-14,1.95399252e-14 Z" id="Combined-Shape"></path>
                    </g>
                </g>
                <g id="Group-44" transform="translate(4.000000, 3.000000)" stroke="#CCCCCC">
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
          <img src={leaf} />
        </div>
      </div>
    );
  }
}

export default LeafLogo;
