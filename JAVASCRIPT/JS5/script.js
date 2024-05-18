let button = document.querySelector("#botao");
button.addEventListener("click", function () {
  let alturas = document.getElementsByName("alt");
  let largura = document.getElementsByName("largura")[0].value;
  let barras = document.querySelectorAll(".bar");
  for (let i = 0; i < barras.length; i++) {
    if (alturas[i]) {
      barras[i].style.height = alturas[i].value + "px";
      barras[i].style.width = largura + "px";
    }
  }
});
