let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(e){
    'use strict';
    menu.classList.toggle('mostrar');
});