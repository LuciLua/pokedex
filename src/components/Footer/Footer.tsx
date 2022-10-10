import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>LuciLua@2022</span>
        <SocialMedia />
      </div>
    </footer>

  )
}

export default Footer;
