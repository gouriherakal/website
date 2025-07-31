const images = [





];
let index = 0;

function showImage(){
    document.getElementById("slider").src = images[index]
}
function nextImage(){
    index = (index + 1) %images.length;
    showImage();
}
function PREVImage(){
    index = (index - 1 + images.LENGTH) %images.length;
    showImage();
}
setInterval(nextImage,3000);



