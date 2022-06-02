import QSLogo from '../../../public/QSLogo.png'
import Image from 'next/image';
import styles from './Header.module.css'

export default function Logo() {

    return <div className={styles.logoContainer}>
        <Image height={'80px'} width={'152.3px'} src={QSLogo}/>
    </div>
}
