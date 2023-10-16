$("#drill").click(createdrill);

function createdrill() {
  var N = parseInt($("#inputnumber3").val());
  console.log(N);
  var x = 0,
    y = 0;
  var newWin = window.open("", "_blank");
  var newD = newWin.document;
  newD.writeln(
    "<html><head><title> Multiplication table </title><style>td,th{padding: 5px;border: 2px solid cadetblue;}</style></head><body>"
  );
  newD.writeln("<table>");

  for (var i = 1; i <= 10; i++) {
    newD.writeln("<tr>");
    for (var j = 1; j <= 8; j++) {
      newD.writeln("<td>");
      x = gen(N);
      y = gen(N);
      newD.write(
        " &nbsp; &nbsp; &nbsp; &nbsp;" +
          x +
          "<br>" +
          "&nbsp;x &nbsp; &nbsp;" +
          y +
          "<br>" +
          "<hr>" +
          "</td>"
      );
    }
    newD.writeln("</tr>");
  }
  newD.writeln("</table");
  newD.writeln("</body></html>");
  newD.close();
  newWin.print();
}

function gen(N) {
  //generate a number from [1, N];
  return Math.floor(Math.random() * N + 1);
}
