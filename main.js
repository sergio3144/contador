const $cajaDiv = document.querySelector('.caja')
const $btnAumentar = document.querySelector('.btnAumentar');
const $btnReset = document.querySelector('.btnReset');
const $btnDisminuir = document.querySelector('.btnDisminuir');
let contador = 0;
$btnAumentar.addEventListener('click',()=>{
    contador = contador + 1;
    $cajaDiv.innerHTML = contador;
})
$btnReset.addEventListener('click',()=>{
    contador = 0
    $cajaDiv.innerHTML = contador
})
$btnDisminuir.addEventListener('click',()=>{
    contador --;
    $cajaDiv.innerHTML = contador;
})