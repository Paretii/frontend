let container = document.getElementById("contenidor-contactes");
let inputBuscar = document.createElement("input");
inputBuscar.type = "search";
inputBuscar.placeholder = "Cercar per nom o email";
container.append(inputBuscar);
let btnFilterFav = document.createElement("button");
btnFilterFav.textContent = "Mostrar nomes favorits ⭐"
btnFilterFav.className = "outline";
btnFilterFav.dataset.tipoBtn = "FilterFav"
btnFilterFav.dataset.actiu = "false"
container.append(btnFilterFav);
let btnRecuperar = document.createElement("button");
btnRecuperar.textContent = "🔄  Restablir Contactes";
btnRecuperar.className = "outline secondary";
btnRecuperar.dataset.tipoBtn = "Recuperar"
container.append(btnRecuperar);
let divArticle = document.createElement("div");
container.append(divArticle);


async function obtenirUsuaris() {
    try {
        if (localStorage.getItem("usuaris") === null || localStorage.getItem("guardar") === null) {
            const resposta = await fetch("https://dummyjson.com/users")
            if (!resposta.ok) {
                throw new Error(`Error en la petició: ${resposta.status}`)
            }
            const datos = await resposta.json()
            const usuaris = datos.users
            usuaris.forEach(usuari => {
                usuari.favorit = false
            })
            localStorage.setItem("usuaris", JSON.stringify(usuaris))
            localStorage.setItem("guardar", JSON.stringify(usuaris))
        }
        let usuaris = JSON.parse(localStorage.getItem("usuaris"))
        let guardar = JSON.parse(localStorage.getItem("guardar"))


        mostrarCartas(usuaris)

        inputBuscar.addEventListener("input", (event) => {
           filtrarCartas(usuaris)
        })

        container.addEventListener("click", (e) => {
            if (e.target.dataset.tipoBtn === "Favorito") {
                ponerFavorito(e.target.dataset.idUser)
            }
            if (e.target.dataset.tipoBtn === "FilterFav") {
                if(e.target.dataset.actiu === "false"){
                    e.target.dataset.actiu = "true"
                    filtrarCartas()
                }else{
                    e.target.dataset.actiu = "false"
                    filtrarCartas()
                }

            }
            if (e.target.dataset.tipoBtn === "Recuperar") {
                usuaris = JSON.parse(localStorage.getItem("guardar"))
                inputBuscar.value = ""
                btnFilterFav.dataset.actiu = "false"
                mostrarCartas(usuaris)
            }
            if (e.target.dataset.tipoBtn === "Eliminar") {
                eliminar(e.target.dataset.idUser)
            }
        })

        function mostrarCartas(array) {
            divArticle.innerHTML = ""
            localStorage.setItem("usuaris", JSON.stringify(usuaris))
            for (const usua of array) {
                crearCarta(usua)
            }
        }

        function filtrarCartas() {
            let buscar = inputBuscar.value.toLowerCase()
            let resultado = usuaris.filter((user) => {
                let nombre = (user.firstName + " " + user.lastName).toLowerCase()
                let email = user.email.toLowerCase()
                let coincideTexto = nombre.includes(buscar) || email.includes(buscar)
                let coincideFav = btnFilterFav.dataset.actiu === "false" || user.favorit === true
                return coincideTexto && coincideFav
            })
            mostrarCartas(resultado)
        }

        function ponerFavorito(idUser) {
            for (const usua of usuaris) {
                if (usua.id == idUser) {
                    usua.favorit = !usua.favorit
                }
            }
            filtrarCartas()
        }

        function eliminar(idUser) {
            usuaris = usuaris.filter(u => u.id != idUser)
            filtrarCartas()
        }
                
        
    } catch (error) {
        console.error("S'ha produït un error durant la petició:", error.message)
    }
}

function crearCarta(user) {

    let article = document.createElement("article");
    article.style.display = "flex"
    article.style.flexDirection = "column"
    article.style.gap = "20px"
    divArticle.append(article);
    let nombre = document.createElement("h2");
    nombre.innerText = user.firstName + " " + user.lastName
    article.append(nombre)

    let divInfo = document.createElement("div");
    article.append(divInfo)
    divInfo.style.display = "flex";
    divInfo.style.flexDirection = "column";
    divInfo.style.gap = "20px";
    let divEmail = document.createElement("div");
    let strongEmail = document.createElement("strong");
    let pEmail = document.createElement("span");
    strongEmail.textContent = "📧 Email: ";
    pEmail.textContent = user.email;
    divEmail.append(strongEmail)
    divEmail.append(pEmail)
    divInfo.append(divEmail)

    let divTelefono = document.createElement("div");
    let strongTefono = document.createElement("strong");
    let pTelefono = document.createElement("span");
    strongTefono.textContent = " 📞 Telefono: ";
    pTelefono.textContent = user.phone
    divTelefono.append(strongTefono)
    divTelefono.append(pTelefono)
    divInfo.append(divTelefono)

    let divEmpresa = document.createElement("div");
    let strongEmpresa = document.createElement("strong");
    let pEmpresa = document.createElement("span");
    strongEmpresa.textContent = " 🏢 Empresa: ";
    pEmpresa.textContent = user.company.name;
    divEmpresa.append(strongEmpresa)
    divEmpresa.append(pEmpresa)
    divInfo.append(divEmpresa)

    let divBotones = document.createElement("div");
    divBotones.style.display = "flex";
    divBotones.style.gap = "20px";
    let btnFav = document.createElement("button");
    btnFav.dataset.tipoBtn = "Favorito";
    btnFav.dataset.idUser = user.id;
    let btnEliminar = document.createElement("button");
    btnEliminar.dataset.tipoBtn = "Eliminar";
    btnEliminar.dataset.idUser = user.id;
    if (user.favorit === false) {
        btnFav.classList.add("outline");
        btnFav.textContent = "Afegir a favorits"
    } else {
        btnFav.classList.remove("outline");
        btnFav.textContent = "Favorit ⭐"
    }
    btnEliminar.className = "outline secondary";
    btnEliminar.textContent = "Eliminar ❌"
    divBotones.append(btnFav)
    divBotones.append(btnEliminar)
    article.append(divBotones)
}

obtenirUsuaris()
