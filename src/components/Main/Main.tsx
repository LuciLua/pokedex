import Image from "next/image"
import { AiFillApple, AiFillFire, AiOutlineAlert } from "react-icons/ai"
import stylesInitialView from "./styles/InitialView.module.scss"
import stylesPokemonSelector from "./styles/PokemonSelector.module.scss"
import stylesPokemonContainer from "./styles/PokemonContainer.module.scss"

import { useEffect, useState } from "react"

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
function PokemonsContainer({ pokemons }) {
    return (
        <div className={stylesPokemonContainer.container}>
            <div className={stylesPokemonContainer.content}>
                <div className={stylesPokemonContainer.cards}>

                    {pokemons.map(pokemon => {
                        // let id = (pokemon.url).slice(-2, -1)
                        return (
                            <div key={pokemon.name} className={stylesPokemonContainer.card}>
                                <h1>{pokemon.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Main({ mainPokemon, pokemons }) {
    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <Selector />
            <PokemonsContainer pokemons={pokemons} />
        </>
    )
}

export default Main