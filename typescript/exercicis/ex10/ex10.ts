let text = document.getElementById('text') as HTMLHeadingElement;
let btnDestacar = document.getElementById('btnDestacar') as HTMLButtonElement;
let btnTreure = document.getElementById('btnTreure') as HTMLButtonElement;
let btnComprovar = document.getElementById('btnComprovar') as HTMLButtonElement;
let resutlado = document.getElementById('resultat') as HTMLButtonElement;
btnDestacar.addEventListener('click', e => {
    text.classList.add('destacat');
})
btnTreure.addEventListener('click', e => {
    text.classList.remove('destacat');
})
btnComprovar.addEventListener('click', e => {
    if(text.classList.contains('destacat')) {
        resutlado.textContent = "El paràgraf SÍ esta destacat."
    }else{
        resutlado.textContent = "El paràgraf NO esta destacat."
    }
})