let resultado = []; 

// Onde colocar, o debug começa (Também permite ver o que já rolou).
debugger;

// começa e define um valor; define um limite e até onde vai; diz o que vai rolar depois que o código termina.
for(let i = 0; i<2; i++) {
resultado.push(parseInt(prompt("Digite os números e pá")));
resultado.sort(function(a,b) {
    return a - b;
});
}

alert(resultado);