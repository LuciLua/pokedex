import Image from "next/image";
import React from "react";
import { pokemonTypes } from "../../../pokemonTypes";
import { Pokemon } from "../../../types/Pokemon";
import styles from "./PokemonModal.module.scss"

type PokedexProps = {
    pokemonData: Pokemon;
    setModal: (value: boolean) => void;
};


function PokemonModal({ setModal, pokemonData }: PokedexProps) {

    function closeModal() {
        setModal(false);
    }

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;


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

    const typesP = [...pokemonTypes]

    function colorType(name: string) {
        var currentColor = typesP.map(t => {
            if (t.name == name) {
                var theColor = t.color
                return theColor
            }
        })
        return `${currentColor}`
    }

    return (
        <div className={styles.container} >
            <div className={styles.modal}>
                <h1 className={styles.name}>
                    {pokemonData.name}
                </h1>
                <div className={styles.imgContainer}>
                    <Image
                        priority
                        objectFit="contain"
                        layout="fill"
                        src={imgUrl}
                    />
                </div>

                {pokemonData.stats.map(({ stat, base_stat }) =>
                    React.Children.toArray(
                        <li>
                            <div className={styles.txtStat}>
                                <span>{formatStatName(stat.name)}</span>
                                <span>{base_stat}</span>
                            </div>
                            <div className={styles.statBarContainer}>
                                <div className={styles.statBar} style={{ width: `${base_stat}%`, background: `${colorType(pokemonData.types[0].type.name).replaceAll(',', '')}` }}></div>
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