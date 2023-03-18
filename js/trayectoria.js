const formacionButton = document.getElementById('btn--formacion');
const trabajoButton = document.getElementById('btn--trabajo');
const trabajo = document.getElementById('div--trabajo');
const formacion = document.getElementById('div--formacion');


formacionButton.onclick = function(){
    trabajo.style.display="none";
    formacion.style.display="flex";
    formacionButton.style.color="#BF0417";
    trabajoButton.style.color="";
}

trabajoButton.onclick = function(){
    formacion.style.display="none";
    trabajo.style.display="flex";
    formacionButton.style.color="";
    trabajoButton.style.color="#BF0417";
    
}