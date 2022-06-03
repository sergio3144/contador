const $cajaDiv = document.querySelector('.caja')
const $btnAumentar = document.querySelector('.btnAumentar');
const $btnReset = document.querySelector('.btnReset');
const $btnDisminuir = document.querySelector('.btnDisminuir');
const $container = document.querySelector('.container')
let contador = 0;
$container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btnAumentar')){
        contador = contador + 1;
        $cajaDiv.textContent = contador;
    }
    if(e.target.classList.contains('btnReset')){
        contador = 0;
        $cajaDiv.textContent = contador
    } 
    if(e.target.classList.contains('btnDisminuir')) {
        contador --;
        $cajaDiv.textContent = contador;
    } 
})

