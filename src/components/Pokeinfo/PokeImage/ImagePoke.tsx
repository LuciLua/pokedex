import Image from "next/image";
import styles from "./ImagePoke.module.scss";
import InfoImagePoke from "./InfoImagePoke";

function PokeImage() {
  return (
    <div className={styles.containerImgBox}>
      <div className={styles.card}>
        <header>
          <p>name Pokemon</p>
          <div className={styles.logo}></div>
        </header>
        <div className={styles.imgBox}>
          <Image objectFit="cover" layout="fill" src="/poke_test.png" />
        </div>
        <InfoImagePoke />
      </div>
    </div>
  );
}

export default PokeImage;
