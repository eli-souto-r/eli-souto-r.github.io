const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    logo = document.getElementById('logo'),
    logo1 = document.getElementById('logo1'),
    contacto = document.getElementById('block--contact'),
    redes2 = document.getElementById('redes--footer'),
    redes = document.getElementById('redes'),
    btnContact= document.getElementById('cont--abrir');


switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('active');
    luna.classList.toggle('folse');
    header.classList.toggle('dark');
    logo.classList.toggle('dark');
    logo1.classList.toggle('dark');
    contacto.classList.toggle('dark');
    redes2.classList.toggle('dark');
    redes.classList.toggle('dark');
    btnContact.classList.toggle('dark');
    switchButton.classList.toggle('dark');


    
})