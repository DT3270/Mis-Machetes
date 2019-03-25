var arrayEntidad = [""];
var arrayAtributo = [""];

//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
  console.log("miOnLoad")
  cargarOperadores()
 }

 document.getElementById('entidad')
 .addEventListener('keyup', function(e){
   console.log(e.keyCode)
  if (e.keyCode === 13) {agregarEntidad();}
 });

 document.getElementById('bae')
 .addEventListener('click', agregarEntidad, false);

 document.getElementById('atributo')
 .addEventListener('keyup', function(e){
   console.log(e.keyCode)
  if (e.keyCode === 13) {agregarAtributo();}
 });

 document.getElementById('baa')
 .addEventListener('click', agregarAtributo, false);
