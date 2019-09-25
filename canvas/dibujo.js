var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
botoncito.addEventListener("click", dibuloPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibuloPorClick(){
  var lineas = parseInt(texto.value);
  var l=0;
  var y1, xf;
  var espacio=ancho/lineas;
  function dibujarLinea(Color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();/*Arrancar Dibujo*/
    lienzo.strokeStyle = Color;/*Color de la linea*/
    lienzo.moveTo(xinicial, yinicial);/*(x1,y1)*/
    lienzo.lineTo(xfinal, yfinal);/*(x2,y2)*/
    lienzo.stroke();/*Trazar la linea*/
    lienzo.closePath();/*Arrancar Dibujo*/
  }

  while(l < lineas){
    dibujarLinea("#FAA", 0, espacio*l, espacio*(l+1), 300);
    /*console.log("Linea "+l);*/
    l++;
  }

  for(l=0; l < lineas; l++){
    dibujarLinea("#FAA", espacio*l, 0, 300, espacio*(l+1));
  }

  dibujarLinea("#FAA", 1, 1, 1, 299);
  dibujarLinea("#FAA", 1, 299, 299, 299);
  dibujarLinea("#FAA", 1, 1, 299, 1);
  dibujarLinea("#FAA", 299, 1,299, 299);
  console.log(texto.value);
}
