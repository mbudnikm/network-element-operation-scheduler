import React from "react";
import styles from "./Header.module.scss"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <img src={logo} className={`${styles.logo}`} alt="logo" />
            <span className={`${styles.appTitle}`}>Network Element Operation Scheduler</span>
        </div>
    )
}

export default Header;