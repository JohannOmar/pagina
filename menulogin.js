//login
var usuario = document.forms['form']['usuario'];
var contraseña = document.forms['form']['contraseña'];

function validated(){
    var usuario = document.forms['form']['usuario'];
    var contraseña = document.forms['form']['contraseña'];
    //recorrer todos datos fetch usando For ichit
    //Verificar si el usuario 
    if(true){}
}
//obtener todos los datos de json usando fetch
document.getElementById('').addEventListener('click', cargarJson);
function cargarJson(){
    fetch('baselogin.json') .then(response => response.json())
       .then(function(res) {
          console.log(res);
          res.foreach(val => {   if(val.usuario == '123' && val.contraseña == '5555') {  console.log("correcto") } else { console.log("incorrecto"); }   })

        })
}
