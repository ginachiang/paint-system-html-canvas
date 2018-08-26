var mouse = {x: 0, y: 0};
var colorSelected = "black";
var colorList = [document.getElementById('black'),
                 document.getElementById('blue'),
                 document.getElementById('#ff00ff'),
                 document.getElementById('#008000'),
                 document.getElementById('red'),
                 document.getElementById('yellow')
                ];

document.getElementById('colorTable').addEventListener('click', function(ev) {
  for (i = 0; i < colorList.length; ++i) {
    if (ev.target === colorList[i]) {
      colorSelected = colorList[i].id;
      break;
    }
  }
}, false);

document.getElementById('clear').addEventListener('click', function() {
  openModal();
}, false);

var saveLink = document.getElementById('save');
saveLink.addEventListener('click', function() {
  saveLink.href = canvas.toDataURL("image/png");
  saveLink.href = canvas.toDataURL("image/png");
  saveLink.download = "image.png";
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