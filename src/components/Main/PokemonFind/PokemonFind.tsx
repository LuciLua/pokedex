
import styles from './PoemonFind.module.scss'

function PokemonFind() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form>
                    <div className={styles.byType}>
                        <div className={styles.type}></div>
                        <div className={styles.type}></div>
                        <div className={styles.type}></div>
                    </div>
                    <div className={styles.byText}>
                        <input type="text" placeholder="Busque seu pokemon"/>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default PokemonFind