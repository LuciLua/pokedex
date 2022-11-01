import PokemonFind from "./PokemonFind/PokemonFind"
import Pokedex from "./Pokedex/Pokedex"
import InitialView from "./InitialView/InitialView"
import PokemonModal from "./PokemonModal/PokemonModal"
import { pokemonTypes } from "../../pokemonTypes"
import MorePages from "./MorePages/MorePages"

function Main({ mainPokemon, pokemonList, setModal, modal, setPokemonData, pokemonData }) {

    return (
        <>
            <InitialView
                setPokemonData={setPokemonData}
                mainPokemon={mainPokemon}
                setModal={setModal}
            />
            <PokemonFind>
                {pokemonTypes.map(({ name }) => (
                    name
                ))}
            </PokemonFind>
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
            <MorePages />
        </>
    )
}

export default Main