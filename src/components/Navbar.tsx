"use client";

import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";

const Navbar = () => {
    const [isExternalProfilesNavVisible, setIsExternalProfilesNavVisible] = useState(false);
    const [isSourceCodeNavVisible, setIsSourceCodeNavVisible] = useState(false);

    return (
        <div className={styles.topNav}>
            <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} href="/">Home</Link>
            <div
                className={`${styles.topNavLink} ${styles.topNavLinkLeft}`}
                onMouseEnter={() => setIsExternalProfilesNavVisible(true)} onMouseLeave={() => setIsExternalProfilesNavVisible(false)}
            >
                External Profiles <ChevronDownIcon size={16} />
                {isExternalProfilesNavVisible && (
                    <div className={styles.dropdown}>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/linkedin">My LinkedIn</Link>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/github">My GitHub</Link>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/ms-learn">MS Learn</Link>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkLeft}`} target="_blank" href="/credly">Credly</Link>
                    </div>
                )}
            </div>
            <div
                className={`${styles.topNavLink} ${styles.topNavLinkRight}`}
                onMouseEnter={() => setIsSourceCodeNavVisible(true)} onMouseLeave={() => setIsSourceCodeNavVisible(false)}
            >
                Source Code <ChevronDownIcon size={16} />
                {isSourceCodeNavVisible && (
                    <div className={styles.dropdown}>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkRight}`} target="_blank" href="/github/Terraform/tree/main/projects/myself/">IaC</Link>
                        <Link className={`${styles.topNavLink} ${styles.topNavLinkRight}`} target="_blank" href="/github/MicahWW/">Website</Link>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Navbar;