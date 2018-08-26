var mouse = {x: 0, y: 0};
var colorSelected = "black";
var strokeThickness = 5;
var eraserThickness = 1;
var isEraserBtnTapped = false;

var colorList = ['black', 'blue', '#ff00ff', '#008000', 'red', 'yellow', 
                 '#00FFFF', '#FFB6C1', '#FFA500', '#C0C0C0'];

document.getElementById('colorTable').addEventListener('click', function(ev) {
  for (i = 0; i < colorList.length; ++i) {
    var currColor = colorList[i];
    if (ev.target === document.getElementById(currColor)) {
      colorSelected = currColor;
      break;
    }
  }
}, false);

var strokeSizeTextfield = document.getElementById('strokeSize');
strokeSizeTextfield.addEventListener('click', function(ev) {
  strokeThickness = parseInt(strokeSizeTextfield.value);
  initStrokeThickness(strokeThickness);
}, false);

strokeSizeTextfield.addEventListener("change", function() {
    strokeThickness = strokeSizeTextfield.value;
});

var eraserSizeTextfield = document.getElementById('eraserSize');
eraserSizeTextfield.addEventListener('click', function(ev) {
  eraserThickness = parseInt(eraserSizeTextfield.value);
  if (isEraserBtnTapped) {
    initStrokeThickness(eraserThickness);
  }
}, false);

eraserSizeTextfield.addEventListener("change", function() {
    eraserThickness = eraserSizeTextfield.value;
});

var eraserBtn = document.getElementById('erase');
eraserBtn.addEventListener('click', function() {
  isEraserBtnTapped = !isEraserBtnTapped;
  if (isEraserBtnTapped) {
    eraserBtn.style.backgroundColor = "blue";
    colorSelected = "white";
    initStrokeThickness(eraserThickness);
  } else {
    eraserBtn.style.backgroundColor = "#555555";
    colorSelected = "black";
  }
}, false);

document.getElementById('clear').addEventListener('click', function() {
  openModal();
  isEraserBtnTapped = false;
  eraserBtn.style.backgroundColor = "#555555";
}, false);

var saveLink = document.getElementById('save');
saveLink.addEventListener('click', function() {
  isEraserBtnTapped = false;
  eraserBtn.style.backgroundColor = "#555555";
  
  saveLink.href = canvas.toDataURL("image/png");
  saveLink.download = "image.png";
}, false);
