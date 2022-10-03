import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>LuciLua@2022</span>
        <div className={styles.social}>
          <ul>
            <li>
              <Link href={'https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/'}>
                <a>
                  <AiFillLinkedin color="#FFF" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={'https://github.com/LuciLua'}>
                <a>
                  <AiFillGithub color="#FFF" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={'https://twitter.com/L4dev'}>
                <a>
                  <AiOutlineTwitter color="#FFF" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
