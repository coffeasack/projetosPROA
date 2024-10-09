var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}

// Esse código foi replicado com intuito de aprendizado. O github do autor original é /miguelznunez.