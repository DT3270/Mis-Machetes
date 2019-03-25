 
// funcion para Cargar operadores al campo <select>
function cargarOperadores() {
    var array = ["", ">", "<", "="];
   
// Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();   
    addOptions("operador", array);
}
   
// Boton agregar entidad tiene como funcionalidad agregar items al array de entidades
function agregarEntidad() {
    var texto = [];
    texto.push('<small></small>')      
    document.getElementById("entOut").innerHTML = texto.join('');
    var entidad =  document.getElementById('entidad')
    if (entidad.value=="") {
        var texto = [];
        texto.push('<small>Debe ingresar entidad</small>')      
        document.getElementById("entOut").innerHTML = texto.join('');    
    } else {        
        if(arrayEntidad.indexOf(entidad.value)>-1)
            {
                var texto = [];
                texto.push('<small>La entidad ya existe!</small>')      
                document.getElementById("entOut").innerHTML = texto.join('');
            }
        else 
            {
            arrayEntidad.push(entidad.value)
            arrayEntidad.sort()   
            addOptions("entidad1", arrayEntidad)   
            addOptions("entidad2", arrayEntidad)
            entidad.value = ""
            }   
        }
}

// Boton agregar atributo tiene como funcionalidad agregar items al array de atributos
function agregarAtributo() {
    var texto = [];
    texto.push('<small></small>')      
    document.getElementById("atrOut").innerHTML = texto.join('');
    var atributo =  document.getElementById('atributo')
    if (atributo.value=="") {
        var texto = [];
        texto.push('<small>Debe ingresar atributo</small>')      
        document.getElementById("atrOut").innerHTML = texto.join('');    
    } else {        
        if(arrayAtributo.indexOf(atributo.value)>-1)
            {
                var texto = [];
                texto.push('<small>El atributo ya existe!</small>')      
                document.getElementById("atrOut").innerHTML = texto.join('');
            }
        else 
            {
            arrayAtributo.push(atributo.value)
            arrayAtributo.sort()   
            addOptions("atributo1", arrayAtributo)   
            atributo.value = ""
            }   
        }
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array) {
    var select = document.getElementById(domElement);
    select.options.length = 0;
    for (value in array) {
      // Creo el elemento opción
      var option = document.createElement("option");
      // Creo el texto asociado al elemento
      option.appendChild(document.createTextNode(array[value]));
      // Seteo el valor de la opción
      option.value = array[value]; 
      // Agrego la opción
      select.appendChild(option); 
    }
}
