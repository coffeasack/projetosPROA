let nota1 = parseInt(prompt("Digite sua primeira nota"))
let nota2 = parseInt(prompt("Digite sua segunda nota"))
let nota3 = parseInt(prompt("Digite sua terceira nota"))

let mediafinal = notafim();

function notafim(){
    return alert((((nota1 * 2)+(nota2 * 3)+(nota3* 5))/10));
}