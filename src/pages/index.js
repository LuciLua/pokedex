import React from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

var idPoked = 1

export async function getStaticProps(ctx) {

  const urlAllPokemons = "https://pokeapi.co/api/v2/pokedex/1/";
  const urlData = `https://pokeapi.co/api/v2/pokemon/${idPoked}`;

  const pokemons = await fetch(urlAllPokemons)
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error('Erro!')
    })
    .then((json) => json.pokemon_entries);

  const pokeData = await fetch(urlData)
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error('Erro!')
    })
    .then((json) => json);

  return {
    props: { pokemons, pokeData },
  };
}

export default function Home(props) {

  const { pokemons, pokeData } = props;

  function poke(e) {
    var select = e.target
    var nome = select.options[select.selectedIndex].text

    var hpProgress = document.getElementById(styles.hpProgress)

    var tituloPokemon = document.getElementById('tituloPoke')
    var hp = document.getElementById('hp')
    var attack = document.getElementById('attack')
    var defense = document.getElementById('defense')
    var specialAttack = document.getElementById('specialAttack')
    var specialDefense = document.getElementById('specialDefense')
    var speed = document.getElementById('speed')

    tituloPokemon.innerHTML = nome.toUpperCase()

    hp.innerHTML = pokeData.stats[0].base_stat
    attack.innerHTML = pokeData.stats[1].base_stat
    defense.innerHTML = pokeData.stats[2].base_stat
    specialAttack.innerHTML = pokeData.stats[3].base_stat
    specialDefense.innerHTML = pokeData.stats[4].base_stat
    speed.innerHTML = pokeData.stats[5].base_stat

  }

  // var novoLink = urlData.replace(idPoked, novoPoke)
  // document.getElementById('pokeIma').src = novoLink


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
          <h1 id={'tituloPoke'}>BULBASAUR</h1>
          <div className={styles.aboutPokemon}>
            <div className={styles.imagemPokemon}>
              <img id={'pokeIma'} src={pokeData.sprites.other.home.front_shiny} />
            </div>
            <ul>
              <div className={styles.dataArea}>
                <label htmlFor="hp">
                  HP
                </label>
                <li id={'hp'}>
                  <span>0</span>
                  <div className={styles.progressBar} id={styles.hpProgress}/>
                </li>
              </div>
              <div className={styles.dataArea}>

                <label htmlFor="attack">
                  Attack
                </label>
                <li id={'attack'}>
                  <span>0</span>
                  <div id={styles.attackProgress} className={styles.progressBar}/>
                </li>
              </div>
              <div className={styles.dataArea}>

                <label htmlFor="defense">
                  Defense
                </label>
                <li id={'defense'}>
                  <span>0</span>
                  <div id={styles.defenseProgress} className={styles.progressBar}/>
                </li>
              </div>
              <div className={styles.dataArea}>
                <label htmlFor="specialAttack">
                  Special Attack
                </label>
                <li id={'specialAttack'}>
                  <span>0</span>
                  <div id={styles.specialAttackProgress} className={styles.progressBar}/>
                </li>
              </div>
              <div className={styles.dataArea}>

                <label htmlFor="specialDefense">
                  Special Defense
                </label>
                <li id={'specialDefense'}>
                  <span>0</span>
                  <div id={styles.specialDefenseProgress} className={styles.progressBar}/>
                </li>
              </div>
              <div className={styles.dataArea}>
                <label htmlFor="speed">
                  Speed
                </label>
                <li id={'speed'}>
                  <span>0</span>
                  <div id={styles.speedProgress} className={styles.progressBar}/>
                </li>
              </div>
            </ul>
          </div>
          <h1>Info</h1>
        </div>
      </div>
      <footer className={styles.footer}>
        LuciLua@2021
      </footer>
    </>
  );
}

// https://pokeapi.co/
