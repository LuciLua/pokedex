import { fetchPokemon } from "../../../api/fetchPokemon";
import { pokemonTypes } from "../../../pokemonTypes";
import { Pokemon } from "../../../types/Pokemon";
import { PokemonType } from "../PokemonType/PokemonType";

type PokemonCardProps = {
    name: string;
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
            <div>
                <h1>aaa</h1>
                <h1>{props.name}</h1>
                {/* {props.pokemon.name} */}
            </div>
            {/* {props.pokemon.types.map(({ type }) => ( */}
            {/* <PokemonType key={type.name} type={type.name} tabIndex={false} /> */}
            {/* ))} */}
        </>
    )
}

export default PokemonCard