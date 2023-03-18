const contactoButton = document.getElementById('abrir');
const cerrarButton = document.getElementById('cerrar');
const blockContact = document.getElementById('block--contact');
const contContacto = document.getElementById('cont--abrir');


contactoButton.onclick = function(){
    blockContact.style.display="flex";
    contContacto.style.display="none";
}


cerrarButton.onclick = function(){
    blockContact.style.display="none";
    contContacto.style.display="flex";
    
}