import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import styles from "./SocialMedia.module.scss";

function SocialMedia() {
    return (
        <div className={styles.social}>
            <ul>
                <li>
                    <Link
                        passHref
                        href='https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/'
                        title="LinkedIn">
                        <a
                            title="LinkedIn">
                            <AiFillLinkedin color="#FFF" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link
                        passHref
                        href='https://github.com/LuciLua'
                        title="GitHub">
                        <a
                            title="GitHub">
                            <AiFillGithub color="#FFF" />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link
                        passHref
                        href='https://twitter.com/L4dev'
                        title="Twitter">
                        <a
                            title="Twitter">
                            <AiOutlineTwitter color="#FFF" />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia