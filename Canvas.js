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

var mouseUp = 0, mouseDown = 0;

function initCanvas() {
  var canvas = document.getElementById('myCanvas');
  canvas.style.cursor = "crosshair";

  canvas.style.left = "200px";
  canvas.style.top = "3px";
  canvas.style.position = "absolute";
  canvas.width = 1000;
  canvas.height = 580;
  canvas.fillStyle = "#FFFFFF";

  canvas.addEventListener('mousedown', tapDown, false);
  canvas.addEventListener('mouseup', tapUp, false);
  canvas.addEventListener('mousemove', tapAndMove, false);
  
  return canvas;
}

function tapDown() {
  mouseDown = 1;
  drawDot(ctx, mouse.x, mouse.y, strokeThickness);
}

function tapUp() {
  mouseDown = 0;
}

function tapAndMove(e) {
  // if (mouseDown == 1) {
    // drawDot(ctx, mouse.x, mouse.y, strokeThickness);
  // }
}

function drawDot(ctx, x, y, size) {
  ctx.fillStyle = colorSelected;

  ctx.beginPath();
  ctx.arc(x, y, size * 0.5, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function initStrokeColor(color) {
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = colorSelected;
}

function initStrokeThickness(markerThickness) {
  var ctx = canvas.getContext('2d');
  ctx.lineWidth = markerThickness;
}

function initCanvasContext(canvas) {
  var ctx = canvas.getContext('2d');
  ctx.lineWidth = strokeThickness;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineJoin = 'bevel'; // {'miter', 'round', or 'bevel'}
  ctx.lineCap = 'butt'; // {'butt', 'round', or 'square'}
  ctx.strokeStyle = colorSelected;
  return ctx;
}

var onPaint = function() {
  ctx.lineTo(mouse.x, mouse.y); // draw a line from the start & end pts
  ctx.stroke(); // make the line visible
};
