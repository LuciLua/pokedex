import Image from "next/image"
import { AiFillFire, AiOutlineAlert } from "react-icons/ai"
import { useEffect, useState } from "react"
import styles from "./InitialView.module.scss"

function InitialView({ mainPokemon, setModal, setPokemonData }) {

    // var urlSkin =  mainPokemon.sprites.other.home.front_shiny
    const [urlSkinPath, setUrlSkinPath] = useState('/')

    useEffect(() => {
        setUrlSkinPath('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png')
    }, [])


    function pikachuAbout() {
        setModal(true)
        setPokemonData(mainPokemon)
    }

    return (
        <>
            <div className={styles.wideBackground}>
            </div>
            <div className={styles.container}>
                <div className={styles.about}>
                    <div className={styles.content}>
                        <div className={styles.code}>
                            <span>#0{mainPokemon.id}</span>
                        </div>
                        <div className={styles.attributes}>
                            {
                                mainPokemon.types ?
                                    mainPokemon.types.map(({ type }) => {
                                        return (
                                            <div key={type.name} className={styles.atbBox}>
                                                <span><AiFillFire /></span><span>{type.name}</span>
                                            </div>
                                        )
                                    })
                                    :
                                    <div>
                                        ...
                                    </div>
                            }
                        </div>
                        <div className={styles.name}>
                            <span>{mainPokemon.name}</span>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Pikachu (ピカチュウ Pikachū?) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado por Satoshi Tajiri. Originalmente criado como um personagem secundário, Pikachu tornou-se o mascote do universo Pokémon depois de ter sido escolhido como um dos personagens principais na adaptação televisiva do jogo, ao lado de seu treinador Ash Ketchum. Ele também é considerado o Pokémon mais popular da franquia.
                            </p>
                        </div>
                        <div className={styles.more} onClick={() => pikachuAbout()}>
                            <button><span><AiOutlineAlert /></span><span>More</span></button>
                        </div>
                    </div>
                </div>
                <div className={styles.div}>
                    <span><AiFillFire /></span>
                </div>
                <div className={styles.pokeImage}>
                    <Image
                        objectFit="contain"
                        layout="fill"
                        src={`${urlSkinPath}`}
                    />
                </div>
            </div>
        </>
    )
}

export default InitialView