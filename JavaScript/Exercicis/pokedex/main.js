let btnMostrarTodos = document.getElementById("btn-show-all")
let llistaPokemons = document.getElementById("pokemon-list")
let buscadorPokemons = document.getElementById("search-input")
let btnFilters = document.querySelector(".type-filter-container")
async function obtenirTotsElsPokemons(){
    mostrarEstat("Carregant la llista de Pokémon...", "loading")
    try{
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status}`)
        }
        const dades = await resposta.json();
        let pokemons = dades.results
        
        
        renderitzarLlistaNoms(pokemons)
        amagarEstat()
    }catch (error) {
        mostrarEstat(error.message, "error")
    }
}
async function carregarDetallPokemon(pokemonUrl){
    mostrarEstat("Carregant detall del Pokémon...", "loading")
    try{
        console.log(pokemonUrl)
        const resposta = await fetch(pokemonUrl);
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status}`)
        }
        const data = await resposta.json();

        renderitzarDetallCard(data)
        amagarEstat()

    }catch (error) {
        mostrarEstat(error.message, "error")
    }

}
async function carregarPokemonPerTipus(tipus){
    mostrarEstat("Carregant Pokémon de tipus...", "loading")
    try{
        const resposta = await fetch(`https://pokeapi.co/api/v2/type/${tipus}`)
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status}`)
        }
        const data = await resposta.json();
        const llistaPokemon = data.pokemon.map((item) => item.pokemon);
        const llistaGen1 = llistaPokemon.filter((p) => {
            const id = parseInt(p.url.split("/").filter(Boolean).pop(), 10);
            return id <= 151;
        });
        console.log(llistaGen1);
        renderitzarLlistaNoms(llistaGen1)
        netejarCercador()
        amagarEstat()
        

    }catch (error) {
        mostrarEstat(error.message, "error")
    }
}
function filtrarPokemonLlista(){      
    let pokemons = llistaPokemons.querySelectorAll("li")
    pokemons.forEach((element) => {
        element.classList.add("hidden")
        if(element.innerText.toLowerCase().includes(buscadorPokemons.value.toLowerCase())){
            element.classList.remove("hidden")
        }
        
    })
}
function resetFiltres() {
    btnFilters.querySelectorAll("[data-type]").forEach((b) => {
        b.classList.remove("active")
        b.disabled = false
    })
}

btnMostrarTodos.addEventListener("click", () => {
    resetFiltres()
    obtenirTotsElsPokemons()
})
llistaPokemons.addEventListener("click",(e) =>{
   marcarItemActiu(e.target)
    if(e.target.dataset.url != null){
        carregarDetallPokemon(e.target.dataset.url)
    }
});
buscadorPokemons.addEventListener("input",(e) =>{
    filtrarPokemonLlista();
})

btnFilters.addEventListener("click",(e) =>{
    if (!e.target.dataset.type) return

    resetFiltres()

    e.target.classList.add("active")
    e.target.disabled = true

    carregarPokemonPerTipus(e.target.dataset.type)
})

