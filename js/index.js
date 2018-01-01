"use strict"

window.onload = function() {
  let canvas;
  let ctx;
  let state = false;
  
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
    
    document.querySelector( "audio" ).src = "./audio/all-night.mp3";
  }
  
  function setupAnalyser() {
    
  }
  
  function clearBackground() {
    ctx.fillStyle = colors.BLACK;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  init();
}