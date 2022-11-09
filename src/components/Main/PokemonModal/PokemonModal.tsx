import Image from "next/image";
import React from "react";
import { BsRulers } from "react-icons/bs";
import { GiUnbalanced } from "react-icons/gi";
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

    const formatPokemonId = (id: number) => {
        if (id < 10) return `#00${id}`;
        else if (id >= 10 && id < 99) return `#0${id}`;
        else return `#${id}`;
    };

    return (
        <div className={styles.container} >
            <div className={styles.modal}>
                <div className={styles.basicInfoContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            priority
                            objectFit="contain"
                            layout="fill"
                            src={imgUrl}
                        />
                    </div>
                    <h1 className={styles.id}>
                        {formatPokemonId(pokemonData.id)}
                    </h1>
                    <h1 className={styles.name}>
                        {pokemonData.name}
                    </h1>
                    <div className={styles.infoWEIGHT_container}>
                        <div className={styles.infoWEIGHT}>
                            <p><span> <GiUnbalanced /></span> {pokemonData.weight}</p>
                            <p>Peso</p>
                        </div>
                        <div className={styles.infoWEIGHT}>
                            <p><span> <BsRulers /></span> {pokemonData.height}</p>
                            <p>Altura</p>
                        </div>
                    </div>
                </div>
                <div className={styles.statsInfoContainer}>
                    <h1 className={styles.stats}>Stats</h1>
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
                </div>
            <button onClick={closeModal}>
                X
            </button>
            </div>
        </div>
    )
}

export default PokemonModal