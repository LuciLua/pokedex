import Image from "next/image";
import styles from "./ImagePoke.module.scss";
import InfoImagePoke from "./InfoImagePoke";

function PokeImage() {
  return (
    <div className={styles.containerImgBox}>
      <div className={styles.imgBox}>
        <Image layout="fill" src="/poke_test.png" />
      </div>
      <InfoImagePoke />
    </div>
  );
}

export default PokeImage;
