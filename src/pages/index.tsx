import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.scss";

import { Pokemon } from "../types/Pokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";

function Home() {

  const [mainPokemon, setMainPokemon] = useState({})
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonList, setPokemonList] = useState<any>([]);

  const pokemones = [
    {
      id: 1,
      name: 'testeee',
      types: [{ type: { name: 'fire' } }],
      weight: 123,
      height: 222,
      stats: [{ base_stat: 12, stat: { name: 'stringteste' } }]
    }
  ]


  useEffect(() => {
    // pikachu
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(resp => resp.json())
      .then(json => setMainPokemon(json))
      .catch(err => console.log(err))

  }, [])
  
  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);



  return (
    <div className={styles.container}>
      <Main
        mainPokemon={mainPokemon}
        pokemonList={pokemonList}
      />
    </div>
  );
}

// https://pokeapi.co/

export default Home;
