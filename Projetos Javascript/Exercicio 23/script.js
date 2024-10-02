let nome = prompt("Digite seu primeiro nome:");
let sexo = prompt("Escolha o sexo com digitando somente M ou F.");
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.80, 1.38, 1.52):"));

switch (sexo) {
    case "M":
    alert("Olá, " +nome+ " Sendo um homem com " +altura+ "cm de altura, seu peso ideal é: " + (((72.7 * altura) - 58).toFixed(2)) +"kg.");
    break;

    case "F":
    alert("Olá, " +nome+ "! Sendo uma mulher com " +altura+ "cm de altura, seu peso ideal é: " + (((62.1 * altura) - 44.7).toFixed(2)) +"kg.");
    break;
}