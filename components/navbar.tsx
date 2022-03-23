import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbarbox}>
      <Link href={"#"}>
        <a>
          <Image
            src={"/assets/logoWebstepWhite.svg"}
            width={52}
            height={37}
            alt={"whitelogo"}
          />
        </a>
      </Link>
      <div className={styles.navbar2}>
        <Link href={"#"}>Samarbeid</Link>
        <div className={styles.rectangle}></div>
        <Link href={"#"}>Ansatte</Link>
      </div>
      <div className={styles.menu}>
        <div>Meny</div>
        <div className={styles.hamburgerMenu}></div>
      </div>
    </div>
  );
};

export default Navbar;
