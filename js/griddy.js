let app = {};
app.init = init;
app.animate = animate;

function init() {
  let canvas;
  let ctx;
  let state = false;
  
  const scaleFactor = window.devicePixelRatio;

  canvas = document.getElementById("canvas");

  // set the width and height of the canvas
  canvas.width = window.innerWidth * scaleFactor;
  canvas.height = window.innerHeight * scaleFactor;

  ctx = canvas.getContext("2d");

  // scale context by the device pixel ratio
  ctx.scale(scaleFactor, scaleFactor);

  document.onkeypress = checkKeystroke;

  // clearBackground();
  Particle.ctx = ctx;
};

function draw() {}

function animate() {

};

var guiControls = function() {
  this.song = "All Day";
  this.volume = 100;
  this.bass = 0;
  this.circleColor = "#FFFFFF";
  this.circleSize = 10;
  this.backgroundColor = "#121212";
  this.adamMode = false;
  this.psychadelicMode = false;
};

function clearBackground() {
  ctx.fillStyle = colors.BLACK;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
