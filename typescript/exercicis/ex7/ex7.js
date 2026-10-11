let divImg = document.getElementById("img");
let ampliada = document.getElementById("ampliada");
divImg.addEventListener("click", (e) => {
    let nueva = e.target;
    ampliada.src = nueva.src;
});
export {};
//# sourceMappingURL=ex7.js.map