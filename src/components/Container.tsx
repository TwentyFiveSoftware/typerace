import React, { FunctionComponent } from 'react';
import styles from '../styles/Container.module.scss';

const Container: FunctionComponent = ({ children }) => {
    return <section className={styles.container}>{children}</section>;
};

export default Container;
