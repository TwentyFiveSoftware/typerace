import React, { FunctionComponent } from 'react';
import styles from '../styles/Button.module.scss';

const Button: FunctionComponent<{ text: string; onClick: Function }> = ({ text, onClick }) => (
    <div className={styles.button} onClick={() => onClick()}>
        {text}
    </div>
);

export default Button;
