import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href={'#'}>
                {/* {/* <a> */}
                <Image
                    src={'/assets/webstep_logo.svg'}
                    width={52}
                    height={37}
                    alt={'Webstep'}
                />
                {/* </a> */}
            </Link>
            {/* <div className={styles.middleSection}>
                <Link href={'#'}>Samarbeid</Link>
                <div className={styles.rectangle}></div>
                <Link href={'#'}>Ansatte</Link>
            </div>
            <div className={styles.menu}>
                <div>Meny</div>
                <div className={styles.hamburgerMenu}></div>
            </div> */}
        </nav>
    )
}

export default Navbar
