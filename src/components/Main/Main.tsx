import Image from "next/image"
import { AiFillApple, AiFillFire } from "react-icons/ai"
import stylesInitialView from "./styles/InitialView.module.scss"
import stylesPokemonSelector from "./styles/PokemonSelector.module.scss"
import stylesPokemonContainer from "./styles/PokemonContainer.module.scss"

function InitialView({ mainPokemon }) {
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
                                <span><AiFillFire /></span> <span>Attrib A</span>
                            </div>
                            <div className={stylesInitialView.atbBox}>
                                <span><AiFillApple /></span> <span>Attrib B</span>
                            </div>
                        </div>
                        <div className={stylesInitialView.name}>
                            <span>NamePokemn</span>
                        </div>
                        <div className={stylesInitialView.description}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt vitae eveniet cupiditate nostrum maxime, quia maiores laudantium officia atque ipsum laboriosam temporibus? Sequi est cupiditate nihil recusandae porro sapiente.
                            </p>
                        </div>
                        <div className={stylesInitialView.more}>
                            <button>More about this</button>
                        </div>
                    </div>
                </div>
                <div className={stylesInitialView.div}>
                    <span><AiFillFire /></span>
                </div>
                <div className={stylesInitialView.pokeImage}>
                    <Image objectFit="contain" layout="fill" src={mainPokemon} />
                </div>
            </div>
        </>

    )

}
function Selector() {
    return (
        <div className={stylesPokemonSelector.container}>
        </div>
    )

}
function PokemonsContainer() {
    return (
        <div className={stylesPokemonContainer.container}>
        </div>
    )
}

function Main({ mainPokemon }) {
    return (
        <>
            <InitialView mainPokemon={mainPokemon} />
            <Selector />
            <PokemonsContainer />
        </>
    )
}

export default Main