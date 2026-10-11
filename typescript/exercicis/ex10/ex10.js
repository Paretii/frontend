let text = document.getElementById('text');
let btnDestacar = document.getElementById('btnDestacar');
let btnTreure = document.getElementById('btnTreure');
let btnComprovar = document.getElementById('btnComprovar');
let resutlado = document.getElementById('resultat');
btnDestacar.addEventListener('click', e => {
    text.classList.add('destacat');
});
btnTreure.addEventListener('click', e => {
    text.classList.remove('destacat');
});
btnComprovar.addEventListener('click', e => {
    if (text.classList.contains('destacat')) {
        resutlado.textContent = "El paràgraf SÍ esta destacat.";
    }
    else {
        resutlado.textContent = "El paràgraf NO esta destacat.";
    }
});
export {};
//# sourceMappingURL=ex10.js.map