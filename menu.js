let listElements = document.querySelectorAll('.list__butoon--click')

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight== '0'){
            height=menu.scrollHeight;
        }

        menu.style.height = height+'px';
    }) 
})


const listaImagen = document.querySelector('.lista__img');

listaImagen.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
})

listaImagen.addEventListener('click', function(){
    document.getElementById('sidebar__01').classList.toggle('move');
})

listaImagen.addEventListener('click', function(){
    document.getElementById('horario').classList.toggle('move');
})

//-------------------------------------------------------------------

const Imagen = document.querySelector('.img');

Imagen.addEventListener('click', function(){
    document.getElementById('otros').classList.toggle('active');
})

//js para los iframes con link

var inicio = document.getElementById("titulo")
var miIframe = document.getElementById("mi-iframe");
var enlace2 = document.getElementById("Horario");
var enlace3 = document.getElementById("Docente");

enlace2.addEventListener("click",function(){
    miIframe.src = "add.html";
    return false;
})
