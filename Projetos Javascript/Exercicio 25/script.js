let salarioFixo = 1500;
let vendasValor = 1550;
let salarioTotal;

if (vendasValor <= 1500) {
    salarioTotal = ((vendasValor * 0.3)) + salarioFixo;
    alert(salarioTotal)
}
else {
    salarioTotal = (((1500 * 0.3)) + ((vendasValor-1500) * 0.5)) + salarioFixo;
    alert(salarioTotal)
};