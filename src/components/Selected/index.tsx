import { Component } from 'react';
import style from './index.module.scss';
import reset from './assets/reset.png'
import mem from './assets/mem.png'

const FRAGMENT: string = `
#ifdef GL_ES
  precision highp float;
#endif
void main(void) {
  gl_FragColor = vec4(0.631, 0.07, 0.165, 1.0);
}`;

const VERTEX: string = `
attribute vec3 vertexPosition;

uniform mat4 modelViewMatrix;
uniform mat4 perspectiveMatrix;

 void main(void) {
  gl_Position = perspectiveMatrix * modelViewMatrix * vec4(  vertexPosition, 1.0);
}`;


var canvas, gl: any,
    ratio,
    cw,
    ch,
    colorLoc,
    drawType: number,
    numLines = 100000;
    var target: Array<any> = [];
    var id;
    var isScroll = false;

    var imageURLArr = [reset,
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/facebook.png",
                   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/google.png",
                   mem,
                   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/twitter.png", 
                   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/github.png",

                   ]             
    var perspectiveMatrix
    var randomTargetXArr: any[] | Iterable<number> = [], randomTargetYArr: any[] | Iterable<number> = [];
    drawType = 0;
    var count = 0;

var cn = 0;

var coefficient = .4;
var targetCoefficient = .01;

var vertices: any,
    velocities,
    freqArr,
    thetaArr,
    velThetaArr,
    velRadArr,
    boldRateArr;

interface SelectedProps {
  selected: number
}

class Selected extends Component<SelectedProps, {}> {
  componentDidMount() {
    this.setupCanvas();
  }

  componentDidUpdate(prevProps: { selected: number; }) {
    // Typical usage (don't forget to compare props):
    if (this.props.selected !== prevProps.selected) {
      if(isScroll) return;
      isScroll = true;

      var rotate;
      var transY;
      drawType = this.props.selected;
      rotate = -90;
      transY = 15;
      coefficient = .3;
      randomTargetXArr = [];
      randomTargetYArr = [];

      for (var ii = 0; ii < numLines; ii++) {
        var randomPos = target[drawType][parseInt(target[drawType].length * Math.random() + "", 10)];
        (randomTargetXArr as any).push(randomPos.x);
        (randomTargetYArr as any).push(randomPos.y);
      }

      vertices = new Float32Array(vertices);
      randomTargetXArr = new Float32Array(randomTargetXArr);
      randomTargetYArr = new Float32Array(randomTargetYArr);

      if (this.props.selected > 0) {
        setTimeout(function(){
          isScroll = false;
        }, 600);
      } else {
        isScroll = false;
      }
    }
  }

  setupCanvas() {
    (window as any).cancelRequestAnimFrame = (function () {
      return window.cancelAnimationFrame ||
        (window as any).webkitCancelRequestAnimationFrame ||
        (window as any).mozCancelRequestAnimationFrame ||
        (window as any).oCancelRequestAnimationFrame ||
        (window as any).msCancelRequestAnimationFrame ||
        clearTimeout
    })();

    (window as any).onload = this.init();
  }

  init = () => {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');

    for (var ii = 0; ii < imageURLArr.length; ii++) {
        var image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = imageURLArr[ii];

        image.onload = this.onLoadImageHandler.bind(this, image, canvas, ctx, ii);
    }
  };

  onLoadImageHandler = (image: any, canvas: any, ctx: any, number: any) => {
    var size = image.width;
    canvas.width = size;
    canvas.height = size;

    ctx.drawImage(image, 0, 0)
    var imageData = ctx.getImageData(0, 0, size, size);

    var data = imageData.data;
    target[number] = [];

    for (var ii = 0; ii < data.length; ii += 4) {
        if (data[ii] == 0) {
            var pixNumber = ii / 4;
            var xPos = pixNumber % size;
            var yPos = parseInt(pixNumber / size + "", 10);
            var pos = {x: xPos / size - .5, y: -yPos / size + 0.5};
            target[number].push(pos);
        }

    }

    count++;

    if(count == imageURLArr.length){
      this.loadScene();
    }
  }

  loadScene = () => {
    canvas = document.getElementById("c")!;
    gl = (canvas as any).getContext("experimental-webgl");
  
    if (!gl) {
        alert("There's no WebGL context available.");
        return;
    }

    cw = window.innerWidth;
    ch = window.innerHeight;
    (canvas as any).width = cw;
    (canvas as any).height = ch;
    gl.viewport(0, 0, (canvas as any).width, (canvas as any).height);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, VERTEX);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        alert("Couldn't compile the vertex shader");
        gl.deleteShader(vertexShader);
        return;
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, FRAGMENT);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        alert("Couldn't compile the fragment shader");
        gl.deleteShader(fragmentShader);
        return;
    }

    gl.program = gl.createProgram();
    gl.attachShader(gl.program, vertexShader);
    gl.attachShader(gl.program, fragmentShader);
    gl.linkProgram(gl.program);
    if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS)) {
        alert("Unable to initialise shaders");
        gl.deleteProgram(gl.program);
        gl.deleteProgram(vertexShader);
        gl.deleteProgram(fragmentShader);
        return;
    }
    gl.useProgram(gl.program);
    var vertexPosition = gl.getAttribLocation(gl.program, "vertexPosition");
    gl.enableVertexAttribArray(vertexPosition);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clearDepth(1.0);

    gl.enable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    // ------------------

    this.setup();

    // ------------------

    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var fieldOfView = 30.0;
    var aspectRatio = (canvas as any).width / (canvas as any).height;
    var nearPlane = 1.0;
    var farPlane = 10000.0;
    var top = nearPlane * Math.tan(fieldOfView * Math.PI / 360.0);
    var bottom = -top;
    var right = top * aspectRatio;
    var left = -right;

    var a = (right + left) / (right - left);
    var b = (top + bottom) / (top - bottom);
    var c = (farPlane + nearPlane) / (farPlane - nearPlane);
    var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
    var x = (2 * nearPlane) / (right - left);
    var y = (2 * nearPlane) / (top - bottom);
    perspectiveMatrix = [
        x, 0, a, 0,
        0, y, b, 0,
        0, 0, c, d,
        0, 0, -1, 0
    ];

    var modelViewMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    var vertexPosAttribLocation = gl.getAttribLocation(gl.program, "vertexPosition");
    gl.vertexAttribPointer(vertexPosAttribLocation, 3.0, gl.FLOAT, false, 0, 0);
    var uModelViewMatrix = gl.getUniformLocation(gl.program, "modelViewMatrix");
    var uPerspectiveMatrix = gl.getUniformLocation(gl.program, "perspectiveMatrix");
    gl.uniformMatrix4fv(uModelViewMatrix, false, new Float32Array(perspectiveMatrix));
    gl.uniformMatrix4fv(uPerspectiveMatrix, false, new Float32Array(modelViewMatrix));
    
    const drawScene = () => {
      this.draw();
  
      gl.lineWidth(1);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);
  
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
      gl.drawArrays(gl.LINES, 0, numLines);
      gl.flush();
    }

    function animate() {
      id = requestAnimationFrame(animate);
      drawScene();
    }

    animate();

    // window.addEventListener("mousewheel", onScrollEventHandler);
    // window.addEventListener("DOMMouseScroll", onScrollEventHandler);

    // window.addEventListener("resize", onResizeHandler);
  }

  setup = () => {

    vertices = [];

    // -------------------------------

    if(this.props.selected < 0) {
      drawType = 3;
    } else {
      drawType = this.props.selected;
    }

    for (var ii = 0; ii < numLines; ii++) {
        vertices.push(0, 0, 1.83);
        vertices.push(0, 0, 1.83);

        var randomPos = target[drawType][parseInt(target[drawType].length * Math.random() + "", 10)];
        (randomTargetXArr as any).push(randomPos.x);
        (randomTargetYArr as any).push(randomPos.y);
    }

    vertices = new Float32Array(vertices);
    randomTargetXArr = new Float32Array(randomTargetXArr);
    randomTargetYArr = new Float32Array(randomTargetYArr);

}

draw = () => {
  cn += .1;

  var i, n = vertices.length, p, bp;
  var px, py;
  var pTheta;
  var rad;
  var num;

  coefficient += (targetCoefficient - coefficient) * .1;


  for (i = 0; i < numLines * 2; i += 2) {
      count += .3;
      bp = i * 3;
      // copy old positions

      vertices[bp] = vertices[bp + 3];
      vertices[bp + 1] = vertices[bp + 4];

      num = parseInt(i / 2 + "", 10);
      //pTheta = thetaArr[num];

      //rad = velRadArr[num];// + Math.cos(pTheta + i * freqArr[i]) *  boldRateArr[num];

      //pTheta = pTheta + velThetaArr[num];
      //thetaArr[num] = pTheta;
      //var pos = target[parseInt(target.length * Math.random())];
      var targetPosX = (randomTargetXArr as any)[num];
      var targetPosY = (randomTargetYArr as any)[num];
      //va
      px = vertices[bp + 3];
      px += (targetPosX - px) * coefficient + (Math.random() - .5) * coefficient;
      vertices[bp + 3] = px;


      py = vertices[bp + 4];
      py += (targetPosY - py) * coefficient + (Math.random() - .5) * coefficient;
      vertices[bp + 4] = py;
  }
}

  render() {
    return (
      <div className={style.OpenGLRenderer}>
        <canvas id="c" className={style.CanvasElement}></canvas>
      </div>
    )
  }
}

export default Selected;
