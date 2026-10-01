function mostrarEstat(e, t) {
    const n = document.getElementById("status-message");
    n && (n.textContent = e, n.className = t)
}

function amagarEstat() {
    const e = document.getElementById("status-message");
    e && (e.className = "hidden")
}

function renderitzarLlistaNoms(e) {
    const t = document.getElementById("pokemon-list");
    if (!t) return;
    if (t.innerHTML = "", !e || 0 === e.length) return void (t.innerHTML = '<li class="placeholder">No hi ha Pokémon per mostrar.</li>');
    e.forEach(e => {
        const t = document.createElement("li");
        t.className = "pokemon-item";
        const n = e.url.split("/").filter(Boolean).pop();
        t.dataset.id = n, t.dataset.url = e.url, t.innerHTML = `#${n} ${e.name}`, document.getElementById("pokemon-list").appendChild(t)
    })
}

function renderitzarDetallCard(e) {
    const t = document.getElementById("detail-card-container");
    t && (t.innerHTML = `<div class="detail-card"><img src="${e.sprites.front_default || ""}" alt="${e.name}"><h3>${e.name}</h3><p><strong>ID:</strong> #${e.id}</p><p><strong>Tipus:</strong> ${e.types.map(e => e.type.name).join(", ")}</p><p><strong>Pes:</strong> ${(e.weight / 10).toFixed(1)} kg</p><div class="stats-grid"><div class="stat-box"><span>HP</span><strong>${e.stats[0] ? e.stats[0].base_stat : "-"}</strong></div><div class="stat-box"><span>Atac</span><strong>${e.stats[1] ? e.stats[1].base_stat : "-"}</strong></div><div class="stat-box"><span>Defensa</span><strong>${e.stats[2] ? e.stats[2].base_stat : "-"}</strong></div></div></div>`)
}

function netejarCercador() {
    const e = document.getElementById("search-input");
    e && (e.value = "")
}

function marcarItemActiu(e) {
    document.querySelectorAll("#pokemon-list li").forEach(e => e.classList.remove("active")), e && e.classList && e.classList.add("active")
}