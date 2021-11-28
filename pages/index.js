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
        <>
        <div className={styles.container}>
            <h1>Pokedéx - LuciLua</h1>
            <table className={styles.tablePokemon}>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                </tr>
                <tr>
                    <td>
                    {pokemons.map(pokemon => (
                        <tr key={pokemon.entry_number}>
                            {pokemon.entry_number}
                        </tr>
                        ))}
                    </td>
                    <td>
                    {pokemons.map(pokemon => (
                        <tr key={pokemon.entry_number}>
                            {pokemon.pokemon_species.name}
                        </tr>
                        ))}
                    </td>
                </tr>

            </table>

        </div>
    </>
    )
}

// https://pokeapi.co/