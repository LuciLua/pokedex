import styles from "./Header.module.scss";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/pokemon.svg" alt="Logo" />
      </div>
      <div className={styles.social}>
        <ul>
          <li>
            {/* <Link passHref href='https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/'> */}
            <Link passHref href='/'>
              <a>
                <AiFillLinkedin color="#FFF" />
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href='https://github.com/LuciLua'>
              <a>
                <AiFillGithub color="#FFF" />
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href='https://twitter.com/L4dev'>
              <a>
                <AiOutlineTwitter color="#FFF" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
