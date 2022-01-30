import React from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

var idPoked = 1

export async function getStaticProps(ctx) {

  const url = "https://pokeapi.co/api/v2/pokedex/2/";
  const urlImg = `https://pokeapi.co/api/v2/pokemon/${idPoked}`;

  const pokemons = await fetch(url)
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error('Erro!')
    })
    .then((json) => json.pokemon_entries);


  const pokemonsIMG = await fetch(urlImg)
    .then((resp) => {
      if (resp.ok) return resp.json();
    })
    .then((json) => json.sprites.other.home.front_shiny);

  return {
    // props vai ser declarada na Home
    props: { pokemons, pokemonsIMG },
  };
}

export default function Home(props) {


  const { pokemons, pokemonsIMG } = props;

  function poke(e) {
    var select = e.target
    var value = select.options[select.selectedIndex];

    document.getElementById('tituloPoke').innerHTML = value.text

    pokemons.map( (pokemon) => 
    {
      pokemon.pokemon_species.name == value ? console.log(pokemon.stats[0]) : null
    }
    )

    var hp = document.getElementById('hp')
    var attack = document.getElementById('attack')
    var defense = document.getElementById('defense')
    var specialAttack = document.getElementById('specialAttack')
    var specialDefense = document.getElementById('specialDefense')
    var speed = document.getElementById('speed')

    // hp.innerHTML = value.stats[0].base_stat
    // attack.innerHTML = value.stats[1].base_stat
    // defense.innerHTML = value.stats[2].base_stat
    // specialAttack.innerHTML = value.stats[3].base_stat
    // specialDefense.innerHTML = value.stats[4].base_stat
    // speed.innerHTML = value.stats[5].base_stat



    // var novoLink = pokemonsIMG.replace(idPoked, nomePoke.id)
    // document.getElementById('pokeIma').src = novoLink
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Pokedéx</h1>
        <select id='escolhaPokemon' onChange={poke}>
          {pokemons.map((pokemon) => (
            <option key={pokemon.entry_number} value={pokemon}>
              {pokemon.pokemon_species.name}
            </option>
          ))}
        </select>
        <div className={styles.infoPokemon}>
          <h1>POKEMON INFO</h1>
          <div className={styles.aboutPokemon}>
            <div className={styles.imagemPokemon}>
              <img id={'pokeIma'} src={pokemonsIMG} />
            </div>
            <ul>
              <li id={'tituloPoke'}>bulbasaur</li>
              <li id={'hp'}>0</li>
              <li id={'attack'}>0</li>
              <li id={'defense'}>0</li>
              <li id={'special-attack'}>0</li>
              <li id={'special-defense'}>0</li>
              <li id={'speed'}>0</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        LuciLua@2021
      </footer>
    </>
  );
}

// https://pokeapi.co/
