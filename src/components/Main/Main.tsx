import { useEffect, useState } from "react"
import { Pokemon } from "../../types/Pokemon"

import PokemonFind from "./PokemonFind/PokemonFind"
import Pokedex from "./Pokedex/Pokedex"
import InitialView from "./InitialView/InitialView"

function Main({ mainPokemon, pokemonList }) {

    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <PokemonFind />
            <Pokedex pokemonList={pokemonList} />
        </>
    )
}

export default Main