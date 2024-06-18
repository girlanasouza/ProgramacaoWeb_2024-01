let raioInput = document.getElementById("raio") as HTMLInputElement | null;
let botao = document.getElementById("botao");

if (raioInput && botao) {
  botao.onclick = function () {
    if (raioInput) {
      let raio = parseFloat(raioInput.value);
      if (isNaN(raio) || raio <= 0) {
        console.log("Por favor, insira um valor válido para o raio.");
        return;
      }
      let area = Math.PI * Math.pow(raio, 2);
      let circunferencia = 2 * Math.PI * raio;

      let areaElement = document.getElementById(
        "area"
      ) as HTMLInputElement | null;
      let circunferenciaElement = document.getElementById(
        "cinc"
      ) as HTMLInputElement | null;

      if (areaElement && circunferenciaElement) {
        areaElement.value = area.toFixed(2);
        circunferenciaElement.value = circunferencia.toFixed(2);
      }

      console.log("Raio:", raio);
      console.log("Área do círculo:", area);
      console.log("Circunferência:", circunferencia);
    } else {
      console.log("Elemento 'raio' não encontrado no DOM.");
    }
  };
} else {
  console.log("Elementos 'raio' ou 'botao' não encontrados no DOM.");
}
