import React from 'react';
import styles from '../styles/Header.module.scss';
import logo from '../assets/twentyfivesoftware-logo.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt={''} className={styles.logo} />
        </div>
    );
};

export default Header;
