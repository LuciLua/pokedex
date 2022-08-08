import { useEffect } from "react";
import usePokemon from "../../hooks/usePokemon";
import styles from "./Selector.module.scss";


function Selector({ param }) {

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor="Geracao">
        <span>Geracao:</span>
        <select name="geracao" id="geracao">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <label htmlFor="Pokemon">
        <span>Pokemon:</span>
        <select name="pokemon" id="pokemon">
          {/* {
            data.map(pokemon => {
              return (
                <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>
              )
            })
          } */}
        </select>
      </label>
    </div>
  );
}

export default Selector;
