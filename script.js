let preto = document.getElementById("preto");
let cor1 = document.getElementById("cor1");
let cor2 = document.getElementById("cor2");
let cor3 = document.getElementById("cor3");
let color = document.getElementsByClassName("color");
let rgb;
let pixelboard1 = document.getElementById("pixel-board");
let pixel = document.getElementsByClassName('pixel');
let colorSelect = "black";
let button = document.getElementById("generate-board");
let size1 = document.getElementById("board-size");
let value;

function tabela(value){
    pixelboard1.style.setProperty('--value', value);
    for(let index = 0; index < value * value; index += 1) {
    let div = document.createElement('div');
    div.className = "pixel";
    pixelboard1.appendChild(div)
    }
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    for (let index = pixelboard1.childNodes.length -1; index >= 0; index -= 1) {
        const currentChildren = pixelboard1.childNodes[index];
        currentChildren.remove();
        }
    let n = size1.value;
     
    if (n == "") {
       alert('Board inválido!');
    } else if (n < 5) {
        value = 5;
    } else if (n > 50) {
        value = 50;
    } else {
        value = n;
    }    
    tabela(value); 
})

function geradorDeCor(){
    const letras = "0123456789ABCDEF";
    rgb = '#';
    for (let index = 0; index < 6; index +=1){
        rgb += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return rgb;
}

window.onload = function() {
    color1 = cor1.style.backgroundColor = geradorDeCor();
    color2 = cor2.style.backgroundColor = geradorDeCor();
    color3 = cor3.style.backgroundColor = geradorDeCor();
}

preto.addEventListener("click", function(event){
    cor1.className = "color";
    cor2.className = "color";
    cor3.className = "color";
    preto.classList = "color selected";
    colorSelect = "black";
});

cor1.addEventListener("click", function(event){
    preto.className = "color";
    cor1.classList = "color selected";
    cor2.className = "color";
    cor3.className = "color";
    colorSelect = color1;
});

cor2.addEventListener("click", function(event){
    cor1.className = "color";
    cor2.className = "color selected";
    cor3.className = "color";
    preto.classList = "color";
    colorSelect = color2;
});

cor3.addEventListener("click", function(event){
    cor1.className = "color";
    cor2.className = "color";
    cor3.classList = "color selected";
    preto.classList = "color";
    colorSelect = color3;
});

function clickPalelle() {
    for(let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener("click", function(event) {
            pixel[index].style.background = colorSelect;
        })
    }
}
clickPalelle()
