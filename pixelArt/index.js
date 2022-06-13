var penColor = 'black'

function setPixelColor(pixel){
    pixel.style.backgroundColor= penColor;
}

function changePenColor(color) {
    penColor = color;
}

const input = document.getElementById('colorInput')
input.addEventListener('change', changeInputColor);

function changeInputColor(e){
    penColor = e.target.value
}
