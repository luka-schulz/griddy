"use strict"

window.onload = function() {
  let canvas;
  let ctx;
  let musicPlayer;
  
  function init() {
    // determine the displays pixel ratio
    // HiDPI displays return values greater than 1
    const scaleFactor = window.devicePixelRatio;

    canvas = document.getElementById("canvas");

    // set the width and height of the canvas
    canvas.width = window.innerWidth * scaleFactor;
    canvas.height = window.innerHeight * scaleFactor;

    ctx = canvas.getContext("2d");

    // scale context by the device pixel ratio
    ctx.scale(scaleFactor, scaleFactor);
    
    document.onkeypress = checkKeystroke;
    
    clearBackground();
    Particle.ctx = ctx;
  }
  
  function draw() {
    clearBackground();
    requestAnimationFrame(draw);
  }
  
  init();
  draw();
}