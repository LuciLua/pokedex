
import { ReactNode, SyntheticEvent, useState } from 'react'
import { AiFillAlert, AiFillBook, AiFillInteraction } from 'react-icons/ai'
import { BsArrowLeft, BsArrowRight, BsChatLeft, BsSearch, BsTextLeft } from 'react-icons/bs'
import { IconBase } from 'react-icons/lib'
import { fetchPokemon } from '../../../api/fetchPokemon'
import { fetchPokemonList } from '../../../api/fetchPokemonList'
import { useMedia } from '../../../hooks/useMedia'
import { pokemonTypes } from '../../../pokemonTypes'
import styles from './PoemonFind.module.scss'

type SlideProps = {
    children: any;
    setFindPokemon: any;
    findPokemon: string;
    setPage: any;
    page:  number;
};

function PokemonFind({ children, setFindPokemon, findPokemon, setPage, page }: SlideProps) {

    const [searchInput, setSearchInput] = useState('');
    const [slidePosition, setSlidePosition] = useState(0);
    const mobile = useMedia("(max-width: 31.25rem)");

    // const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
    //     const direction = (currentTarget as HTMLButtonElement).value;

    //     direction === "next"
    //         ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
    //         : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
    // }

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

    const search = (e:Event) => {
        e.preventDefault()
        setFindPokemon(searchInput)
    }

    function formatToLowCase(value: string){
        return value.toLowerCase()
    }


    const slideNavigation = (e) => {
        e.preventDefault()
        // const mobile = useMedia("(max-width: 31.25rem)");

        var direction = e.currentTarget.value

        console.log(slidePosition)
        console.log("slidePosition")

        // const direction = (currentTarget as HTMLButtonElement).value;

        direction === "next"
            ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
            : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form>
                    <div className={styles.byType}>
                        <h1>Pesquisar por tipos</h1>
                        <div className={styles.content}>
                            {children.map(a => {
                                return (
                                    <div
                                        key={a}
                                        className={styles.type}
                                        style={{ "background": `${colorType(a).replaceAll(',', '')}` }}>

                                        <div className={styles.ico}>
                                            <AiFillAlert color='#fff' />
                                        </div>
                                        <div className={styles.name}>
                                            {a}
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={styles.type}>
                                <div className={styles.ico}>
                                    <AiFillAlert color='#fff' />
                                </div>
                                <div className={styles.name}>
                                    Fire
                                </div>
                            </div>


                        </div>
                        <div className={styles.movesBtn}>
                            <button
                                value="next"
                                onClick={slideNavigation}
                                disabled={slidePosition === -87.5 && true}
                                className={styles.btnLeft}
                            ><BsArrowLeft />
                            </button>
                            <button
                                value="prev"
                                onClick={slideNavigation}
                                disabled={slidePosition === 0 && true}
                                className={styles.btnRight}>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className={styles.byText}>
                        <input onChange={(e: any) => setSearchInput(formatToLowCase(e.target.value))} type="text" placeholder="Busque seu pokemon" />
                        <button className={styles.icon} onClick={(e:any) => search(e)}>
                            <BsSearch />
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )

}

export default PokemonFind