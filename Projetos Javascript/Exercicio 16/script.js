let maca = parseInt(prompt("Quantas maçãs você quer comprar?"));
let preco = desconto;

function desconto () {
    return maca <= 11 ? maca*1.30 : maca;
}

alert("O preço é R$" + preco().toFixed(2));