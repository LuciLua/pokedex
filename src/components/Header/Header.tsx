import Image from "next/image";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="/logo.png"
        layout="fill"
        objectFit="contain"
        alt="logoPokemon"
      />
    </div>
  );
}

export default Header;
