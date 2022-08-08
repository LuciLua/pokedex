import React from "react";
import styles from "../styles/Home.module.scss";

import PokeInfo from "../components/Pokeinfo/PokeInfo";
import Selector from "../components/Selector/Selector";
import usePokemon from "../hooks/usePokemon";

var idPoked = 1;

export async function getStaticProps(ctx) {
  // const [data] = usePokemon("https://pokeapi.co/api/v2/pokemon-species/")
const data = 'Pokemnone!' 
  // console.log([data])

  return {
    props: {
      data: data,
    }
  }
}

function Home({ data }) {

  return (
    <div className={styles.container}>
      <Selector param={data} />
      <PokeInfo param={data} />
    </div>
  );
}

// https://pokeapi.co/

export default Home;
