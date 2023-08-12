//JavaScript para el frame de secciones del docente

var frame_section = document.getElementById("frame_section");
var uno = document.getElementById("primero")
var dos = document.getElementById("segundo");
var tres = document.getElementById("tercero");
var tres = document.getElementById("cuarto");


uno.addEventListener("click", function(){
    frame_section.src = "form_uno.html";
    return false;
})

dos.addEventListener("click", function(){
    frame_section.src = "none.html";
    return false;
})

tres.addEventListener("click", function(){
    frame_section.src = "none.html";
    return false; 
})
cuatro.addEventListener("click", function(){
    frame_section.src = "none.html";
    return false; 
})
