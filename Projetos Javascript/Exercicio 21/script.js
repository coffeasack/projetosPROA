let horaInicio = parseInt(prompt("Digite a hora que a atividade começou. Desconsidere minutos e coloque apenas horas."));
let horaFim = parseInt(prompt("Digite a hora que a atividade acabou. Desconsidere minutos e coloque apenas horas."));
let resultado;

if (horaFim<=horaInicio) {
   resultado = (23 - horaInicio) + (0 + horaFim + 1);
   alert ("O tempo da atividade foi de " +resultado+ " horas. Um dia se passou."
   );
}

else {
resultado = horaInicio - horaFim;
alert ("O tempo da atividade foi de " +((resultado - resultado)-resultado)+ " horas."
)};


