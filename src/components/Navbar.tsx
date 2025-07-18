import styles from "@/styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.topNav}>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} href="/">Home</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank"  href="/linkedin">My LinkedIn</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank"  href="/github">My GitHub</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/ms-learn">MS Learn</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/credly">Credly</Link>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkRight}`} target="_blank" href="/github/MicahWW/">Source Code</Link>
        </div>
    )
}

export default Navbar;