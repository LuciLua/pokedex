import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import  ReactDOM  from "react-dom";

var idPoked = 1

export async function getStaticProps(ctx) {

  const url = "https://pokeapi.co/api/v2/pokedex/2/";
  const urlImg = `https://pokeapi.co/api/v2/pokemon/${idPoked}`;

  const pokemons = await fetch(url)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((json) => json.pokemon_entries);

  const pokemonsIMG = await fetch(urlImg)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((json) => json.sprites.front_default);

  return {
    // props vai ser declarada na Home
    props: { pokemons, pokemonsIMG },
  };
}

export default function Home(props) {

    
  const { pokemons, pokemonsIMG } = props;

  const myLoader = () => {
    return `https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png`;
  };


 function poke(e){
    var nomePoke = e.target

      ReactDOM.render(`Nome: ${nomePoke.className}`, document.getElementById('tituloPoke'))

      ReactDOM.render(`ID: ${nomePoke.id}`, document.getElementById('idPoke'))

      var novoLink = pokemonsIMG.replace(idPoked, nomePoke.id)

    document.getElementById('pokeIma').src=novoLink
  }

  return (
    
    <>
      <div className={styles.container}>
        <h1>Pokedéx - LuciLua</h1>
        <div className={styles.wrap}>
          <table className={styles.tablePokemon}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((pokemon) => (
                <tr key={pokemon.entry_number} onClick={poke}>
                  <td className={pokemon.pokemon_species.name} id={pokemon.entry_number}>{pokemon.entry_number} </td>
                  <td className={pokemon.pokemon_species.name} id={pokemon.entry_number}>{pokemon.pokemon_species.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.infoPokemon}>
            <h1>POKEMON INFO</h1>
            <div className={styles.aboutPokemon}>
              <div className={styles.imagemPokemon}>
                <Image
                  id={'pokeIma'}
                  src={pokemonsIMG}
                  unoptimized
                  width={250}
                  height={250}
                  quality={100}
                  loader={myLoader}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
              <ul>
                  <li id={'tituloPoke'}></li>
                  <li id={'idPoke'}></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// https://pokeapi.co/
