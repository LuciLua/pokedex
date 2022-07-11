import React from "react";
import styles from "../styles/Home.module.scss";

import { useEffect } from "react";
import PokeInfo from "../components/Pokeinfo/PokeInfo";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

var idPoked = 1;

export async function getStaticProps(ctx) {
  // const urlAllPokemons = "https://pokeapi.co/api/v2/pokedex/1/";
  // const urlData = `https://pokeapi.co/api/v2/pokemon/${idPoked}`;
  return {
    props: {},
  };
}

function Home() {
  return (
    <>
      <div className={styles.container}>
        <PokeInfo />
      </div>
    </>
  );
}

// https://pokeapi.co/

export default Home;
