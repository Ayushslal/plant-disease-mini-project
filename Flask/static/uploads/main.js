const dropArea = document.getElementById('dropArea');
const imagePreview = document.getElementById('img-view');
const fileInput = document.getElementById('fileInput');
const btn = document.getElementById('btn');

console.log("hi")
fileInput.addEventListener("change",uploadImage);

function uploadImage() {
    
    let imgLink = URL.createObjectURL(fileInput.files[0]);
    imagePreview.style.backgroundImage = `url(${imgLink})`;
    imagePreview.style.backgroundSize = 'cover';
    imagePreview.textContent = '';
    btn.textContent = 'Predict'
}

dropArea.addEventListener("dragover", function(e) {
    e.preventDefault();
});
dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    uploadImage();
});