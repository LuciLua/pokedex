import { Pokemon } from "../../../types/Pokemon";
import PokemonCard from "./PokemonCard/PokemonCard";
import styles from "./Pokedex.module.scss"

type PokedexProps = {
    pokemonList: any;
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    findPokemon: any;
};

function Pokedex({ pokemonList: pokemon, setModal, setPokemonData, findPokemon }: PokedexProps) {


    function pokemonCardRender(pokemon:Pokemon) {
        return (
            <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                setModal={setModal}
                setPokemonData={setPokemonData}
            />
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {
                        findPokemon == '' ?
                            pokemon.map((pokemonOfList: Pokemon) => {
                                return pokemonCardRender(pokemonOfList)
                            })
                            :                        
                            pokemonCardRender(pokemon)
                    }
                </div>
                <button className={styles.loadMore}>Carregar mais</button>
            </div>
        </div>
    )
}

export default Pokedex