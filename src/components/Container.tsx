import React, { FunctionComponent } from 'react';
import styles from '../styles/Container.module.scss';

const Container: FunctionComponent<{ small?: boolean }> = ({ children, small = false }) => {
    return <section className={small ? styles.container__small : styles.container}>{children}</section>;
};

export default Container;
