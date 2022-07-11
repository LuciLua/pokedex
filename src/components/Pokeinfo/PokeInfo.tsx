import PokeImage from "./PokeImage/ImagePoke";
import PokeAbout from "./PokeAbout/PokeAbout";

import styles from "./pokeInfoTable.module.scss";

function PokeInfo() {
  return (
    <div className={styles.pokeInfoTable}>
      <PokeImage />
      <PokeAbout />
    </div>
  );
}

export default PokeInfo;
