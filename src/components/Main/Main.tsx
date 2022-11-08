import PokemonFind from "./PokemonFind/PokemonFind"
import Pokedex from "./Pokedex/Pokedex"
import InitialView from "./InitialView/InitialView"
import PokemonModal from "./PokemonModal/PokemonModal"
import { pokemonTypes } from "../../pokemonTypes"
import MorePages from "./MorePages/MorePages"

function Main({
    mainPokemon,
    pokemonList,
    setModal,
    modal,
    setPokemonData,
    pokemonData,
    setPage,
    page,
    setFindPokemon,
    findPokemon
}) {

    return (
        <>
            <InitialView
                setPokemonData={setPokemonData}
                mainPokemon={mainPokemon}
                setModal={setModal}
            />
            <PokemonFind
                setPage={setPage}
                setFindPokemon={setFindPokemon}
                findPokemon={findPokemon}
                page={page}>
                {pokemonTypes.map(({ name }) => (
                    name
                ))}
            </PokemonFind>
            <Pokedex
                findPokemon={findPokemon}
                pokemonList={pokemonList}
                setModal={setModal}
                setPokemonData={setPokemonData} />

            {modal == true ? (
                <PokemonModal
                    pokemonData={pokemonData}
                    setModal={setModal}
                    key={pokemonData.name}
                />
            ) : null
            }
            <MorePages 
            setPage={setPage} 
            page={page} 
            setFindPokemon={setFindPokemon} 
            findPokemon={findPokemon} />
        </>
    )
}

export default Main