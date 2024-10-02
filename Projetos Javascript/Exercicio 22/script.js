let horasTrabalhadas = parseFloat(prompt("Digite suas horas trabalhadas no mês. A carga horária mensal é de 160h, horas extras recebem um bônus de 50%."));
let salarioHora = parseFloat(prompt("Digite o salário que recebe por hora trabalhada."));
let salarioFinal;

if (horasTrabalhadas<=160) {
    salarioFinal = horasTrabalhadas * salarioHora;
    alert("Seu salário é de R$ " + salarioFinal.toFixed(2) + " este mês.");
}
else {
    salarioFinal = 160 * salarioHora + ((horasTrabalhadas - 160) + (salarioHora * 0.5));
    alert("Seu salário é de R$ " + salarioFinal.toFixed(2) + " este mês.");
};