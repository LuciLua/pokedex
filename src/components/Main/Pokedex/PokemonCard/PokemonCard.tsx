import Image from "next/image";
import { GiUnbalanced } from "react-icons/gi";
import { BsRulers } from "react-icons/bs";
import styles from "./PokemonCard.module.scss"
import { pokemonTypes } from "../../../../pokemonTypes";
import { Pokemon } from "../../../../types/Pokemon";
import { fetchPokemon } from "../../../../api/fetchPokemon";

type PokemonCardProps = {
    pokemon: Pokemon;
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
};

function PokemonCard(props: PokemonCardProps) {

    const { pokemon } = props

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

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

    const handleClickOpenModal = async () => {
        const requestPokemon = await fetchPokemon(pokemon.name);
        props.setPokemonData(requestPokemon.data);

        props.setModal(true);
    };

    const formatPokemonId = (id: number) => {
        if (id < 10) return `#00${id}`;
        else if (id >= 10 && id < 99) return `#0${id}`;
        else return `#${id}`;
    };

    return (
        <div className={styles.card}>
            <div className={styles.infoTXT_container}>
                <p>{formatPokemonId(pokemon.id)}</p>
                <h1>{pokemon.name}</h1>
            </div>
            <div className={styles.infoTYPE_container}>

                {
                    pokemon.types ?
                        pokemon.types.map(types => {
                            return (<p
                                key={types.type.name}
                                className={styles.infoTYPE}
                                style={{ "background": `${colorType(types.type.name).replaceAll(',', '')}` }}>
                                {types.type.name}
                            </p>)
                        })
                        : null
                }

            </div>
            <div className={styles.infoWEIGHT_container}>
                <div className={styles.infoWEIGHT}>
                    <p><span> <GiUnbalanced /></span> {pokemon.weight}</p>
                    <p>Peso</p>
                </div>
                <div className={styles.infoWEIGHT}>
                    <p><span> <BsRulers /></span> {pokemon.height}</p>
                    <p>Altura</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    priority
                    layout="fill"
                    src={imgUrl}
                />
            </div>
            <div className={styles.btn_container}>
                <button onClick={handleClickOpenModal}>
                    Veja mais
                </button>
            </div>
        </div >
    )
}

export default PokemonCard