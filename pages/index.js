import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image"

export async function getStaticProps(ctx) {
  const url = "https://pokeapi.co/api/v2/pokedex/2/";
  const pokemons = await fetch(url)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((json) => json.pokemon_entries);

  return {
    // props vai ser declarada na Home
    props: { pokemons },
  };
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <>
      <div className={styles.container}>
        <h1>Pokedéx - LuciLua</h1>
        <div className={styles.wrap}>
        <table className={styles.tablePokemon}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
          {pokemons.map((pokemon) => (
            <tr>
              <td key={pokemon.entry_number}>{pokemon.entry_number}</td>
              <td key={pokemon.entry_number}>{pokemon.pokemon_species.name}</td>
            </tr>
          ))}
        </table>
        <div className={styles.infoPokemon}>
            <h1>
                POKEMON INFO
            </h1>
            {/* <Image src={'https://pngimg.com/uploads/pokemon/pokemon_PNG154.png'}/> */}
        </div>
        </div>
      </div>
    </>
  );
}

// https://pokeapi.co/
