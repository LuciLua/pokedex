import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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

  const myLoader = () => {
    return `https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png`;
  };

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
                <td key={pokemon.entry_number}>
                  {pokemon.pokemon_species.name}
                </td>
              </tr>
            ))}
          </table>
          <div className={styles.infoPokemon}>
            <h1>POKEMON INFO</h1>
            <div className={styles.aboutPokemon}>
              <div className={styles.imagemPokemon}>
                <Image
                  src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
                  width={250}
                  height={250}
                  quality={100}
                  loader={myLoader}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
              <ul>
                  <li>
                      Dado sobre pokemon
                  </li>
                  <li>
                      Dado sobre pokemon
                  </li>
                  <li>
                      Dado sobre pokemon
                  </li>
                  <li>
                      Dado sobre pokemon
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// https://pokeapi.co/
