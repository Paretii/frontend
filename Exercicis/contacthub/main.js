let container = document.getElementById("contenidor-contactes");
let inputBuscar = document.createElement("input");
inputBuscar.type = "search";
inputBuscar.placeholder="Cercar per nom o email";
container.append(inputBuscar);
let divArticle = document.createElement("div");
container.append(divArticle);


async function obtenirUsuaris() {
    try {
        console.log("Iniciant petició...")
        const resposta = await fetch("https://dummyjson.com/users")
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status}`)
        }
        const usuaris =  await resposta.json()
        
        divArticle.innerHTML = ""
        
        for (const usua of usuaris.users) {
            crearCarta(usua)
        }
        inputBuscar.addEventListener("input", (event) => {
            let filtrados = usuaris.users.filter((user) => {
                let nombre = user.firstName.toLowerCase() + " " + user.lastName.toLowerCase()
                let email = user.email.toLowerCase()
                let buscar = inputBuscar.value.toLowerCase()
                return nombre.includes(buscar) || email.includes(buscar)
            })
            divArticle.innerHTML = ""
            for (const usua of filtrados) {
                crearCarta(usua)
            }
            
        })
        
    } catch (error) {
        console.error("S'ha produït un error durant la petició:", error.message)
    }
}
function crearCarta(user){
 
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
    strongEmail.textContent ="📧 Email: ";
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
    let btnEliminar = document.createElement("button");
    btnFav.classList.add("outline");
    btnEliminar.className = "outline secondary";
    btnFav.textContent = "Favorit ⭐"
    btnEliminar.textContent = "Eliminar ❌"
    divBotones.append(btnFav)
    divBotones.append(btnEliminar)
    article.append(divBotones)
}

obtenirUsuaris()
