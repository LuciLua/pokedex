import Image from "next/image"
import { AiFillFire, AiOutlineAlert } from "react-icons/ai"
import { useEffect, useState } from "react"
import styles from "./InitialView.module.scss"

function InitialView({ mainPokemon }) {

    // var urlSkin =  mainPokemon.sprites.other.home.front_shiny
    const [urlSkinPath, setUrlSkinPath] = useState('/')

    useEffect(() => {
        setUrlSkinPath('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png')
    }, [])


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
                                {mainPokemon.name} é um pokemon cujas habilidades são Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tempore? Unde mollitia saepe nostrum aut praesentium eos? Non architecto facilis beatae aliquam quibusdam sit eos, unde ducimus, consectetur ipsa qui!
                            </p>
                        </div>
                        <div className={styles.more}>
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