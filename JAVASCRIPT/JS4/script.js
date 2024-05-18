let raioInput = document.getElementById("raio");
let botao = document.getElementById("botao");

botao.onclick = function () {
  let raio = parseFloat(raioInput.value);
  if (isNaN(raio) || raio <= 0) {
    console.log("Por favor, insira um valor válido para o raio.");
    return;
  }
  let area = Math.PI * Math.pow(raio, 2);
  let circunferencia = 2 * Math.PI * raio;

  document.getElementById("area").value = area.toFixed(2);
  document.getElementById("cinc").value = circunferencia.toFixed(2);
  console.log("Raio:", raio);
  console.log("Área do círculo:", area);
  console.log("Circunferência:", circunferencia);
};
