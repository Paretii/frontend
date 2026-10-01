function mostrarEstat(missatge, classe) {
    const element = document.getElementById("status-message");
    if (element) {
        element.textContent = missatge;
        element.className = classe;
    }
}

function amagarEstat() {
    const element = document.getElementById("status-message");
    if (element) {
        element.className = "hidden";
    }
}

function renderitzarLlistaNoms(pokemons) {
    const llista = document.getElementById("pokemon-list");
    if (!llista) return;

    llista.innerHTML = "";

    if (!pokemons || pokemons.length === 0) {
        llista.innerHTML = '<li class="placeholder">No hi ha Pokémon per mostrar.</li>';
        return;
    }

    pokemons.forEach(pokemon => {
        const item = document.createElement("li");
        item.className = "pokemon-item";

        const id = pokemon.url.split("/").filter(Boolean).pop();
        item.dataset.id = id;
        item.dataset.url = pokemon.url;
        item.innerHTML = `#${id} ${pokemon.name}`;

        document.getElementById("pokemon-list").appendChild(item);
    });
}

function renderitzarDetallCard(pokemon) {
    const contenidor = document.getElementById("detail-card-container");
    if (!contenidor) return;

    const tipus = pokemon.types.map(t => t.type.name).join(", ");
    const pes = (pokemon.weight / 10).toFixed(1);
    const hp = pokemon.stats[0] ? pokemon.stats[0].base_stat : "-";
    const atac = pokemon.stats[1] ? pokemon.stats[1].base_stat : "-";
    const defensa = pokemon.stats[2] ? pokemon.stats[2].base_stat : "-";

    contenidor.innerHTML = `
        <div class="detail-card">
            <img src="${pokemon.sprites.front_default || ""}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p><strong>ID:</strong> #${pokemon.id}</p>
            <p><strong>Tipus:</strong> ${tipus}</p>
            <p><strong>Pes:</strong> ${pes} kg</p>
            <div class="stats-grid">
                <div class="stat-box"><span>HP</span><strong>${hp}</strong></div>
                <div class="stat-box"><span>Atac</span><strong>${atac}</strong></div>
                <div class="stat-box"><span>Defensa</span><strong>${defensa}</strong></div>
            </div>
        </div>
    `;
}

function netejarCercador() {
    const input = document.getElementById("search-input");
    if (input) {
        input.value = "";
    }
}

function marcarItemActiu(item) {
    document.querySelectorAll("#pokemon-list li").forEach(li => li.classList.remove("active"));

    if (item && item.classList) {
        item.classList.add("active");
    }
}