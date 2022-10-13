import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.scss";

import { fetchPokemonList } from "../api/fetchPokemonList";
import { Pokemon } from "../types/Pokemon";

function Home() {

  const [mainPokemon, setMainPokemon] = useState({})
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [modal, setModal] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon>();

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
        setModal={setModal}
        modal={modal}

        setPokemonData={setPokemonData}
        pokemonData = {pokemonData}
        
        mainPokemon={mainPokemon}
        pokemonList={pokemonList}
      />
    </div>
  );
}

// https://pokeapi.co/

export default Home;
