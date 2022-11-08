import { Pokemon } from "../../../types/Pokemon";
import PokemonCard from "./PokemonCard/PokemonCard";
import styles from "./Pokedex.module.scss"

type PokedexProps = {
    pokemonList: any;
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    findPokemon: any;
};

function Pokedex({ pokemonList, setModal, setPokemonData, findPokemon }: PokedexProps) {


    function pokemonCardRender(pokemon: Pokemon) {
        return (
            <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                setModal={setModal}
                setPokemonData={setPokemonData}
            />
        )
    }

    function pokemonListing(pokemons:Pokemon[]) {
        const listOfPokemons = pokemons.map(pokemon => {
            return pokemonCardRender(pokemon)
        })

        return listOfPokemons
    }

    function verifyFindPokemonAndRenderCards(findPokemon: string) {
        console.log(pokemonList)
        if (!findPokemon) {
            // nao consegue voltar
            return pokemonListing(pokemonList)
        } else {
            return pokemonCardRender(pokemonList)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {verifyFindPokemonAndRenderCards(findPokemon)}
                </div>
                <button className={styles.loadMore}>Carregar mais</button>
            </div>
        </div>
    )
}

export default Pokedex