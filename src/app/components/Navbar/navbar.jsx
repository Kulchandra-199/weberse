import React from 'react';
import styles from "./nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../../assets/images/logo.svg"
import Image from 'next/image';
import search from "../../../../assets/icons/search.svg"
import dropdown from "../../../../assets/icons/dropdown.svg"
import hamburger from "../../../../assets/icons/hamburger.svg"

const navbar = () => {
    return (
        <div className={styles.nav}><div className={styles.nav_right}><Image src={Logo} height={200} width={200} alt='logo' /></div>
            <div className={styles.nav_center}>
                <ul>
                    <li>HOME </li>
                    <li>ABOUT <i class="bi bi-chevron-down"></i></li>
                    <li>SERVICES <Image src={dropdown} /></li>
                    <li>PORTFOLIO <Image src={dropdown} /></li>
                    <li>PRICING <Image src={dropdown} /></li>

                </ul></div>
            <div className={styles.nav_left}><div className={styles.nav_search}><Image src={search} /></div>
                <div className={styles.nav_hamburger}>
                    <Image src={hamburger} />
                </div>
            </div>
        </div>
    )
}

export default navbar;
