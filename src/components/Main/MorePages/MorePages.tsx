import usePokemon from '../../../hooks/usePokemon'
import styles from './MorePages.module.scss'

function MorePages({ setPage, page }) {
    function choicePage(num) {

        // const offset = 9 * (num - 1);
        // const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

        // usePokemon(URL)

        // console.log(URL)

        setPage(num)
        console.log(page)
        

    }

    return (
        <div className={styles.containerMorePages}>
            <ul>
                <li onClick={() => choicePage(1)}>1</li>
                <li onClick={() => choicePage(2)}>2</li>
                <li onClick={() => choicePage(3)}>3</li>
                <li onClick={() => choicePage(4)}>4</li>
                <li onClick={() => choicePage(5)}>5</li>
                <li onClick={() => choicePage(5)}>5</li>
                <li onClick={() => choicePage(6)}>6</li>
                <li onClick={() => choicePage(7)}>7</li>
                <li onClick={() => choicePage(8)}>8</li>
                <li onClick={() => choicePage(9)}>9</li>
                <li onClick={() => choicePage(10)}>10</li>
                <li onClick={() => choicePage(11)}>11</li>
                <li onClick={() => choicePage(12)}>12</li>
                <li onClick={() => choicePage(13)}>13</li>
                <li onClick={() => choicePage(14)}>14</li>
                <li onClick={() => choicePage(15)}>15</li>
                <li onClick={() => choicePage(16)}>16</li>
                <li onClick={() => choicePage(17)}>17</li>
                <li onClick={() => choicePage(18)}>18</li>
                <li onClick={() => choicePage(19)}>19</li>
                <li onClick={() => choicePage(20)}>20</li>
                <li onClick={() => choicePage(21)}>21</li>
                <li onClick={() => choicePage(22)}>22</li>
                <li onClick={() => choicePage(23)}>23</li>
                <li onClick={() => choicePage(24)}>24</li>
                <li onClick={() => choicePage(25)}>25</li>
                <li onClick={() => choicePage(26)}>26</li>
                <li onClick={() => choicePage(27)}>27</li>
                <li onClick={() => choicePage(28)}>28</li>
                <li onClick={() => choicePage(29)}>29</li>
                <li onClick={() => choicePage(30)}>30</li>
                <li onClick={() => choicePage(31)}>31</li>
                <li onClick={() => choicePage(32)}>32</li>
                <li onClick={() => choicePage(33)}>33</li>
                <li onClick={() => choicePage(34)}>34</li>
                <li onClick={() => choicePage(35)}>35</li>
                <li onClick={() => choicePage(36)}>36</li>
                <li onClick={() => choicePage(37)}>37</li>
                <li onClick={() => choicePage(38)}>38</li>
                <li onClick={() => choicePage(39)}>39</li>
                <li onClick={() => choicePage(40)}>40</li>
                <li>Última</li>
            </ul>
        </div>
    )
}

export default MorePages