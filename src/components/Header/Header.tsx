import styles from "./Header.module.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/pokemon.svg" alt="Logo" />
      </div>
      <SocialMedia />
    </div>
  );
}

export default Header;
