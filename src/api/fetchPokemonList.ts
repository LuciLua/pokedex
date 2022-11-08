import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (
  page: number,
  pokemonName: string,
  voidFind: Boolean
) => {
  const offset = 9 * (page - 1);
  var URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  console.log("api...");

  // nao exisitir texto no find
  if (voidFind) {
    URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;
    console.log(URL);
  }

  if (pokemonName) {
    URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    console.log(URL);
  }

  const response = await fetch(URL);
  const data = await response.json();

  if (pokemonName) {
    return (await fetchPokemon(pokemonName)).data;
  }

  // nao exisitir texto no find
  if (voidFind) {
    
    var promises = data.results.map(
      async (pokemon: { name: string }) =>
        (await fetchPokemon(pokemon.name)).data
    );

    const pokemonList = await Promise.all(promises);
    return pokemonList;
  }

};
