import PokeImage from "./PokeImage/ImagePoke";
import PokeAbout from "./PokeAbout/PokeAbout";

import styles from "./pokeInfoTable.module.scss";

function PokeInfo({param}) {
  return (
    <div className={styles.pokeInfoTable}>
        <PokeImage />
      <PokeAbout param={param} />
    </div>
  );
}

export default PokeInfo;
