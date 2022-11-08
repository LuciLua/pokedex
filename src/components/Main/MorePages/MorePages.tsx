import { useState } from 'react'
import styles from './MorePages.module.scss'

function MorePages({ setPage, setFindPokemon }) {

    const [numPages, setNumPages] = useState([1, 2, 3, 4, 5])

    async function choicePage(num: number) {
        await setFindPokemon(null)
        await setPage(num)
    }

    function more() {
        setNumPages([numPages[4] + 1, numPages[4] + 2, numPages[4] + 3, numPages[4] + 4, numPages[4] + 5])

        const more = document.getElementById('more')
        const less = document.getElementById('less')

        const last = document.getElementById('last')
        const first = document.getElementById('first')

        if (numPages[3] === 124) {
            more.style.display = 'none'
            last.style.display = 'none'
            setNumPages([126, 127, 128, 129])
        }

        less.style.display = 'flex'
        first.style.display = 'flex'

    }
    function less() {
        setNumPages([numPages[0] - 5, numPages[0] - 4, numPages[0] - 3, numPages[0] - 2, numPages[0] - 1])

        const more = document.getElementById('more')
        const less = document.getElementById('less')

        const last = document.getElementById('last')
        const first = document.getElementById('first')

        if (numPages[0] === 6) {
            less.style.display = 'none'
            first.style.display = 'none'
        }

        more.style.display = 'flex'
        last.style.display = 'flex'
    }
    function first() {
        setNumPages([1, 2, 3, 4, 5])
        const less = document.getElementById('less')
        const more = document.getElementById('more')

        const last = document.getElementById('last')
        const first = document.getElementById('first')

        less.style.display = 'none'
        more.style.display = 'flex'

        first.style.display = 'none'
        last.style.display = 'flex'

    }
    function last() {
        setNumPages([126, 127, 128, 129])
        const more = document.getElementById('more')
        const less = document.getElementById('less')

        const last = document.getElementById('last')
        const first = document.getElementById('first')

        more.style.display = 'none'
        less.style.display = 'flex'

        last.style.display = 'none'
        first.style.display = 'flex'
    }

    return (
        <div className={styles.containerMorePages}>
            <ul>
                <li style={{ 'display': 'none' }} id='first' onClick={() => first()}>Primeira</li>
                <li style={{ 'display': 'none' }} id='less' onClick={() => less()}>...</li>
                {numPages.map(np => {
                    return (
                        <li key={np} onClick={() => choicePage(np)}>{np}</li>
                    )
                })}
                <li id='more' onClick={() => more()}>...</li>
                <li id='last' onClick={() => last()}>Última</li>
            </ul>
        </div>
    )
}

export default MorePages