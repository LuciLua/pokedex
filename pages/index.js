import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export async function getStaticProps(ctx){

    const url = 'https://pokeapi.co/api/v2/pokedex/2/'
    const pokemons = await fetch(url)
            .then(resp => { if (resp.ok) return resp.json() })
            .then(json => json.pokemon_entries)

    return { // props vai ser declarada na Home
        props: {pokemons}
    }
}

export default function Home(props){

    const { pokemons } = props

    return(
        <div className={styles.container}>
            <h1>Pekedéx - LuciLua</h1>
            <ul className={styles.listaPokemons}>
                {pokemons.map(pokemon => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

// https://pokeapi.co/