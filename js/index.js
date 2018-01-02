"use strict"
let analyser;
let mouse;

window.onload = function() {
  function setupAnalyser() {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    let audioPlayer = document.querySelector("audio");
    audioPlayer.src = "./audio/all-night.mp3";
    
    let musicSource = audioCtx.createMediaElementSource(audioPlayer);
    
    let gainNode = audioCtx.createGain(); // the gain node adjusts volume
    musicSource.connect(gainNode); // connect gain node to the music source
    
    analyser = audioCtx.createAnalyser(); // create the audio analyser
    analyser.fftSize = 1024; // 1024 -> 512 bins
    
    gainNode.connect(analyser); // analyser -> gain node -> music source -> audio player
    gainNode.connect(audioCtx.destination);
    
    app.animate();
  }
  
  app.init();
  
  setupAnalyser();
}