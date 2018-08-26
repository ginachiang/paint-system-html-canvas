// CLEAR button + Modal events
var modal = document.getElementById('clearModal');
var modalYes = document.getElementById('clearYes');
var modalNo = document.getElementById('clearNo');

function closeModal() {
  modal.style.display = "none";
}


function openModal() {
  modal.style.display = "block";
}


modalNo.addEventListener('click', function() {
  closeModal();
}, false);


modalYes.addEventListener('click', function() {
  closeModal();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
}, false);


// close modal when tap anywhere outside modal
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
