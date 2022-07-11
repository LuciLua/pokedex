import styles from "./Selector.module.scss";

function Selector() {
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    </div>
  );
}

export default Selector;
