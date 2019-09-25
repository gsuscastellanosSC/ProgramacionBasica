document.addEventListener("mousedown", dibujarMouse); //captura el evento click y acciona la funcion dibujarMouse
var cuadrito = document.getElementById("papel"); //trae el canvas a JS
var hoja = cuadrito.getContext("2d"); //prepara el contexto en 2D
var x = 150;
var y = 150;

function dibujarMouse(evento)
{
    console.log(evento);
    var colorcito = "green";
    var movimiento = 1;
    dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, hoja);
    x = evento.offsetX;
    y = evento.offsetY;
}

//funcion para dibujar lineas
function dibujarLinea(color ,xinicial , yinicial ,xfinal ,yfinal, lienzo)
{
    lienzo.beginPath(); //Inicia el trazo
    lienzo.strokeStyle = color; //Se define el color del trazo
    lienzo.lineWidth = 1; //Grosor de la linea
    lienzo.moveTo(xinicial, yinicial); //Punto de inicio
    lienzo.lineTo(xfinal, yfinal); //Punto final
    lienzo.stroke(); //Hace el trazo
    lienzo.closePath(); //Termina el trazo
}
