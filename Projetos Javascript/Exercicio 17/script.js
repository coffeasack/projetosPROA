let nota1 = parseInt(prompt("Digite sua primeira nota"));
let nota2 = parseInt(prompt("Digite sua segunda nota"));
let resultado = ((nota1 + nota2) / 2);
let aprovacao;

resultado >=6 ? aprovacao = ("aprovado!") : aprovacao = ("retido...");
alert("Sua nota foi: " + resultado + ". Então você está " + aprovacao);