function registerEvents(){
  canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);

  canvas.addEventListener('mousedown', function(e) {
    initStrokeColor();
    
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y); // position the context point
    canvas.addEventListener('mousemove', onPaint, false);
  }, false);

  canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
  }, false);
}

function initCanvas() {
  var canvas = document.getElementById('myCanvas');
  canvas.style.left = "200px";
  canvas.style.top = "3px";
  canvas.style.position = "absolute";
  canvas.width = 1000;
  canvas.height = 580;
  canvas.fillStyle = 'white';

  return canvas;
}

function initStrokeColor() {
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = document.getElementById("colourDropDown").value;
}

function initCanvasContext(canvas) {
  var ctx = canvas.getContext('2d');
  ctx.lineWidth = 1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineJoin = 'miter'; // {'miter', 'round', or 'bevel'}
  ctx.lineCap = 'round'; // {'butt', 'round', or 'square'}
  ctx.strokeStyle = document.getElementById("colourDropDown").value;
  
  return ctx;
}

var onPaint = function() {
  ctx.lineTo(mouse.x, mouse.y); // draw a line from the start & end pts
  ctx.stroke(); // make the line visible
};
