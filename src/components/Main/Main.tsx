import { useEffect, useState } from "react"
import { Pokemon } from "../../types/Pokemon"

import PokemonFind from "./PokemonFind/PokemonFind"
import Pokedex from "./Pokedex/Pokedex"
import InitialView from "./InitialView/InitialView"
import PokemonModal from "./PokemonModal/PokemonModal"

function Main({ mainPokemon, pokemonList, setModal, modal, setPokemonData, pokemonData }) {

    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <PokemonFind />
            <Pokedex
                pokemonList={pokemonList}
                setModal={setModal}
                setPokemonData={setPokemonData} />

            {modal == true ? (
                <PokemonModal
                    pokemonList={pokemonList}
                    pokemonData={pokemonData}
                    setModal={setModal}
                    key={pokemonData.name}
                />
            ) : null
            }
        </>
    )
}

export default Main