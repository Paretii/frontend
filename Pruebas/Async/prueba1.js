async function obtenirUsuaris() {
    try {
        console.log("Iniciant petició...");

        // 1. Fem la petició HTTP a la URL de l'API
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        // Comprovem si la resposta del servidor ha estat correcta (status 200-299)
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status}`);
        }

        // 2. Convertim la resposta rebuda a format JSON (també és asíncron)
        const usuaris = await resposta.json();

        // 3. Ja podem treballar amb les dades rebudes
        console.log("Usuaris rebuts amb èxit:");
        console.log(usuaris); // Retorna: Array amb la llista d'objectes usuari

        console.log(usuaris[1].name)

    } catch (error) {
        // Aquest bloc s'executa si falla la connexió o la petició llança un error
        console.error("S'ha produït un error durant la petició:", error.message);
    }
}

// Crida a la funció asíncrona
obtenirUsuaris();