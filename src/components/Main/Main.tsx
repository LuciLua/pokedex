import Image from "next/image"
import { AiFillApple, AiFillFire, AiOutlineAlert } from "react-icons/ai"
import stylesInitialView from "./styles/InitialView.module.scss"

import { useEffect, useState } from "react"
import { Pokemon } from "../../types/Pokemon"
import PokemonFind from "./PokemonFind/PokemonFind"
import Pokedex from "./Pokedex/Pokedex"


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

type PokedexProps = {
    pokemonList: Pokemon[];
};

function Main({ mainPokemon, pokemonList }) {

    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <PokemonFind />
            <Pokedex pokemonList={pokemonList}/>
        </>
    )
}

export default Main