import styles from "@/styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.topNav}>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} href="/">Home</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank"  href="https://www.linkedin.com/in/micah-w-warren/">My LinkedIn</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank"  href="https://github.com/MicahWW/">My GitHub</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkRight}`} target="_blank" href="https://github.com/MicahWW/MicahWW/">Source Code</Link>
        </div>
    )
}

export default Navbar;