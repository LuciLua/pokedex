import Image from "next/image";
import styles from "./Header.module.scss";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/pokemon.svg" alt="" />
      </div>
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
    </div>
  );
}

export default Header;
