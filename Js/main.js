const btnAbrir1 = document.getElementById('btnA1');
const btnCerrar1 = document.getElementById('btnC1');
const modalFondo = document.getElementById('modalFondo');
const modal1 = document.getElementById('modal1');

btnAbrir1.addEventListener('click',()=>{
    modalFondo.classList.add('show');
    modal1.classList.add('show');
})

btnCerrar1.addEventListener('click',()=>{
    modalFondo.classList.remove('show');
    modal1.classList.remove('show');
})