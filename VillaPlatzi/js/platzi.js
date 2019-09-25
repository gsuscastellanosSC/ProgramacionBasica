var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo ={
  url: "img/title.png",
  cargaOk: false
};
var vaca = {
  url: "img/vaca.png",
  cargaOk: false
};

var cerdo = {
  url: "img/cerdo.png",
  cargaOk: false
};

var pollo = {
  url: "img/pollo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);


function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOk)
  {
    for(var v=0; v<aleatorio(1, 25); v++)
    {
      papel.drawImage(vaca.imagen, aleatorio(0, 7)*40, aleatorio(0, 7)*40);
    }
    console.log(v+" vacas");
  }

  if(cerdo.cargaOk)
  {
    for(var c=0; c<aleatorio(1, 25); c++)
    {
      papel.drawImage(cerdo.imagen, aleatorio(0, 6)*50, aleatorio(0, 6)*50);
    }
    console.log(c+" cerdos");
  }

  if(pollo.cargaOk)
  {
    for(var c=0; c<aleatorio(1, 25); c++)
    {
      papel.drawImage(pollo.imagen, aleatorio(0, 5)*60, aleatorio(0, 5)*60);
    }
    console.log(c+" pollos");
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
