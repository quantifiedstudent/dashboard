import NextLink from 'next/link'
import styles from './Header.module.css'
import Routes from './Routes'
import Logo from "./Logo";

export default function Header() {
    return <div className={styles.container}>
        <div className={styles.items}>
            <NextLink href={'/'}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
            </NextLink>
            <Routes/>
        </div>
    </div>
}
