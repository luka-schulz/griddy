const colors = {
  WHITE: "#FAFAFA",
  BLACK: "#121212",
  RED: "#FF003D",
  YELLOW: "#FFD500",
  BLUE: "#0097FF",
  GREEN: "#00C266",
  ORANGE: "#FF2400",
}

let center = {
  X: window.innerWidth/2,
  Y: window.innerHeight/2
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearBackground() {
  ctx.fillStyle = colors.BLACK;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkKeystroke(event) {
  event = event || window.event; // IE
  
  if(event.keyCode === 32 || event.which === 32) {
    toggleVisualizer();
  }
  else if(event.keyCode === 99 || event.which === 99) {
    toggleControls();
  }
  else {
    console.log("Press 'SPACE' to begin.")
    console.log("Press 'c' to toggle controls.")
  }
};

function toggleVisualizer() {
  console.log( "Space" )
}

function toggleControls(keystroke) {
  console.log( "c" )
}