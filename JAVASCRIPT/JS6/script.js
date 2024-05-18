const criarPonto = (posx) => {
  let ponto = document.createElement("div");
  ponto.className = "ponto";
  ponto.style.left = posx.pageX + "px";
  ponto.style.top = posx.pageY + "px";
  document.body.appendChild(ponto);
};

const plotPonto = () => {
  let pontos = document.querySelectorAll(".ponto");
  return pontos;
};

document.addEventListener("mousemove", function (event) {
  if (plotPonto().length <= 8) {
    criarPonto(event);
  } else {
    plotPonto()[0].remove();
    criarPonto(event);
  }
});
