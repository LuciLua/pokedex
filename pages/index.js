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

 function poke(e){
    var nomePoke = e.target

    // ReactDOM.render(`Nome: ${nomePoke.className}`, document.getElementById('tituloPoke'))
    // ReactDOM.render(`ID: ${nomePoke.id}`, document.getElementById('idPoke'))
    document.getElementById('tituloPoke').innerHTML = `Nome: ${nomePoke.className}`
    document.getElementById('idPoke').innerHTML = `ID: ${nomePoke.id}`

    var novoLink = pokemonsIMG.replace(idPoked, nomePoke.id)
    document.getElementById('pokeIma').src=novoLink
  }
  
  
  function togglePokedex(o){
    const table = document.getElementById('tablePokemon')
    const btn = document.getElementById('btnTogglePokedex')

    table.classList.toggle(styles.tablemenor) 

  }


  return (
    
    <>
      <div className={styles.container}>
        <h1>Pokedéx</h1>
        <div className={styles.wrap}>
          <button className={styles.btnTogglePokedex} id={'btnTogglePokedex'} onClick={togglePokedex}>
            Pokedex
          </button>
          <table className={styles.tablePokemon} id={'tablePokemon'}>
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
                  objectFit="cover"
                  alt="Picture of pokemon"
                />
              </div>
              <ul>
                  <li id={'tituloPoke'}>bulbasaur</li>
                  <li id={'idPoke'}>1</li>
              </ul>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
        LuciLua@2021
        </footer>
      </div>
    </>
  );
}

// https://pokeapi.co/
