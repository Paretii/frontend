const botones = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
const divs = document.querySelectorAll<HTMLDivElement>('.tab-content');
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        limpiar()
        btn.classList.add('active');
        let div = document.getElementById(btn.dataset.tab as string) as HTMLDivElement;
        div.classList.add('active');
    })
})
function limpiar(){
    botones.forEach(b => b.classList.remove('active'));
    divs.forEach(p => p.classList.remove('active'));
}