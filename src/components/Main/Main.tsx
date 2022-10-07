import Image from "next/image"
import { AiFillApple, AiFillFire, AiOutlineAlert } from "react-icons/ai"
import stylesInitialView from "./styles/InitialView.module.scss"
import stylesPokemonSelector from "./styles/PokemonSelector.module.scss"
import stylesPokemonContainer from "./styles/PokemonContainer.module.scss"

import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard/PokemonCard"
import { Pokemon } from "../../types/Pokemon"


// import PokemonCard from "./PokemonCard/PokemonCard"
// import { Pokemon } from "../../types/Pokemon"
// import { pokemonTypes } from "../../pokemonTypes"
// import { fetchPokemon } from "../../api/fetchPokemon";
// import { Pokemon } from "../../types/Pokemon"
// import { fetchPokemonList } from "../../api/fetchPokemonList"

function InitialView({ mainPokemon }) {

    // var urlSkin =  mainPokemon.sprites.other.home.front_shiny
    const [urlSkinPath, setUrlSkinPath] = useState('/')

    useEffect(() => {
        setUrlSkinPath('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png')
    }, [])



    var name = mainPokemon.name

    return (
        <>
            <div className={stylesInitialView.wideBackground}>
            </div>
            <div className={stylesInitialView.container}>
                <div className={stylesInitialView.about}>
                    <div className={stylesInitialView.content}>
                        <div className={stylesInitialView.code}>
                            <span>#000</span>
                        </div>
                        <div className={stylesInitialView.attributes}>
                            <div className={stylesInitialView.atbBox}>
                                <span><AiFillFire /></span> <span>Water</span>
                            </div>
                            <div className={stylesInitialView.atbBox}>
                                <span><AiFillApple /></span> <span>Fire</span>
                            </div>
                        </div>
                        <div className={stylesInitialView.name}>
                            <span>{name}</span>
                        </div>
                        <div className={stylesInitialView.description}>
                            <p>
                                {name} é um pokemon cujas habilidades são Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tempore? Unde mollitia saepe nostrum aut praesentium eos? Non architecto facilis beatae aliquam quibusdam sit eos, unde ducimus, consectetur ipsa qui!
                            </p>
                        </div>
                        <div className={stylesInitialView.more}>
                            <button><span><AiOutlineAlert /></span><span>More</span></button>
                        </div>
                    </div>
                </div>
                <div className={stylesInitialView.div}>
                    <span><AiFillFire /></span>
                </div>
                <div className={stylesInitialView.pokeImage}>
                    <Image objectFit="contain" layout="fill" src={`${urlSkinPath}`} />
                </div>
            </div>
        </>

    )

}
function Selector() {
    return (
        <div className={stylesPokemonSelector.container}>
            <div className={stylesPokemonSelector.content}>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    )

}

type PokedexProps = {
    pokemonList: Pokemon[];
    // pokemon: Pokemon;
    // pokemonList: Pokemon[];
};

function Pokedex(props: PokedexProps) {

    // const requestPokemon = await fetchPokemon(props.pokemon.name);
    // props.setPokemonData(requestPokemon.data);
    // props.setModal(true);

    return (
        <div className={stylesPokemonContainer.container}>
            <div className={stylesPokemonContainer.content}>
                <div className={stylesPokemonContainer.cards}>
                    {
                        props.pokemonList.map((pokemon) => {
                            return (
                                <PokemonCard
                                    id={pokemon.id}
                                    key={pokemon.id}
                                    name={pokemon.name}
                                    types={[{ type: { name: pokemon.types[0].type.name } }]}
                                    height={pokemon.height}
                                    weight={pokemon.weight}
                                    stats={[{ base_stat: pokemon.stats[0].base_stat, stat: { name: pokemon.stats[0].stat.name } }]}
                                // setModal={props.setModal}
                                // setPokemonData={props.setPokemonData}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Main({ mainPokemon, pokemonList }) {

    // const [modal, setModal] = useState(false);
    // const [pokemonData, setPokemonData] = useState<Pokemon>();
    // const [pokemonAmount, setPokemonAmount] = useState(9);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);
    // const [showPagination, setShowPagination] = useState(true);
    // const [disabledButton, setDisabledButton] = useState(false);
    // const searchBarRef = useRef<HTMLDivElement>(null);


    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <Selector />
            <Pokedex pokemonList={pokemonList} />
        </>
    )
}

export default Main