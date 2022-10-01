import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import styles from "./Footer.module.scss";
function Footer() {
  return (
  <footer className={styles.footer}>
    <span>LuciLua@2021</span>
    <div className={styles.social}>
        <ul>
          <li>
            <Link href={'https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/'}>
              <AiFillLinkedin color="#FFF" />
            </Link>
          </li>
          <li>
            <Link href={'https://github.com/LuciLua'}>
              <AiFillGithub color="#FFF" />
            </Link>
          </li>
          <li>
            <Link href={'https://twitter.com/L4dev'}>
              <AiOutlineTwitter color="#FFF" />
            </Link>
          </li>
        </ul>
      </div>
  </footer>
  
  )
}

export default Footer;
