import Image from "next/image";
import { Pokemon } from "../../../types/Pokemon";
import styles from "./PokemonModal.module.scss"

type PokedexProps = {
    pokemonList: Pokemon[];
    pokemonData: Pokemon;
    setModal: (value: boolean) => void;
};


function PokemonModal(props: PokedexProps) {

    function closeModal() {
        props.setModal(false);
    }

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemonData.id}.png`;

    return (
        <div className={styles.container} >
            <div className={styles.modal}>
                <h1 className={styles.name}>
                    {props.pokemonData.name}
                </h1>
                <div className={styles.imgContainer}>
                    <Image
                        priority
                        objectFit="contain"
                        layout="fill"
                        src={imgUrl}
                    />
                </div>
                {props.pokemonData.abilities.map(pokemon => {
                    return (
                        <div key={pokemon.ability.name} className={styles.ability}>
                            {pokemon.ability.name}
                        </div>
                    )
                })}
                <button onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    )
}

export default PokemonModal