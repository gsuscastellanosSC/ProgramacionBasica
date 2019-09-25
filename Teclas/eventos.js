document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("AreaDibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

dibujarLinea("red", x-1, y-1, x+1, y+1, papel, 3);

function dibujarLinea(Color, xinicial, yinicial, xfinal, yfinal, papel, s){
  papel.beginPath();/*Arrancar Dibujo*/
  papel.strokeStyle = Color;/*Color de la linea*/
  papel.lineWidth = s;
  papel.moveTo(xinicial, yinicial);/*(x1,y1)*/
  papel.lineTo(xfinal, yfinal);/*(x2,y2)*/
  papel.stroke();/*Trazar la linea*/
  papel.closePath();/*Arrancar Dibujo*/
}

function dibujarTeclado(evento)
{
  var colorcito = "green";
  var movimiento = 1;
  var pixel =20;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-movimiento, papel, pixel);
      y = y-movimiento;
      console.log("up");
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y+movimiento, papel, pixel);
      y = y+movimiento;
      console.log("Down");
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x-movimiento, y, x, y, papel, pixel);
      x = x-movimiento;
      console.log("Left");
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x+movimiento, y, x, y, papel, pixel);
      x = x+movimiento;
      console.log("Right");
      break;
    default:
      console.log("Otra tecla " + evento.keyCode );
  }
}
