var mouse = {x: 0, y: 0};

// bind event handler to clear button
document.getElementById('clear').addEventListener('click', function() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
}, false);

/*
function loadImage(ctx, imgSrc) {
  var imageObj = new Image();
  imageObj.onload = function() {
    ctx.drawImage(imageObj, 69, 50);
  };
  imageObj.src = imgSrc;
}

var fileUploadBtn = document.getElementById('fileInput');
fileUploadBtn.addEventListener('click', function() {
  loadImage(ctx, fileUploadBtn.files[0]);
}, false);
*/