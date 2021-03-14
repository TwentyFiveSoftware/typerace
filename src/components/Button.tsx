import React, { FunctionComponent } from 'react';
import styles from '../styles/Button.module.scss';

const Button: FunctionComponent<{ text: string; onClick: Function; small?: boolean }> = ({
    text,
    onClick,
    small = false,
}) => (
    <div className={small ? styles.button__small : styles.button} onClick={() => onClick()}>
        {text}
    </div>
);

export default Button;
