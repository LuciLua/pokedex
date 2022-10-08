import Image from "next/image";
import { GiUnbalanced } from "react-icons/gi";
import { BsRulers } from "react-icons/bs";
import styles from "./PokemonCard.module.scss"
import { pokemonTypes } from "../../../../pokemonTypes";
import { Pokemon } from "../../../../types/Pokemon";

type PokemonCardProps = {
    id: number;
    name: string;
    types: [{ type: { name: string } }];
    weight: number;
    height: number;
    stats?: [{ base_stat: number; stat: { name: string } }];
    pokemon: Pokemon;
    // setModal: (value: boolean) => void;
    // setPokemonData: (data: Pokemon) => void;
};

function PokemonCard(props: PokemonCardProps) {

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`;

    const [{ color }] = pokemonTypes.filter(
        (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
    );

    // const handleClick = async () => {
    //     const requestPokemon = await fetchPokemon(props.pokemon.name);
    //     props.setPokemonData(requestPokemon.data);
    //     // props.setModal(true);
    // };

    // const formatPokemonId = (id: number) => {
    //     if (id < 10) return `#00${id}`;
    //     else if (id >= 10 && id < 99) return `#0${id}`;
    //     else return `#${id}`;
    // };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.infoTXT_container}>
                    <p>#{props.id}</p>
                    <h1>{props.name}</h1>
                </div>
                <div className={styles.infoTYPE_container}>
                    {props.types.map(type => {
                        return(
                            <p className={styles.infoTYPE} style={{"background": color}}>{type.type.name}</p>
                        )
                    })}
                </div>
                <div className={styles.infoWEIGHT_container}>
                    <div className={styles.infoWEIGHT}>
                        <p><span> <GiUnbalanced/></span> {props.weight}</p>
                        <p>Peso</p>
                    </div>
                    <div className={styles.infoWEIGHT}>
                        <p><span> <BsRulers/></span> {props.height}</p>
                        <p>Altura</p>
                    </div>
                </div>
                {/* <h1>base_stat - {props.stats[0].base_stat}</h1> */}
                {/* <h1>stat - {props.stats[0].stat.name}</h1> */}
                <div className={styles.imgContainer}>
                    <Image
                        layout="fill"
                        src={imgUrl}
                    />
                </div>
                <div className={styles.btn_container}>
                    <button>
                        Veja mais
                    </button>
                </div>
            </div>
        </>
    )
}

export default PokemonCard