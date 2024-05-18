let resultMult;

document.write('<div class="tabelas">');

for (number1 = 1; number1 <= 10; number1++) {
  document.write(
    '<table border="1"><tr><td colspan="2"><strong>Produtos de ' +
      number1 +
      "</strong></td></tr>"
  );
  for (number2 = 1; number2 <= 10; number2++) {
    resultMult = number1 * number2;
    document.write(
      '<tr class="text">' +
        "<td>" +
        number1 +
        "x" +
        number2 +
        "</td>" +
        "<td>" +
        resultMult +
        "</td>" +
        "</tr>"
    );
  }
  document.write("</table> <br>");
}

document.write("</div>");
