import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.scss";

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [mainPokemon, setMainPokemon] = useState({})

  useEffect(() => {

    // pikachu
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(resp => resp.json())
      .then(json => setMainPokemon(json))
      .catch(err => console.log(err))

    // pokemons
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(resp => resp.json())
      .then(json => setPokemons(json.results))
      .catch(err => console.log(err))

  }, [])

  return (
    <div className={styles.container}>
      <Main mainPokemon={mainPokemon} pokemons={pokemons} />
    </div>
  );
}

// https://pokeapi.co/

export default Home;
