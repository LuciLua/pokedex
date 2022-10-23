import Image from "next/image";
import React from "react";
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


    const formatStatName = (statName: string) => {
        switch (statName) {
            case "hp":
                return "HP";
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "special-attack":
                return "Sp. Atk";
            case "special-defense":
                return "Sp. Def";
            case "speed":
                return "Speed";
        }
    };

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

                {props.pokemonData.stats.map(({ stat, base_stat }) =>
                    React.Children.toArray(
                        <li>
                            <div className={styles.txtStat}>
                                <span>{formatStatName(stat.name)}</span>
                                <span>{base_stat}</span>
                            </div>
                            <div className={styles.statBarContainer}>
                                <div className={styles.statBar} style={{ width: `${base_stat}%` }}></div>
                            </div>
                        </li>
                    ))}

                <button onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    )
}

export default PokemonModal