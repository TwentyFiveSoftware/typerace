import React, { FunctionComponent } from 'react';
import styles from '../styles/ProgressInfoContainer.module.scss';
import { ProgressInfo } from '../type/ProgressInfo';

const ProgressInfoContainer: FunctionComponent<ProgressInfo> = ({
    text,
    currentTextPosition,
    typingSpeed,
    timePassed,
}) => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div className={styles.table}>
                    <span className={styles.text__light}>
                        <div>{text.substring(0, currentTextPosition)}</div>
                    </span>
                    <span className={styles.text}>{text[currentTextPosition]}</span>
                    <span className={styles.text}>{text.substring(currentTextPosition + 1)}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <span className={styles.text}>{typingSpeed}</span>
                    <span className={styles.text__light}>K/min</span>
                </div>
                <div>
                    <span className={styles.text}>{currentTextPosition}</span>
                    <span className={styles.text__light}>/</span>
                    <span className={styles.text}>{text.length}</span>
                    <span className={styles.text__light}>letters typed</span>
                </div>
                <div>
                    <span className={styles.text}>{Math.floor((currentTextPosition * 100) / text.length)}</span>
                    <span className={styles.text__light}>% completed</span>
                </div>
                <div>
                    <span className={styles.text}>{timePassed}</span>
                    <span className={styles.text__light}>s passed</span>
                </div>
            </div>
        </section>
    );
};

export default ProgressInfoContainer;
