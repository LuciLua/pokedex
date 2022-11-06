import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (page: number, pokemonName: string) => {
  const offset = 9 * (page - 1);
  var URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  if (pokemonName == '') {
    URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;
  }

  if (pokemonName !== '') {
    URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  }

  const response = await fetch(URL);
  const data = await response.json();

  if (pokemonName == '') {
    var promises = data.results.map(
      async (pokemon: { name: string }) =>
        (await fetchPokemon(pokemon.name)).data
    );
    const pokemonList = Promise.all(promises);
    return pokemonList;
  }

  if (pokemonName !== '') {
    return (await fetchPokemon(pokemonName)).data;
  }
};
