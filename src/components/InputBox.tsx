import React, { FunctionComponent } from 'react';
import styles from '../styles/InputBox.module.scss';

type InputBoxParams = {
    label: string;
    value: string;
    onChange: Function;
    length?: number;
    error?: boolean;
};

const InputBox: FunctionComponent<InputBoxParams> = ({ label, value, onChange, length = 30, error = false }) => {
    return (
        <div className={styles.box}>
            <div className={error ? styles.label__error : styles.label}>{label}</div>
            <input
                type={'text'}
                className={error ? styles.inputBox__error : styles.inputBox}
                maxLength={length}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputBox;
