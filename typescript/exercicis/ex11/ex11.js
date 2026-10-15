const botones = document.querySelectorAll('.tab-btn');
const divs = document.querySelectorAll('.tab-content');
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        limpiar();
        btn.classList.add('active');
        let div = document.getElementById(btn.dataset.tab);
        div.classList.add('active');
    });
});
function limpiar() {
    botones.forEach(b => b.classList.remove('active'));
    divs.forEach(p => p.classList.remove('active'));
}
export {};
//# sourceMappingURL=ex11.js.map