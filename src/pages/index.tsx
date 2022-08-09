import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

import PokeInfo from "../components/Pokeinfo/PokeInfo";
import Selector from "../components/Selector/Selector";
import usePokemon from "../hooks/usePokemon";

function Home() {

  // const [data] = usePokemon("https://pokeapi.co/api/v2/pokemon-species/")
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    // const [data] = usePokemon("https://pokeapi.co/api/v2/pokemon-species/")
    // setPokemons(data)
    console.log(pokemons)

    fetch("https://pokeapi.co/api/v2/pokemon-species/")
      .then(resp => resp.json())
      .then(json => setPokemons(json.results))
      .catch(err => console.log(err))

  }, [])

  const choice = 3

  return (
    <div className={styles.container}>
      <Selector param={pokemons.map(pm => pm.name)} ch={choice} />
      <p>{choice}</p>
      {
        pokemons[choice] ?
          <PokeInfo param={pokemons[choice].name} />
          :
          <PokeInfo param={'Carregando...'}/>
      }
    </div>
  );
}

// https://pokeapi.co/

export default Home;
