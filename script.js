
let preto = document.getElementById("preto");
let amarelo = document.getElementById("amarelo");
let azul = document.getElementById("azul");
let vermelho = document.getElementById("vermelho");

function selectionColor(event){
    document.getElementById("preto").className = "color";
    document.getElementById("amarelo").className = "color";
    document.getElementById("azul").className = "color";
    document.getElementById("vermelho").className = "color";
    event.target.classList = "color selected";
} 
    preto.addEventListener("click", selectionColor);
    amarelo.addEventListener("click", selectionColor);
    azul.addEventListener("click", selectionColor);
    vermelho.addEventListener("click", selectionColor);
    
