async function obtenirTotsElsPokemon() {
  const estat = document.getElementById('estat');
  const llistaUl = document.getElementById('llista-pokemon');

  // 1. Mostrem el text "Carregant..." just al fer clic
  estat.innerText = 'Carregant...';

  // 2. Netejem la llista per si ja havia buscat abans
  llistaUl.innerHTML = '';

  try {
    // 3. Fem la petició HTTP
    const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

    // 4. Convertim a JSON
    const dades = await resposta.json();

    // 5. Canviem el text quan tenim les dades
    estat.innerText = `S'han trobat ${dades.results.length} Pokémon:`;

    // 6. Afegim els Pokémon a la llista
    dades.results.forEach(pokemon => {
      const li = document.createElement('li');
      li.innerText = pokemon.name;
      // Al fer clic, carreguem el detall d'aquest Pokémon
      li.onclick = () => obtenirPokemon(pokemon.name);
      llistaUl.appendChild(li);
    });

  } catch (error) {
    console.error('Error:', error);
    estat.innerText = 'Error en carregar els Pokémon.';
  }
}

async function obtenirPokemon(nom) {
  const estat = document.getElementById('estat');
  const detall = document.getElementById('detall');

  // Acceptem nom o ID (la PokéAPI admet tots dos a la mateixa URL)
  nom = String(nom).trim().toLowerCase();

  if (!nom) {
    estat.innerText = "Escriu el nom o l'ID d'un Pokémon.";
    return;
  }

  estat.innerText = 'Carregant...';
  detall.innerHTML = '';

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`);

    // Si el Pokémon no existeix, l'API retorna 404
    if (!resposta.ok) {
      throw new Error('Pokémon no trobat (error ' + resposta.status + ')');
    }

    const pokemon = await resposta.json();

    estat.innerText = '';
    detall.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default || ''}" alt="${pokemon.name}">
      <p><strong>ID:</strong> #${pokemon.id}</p>
      <p><strong>Tipus:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Pes:</strong> ${(pokemon.weight / 10).toFixed(1)} kg</p>
      <p><strong>Alçada:</strong> ${(pokemon.height / 10).toFixed(1)} m</p>
      <p><strong>HP:</strong> ${pokemon.stats[0].base_stat}</p>
      <p><strong>Atac:</strong> ${pokemon.stats[1].base_stat}</p>
      <p><strong>Defensa:</strong> ${pokemon.stats[2].base_stat}</p>
    `;

  } catch (error) {
    console.error('Error:', error);
    estat.innerText = "Error: no s'ha trobat el Pokémon.";
  }
}

// Cercar també amb la tecla Enter
document.getElementById('nom-pokemon').addEventListener('keydown', e => {
  if (e.key === 'Enter') obtenirPokemon(e.target.value);
});