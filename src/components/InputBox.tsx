import React, { FunctionComponent } from 'react';
import styles from '../styles/InputBox.module.scss';

type InputBoxParams = {
    label: string;
    value: string;
    onChange: Function;
};

const InputBox: FunctionComponent<InputBoxParams> = ({ label, value, onChange }) => {
    return (
        <div className={styles.box}>
            <div className={styles.label}>{label}</div>
            <input type={'text'} className={styles.inputBox} value={value} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default InputBox;
