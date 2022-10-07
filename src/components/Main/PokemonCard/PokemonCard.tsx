import { fetchPokemon } from "../../../api/fetchPokemon";
import { pokemonTypes } from "../../../pokemonTypes";
import { Pokemon } from "../../../types/Pokemon";
import { PokemonType } from "../PokemonType/PokemonType";
import  PokemonCardStyle  from "../styles/PokemonCard.module.scss";

type PokemonCardProps = {
    id: number;
    name: string;
    types: [{ type: { name: string } }];
    weight: number;
    height: number;
    stats?: [{ base_stat: number; stat: { name: string } }];
    // pokemon: Pokemon;
    // setModal: (value: boolean) => void;
    // setPokemonData: (data: Pokemon) => void;
};

function PokemonCard(props: PokemonCardProps) {

    // const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

    // const [{ color }] = pokemonTypes.filter(
    //     (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
    // );

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
            <div className={PokemonCardStyle.card}>
                <h1>id - {props.id}</h1>
                <h1>name - {props.name}</h1>
                <h1>types - {props.types[0].type.name}</h1>
                <h1>weight - {props.weight}</h1>
                <h1>height - {props.height}</h1>
                <h1>base_stat - {props.stats[0].base_stat}</h1>
                <h1>stat - {props.stats[0].stat.name}</h1>
            </div>
        </>
    )
}

export default PokemonCard