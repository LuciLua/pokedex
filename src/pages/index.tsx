import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.scss";

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [mainPokemon, setMainPokemon] = useState("/")

  useEffect(() => {
    console.log(pokemons)

    fetch("https://pokeapi.co/api/v2/pokemon/97/")
      .then(resp => resp.json())
      .then(json => {
        setMainPokemon(json.sprites.other.home.front_shiny_female)
      })

    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(resp => resp.json())
      .then(json => setPokemons(json.results))
      .catch(err => console.log(err))
  }, [])

  const choice = 3

  return (
    <div className={styles.container}>
      <Main mainPokemon={mainPokemon}/>
    </div>
  );
}

// https://pokeapi.co/

export default Home;
