import React, { FunctionComponent } from 'react';
import styles from '../styles/InputBox.module.scss';

const InputBox: FunctionComponent<{ label: string }> = ({ label }) => {
    return (
        <div className={styles.box}>
            <div className={styles.label}>{label}</div>
            <input type={'text'} className={styles.inputBox} />
        </div>
    );
};

export default InputBox;
