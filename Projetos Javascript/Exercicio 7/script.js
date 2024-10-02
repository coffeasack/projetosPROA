let nascDia = parseInt(prompt("Digite o dia que nasceu: "));
let nascMes = parseInt(prompt("Digite o mês que nasceu: "));
let nascAno = parseInt(prompt("Digite o ano que nasceu: ")); 
let anoAtual = parseInt(prompt("Digite o ano atual: "));
let mesAtual = parseInt(prompt("Digite o mês atual: "));
let diaAtual = parseInt(prompt("Digite o dia de hoje: "));
const convertido = idadeConversao();

function idadeConversao() {
  return ((anoAtual - nascAno) * 365) + ((mesAtual - nascMes)*30) + (diaAtual - nascDia); 
}
alert("Seus dias vividos são, aproximadamente, " + convertido + ".");
