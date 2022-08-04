let preto = document.getElementById("preto");
let amarelo = document.getElementById("amarelo");
let azul = document.getElementById("azul");
let vermelho = document.getElementById("vermelho");
let pixel = document.getElementsByClassName('pixel')
let colorSelect = "black";
let clear = "white"

preto.addEventListener("click", function(event){
    amarelo.className = "color";
    azul.className = "color";
    vermelho.className = "color";
    preto.classList = "color selected";
    colorSelect = "black"
});

amarelo.addEventListener("click", function(event){
    preto.className = "color";
    amarelo.classList = "color selected";
    azul.className = "color";
    vermelho.className = "color";
    colorSelect = "yellow"
});

azul.addEventListener("click", function(event){
    amarelo.className = "color";
    azul.className = "color selected";
    vermelho.className = "color";
    preto.classList = "color";
    colorSelect = "blue"
});

vermelho.addEventListener("click", function(event){
    amarelo.className = "color";
    azul.className = "color";
    vermelho.classList = "color selected";
    preto.classList = "color";
    colorSelect = "red"
});

function pixelboard(pixel){
    pixel.style.backgroundColor = colorSelect;
}
