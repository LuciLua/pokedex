import { Pokemon } from "../../../types/Pokemon";
import PokemonCard from "./PokemonCard/PokemonCard";
import styles from "./Pokedex.module.scss"

type PokedexProps = {
    pokemonList: Pokemon[];
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
};

function Pokedex(props: PokedexProps) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {
                        props.pokemonList.map((pokemon) => {
                            return (
                                <PokemonCard
                                    pokemon={pokemon}
                                    id={pokemon.id}
                                    key={pokemon.id}
                                    name={pokemon.name}
                                    types={[{ type: { name: pokemon.types[0].type.name } }]}
                                    height={pokemon.height}
                                    weight={pokemon.weight}
                                    stats={[{ base_stat: pokemon.stats[0].base_stat, stat: { name: pokemon.stats[0].stat.name } }]}
                                    setModal={props.setModal}
                                    setPokemonData={props.setPokemonData}
                                />
                            )
                        })
                    }
                </div>
                <button className={styles.loadMore}>Carregar mais</button>
            </div>
        </div>
    )
}

export default Pokedex